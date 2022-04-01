export class Product {
  public id?: number;
  public description?: string;
  public name?: string;
  public price?: number;
}

export class Products {
  public products?: Product[];
}

export class ProductRequest extends Product{}
