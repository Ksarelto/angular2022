import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { IItem } from 'src/app/youtube/models/item.model';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import * as ItemsActions from '../actions/items.action';

@Injectable({
  providedIn: 'root',
})
export class ItemsEffects {
  fetchItems$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(ItemsActions.fetchItems),
      switchMap((action) =>
        this.youtube.getVideos(action.ids).pipe(
          map((data: any) => ItemsActions.fetchItemsSuccess({ items: data.items as IItem[] })),
          catchError(() => of(ItemsActions.fetchItemsError)),
        ),
      ),
    );
  });

  constructor(private actions$: Actions, private youtube: YoutubeService) {}
}
