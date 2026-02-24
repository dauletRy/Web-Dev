import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/components/product-list/product-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  protected readonly title = signal('online-store');

  categories: Category[] = [];
  selectedCategory?: Category;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = productService.getCategories();
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.products =
      this.productService.getProductsByCategory(category.id);
  }

}