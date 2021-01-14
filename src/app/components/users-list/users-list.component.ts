import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  Users: any = [];


  constructor(public crudService: CrudService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }


  fetchUsers(){
    return this.crudService.getUsers().subscribe((res: {}) => {
      this.Users = res;
    })
  }

  delete(id){
    if(window.confirm('Do you really want to delete this resource?')){
      this.crudService.deleteUser(id).subscribe(res => {
        this.fetchUsers()
      })
    }
  }



}
