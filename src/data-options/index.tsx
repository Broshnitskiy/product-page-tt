import { ProductColors, ProductSizes } from "enums";

export const sizeOptions = [
  {
    value: ProductSizes.S,
    label: ProductSizes.S,
    className: "bg-slate-500 cursor-pointer",
  },
  {
    value: ProductSizes.M,
    label: ProductSizes.M,
    className: "bg-slate-500 cursor-pointer",
  },
  {
    value: ProductSizes.L,
    label: ProductSizes.L,
    className: "bg-slate-500 cursor-pointer",
  },
];

export const colorOptions = [
  {
    value: ProductColors.Black,
    label: "Black",
    className: "bg-black text-white cursor-pointer",
  },
  {
    value: ProductColors.White,
    label: "White",
    className: "bg-white text-black cursor-pointer",
  },
  {
    value: ProductColors.Gray,
    label: "Gray",
    className: "bg-gray-500 text-white cursor-pointer",
  },
  {
    value: ProductColors.Brown,
    label: "Brown",
    className: "bg-red-900 text-white cursor-pointer",
  },
];
