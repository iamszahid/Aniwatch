import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { CardComponent } from './shared/components/card/card.component';
import { CardListComponent } from './shared/components/card-list/card-list.component';
import { DetailsComponent } from './shared/components/details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { myDataReducer } from './state/reducers/data.reducers';
import { DetailComponent } from './shared/components/detail/detail.component';

let appRoute: Routes=[
  {path:"details/:id", component: DetailsComponent},
  {path:"detail/:title",component:DetailComponent},
  {path:"**", component: CardComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CardListComponent,
    DetailsComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ myData: myDataReducer }),
    RouterModule.forRoot(appRoute),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

