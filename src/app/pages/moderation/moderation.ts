import { Component } from '@angular/core';
import { AdminNavbar } from '../../layout/admin-navbar/admin-navbar';

type ModerationStatus = 'pending' | 'in_review' | 'approved' | 'rejected';

interface ModelApplication {
  id: number;
  modelName: string;
  category: string;
  author: string;
  createdAt: string;
  source: string;
  status: ModerationStatus;
  reason?: string;
}

@Component({
  selector: 'app-moderation',
  imports: [AdminNavbar],
  templateUrl: './moderation.html',
  styleUrl: './moderation.css',
})
export class Moderation {
  applications: ModelApplication[] = [
    {
      id: 1842,
      modelName: 'Astra Noir',
      category: 'Fashion',
      author: 'mia.studio',
      createdAt: '2026-03-27 19:12',
      source: 'Telegram Bot',
      status: 'pending',
    },
    {
      id: 1841,
      modelName: 'Niko Ember',
      category: 'Lifestyle',
      author: 'niko.team',
      createdAt: '2026-03-27 18:44',
      source: 'Web Form',
      status: 'in_review',
    },
    {
      id: 1839,
      modelName: 'Luna Vale',
      category: 'Cosplay',
      author: 'luna.creator',
      createdAt: '2026-03-27 16:09',
      source: 'Web Form',
      status: 'approved',
    },
    {
      id: 1837,
      modelName: 'Raven Flux',
      category: 'Art',
      author: 'flux.media',
      createdAt: '2026-03-27 14:25',
      source: 'Telegram Bot',
      status: 'rejected',
      reason: 'Missing portfolio links',
    },
    {
      id: 1836,
      modelName: 'Iris Kade',
      category: 'Fitness',
      author: 'ikade.pro',
      createdAt: '2026-03-27 13:57',
      source: 'Web Form',
      status: 'pending',
    },
  ];

  selectedStatus: 'all' | ModerationStatus = 'all';

  get filteredApplications(): ModelApplication[] {
    if (this.selectedStatus === 'all') {
      return this.applications;
    }

    return this.applications.filter((application) => application.status === this.selectedStatus);
  }

  get pendingCount(): number {
    return this.applications.filter((application) => application.status === 'pending').length;
  }

  get inReviewCount(): number {
    return this.applications.filter((application) => application.status === 'in_review').length;
  }

  get approvedCount(): number {
    return this.applications.filter((application) => application.status === 'approved').length;
  }

  get rejectedCount(): number {
    return this.applications.filter((application) => application.status === 'rejected').length;
  }

  setFilter(status: 'all' | ModerationStatus) {
    this.selectedStatus = status;
  }

  approveApplication(id: number) {
    this.updateStatus(id, 'approved');
  }

  rejectApplication(id: number) {
    this.updateStatus(id, 'rejected');
  }

  moveToReview(id: number) {
    this.updateStatus(id, 'in_review');
  }

  private updateStatus(id: number, status: ModerationStatus) {
    this.applications = this.applications.map((application) =>
      application.id === id
        ? {
            ...application,
            status,
            reason:
              status === 'rejected' ? (application.reason ?? 'Rejected by moderator') : undefined,
          }
        : application,
    );
  }

  trackById(index: number, application: ModelApplication): number {
    return application.id;
  }
}
