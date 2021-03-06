import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  @Input('mensajeInterno') mensaje: any;
  @Output() clickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('Pulso en el hijo: ' + this.mensaje.id);
    this.clickPost.emit(this.mensaje.id);
  }
}
