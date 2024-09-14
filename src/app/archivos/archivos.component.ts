import { Component, Input, OnInit } from '@angular/core';
import { FILE_LIST } from '../../data/file.storage';
import { DatoArchivoComponent } from "../dato-archivo/dato-archivo.component";
import { FileItem, FileType } from '../../models/file.item.model';
import { CommonModule } from '@angular/common';
import { AltaArchivoComponent } from "../alta-archivo/alta-archivo.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-archivos',
  standalone: true,
  imports: [DatoArchivoComponent, CommonModule, AltaArchivoComponent, FormsModule],
  templateUrl: './archivos.component.html',
  styleUrl: './archivos.component.css'
})
export class ArchivosComponent implements OnInit{
  @Input() fileList : FileItem[] = []; 
  listaItems : any[] = [];
  listaMostrar : any[] = [];

  nuevoArchivo = false;
  
  ngOnInit(): void {
    
    this.fileList.forEach(i => this.listaItems.push({dato : i, chequeado : false}));
    this.obtenerListaFiltrada();
    this.ordenarAlfabeticamente();
    console.log(this.listaItems);

  }  

  ordenarAlfabeticamente(){
    this.listaMostrar.sort((a, b) =>{
      let tipo = a.dato.type - b.dato.type;

      if(tipo !== 0){
        return tipo;
      }
      return a.dato.name.localeCompare(b.dato.name);
    })
  }

  comprobarEliminar(){
    let total = 0;
    this.listaMostrar.forEach(i => {
      if(i.chequeado){
        total++;
      }
    })

    if(total > 1){
      if(!confirm("¿Esta seguro que desea eliminar los " + total + " archivos?")){
        return;
      }
    }
    this.borrar();
  }

  borrar(){
    this.listaItems = this.listaItems.filter(i => !i.chequeado);
    this.obtenerListaFiltrada();
  }

  obtenerListaFiltrada(){
    this.listaMostrar = this.listaItems.filter(i => typeof i.dato.parentId === "undefined");
  }

  obtenerHijos(id : string){
    return this.listaItems.filter(i => i.dato.parentId == id)
  }

  obtenerDuenos(owners : any[]){
    return owners.slice(0, 3);
  }
  
  cambiarVentana(evento : boolean){
    this.nuevoArchivo = evento;
  }

  agregar(n : any){
    this.listaItems.push({dato : n, chequeado : false});
    console.log(this.listaItems);
    this.obtenerListaFiltrada();
    this.ordenarAlfabeticamente();
    console.log(this.listaMostrar);
  }
}
