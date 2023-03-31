import { Product, ProductDocument } from './products.model';
import { Model } from 'mongoose';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    all(): Promise<Product[]>;
    create(data: any): Promise<Product>;
}
