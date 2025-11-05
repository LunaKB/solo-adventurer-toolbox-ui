import { Injectable } from "@angular/core";
import { BaseService } from "./base-service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StoryElementService extends BaseService {
    override getServiceName(): string {
        return 'story-element/'
    }

    override getPort(): string {
        return "8100"
    }
    
    public getElements(amount: number) : Observable<any> {
        return this._http.get(`${this.getUrl()}generate/${amount}`, {'headers': this.headers})
    }
}