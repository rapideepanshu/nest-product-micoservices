import { ProductsService } from './../../../admin/src/products/products.service';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    all(): Promise<import("../admin/src/products/products.entity").Products[]>;
    hello(data: string): Promise<void>;
}
