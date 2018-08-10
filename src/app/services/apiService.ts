import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from "rxjs/operators";
import { User } from 'src/app/models/user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class API {
    url = "http://localhost:1000";
    constructor(private http: HttpClient) { }

    getData(url: any, data?: any): Observable<any[]> {
        let theUrl = this.url + '/' + url;
        console.log('The url to hit ', theUrl);
        if (data === null || data ===undefined)
        {
            return this.http.get<User[]>(theUrl).pipe(map((val: any) => val));

        }
        else
        {
            let theUrl = this.url + '/' + url;
            console.log('The url to hit ', theUrl);
            console.log('The obj to be send in the api service get request',data);
            return this.http.post(theUrl,data).pipe(map((val: any) => val));

        }

    }
    postData(url: any, obj?: any): Observable<any[]> {
        return this.http.post(this.url + '/' + url, obj).pipe(map((val: any) => val));
    }

}