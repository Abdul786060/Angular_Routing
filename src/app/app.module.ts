import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import { LearnTsComponent } from './learn-ts/learn-ts.component';
import { AdvancedPipeComponent } from './advanced-pipe/advanced-pipe.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { UsdpakPipe } from './custom-pipes/pipes/usdpak.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    LearnTsComponent,
    AdvancedPipeComponent,
    CustomPipesComponent,
    UsdpakPipe,
    TemplateDrivenFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
