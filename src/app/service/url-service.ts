import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment";
import { Observable, timeout, catchError, of, tap, mergeMap, map } from "rxjs";

const localUrl = environment.localServer
const externalUrl = environment.externalServer
const networkUrl = environment.networkServer

@Injectable({
    providedIn: 'root'
})
export class UrlService {
    private url = ""
    private isLocal = false
    private isExternal = false
    private isNetwork = false

    constructor(private _http: HttpClient) {
        
    }

    public getUrl(serviceName: string) : Observable<any> {
        return this.getExternalUrl(serviceName).pipe(
            mergeMap(() => this.getNetworkUrl(serviceName)),
            mergeMap(() => this.getLocalUrl(serviceName)),
            tap(val => this.setUrl(serviceName)),
            map(() => this.url)
        )
    }

    private getLocalUrl(serviceName: string) : Observable<any> {
        return this._http.get<any>(`${localUrl}${serviceName}api/`).pipe(
            timeout(1000),
            catchError(e => {return of(null)}),
            tap(val => { if (val) this.isLocal = true }))
    }

    private getExternalUrl(serviceName: string) : Observable<any> {
        return this._http.get<any>(`${externalUrl}${serviceName}api/`).pipe(
            timeout(1000),
            catchError(e => {return of(null)}),
            tap(val => { if (val) this.isExternal = true }))
    }

    private getNetworkUrl(serviceName: string) : Observable<any> {
        return this._http.get<any>(`${networkUrl}${serviceName}api/`).pipe(
            timeout(1000),
            catchError(e => {return of(null)}),
            tap(val => { if (val) this.isNetwork = true }))
    }

    private setUrl(serviceName: string) {
        if (this.isExternal) this.url = `${externalUrl}${serviceName}`
        else if (this.isNetwork) this.url = `${networkUrl}${serviceName}`
        else if (this.isLocal) this.url = `${localUrl}${serviceName}`
        return this.url
    }
}