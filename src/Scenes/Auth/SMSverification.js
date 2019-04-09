import React,{Component} from "react"
import {View,
        Text,
        StyleSheet,
        Image,
        TextInput,
        TouchableOpacity,
        Animated,
        KeyboardAvoidingView,
        Keyboard
        } from "react-native"
import {Regular,Ultra} from "../../Data"
import RegularButton from "../../Components/RegularButton";
import {Navigation} from "react-native-navigation";
import TopLine from "../../../assets/img/top-line.svg"
import topLogo from "../../../assets/img/top-logo.png";
import InputField from "../../Components/InputField";
import {getText} from "../../Locale/index"

export default class SMSverification extends Component {

    constructor(props){
        super(props)
        this.onChangeText =this.onChangeText.bind(this)
        this.keyboardWillShow = this.keyboardWillShow.bind(this)
        this.keyboardWillHide = this.keyboardWillHide.bind(this)
        this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)
        this.returnOpacity = new Animated.Value(1)
    }
    returnToAuth(){
       // Navigation.push('sms',{
       //     component: {
       //         id: 'auth',
       //         name: 'Authentication',
       //         options: {},
       //         passProps: {}
       //     }
       // })
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
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }
    render(){
        return(
            <View style={styles.mainContainer}>
                <Animated.View  style={styles.titleContainer}>
                    <Image source={topLogo} style ={styles.title}/>
                    <TopLine style={styles.topLine} width={'80%'} height={1} />
                </Animated.View>
                <View style={styles.formContainer}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>{getText("signIn")}</Text>
                    </View>
                    <View style={styles.timeAndDescContainer}>
                        <Text style={styles.timer}>۲:۳۴</Text>
                        <Text style={styles.description}>کد به شماره ۰۹۳۹۷۴۴۹۸۰۰ ارسال شد.</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <InputField  keyboardType={"phone-pad"}/>
                    </View>
                    <Animated.View style={{opacity:this.returnOpacity}}>
                        <TouchableOpacity onPress={this.returnToAuth}>
                            <View style={styles.changePhoneNumberContainer}>
                                <Text style={styles.changePhoneNumber2}>{getText("change")+" "+getText("phoneNumber")}</Text>
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                <KeyboardAvoidingView style={styles.buttonsContainer} keyboardVerticalOffset={55} behavior="padding" enabled>
                    <RegularButton title={getText("resendSMScode")} style={{backgroundColor:'#C1272D'}}/>
                    <RegularButton title={getText("nextStep")}  style={{backgroundColor:'#39B54A'}} />
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
        fontFamily:Regular,
        color:'#000',
        fontSize:34,
    },
    timeAndDescContainer :{

    },
    timer:{
        textAlign:'center',
        fontFamily:Regular,
        color:'#000',
        fontSize:18,
        marginTop:-10,
        marginBottom:10
    },
    description:{
        marginTop:5,
        marginBottom:15,
        textAlign:'center',
        fontFamily:Regular,
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
        fontFamily:Ultra,
    },
    changePhoneNumber2:{
        color:'#000',
        fontFamily:Regular,
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