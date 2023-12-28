import { Injectable } from '@nestjs/common';
import { Book } from './book.class';
import { BookDto } from './book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) {}

  async findAll(params): Promise<Book[]> {
    interface FindOptions extends FindManyOptions<Book> {
      order?: { title: 'ASC' | 'DESC' };
      take?: number;
    }
    let findOptions: FindOptions = {};

    if (params != undefined) {
      if (params.order !== undefined) {
        const order = params.order == 1 ? 'ASC' : 'DESC';
        findOptions.order = { title: order };
      }

      if (params.limit !== undefined) {
        findOptions.take = parseInt(params.limit);
      }
    }

    return await this.booksRepository.find(findOptions);
  }

  async findBook(bookId: string): Promise<Book> {
    return await this.booksRepository.findOne({
      where: { id: parseInt(bookId) },
    });
  }

  createBook(newBook: BookDto): Promise<Book> {
    return this.booksRepository.save(newBook);
  }

  async updateBook(bookId: string, newBook: BookDto): Promise<Book> {
    let toUpdate = await this.booksRepository.findOne({
      where: { id: parseInt(bookId) },
    });
    let updated = Object.assign(toUpdate, newBook);

    return this.booksRepository.save(updated);
  }

  async deleteBook(bookId: string): Promise<any> {
    return await this.booksRepository.delete({ id: parseInt(bookId) });
  }
}
