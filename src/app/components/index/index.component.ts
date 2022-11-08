import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'; 
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { Pokedex  } from 'src/app/models/books';
import { ErrorsService } from 'src/app/services/errors.service'; 
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { SearchService } from 'src/app/services/search.service';
import { title } from 'process';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  test:string= ''
 
public libro : any= [];


@ViewChild('searchInput')
InputSearch?: ElementRef

  constructor( 
    private http: HttpClient,
    private service: SearchService,
    private afAuth: AngularFireAuth, 
    private router: Router,
    private errorsService: ErrorsService
    ) {

 }


  ngOnInit(): void {

  }

cerrarsesion() {
  this.afAuth.signOut().then(()=> this.router.navigate(['/login']));
 }


}
