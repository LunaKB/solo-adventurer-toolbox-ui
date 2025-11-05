import { Component, signal } from '@angular/core';
import { WildernessGenerationService } from '../service/wilderness-generation-service';

@Component({
  selector: 'app-wilderness-generation',
  standalone: false,
  templateUrl: './wilderness-generation.html',
  styleUrl: './wilderness-generation.scss',
})
export class WildernessGenerationComponent {
  protected overarchingTerrain = signal("")

  constructor(private _service: WildernessGenerationService) { }

  protected getArctic() {
    this._service.getArctic().subscribe({
      next: val => this.overarchingTerrain.set(val),
      error: error => console.log(error)
    })
  }

  protected getCoastal() {
    this._service.getCoastal().subscribe({
      next: val => this.overarchingTerrain.set(val),
      error: error => console.log(error)      
    })
  }

  protected getDesert() {
    this._service.getDesert().subscribe({
      next: val => this.overarchingTerrain.set(val),
      error: error => console.log(error)          
    })
  }

  protected getForest() {
    this._service.getForest().subscribe({
      next: val => this.overarchingTerrain.set(val),
      error: error => console.log(error)    
    })
  }

  protected getSwamp() {
    this._service.getSwamp().subscribe({
      next: val => this.overarchingTerrain.set(val),
      error: error => console.log(error)    
    })
  }

  protected getMountain() {
    this._service.getMountain().subscribe({
      next: val => this.overarchingTerrain.set(val),
      error: error => console.log(error)
    })
  }

  protected getHill() {
    this._service.getHill().subscribe({
      next: val => this.overarchingTerrain.set(val),
      error: error => console.log(error)    
    })
  }

  protected getGrassland() {
    this._service.getGrassland().subscribe({
      next: val => this.overarchingTerrain.set(val),
      error: error => console.log(error)    
    })
  }
}
