import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
   imports: [FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    public searchTerm: string = ''; // Almacena el término de búsqueda
    resultados: veterinarios[] = []; // Donde se almacenarán los resultados simulados

    // Simula una búsqueda de veterinarios
    buscarVeterinarios() {
      console.log(this.searchTerm)
      const veterinarios = [
        { id: 1, name: 'Veterinaria Felina', location: 'Ciudad A', rating: 4.5 },
        { id: 2, name: 'Clinica Canina', location: 'Ciudad B', rating: 4.8 },
        { id: 3, name: 'Veterinaria Central', location: 'Ciudad A', rating: 4.2 },
        { id: 4, name: 'Animal Care Center', location: 'Ciudad C', rating: 4.7 },
        { id: 5, name: 'Happy Paws Vet', location: 'Ciudad D', rating: 4.9 },
        { id: 6, name: 'Clinica Vida Animal', location: 'Ciudad A', rating: 4.3 },
        { id: 7, name: 'Pet Health Clinic', location: 'Ciudad E', rating: 4.6 },
        { id: 8, name: 'Veterinaria Los Amigos', location: 'Ciudad B', rating: 4.4 },
        { id: 9, name: 'Cuidados Felices', location: 'Ciudad F', rating: 4.8 },
        { id: 10, name: 'Healthy Pets', location: 'Ciudad G', rating: 4.5 },
        { id: 11, name: 'Amor Animal Vet', location: 'Ciudad C', rating: 4.2 },
        { id: 12, name: 'Veterinaria El Arca', location: 'Ciudad A', rating: 4.6 },
        { id: 13, name: 'Clinica La Huella', location: 'Ciudad H', rating: 4.7 },
        { id: 14, name: 'Mascotas y Salud', location: 'Ciudad D', rating: 4.3 },
        { id: 15, name: 'Vet Family Care', location: 'Ciudad E', rating: 4.9 },
        { id: 16, name: 'Veterinaria Bienestar', location: 'Ciudad I', rating: 4.8 },
        { id: 17, name: 'Clinica San Francisco', location: 'Ciudad J', rating: 4.4 },
        { id: 18, name: 'Pet Love Center', location: 'Ciudad B', rating: 4.7 },
        { id: 19, name: 'Cuidado Animal Plus', location: 'Ciudad F', rating: 4.5 },
        { id: 20, name: 'Centro Veterinario Luna', location: 'Ciudad G', rating: 4.6 },
        { id: 21, name: 'Clinica Animalia', location: 'Ciudad K', rating: 4.9 },
        { id: 22, name: 'Veterinaria La Esperanza', location: 'Ciudad L', rating: 4.2 },
        { id: 23, name: 'Clinica Miau y Guau', location: 'Ciudad M', rating: 4.8 },
        { id: 24, name: 'Vet Care Integral', location: 'Ciudad H', rating: 4.3 },
        { id: 25, name: 'Veterinaria Animal World', location: 'Ciudad N', rating: 4.7 },
        { id: 26, name: 'Clinica Naturalis', location: 'Ciudad O', rating: 4.6 },
        { id: 27, name: 'Mascotas en Forma', location: 'Ciudad P', rating: 4.5 },
        { id: 28, name: 'Pet Harmony', location: 'Ciudad Q', rating: 4.8 },
        { id: 29, name: 'Cuidado Total Vet', location: 'Ciudad R', rating: 4.4 },
        { id: 30, name: 'Veterinaria La Paz', location: 'Ciudad S', rating: 4.6 },
        { id: 31, name: 'Clinica Animal Kingdom', location: 'Ciudad T', rating: 4.9 },
        { id: 32, name: 'Vet Salud Integral', location: 'Ciudad U', rating: 4.7 },
        { id: 33, name: 'Centro de Mascotas Felices', location: 'Ciudad V', rating: 4.3 }
    ];


      // Filtra los resultados según el término de búsqueda
      this.resultados = veterinarios.filter((vet) =>
        vet.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        vet.location.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  export interface veterinarios{
    id:number;
    name:string;
    location:string
    rating:number;

}

