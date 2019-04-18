import React,{Component} from 'react'
import {View, Text, AsyncStorage} from 'react-native'
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
        let message ='';
        switch (this.props.type) {
            case "invalidInput":
                message =  getTranslation("invalidInput",this.state.language)
                break
            case "noConnection":
                message = getTranslation("noConnection",this.state.language)
                break

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
                    width:WIDTH/2.2,
                    borderRadius:10,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#dedede',
                    height:HEIGHT/4
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
                </View>
            </View>
        )
    }
}