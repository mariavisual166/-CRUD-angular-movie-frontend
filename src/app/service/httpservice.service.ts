import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Pelicula } from "../../interface/pelicula";
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
   API_URL = 'http://localhost:8000/api/Pelicula';
  constructor(private httpClient : HttpClient) { }
  post (pelicula:Pelicula) { 
    const headers =  new HttpHeaders( { 'Content' : 'application/json'} );
    return this.httpClient.post(this.API_URL,pelicula,{headers:headers} );
  }
  get () { 
    const API_URL = 'http://localhost:8000/api/Pelicula';
    return this.httpClient.get(this.API_URL);
  }
  put (pelicula:Pelicula) { 
    const headers =  new HttpHeaders( { 'Content' : 'application/json' } );
    return this.httpClient.put(this.API_URL + '/' + pelicula.id ,pelicula,{headers:headers});
  }
  delete ( id: any ) { 
    const headers =  new HttpHeaders( { 'Content' : 'application/json', 'responseType': 'text' } );
    return this.httpClient.delete(this.API_URL + '/' + id ,{headers:headers});
  }
}
 