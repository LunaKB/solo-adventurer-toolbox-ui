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
    
    public getArctic() : Observable<any> {
        return this._http.get(`${this.getUrl()}generate/arctic`, {headers: this.headers, responseType: 'text'})
    }
    
    public getCoastal() : Observable<any> {
        return this._http.get(`${this.getUrl()}generate/coastal`, {headers: this.headers, responseType: 'text'})
    }
    
    public getDesert() : Observable<any> {
        return this._http.get(`${this.getUrl()}generate/desert`, {headers: this.headers, responseType: 'text'})
    }
    
    public getForest() : Observable<any> {
        return this._http.get(`${this.getUrl()}generate/forest`, {headers: this.headers, responseType: 'text'})
    }
    
    public getSwamp() : Observable<any> {
        return this._http.get(`${this.getUrl()}generate/swamp`, {headers: this.headers, responseType: 'text'})
    }
    
    public getMountain() : Observable<any> {
        return this._http.get(`${this.getUrl()}generate/mountain`, {headers: this.headers, responseType: 'text'})
    }
    
    public getHill() : Observable<any> {
        return this._http.get(`${this.getUrl()}generate/hill`, {headers: this.headers, responseType: 'text'})
    }
    
    public getGrassland() : Observable<any> {
        return this._http.get(`${this.getUrl()}generate/grassland`, {headers: this.headers, responseType: 'text'})
    }
}