import { Router  } from 'express';
import BooksController from '../controller/books.controller';
import validationBook from '../middleweres/books.middlewere';

const books = Router();
const booksController = new BooksController();
const booksSlashId = '/books/:id';

books.get('/books', booksController.getAll);
books.get(booksSlashId , booksController.getById);
books.post('/books/', validationBook,booksController.create);
books.put(booksSlashId, validationBook, booksController.update);
books.delete(booksSlashId, booksController.remove);

export default books;