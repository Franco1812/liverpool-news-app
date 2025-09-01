import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { NewsResponse, Article } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

// Fuentes de noticias deportivas para Liverpool
const LIVERPOOL_SPORTS_SOURCES = [
  'bbc-sport',
  'espn',
  'goal',
  'skysports',
  'the-guardian-uk',
  'independent',
  'telegraph',
  'mirror',
  'daily-mail'
].join(',');

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  // Método principal para noticias del Liverpool
  getLiverpoolNews(): Observable<Article[]> {
    return this.http.get<NewsResponse>(`${apiUrl}/everything`, {
      params: {
        apiKey,
        q: 'Liverpool FC OR "Liverpool football" OR "Liverpool soccer" OR "Liverpool team"',
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: '20',
        sources: LIVERPOOL_SPORTS_SOURCES
      }
    }).pipe(
      map(({ articles }) => articles.filter(article =>
        // Filtrar artículos que contengan palabras relacionadas con Liverpool
        article.title.toLowerCase().includes('liverpool') ||
        article.description?.toLowerCase().includes('liverpool') ||
        article.content?.toLowerCase().includes('liverpool')
      ))
    );
  }

  // Método para obtener más noticias del Liverpool (paginación)
  getMoreLiverpoolNews(page: number = 1): Observable<Article[]> {
    return this.http.get<NewsResponse>(`${apiUrl}/everything`, {
      params: {
        apiKey,
        q: 'Liverpool FC OR "Liverpool football"',
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: '15',
        page: page.toString(),
        sources: LIVERPOOL_SPORTS_SOURCES
      }
    }).pipe(
      map(({ articles }) => articles.filter(article =>
        article.title.toLowerCase().includes('liverpool') ||
        article.description?.toLowerCase().includes('liverpool') ||
        article.content?.toLowerCase().includes('liverpool')
      ))
    );
  }

  // Método para buscar noticias específicas del Liverpool
  searchLiverpoolNews(query: string): Observable<Article[]> {
    return this.http.get<NewsResponse>(`${apiUrl}/everything`, {
      params: {
        apiKey,
        q: `Liverpool AND (${query})`,
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: '20',
        sources: LIVERPOOL_SPORTS_SOURCES
      }
    }).pipe(
      map(({ articles }) => articles.filter(article =>
        article.title.toLowerCase().includes('liverpool') ||
        article.description?.toLowerCase().includes('liverpool') ||
        article.content?.toLowerCase().includes('liverpool')
      ))
    );
  }
}
