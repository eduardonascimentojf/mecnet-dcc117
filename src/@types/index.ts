export type ListOrderItems = {
  id: string;
  isComplete: boolean;
  description: string;
  amount: number;
  price: number;
  fullValue: number;
};
export type PedidoType = {
  id: string;
  isComplete: boolean;
  received: boolean;
  fullValue: number;
  listOrderItems: ListOrderItems[];
  createdAt?: string;
  updatedAt?: string;
};
export type productsList = {
  id: string;
  id_productStock: string;
  amount: number;
  price: number;
  fullValue: number;
  createdAt?: string;
  updatedAt?: string;
};
export type VendasType = {
  id: string;
  seller: string;
  client: string;
  cpfClient: string;
  price: number;
  productsList: productsList[];
  createdAt?: string;
  updatedAt?: string;
};
export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  image: string[];
};
export type Catalog = {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  manufacturer: string;
  stock: number;
  image: string[];
};

export type Stock = {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  manufacturer: string;
  stock: number;
  image: string[];
  autoStock: AutoStock;
};
export type AutoStock = {
  id_AutoStock: string;
  automates: boolean;
  maxPrice: number;
  minPrice: number;
  maxQuantity: number;
  minQuantity: number;
};
export type User = {
  id: string;
  name: string;
  email: string;
  userName: string;
  isAdmin: boolean;
};
export type SaleProducts = {
  id_productStock: string;
  price: number;
  amount: number;
};
