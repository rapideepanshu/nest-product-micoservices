import { ProductsService } from './../../../admin/src/products/products.service';
import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async all() {
    return this.productService.all();
  }

  @EventPattern('hi')
  async hello(data: string) {
    console.log(data);
  }
}
