import { Component } from '@angular/core';
import { ModelCard } from "../model-card/model-card";

@Component({
  selector: 'app-main',
  imports: [ModelCard],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
