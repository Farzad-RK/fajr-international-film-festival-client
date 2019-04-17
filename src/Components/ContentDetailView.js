import React,{Component} from "react"
import {Platform, ScrollView, TouchableOpacity, View, Text, BackHandler} from 'react-native'
import {getFont, HEIGHT, WIDTH} from "../Data";
import Back from "../../assets/img/back.svg";
import {Navigation} from "react-native-navigation";
import {WebView} from "react-native-webview";

export default class ContentDetailView extends Component{


    constructor(props){
        super(props)
        this.state = {
            paused :true
        }
        console.log(this.props.data.link_dash)
        this.render = this.render.bind(this)
    }
    componentDidMount(){
        this.navigationEventListener = Navigation.events().bindComponent(this);
        this.navigationEventListener = Navigation.events().bindComponent(this);
    }
    componentDidAppear() {
        this.setState({
            paused :false
        })
    }
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        if (this.navigationEventListener) {
            this.navigationEventListener.remove();
        }
        if (this.navigationEventListener) {
            this.navigationEventListener.remove();
        }
    }
    componentDidDisappear() {
        this.setState({
            paused :true
        })
    }
    onPressBack = () =>{

    }
    render(){
        return(
            <View style={{flex:1}}>
            <View style={{
            width:WIDTH,
                flexDirection:'row',
                height:HEIGHT/12,
                backgroundColor:'#c71815'}}>
            <View style={{flex:0.2}}>
            <TouchableOpacity style={{flex:1,padding:HEIGHT/42}}>
                <View style={{flex:1}}>
                </View>
            </TouchableOpacity>
            </View>
            <Text
            style={{
                flex:0.6,
                marginTop:WIDTH/19,
                fontSize:(HEIGHT/100)*2.2,
                textAlign: 'center',
                borderBottomColor:"#fff",
                height:'60%',paddingTop: 0,paddingBottom: 0,
                fontFamily:getFont('regular'),
                color:'#fff',
            }} >
                {this.props.data.subject_fa}
        </Text>
        <View style={{flex:0.2}}>
            <TouchableOpacity onPress={()=>Navigation.pop('contentIndex')} style={{flex:1,padding:HEIGHT/42}}>
                <Back style={{flex:1}}/>
             </TouchableOpacity>
            </View>
         </View>
             <View style={{
                 width:WIDTH,
                 height:HEIGHT - (HEIGHT/12),
             }}>
                <View style={{flex:1 ,borderWidth:1}}>
                </View>
                 <ScrollView style={{flex:1}}>

                </ScrollView>
             </View>
            </View>

        )
    }
}

