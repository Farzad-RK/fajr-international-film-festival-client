import React,{Component} from "react"
import {View,Text} from "react-native"
import {WIDTH} from "../../Data";
export default class News extends Component {

    constructor(props) {
        super(props);

    }

    render(){
        return(
            <View style={{flex:1 }}>
               <View style={{
                   borderWidth:1,
                   width:WIDTH/2,
                   height:WIDTH/5
               }}>

               </View>
            </View>
        )
    }
}