export type ShowProductDto = {
  id: string;
  name: string;
  price: number;
  image_link: string;
  brand: string;
  description: string;
};
export enum ContentType {
  product = 'product',
}
