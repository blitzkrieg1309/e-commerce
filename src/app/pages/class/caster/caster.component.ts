import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServantClassService } from '../../../services/servant-class.service';

@Component({
  selector: 'app-caster',
  standalone: false,

  templateUrl: './caster.component.html',
  styleUrl: './caster.component.css',
})
export class CasterComponent implements OnInit {
  caster: any[] = [];

  constructor(
    private router: Router,
    private servantClassService: ServantClassService
  ) {}

  ngOnInit(): void {
    this.fetchServantClass();
  }

  fetchServantClass() {
    this.servantClassService.getCaster().subscribe((data: any) => {
      this.caster = data;
    });
  }

  goToProductDetails(ProductId: string): void {
    this.router.navigate(['servants', ProductId]);
  }
}
