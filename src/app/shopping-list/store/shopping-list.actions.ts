import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const ADD_INGREDIENT = '[SHOPPING_LIST]_ADD_INGREDIENT';
export const ADD_INGREDIENTS =  '[SHOPPING_LIST]_ADD_INGREDIENTS';
export const UPDATE_INGREDIENT =  '[SHOPPING_LIST]_UPDATE_INGREDIENT';
export const DELETE_INGREDIENT =  '[SHOPPING_LIST]_DELETE_INGREDIENT';
export const START_EDIT =  '[SHOPPING_LIST]_START_EDIT';
export const STOP_EDIT =  '[SHOPPING_LIST]_STOP_EDIT';

export class AddIngredients implements Action {
    readonly type  = ADD_INGREDIENTS;
    constructor(public payload: Ingredient[]){}
}

export class UpdateIngredient implements Action {
    readonly type  = UPDATE_INGREDIENT;
    constructor(public payload: Ingredient){}
}

export class DeleteIngredient implements Action {
    readonly type  = DELETE_INGREDIENT;
}

export class StartEdit implements Action {
    readonly type  = START_EDIT;
    constructor(public payload: number){}
}

export class StopEdit implements Action {
    readonly type  = STOP_EDIT;
}

export class AddIngredient implements Action {
    readonly type  = ADD_INGREDIENT;
    //first approach create a prop for the payload
    // payload: Ingredient;

    //second approach inject a prop directly to the constructor
    constructor(public payload: Ingredient){}
}

export type Actions = 
  AddIngredient 
| AddIngredients 
| UpdateIngredient 
| DeleteIngredient
| StopEdit
| StartEdit;