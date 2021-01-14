import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/shared/crud.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  userObj: any = {};
  
  constructor(
    public crudService: CrudService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.crudService.getSingleUser(this.id).subscribe((res: {}) => {
      this.userObj = res;
    })
  }


  updateUser(id, data){

    if(window.confirm('Are you sure you want to update this user info?')){
      this.crudService.updateUser(this.id, data).subscribe((res:{}) => {
        this.router.navigate(['/list'])
      })
    }

  }

}
