import React,{Component} from "react"
import {View, Text, StyleSheet, Image, KeyboardAvoidingView, AsyncStorage} from "react-native"
import { getTypo} from "../../Data"
import InputField from "../../Components/InputField"
import RegularButton from "../../Components/RegularButton";
import topLogo  from '../../../assets/img/top-logo.png'
import {getTranslation} from "../../Locale";
import TopLine from "../../../assets/img/top-line.svg";
import {authenticatePhoneNumber} from "../../actions/auth";

export default class Authentication extends Component {

    constructor(props){
        super(props)
        this.onPhoneNumberChanged = this.onPhoneNumberChanged.bind(this)
        this.state = {
            phoneNumber:0,
            language: 'fa'
        }
    }
    handleBackPress = ()=>{
        return false;
    }
    onPress = () => {
        authenticatePhoneNumber(this.state.phoneNumber)
    };
    onPhoneNumberChanged  (phoneNumber){
           this.setState({
               phoneNumber:phoneNumber
           })
    };

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
                        <Text style={[styles.heading,{fontFamily:getTypo('regular',this.props.language)}]}>{getTranslation("signIn",this.props.language)}</Text>
                    </View>
                    <InputField onPhoneNumberChanged={this.onPhoneNumberChanged} label={getTranslation("phoneNumber",this.props.language)}  keyboardType={"phone-pad"}/>
                    <KeyboardAvoidingView style={styles.buttonContainer} keyboardVerticalOffset={offset} behavior="padding" enabled>
                        <RegularButton onPress={this.onPress} style={{backgroundColor: '#39B54A'}} title={getTranslation("nextStep",this.props.language)}  />
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