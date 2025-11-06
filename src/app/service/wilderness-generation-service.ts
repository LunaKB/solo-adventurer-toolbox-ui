import { Injectable } from "@angular/core";
import { BaseService } from "./base-service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WildernessGenerationService extends BaseService {
    override getServiceName(): string {
        return 'wilderness-generation/'
    }

    override getPort(): string {
        return '8101'
    }
    
    // Overarching Terrain
    public getArctic() : Observable<any> {
        return this._http.get(`${this.getUrl()}overarching/generate/arctic`, {headers: this.headers, responseType: 'text'})
    }
    
    public getCoastal() : Observable<any> {
        return this._http.get(`${this.getUrl()}overarching/generate/coastal`, {headers: this.headers, responseType: 'text'})
    }
    
    public getDesert() : Observable<any> {
        return this._http.get(`${this.getUrl()}overarching/generate/desert`, {headers: this.headers, responseType: 'text'})
    }
    
    public getForest() : Observable<any> {
        return this._http.get(`${this.getUrl()}overarching/generate/forest`, {headers: this.headers, responseType: 'text'})
    }
    
    public getSwamp() : Observable<any> {
        return this._http.get(`${this.getUrl()}overarching/generate/swamp`, {headers: this.headers, responseType: 'text'})
    }
    
    public getMountain() : Observable<any> {
        return this._http.get(`${this.getUrl()}overarching/generate/mountain`, {headers: this.headers, responseType: 'text'})
    }
    
    public getHill() : Observable<any> {
        return this._http.get(`${this.getUrl()}overarching/generate/hill`, {headers: this.headers, responseType: 'text'})
    }
    
    public getGrassland() : Observable<any> {
        return this._http.get(`${this.getUrl()}overarching/generate/grassland`, {headers: this.headers, responseType: 'text'})
    }

    // Minor Terrain
    public getClearfelledArea() : Observable<any> {
        return this._http.get(`${this.getUrl()}minor/generate/clearfelled`, {headers: this.headers})
    }
    
    public getClearing() : Observable<any> {
        return this._http.get(`${this.getUrl()}minor/generate/clearing`, {headers: this.headers})
    }
    
    public getGully() : Observable<any> {
        return this._http.get(`${this.getUrl()}minor/generate/gully`, {headers: this.headers})
    }
    
    public getMinorHill() : Observable<any> {
        return this._http.get(`${this.getUrl()}minor/generate/hill`, {headers: this.headers})
    }
    
    public getLake() : Observable<any> {
        return this._http.get(`${this.getUrl()}minor/generate/lake`, {headers: this.headers})
    }
    
    public getLandscape() : Observable<any> {
        return this._http.get(`${this.getUrl()}minor/generate/landscape`, {headers: this.headers, responseType: 'text'})
    }
    
    public getMonument() : Observable<any> {
        return this._http.get(`${this.getUrl()}minor/generate/monument`, {headers: this.headers})
    }
    
    public getMinorMountain() : Observable<any> {
        return this._http.get(`${this.getUrl()}minor/generate/mountain`, {headers: this.headers})
    }
    
    public getOasis() : Observable<any> {
        return this._http.get(`${this.getUrl()}minor/generate/oasis`, {headers: this.headers})
    }
    
    public getOutcrop() : Observable<any> {
        return this._http.get(`${this.getUrl()}minor/generate/outcrop`, {headers: this.headers})
    }
    
    public getSettlement() : Observable<any> {
        return this._http.get(`${this.getUrl()}minor/generate/settlement`, {headers: this.headers})
    }
    
    public getMinorSwamp() : Observable<any> {
        return this._http.get(`${this.getUrl()}minor/generate/swamp`, {headers: this.headers})
    }
    
    public getWaterway() : Observable<any> {
        return this._http.get(`${this.getUrl()}minor/generate/waterway`, {headers: this.headers})
    }
    
    public getWood() : Observable<any> {
        return this._http.get(`${this.getUrl()}minor/generate/wood`, {headers: this.headers})
    }

    // Exploration
    public getDiscovery() : Observable<any> {
        return this._http.get(`${this.getUrl()}exploration/generate/discovery`, {headers: this.headers, responseType: 'text'})
    }
    
    public getClue() : Observable<any> {
        return this._http.get(`${this.getUrl()}exploration/generate/clue`, {headers: this.headers, responseType: 'text'})
    }
}