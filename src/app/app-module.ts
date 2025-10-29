import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { StoryElementComponent } from './story-element/story-element';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    App,
    StoryElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    {provide: APP_BASE_HREF, useValue: '/solo/'}
  ],
  bootstrap: [App]
})
export class AppModule { }
