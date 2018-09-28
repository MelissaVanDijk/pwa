import { NgModule } from '@angular/core';
import { PwaComponent } from './pwa.component';
import { WidgetBaseComponent } from './components/widgetbase.component';

@NgModule({
  imports: [

  ],
  declarations: [
    PwaComponent,
    WidgetBaseComponent
  ],
  exports: [
    PwaComponent,
    WidgetBaseComponent
  ]
})
export class PwaModule { }
