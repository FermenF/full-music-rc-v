export interface RootSearchState {
    searchReducer: SearchAction;
}

export type SearchAction =
    | { type: 'ACTIVATE_SEARCH'; payload: true }
    | { type: 'DEACTIVATE_SEARCH'; payload: false };

export const activateSearch = (): { type: 'ACTIVATE_SEARCH'; payload: true } => ({
    type: 'ACTIVATE_SEARCH',
    payload: true,
});

export const deactivateSearch = (): { type: 'DEACTIVATE_SEARCH'; payload: false } => ({
    type: 'DEACTIVATE_SEARCH',
    payload: false,
});

const initialState: boolean = false;

const searchReducer = (state: boolean = initialState, action: { type: string; payload: boolean }): boolean => {
    switch (action.type) {
        case 'ACTIVATE_SEARCH':
            return true;
        case 'DEACTIVATE_SEARCH':
            return false;
        default:
            return state;
    }
};

export default searchReducer;
