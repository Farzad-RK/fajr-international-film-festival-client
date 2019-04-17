import React,{Component} from "react"
import {FlatList, ScrollView, TextInput, TouchableOpacity, View,Text} from 'react-native'
import VerticalListItem from "./VerticalListItem";
import {getFont, HEIGHT, WIDTH} from "../Data";
import Search from "../../assets/img/search.svg";
import {getText} from "../Locale";
import Back from "../../assets/img/back.svg";


export default class ContentDetailView extends Component{


    constructor(props){
        super(props)
        console.log(this.props.data)
    }
    onPressBack = () =>{

    }
    render(){

        return(
        <View style={{
                flex:1
        }}>
            <View style={{
                flexDirection:'row',
                flex:0.2,
                backgroundColor:'#c71815'}}>
                <View style={{flex:0.2}}>
                    <View style={{flex:1,padding:HEIGHT/42}}>
                    </View>
                </View>
                <Text
                    style={{
                        flex:0.6,
                        textAlign: 'center',
                        borderBottomWidth:0.5,
                        borderBottomColor:"#fff",
                        height:'60%',paddingTop: 0,paddingBottom: 0,
                        fontFamily:getFont('regular'),
                        color:'#fff',
                    }}>
                    {getText('workshop')}
                </Text>
                <View style={{flex:0.2}}>
                    <TouchableOpacity onPress={this.onPressBack} style={{flex:1,padding:HEIGHT/42}}>
                        <Back style={{flex:1}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flex:0.65,
                borderWidth:1
            }}>
            </View>
            <ScrollView style={{
                flex:1,
                borderWidth:1
            }}>


            </ScrollView>


        </View>
        )
    }
}

