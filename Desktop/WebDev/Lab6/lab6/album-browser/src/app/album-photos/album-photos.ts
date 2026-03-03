import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo.model';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 10px;
    }

    img {
      width: 100%;
      border-radius: 5px;
    }
  `],
  template: `
    <h2>Album Photos</h2>

    <div class="grid">
      <div *ngFor="let photo of photos">
        <img [src]="photo.thumbnailUrl">
        <p>{{ photo.title }}</p>
      </div>
    </div>

    <br>
    <button routerLink="../">Back</button>
  `
})
export class AlbumPhotosComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe(data => {
      this.photos = data;
    });
  }
}