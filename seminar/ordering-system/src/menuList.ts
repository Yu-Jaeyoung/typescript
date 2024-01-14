import {Menu} from "./types.ts";
import {FoodCategory} from "./enum.ts";

export const menuList: Menu[] = [
  {
    category: FoodCategory.KOREAN,
    name: "비빔밥",
    price: 8_000,
    detail: "비빔밥입니다.",
  }, {
    category: FoodCategory.JAPANESE,
    name: "라멘",
    price: 8_000,
    detail: "라멘입니다.",
  }, {
    category: FoodCategory.CHINESE,
    name: "훠궈",
    price: 8_000,
    detail: "훠궈입니다.",
  }, {
    category: FoodCategory.WESTERN,
    name: "햄버거",
    price: 8_000,
    detail: "햄버거입니다.",
  }, {
    category: FoodCategory.ITALIAN,
    name: "피자",
    price: 8_000,
    detail: "피자입니다.",
  },
];
