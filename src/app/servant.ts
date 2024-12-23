export interface Servant {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  class: string;
  created_at: Date;
  lore: string;
  skill: string;
  noble_phantasm: string;
  star: number;
}

export interface CartItem {
  id: number;
  product_id: string;
  quantity: number;
  product: Servant;
}
