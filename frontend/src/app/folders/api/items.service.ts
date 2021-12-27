import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/app/models/items';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private urlBack: string = environment.url_back;

  constructor(private http: HttpClient) { }
}
