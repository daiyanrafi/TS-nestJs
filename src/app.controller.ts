import {
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';

//new object of BookService
@Controller('book')
export class BookController {

    //nestJs dependency injection it provides the obeject.
    constructor(private bookService: BookService) {}

  //add book
  @Post('/add')
  addBook(): string {
    return this.bookService.addBook();
  }

  //delete
  @Delete('/delete')
  deleteBook(): string {
    return this.bookService.deleteBook();
  }

  //update
  @Put('/update')
  updateBook(): string {
    return this.bookService.updateBook();
  }

  //find all book
  @Get('/findAll')
  findAllBook(): string {
    return this.bookService.findAllBook();
  }

  @Get('/findBookById/:bookId')
  findBookById(@Param() params): string {
    return this.bookService.findBookById(params.bookId);
  }

  @Post('/header')
  @Header('Cache-Control', 'none')
  create() {
    return 'This action adds a new cat';
  }
}
