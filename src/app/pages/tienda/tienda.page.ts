import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string; // Campo agregado
}

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: '../tienda/tienda.page.html',
  styleUrls: ['../tienda/tienda.page.scss'],
})
export class TiendaPage {

  productos: Producto[] = [
    { 
      id: 1, 
      nombre: 'Camiseta negra oversize', 
      precio: 49.99, 
      imagen: 'assets/images/camisetaoversize.png',
      descripcion: 'Camiseta de corte amplio en algodón premium para un look urbano y cómodo.' 
    },
    { 
      id: 2, 
      nombre: 'Hoddie oversize', 
      precio: 29.99, 
      imagen: 'assets/images/hoddienegro.jpg',
      descripcion: 'Sudadera con capucha holgada, ideal para climas frescos con estilo minimalista.' 
    },
    { 
      id: 3, 
      nombre: 'Pantalon cargo', 
      precio: 39.99, 
      imagen: 'assets/images/cargobeige.png',
      descripcion: 'Pantalón resistente con bolsillos laterales funcionales y ajuste relajado.' 
    },
    { 
      id: 4, 
      nombre: 'Vans Old Skool', 
      precio: 59.99, 
      imagen: 'assets/images/vansold.webp',
      descripcion: 'Clásicas zapatillas de skate con la icónica banda lateral y suela duradera.' 
    },
    { 
      id: 5, 
      nombre: 'Gorra Verde', 
      precio: 24.99, 
      imagen: 'assets/images/gorraverde.webp',
      descripcion: 'Gorra de visera curva con ajuste regulable y color vibrante de temporada.' 
    },
    { 
      id: 6, 
      nombre: 'Camiseta Urban White', 
      precio: 35.00, 
      imagen: 'assets/images/camisetawhite.jpg',
      descripcion: 'Básico esencial en color blanco con tejido transpirable de alta calidad.' 
    },
    { 
      id: 7, 
      nombre: 'Hoddie Streetwear', 
      precio: 45.99, 
      imagen: 'assets/images/hoddie.png',
      descripcion: 'Diseño moderno con gráficos exclusivos para destacar en la ciudad.' 
    },
    { 
      id: 8, 
      nombre: 'Pantalon Jogger', 
      precio: 32.50, 
      imagen: 'assets/images/cargo.jpg',
      descripcion: 'Combinación perfecta entre comodidad deportiva y estilo casual diario.' 
    },
    { 
      id: 9, 
      nombre: 'Sneakers Pro', 
      precio: 65.00, 
      imagen: 'assets/images/sneakerspro.jpg',
      descripcion: 'Calzado ergonómico diseñado para máxima amortiguación y rendimiento.' 
    },
    { 
      id: 10, 
      nombre: 'Gorra Black Edition', 
      precio: 20.00, 
      imagen: 'assets/images/gorraedition.jpg',
      descripcion: 'Edición limitada en negro total con bordado sutil y elegante.' 
    }
  ];

  constructor() {}
}