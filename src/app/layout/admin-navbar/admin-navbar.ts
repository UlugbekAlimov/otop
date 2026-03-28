import { Component } from '@angular/core';
import { RouterLink,  } from '@angular/router';

@Component({
  selector: 'admin-navbar',
  imports: [RouterLink,],
  templateUrl: './admin-navbar.html',
  styleUrl: './admin-navbar.css',
})
export class AdminNavbar {
}
