import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail,} from 'native-base';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

export default class Secured extends Component {
    render() {
        return (
            <Container>
        <Header />
        <Content>
          <List style={{ paddingBottom: 20,paddingTop:10 }}>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://news.images.itv.com/image/file/1940847/stream_2.43421179.jpg' }} />
              </Left>
              <Body>
                <Text>Baso </Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'data:image/jpeg;base64,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://news.images.itv.com/image/file/1940847/stream_2.43421179.jpg' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://jadiberita.com/wp-content/uploads/2018/03/Ridwan-Kamil-Iglobalnews-640x426.jpeg' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://media.matamata.com/thumbs/2018/08/30/73349-maudy-ayunda/745x489-img-73349-maudy-ayunda.jpg' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://images.complex.com/complex/images/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/s5sattcumgqcmpepua5e/dwayne-johnson-teases-fast-furious-hobbs-shaw-spinoff' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
         
        </Content>
        <Button style={{ padding: 20,paddingTop:10 }} 
onPress={this.props.onLogoutPress}
title="Logout"
/> 
      </Container>
                );
    }
    
}