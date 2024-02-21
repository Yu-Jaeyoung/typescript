type WON = number;

export enum FoodCategory {
  KOREAN = "KOREAN",
  JAPANESE = "JAPANESE",
  CHINESE = "CHINESE",
  WESTERN = "WESTERN",
  ITALIAN = "ITALIAN"
}

export type Menu = {
  category: FoodCategory,
  name: string,
  price: WON,
  detail: string,
}
