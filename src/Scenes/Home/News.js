import React,{Component} from "react"
import {View,Text,AsyncStorage} from "react-native"
import {WIDTH} from "../../Data";
export default class News extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            phoneNumber:''
        }
        AsyncStorage.getItem("access_token").then( value =>{
            this.setState({
                phoneNumber : value
            })
        })
    }

    render(){
        return(
            <View style={{flex:1 }}>
               <View style={{
                   borderWidth:1,
                   width:WIDTH/2,
                   height:WIDTH/5
               }}>
                    <Text>{this.state.phoneNumber}</Text>
               </View>
            </View>
        )
    }
}