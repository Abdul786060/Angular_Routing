import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import { LearnTsComponent } from './learn-ts/learn-ts.component';
import { AdvancedPipeComponent } from './advanced-pipe/advanced-pipe.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
const routes: Routes = [
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'lts',
    component:LearnTsComponent
  },
  {
    path:'advpipe',
    component:AdvancedPipeComponent
  },
{
path:'cuspipe',
  component:CustomPipesComponent
},
{
path:'temform',
  component:TemplateDrivenFormComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
