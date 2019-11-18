import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import { studentsListData } from '../Actions/Index';

class StudentsList extends Component {
    componentDidMount() {
        this.props.studentsListData();
    }


    renderRow({ item }) {
        return <ListItem ogrenci={item} />;
    }

    render() {
        return (
            <FlatList
                data={this.props.studentsArray}
                renderItem={this.renderRow}
                keyExtractor={(item, index) => index.toString()}
            />

        );
    }
}
const mapStateToProps = ({ studentDataResponse }) => {
    // studentDataResponse
    const studentsArray = _.map(studentDataResponse, (val, uid) => {
        return { ...val, uid }; // { isim: ayse, soyisim: soyu, sube: 1c, uid: Kq9 }
    });
    return { studentsArray };
};


export default connect(mapStateToProps, { studentsListData })(StudentsList);