import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../service/httpservice.service';

import { Pelicula } from "../../interface/pelicula";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Peliculas : Pelicula [] = [];
  API_URL = 'http://localhost:8000/api/Pelicula';
  id:any;
  constructor( private  httpserviceService :HttpserviceService  ) { 
    this.httpserviceService.get().subscribe( (res : Pelicula [])  =>{
      this.Peliculas = res; 
    } );
  }

  ngOnInit(): void {
  }
  deleteP(id:any){
    this.httpserviceService.delete(id).subscribe(res=> alert("pelicula eliminada") );
   
  }

}
