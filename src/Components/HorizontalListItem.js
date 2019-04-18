import React,{Component} from 'react'
import {Image, Text, View,TouchableOpacity} from "react-native";
import dummyUniversal from "../../assets/img/UniversalDummy.png"
import {getFont, getTypo, HEIGHT, WIDTH} from "../Data";


export default class  HorizontalLisItem extends Component {

    constructor(props){
        super(props)
        this.onPress = this.onPress.bind(this)
    }
    onPress(){
        this.props.onPressSpecial(this.props.data)
    }
    render(){
        let opacity = 1.0;
        if(this.props.hidden){
            opacity = 0.0
        }
        let img =dummyUniversal
        if(this.props.data.pictures!=undefined){
            if(this.props.data.pictures.length>0){
                img = this.props.data.pictures[0].path
            }
        }
        let title ;
        switch (this.props.language) {
            case "fa":
                title = this.props.data.teacher_name_fa
                break
            case "en" :
                title = this.props.data.teacher_name_en
                break
        }
        return(
        <TouchableOpacity
            disabled={this.props.hidden}
            onPress={this.onPress}
        >
            <View style={{
                opacity:opacity,
                backgroundColor:"#fff",
                width:this.props.width,
                height:this.props.height,
                borderRadius:5,
                marginRight:14,
                marginLeft:14,
                justifyContent:'center',
                alignContent:'center'}}>
                <Image style={{
                    flex:0.8,
                    borderRadius:5,
                    height: undefined,
                    width: undefined}}
                       source={{uri:img}}
                       resizeMode="cover"/>
                <Text style={{
                    flex:0.2,
                    textAlign:'center',
                    fontSize:(HEIGHT/100)*2,
                    color:'#000',
                    fontFamily:getTypo('regular',this.props.language)}}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
        )
    }

}