import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import Tts from 'react-native-tts'
export default class Result extends Component{
    constructor(props){
        super(props);
    }
    Speak = (Data) =>{
        Tts.setDefaultLanguage('fr-FR');
        Tts.speak('la Famille est ,' + Data.split('#')[1]);
        Tts.speak('la Famille en arabes est '); 
        Tts.setDefaultLanguage('ar-AR');
        Tts.speak(Data.split('#')[2]);
                 Tts.setDefaultLanguage('fr-FR');
                    Tts.speak('l\'\Especes est ,' + Data.split('#')[3]);
                    Tts.speak('le Nom Arabes - Amazigh est ');
                    Tts.setDefaultLanguage('ar-AR');
                    Tts.speak(Data.split('#')[4]);
                    Tts.setDefaultLanguage('fr-FR');
                    Tts.speak('le Noms Français est ,' + Data.split('#')[5]);
                    Tts.speak('le Noms Anglais est ,' + Data.split('#')[6]);
                    Tts.speak('l\'\Origine Geometrique est ,' + Data.split('#')[7]);
                    Tts.speak('Généralité est ,' +Data.split('#')[8]);
    }
    render(){
        const { Data } = this.props.route.params;

        return(
            <View style={{backgroundColor:'#00C2A8',height:'100%',paddingHorizontal:15}}>
                <Image style={{height:'10%',resizeMode:'center',width:'100%'}} source={
                    require('./assets/images/logo.png')
                  }/>
                <Text style={styles.Static}>
                    Famille : {Data.split('#')[1]}
                </Text>
                <Text style={styles.Static}>
                    Famille en arabes : {Data.split('#')[2]}
                </Text>
                <Text style={styles.Static}>
                    Especes : {Data.split('#')[3]}
                </Text>
                <Text style={styles.Static}>
                    Nom Arabes - Amazigh : {Data.split('#')[4]}
                </Text>
                <Text style={styles.Static}>
                    Noms Français : {Data.split('#')[5]}
                </Text>
                <Text style={styles.Static}>
                    Noms Anglais : {Data.split('#')[6]}
                </Text>
                <Text style={styles.Static}>
                    Origine Geometrique : {Data.split('#')[7]}
                </Text>
                <Text style={styles.Static}>
                    Généralité : {Data.split('#')[8]}
                </Text>
                    {this.Speak(Data)}
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Home');
                    Tts.stop();
                }}>
                    <View style={{paddingHorizontal:10, borderRadius:8,backgroundColor:'green',marginHorizontal:50,paddingVertical:14}}>
                        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16}}>
                            Go Back
                        </Text>  
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Static:{
        fontSize:26,
    }
})