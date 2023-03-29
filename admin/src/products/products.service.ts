import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productRepository: Repository<Products>,
  ) {}

  async all(): Promise<Products[]> {
    return await this.productRepository.find();
  }

  async create(data): Promise<Products> {
    return await this.productRepository.save(data);
  }

  async get(id: number): Promise<Products> {
    return await this.productRepository.findOne({ where: { id } });
  }

  async update(id: number, data): Promise<any> {
    return await this.productRepository.update(id, data);
  }

  async delete(id: number): Promise<any> {
    return await this.productRepository.delete(id);
  }
}
