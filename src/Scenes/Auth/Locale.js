import React,{Component} from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import logo from '../../../assets/img/logo.png'
import languageFa from '../../../assets/img/language-fa.png'
import languageEn from '../../../assets/img/language-en.png'

import {Regular} from "../../Data";
export default class Locale extends Component  {

    constructor(props){
        super(props)
        this.chooseLocale = this.chooseLocale.bind(this)
    }
    chooseLocale(){

    }
    render(){

        return(
            <View style={{
                   flex:1,
                   alignContent:'center',
                   justifyContent:'center'

            }}>

                <View  style={{
                   flex:0.8,
                   alignItems:'center'
                }}>
                    <Image
                        style={{
                            marginTop:10,
                            marginBottom:20,
                            width:130,
                            height:55,
                        }}
                        resizeMode={'contain'}
                        source={logo}/>
                    <Text style={{
                                  color:'#000',
                                  fontSize:16,
                                  fontFamily:Regular
                    }}>
                        {"زبان خود را انتخاب کنید"}
                    </Text>
                    <Text style={{
                        color:'#000',
                        fontSize:16,
                        marginTop:10,
                        fontFamily:Regular
                    }}>
                        {"Choose your language"}
                    </Text>
                </View>
                <TouchableOpacity style={{flex:1}}>
                <View style={{
                    flex:1,
                    alignItems:'center'
                }}>
                    <Image
                        source={languageFa}
                        resizeMode={'contain'}
                        style={{
                            marginTop:10,
                            flex:0.6,
                            width:'60%'
                    }}/>
                    <Text style={{
                        color:'#000',
                        fontSize:22,
                        marginTop:15,
                        flex:0.4,
                        fontFamily:Regular
                    }}>
                        {"فارسی"}
                    </Text>

                </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}}>
                <View style={{
                    flex:1,
                    alignItems:'center'
                }}>

                    <Image
                        source={languageEn}
                        resizeMode={'contain'}
                        style={{
                            marginTop:10,
                            flex:0.6,
                            width:'60%'
                        }}/>
                    <Text style={{
                        color:'#000',
                        fontSize:22,
                        marginTop:15,
                        flex:0.4,
                        fontFamily:Regular
                    }}>
                        {"English"}
                    </Text>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
}