import { Injectable }from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http' ;
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
    providedIn : 'root'
})

export class TableService{
//           

    constructor( private httpClient: HttpClient) {
     }

     getUsers(url:string) : Observable<any>{
         return this.httpClient.get(url)
                               .pipe(
                                catchError(this.errorHandler) 
                                );
     }

     errorHandler(error:any){
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = ` Error: ${error.error.message} ` ;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
     }

}
