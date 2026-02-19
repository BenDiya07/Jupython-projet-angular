import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  forkJoin,
  map,
  of,
  tap,
  throwError,
} from 'rxjs';

import { Article, MediumRSSResponse } from '../../models/resource.model';

@Injectable({ providedIn: 'root' })
export class RessourceService {
  private sources: string[] = [
    'https://medium.com/feed/@benitdiyavanga',
    'https://medium.com/feed/@exaucemavinga645',
  ];

  // API alternative plus stable que rss2json
  private readonly baseUrl =
    'https://feed2json.org/convert?url=';

  private cachedArticles: Article[] | null = null;

  constructor(private http: HttpClient) {}

  //description
  private extractImage(description: string): string {
    const fallback =
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop';

    const match = description?.match(
      /<img[^>]+src=["']([^"']+)["']/
    );

    return match ? match[1] : fallback;
  }

  // Refresh manuel
  refreshArticles(): Observable<Article[]> {
    this.cachedArticles = null;
    return this.getArticles();
  }

  // Fetch articles
  getArticles(): Observable<Article[]> {
    if (this.cachedArticles) {
      return of(this.cachedArticles);
    }

    const requests = this.sources.map((url) =>
      this.http
        .get<any>(`${this.baseUrl}${encodeURIComponent(url)}`)
        .pipe(
          catchError((err) => {
            console.warn('Flux Medium inaccessible :', url);
            return of(null);
          })
        )
    );

    return forkJoin(requests).pipe(
      map((responses) => {
        const articles = responses
          .filter((res) => res?.items?.length)
          .flatMap((res) =>
            res.items.map((item: Article) => ({
              ...item,

              thumbnail:
                item.thumbnail ||
                this.extractImage(item.description),

              author:
                item.author ||
                item['creator'] ||
                res.feed?.title?.replace('Stories by ', '') ||
                'Expert Jupython',
            }))
          )
          .sort(
            (a, b) =>
              new Date(b.pubDate).getTime() -
              new Date(a.pubDate).getTime()
          );

        if (articles.length === 0) {
          throw new Error('Aucun article trouvé');
        }

        return articles;
      }),

      tap((articles) => (this.cachedArticles = articles)),

      catchError(() =>
        throwError(() => new Error('Erreur lors du chargement'))
      )
    );
  }
}
