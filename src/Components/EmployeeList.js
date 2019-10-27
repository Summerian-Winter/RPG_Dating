import React, {Component} from 'react';
import _ from 'lodash';
import {View, Text} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import {connect} from 'react-redux';
import {employeesFetch} from '../Actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    console.log('From component did mount');
    console.log(this.props);
    this.props.employeesFetch();
    this.createDataSource(this.props.employees);
  }

  createDataSource = employees => {
    // Listview and Datasource boggles me at the moment
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(employees);
  };

  // componentDidUpdate(nextProps) {
  //   console.log(`From component did update ${nextProps}`);
  //   this.createDataSource(nextProps);
  // }

  componentWillUpdate(nextProps) {
    console.log('from component will update');
    console.log(nextProps);
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('From component will recieve props');
  //   console.log(nextProps);
  //   this.createDataSource(nextProps);
  // }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    console.log(this.props);
    return (
      // <ListView
      //   enableEmptySections
      //   dataSource={this.dataSource}
      //   renderRow={this.renderRow}
      // />
      <View>
        <Text>ListItem</Text>
        <Text>ListItem</Text>
        <Text>ListItem</Text>
        <Text>ListItem</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(`From map State to props ${state.employees.name}`);
  console.log(state);
  // _.map would put all the returned objects into an array and employees would be an array of objects
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid}; // This would return something like {shift: 'Monday', name: 'Kaladin', phone: 12335354, uid: 1}
  });

  employees.forEach(element => {
    console.log(`From map state to props ${element.name}`);
  });
  return {employees};
};

export default connect(
  mapStateToProps,
  {employeesFetch},
)(EmployeeList);
