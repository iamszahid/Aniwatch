import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { selectMyData } from 'src/app/state/selectors/data.selectors';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  public cardBanner:any;
  constructor(private api: DataService,private store:Store){}
  ngOnInit():void{
    this.api.getAnimeData();
    this.store.select(selectMyData).subscribe((res: { data: any; })=>{
      this.cardBanner=res.data;
    });
  }
}
