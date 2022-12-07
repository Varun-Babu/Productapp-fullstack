import { Component } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  productId = ""
  productName = ""
  expDate = ""
  brand = ""
  price = ""
  sellerName = ""
  distributorName = ""

  readValue = ()=>{
    let data:any = {"productId":this.productId,"productName":this.productName,"expDate":this.expDate,"brand":this.brand,"price":this.price,"sellerName":this.sellerName,"distributorName":this.distributorName}
    console.log(data)
  }

}
