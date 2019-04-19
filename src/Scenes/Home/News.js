import React, {Component} from "react"
import {AsyncStorage, View} from "react-native"
import {WebView} from 'react-native-webview';

export default class News extends Component {

    constructor(props) {
        super(props);
        this.getLanguage()
        this.state={
            language:'fa'
        }
    }
    getLanguage =async () =>{
        let language = await AsyncStorage.getItem("selectedLocale")
        this.setState({
            language:language
        })
    }
    render(){
        let link ;
        switch (this.state.language) {
            case "en":
                link = `https://www.fajriff.com/en/category/news-and-reports/`
                break
            case "fa":
                link = `https://www.fajriff.com/fa/category/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1/`
                break
            default:
                link = `https://www.fajriff.com/fa/category/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1/`
                break
        }
        return(
            <View style={{flex:1 }}>
               <WebView
                   source={{uri: link}}
               />
            </View>
        )
    }
}