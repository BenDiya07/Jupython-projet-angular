import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-admin-charts',
  standalone: true,
  template: `
    <div class="row g-4">
      <div class="col-md-8">
        <div class="card bg-jupython-dark border-secondary p-3">
          <h6 class="text-secondary small fw-bold">INSCRIPTIONS (7 DERNIERS JOURS)</h6>
          <canvas #lineChart></canvas>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card bg-jupython-dark border-secondary p-3">
          <h6 class="text-secondary small fw-bold">RÉPARTITION PAR PLATEFORME</h6>
          <canvas #doughnutChart></canvas>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .bg-jupython-dark { background-color: #1a1d21; }
    canvas { max-height: 250px; }
  `]
})
export class AdminCharts implements AfterViewInit {
  @ViewChild('lineChart') lineChartCanvas!: ElementRef;
  @ViewChild('doughnutChart') doughnutChartCanvas!: ElementRef;

  ngAfterViewInit() {
    this.createLineChart();
    this.createDoughnutChart();
  }

  createLineChart() {
    new Chart(this.lineChartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
          label: 'Nouveaux Étudiants',
          data: [12, 19, 15, 25, 22, 30, 45],
          borderColor: '#f39c12',
          backgroundColor: 'rgba(243, 156, 18, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: { plugins: { legend: { display: false } } }
    });
  }

  createDoughnutChart() {
    new Chart(this.doughnutChartCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Cisco', 'Microsoft', 'IBM'],
        datasets: [{
          data: [40, 35, 25],
          backgroundColor: ['#00b4d8', '#f39c12', '#ffffff'],
          borderWidth: 0
        }]
      },
      options: { cutout: '70%' }
    });
  }
}