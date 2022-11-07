import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback.component';
import { MaterialExampleModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,FormsModule,ReactiveFormsModule
  ],
  exports:[FeedbackComponent]
})
export class UtilityModule { }
