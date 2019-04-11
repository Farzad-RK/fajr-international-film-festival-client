import React,{Component} from 'react'
import {Image, Text, View,TouchableOpacity} from "react-native";
import dummyAvatar from "../../assets/img/dummy-avatar.jpg";
import {getFont} from "../Data";


export default class  HorizontalLisItem extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
        <TouchableOpacity onPress={() => this.props.onPress()} >
            <View style={{
                width:80,
                height:120,
                marginTop:5,
                marginRight:20,
                marginLeft:20,
                justifyContent:'center',
                alignContent:'center'}}>
                <Image style={{
                    flex:0.9,
                    borderRadius:5,
                    height: undefined,
                    width: undefined}}
                       source={this.props.thumbNail}
                       resizeMode="cover"/>
                <Text style={{
                    flex:0.1,
                    textAlign:'center',
                    fontSize:8,
                    color:'#000',
                    fontFamily:getFont('regular')}}>
                    {this.props.title}
                </Text>
            </View>
        </TouchableOpacity>
        )
    }

}