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
import { AuthGuard } from '@nestjs/passport';
import { 
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { BooksService } from './books.service';
import { Book } from './book.entity';
import { BookDto } from './book.dto';

@ApiTags('book')
@ApiBearerAuth('access-token')
@Controller('books')
@UseGuards(AuthGuard('jwt'))
export class BooksController {
  constructor(private bookSerice: BooksService) {}

  /** 
   *
   * @returns {Book[]} Devuelve una lista de libros
   * @param {Request} request Lista de parámetros para filtrar
   */
  @Get()
  @ApiOperation({ summary: 'Obtener lista de libros' })
  @ApiResponse({ 
    status: 201,
    description: 'Lista de libros',
    type: Book, 
  })
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
