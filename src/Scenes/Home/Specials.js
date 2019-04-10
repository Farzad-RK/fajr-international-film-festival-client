import React,{Component} from "react"
import {View,Text,Image} from "react-native"
import Swiper from 'react-native-swiper'
import {WIDTH} from "../../Data";
import dummy from '../../../assets/img/slide-image.jpg'

export default class Specials extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={{
                flex:1
            }}>
                <View style={{
                    flex:1,
                }}>
                    <Swiper
                        loadMinimal
                        loadMinimalSize={1}
                        dotColor={"#636e72"}
                        activeDotColor={"#fff"}
                        dotStyle={{
                            marginBottom:-30,
                        }}
                        activeDotStyle={{
                            marginBottom:-30,
                        }}
                        style={{
                            flex:1,
                        }}
                        loop={false}>
                        <Image source={dummy} style={{
                            width: WIDTH,
                            flex: 1,
                            backgroundColor: 'transparent'
                        }}/>
                        <Image source={dummy} style={{
                            width: WIDTH,
                            flex: 1,
                            backgroundColor: 'transparent'
                        }}/>
                        <Image source={dummy} style={{
                            width: WIDTH,
                            flex: 1,
                            backgroundColor: 'transparent'
                        }}/>
                    </Swiper>
                </View>
                <View style={{
                    flex:2,
                }}>
                </View>
                <View style={{
                      width:WIDTH,
                      height:40,
                      position:"absolute",
                      backgroundColor:'transparent',
                      zIndex:1,
                      borderWidth:1,
                      borderColor:'#000',
                      top:0
                }}>
                </View>
            </View>
        )
    }
}