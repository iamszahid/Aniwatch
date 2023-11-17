import { createAction, props } from '@ngrx/store';

export const addData = createAction('[My Data] Add Data', props<{ data: any }>());