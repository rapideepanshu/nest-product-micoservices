import { Repository } from 'typeorm';
import { Products } from './products.entity';
import { ClientProxy } from '@nestjs/microservices';
export declare class ProductsService {
    private readonly productRepository;
    private readonly client;
    constructor(productRepository: Repository<Products>, client: ClientProxy);
    all(): Promise<Products[]>;
    create(data: any): Promise<Products>;
    get(id: number): Promise<Products>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
