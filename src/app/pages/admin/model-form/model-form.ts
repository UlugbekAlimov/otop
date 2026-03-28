import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'model-form',
  imports: [],
  templateUrl: './model-form.html',
})
export class ModelForm {
  @Output() cancel = new EventEmitter<void>();
  tags = [
    { id: 'asian', label: 'Asian', checked: true },
    { id: 'latina', label: 'Latina', checked: false },
    { id: 'milf', label: 'MILF', checked: true },
    { id: 'blonde', label: 'Blonde', checked: false },
    { id: 'brunette', label: 'Brunette', checked: true },
    { id: 'petite', label: 'Petite', checked: false },
    { id: 'curvy', label: 'Curvy', checked: false },
    { id: 'fitness', label: 'Fitness', checked: false },
    { id: 'gamer', label: 'Gamer', checked: false },
    { id: 'cosplay', label: 'Cosplay', checked: false },
    { id: 'amateur', label: 'Amateur', checked: false },
    { id: 'verified', label: 'Verified', checked: false },
    { id: 'teen', label: 'Teen', checked: false },
    { id: 'trans', label: 'Trans', checked: false },
  ];
  statuses = [
    { id: 'verified-status', label: 'Verified', checked: false },
    { id: 'new-status', label: 'New', checked: false },
    { id: 'online-status', label: 'Online', checked: false },
  ];

  cancelCreate() {
    this.cancel.emit();
  }
}
