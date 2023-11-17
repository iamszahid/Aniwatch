import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Store} from '@ngrx/store'
import { selectMyData } from 'src/app/state/selectors/data.selectors';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  public cardList :any;
  constructor(private api :DataService,private store: Store){}
  ngOnInit():void{
    this.api.getAnimeData();
    this.store.select(selectMyData).subscribe((res)=>{
      this.cardList=res.data;
    });
  }
}
