import { createReducer, on } from '@ngrx/store';
import { addData } from '../actions/data.actions';
import { MyDataState, initialMyDataState } from '../app.state'; // Import your state and its type

const _myDataReducer = createReducer(
  initialMyDataState,
  on(addData, (state, { data }) => ({ ...state, data }))
);


export function myDataReducer(state: MyDataState | undefined, action: any) {
  return _myDataReducer(state, action);
}