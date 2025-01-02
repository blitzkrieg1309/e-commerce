import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServantClassService } from '../../../services/servant-class.service';

@Component({
  selector: 'app-saber',
  standalone: false,

  templateUrl: './saber.component.html',
  styleUrl: './saber.component.css',
})
export class SaberComponent implements OnInit {
  saber: any[] = [];

  constructor(
    private router: Router,
    private servantClassService: ServantClassService
  ) {}

  ngOnInit() {
    this.fetchServantClass();
  }

  fetchServantClass() {
    this.servantClassService.getSaber().subscribe((data: any) => {
      this.saber = data;
    });
  }

  goToProductDetails(ProductId: string): void {
    this.router.navigate(['/servants', ProductId]);
  }
}
