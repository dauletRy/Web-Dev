import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  selectedImage: string = '';
  currentIndex: number = 0;

  liked = false;

  like() {
    this.product.likes++;
    this.liked = true;

  setTimeout(() => {
    this.liked = false;
  }, 360);
  }

  remove() {
  if (confirm('Delete this product?')) {
    this.delete.emit(this.product.id);
  }
}

  ngOnInit() {
    this.selectedImage = this.product.images[0];
  }

  changeImage(img: string) {
    this.selectedImage = img;
    this.currentIndex = this.product.images.indexOf(img);
  }

  nextImage() {
    this.currentIndex =
      (this.currentIndex + 1) % this.product.images.length;

    this.selectedImage =
      this.product.images[this.currentIndex];
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.product.images.length) %
      this.product.images.length;

    this.selectedImage =
      this.product.images[this.currentIndex];
  }


  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=Посмотри на этот товар: ${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  getFilledStars(): number[] {
    return Array(Math.floor(this.product.rating)).fill(0);
  }

  getEmptyStars(): number[] {
    return Array(5 - Math.floor(this.product.rating)).fill(0);
  }

}
