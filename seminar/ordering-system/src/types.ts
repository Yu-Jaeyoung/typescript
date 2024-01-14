import { FoodCategory } from "./enum.ts";

type WON = number;

export type Menu = {
  category: FoodCategory,
  name: string,
  price: WON,
  detail: string,
}