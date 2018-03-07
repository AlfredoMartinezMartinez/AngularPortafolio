import { Component } from '@angular/core';
//obtencion de parametro url de productos en este caso
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})

export class ProductoComponent {

  constructor(private route:ActivatedRoute) {
      route.params.subscribe(parametros=>{
        console.log(parametros);
        console.log(parametros['id']);

      })

   }


}
