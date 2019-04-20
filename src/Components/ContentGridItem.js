import React,{Component} from "react"
import {Image, Text, View,TouchableOpacity} from "react-native";
import {getFont, getTypo, HEIGHT, WIDTH} from "../Data";
import UniversalDummy from "../../assets/img/UniversalDummy.png";
import {getAlignment, getText, getTranslation} from "../Locale";
import BoxShadow from "react-native-shadow/lib/BoxShadow";

export default class ContentGridItem extends Component{

    constructor(props) {
        super(props);
    }

    _onPress= ()=>{
        this.props.onPressContent(this.props.data,this.props.sectionId)
    }
    handleImage = ()=>{
        if(this.props.data.pictures!=undefined){
            if(this.props.data.pictures.length>0){
               const cardImage = this.props.data.pictures[0].path
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
    handleMeetingImage=()=>{
        if(this.props.data.pic1!=undefined){
            if(this.props.data.pic1!=null){
                return(
                    <Image source={{uri:this.props.data.pic1}}
                           resizeMode="cover"
                           style={{
                               flex:0.7,
                               borderRadius:10,
                               width:undefined,
                               height:undefined}}
                    />
                )
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
    handleLibrayImage = ()=>{
        if(this.props.data.thumbnail_url!=undefined){
            if(this.props.data.thumbnail_url!=null){
                return(
                    <Image source={{uri:this.props.data.thumbnail_url}}
                           resizeMode="cover"
                           style={{
                               flex:0.7,
                               borderRadius:10,
                               width:undefined,
                               height:undefined}}
                    />
                )
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
        let opacity = 1.0;
        if(this.props.hidden){
            opacity = 0.0
        }
        const alignment = getAlignment();
        if(this.props.sectionId===1){
            let teacher =  getTranslation("teacher",this.props.language)+" : "+this.props.data.teacher_name_fa;
            let subject = getTranslation("subject",this.props.language) +" : "+this.props.data.subject_fa;
            switch (this.props.language) {
                case "fa":
                    teacher =  getTranslation("teacher",this.props.language)+" : "+this.props.data.teacher_name_fa;
                    subject = getTranslation("subject",this.props.language) +" : "+this.props.data.subject_fa;
                    break;
                case "en":
                    teacher =  getTranslation("teacher",this.props.language)+" : "+this.props.data.teacher_name_en;
                    subject = getTranslation("subject",this.props.language) +" : "+this.props.data.subject_en;
                    break
            }
            return(

                <TouchableOpacity
                    onPress={this._onPress}
                    disabled={this.props.hidden}
                >
                    <View  style={{
                        opacity:opacity,
                        elevation:5,
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
                                fontFamily:getTypo("regular",this.props.language),
                                fontSize:(HEIGHT/100)*1.5,
                                flex:1,
                                textAlign:alignment}}>
                                {teacher}
                            </Text>
                            <Text style={{
                                color:'#000',
                                margin:2.5,
                                fontFamily:getTypo("regular",this.props.language),
                                fontSize:(HEIGHT/100)*1.2,
                                flex:1,
                                textAlign:alignment }}>
                                {subject}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

            )
        }else if(this.props.sectionId===0||this.props.sectionId===2){
            let _subject;
            switch (this.props.language) {
                case "fa":
                    _subject = getTranslation("subject",this.props.language) +" : "+this.props.data.title_fa;
                    break;
                case "en":
                    _subject = getTranslation("subject",this.props.language) +" : "+this.props.data.title_en;
                    break
            }
            return(
                <TouchableOpacity
                    onPress={this._onPress}
                    disabled={this.props.hidden}
                >
                    <View  style={{
                        opacity:opacity,
                        elevation:5,
                        borderRadius:10,
                        margin:10,
                        width:WIDTH/2.3,
                        backgroundColor:"#fff",
                        height:HEIGHT/3.2}}>
                        {this.handleMeetingImage()}
                        <View style={{flex:0.3,justifyContent:'center'}}>
                            <Text style={{
                                margin:2.5,
                                color:'#000',
                                fontFamily:getTypo("regular",this.props.language),
                                fontSize:(HEIGHT/100)*1.5,
                                flex:1,
                                textAlign:alignment}}>
                                {_subject}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

            )
        }else if(this.props.sectionId===3){
            let _subject;
            switch (this.props.language) {
                case "fa":
                    _subject = getTranslation("title",this.props.language) +" : "+this.props.data.title_fa;
                    break;
                case "en":
                    _subject = getTranslation("title",this.props.language) +" : "+this.props.data.title_en;
                    break
            }
            return(
                <TouchableOpacity
                    onPress={this._onPress}
                    disabled={this.props.hidden}
                >
                    <View  style={{
                        opacity:opacity,
                        elevation:5,
                        borderRadius:10,
                        margin:10,
                        width:WIDTH/2.3,
                        backgroundColor:"#fff",
                        height:HEIGHT/3.2}}>
                        {this.handleLibrayImage()}
                        <View style={{flex:0.3,justifyContent:'center'}}>
                            <Text style={{
                                margin:2.5,
                                color:'#000',
                                fontFamily:getTypo("regular",this.props.language),
                                fontSize:(HEIGHT/100)*1.5,
                                flex:1,
                                textAlign:alignment}}>
                                {_subject}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

            )

        }
    }
}
