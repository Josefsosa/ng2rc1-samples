import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Quote } from './quote';

@Component({
  moduleId: module.id,
  selector: 'app-chuck-norris',
  templateUrl: 'chuck-norris.component.html',
  styleUrls: ['chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {
  quoteOfTheDay:string = "";

  private qutoesUrl = 'http://localhost:3002/api/random-quote';  // URL to web API

  // getQuote(): Observable<Quote[]> {
  // return this.http.get(this.qutoesUrl)
  //   .map(this.extractData)
  //   .catch(this.handleError);
  // }

  constructor(public http:Http) {
    //TODO
  }

  ngOnInit() {
    //TODO
  }
  // getQuote() {
  //   // this.http.get('http://52.39.151.198:8282/ID=C310000899')
  //   // http://localhost:3001/api/random-quote
  //     this.http.get('http://localhost:3002/api/random-quote')
  //       .map(res => res.text())
  //       .subscribe(
  //       data => this.quoteOfTheDay = data,
  //       err => this.logError(err),
  //       () => console.log("Random quote complete.")
  //   )
  //   }
  //
  //     logError(err) {
  //     console.error("Oops somthing is wrong" + err);
  //   }

}
