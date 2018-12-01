import React, { Component } from 'React';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onSubmitLogin(){
    const { email, password, loginUser } = this.props;
    loginUser({email, password});
  }

  renderError(){
    const error = this.props.error;
    const errorTextStyle = styles.errorTextStyle;
    if (!error) {
      return null;
    }
    return (
      <CardSection>
        <Text style={errorTextStyle}>{error}</Text>
      </CardSection>
    );
  }

  render() {

    const { email, password } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@email.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={password}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onSubmitLogin.bind(this)}>
            Login
          </Button>
        </CardSection>

        {this.renderError()}
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password, error } = state.auth;
  return {
    email,
    password,
    error
  };
};

export default connect(mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);


const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20
  }
}
