import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data-service/data.service';
import { Product } from 'src/shared/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listProduct: Observable<Product[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.listProduct = this.dataService.GetList();
  }

}
