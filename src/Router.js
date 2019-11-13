import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './Components/LoginForm';
import StudentsList from './Components/StudentsList';
import StudentCreate from './Components/StudentCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="kimlik">
                <Scene key="loginScreen" component={LoginForm} title="Giriş Ekranı" />
                <Scene key="studentsList" component={StudentsList} title="Öğrenci Listesi" rightTitle="Yeni" onRight={() => Actions.studentCreate()} />
                <Scene initial key="studentCreate" component={StudentCreate} title="Öğrenci Kaydet"/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;