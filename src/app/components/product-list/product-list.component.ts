import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/interfaces/product';
import { SelectedFilter } from 'src/app/interfaces/selected-filter';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public listProductObs: Observable<Product[]>;
  public listFilteredProductObs: Observable<Product[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.listProductObs = this.dataService.GetList();
    this.listFilteredProductObs = this.listProductObs;
  }

  onFilterChange(filter: SelectedFilter): void {
    this.listFilteredProductObs = this.listProductObs.pipe(
      map(data => {
        return data.filter((value: Product) => {
          switch (filter.global) {
            case 'gender':
              if(filter.detail !== "") return value.Gender == filter.detail;
              else return true;
            case 'name':
              if (filter.detail !== '') return value.Name.toLowerCase().indexOf(filter.detail.toLowerCase()) > -1;
              else return true;
            case 'breed':
              if (filter.detail !== '') return value.Breed.toLowerCase().indexOf(filter.detail.toLowerCase()) > -1;
              else return true;
            default:
              return true;
          }
        });
      }));
  }
}
