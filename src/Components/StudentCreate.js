import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Picker } from 'react-native';
import { Button, CardSection } from '../Shared/Index';

import { studentChange } from '../Actions/Index';

const Item = Picker.Item;
class StudentCreate extends Component {
    clickSave() {

    };

    render() {
        const { inputStyle, viewStyle, pickerStyle } = styles;
        return (
            <View style={viewStyle}>
                <CardSection>
                    <TextInput
                        placeholder="İsim"
                        style={inputStyle}
                        value={this.props.isim}
                        onChangeText={isim => this.props.studentChange({ props: 'isim', value: isim })} />
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="Soyisim"
                        style={inputStyle}
                        value={this.props.soyisim}
                        onChangeText={soyisim => this.props.studentChange({ props: 'soyisim', value: soyisim })} />
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="Öğrenci Numarası"
                        style={inputStyle}
                        value={this.props.ogrencinumara}
                        onChangeText={ogrencinumara => this.props.studentChange({ props: 'ogrencinumara', value: ogrencinumara })} />
                </CardSection>
                <CardSection>
                    <Text>Şube</Text>
                    <Picker style={pickerStyle} selectedValue={this.props.sube} onValueChange={sube => this.props.studentChange({ props: 'sube', value: sube })} mode="dropdown">
                        <Item label="A Şubesi" value="asube" />
                        <Item label="B Şubesi" value="bsube" />
                        <Item label="C Şubesi" value="csube" />
                        <Item label="D Şubesi" value="dsube" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.clickSave.bind(this)}>Kaydet</Button>
                </CardSection>
            </View>
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
    viewStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
    pickerStyle: {
        flex: 1
    }
};

const mapStateToProps = ({ studentsListResponse }) => {
    const { isim, soyisim, ogrencinumara, sube } = studentsListResponse;
    return {
        isim,
        soyisim,
        ogrencinumara,
        sube
    };
};

export default connect(mapStateToProps, { studentChange })(StudentCreate);