import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: Http) { }

  productObject:object = {};
  confirmationString:string = "New Product has been added";
  isAdded: boolean = false;
  //Add a product to the Json data
  addNewProduct = function(product){
    this.productObj = {
      "name":product.name,
      "color":product.color
    }
    if(this.productObj.name != "" && this.productObj.color != ""){

    
    this.http.post("http://localhost:5555/products/", this.productObj).subscribe((res:Response) =>{
      this.isAdded = true;
    })
  }
  }

  ngOnInit() {
  }

}
