import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  categorias = [
    { nombre: 'Estilo vintage', imagen: 'assets/images/vintage.jpg' },
    { nombre: 'Estilo formal', imagen: 'assets/images/formal.jpg' },
    { nombre: 'Estilo deportivo', imagen: 'assets/images/deportivo.jpg' },
    { nombre: 'Estilo old money', imagen: 'assets/images/oldmoney.jpg' }
  ];

  productosDestacados = [
    {
      nombre: 'Accesorios',
      precio: 49.99,
      imagen: 'assets/images/accesorio.jpg'
    },
    {
      nombre: 'Sneakers',
      precio: 29.99,
      imagen: 'assets/images/vans.jpg'
    }
  ];

  constructor() {}
}