import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  postObj: any = {}


  constructor(
    public crudService: CrudService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.crudService.getSinglePost(this.id).subscribe((res: {})=>{
      this.postObj = res;
    })
  }

  updatePost(id, data){
    if(window.confirm('Are you sure to update this post?')){
      return this.crudService.updatePost(this.id, data).subscribe((res: {})=>{
        this.router.navigate(['/posts'])
      })
    }

  }

  delete(id){
    if(window.confirm('Are you sure you want to delete this post?')){
      return this.crudService.deletePost(id).subscribe((res: {})=>{
        this.router.navigate(['/posts'])
      })
    }
  }

}
