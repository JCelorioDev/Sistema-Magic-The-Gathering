import { Routes } from "@angular/router";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserListComponent } from "./user-list/user-list.component";

export const UserRoute: Routes = [
    {path: '', title: 'User List' ,component: UserListComponent},
    {path: 'add', title: 'Add New User', component: UserAddComponent},
    {path: 'edit', title: 'Edit User',component: UserEditComponent},
]