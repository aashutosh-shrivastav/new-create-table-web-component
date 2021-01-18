import { Injectable }from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
@Injectable({
    providedIn : 'root'
})

export class TableService{
// 
    constructor(private httpClient: HttpClient) {
     }

    
    getData(url:string){
       let resp = this.httpClient.get(url);
        console.log(resp);
        return resp;
    }

}
