import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RemoveProduct } from 'src/shared/actions/product.action';
import { Product } from 'src/shared/models/product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})

export class BasketComponent implements OnInit {

  listProduct: Observable<Map<Product, number>>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.listProduct = this.store.select(state => state.basket.products)
      .pipe(
        map(list => {
          let mapList: Map<Product, number> = new Map<Product, number>();

          list.forEach((value) => {
            if(mapList.has(value))
              mapList.set(value, mapList.get(value)+1);
            else
              mapList.set(value, 1);
          });
          
          return mapList;
        }
      ));
  }

  removeFromBasket(id: number){
    this.store.dispatch(new RemoveProduct(id));
  }

}
