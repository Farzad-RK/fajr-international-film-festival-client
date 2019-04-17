import React,{Component} from "react"
import {View,Text,AsyncStorage} from "react-native"
import {WIDTH} from "../../Data";
import { WebView } from 'react-native-webview';
export default class News extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={{flex:1 }}>
               <WebView
                   source={{uri: `https://www.fajriff.com/fa/category/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1/`}}
               />
            </View>
        )
    }
}