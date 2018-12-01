import React, { Component } from 'React';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
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
    if (error) {
      return (
        <CardSection>
          <Text style={errorTextStyle}>{error}</Text>
        </CardSection>
      );
    };
  }

  renderButton(){
    const loading = this.props.loading;
    if (loading) {
      return (
        <Spinner size="large" />
      );
    }
    return (
      <Button onPress={this.onSubmitLogin.bind(this)}>
        Login
      </Button>
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
          {this.renderButton()}
        </CardSection>

        {this.renderError()}
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, email, password, error } = state.auth;
  return {
    email,
    password,
    error,
    loading
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
