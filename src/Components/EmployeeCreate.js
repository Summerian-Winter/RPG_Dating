import React, {Component} from 'react';
import {Card, CardSection, Button, Input} from './common';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate, createEmployee} from '../Actions/EmployeeActions';
import {Picker} from 'react-native';

class EmployeeCreate extends Component {
  onButtonPress() {
    const {name, phone, shift} = this.props;
    this.props.createEmployee({name, phone, shift: shift || 'Monday'});
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jon"
            value={this.props.name}
            onChangeText={text =>
              this.props.employeeUpdate({prop: 'name', value: text})
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="075821163178"
            value={this.props.phone}
            onChangeText={text =>
              this.props.employeeUpdate({prop: 'phone', value: text})
            }
          />
        </CardSection>

        <CardSection style={{flexDirection: 'column'}}>
          <Text
            style={{
              paddingLeft: 20,
              paddingTop: 10,
              paddingBottom: 5,
              fontSize: 18,
            }}>
            Shift
          </Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={val =>
              this.props.employeeUpdate({prop: 'shift', value: val})
            }
            style={{
              backgroundColor: '#ddd8',
            }}>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  name: state.employeeForm.name,
  phone: state.employeeForm.phone,
  shift: state.employeeForm.shift,
});

export default connect(
  mapStateToProps,
  {employeeUpdate, createEmployee},
)(EmployeeCreate);
