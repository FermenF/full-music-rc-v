import { SearchAction } from "../Reducers/searchReducer";

export const activateSearch = (): SearchAction => ({
    type: 'ACTIVATE_SEARCH',
    payload: true,
});

export const deactivateSearch = (): SearchAction => ({
    type: 'DEACTIVATE_SEARCH',
    payload: false,
});