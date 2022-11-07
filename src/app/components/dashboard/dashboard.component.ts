import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'; 
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { Pokedex  } from 'src/app/models/books';
import { ErrorsService } from 'src/app/services/errors.service'; 
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { SearchService } from 'src/app/services/search.service';
import { title } from 'process';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VolumeInfo } from '../../models/books';
import { keepUnstableUntilFirst } from '@angular/fire';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 search : string= '' 

 url1: string= ' https://api.itbook.store/1.0/search/'

public libro : any= [];

public desc : any= [];

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
    this.errorsService.getLibros()
    .subscribe( (resp: Pokedex) =>{ 
      console.log(resp)
      this.libro = resp.items
    });
   

  }

cerrarsesion() {
  this.afAuth.signOut().then(()=> this.router.navigate(['/login']));
 }


 getbusqueda(){
   this.http.get<Pokedex>('https://www.googleapis.com/books/v1/volumes?q='+ this.search +'&key=AIzaSyBtnovoPbABgnrKL0MNzayMt0iKYO9CDJo')
   .subscribe( (resp: Pokedex) =>{ 
     console.log(resp.items)
     this.libro = resp.items
   });
 }

 
  
 }

