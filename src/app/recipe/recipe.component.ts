import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: any;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  	this.getRecipeList();
  }

  getRecipeList(){
  	this.recipeService.getAllRecipes().then((res) =>{
  		this.recipes = res;
  	}, (err) => {
  		console.log(err);
  	});
  }

}
