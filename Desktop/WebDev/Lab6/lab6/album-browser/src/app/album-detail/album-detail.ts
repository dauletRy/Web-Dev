import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div *ngIf="album">
      <h2>Album Details</h2>

      <p>ID: {{ album.id }}</p>
      <p>User ID: {{ album.userId }}</p>

      <input [(ngModel)]="album.title">
      <button (click)="save()">Save</button>

      <br><br>

      <a [routerLink]="['/albums', album.id, 'photos']">
        View Photos
      </a>

      <br><br>

      <button (click)="goBack()">Back</button>
    </div>
  `
})
export class AlbumDetailComponent implements OnInit {

  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
    });
  }

  save() {
    this.albumService.updateAlbum(this.album).subscribe();
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}