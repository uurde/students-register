import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { STUDENT_CHANGED, CREATE_REQUEST, CREATE_REQUEST_SUCCESS, STUDENT_LIST_DATA_SUCCESS } from './Types';

export const studentChange = ({ props, value }) => {
    return (dispatch) => {
        dispatch({
            type: STUDENT_CHANGED,
            payload: { props, value }
        });
    };
};

export const studentCreate = ({ isim, soyisim, ogrencinumara, sube }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: CREATE_REQUEST });
        firebase.database()
            .ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
            .push({ isim, soyisim, ogrencinumara, sube })
            .then(() => {
                dispatch({ type: CREATE_REQUEST_SUCCESS });
                Actions.pop(); //router.js içinde tanımlı keyler ile de navigasyon yapabiliriz.
            });
    };
};

export const studentListData = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/kullancilar/${currentUser.uid}/ogrenciler`)
            .on('value', snapshot => {
                dispatch({ type: STUDENT_LIST_DATA_SUCCESS, payload: snapshot.value });
            });
    };
};