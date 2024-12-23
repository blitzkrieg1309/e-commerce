import { Component, OnInit } from '@angular/core';
import { Servant } from '../../servant';
import { ServantListService } from '../../services/servant-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servant-list',
  standalone: false,

  templateUrl: './servant-list.component.html',
  styleUrl: './servant-list.component.css',
})
export class ServantListComponent implements OnInit {
  servants: Servant[] = [];
  filteredServants: Servant[] = [];
  searchQuery: string = '';
  classFilter: string = '';
  starFilter: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 12;

  constructor(
    private servantListService: ServantListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): void {
    this.servantListService.getProduct().subscribe(
      (data: Servant[]) => {
        // console.log('Servants:', data);
        this.servants = data;
        this.applyFilters();
      },
      (error) => {
        console.error('Error fetching Servants', error);
      }
    );
  }

  applyFilters(): void {
    let filtered = [...this.servants];

    // Filter by star
    if (this.starFilter && this.starFilter !== 'all') {
      const star = parseInt(this.starFilter, 10);
      filtered = filtered.filter((servant) => servant.star === star);
    }

    // Filter by class
    if (this.classFilter && this.classFilter !== 'all') {
      filtered = filtered.filter(
        (servant) =>
          servant.class.toLowerCase() === this.classFilter.toLowerCase()
      );
    }

    // Filter by search query
    if (this.searchQuery.trim() !== '') {
      filtered = filtered.filter((servant) =>
        servant.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Pagination
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.filteredServants = filtered.slice(startIndex, endIndex);

    // Log hasil filtering
    // console.log('Filtered Servants:', this.filteredServants);
  }

  onSearch(event: Event): void {
    const selectElement = event.target as HTMLInputElement;
    const value = selectElement.value;
    this.searchQuery = value;
    this.applyFilters();
  }

  onClassFilter(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;
    this.classFilter = value;
    this.applyFilters();
  }

  onStarFilter(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;
    this.starFilter = value;
    this.applyFilters();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.applyFilters();
  }

  goToProductDetail(productId: string): void {
    this.router.navigate(['/servants', productId]);
  }
}
