import React,{Component} from "react"
import {Image, Text, View,TouchableOpacity} from "react-native";
import {getFont, HEIGHT, WIDTH} from "../Data";
import dummyContentImage from "../../assets/img/content-item.jpg";
import {getAlignment, getText} from "../Locale";

export default class ContentGridItem extends Component{

    constructor(props) {
        super(props);
    }
    render(){
        const alignment = getAlignment();
        const teacher =  getText("teacher")+" : "+this.props.teacher;
        const subject = getText("subject") +" : "+this.props.subject;
        let opacity = 1.0;
        if(this.props.hidden){
            opacity = 0.0
        }
        return(
        <TouchableOpacity
            disabled={this.props.hidden}
           >
            <View  style={{
                opacity:opacity,
                borderRadius:10,
                margin:10,
                width:WIDTH/2.3,
                backgroundColor:"#fff",
                height:HEIGHT/3.45}}>
                <Image source={this.props.image}
                       resizeMode="cover"
                       style={{
                           flex:0.7,
                           borderRadius:10,
                           width:undefined,
                           height:undefined}}
                />
                <View style={{flex:0.3,justifyContent:'center'}}>
                    <Text style={{
                        margin:5,
                        color:'#000',
                        fontFamily:getFont("regular"),
                        fontSize:(HEIGHT/100)*1.5,
                        flex:1,
                        textAlign:alignment}}>
                        {teacher}
                    </Text>
                    <Text style={{
                        color:'#000',
                        margin:5,
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