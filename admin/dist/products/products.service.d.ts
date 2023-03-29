import { Repository } from 'typeorm';
import { Products } from './products.entity';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<Products>);
    all(): Promise<Products[]>;
    create(data: any): Promise<Products>;
    get(id: number): Promise<Products>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
