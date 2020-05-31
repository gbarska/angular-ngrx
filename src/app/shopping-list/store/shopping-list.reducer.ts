import * as shoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';

export interface ShoppingListState {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

export interface AppState {
  shoppingList: ShoppingListState;
}

const initialState : ShoppingListState = {
  ingredients: [ new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: shoppingListActions.Actions) {
  switch (action.type) {
    case shoppingListActions.ADD_INGREDIENT:
        // as the state is immutable always copy the old state and return a new and modified object
      return {
        // spread operator to copy all object's properties
        ...state,
        // modifying the prop for the new state
        ingredients: [...state.ingredients, action.payload]
      };

      case shoppingListActions.UPDATE_INGREDIENT:
        const ingredient = state.ingredients[state.editedIngredientIndex];

        // working on copy of state to mantain immutability
        const updatedIngredient = {
          ...ingredient,
          ...action.payload
        };

        // working on copy of state to mantain immutability
        const updatedIngredients = [...state.ingredients];

        updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

        return {
            ...state,
            ingredients: updatedIngredients,
            editedIngredientIndex: -1,
            editedIngredient: null
      };
      case shoppingListActions.START_EDIT:
        return {
          ...state,
          editedIngredientIndex: action.payload,
          editedIngredient: {...state.ingredients[action.payload]}
        };

     case shoppingListActions.STOP_EDIT:
        return {
          ...state,
          editedIngredient: null,
          editedIngredientIndex: -1
        };

      case shoppingListActions.ADD_INGREDIENTS:
        return {
          ...state,
          ingredients: [...state.ingredients, ...action.payload]
        };

      case shoppingListActions.DELETE_INGREDIENT:
            return {
              ...state,
              ingredients: state.ingredients.filter( ( element, elementIndex ) => {
                return elementIndex !== state.editedIngredientIndex;
              })
        };

    default:
      return state;
  }
}
