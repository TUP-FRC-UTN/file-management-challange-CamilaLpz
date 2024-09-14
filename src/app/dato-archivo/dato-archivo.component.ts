import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileOwner } from '../../models/file.item.model';
import { CommonModule } from '@angular/common';
import { FileItem } from '../../models/file.item.model';
import { FileType } from '../../models/file.item.model';

@Component({
  selector: 'app-dato-archivo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dato-archivo.component.html',
  styleUrl: './dato-archivo.component.css'
})
export class DatoArchivoComponent {
  @Input() archivo : FileItem = {id: '',
    name: '',
    creation: new Date(),
    type: FileType.FILE,
    owners: []}

  @Input() hijos : any[] = []; 
  
  obtenerTooltip(nombre : string){
    if(nombre.length > 10){
      return nombre;
    }
    return "";
  }

  obtenerNombre(nombre : string){
    if(nombre.length > 10){
      return nombre.substring(0, 10) + "...";
    }
    return nombre;
  }

  obtenerTipoArchivo(tipo : FileType){
    if(tipo == FileType.FILE){
      return "bi-file-earmark";
    }
      return "bi-folder";
  }
}
