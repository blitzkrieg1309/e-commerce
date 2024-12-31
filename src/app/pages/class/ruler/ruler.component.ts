import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServantClassService } from '../../../services/servant-class.service';

@Component({
  selector: 'app-ruler',
  standalone: false,

  templateUrl: './ruler.component.html',
  styleUrl: './ruler.component.css',
})
export class RulerComponent implements OnInit {
  ruler: any[] = [];

  constructor(
    private router: Router,
    private servantClassService: ServantClassService
  ) {}
  ngOnInit(): void {
    this.fetchServantClass();
  }

  fetchServantClass() {
    this.servantClassService.getRuler().subscribe((data: any) => {
      this.ruler = data;
    });
  }

  goToProductDetail(productId: string): void {
    this.router.navigate(['/servants', productId]);
  }
}
