import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Store} from '@ngrx/store'
import { addData } from '../state/actions/data.actions';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient,
    private store: Store,
  ) {}
  
  getAnimeData(): void {
    this.http.get(environment.apiBaseUrl).subscribe((res) => {
      const dataToStore = res;
      this.store.dispatch(addData({data: dataToStore }));
    });
  }
}


