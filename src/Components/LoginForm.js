import React, { Component } from 'react';
import { TextInput, Alert, View } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../Actions/Index';
import { Button, Card, CardSection, Spinner } from '../Shared/Index';

class LoginForm extends Component {
    state = { email: '', password: '', loading: false }

    clickLogin() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    loginSucces() {
        console.log('Başarılı');
        this.setState({ loading: false });
    };

    loginFail() {
        console.log('Hatalı');
        this.setState({ loading: false });
        Alert.alert('Mesaj', 'Kullanıcı adınız veya şifreniz hatalı!', { text: 'Tamam', onPress: () => null });
    };

    renderButon() {
        if (!this.props.loading) {
            return <Button onPress={this.clickLogin.bind(this)}>Giriş</Button>;
        }
        return <Spinner size='small'></Spinner>;
    }

    render() {
        const { inputStyle, viewStyle } = styles;
        return (
            <View style={viewStyle}>
                <Card>
                    <CardSection>
                        <TextInput
                            placeholder="E-mail"
                            style={inputStyle}
                            value={this.props.email}
                            onChangeText={email => this.props.emailChanged(email)} />
                    </CardSection>
                    <CardSection>
                        <TextInput
                            placeholder="Password"
                            style={inputStyle}
                            value={this.props.password}
                            onChangeText={password => this.props.passwordChanged(password)}
                            secureTextEntry />
                    </CardSection>
                    <CardSection>
                        {this.renderButon()}
                    </CardSection>
                </Card>
            </View>
        );
    };
};

const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    },
    viewStyle: {
        flex: 1,
        backgroundColor: 'white'
    }
};

const mapStateToProps = ({ kimlikDogrulamaResponse }) => {
    const { email, password, loading } = kimlikDogrulamaResponse;
    return {
        email: "ugur@ugurdegirmenci.net",
        password: "123456",
        loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);