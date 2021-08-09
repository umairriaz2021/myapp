import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import {ProductType} from './product-type'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private Http: HttpClient ) { }
  
  convertToBase64(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        return reader.result;
      }
    }
  }
}
