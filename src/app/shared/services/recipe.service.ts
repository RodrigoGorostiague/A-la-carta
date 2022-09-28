import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../interfaces/recipe.interface';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }
  searchRecipe(query = '', page = 1){
    return this.http.get<Recipe[]>(`${environment.baseUrlApi}/complexSearch${environment.keyApi}&&query=${query}&page=${page}`)
  }
  getDetails(id:number){
    return this.http.get<Recipe[]>(`${environment.baseUrlApi}/${id}/information/${environment.keyApi}`)
  }
}
