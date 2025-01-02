import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServantClassService } from '../../../services/servant-class.service';

@Component({
  selector: 'app-berserker',
  standalone: false,

  templateUrl: './berserker.component.html',
  styleUrl: './berserker.component.css',
})
export class BerserkerComponent implements OnInit {
  berserker: any = [];

  constructor(
    private router: Router,
    private servantClassService: ServantClassService
  ) {}

  ngOnInit(): void {
    this.fetchServantClass();
  }

  fetchServantClass() {
    this.servantClassService.getBerserker().subscribe((data: any) => {
      this.berserker = data;
    });
  }

  goToProductDetails(ProductId: string): void {
    this.router.navigate(['servants', ProductId]);
  }
}
