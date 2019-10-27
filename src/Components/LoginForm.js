import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card, CardSection, Button, Input, Spinner} from './common';
import {connect} from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  registerUser,
} from '../Actions';

class LoginForm extends Component {
  state = {loggedIn: {}};

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;

    this.props.loginUser({email, password});
  }

  onSignUp() {
    const {email, password} = this.props;
    this.props.registerUser({email, password});
  }

  onErrors() {
    const {error} = this.props;
    if (error !== null) {
      return (
        <Text
          style={{
            color: 'red',
            fontSize: 20,
            backgroundColor: 'black',
            padding: 20,
          }}>
          {error.message}
        </Text>
      );
    }
  }

  onLoading() {
    if (this.props.loading === true) {
      return (
        <View style={{padding: 50}}>
          <Spinner />
        </View>
      );
    } else {
      return (
        <View>
          <CardSection>{this.onErrors()}</CardSection>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
          </CardSection>
          <CardSection>
            <Button onPress={this.onSignUp.bind(this)}>Sign Up</Button>
          </CardSection>
        </View>
      );
    }
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="jon@gmail.com"
            label="Email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <View>{this.onLoading()}</View>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  user: state.auth.user,
  loading: state.auth.loading,
});

export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged, loginUser, registerUser},
)(LoginForm);
