import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryElementComponent } from './story-element';

describe('StoryElement', () => {
  let component: StoryElementComponent;
  let fixture: ComponentFixture<StoryElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
