import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  public articles: Article[] = [];
  public pageTitle: string = 'Liverpool FC News';
  public currentPage: number = 1;
  public isLoading: boolean = false;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.loadLiverpoolNews();
  }

  // Cargar noticias del Liverpool
  loadLiverpoolNews() {
    this.isLoading = true;
    this.newsService.getLiverpoolNews()
      .subscribe({
        next: (articles) => {
          this.articles = articles;
          this.isLoading = false;
          console.log('Noticias del Liverpool cargadas:', articles);
        },
        error: (error) => {
          console.error('Error cargando noticias:', error);
          this.isLoading = false;
        }
      });
  }

  // Cargar más noticias (paginación)
  loadData() {
    this.currentPage++;
    this.newsService.getMoreLiverpoolNews(this.currentPage)
      .subscribe({
        next: (articles) => {
          if (articles.length === 0) {
            this.infiniteScroll.disabled = true;
            return;
          }
          
          this.articles = [...this.articles, ...articles];
          this.infiniteScroll.complete();
        },
        error: (error) => {
          console.error('Error cargando más noticias:', error);
          this.infiniteScroll.complete();
        }
      });
  }

  // Recargar noticias
  refreshNews(event: any) {
    this.currentPage = 1;
    this.loadLiverpoolNews();
    event.target.complete();
  }
}
