import { Component, signal } from '@angular/core';
import { WildernessGenerationService } from '../service/wilderness-generation-service';

@Component({
  selector: 'app-wilderness-generation',
  standalone: false,
  templateUrl: './wilderness-generation.html',
  styleUrl: './wilderness-generation.scss',
})
export class WildernessGenerationComponent {
  protected selectedOverarchingTerrain = 'Arctic'
  protected overarchingTerrainLabel = signal('')
  protected overarchingTerrainDescription = signal('')

  protected selectedMinorTerrain = 'Clearfelled Area'
  protected minorTerrainLabel = signal('')
  protected minorTerrainDescription = signal('')
  protected minorTerrainNotes = signal('')

  protected discovery = signal('')
  protected clue = signal('')

  constructor(private _service: WildernessGenerationService) { }

  protected generateOverarchingTerrain() {
    switch (this.selectedOverarchingTerrain) {
      case 'Arctic':
        this.getArctic()
        break
      case 'Coastal':
        this.getCoastal()
        break
      case 'Desert':
        this.getDesert()
        break
      case 'Forest':
        this.getForest()
        break
      case 'Grassland':
        this.getGrassland()
        break
      case 'Hill':
        this.getHill()
        break
      case 'Mountain':
        this.getMountain()
        break
      case 'Swamp':
        this.getSwamp()
        break
    }
  }

  protected generateMinorTerrain() {
    switch (this.selectedMinorTerrain) {
      case 'Clearfelled Area':
        this.getClearfelledArea()
        break
      case 'Clearing':
        this.getClearing()
        break
      case 'Gully':
        this.getGully()
        break
      case 'Hill':
        this.getMinorHill()
        break
      case 'Lake':
        this.getLake()
        break
      case 'Landscape Feature':
        this.getLandscape()
        break
      case 'Monument':
        this.getMonument()
        break
      case 'Mountain':
        this.getMinorMountain()
        break
      case 'Oasis':
        this.getOasis()
        break
      case 'Rocky Outcrop':
        this.getOutcrop()
        break
      case 'Settlement':
        this.getSettlement()
        break
      case 'Structure':
        this.getStructure()
        break
      case 'Swamp':
        this.getMinorSwamp()
        break
      case 'Waterway':
        this.getWaterway()
        break
      case 'Woods':
        this.getWood()
        break
    }
  }

  // Overarching Terrain
  private getArctic() {
    this._service.getArctic().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)
    })
  }

  private getCoastal() {
    this._service.getCoastal().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)      
    })
  }

  private getDesert() {
    this._service.getDesert().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)          
    })
  }

  private getForest() {
    this._service.getForest().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)    
    })
  }

  private getGrassland() {
    this._service.getGrassland().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)    
    })
  }

  private getHill() {
    this._service.getHill().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)    
    })
  }

  private getMountain() {
    this._service.getMountain().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)
    })
  }

  private getSwamp() {
    this._service.getSwamp().subscribe({
      next: val => this.setOverarchingTerrain(val),
      error: error => console.log(error)    
    })
  }

  // Minor Terrain
  private getClearfelledArea() {
    this._service.getClearfelledArea().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  private getClearing() {
    this._service.getClearing().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  private getGully() {
    this._service.getGully().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  private getMinorHill() {
    this._service.getMinorHill().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  private getLake() {
    this._service.getLake().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  private getLandscape() {
    this._service.getLandscape().subscribe({
      next: val => this.setMinorTerrain([val, '']), 
      error: error => console.log(error)
    })
  }
  
  private getMonument() {
    this._service.getMonument().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  private getMinorMountain() {
    this._service.getMinorMountain().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  private getOasis() {
    this._service.getOasis().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  private getOutcrop() {
    this._service.getOutcrop().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  private getSettlement() {
    this._service.getSettlement().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  private getStructure() {
    this._service.getStructure().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  private getMinorSwamp() {
    this._service.getMinorSwamp().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  private getWaterway() {
    this._service.getWaterway().subscribe({
      next: val => this.setMinorTerrain(val), 
      error: error => console.log(error)
    })
  }
  
  private getWood() {
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
    this.overarchingTerrainLabel.set(this.selectedOverarchingTerrain)
    this.overarchingTerrainDescription.set(val)
  }

  private setMinorTerrain(val : any) {
    this.minorTerrainLabel.set(this.selectedMinorTerrain)
    this.minorTerrainDescription.set(val[0])
    this.minorTerrainNotes.set(val[1])
  }
}
