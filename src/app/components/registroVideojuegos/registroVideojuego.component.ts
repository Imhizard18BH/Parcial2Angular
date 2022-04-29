import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import {VideoJuegosModel} from "../../models/VideoJuegos.model";
import { AuthService } from "../../services/auth.service";

import Swal from "sweetalert2";


@Component({
  selector: 'app-registroVideojuego',
  templateUrl: './registroVideojuego.component.html',
  styleUrls: ['./registroVideojuego.component.css']
})
export class RegistroVideojuegoComponent implements OnInit {

  videoJuego: VideoJuegosModel = new VideoJuegosModel();

  constructor( private auth : AuthService,
               private router: Router ) { }

  ngOnInit(): void {}

  registrar(formulario:NgForm){
    if(formulario.invalid){ return; }

    Swal.fire({
      allowOutsideClick: false,
      allowEscapeKey: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.auth.registrarVideojuego( this.videoJuego )
      .subscribe( resp => {
        Swal.close();


        this.router.navigateByUrl('/dashboard');
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
