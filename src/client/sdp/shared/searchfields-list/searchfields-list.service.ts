import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../config/env.config';
import { environment } from '../../environment';



/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class SearchFieldsListService {
  private RMMAPIURL: string = environment.RMMAPI;

  /**
   * Creates a new FieldsListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  get(): Observable<string[]> {
   return this.http.get(this.RMMAPIURL + 'records/fields')
      .map((res: Response) => res.json())
                    .catch(this.handleError);
  }
  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

