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
  protected minorTerrainDescription = signal("")
  protected minorTerrainNotes = signal("")
  protected discovery = signal("")
  protected clue = signal("")

  constructor(private _service: WildernessGenerationService) { }

  // Overarching Terrain
  protected getArctic() {
    this._service.getArctic().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)
    })
  }

  protected getCoastal() {
    this._service.getCoastal().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)      
    })
  }

  protected getDesert() {
    this._service.getDesert().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)          
    })
  }

  protected getForest() {
    this._service.getForest().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)    
    })
  }

  protected getSwamp() {
    this._service.getSwamp().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)    
    })
  }

  protected getMountain() {
    this._service.getMountain().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)
    })
  }

  protected getHill() {
    this._service.getHill().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)    
    })
  }

  protected getGrassland() {
    this._service.getGrassland().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)    
    })
  }

  // Minor Terrain
  protected getClearfelledArea() {
    this._service.getClearfelledArea().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  protected getClearing() {
    this._service.getClearing().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  protected getGully() {
    this._service.getGully().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  protected getMinorHill() {
    this._service.getMinorHill().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  protected getLake() {
    this._service.getLake().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  protected getLandscape() {
    this._service.getLandscape().subscribe({
      next: val => this.setMinorTerrain([val, '']), 
      error: error => console.log(error)
    })
  }
  
  protected getMonument() {
    this._service.getMonument().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  protected getMinorMountain() {
    this._service.getMinorMountain().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  protected getOasis() {
    this._service.getOasis().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  protected getOutcrop() {
    this._service.getOutcrop().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  protected getSettlement() {
    this._service.getSettlement().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  protected getMinorSwamp() {
    this._service.getMinorSwamp().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  protected getWaterway() {
    this._service.getWaterway().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  protected getWood() {
    this._service.getWood().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  // Exploration
  protected getDiscovery() {
    this._service.getDiscovery().subscribe({
      next: val => this.discovery.set(val), 
      error: error => console.log(error)
    })
  }
  
  protected getClue() {
    this._service.getClue().subscribe({
      next: val => this.clue.set(val), 
      error: error => console.log(error)
    })
  }

  // Setters
  private setOverarchingTerrain(val: any) {
    this.overarchingTerrain.set(val)
  }

  private setMinorTerrain(val : any) {
    this.minorTerrainDescription.set(val[0])
    this.minorTerrainNotes.set(val[1])
  }
}
