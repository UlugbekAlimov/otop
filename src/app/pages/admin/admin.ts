import { Component } from '@angular/core';
import { AdminNavbar } from '../../layout/admin-navbar/admin-navbar';
import { ModelForm } from "./model-form/model-form";
import { ModelCard } from "./model-card/model-card";

@Component({
  selector: 'app-admin',
  imports: [AdminNavbar, ModelForm, ModelCard],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  isCreating = false;

  startCreate() {
    this.isCreating = true;
  }

  cancelCreate() {
    this.isCreating = false;
  }
}
