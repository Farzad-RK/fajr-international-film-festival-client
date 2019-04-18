import React,{Component} from "react"
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Animated,
    KeyboardAvoidingView,
    Keyboard, AsyncStorage
} from "react-native"
import {getFont, getTypo, Regular} from "../../Data"
import RegularButton from "../../Components/RegularButton";
import {Navigation} from "react-native-navigation";
import TopLine from "../../../assets/img/top-line.svg"
import topLogo from "../../../assets/img/top-logo.png";
import InputField from "../../Components/InputField";
import {getText, getTranslation} from "../../Locale/index"
import {backToAuth, showSpinner} from "../../Navigation";
import {resendSMS, sendSMScode} from "../../actions/auth";

export default class SMSverification extends Component {

    constructor(props){
        super(props)
        this.onChangeText =this.onChangeText.bind(this)
        this.keyboardWillShow = this.keyboardWillShow.bind(this)
        this.keyboardWillHide = this.keyboardWillHide.bind(this)
        this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)
        this.returnOpacity = new Animated.Value(1)
        this.onSMScodeChanged = this.onSMScodeChanged.bind(this)
        this.state = {
            remainedTime : 90,
            SMScode : 0,
            dis:true,
            language: 'fa'
        }
        this.getLanguage()
    }
    getLanguage =async () =>{
        let language = await AsyncStorage.getItem("selectedLocale")
        this.setState({
            language:language
        })
    }
    componentDidMount(){
        this.setTimer()
    }
    setTimer (){
        this.timer = setInterval(()=>{
            const currentTime = this.state.remainedTime-1
            this.setState({
                remainedTime : currentTime,
            })
            if(currentTime===0){
                this.setState({
                    dis:false
                })
                clearInterval(this.timer)
            }

        },1000)
    }
    returnToAuth = ()=>{
      backToAuth()
    }
    keyboardWillShow  () {
        Animated.timing(this.returnOpacity, {
            duration: 200,
            toValue: 0,
        }).start();
    }
    keyboardWillHide ()  {
        Animated.timing(this.returnOpacity, {
            duration: 200,
            toValue: 1.0,
        }).start();
    }

    onChangeText(event,index){
        if(event.nativeEvent.text.length>0&&index!==6){
            const nextRef = this.getRef(index+1)
            nextRef.focus()
        }
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }
    onPressResend = ()=> {
        resendSMS(this.props.phoneNumber)
        this.setState({
            remainedTime : 10,
            dis:true
        })
        this.setTimer()
    }
    onPressSend= ()=>{

        sendSMScode(this.props.phoneNumber,this.state.SMScode)
    }

    onSMScodeChanged(code){
        this.setState({
            SMScode:code
        })
    }
    render(){
        const displayTime = Math.floor(this.state.remainedTime/60)+":"+(this.state.remainedTime%60)
        return(
            <View style={styles.mainContainer}>
                <Animated.View  style={styles.titleContainer}>
                    <Image source={topLogo} style ={styles.title}/>
                    <TopLine style={styles.topLine} width={'80%'} height={1} />
                </Animated.View>
                <View style={styles.formContainer}>
                    <View style={styles.headingContainer}>
                        <Text style={[styles.heading,{fontFamily:getTypo("regular",this.state.language)}]}>{getTranslation("signIn",this.state.language)}</Text>
                    </View>
                    <View style={styles.timeAndDescContainer}>
                        <Text style={styles.timer}>{displayTime}</Text>
                        <Text style={[styles.description,{fontFamily:getTypo("regular",this.state.language)}]}>{getTranslation("codeIsSent",this.state.language)}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <InputField  onPhoneNumberChanged={this.onSMScodeChanged} keyboardType={"phone-pad"}/>
                    </View>
                    <Animated.View style={{opacity:this.returnOpacity}}>
                        <TouchableOpacity onPress={this.returnToAuth}>
                            <View style={styles.changePhoneNumberContainer}>
                                <Text style={[styles.changePhoneNumber2,{fontFamily:getTypo("regular",this.state.language)}]}>{getTranslation("change",this.state.language)+" "+getTranslation("phoneNumber",this.state.language)}</Text>
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                <KeyboardAvoidingView style={styles.buttonsContainer} keyboardVerticalOffset={55} behavior="padding" enabled>
                    <RegularButton onPress={this.onPressResend} dis={this.state.dis} title={getTranslation("resendSMScode",this.state.language)} style={{backgroundColor:'#C1272D'}}/>
                    <RegularButton onPress={this.onPressSend} title={getTranslation("nextStep",this.state.language)}  style={{backgroundColor:'#39B54A'}} />
                </KeyboardAvoidingView>
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
        height:40,
        justifyContent:'center',
        alignItems:'center',
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
        flex:6,
    },
    headingContainer: {
        height:60,
        marginTop:50,
        marginBottom:5,
    },
    heading: {
        textAlign:'center',
        color:'#000',
        fontSize:34,
    },
    timeAndDescContainer :{

    },
    timer:{
        textAlign:'center',
        color:'#000',
        fontSize:18,
        marginTop:-10,
        marginBottom:10
    },
    description:{
        marginTop:5,
        marginBottom:15,
        textAlign:'center',
        color:'#000',
        fontSize:14,
    },
    squareContainer : {
        width:45,
        height:45
    },
    inputContainer: {
        marginLeft:'5%',
        marginRight:'5%'
    },
    changePhoneNumberContainer : {
        marginTop:'12%',
        alignSelf:'center',
        flexDirection: 'row'
    },
    changePhoneNumber1:{
        color:'#000',
    },
    changePhoneNumber2:{
        color:'#000',
    },
    buttonsContainer :{
        flex:1,
        marginBottom:'12%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:'5%',
        marginRight:'5%'
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