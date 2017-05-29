import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

  constructor(private http: Http) { }

  getAllRecipes() {
    return new Promise((resolve, reject) => {
      this.http.get('/recipe')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showRecipe(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/recipe/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveRecipe(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/recipe', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateRecipe(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/recipe/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteRecipe(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/recipe/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}