import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private youtubeService: YoutubeService, private router: Router) {}

  showSort = false;

  downloadDb() {
    this.youtubeService.downloadDb();
    this.router.navigate(['main']);
  }
}
