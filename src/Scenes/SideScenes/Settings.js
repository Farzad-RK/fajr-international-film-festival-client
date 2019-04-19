import React,{Component} from 'react'
import {Text, TouchableOpacity, View,ScrollView,Linking,AsyncStorage,BackHandler} from "react-native";
import {getTypo, HEIGHT, WIDTH} from "../../Data";
import {Navigation} from "react-native-navigation";
import Back from "../../../assets/img/back.svg";
import {getAlignment, getTranslation} from "../../Locale";
import {goToHome, gotToAuth} from "../../Navigation";


export default class Settings extends Component{

    constructor(props){
        super(props)
        this.state={
            language: 'fa',
        }
        this.changed= false;
        this.getLanguage()
        this.logout = this.logout.bind(this)
        this.changeLanguage = this.changeLanguage.bind(this)
        this.onExit = this.onExit.bind(this)
        this.handleBackPress = this.handleBackPress.bind(this)
    }
    logout= async ()=>{
      AsyncStorage.setItem('selectedLocale',null);
      AsyncStorage.setItem('accessToken',null);
      gotToAuth()
    }
    getLanguage =async () =>{
        let language = await AsyncStorage.getItem("selectedLocale")
        await this.setState({
            language:language
        })
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    handleBackPress=async ()=>{
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        if(this.changed){
            goToHome(3)
        }else {
            Navigation.pop("settings")
        }
        return true;
    }
    changeLanguage(lang){

        if(this.state.language!==lang){
            this.changed=true
        }else {
            this.changed=false
        }
        this.setState({
            language:lang,
        })
    }
    onChangeLanguage = () =>{
        Navigation.showOverlay({
            component: {
                name: 'LanguageOverlay',
                id: 'LanguageOverlay',
                options: {
                    overlay: {
                        interceptTouchOutside: false
                    },
                },
                passProps :{
                    language:this.state.language,
                    changeLanguage:this.changeLanguage
                }
            }
        });
    }
    onExit() {
        if(this.changed){
            goToHome(3)
        }else {
            Navigation.pop("settings")
        }
     }
    render(){

        let websiteRow ;
        let langAlignment;
        let currentLang;
        switch (this.state.language) {
            case "fa":
                websiteRow = 'row';
                langAlignment ='left';
                currentLang = "فارسی";
                break
            case "en":
                websiteRow = 'row-reverse';
                langAlignment = 'right';
                currentLang = "English";
                break
        }
        return(
            <View
                style={{flex:1 ,
                }}>
                <View style={{
                    flex:0.90,
                    flexDirection:'row',
                    backgroundColor:'#c71815'}}>
                    <View style={{flex:0.2}}>
                        <TouchableOpacity  style={{flex:1}}>
                            <View style={{flex:1}}>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text
                        style={{
                            flex:0.6,
                            marginTop:WIDTH/25,
                            textAlign: 'center',
                            borderBottomColor:"#fff",
                            height:'60%',paddingTop: 0,paddingBottom: 0,
                            fontFamily:getTypo('regular',this.state.language),
                            color:'#fff',
                        }} >
                        {getTranslation('settings',this.state.language)}
                    </Text>
                    <View style={{flex:0.2}}>
                        <TouchableOpacity onPress={this.onExit} style={{flex:1,padding:HEIGHT/42}}>
                            <Back style={{flex:1}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flex:10,
                    backgroundColor:'#dedede'
                }}>
                    <ScrollView style={{
                        flex:1
                    }}>
                        <TouchableOpacity
                            onPress={this.onChangeLanguage}
                            style={{
                            flex:1,
                            marginTop:HEIGHT/18,
                            width:WIDTH,
                            height:HEIGHT/8,
                            alignItems:'center',
                        }}>
                            <Text style={{
                                width:'85%',
                                flex:1,
                                textAlign:langAlignment,
                                fontSize:(HEIGHT/100)*3,
                                fontFamily: getTypo('regular',this.state.language),
                                color : '#000'
                            }}>
                                {"زبان  (Language)"}
                            </Text>
                            <Text style={{
                                width:'85%',
                                flex:1,
                                color : '#535353',
                                borderBottomWidth:0.5,
                                borderBottomColor:'#aeaeae',
                                textAlign:getAlignment(),
                                fontSize:(HEIGHT/100)*2.5,
                                fontFamily: getTypo('regular',this.state.language),
                            }}>
                                {currentLang}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.logout}
                            style={{
                            flex:1,
                            width:WIDTH,
                            height:HEIGHT/10,
                            marginTop:HEIGHT/300,
                            alignItems:'center',
                        }}>
                            <Text style={{
                                width:'85%',
                                flex:1,
                                textAlign: getAlignment(),
                                borderBottomWidth:0.5,
                                borderBottomColor:'#aeaeae',
                                textAlignVertical: 'center',
                                fontSize:(HEIGHT/100)*3,
                                fontFamily: getTypo('regular',this.state.language),
                                color : '#000'
                            }}>
                                {getTranslation("logout",this.state.language)}
                            </Text>
                        </TouchableOpacity>
                        {/*<View style={{*/}
                            {/*flex:1,*/}
                            {/*width:WIDTH,*/}
                            {/*height:HEIGHT/10,*/}
                            {/*marginTop:HEIGHT/300,*/}
                            {/*alignItems:'center',*/}
                        {/*}}>*/}
                            {/*<Text style={{*/}
                                {/*width:'85%',*/}
                                {/*flex:1,*/}
                                {/*borderBottomWidth:0.5,*/}
                                {/*borderBottomColor:'#aeaeae',*/}
                                {/*textAlignVertical: 'center',*/}
                                {/*textAlign: getAlignment(),*/}
                                {/*fontSize:(HEIGHT/100)*3,*/}
                                {/*fontFamily: getTypo('regular',this.state.language),*/}
                                {/*color : '#000'*/}
                            {/*}}>*/}
                                {/*{getTranslation("contactWithUs",this.state.language)}*/}
                            {/*</Text>*/}
                        {/*</View>*/}
                        {/*<View style={{*/}
                            {/*flex:1,*/}
                            {/*width:WIDTH,*/}
                            {/*height:HEIGHT/10,*/}
                            {/*marginTop:HEIGHT/300,*/}
                            {/*alignItems:'center',*/}
                        {/*}}>*/}
                            {/*<Text style={{*/}
                                {/*width:'85%',*/}
                                {/*flex:1,*/}
                                {/*borderBottomWidth:0.5,*/}
                                {/*borderBottomColor:'#aeaeae',*/}
                                {/*textAlignVertical: 'center',*/}
                                {/*textAlign: getAlignment(),*/}
                                {/*fontSize:(HEIGHT/100)*3,*/}
                                {/*fontFamily: getTypo('regular',this.state.language),*/}
                                {/*color : '#000'*/}
                            {/*}}>*/}
                                {/*{getTranslation("aboutUs",this.state.language)}*/}
                            {/*</Text>*/}
                        {/*</View>*/}
                        <TouchableOpacity
                            onPress={()=>Linking.openURL("http://fajriff.com")}
                            style={{
                            flex:1,
                            width:'85%',
                            height:HEIGHT/10,
                            alignSelf:'center',
                            borderBottomWidth:0.5,
                            borderBottomColor:'#aeaeae',
                            marginTop:HEIGHT/300,
                            flexDirection:websiteRow,
                            alignItems:'center',
                        }}>
                            <Text style={{
                                flex:1,
                                textAlignVertical: 'center',
                                textAlign: 'right',
                                fontSize:(HEIGHT/100)*2.5,
                                fontFamily: getTypo('regular',"fa"),
                                color : '#535353'
                            }}>
                                {"www.fajriff.com"}
                            </Text>
                            <Text style={{
                                flex:1,
                                justifyContent:'center',
                                textAlignVertical: 'center',
                                textAlign: getAlignment(),
                                fontSize:(HEIGHT/100)*3,
                                fontFamily: getTypo('regular',this.state.language),
                                color : '#000'
                            }}>
                                {getTranslation("website",this.state.language)}
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        )
    }
}