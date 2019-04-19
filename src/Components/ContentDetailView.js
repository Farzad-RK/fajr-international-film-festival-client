import React,{Component} from "react"
import { ScrollView, TouchableOpacity, View, Text,Dimensions} from 'react-native'
import { getTypo, HEIGHT, WIDTH} from "../Data";
import Back from "../../assets/img/back.svg";
import VideoPlayer from 'react-native-video-controls';
import {Navigation} from "react-native-navigation";
import {getAlignment, getTranslation} from "../Locale";
export default class ContentDetailView extends Component{


    constructor(props){
        super(props)
        this.state = {
            topbarFlex:0.12,
            contentFlex:0.88,
            currentWidth :WIDTH,
            renderDetail:true,
            topBackground:'#c71815',
            backButtonPadding:HEIGHT/25
        }
        this.render = this.render.bind(this)
        this.renderDetail = this.renderDetail.bind(this)
    }
    onLayout = () => {
        const {width,height} = Dimensions.get('window')
        if(width>this.state.currentWidth){
            this.setState({
                currentWidth:width,
                topbarFlex:0.15,
                contentFlex:0.85,
                renderDetail:false,
                topBackground:'#000',
                backButtonPadding:height/50
            })
        }else if(width<this.state.currentWidth) {
            this.setState({
                currentWidth:width,
                topbarFlex:0.12,
                renderDetail:true,
                contentFlex:0.88,
                topBackground:'#c71815',
                backButtonPadding:height/25
            })
        }
    }
    renderDetail = ()=>{
        if(this.state.renderDetail) {
            if (this.props.type === 1) {
                let teacher;
                let description;
                let biography;
                let country;

                switch (this.props.language) {
                    case "fa":
                        teacher = getTranslation("teacher", "fa") + " : " + this.props.data.teacher_name_fa
                        if (this.props.data.text_fa !== null) {
                            let description = getTranslation("description", "fa") + " : " + this.props.data.text_fa
                        }
                        if (this.props.teacher_info_fa !== null) {
                            biography = getTranslation("about", "fa") + " : " + this.props.data.teacher_info_fa
                        }
                        country = getTranslation("country", "fa") + " : " + this.props.data.country_fa
                        break
                    case "en":
                        teacher = getTranslation("teacher", "en") + " : " + this.props.data.teacher_name_en
                        if (this.props.data.text_en !== null) {
                            description = getTranslation("description", "en") + " : " + this.props.data.text_en
                        }
                        if (this.props.teacher_info_en !== null) {
                            biography = getTranslation("about", "en") + " : " + this.props.data.teacher_info_en
                        }
                        country = getTranslation("country", "en") + " : " + this.props.data.country_en
                }
                return (
                    <ScrollView style={{flex: 1}}>
                        <View style={{
                            flex: 1,
                            marginTop: 20,
                            width: WIDTH,
                            height: HEIGHT / 14,
                            alignItems: 'center',
                        }}>

                            <Text style={{
                                width: '80%',
                                flex: 1,
                                textAlign: getAlignment(),
                                fontFamily: getTypo('bold', this.props.language),
                                color: '#000'
                            }}>
                                {teacher}
                            </Text>
                        </View>
                        <View style={{
                            flex: 1,
                            width: WIDTH,
                            height: HEIGHT / 14,
                            marginTop: 10,
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                width: '80%',
                                flex: 1,
                                textAlign: getAlignment(),
                                fontFamily: getTypo('bold', this.props.language),
                                color: '#000'
                            }}>
                                {country}
                            </Text>
                        </View>
                        <View style={{
                            flex: 1,
                            width: WIDTH,
                            height: HEIGHT / 10,
                            marginTop: 10,
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                width: '80%',
                                flex: 1,
                                textAlign: getAlignment(),
                                fontFamily: getTypo('regular', this.props.language),
                                color: '#000'
                            }}>
                                {biography}
                            </Text>
                        </View>
                        <View style={{
                            flex: 1,
                            width: WIDTH,
                            height: HEIGHT / 9,
                            marginTop: 10,
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                width: '80%',
                                flex: 1,
                                textAlign: getAlignment(),
                                fontFamily: getTypo('regular', this.props.language),
                                color: '#000'
                            }}>
                                {description}
                            </Text>
                        </View>
                    </ScrollView>
                )
            } else {
                let _subject;
                let _description;
                switch (this.props.language) {

                    case "fa":
                        _subject = getTranslation("subject", "fa") + " : " + this.props.data.title_fa
                        if (this.props.data.description_fa !== null) {
                            let _description = getTranslation("description", "fa") + " : " + this.props.data.description_fa
                        }
                        break;
                    case "en":
                        _subject = getTranslation("subject", "en") + " : " + this.props.data.title_en
                        if (this.props.data.description_en !== null) {
                            _description = getTranslation("description", "en") + " : " + this.props.data.description_en
                        }
                }
                return (
                    <ScrollView style={{flex: 1}}>
                        <View style={{
                            flex: 1,
                            marginTop: 20,
                            width: WIDTH,
                            height: HEIGHT / 14,
                            alignItems: 'center',
                        }}>

                            <Text style={{
                                width: '80%',
                                flex: 1,
                                textAlign: getAlignment(),
                                fontFamily: getTypo('bold', this.props.language),
                                color: '#000'
                            }}>
                                {_subject}
                            </Text>
                        </View>
                        <View style={{
                            flex: 1,
                            width: WIDTH,
                            height: HEIGHT / 9,
                            marginTop: 10,
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                width: '80%',
                                flex: 1,
                                textAlign: getAlignment(),
                                fontFamily: getTypo('regular', this.props.language),
                                color: '#000'
                            }}>
                                {_description}
                            </Text>
                        </View>
                    </ScrollView>)
            }
        }
    }
    render(){
        let subject ;
        if (this.props.type === 1) {
        switch (this.props.language) {
            case "fa":
                subject =this.props.data.subject_fa
                break
            case "en":
                subject=this.props.data.subject_en
                break
        } }else {
            switch (this.props.language) {
                case "fa":
                    subject =this.props.data.title_fa
                    break
                case "en":
                    subject=this.props.data.title_en
                    break
            }
        }
        return(
            <View
                onLayout={this.onLayout.bind(this)}
                style={{flex:1 ,
                        backgroundColor:'#dedede'
                }}>
            <View style={{
                flex:this.state.topbarFlex,
                flexDirection:'row',
                backgroundColor:this.state.topBackground}}>
            <View style={{flex:0.2}}>
            <TouchableOpacity style={{flex:1}}>
                <View style={{flex:1}}>
                </View>
            </TouchableOpacity>
            </View>
            <Text
            style={{
                flex:0.6,
                marginTop:WIDTH/19,
                textAlign: 'center',
                borderBottomColor:"#fff",
                height:'60%',paddingTop: 0,paddingBottom: 0,
                fontFamily:getTypo('regular',this.props.language),
                color:'#fff',
            }} >
                {subject}
        </Text>
        <View style={{flex:0.2}}>
            <TouchableOpacity onPress={()=>Navigation.pop('contentDetailView')} style={{flex:1,padding:this.state.backButtonPadding}}>
                <Back style={{flex:1}}/>
             </TouchableOpacity>
            </View>
         </View>
             <View style={{
                flex:this.state.contentFlex
             }}>
                <View style={{flex:1 ,borderWidth:1}}>
                    <VideoPlayer
                        disableBack={true}
                        style={{flex:1}}
                        navigator={null}
                        source={{ uri:this.props.data.link_dash }}
                    />
                </View>
                 {this.renderDetail()}
             </View>
            </View>

        )
    }
}

