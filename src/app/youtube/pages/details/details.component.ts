import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from '../../models/item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  item: IItem;

  constructor(private route: ActivatedRoute, private service: YoutubeService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.item = this.service.getOneById(id);
    });
  }

  goBack() {
    window.history.back();
  }
}
