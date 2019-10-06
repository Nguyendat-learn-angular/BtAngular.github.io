import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BaiTap';
  public diem: number;
  public kq;

  xeploai() {
    if (this.diem < 5) {
      this.kq = "rớt"
    }
    else {
      this.kq = "đậu"
    }
  };

  // bài 2:
  public thuong = [
    {
      age: "DUới 25",
      rate: 0.07,
   
    },
    {
      age: "Từ 25 đến 40",
      rate: 0.1,

    },
    {
      age: "Trên 40",
      rate: 0.15,
  
    }
  ];
  
  public luong:number=null;
  public gender:String="Nam";
  public rate:number=null;
 
  public n:number;
  TinhTienThuong(){
   
    this.n=this.luong*this.rate;
    if(this.gender=="Nữ"){
      this.n=this.n+200000;
    }
    return this.n;
    
    
  }
  public luongb4:number=null;
  TinhTienThuongB4(){
   
    this.n=this.luongb4*this.rate;
    if(this.gender=="Nữ"){
      this.n=this.n+200000;
    }
    return this.n;
    
    
  }


}

