import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListOfSpellsComponent } from './list-of-spells/list-of-spells.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListOfSpellsComponent, RouterOutlet, RouterLink, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  imageAlt = 'Logo brigandyne';
  imagePath = 'assets/images/logo.png';
  isActiveClassStatus = false;

  toggleIsActiveClass() {
    this.isActiveClassStatus = !this.isActiveClassStatus;
  }
}
