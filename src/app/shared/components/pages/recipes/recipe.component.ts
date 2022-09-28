import { Recipe } from './../../../interfaces/recipe.interface';
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

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
        {{recipe.summary}}
      </p>

      <h4 class="text-muted">{{recipe.pricePerServing |currency}}</h4>
      <small class="text-muted">Health Score {{recipe.healthScore}}</small><br>
      <small class="text-muted">Ready In Minutes {{recipe.readyInMinutes}}</small>
    </div>
  </div>
</div>
<pre>

  {{recipe |json}}
</pre>
`,
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeComponent{
  @Input()
  recipe!: Recipe;
}
