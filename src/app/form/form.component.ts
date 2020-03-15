import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../service/httpservice.service';
import { HttpClient} from '@angular/common/http';
import { Pelicula } from "../../interface/pelicula";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  API_URL = 'http://localhost:8000/api/Pelicula';
  pelicula:Pelicula = {
    name:null,
    des:null,
    gener:null
  };
  peliculas:Pelicula [] = [];
  id:any=null;
  isEdit:boolean=false;
  constructor( private  httpserviceService :HttpserviceService , private httpClient : HttpClient,  private activatedRoute : ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.params['id'];
    if(this.id){
     this.isEdit = true;
     this.httpserviceService.get().subscribe((res : Pelicula []) => {
     this.peliculas = res; 
     this.peliculas = this.peliculas.filter((p) =>  p.id == this.id   );
     this.pelicula.id = this.peliculas[0].id; 
     this.pelicula.name = this.peliculas[0].name;
     this.pelicula.des = this.peliculas[0].des;
     this.pelicula.gener = this.peliculas[0].gener;
    })
    }else{
      this.isEdit = false;
    }
  }


  ngOnInit(): void {
  }

  savePelicula(){
    if(this.isEdit){
      this.httpserviceService.put(this.pelicula).subscribe(res => {
        alert("pelicula edit");
        console.log(res);
      }) 
    }else{
      this.httpserviceService.post(this.pelicula).subscribe(res => {
        alert("pelicula Save");
        
      })
    }
  }
   
}
