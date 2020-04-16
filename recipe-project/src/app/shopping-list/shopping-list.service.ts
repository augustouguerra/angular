import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs';

export class ShoppingListService {
    
    private ingredients: Ingredient[] = [
        new Ingredient('Tomato', 2),
        new Ingredient('Potato', 5)
    ];

    // propiedad a la que me suscribo para escuchar eventos
    ingredientsSelected = new Subject<Ingredient[]>()
    startedEditing = new Subject<number>()
    
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsSelected.next(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredients(ingredients: Ingredient[]) {
        //Emits a lot of event each for push
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient)
        // }

        // Spread operator
        this.ingredients.push(...ingredients);
        this.ingredientsSelected.next(this.ingredients);
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsSelected.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsSelected.next(this.ingredients.slice());
    }
}