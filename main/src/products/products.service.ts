import { Product, ProductDocument } from './products.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async all(): Promise<Product[]> {
    return this.productModel.find();
  }

  async create(data): Promise<Product> {
    console.log(data);
    const newProduct = new this.productModel(data);
    return newProduct.save();
  }
}
