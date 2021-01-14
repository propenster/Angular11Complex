import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  postObj: any = {}

  constructor(
    public crudService: CrudService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.crudService.getSinglePost(this.id).subscribe((res: {})=>{
      this.postObj = res
  })
  

}

}
