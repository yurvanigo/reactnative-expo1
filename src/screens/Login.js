import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input,Label,Grid,Col, Drawer, Title } from 'native-base';
import {
    ScrollView,
    Text,
    Button,
    StyleSheet,
    TextInput,
    View,
    
} from 'react-native';

export default class Login extends Component {

    render() {
        return (

            <Container  >
                
                <Grid>
         
          <Col style={{ backgroundColor: '#26a69a', paddingBottom: 300,paddingTop:90, paddingLeft:30,paddingRight:30 }}>

          <Content style={{ paddingBottom: 20,paddingTop:10 }}>
                        
                            <Item>
                            <TextInput placeholder="Usernamee"
                            style={[styles.textInput, { marginTop: 40 }]} />
                            
                            </Item>
                            <Item last>
                            <TextInput placeholder="Password" 
                            style={[styles.textInput, { marginTop: 40 }]}/>
                            </Item>
                        
                        
                    </Content>
                    <Button style={[styles.button]}
                             onPress={this.props.onLoginPress}
                             title="Submit"  
                             
                             textStyle={Drawer}
                             
                        />
                    
          </Col>
        </Grid>
                    
                    
            </Container>
            
          
            );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 26,
      paddingTop: 26,
      paddingBottom: 18
    },
    logo: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'grey'
    },
    textInput: {
      height: 60,
      paddingHorizontal: 40
    },
    button: {
      height: 40,
      backgroundColor: '#26c6da',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });