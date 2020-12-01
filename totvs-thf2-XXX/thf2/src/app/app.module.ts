import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TotvsGpsServicesModule } from 'totvs-gps-services';
// import { TotvsGpsControlsModule } from 'totvs-gps-controls';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

const modules = [
  BrowserModule,
  CommonModule,
  FormsModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  PoModule,
//   TotvsGpsServicesModule,
//   TotvsGpsControlsModule
];
const components = [
];
const directives = [
];
const pipes = [
];
@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...directives,
    ...pipes,
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    ...components,
    ...directives,
    ...pipes,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
