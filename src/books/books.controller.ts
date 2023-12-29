import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Body,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';

import { BooksService } from './books.service';
import { Book } from './book.class';
import { BookDto } from './book.dto';

import { AuthGuard } from '@nestjs/passport';

@Controller('books')
@UseGuards(AuthGuard('jwt'))
export class BooksController {
  constructor(private bookSerice: BooksService) {}

  @Get()
  findAll(@Req() request: Request): Promise<Book[]> {
    return this.bookSerice.findAll(request.query);
  }

  @Get(':RequestedBookId')
  findBook(@Param('RequestedBookId') bookId: string): Promise<Book> {
    return this.bookSerice.findBook(bookId);
  }

  @Post()
  createBook(@Body() newBook: BookDto): Promise<Book> {
    return this.bookSerice.createBook(newBook);
  }

  @Put(':RequestedBookId')
  updateBook(
    @Param('RequestedBookId') bookId: string,
    @Body() newBook: BookDto,
  ): Promise<Book> {
    return this.bookSerice.updateBook(bookId, newBook);
  }

  @Delete(':RequestedBookId')
  deleteBook(@Param('RequestedBookId') bookId: string): Promise<Book> {
    return this.bookSerice.deleteBook(bookId);
  }
}
