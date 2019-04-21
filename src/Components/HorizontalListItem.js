import React,{Component} from 'react'
import {Image, Text, View,TouchableOpacity} from "react-native";
import dummyUniversal from "../../assets/img/UniversalDummy.png"
import {getFont, getTypo, HEIGHT, WIDTH} from "../Data";
import {Navigation} from "react-native-navigation";
import {getTranslation} from "../Locale";
import UniversalDummy from "../../assets/img/UniversalDummy.png"


export default class  HorizontalLisItem extends Component {

    constructor(props){
        super(props)
        this.onPress = this.onPress.bind(this)
    }
    onPress(){
        Navigation.push('specialStack',
            {
                component: {
                    id:'contentDetailView',
                    name: 'ContentDetailView',
                    options: {
                        layout:{
                            direction:['portrait','landscape']
                        },
                        bottomTabs: { visible: false, drawBehind: true, animate: true }
                    },
                    passProps:{
                        data:this.props.data,
                        type:this.props.type,
                        language:this.props.language
                    }
                },
            },
        )
    }
    render(){
        if(this.props.type===1){

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
            if(img===dummyUniversal){

                return(
                    <TouchableOpacity
                        disabled={this.props.hidden}
                        onPress={this.onPress}
                    >
                        <View style={{
                            elevation:5,
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
                                   source={img}
                                   resizeMode="cover"/>
                            <Text style={{
                                flex:0.2,
                                textAlign:'center',
                                fontSize:(HEIGHT/100)*1.5,
                                color:'#000',
                                fontFamily:getTypo('regular',this.props.language)}}>
                                {title}
                            </Text>
                        </View>
                    </TouchableOpacity>)
            }else {
                return(
                    <TouchableOpacity
                        disabled={this.props.hidden}
                        onPress={this.onPress}
                    >
                        <View style={{
                            elevation:5,
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
                                fontSize:(HEIGHT/100)*1.5,
                                color:'#000',
                                fontFamily:getTypo('regular',this.props.language)}}>
                                {title}
                            </Text>
                        </View>
                    </TouchableOpacity>)
            }

        }else {
            let opacity = 1.0;
            if(this.props.hidden){
                opacity = 0.0
            }
            let _subject;
            switch (this.props.language) {
                case "fa":
                    _subject = getTranslation("subject",this.props.language) +" : "+this.props.data.title_fa;
                    break;
                case "en":
                    _subject = getTranslation("subject",this.props.language) +" : "+this.props.data.title_en;
                    break
            }
            let image ;
            if(this.props.data.pic1!=undefined){
                if(this.props.data.pic1!=null){
                    image= this.props.data.pic1
                }else {
                    image = UniversalDummy
                }
            }else {
                image=UniversalDummy
            }
            return(
                <TouchableOpacity
                    disabled={this.props.hidden}
                    onPress={this.onPress}
                >
                    <View style={{
                        elevation:5,
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
                               source={{uri:image}}
                               resizeMode="cover"/>
                        <Text style={{
                            flex:0.2,
                            textAlign:'center',
                            fontSize:(HEIGHT/100)*1.5,
                            color:'#000',
                            fontFamily:getTypo('regular',this.props.language)}}>
                            {_subject}
                        </Text>
                    </View>
                </TouchableOpacity>)
        }


    }

}