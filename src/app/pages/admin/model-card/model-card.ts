import { Component } from '@angular/core';

@Component({
  selector: 'model-card',
  imports: [],
  templateUrl: './model-card.html',
})
export class ModelCard {
  model = {
    name: 'Sophia Rose',
    description: 'Fitness enthusiast & lifestyle creator',
    image: './assets/gr.jpg',
    tags: ['Fitness', 'Brunette', 'Verified'],
    statuses: [
      { label: 'Verified', className: 'bg-blue-500/20 text-blue-400' },
      { label: 'Online', className: 'bg-yellow-500/20 text-yellow-400' },
    ],
  };
}
