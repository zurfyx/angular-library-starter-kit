import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaggifyPipe } from './taggify.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    TaggifyPipe,
  ],
  declarations: [
    TaggifyPipe,
  ],
  providers: [],
})
export class TaggifyModule { }
