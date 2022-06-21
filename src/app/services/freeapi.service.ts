
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Posts } from "../classes/posts";


@Injectable()

export class freeApiService {
    constructor(private httpclient: HttpClient) {

    }

    getcomments(): Observable<any> {

        return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/1/comments")   //path of api

    }

    // from jsonplaceholder.typicode.com/posts?userId=1

    getcommentsbyparameter(): Observable<any> {

        let params1 = new HttpParams().set('userId', "1");
        return this.httpclient.get("https://jsonplaceholder.typicode.com/comments?postId=1", { params: params1 })

    }

    //Post Method

    post(opost: Posts): Observable<any> {

        return this.httpclient.post('https://jsonplaceholder.typicode.com/posts', opost);
    }
}