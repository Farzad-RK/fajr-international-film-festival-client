import React,{Component} from "react"
import {Image, Text, View,TouchableOpacity} from "react-native";
import {getFont, HEIGHT, WIDTH} from "../Data";
import UniversalDummy from "../../assets/img/UniversalDummy.png";
import {getAlignment, getText} from "../Locale";
import BoxShadow from "react-native-shadow/lib/BoxShadow";

export default class ContentGridItem extends Component{

    constructor(props) {
        super(props);
        console.log(this.props.data)
    }

    _onPress= ()=>{
        this.props.onPressContent(this.props.data)
    }
    handleImage = ()=>{
        if(this.props.data.pictures!=undefined){
            if(this.props.data.pictures.length>0){
               const cardImage = this.props.data.pictures[0].path
               console.log(cardImage)
                return(
                    <Image source={{uri:cardImage}}
                           resizeMode="cover"
                           style={{
                               flex:0.7,
                               borderRadius:10,
                               width:undefined,
                               height:undefined}}
                    />
                )
            }else{
                return(
                    <Image source={UniversalDummy}
                           resizeMode="cover"
                           style={{
                               flex:0.7,
                               borderRadius:10,
                               width:undefined,
                               height:undefined}}
                    />
                )
            }
        }else {
            return(
                <Image source={UniversalDummy}
                       resizeMode="cover"
                       style={{
                           flex:0.7,
                           borderRadius:10,
                           width:undefined,
                           height:undefined}}
                />
            )
        }
    }

    render(){
        const alignment = getAlignment();
        const teacher =  getText("teacher")+" : "+this.props.data.teacher_name_fa;
        const subject = getText("subject") +" : "+this.props.data.subject_fa;
        let opacity = 1.0;
        if(this.props.hidden){
            opacity = 0.0
        }
        return(

        <TouchableOpacity
            onPress={this._onPress}
            disabled={this.props.hidden}
           >
            <View  style={{
                opacity:opacity,
                borderRadius:10,
                margin:10,
                width:WIDTH/2.3,
                backgroundColor:"#fff",
                height:HEIGHT/3.2}}>
                {this.handleImage()}
                <View style={{flex:0.3,justifyContent:'center'}}>
                    <Text style={{
                        margin:2.5,
                        color:'#000',
                        fontFamily:getFont("regular"),
                        fontSize:(HEIGHT/100)*1.5,
                        flex:1,
                        textAlign:alignment}}>
                        {teacher}
                    </Text>
                    <Text style={{
                        color:'#000',
                        margin:2.5,
                        fontFamily:getFont("regular"),
                        fontSize:(HEIGHT/100)*1.2,
                        flex:1,
                        textAlign:alignment }}>
                        {subject}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>

        )
    }
}
//