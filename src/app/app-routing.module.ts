import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./shared/components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'recipe-list', loadChildren: () => import('./shared/components/pages/recipes/recipe-list/recipe-list.module').then(m => m.RecipeListModule) },
  { path: 'recipe-details/:id', loadChildren: () => import('./shared/components/pages/recipes/recipe-details/recipe-details.module').then(m => m.RecipeDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
