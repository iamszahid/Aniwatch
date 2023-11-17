import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { selectMyData } from 'src/app/state/selectors/data.selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  public details :any;
  constructor(private api :DataService, private store:Store ,private route: ActivatedRoute){}

  ngOnInit():void{
    let x=this.route.snapshot.paramMap.get('id');
    if(x!=null){
    const id: number = parseInt(x);
    this.api.getAnimeData();
    this.store.select(selectMyData).subscribe((res)=>{
      this.details = res.data.find((item: { mal_id: number }) => item.mal_id === id);
    });
     }
  }
  
}
