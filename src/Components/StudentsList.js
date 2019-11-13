import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

import { studentsListData } from '../Actions/Index';

class StudentsList extends Component {
    componentWillMount() {
        this.props.studentsListData();
    };

    componentWillReceiveProps(nextProps) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(nextProps.studentsArray);
    };

    render() {
        return (
            <View>
                <Text> Öğrneci Listesi</Text>
                <Text> Öğrneci Listesi</Text>
                <Text> Öğrneci Listesi</Text>
                <Text> Öğrneci Listesi</Text>
            </View>
        )
    }
}

const mapStateToProps = ({ studentDataResponse }) => {
    const studentsArray = _.map(studentDataResponse.data, (val, uid) => {
        return { ...value, uid };
    });

    return { studentsArray };
};

export default connect(mapStateToProps, { studentsListData })(StudentsList);