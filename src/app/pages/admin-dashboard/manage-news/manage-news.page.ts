import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/News';
import { Subject, Observable, throwError } from 'rxjs';
import { takeUntil, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-manage-news',
  templateUrl: './manage-news.page.html',
  styleUrls: ['./manage-news.page.scss'],
})
export class ManageNewsPage implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  newsList$: Observable<News[]>;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsList$ = this.newsService.getAllNews().pipe(
      takeUntil(this.destroy$),
      map((newsList) => {
        return newsList.sort((a, b) => b.date - a.date);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  addBreakinNews() {
    //TODO 
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
