import { Component, signal } from '@angular/core';
import { StoryElementService } from '../service/story-element-service';

@Component({
  selector: 'app-story-element',
  standalone: false,
  templateUrl: './story-element.html',
  styleUrl: './story-element.scss',
})
export class StoryElementComponent {
  protected elements = signal([])
  protected amount = 1

  constructor(private _service: StoryElementService) { }

  protected getStoryElements() {
    this._service.getElements(this.amount).subscribe({
      next: val => this.elements.set(val),
      error: error => console.log(error)
    })
  }
}
