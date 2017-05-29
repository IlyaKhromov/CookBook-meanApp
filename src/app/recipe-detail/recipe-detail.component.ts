import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe = {};

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipeDetail(this.route.snapshot.params['id']);
  }

  getRecipeDetail(id) {
    this.recipeService.showRecipe(id).then((res) => {
      this.recipe = res;
      console.log(this.recipe);
    }, (err) => {
      console.log(err);
    });
  }

  deleteRecipe(id) {
    this.recipeService.deleteRecipe(id).then((result) => {
      this.router.navigate(['/recipes']);
    }, (err) => {
      console.log(err);
    });
  }
}
