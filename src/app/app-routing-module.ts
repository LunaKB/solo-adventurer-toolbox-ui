import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryElementComponent } from './story-element/story-element';

const routes: Routes = [
  { path: "", component: StoryElementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
