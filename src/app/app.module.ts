import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { appRouterModule } from './app.routing';
import { AddComponent } from './add/add.component';
import { StatsComponent } from './stats/stats.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { API } from './services/apiService';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ImagesliderComponent } from './imageslider/imageslider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    AddComponent,
    StatsComponent,
    AddCategoryComponent,
    AddProductComponent,
    FeedbackComponent,
    EditComponent,
    ImagesliderComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 })
  ],
  providers: [API],
  bootstrap: [AppComponent]
})
export class AppModule { }
