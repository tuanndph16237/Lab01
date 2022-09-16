import { AfterViewInit, Component } from '@angular/core';
import { Inventor } from 'src/interface/Inventor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'Lab01';

inventors: Inventor[] = [
{id:1, first:"Albert", last:"Einstein", year: 1879, passed:1955},
{id:2, first:"Isaac", last:"Newton", year: 1643, passed:1727},
{id:3, first:"Marie", last:"Curie", year: 1867, passed:1934},
{id:4, first:"Galileo", last:"Galilei", year: 1564, passed:1642}
]
ngAfterViewInit(): void {
  this.render(this.show);
}
show(innerHTML:string){
  let item =document.querySelector('#inventor');

  if (item){
    item.innerHTML = innerHTML;
  }
  }
  render(callback: (data: string)=> any){
  let innerHTML= this.inventors.map(inventor=>{
  return `<tr>
  <td>${inventor.id}</td>
  <td>${inventor.first}</td>
  <td>${inventor.last}</td>
  <td>${inventor.year}</td>
  <td>${inventor.passed}</td>
  </tr>`;
  },'').join('');
  callback(innerHTML)
  }
}
