import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/thought/form/form.component';
import { CardComponent } from './components/thought/list/card/card.component';
import { ListComponent } from './components/thought/list/list.component';
import { ExclusionComponent } from './components/thought/exclusion/exclusion.component';
import { FormEditComponent } from './components/thought/form-edit/form-edit.component';
import { LoadMoreButtonComponent } from './components/thought/list/load-more-button/load-more-button.component';
import { FilterComponent } from './components/thought/list/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ListComponent,
    CardComponent,
    ExclusionComponent,
    FormEditComponent,
    LoadMoreButtonComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
