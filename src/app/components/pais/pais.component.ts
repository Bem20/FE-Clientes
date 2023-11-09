import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { pais } from 'src/app/interfaces/pais';
import { PaisService } from 'src/app/services/pais.services';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})

export class PaisComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['codigo', 'descripcion'];
  dataSource = new MatTableDataSource<pais>();
  loading: boolean = false;


  @ViewChild(MatPaginator) paginator!: MatPaginator; //operador de ts para decirle que no es nulo
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _paisService: PaisService) { }

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
    this._paisService.getPais().subscribe(data => {
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
