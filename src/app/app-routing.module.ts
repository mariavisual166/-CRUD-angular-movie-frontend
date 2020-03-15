import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DasComponent  } from './das/das.component';
import { HomeComponent  } from './home/home.component';
import { FormComponent  } from './form/form.component';

const routes: Routes = [
 { path: 'hello', component: DasComponent },
 { path: 'home', component: HomeComponent },
 { path: 'form', component: FormComponent },
 { path: 'form/:id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
