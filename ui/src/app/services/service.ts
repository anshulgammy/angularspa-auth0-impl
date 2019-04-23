import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
const getTokenOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class AppService {
    
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  jwtToken: string = null;
  callResourcesOption = {
    headers: new HttpHeaders({
      Authorization: "Bearer " + this.jwtToken
    })
  }; 

  /* Function to call the REST API for POST type */
  postServiceCall(
    requestBody: Object,
    baseUrl: string,
    resourceUrl: string, flag: boolean
  ): Observable<Object> {
    var completeEndpointUrl: string = baseUrl + resourceUrl;
    if(!flag) {
      return this.http.post(completeEndpointUrl, requestBody, getTokenOption);
    } else {
      return this.http.post(completeEndpointUrl, requestBody, this.callResourcesOption);
    }
  }
}
