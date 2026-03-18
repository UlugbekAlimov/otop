import { Component } from '@angular/core';

@Component({
  selector: 'app-model-card',
  imports: [],
  templateUrl: './model-card.html',
  styleUrl: './model-card.css',
})
export class ModelCard {
  filterBtn = [
    { name: 'Top', icon: '/assets/star.svg' },
    { name: 'Hottest', icon: '/assets/fire.svg' },
    { name: 'Popular', icon: '/assets/line.svg' },
  ];

  cards = [
    {
      name: 'Isabella Moon',
      description: 'Artist & creative soul sharing my journey',
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Isabella Moon',
      description: 'Artist & creative soul sharing my journey',
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Isabella Moon',
      description: 'Artist & creative soul sharing my journey',
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    },
  ];
}
