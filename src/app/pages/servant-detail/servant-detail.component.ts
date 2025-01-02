import {
  Component,
  effect,
  OnInit,
  signal,
  runInInjectionContext,
} from '@angular/core';
import { Servant } from '../../servant';
import { ServantListService } from '../../services/servant-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-servant-detail',
  standalone: false,

  templateUrl: './servant-detail.component.html',
  styleUrl: './servant-detail.component.css',
})
export class ServantDetailComponent implements OnInit {
  servant: Servant = {
    id: '',
    name: '',
    description: '',
    price: 0,
    stock: 0,
    image_url: '',
    class: '',
    created_at: new Date(),
    lore: '',
    skill: '',
    noble_phantasm: '',
    star: 0,
  };

  quantity = signal(1);
  isLoggedIn: boolean = false;
  stock = signal(0);

  constructor(
    private servantListService: ServantListService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('servantId');
      if (productId) {
        this.fetchServant(productId);
      }
    });

    effect(() => {
      this.stock.set(this.servant.stock - this.quantity());
      console.log('Stock Updated', this.stock());
    });

    this.isLoggedIn = this.authService.isLoggedIn();
  }

  fetchServant(productId: string) {
    this.servantListService.getProductById(productId).subscribe(
      (data: Servant) => {
        this.servant = data;
        this.stock.set(data.stock - 1);
      },
      (error) => {
        console.error('Error Fetching Servant', error);
      }
    );
  }

  submitToCart() {
    if (this.authService.isTokenExpired()) {
      this.authService.removeToken();
      alert('Session Expired, Please Login Again');
      this.router.navigate(['/login']);
      return;
    }

    this.cartService
      .addToCart({
        product_id: this.servant.id,
        quantity: this.quantity(),
      })
      .subscribe(
        () => {
          alert('Servant Added to Cart');
        },
        (error) => {
          alert('Error Adding Servant to Cart');
        }
      );
  }

  redirectToLogin(): void {
    alert('Please Login to Add Servant to Cart');
    this.router.navigate(['/login']);
  }

  decrementQuantity() {
    if (this.quantity() > 1) {
      this.quantity.update((value) => value - 1);
      this.stock.update((stock) => stock + 1);
    }
  }

  incrementQuantity() {
    // cek apakah stock masih tersedia semisal quantity lebih besar dari stock
    if (this.quantity() >= this.servant.stock) {
      alert('Servant Stock is not Enough');
      return;
    }
    this.quantity.update((value) => value + 1);
    this.stock.update((stock) => stock - 1);
  }
}
