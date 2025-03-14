import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'items', component: ItemListComponent, canActivate: [authGuard] },
  { path: 'items/new', component: ItemFormComponent, canActivate: [authGuard] },
  {
    path: 'items/edit/:id',
    component: ItemFormComponent,
    canActivate: [authGuard],
  },
];
