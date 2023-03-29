import { ProductsService } from './products.service';
import { ClientProxy } from '@nestjs/microservices/client';
export declare class ProductsController {
    private productService;
    private readonly client;
    constructor(productService: ProductsService, client: ClientProxy);
    all(): Promise<import("./products.entity").Products[]>;
    test(): Promise<number>;
    create(title: string, image: string): Promise<import("./products.entity").Products>;
    get(id: number): Promise<import("./products.entity").Products>;
    update(id: number, title: string, image: string): Promise<any>;
    delete(id: number): Promise<any>;
}
