import React,{ Component }  from 'react';
import { FlatList, ActivityIndicator, Text, View,Button, AppRegistry  } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Icon,  Badge } from 'native-base';
import Login from './src/screens/Login';
// import Secured from './src/screens/Secured';
// import Scancode from './src/screens/Scancode';
// import Menu from './src/screens/Menu';
// import Scancode from './src/screens/Scancode';
// import Crud from './src/screens/Crud';
import Scancode from './src/screens/Scancode';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  render(){

   
    if (this.state.isLoggedIn) 
      return <Scancode
          //  onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
    else 
      return <Login 
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />;
        return (
          <Container>
            <Header />
            <Content />
            <Footer>
              <FooterTab>
                <Button badge vertical>
                  <Badge><Text>2</Text></Badge>
                  <Icon name="apps" />
                  <Text>Apps</Text>
                </Button>
                <Button vertical>
                  <Icon name="camera" />
                  <Text>Camera</Text>
                </Button>
                <Button active badge vertical>
                  <Badge ><Text>51</Text></Badge>
                  <Icon active name="navigate" />
                  <Text>Navigate</Text>
                </Button>
                <Button vertical>
                  <Icon name="person" />
                  <Text>Contact</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        );
  }
}
