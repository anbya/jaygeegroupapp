import React, { Component } from 'react';
import { connect } from  'react-redux'
import {
  View,
  Button,
  AsyncStorage,
  Text,
} from 'react-native';
import { Content , Form, Item, Input, Label } from 'native-base';
import { withNavigation } from 'react-navigation';
import {
  BarIndicator,
} from 'react-native-indicators';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EMAIL: "",
      PASS: "",
      mainView:"flex",
      loadingView:"none"
    };
  }
  hideLoading = () => {
    this.setState({
      mainView:"flex",
      loadingView:"none"
    });
  };
  handleSubmit = () => {
    this.setState({
      mainView:"none",
      loadingView:"flex"
    });
    const sendlogin = {
      EMAIL: this.state.EMAIL,
      PASS: this.state.PASS
    };
    let userInfo=JSON.stringify(sendlogin);
    AsyncStorage.setItem('userToken', userInfo);
    this.props.navigation.navigate('App');
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <View style={{display:this.state.loadingView}}>
        <BarIndicator color='#019cde' />
      </View>
        <Content style={{width:'80%',display:this.state.mainView}}>
          <Form>
            <Item floatingLabel>
            <Label>Email</Label>
            <Input
            type="text"
            name="EMAIL"
            onChangeText={(text) => this.setState({ EMAIL:text})}
            required
            />
            </Item>
            <Item floatingLabel last style={{marginBottom:20}}>
            <Label>Password</Label>
            <Input
            type="text"
            name="PASS"
            onChangeText={(text) => this.setState({ PASS:text})}
            secureTextEntry={true}
            required
            />
            </Item>
            <Button title="Sign in" onPress={() => this.handleSubmit()}/>
            <Text style={{textAlign:'center'}}>OR</Text>
            <Button title="Sign up" onPress={() => this.props.navigation.navigate('SignUp')}/>
          </Form>
        </Content>
      </View>
    );
  }
}

export default withNavigation(connect()(SignInScreen));