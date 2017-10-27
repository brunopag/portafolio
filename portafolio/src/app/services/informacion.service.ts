import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info:any = {};
  cargado_info:boolean = false;

  equipo:any[] = [];
  cargado_equipo:boolean = false;

  constructor( public http:Http ) {
    this.cargaInfo();
    this.cargaEquipo();
  }

  public cargaInfo(){
    this.http.get("assets/data/info.pagina.json")
      .subscribe(data => {
        this.cargado_info = true;
        this.info = data.json();
      })
  }

  public cargaEquipo(){
    this.http.get("https://portafolio-dabc8.firebaseio.com/equipo.json")
      .subscribe(data => {
        console.log(data.json());
        this.cargado_equipo = true;
        this.equipo = data.json();
      })
  }

}
