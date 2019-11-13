import { STUDENT_CHANGED } from '../Actions/Types';

const INITIAL_STATE = {
    isim: "",
    soyisim: "",
    ogrencinumara: "",
    sube: ""
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STUDENT_CHANGED:
            return { ...state, [action.payload.props]: action.payload.value };
        default:
            return state;
    }
};