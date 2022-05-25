import React,{Component} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions ,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Result from './Result';
function filter(srtingText){
  let aide=[];
  let aide2 = ""
  let j=0
  for (let i = 0; i < srtingText.length; i++) {
    if(srtingText[i] != '#'){
      aide2 +=  srtingText[i]
    }else{
      aide[j] = aide2
      aide2=""
      j++
    }
  }
  return(
    <View>
      {/* La famile */}
      <Text
        style={{
          color:'black',
          fontSize:26
        }}
      >
        Famille :
      </Text>
        <Text 
          style={{
            color:'blue',
            fontSize:26
          }}
        >
          {aide[1]}
        </Text>
      {/* La famille en arabe */}
      <Text
      style={{
        color:'black',
        fontSize:26
      }}
      >
        La famille en arabe :
      </Text>
      <Text 
        style={{
          color:'blue',
          fontSize:26
        }}
      >
        {aide[2]}
      </Text>
      {/* Especes */}
      <Text
      style={{
        color:'black',
        fontSize:26
      }}
      >
        Especes:
      </Text>
      <Text 
        style={{
          color:'blue',
          fontSize:26
        }}
      >
        {aide[3]}
      </Text>
      {/* Noms Arabe Amazigh */}
      <Text
      style={{
        color:'black',
        fontSize:26,
        fontStyle:'italic'
      }}
      >
        Nom Arabe Amazigh
      </Text>
      <Text 
        style={{
          color:'blue',
          fontSize:26,
          fontStyle:'italic'
        }}
      >
        {aide[4]}
      </Text>
      {/* Noms Français */}
      <Text
      style={{
        color:'black',
        fontSize:26,
        fontStyle:'italic'
      }}
      >
        Nom Français :
        </Text>
      <Text 
        style={{
          color:'blue',
          fontSize:26,
          fontStyle:'italic'
        }}
      >
        {aide[5]}
      </Text>
      {/* Noms Anglais */}
      <Text
      style={{
        color:'black',
        fontSize:26,
        fontStyle:'italic'
      }}
      >
        Nom Anglais :
        </Text> 
      <Text 
        style={{
          color:'blue',
          fontSize:26,
          fontStyle:'italic'
        }}
      >
        {aide[6]}
      </Text> 
      {/* Origine Geometrique */}
      <Text
      style={{
        color:'black',
        fontSize:26
      }}
      >
        Origine Geometrique :
        </Text>                         
      <Text 
        style={{
          color:'blue',
          fontSize:26
        }}
      >
        {aide[7]}
      </Text>  
      {/* Generalité */}
      <Text
      style={{
        color:'black',
        fontSize:26
      }}
      >
        Generalité :
        </Text>                         
      <Text 
        style={{
          color:'blue',
          fontSize:26
        }}
      >
        {aide[8]}
      </Text>  
    </View>
  )
}
class Scanner extends Component{
  constructor(props){
    super(props);
    this.state = {
      screenHeight: Dimensions.get('window').height,
      screenWidth: Dimensions.get('window').width,
      qr: [""],
      display:false,
      DATA:''
    };
  };
  onRead = e => {
    this.setState({qr: e.data})
  }
  getData =( )=>{
    this.setState({DATA:'passin data'})
  }
  render(){
      return (
        <ScrollView 
          style={{
            backgroundColor:'#A2FF29'
          }}
        >
          <View 
            style={{
            }}>
            <QRCodeScanner
              ref={
                (node) => { this.scanner = node }
              }
              containerStyle={[{
              }]}
              cameraStyle={
                  [
                    {
                      width:250,
                    }
                  ]
              }
              cameraContainerStyle={{
                padding:70,
                height:400,
                marginBottom:100,
              }}
              onRead={this.onRead}
            />
          </View>
          <Button 
            style={{}} 
            title='scan' 
            color={'#6DC000'}
            onPress={() => {
              this.scanner.reactivate();
              this.setState({display:true});
              this.props.navigation.navigate('Page2');
            }}
          />
          <Text 
            style={{
              marginTop:200
            }}
          >
          </Text>
          {this.state.display && filter(this.state.qr)}
         <Result DATA={this.state.qr}/>
        </ScrollView>
      );
  }
};
// function QrCode({navigation}){
//     return(
//         <View>
//             <Text>
//         some text
//             </Text>
//             {/* <Button title='Scan Here' onPress={()=> navigation.navigate('Result')}/> */}
//         </View>
//     )
// }
// QrCode();
export default Scanner;
















































// import {View,Text} from 'react-native'
// import React, { Component } from 'react';
// import {QRCodeScanner} from 'react-native-qrcode-scanner'
// import {RNCamera} from 'react-native-camera'
// class Camera extends Component {
//     onSuccess = e => {
//         Linking.openURL(e.data).catch(err =>
//           console.error('An error occured', err)
//         );
//       };
    
//     render(){
//         return(
//             <View>
//                <Text>
//                    Camra Screen
//                 </Text> 
//                 <QRCodeScanner
//                 onRead={this.onSuccess}
//                 />
//             </View>
//         )
//     }

// }

// export default Camera