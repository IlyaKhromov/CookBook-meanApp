import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe = {};

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRecipe(this.route.snapshot.params['id']);
  }

  getRecipe(id) {
    this.recipeService.showRecipe(id).then((res) => {
      this.recipe = res;
      console.log(this.recipe);
    }, (err) => {
      console.log(err);
    });
  }

  updateRecipe(id) {
    this.recipeService.updateRecipe(id, this.recipe).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/recipe-details', id]);
    }, (err) => {
      console.log(err);
    });
  }
}