export enum ItemCategory {
  Tops = 'Tops',
  Bottoms = 'Bottoms',
  Headdress = 'Headdress',
  Outerwear = 'Outerwear',
  InnerWear = 'Inner Wear',
}

export type ItemFormType = {
  name: string;
  description: string;
  category: ItemCategory | undefined;
  cost: number | undefined;
}
