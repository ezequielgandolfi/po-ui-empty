import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { AppModule } from '../../app.module';
import { EmptyRoutingModule } from './empty.routing.module';
import { EmptyComponent } from './empty.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    EmptyRoutingModule,
    AppModule,
  ],
  declarations: [
    EmptyComponent
  ],
  exports: [
  ],
  providers: [
  ]
})
export class EmptyModule { }
