import React,{Component} from "react"
import {View, Text, StyleSheet, Image, KeyboardAvoidingView, Keyboard, Animated} from "react-native"
import {getFont} from "../../Data"
import InputField from "../../Components/InputField"
import RegularButton from "../../Components/RegularButton";
import topLogo  from '../../../assets/img/top-logo.png'

import { Navigation } from 'react-native-navigation'
import {getText} from "../../Locale";
import TopLine from "../../../assets/img/top-line.svg";

export default class Authentication extends Component {

    constructor(props){
        super(props)
    }
    onPress(){
        // Navigation.popTo('sms')
    }
    render(){
        const offset =80
        return(
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Image source={topLogo} style ={styles.title}/>
                    <TopLine style={styles.topLine} width={'80%'} height={1} />
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>{getText("signIn")}</Text>
                    </View>
                    <InputField label={getText("phoneNumber")}  keyboardType={"phone-pad"}/>
                    <KeyboardAvoidingView style={styles.buttonContainer} keyboardVerticalOffset={offset} behavior="padding" enabled>
                        <RegularButton onPress={this.onPress} style={{backgroundColor: '#39B54A'}} title={getText("nextStep")}  />
                    </KeyboardAvoidingView>
                </View>
                <View style={styles.bottomContainer}>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:"#E1E1E1",
        flex:1
    },
    titleContainer:{
        flex:0.7,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        width:50,
        height:50,
        marginTop:15,
    },
    topLine:{
        marginTop:10,
    },
    formContainer :{
        alignItems:'center',
        flex:6,
    },
    headingContainer: {
        marginTop:20,
        marginBottom:20
    },
    heading: {
        textAlign:'center',
        fontFamily:getFont('regular'),
        color:'#000',
        fontSize:34,
    },
    buttonContainer: {
        flex:1,
        marginBottom:'10%',
        justifyContent: 'flex-end',
    },
    bottomContainer: {
        flex:1,
        zIndex:1,
        justifyContent: 'flex-end',
    },
    bottomImage:{
        flex:1,
        height:'100%',
        width: '100%',
        resizeMode: 'stretch',
    },
})