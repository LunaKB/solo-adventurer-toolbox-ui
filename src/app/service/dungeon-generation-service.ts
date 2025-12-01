import { Injectable } from "@angular/core";
import { BaseService } from "./base-service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { UrlService } from "./url-service";

@Injectable({
    providedIn: 'root'
})
export class DungeonGenerationService extends BaseService {
    constructor(_http: HttpClient, _data: UrlService) {
        super(_http, _data)
        this.headers = {'Content-Type': 'application/json', 'Accept': "image/png"}
    }

    override getServiceName(): string {
        return 'dungeon-generation/'
    }

    override getPort(): string {
        return '8102'
    }

    public getExtraSmallDungeon() : Observable<any> {
        return this._http.get(`${this.getUrl()}map/generate/extra-small`, {headers: this.headers, responseType: 'blob'})
    }

    public getSmallDungeon() : Observable<any> {
        return this._http.get(`${this.getUrl()}map/generate/small`, {headers: this.headers, responseType: 'blob'})
    }

    public getMediumDungeon() : Observable<any> {
        return this._http.get(`${this.getUrl()}map/generate/medium`, {headers: this.headers, responseType: 'blob'})
    }

    public getLargeDungeon() : Observable<any> {
        return this._http.get(`${this.getUrl()}map/generate/large`, {headers: this.headers, responseType: 'blob'})
    }

    public getExtraLargeDungeon() : Observable<any> {
        return this._http.get(`${this.getUrl()}map/generate/extra-large`, {headers: this.headers, responseType: 'blob'})
    }

    public getRandomDungeon() : Observable<any> {
        return this._http.get(`${this.getUrl()}map/generate/random`, {headers: this.headers, responseType: 'blob'})
    }
}