import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    Image,
    TouchableOpacity
} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state ={
            qr :[""],
            display:false
        }
    }
    onRead = e =>{
        this.setState({qr: e.data});
        this.setState({display:true})
    }

    render(){
        return(
            <View style={{height:'100%',width:'100%',backgroundColor:'#00C2A8'}}>
                <Image style={{height:'20%',resizeMode:'center',width:'100%'}} source={
                    require('./assets/images/logo.png')
                  }/>
                <QRCodeScanner
                    ref={(node) => {this.scanner = node;}}
                    onRead={this.onRead}
                    showMarker
                    markerStyle={{borderColor:'green',borderRadius:20}}
                    containerStyle={{}}
                    cameraContainerStyle={{}}
                    cameraStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                />
                <TouchableOpacity onPress={()=>{
                    this.scanner.reactivate();
                    this.state.display && this.props.navigation.navigate('Page2',{Data:this.state.qr});
                }}>
                    <View style={{paddingHorizontal:10, paddingVertical:14,borderRadius:8,backgroundColor:'green',marginHorizontal:50,marginVertical:40}}>
                        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16}}>
                            Scan
                        </Text>  
                    </View>
                </TouchableOpacity>
                
            </View>
        )
    }
}

