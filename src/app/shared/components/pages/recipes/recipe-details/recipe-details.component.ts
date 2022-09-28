import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Observable, take } from 'rxjs';

import { Recipe } from '@app/shared/interfaces/recipe.interface';
import { RecipeService } from '@app/shared/services/recipe.service';
import { MenuCartServiceService } from '@app/shared/services/menu-cart.service.ts.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe$!: Observable<any>;

  constructor(private route: ActivatedRoute, private recipeSvc: RecipeService, private location: Location, private menuCartSvc: MenuCartServiceService) { }
//1:22
  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params)=>{
      const id = params['id'];
      this.recipe$ = this.recipeSvc.getDetails(id);
    });
  }
  onGoBack(): void{
    this.location.back();
  }
  addToMenu(recipe: Recipe): void{
    console.log('agregar-> ' ,recipe)
    this.menuCartSvc.updateMenu(recipe);
  }
}
