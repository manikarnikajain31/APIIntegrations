import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { Posts } from './classes/posts';

import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'apiintegrations';

  constructor(private _freeApiService: freeApiService) {

  }



  lstcomments: Comments[] | undefined;
  lstPosts: Posts[] | undefined;
  objPosts: Posts | undefined;



  ngOnInit() {            //directly call service and display data from getAPi

    this._freeApiService.getcomments()
      .subscribe(            //api will be invoked by subscribe method
        data =>               //result returned from api will come in data section
        {
          this.lstcomments = data;
        }

      );



    this._freeApiService.getcommentsbyparameter()
      .subscribe
      (
        data => {

          this.lstPosts = data;

        }
      );



    //For POST

    var opost = new Posts();

    opost.body = 'testbody';
    opost.title = 'testtitle';
    opost.userId = 5;

    this._freeApiService.post(opost)
      .subscribe(

        data => {

          this.objPosts = data;   //whatever is returned from post API

        }
      )
  }
}

