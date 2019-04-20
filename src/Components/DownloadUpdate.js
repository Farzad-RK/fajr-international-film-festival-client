import React,{Component} from 'react'
import {View, Text, AsyncStorage, Linking} from 'react-native'
import {Button} from "native-base"
import {getFont, getTypo, HEIGHT, WIDTH} from "../Data";
import {getText, getTranslation} from "../Locale";
import AlertIcon from  "../../assets/img/alert.svg"
export default class ErrorOverlay extends Component {

    constructor(props){
        super(props)
        this.getLanguage()
        this.state = {
            language: 'fa'
        }

    }
    getLanguage =async () =>{
        let language = await AsyncStorage.getItem("selectedLocale")
        this.setState({
            language:language
        })
    }

    render(){
        let message;
        if(this.state.language!=="fa"&&this.state.language!=="en"){

             message =getTranslation("getNewVersion","en");
        }else {
            message =getTranslation("getNewVersion",this.state.language);
        }

        return(
            <View style={{
                flex:1,
                borderWidth:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'rgba(0,0,0,0.5)'
            }}>
                <View style={{
                    width:WIDTH/1.5,
                    borderRadius:10,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#dedede',
                    height:HEIGHT/2.5
                }}>
                    <AlertIcon width={WIDTH/10} height={WIDTH/10}/>
                    <Text style={{
                        fontSize:(HEIGHT/100)*2,
                        marginTop:WIDTH/15,
                        color:'#000',
                        fontFamily:getTypo('regular',this.state.language),
                    }}>
                        {message}
                    </Text>
                    <Button
                        onPress={()=>Linking.openURL(this.props.downloadLink)}
                        style={{
                            marginTop:WIDTH/15,
                            width:'85%',
                            alignSelf:'center',
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:'#ca1814',
                        }} >
                        <Text style={{
                            color:'#fff',
                            fontFamily:getTypo(this.state.language),
                            textAlign:'center'
                        }}>
                            {getTranslation("select",this.state.language)}
                        </Text>
                    </Button>
                </View>
            </View>
        )
    }
}