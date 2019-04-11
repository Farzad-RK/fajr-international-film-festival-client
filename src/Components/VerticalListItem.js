import React,{Component} from 'react'
import {ImageBackground, Text,TouchableOpacity} from 'react-native'
import {getFont, HEIGHT} from "../Data";
import eventDummy from "../../assets/img/event-dummy.jpg";
import LinearGradient from "react-native-linear-gradient";

export default class VerticalListItem extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <TouchableOpacity
                onPress={() => this.props.onPress()}
                style={{
                alignSelf:'center',
                width:'80%',
                borderRadius:15,
                marginBottom:15,
                marginTop:10,
                height:HEIGHT/9
            }}>
                <ImageBackground
                    imageStyle={{
                        borderRadius: 10,
                        flex:1,
                        resizeMode: 'cover' }}
                    source={this.props.image}
                    style ={{
                        flex:1,
                        borderRadius:10,
                        justifyContent:'center',
                        height: undefined,
                        width: undefined}}>
                    <LinearGradient  start={{x: 0.0, y: 0}} end={{x: 0.0, y:2}} locations={[0, .5]}
                                     colors={['transparent','rgba(0,0,0,.8)' ]}
                                     style={{flex:1,borderRadius:10}}>
                        <Text style={{textAlign:'center',marginTop:30,color:'#fff',fontSize:16,fontFamily:getFont('regular')}}>
                            {this.props.title}
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}