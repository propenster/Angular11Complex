import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  Books: any = [];

  constructor(public crudService: CrudService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(){
    return this.crudService.getBooks().subscribe((res: {})=>{
      this.Books = res;
      console.log(this.Books);
    })
  }

}
