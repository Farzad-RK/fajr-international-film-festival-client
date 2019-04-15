import React,{Component} from "react"
import {View, Text, FlatList, ImageBackground, TouchableOpacity} from "react-native"
import SlieShow from "../../Components/SlieShow";
import dummy from "../../../assets/img/slide-image.jpg";
import {getFont, HEIGHT, WIDTH} from "../../Data";
import LinearGradient from "react-native-linear-gradient";
import sectionDummy from "../../../assets/img/section-dummy.jpg"
import SectionGrid from "../../Components/SectionGrid";
import SectionGridItem from "../../Components/SectionGridItem";
import {getText} from "../../Locale";
import { Navigation } from 'react-native-navigation'
import {gotToAuth, gotToSectionPage} from "../../Navigation";

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
        id:0,
        title:getText("professionalInterviews")
    },{
        image:sectionDummy,
        id:1,
        title:getText("workshops")
    },{
        image:sectionDummy,
        id:2,
        title:getText("videoLibrary")
    },{
        image:sectionDummy,
        id:3,
        title:getText("professionalMeeting")
    }
]
export default class Sections extends Component {

    constructor(props) {
        super(props);
        this.onPressItem = this.onPressItem.bind(this)
        this.renderItem =   this.renderItem.bind(this)
    }
    onPressItem =  id =>{
                const {title}= gridData[id];
                gotToSectionPage(title)
        }

    _keyExtractor = (item, index) => index.toString();
    renderItem({item}){
        return(
            <SectionGridItem onPressSection={this.onPressItem} data={item}/>
        )
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <SlieShow data={sliderDummyData}/>
                </View>
                <View style={{flex:2}}>
                    <View style={{flex:1}}>
                        <FlatList
                            data={gridData}
                            keyExtractor={this._keyExtractor}
                            renderItem={this.renderItem}
                            numColumns={2}
                            contentContainerStyle={{alignItems:'center'}}
                            // contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>
        )
    }
}