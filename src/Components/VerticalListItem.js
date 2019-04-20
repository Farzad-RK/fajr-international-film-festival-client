import React,{Component} from 'react'
import {ImageBackground, Text,TouchableOpacity} from 'react-native'
import {getFont, HEIGHT} from "../Data";
import eventDummy from "../../assets/img/event-dummy.jpg";
import LinearGradient from "react-native-linear-gradient";
import {Navigation} from "react-native-navigation";

export default class VerticalListItem extends Component {

    constructor(props){
        super(props)
        this.onPressItem = this.onPressItem.bind(this)
    }
    onPressItem(){
        Navigation.push('eventStack',
            {
                component: {
                    id:'eventIndex',
                    name: 'EventIndex',
                    options: {
                        layout:{
                            direction:['portrait']
                        },
                        bottomTabs: { visible: false, drawBehind: true, animate: true }
                    },
                    passProps:{
                       id:this.props.id,
                       image:this.props.image,
                       title:this.props.title
                    }
                },
            },
        )
    }
    render(){
        return(
            <TouchableOpacity
                onPress={this.onPressItem}
                style={{
                alignSelf:'center',
                width:'80%',
                borderRadius:15,
                marginBottom:15,
                marginTop:10,
                elevation:5,
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
                        <Text style={{textAlign:'center',marginTop:30,color:'#fff',fontSize:(HEIGHT/100)*2.4,fontFamily:getFont('regular')}}>
                            {this.props.title}
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}