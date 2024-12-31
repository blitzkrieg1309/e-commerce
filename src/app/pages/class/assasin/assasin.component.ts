import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServantClassService } from '../../../services/servant-class.service';

@Component({
  selector: 'app-assasin',
  standalone: false,

  templateUrl: './assasin.component.html',
  styleUrl: './assasin.component.css',
})
export class AssasinComponent implements OnInit {
  assasin: any[] = [];

  constructor(
    private router: Router,
    private servantClassService: ServantClassService
  ) {}

  ngOnInit() {
    this.fetchServantClass();
  }

  fetchServantClass() {
    this.servantClassService.getAssassin().subscribe((data: any) => {
      this.assasin = data;
    });
  }

  goToProductDetails(ProductId: string): void {
    this.router.navigate(['/servants', ProductId]);
  }
}
