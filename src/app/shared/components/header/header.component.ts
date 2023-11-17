import { Component } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchControl = new FormControl('');
  constructor(private router: Router, private formBuilder: FormBuilder) {}
  search() {
    this.router.navigate(['detail', this.searchControl.value]);
  }
  
}
