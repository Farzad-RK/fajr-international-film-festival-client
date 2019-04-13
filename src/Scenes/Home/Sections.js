import React,{Component} from "react"
import {View,Text,FlatList} from "react-native"
import SlieShow from "../../Components/SlieShow";
import dummy from "../../../assets/img/slide-image.jpg";

const sliderDummyData = [
    {
        image : dummy,
    } ,
    {
        image : dummy,

    },
    {
        image : dummy,
    },
]
export default class Sections extends Component {

    constructor(props) {
        super(props);

    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <SlieShow data={sliderDummyData}/>
                </View>
                <View style={{flex:2}}>
                </View>
            </View>
        )
    }
}