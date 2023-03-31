import { ProductsService } from './products.service';
import { ClientProxy } from '@nestjs/microservices';
export declare class ProductsController {
    private productService;
    private readonly client;
    constructor(productService: ProductsService, client: ClientProxy);
    all(): Promise<import("./products.entity").Products[]>;
    create(title: string, image: string): Promise<import("./products.entity").Products>;
    get(id: number): Promise<import("./products.entity").Products>;
    update(id: number, title: string, image: string): Promise<import("./products.entity").Products>;
    delete(id: number): Promise<void>;
}
