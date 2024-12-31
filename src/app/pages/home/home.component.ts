import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToSaber() {
    this.router.navigate(['/class/saber']);
  }

  goToArcher() {
    this.router.navigate(['/class/archer']);
  }

  goToLancer() {
    this.router.navigate(['/class/lancer']);
  }

  goToRider() {
    this.router.navigate(['/class/rider']);
  }

  goToCaster() {
    this.router.navigate(['/class/caster']);
  }

  goToAssassin() {
    this.router.navigate(['/class/assassin']);
  }

  goToBerserker() {
    this.router.navigate(['/class/berserker']);
  }

  goToRuler() {
    this.router.navigate(['/class/ruler']);
  }
}
