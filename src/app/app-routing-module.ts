import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryElementComponent } from './story-element/story-element';
import { WildernessGenerationComponent } from './wilderness-generation/wilderness-generation';
import { HomeComponent } from './home/home';
import { DungeonGenerationComponent } from './dungeon-generation/dungeon-generation';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "story", component: StoryElementComponent },
  { path: "wilderness", component: WildernessGenerationComponent },
  { path: "dungeon", component: DungeonGenerationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
