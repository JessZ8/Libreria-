import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {



  constructor() { 
    
  }
  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = '../../assets/js/index.js';
    node.src = '../../assets/js/template.ejs'
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('body')[0].appendChild(node);
  }

 


}
