import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileItem, FileOwner, FileType } from '../../models/file.item.model';
import { OWNERS } from '../../data/file.storage';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta-archivo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './alta-archivo.component.html',
  styleUrl: './alta-archivo.component.css'
})
export class AltaArchivoComponent implements OnInit{
  @Output() visible = new EventEmitter<boolean>();
  @Output() nuevo = new EventEmitter<any>();

  duenos = OWNERS;
  tipoArchivo = FileType;
  lduenos : any[] = [];
  selectDueno : any = null;

  nombreNuevo : string = "";
  fechaNueva : Date = new Date();
  tipoNuevo : FileType = FileType.FILE;
  carpetaNueva? : FileItem = {id: '',
    name: '',
    creation: new Date(),
    type: FileType.FILE,
    owners: []}
  duenoNuevo : FileOwner[] = [];

  @Input() archivos : any[] = [];

  ngOnInit(): void {
    
  }

  obtenerCarpetas(){
    return this.archivos.filter(i => i.dato.type == FileType.FOLDER);
  }

  agregarDueno(){
    this.lduenos.push(this.selectDueno);
    this.duenos.splice(this.duenos.indexOf(this.selectDueno),1);
    this.selectDueno = null;
  }

  nuevoDoc(datos : any){
     let doc: FileItem = {
      id: this.generarId(),
      name: datos.nombre,
      creation: datos.fecha,
      type: datos.tipo as FileType,
      owners: this.lduenos
    };
    return doc;
  }

  generarId(){
    return Math.random().toString(36).substr(2, 9);
  }

  crear(form : any){
    if(form.valid){
      this.nuevo.emit(this.nuevoDoc(form.value));
      this.cambiarVentana(form);
    }
  }

  limpiar(form : any){
    form.reset();
  }

  cambiarVentana(form : any){
    this.limpiar(form);
    this.visible.emit(false);
  }
}
