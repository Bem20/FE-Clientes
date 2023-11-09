import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-agregar-editar',
  templateUrl: './agregar-editar.component.html',
  styleUrls: ['./agregar-editar.component.css']
})
export class AgregarEditarComponent implements OnInit {

  loading: boolean = false;
  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      codigoPais: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarCliente() {

    const cliente: cliente = {
      nombre: this.form.value.nombre,
      telefono: this.form.value.telefono,
      email: this.form.value.email,
      codigoPais: this.form.value.codigoPais,
      descripcion: this.form.value.descripcion
    }

    console.log(cliente)

  }

}
