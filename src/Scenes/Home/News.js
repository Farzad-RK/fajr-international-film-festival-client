import React,{Component} from "react"
import {View,Text,AsyncStorage} from "react-native"
import {WIDTH} from "../../Data";
export default class News extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            phoneNumber:''
        }
        this.getToken()
    }
    getToken = async () =>{
        let token = await  AsyncStorage.getItem("accessToken")
        this.setState({
            phoneNumber : token
        })
    };
    render(){
        return(
            <View style={{flex:1 }}>
               <View style={{
                   borderWidth:1,
                   width:'100%',
                   height:'100%'
               }}>
                    <Text style={{flex:1}}>{this.state.phoneNumber}</Text>
               </View>
            </View>
        )
    }
}