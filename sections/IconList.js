import React, { Component } from 'react';
import { Container, Header, Content, Icon } from 'native-base';
export default class IconExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Icon type="FontAwesome" name="home" />
        </Content>
      </Container>
    );
  }
}