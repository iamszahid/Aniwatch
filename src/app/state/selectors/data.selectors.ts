import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectMyDataState = createFeatureSelector<any>('myData');

export const selectMyData = createSelector(
  selectMyDataState,
  (state) => state.data
);