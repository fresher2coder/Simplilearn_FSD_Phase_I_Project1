const pharmacyReducerDefaultState = [];

export default (state = pharmacyReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_MEDICINE':
            return [
                ...state,
                action.pharmacy
            ];
        case 'REMOVE_MEDICINE':
            return state.filter(({ medicineId }) => medicineId !== action.medicineId);
        case 'EDIT_MEDICINE':
            return state.map((pharmacy) => {
                if (pharmacy.medicineId === action.medicineId) {
                    return {
                        ...pharmacy,
                        ...action.updates
                    };
                } else {
                    return pharmacy;
                }
            });
        case 'GET_MEDICINE':
            return action.pharmacy;
        default:
            return state;
    }
};