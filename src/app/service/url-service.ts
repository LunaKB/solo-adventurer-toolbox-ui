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
    constructor(private _http: HttpClient) { }

    public getUrl(serviceName: string, port: string) : Observable<any> {
        return this.getExternalUrl(serviceName, port).pipe(
            mergeMap(val => this.getNetworkUrl(serviceName, port, val)),
            mergeMap(val => this.getLocalUrl(serviceName, port, val)),
            map(val => this.getResult(val))
        )
    }

    private getLocalUrl(serviceName: string, port: string, values: Array<ConnectionData>) : Observable<any> {
        var url = `//${localUrl}${port}/${serviceName}`
        return this._http.get<any>(`${url}api/`).pipe(
            timeout(1000),
            catchError(e => {return of(null)}),
            map(val => { 
                values.push(new ConnectionData(url, val))
                return values 
            }
        ))
    }

    private getExternalUrl(serviceName: string, port: string) : Observable<any> {
        var url = `//${externalUrl}${port}/${serviceName}`
        return this._http.get<any>(`${url}api/`).pipe(
            timeout(1000),
            catchError(e => {return of(false)}),
            map(val => {
                return [new ConnectionData(url, val)]
            }
        ))
    }

    private getNetworkUrl(serviceName: string, port: string, values: Array<ConnectionData>) : Observable<any> {
        var url = `//${networkUrl}${port}/${serviceName}`
        return this._http.get<any>(`${url}api/`).pipe(
            timeout(1000),
            catchError(e => {return of(false)}),
            map(val => { 
                values.push(new ConnectionData(url, val))
                return values 
            }
        ))
    }

    private getResult(values: Array<ConnectionData>) : string {
        if (values[0].connected) return values[0].url
        else if (values[1].connected) return values[1].url
        else if (values[2].connected) return values[2].url
        return "error_no_valid_url"
    }
}    

class ConnectionData {
    url: string
    connected: boolean
    constructor(url: string, connected: boolean) {
        this.url = url
        this.connected = connected
    }
}