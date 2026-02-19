import { Routes } from '@angular/router';
import { adminGuard } from './core/guards/admin.guard/admin.guard';
import { authGuard } from './core/guards/auth.guard/auth.guard';
import { About } from './pages/about/about';
import { AdminDashboard } from './pages/admin-panel/admin-dashboard/admin-dashboard';
import { AdminPanel } from './pages/admin-panel/admin-panel';
import { Home } from './pages/home/home';
import Login from './pages/login/login';
import { ManageCertificates } from './pages/manage/manage-certificate/manage-certificate';
import { Ranking } from './pages/ranking/ranking';
import { Register } from './pages/register/register';
import { Ressources } from './pages/ressources/ressources';
import { ManageUsers } from './pages/manage/manage-users/manage-users';
import { ManageContent } from './pages/manage-content/manage-content';
import { ManageLeaderboard } from './pages/manage/manage-leaderboard/manage-leaderboard';
import { ManageSettings } from './pages/manage/manage-settings/manage-settings';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'ranking', component: Ranking },
  { path: 'about', component: About },
  { path: 'ressources', component: Ressources },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [authGuard]
  },
  {
    path: 'admin',
    component: AdminDashboard,
    canActivate: [adminGuard] // Protection activée
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'admin', component: AdminPanel, canActivate: [adminGuard] },
  { 
    path: 'admin/certificates', 
    component: ManageCertificates, // Assure-toi que le nom du composant est correct
    canActivate: [adminGuard]      // Sécurité pour que seuls les admins y accèdent
  },
  { path: 'admin/users', component: ManageUsers, canActivate: [adminGuard] },
  { path: 'admin/content', component: ManageContent, canActivate: [adminGuard] },
  { path: 'admin/leaderboard', component: ManageLeaderboard, canActivate: [adminGuard] },
  { path: 'admin/settings', component: ManageSettings, canActivate: [adminGuard] },

  { path: '**', redirectTo: '' },

];
