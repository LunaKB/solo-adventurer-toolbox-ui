import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonGenerationComponent } from './dungeon-generation';

describe('DungeonGeneration', () => {
  let component: DungeonGenerationComponent;
  let fixture: ComponentFixture<DungeonGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DungeonGenerationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DungeonGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
