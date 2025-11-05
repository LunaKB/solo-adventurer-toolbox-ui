import { HttpClient } from "@angular/common/http";
import { UrlService } from "./url-service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export abstract class BaseService {
    protected headers = { 'Content-Type': 'application/json'}
    private serviceUrl = ''

    constructor(protected _http: HttpClient, _data: UrlService) {
        _data.getUrl(this.getServiceName(), this.getPort()).subscribe({
            next: val => { if (val) this.serviceUrl = val },
            error: error => console.log(error)
        })
    }

    abstract getServiceName() : string
    abstract getPort() : string
    protected getUrl() : string {
        return this.serviceUrl
    }
}