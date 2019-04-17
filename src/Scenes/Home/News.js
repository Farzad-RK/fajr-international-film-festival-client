import React,{Component} from "react"
import {View,Text,AsyncStorage} from "react-native"
import {WIDTH} from "../../Data";
export default class News extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={{flex:1 }}>
               <View style={{
                   width:'100%',
                   height:'100%'
               }}>
                    <Text style={{flex:1}}>{"news"}</Text>
               </View>
            </View>
        )
    }
}