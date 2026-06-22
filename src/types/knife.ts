export interface KnifeProperties {
  [key: string]: string;
  "Blade Length": string;
  Material: string;
  Handle: string;
}

export interface Knife {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  properties: KnifeProperties;
}
