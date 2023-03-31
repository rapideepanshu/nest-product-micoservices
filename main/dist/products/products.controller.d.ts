import { ProductsService } from './products.service';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    all(): Promise<import("./products.model").Product[]>;
    handleCreateProduct(product: any): Promise<void>;
}
