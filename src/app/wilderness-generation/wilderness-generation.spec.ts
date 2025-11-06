import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildernessGenerationComponent } from './wilderness-generation';

describe('WildernessGeneration', () => {
  let component: WildernessGenerationComponent;
  let fixture: ComponentFixture<WildernessGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WildernessGenerationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildernessGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
