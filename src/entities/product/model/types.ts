export interface IProductItem {
  id: number;
  name: string;
  tagline?: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv?: number;
  ibu?: number;
  target_fg?: number;
  target_og?: number;
  ebc?: number;
  srm?: number;
  ph?: number;
  attenuation_level?: number;
  volume?: IVolume;
  boil_volume?: IVolume;
  method?: IMethod;
  ingredients?: Ingredients;
  food_pairing?: string[];
  brewers_tips?: string;
  contributed_by?: string;
}

interface Ingredients {
  malt: IMalt[];
  hops: IHop[];
  yeast: string;
}
interface IHop {
  name: string;
  amount: IVolume;
  add: string;
  attribute: string;
}
interface IMalt {
  name: string;
  amount: IVolume;
}
interface IMethod {
  mash_temp: IMashtemp[];
  fermentation: IFermentation;
  twist?: string;
}
interface IFermentation {
  temp: IVolume;
}
interface IMashtemp {
  temp: IVolume;
  duration?: number;
}
interface IVolume {
  value: number;
  unit: string;
}
