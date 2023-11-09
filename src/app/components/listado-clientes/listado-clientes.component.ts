import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})

export class ListadoClientesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'telefono', 'email', 'codigoPais', 'acciones'];
  dataSource = new MatTableDataSource<cliente>();
  loading: boolean = false;


  @ViewChild(MatPaginator) paginator!: MatPaginator; //operador de ts para decirle que no es nulo
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _clienteService: ClienteService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length > 0) {
      this.paginator._intl.itemsPerPageLabel = 'Items por pagina'
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerClientes() {
    this.loading = true;
    this._clienteService.getClientes().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
    })
  }

  // obtenerClientes() {
  //   this.loading = true;
  //   this._clienteService.getClientes().subscribe({
  //     next: (data) => {
  //       this.loading = false;
  //       this.dataSource.data = data;
  //     },
  //     error: (e) => this.loading = false,
  //     complete: () => console.info('complete')
  //   })
  // }

  eliminarCliente() {

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this._snackBar.open('Cliente eliminado', '', {
        duration: 1000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
    }, 3000);
  }

}
