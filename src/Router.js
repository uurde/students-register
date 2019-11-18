import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './Components/LoginForm';
import StudentsList from './Components/StudentsList';
import StudentCreate from './Components/StudentCreate';
import StudentUpdate from './Components/StudentUpdate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="kimlik">
                <Scene key="loginScreen" component={LoginForm} title="Giriş Ekranı" />
                <Scene key="studentsList" component={StudentsList} title="Öğrenci Listesi" rightTitle="Yeni" onRight={() => Actions.studentCreate()} />
                <Scene key="studentCreate" component={StudentCreate} title="Öğrenci Kaydet" />
                <Scene key="studentUpdate" component={StudentUpdate} title="Öğrenci Güncelle" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;