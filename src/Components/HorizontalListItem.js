import React,{Component} from 'react'
import {Image, Text, View,TouchableOpacity} from "react-native";
import dummyAvatar from "../../assets/img/dummy-avatar.jpg";
import {getFont, HEIGHT, WIDTH} from "../Data";


export default class  HorizontalLisItem extends Component {

    constructor(props){
        super(props)
    }

    render(){
        let opacity = 1.0;
        if(this.props.hidden){
            opacity = 0.0
        }
        return(
        <TouchableOpacity
            disabled={this.props.hidden}
            onPress={() => this.props.onPress()}
        >
            <View style={{
                opacity:opacity,
                backgroundColor:"transparent",
                width:this.props.width,
                height:this.props.height,
                borderRadius:5,
                marginRight:20,
                marginLeft:20,
                justifyContent:'center',
                alignContent:'center'}}>
                <Image style={{
                    flex:0.8,
                    borderRadius:5,
                    height: undefined,
                    width: undefined}}
                       source={this.props.thumbNail}
                       resizeMode="cover"/>
                <Text style={{
                    flex:0.2,
                    textAlign:'center',
                    fontSize:(HEIGHT/100)*2,
                    color:'#000',
                    fontFamily:getFont('regular')}}>
                    {this.props.title}
                </Text>
            </View>
        </TouchableOpacity>
        )
    }

}