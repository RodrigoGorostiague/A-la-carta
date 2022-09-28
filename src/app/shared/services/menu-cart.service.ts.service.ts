import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuCartServiceService {
  recipes: Recipe[] = [];

  private cartSubject = new Subject<Recipe[]>();
  private totalSubject = new Subject<number>();
  private healtScorePromSubject = new Subject<number>();
  private readyInMinutesPromSubject = new Subject<number>();

  get cartAction$(): Observable<Recipe[]>{
    return this.cartSubject.asObservable();
  }
  get totalAction$(): Observable<number>{
    return this.totalSubject.asObservable();
  }
  get healtScorePromAction$(): Observable<number>{
    return this.healtScorePromSubject.asObservable();
  }
  get readyInMinutesPromAction$(): Observable<number>{
    return this.readyInMinutesPromSubject.asObservable();
  }
  private addToMenu(recipe: Recipe): void{
    this.recipes.push(recipe);
    this.cartSubject.next(this.recipes);
  }
  private calcTotal(): void {
    const total = this.recipes.reduce((acc, rec) => acc += rec.pricePerServing, 0);
    this.totalSubject.next(total);
  }
  private calcHealtScoreProm(): void{
    const healtScore = this.recipes.reduce((acc, rec) => acc += rec.healthScore, 0);
    const healtScoreProm = ((healtScore)/(this.recipes.length));
    this.healtScorePromSubject.next(healtScoreProm);
  }
  private calctimeToServeProm(): void{
    const readyInMinutes = this.recipes.reduce((acc, rec) => acc += rec.readyInMinutes, 0);
    const readyInMinutesProm = ((readyInMinutes)/(this.recipes.length));
    this.readyInMinutesPromSubject.next(readyInMinutesProm);
  }

  updateMenu(recipe:Recipe): void{
    this.addToMenu(recipe);
    this.calcHealtScoreProm();
    this.calcTotal();
    this.calctimeToServeProm();
  }
}
