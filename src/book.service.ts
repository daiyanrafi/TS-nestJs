import { Injectable } from "@nestjs/common/decorators";


@Injectable()
export class BookService{

    addBook(): string {
        return 'This is add book method';
    }

    updateBook(): string {
        return 'This is update book method';
    }

    deleteBook(): string {
        return 'This is delete book method';
    }

    findAllBook(): string {
        return 'This is find all book method';
    }

    findBookById(bookId: number): string {
        return 'This is find book by id method';
    }
}

//all logic are here but urls are in controller file