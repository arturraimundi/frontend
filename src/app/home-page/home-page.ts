import { Component } from '@angular/core';
import { NgIf } from "@angular/common";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [NgIf, RouterModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  showSecond = false
  showTutorial = false
  showModoDeUso = false
  modoDeUso() {
    this.showModoDeUso = true;
  }
  showNext() {
    this.showSecond = !this.showSecond;
  }
  showTutorials() {
    this.showTutorial = true;
  }
}
