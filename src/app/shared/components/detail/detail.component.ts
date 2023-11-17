import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { selectMyData } from 'src/app/state/selectors/data.selectors';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  public details :any;
  constructor(private api :DataService, private store:Store ,private route: ActivatedRoute){}

  ngOnInit():void{
    let y=this.route.snapshot.paramMap.get('title');
    if(y!=null){
    const title:string=y;
    this.api.getAnimeData();
    this.store.select(selectMyData).subscribe((res)=>{
      this.details=res.data.find((item: { title: string; })=>item.title.toLocaleLowerCase().includes(title));
    });
     }
  }
  
}
