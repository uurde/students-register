import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Picker } from 'react-native';

import { Button, CardSection, Card, Spinner } from '../Shared/Index';
import { studentChange, studentUpdate, studentDelete } from '../Actions/Index';

const Item = Picker.Item;
class StudentUpdate extends Component {
    state = { isim: "", soyisim: "", ogrencinumara: "", sube: "" };

    componentWillMount() {
        const { isim, soyisim, ogrencinumara, sube } = this.props.student;
        this.setState({ isim, soyisim, ogrencinumara, sube });
    };

    clickUpdate() {
        const { isim, soyisim, ogrencinumara, sube } = this.state;

        this.props.studentUpdate({ isim, soyisim, ogrencinumara, sube, uid: this.props.student.uid });
    };

    clickDelete() {
        this.props.studentDelete({ uid: this.props.student.uid });
    };

    renderButon() {
        if (!this.props.loadingUpdate) {
            return <Button onPress={this.clickUpdate.bind(this)}>Güncelle</Button>;
        }
        return <Spinner size='small'></Spinner>;
    }

    renderDeleteButon() {
        if (!this.props.loadingDelete) {
            return <Button onPress={this.clickDelete.bind(this)}>Sil</Button>;
        }
        return <Spinner size='small'></Spinner>;
    }

    render() {
        const { inputStyle, pickerStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <TextInput
                        placeholder="İsim"
                        style={inputStyle}
                        value={this.state.isim}
                        onChangeText={isim => this.setState({ isim })} />
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="Soyisim"
                        style={inputStyle}
                        value={this.state.soyisim}
                        onChangeText={soyisim => this.setState({ soyisim })} />
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="Öğrenci Numarası"
                        style={inputStyle}
                        value={this.state.ogrencinumara}
                        onChangeText={ogrencinumara => this.setState({ ogrencinumara })} />
                </CardSection>
                <CardSection>
                    <Text>Şube</Text>
                    <Picker
                        style={pickerStyle}
                        selectedValue={this.state.sube}
                        onValueChange={sube => this.setState({ sube })}
                        mode="dropdown">
                        <Item label="A Şubesi" value="asube" />
                        <Item label="B Şubesi" value="bsube" />
                        <Item label="C Şubesi" value="csube" />
                        <Item label="D Şubesi" value="dsube" />
                    </Picker>
                </CardSection>
                <CardSection>
                    {this.renderButon()}
                </CardSection>
                <CardSection>
                    {this.renderDeleteButon()}
                </CardSection>
            </Card>
        );
    }
};

const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    },
    pickerStyle: {
        flex: 1
    }
};

const mapStateToProps = ({ studentUpdateResponse }) => {
    const { loadingUpdate, loadingDelete } = studentUpdateResponse;
    return { loadingUpdate, loadingDelete };
};

export default connect(mapStateToProps, { studentChange, studentUpdate, studentDelete })(StudentUpdate);