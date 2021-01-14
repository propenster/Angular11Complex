import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { BooksListComponent } from './components/shop/books-list/books-list.component';
import { ShopComponent } from './components/shop/shop/shop.component';
import { SingleProductComponent } from './components/shop/single-product/single-product.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add'},
  { path: 'add', component: AddUserComponent },
  { path: 'edit/:id', component: EditUserComponent },
  { path: 'list', component: UsersListComponent },

  
  { path: 'posts', component: PostsListComponent },
  { path: 'addPost', component: AddPostComponent },
  { path: 'editPost/:id', component: EditPostComponent },
  { path: 'posts/:id', component: SinglePostComponent },

  { path: 'shop/products', component: ShopComponent },
  { path: 'shop/products/:productId', component: SingleProductComponent},

  { path: 'bookstore', component: BooksListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
