import React,{Component} from "react"
import {View, Text, FlatList, ImageBackground, TouchableOpacity} from "react-native"
import SlieShow from "../../Components/SlieShow";
import dummy from "../../../assets/img/slide-image.jpg";
import {getFont, HEIGHT, WIDTH} from "../../Data";
import LinearGradient from "react-native-linear-gradient";
import sectionDummy from "../../../assets/img/section-dummy.jpg"
import SectionGrid from "../../Components/SectionGrid";

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
const gridData = [
    {
        image:sectionDummy,
        title:"مصاحبه های نخصصی"
    },{
        image:sectionDummy,
        title:"دارالفنون"
    },{
        image:sectionDummy,
        title:"کتابخانه ویدئویی"
    },{
        image:sectionDummy,
        title:"نشست های تخصصی "
    }
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
                    <SectionGrid data={gridData}/>
                </View>
            </View>
        )
    }
}