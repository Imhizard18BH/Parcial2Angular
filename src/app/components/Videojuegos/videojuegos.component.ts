import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import {VideoJuegosModel} from "../../models/VideoJuegos.model";
import { AuthService } from "../../services/auth.service";

import Swal from "sweetalert2";


@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  videoJuego: VideoJuegosModel = new VideoJuegosModel();

  constructor( private auth : AuthService,
               private router: Router ) { }

  ngOnInit(): void {}

  CargarVideojuegos(formulario:NgForm){
    if(formulario.invalid){ return; }

    Swal.fire({
      allowOutsideClick: false,
      allowEscapeKey: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.auth.CargarVideojuegos( this.videoJuego )
      .subscribe( resp => {
        Swal.close();


        this.router.navigateByUrl('/videoJuegos');
      }, (er) => {
        Swal.fire({
          allowOutsideClick: false,
          allowEscapeKey: false,
          icon: 'error',
          title: 'Error al Registrar Videojuego',
          text: er.error.error.message
        });
      })
  }

}
