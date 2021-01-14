import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  Posts: any = [];

  constructor(
    public crudService: CrudService,
    
  ) { }

  ngOnInit(): void {
    this.fetchPosts();
  }


  fetchPosts(){
    return this.crudService.getPosts().subscribe((res: {})=>{
      this.Posts = res;
    })
  }


}
