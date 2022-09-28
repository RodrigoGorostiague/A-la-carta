import { Recipe } from './../../../interfaces/recipe.interface';
import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-recipe',
  template: `
  <div class="card">
  <div class="image">
    <a [routerLink]="['/recipe-details', recipe.id]">
      <img [src]="recipe.image" [alt]="recipe.title" class="card-img-top">
    </a>
  </div>
  <div class="card-inner">
    <div class="header">
      <a [routerLink]="['/recipe-details', recipe.id]">
        <h2>{{recipe.title}}</h2>
      </a>
      <p>
        {{recipe.summary |slice: 0: 200}}...
      </p>

      <button *ngIf="recipe.pricePerServing!=null" class="btn btn-primary m-3" (click)="onClick()">{{recipe.pricePerServing |currency}} <i class="bi bi-bag-plus"></i> </button>
      <small class="text-muted">Health Score {{recipe.healthScore}}</small><br>
      <small class="text-muted">Ready In Minutes {{recipe.readyInMinutes}}</small>
    </div>
  </div>
</div>
`,
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeComponent{
  @Input()recipe!: Recipe;
  @Output() addToMenuClick = new EventEmitter<Recipe>();

  onClick(): void{
    this.addToMenuClick.emit(this.recipe);
  }
}
