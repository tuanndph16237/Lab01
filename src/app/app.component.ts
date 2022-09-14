import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lab01';
  student={
    FullName:'Nguyen Duc Tuan',
  age: 20,
  Gioitinh:'Nam',
DateofBirth: '05/10/2002',
images: '../assets/images/Visual_Studio_Code_1.35_icon.svg.png',
diemTB:6.0
  }

}
