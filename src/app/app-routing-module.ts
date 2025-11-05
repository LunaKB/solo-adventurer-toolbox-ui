import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryElementComponent } from './story-element/story-element';
import { WildernessGenerationComponent } from './wilderness-generation/wilderness-generation';

const routes: Routes = [
  { path: "", component: StoryElementComponent },
  { path: "story", component: StoryElementComponent },
  { path: "wilderness", component: WildernessGenerationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
