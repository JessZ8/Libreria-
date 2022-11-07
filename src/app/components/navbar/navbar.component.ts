import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'; 
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';

import { ErrorsService } from 'src/app/services/errors.service'; 
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { SearchService } from 'src/app/services/search.service';
import { title } from 'process';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  test:string= ''
 
  public libro : any= [];
  
  public desc : any= [];
  
  @ViewChild('searchInput')
  InputSearch?: ElementRef
  
    constructor( 
      private http: HttpClient,
      private service: SearchService,
      private afAuth: AngularFireAuth, 
      private router: Router,
      ) {
  
   }
  
   ngAfterViewInit(){
    fromEvent<any>(this.InputSearch?.nativeElement, 'keyup')
    .pipe(
      map(event=> event.target.value),
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(text => this.service.emiText(text))
  
    
   }
  
    ngOnInit(): void {
     
      this.service.textObservable.subscribe(text=>{
         this.test =(text) 
      })
  
    }
  
  cerrarsesion(){
    this.afAuth.signOut().then(()=> this.router.navigate(['/login']));
   }
  
  
   /*getdescripcion() {
    this.http.get<ResqBooks>("https://api.itbook.store/1.0/books/9781617294136").subscribe((resp:ResqBooks) => {
      console.log(resp)
      this.router.navigate(['/index'])
      this.libro = resp.books
  
    });*/
  
  }
  
