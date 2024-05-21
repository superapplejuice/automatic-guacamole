export enum ItemCategory {
  Tops,
  Bottoms,
  Headdress,
  Outerwear,
  InnerWear
}

export type ItemFormType = {
  name: string;
  description: string;
  category: ItemCategory | undefined;
  cost: number | undefined;
}
