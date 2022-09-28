import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `
  <input
  #inputSearch
  autofocus
  type="text"
  class="form-control"
  placeholder="Search"
  (keyup)="onSearch(inputSearch.value)"
  />
  `,
  styles: ['input {whidth: 100%};'],
})
export class FormSearchComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onSearch(value: string){
    if(value && value.length > 3){
      this.route.navigate(['/recipe-list'], {
        queryParams:{q: value},
      });
    }
  }

}
