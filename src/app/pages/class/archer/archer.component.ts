import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServantClassService } from '../../../services/servant-class.service';

@Component({
  selector: 'app-archer',
  standalone: false,

  templateUrl: './archer.component.html',
  styleUrl: './archer.component.css',
})
export class ArcherComponent implements OnInit {
  acher: any[] = [];

  ngOnInit(): void {
    this.fetchServantClass();
  }

  constructor(
    private router: Router,
    private servantClassService: ServantClassService
  ) {}

  fetchServantClass() {
    this.servantClassService.getArcher().subscribe((data: any) => {
      this.acher = data;
    });
  }

  goToProductDetails(ProductId: string): void {
    this.router.navigate(['/servants', ProductId]);
  }
}
