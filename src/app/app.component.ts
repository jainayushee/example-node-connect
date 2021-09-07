import { Component } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-node-connect';

  constructor(private webReq: WebRequestService) { }

  getAllBlogs(){
    this.webReq.get().subscribe(response => {
      console.log(response);      
    })
  }

  getBlogByID(id:string){
    this.webReq.getByID(id).subscribe(response =>
      {
        console.log(response);
        
      })

  }
}
