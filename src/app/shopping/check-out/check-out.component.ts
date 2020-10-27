import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AuthService } from 'shared/services/auth.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
 
  cart$: Observable<ShoppingCart>;
  cartSubscription: Subscription;
  

  constructor(    
    private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }
  
  

  
}
