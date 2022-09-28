export interface Recipe{
  id: number,
  title: number,
  image: string,
  vegan: boolean,
  original: string;
  healthScore: number;
  pricePerServing: number;
  readyInMinutes: number;
  summary: string;
}
