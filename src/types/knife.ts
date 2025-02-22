export interface KnifeProperties {
  [key: string]: string;
  Material: string;
  Handle: string;
}

export interface Knife {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  properties: KnifeProperties;
}
