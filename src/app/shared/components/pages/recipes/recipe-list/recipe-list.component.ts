import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Params, Router } from '@angular/router';

import { filter, take } from 'rxjs';

import { Recipe } from './../../../../interfaces/recipe.interface';
import { RecipeService } from '@app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[];

  private  pageNum=1;
  private query!: string;
  private hideScrollHeight= 200;
  private showScrollHeight= 500;

  constructor(private recipeSvc: RecipeService, private route: ActivatedRoute, private router: Router) {
    this.onUrlChanged();
   }

  ngOnInit(): void {
    this.getRecipesByQuery();
  }

  private onUrlChanged(): void{
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)).subscribe(()=>{
        this.recipes=[];
        this.pageNum=1;
        this.getRecipesByQuery();
      })
  }

  private getRecipesByQuery(): void{
      this.route.queryParams.pipe(take(1) ).subscribe( (params:Params) => {
      this.query = params['q'];
      this.getDataFromService();
    })
  }

  private getDataFromService():void{
    this.recipeSvc.searchRecipe(this.query, this.pageNum)
    .pipe(take(1)
      ).subscribe((res:any) => {
      if (res?.results?.length){
        const {results} = res;
        this.recipes = [...this.recipes, ...results]
      } else{
        this.recipes = [];
      }
      })
  }
}
