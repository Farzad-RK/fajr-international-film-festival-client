import React,{Component} from 'react'
import {View,Text,ActivityIndicator} from 'react-native'
import {getFont, HEIGHT, WIDTH} from "../Data";
import {Spinner,Icon,Content} from 'native-base'
import {getText} from "../Locale";
export default class SpinnerOverlay extends Component {

    constructor(props){
        super(props)
    }

    render(){

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
                    <ActivityIndicator size="large" color="#c71815" />
                    <Text style={{
                          fontSize:(HEIGHT/100)*2,
                          marginTop:WIDTH/15,
                          color:'#000',
                          fontFamily:getFont('regular'),
                    }}>
                        {getText("waitMessage")}
                    </Text>
                </View>
            </View>
        )
    }
}