import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class GreyButton extends Component{
  displayAlert(){
    alert("Play sound 1")
  }
  render(){
    return(
     <Button color="grey" title="Sound 1" onPress={this.displayAlert}/>
    )
  }
}

class BlueButton extends Component{
  displayAlert(){
    alert("Play sound 2")
  }
  render(){
    return(
     <Button  title="Sound 2" onPress={this.displayAlert}/>
    )
  }
}

class PurpleButton extends Component{
  displayAlert(){
    alert("Play sound 3")
  }
  render(){
    return(
      <Button color="purple" title="Sound 3" onPress={this.displayAlert}/>
    )
  }
}

class BlackButton extends Component{
  displayAlert(){
    alert("Play sound 4")
  }
  render(){
    return(
      <Button color="black" title="Sound 4" onPress={this.displayAlert}/>
    )
  }
}


export default class App extends Component {
  render() {
    return (
      <View style={{marginLeft:70,marginTop: 80,width:200,height:100}}>
         <GreyButton/>  
         <BlueButton/>
         <PurpleButton/>
         <BlackButton/>
       
        
      </View>
    );
  }
}