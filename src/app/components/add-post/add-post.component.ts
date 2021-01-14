import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postObj: any = { title: '', body: '' };

  constructor(
    public crudService: CrudService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }


  addPost(data: any){
    return this.crudService.addPost(this.postObj).subscribe((data: {})=>{
      this.router.navigate(['/posts'])
    })
  }

}
