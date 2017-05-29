import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  recipe = {};

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
  }

  saveRecipe() {
    this.recipeService.saveRecipe(this.recipe).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/recipe-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
