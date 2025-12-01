import { Component, signal } from '@angular/core';
import { DungeonGenerationService } from '../service/dungeon-generation-service';

@Component({
  selector: 'app-dungeon-generation',
  standalone: false,
  templateUrl: './dungeon-generation.html',
  styleUrl: './dungeon-generation.scss',
})
export class DungeonGenerationComponent {
  protected selectedMapSize = 'Random'
  protected selectedMapSizeLabel = signal('')
  protected image = signal<string | ArrayBuffer | null>(null)

  constructor(private _service: DungeonGenerationService) { }

  protected generateDungeon() {
    switch (this.selectedMapSize) {
      case 'Extra-Small':
        this.generateExtraSmallDungeon()
        break
      case 'Small':
        this.generateSmallDungeon()
        break
      case 'Medium':
        this.generateMediumDungeon()
        break
      case 'Large':
        this.generateLargeDungeon()
        break
      case 'Extra-Large':
        this.generateExtraLargeDungeon()
        break
      case 'Random':
        this.generateRandomDungeon()
        break
    }
  }

    protected generateExtraSmallDungeon() {
    this._service.getExtraSmallDungeon().subscribe({
      next: val => this.setImage(val),
      error: error => console.log(error)
    })
  }

    protected generateSmallDungeon() {
    this._service.getSmallDungeon().subscribe({
      next: val => this.setImage(val),
      error: error => console.log(error)
    })
  }

    protected generateMediumDungeon() {
    this._service.getMediumDungeon().subscribe({
      next: val => this.setImage(val),
      error: error => console.log(error)
    })
  }

    protected generateLargeDungeon() {
    this._service.getLargeDungeon().subscribe({
      next: val => this.setImage(val),
      error: error => console.log(error)
    })
  }

    protected generateExtraLargeDungeon() {
    this._service.getExtraLargeDungeon().subscribe({
      next: val => this.setImage(val),
      error: error => console.log(error)
    })
  }

  protected generateRandomDungeon() {
    this._service.getRandomDungeon().subscribe({
      next: val => this.setImage(val),
      error: error => console.log(error)
    })
  }

  private setImage(data: any) {
    const reader = new FileReader();
    reader.onload = (e) => { 
      if (e.target)
        this.image.set(e.target.result)
    }
    reader.readAsDataURL(new Blob([data]));
  }
}
