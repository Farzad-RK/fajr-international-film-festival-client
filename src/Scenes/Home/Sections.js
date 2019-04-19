import React,{Component} from "react"
import {View, FlatList, AsyncStorage} from "react-native"
import SlieShow from "../../Components/SlieShow";
import dummy from "../../../assets/img/slide-image.jpg";
import universalDummy from "../../../assets/img/UniversalDummy.png"
import workshopCard from '../../../assets/img/workshop-card.png'
import meetingCard from '../../../assets/img/meetingCard.png'
import SectionGridItem from "../../Components/SectionGridItem";
import { getTranslation} from "../../Locale";
import {Navigation} from "react-native-navigation"
//slider images
import slide1 from "../../../assets/img/slide1.jpg"
import slide2 from "../../../assets/img/slide2.jpg"
import slide3 from "../../../assets/img/slide3.jpg"
import slide4 from "../../../assets/img/slide4.jpg"

const sliderDummyData = [
    {
        image : slide3,
    } ,
    {
        image : slide2,

    },
    {
        image : slide1 ,
    },
    {
        image : slide4
    }
]
export default class Sections extends Component {

    constructor(props) {
        super(props);
        this.onPressItem = this.onPressItem.bind(this)
        this.renderItem =   this.renderItem.bind(this)
        this.getLanguage()
        this.state = {
            gridData:[],
            language:'fa'
        }
    }
    getLanguage =async () =>{
        let language = await AsyncStorage.getItem("selectedLocale")
        this.setState({
           gridData :[
               {
                   image:universalDummy,
                   id:0,
                   title:getTranslation("professionalInterviews",language)
               },{
                   image:workshopCard,
                   id:1,
                   title:getTranslation("workshops",language)
               },{
                   image:universalDummy,
                   id:2,
                   title:getTranslation("videoLibrary",language)
               },{
                   image:meetingCard,
                   id:3,
                   title:getTranslation("professionalMeeting",language)
               }
           ],
            language:language
        })

    }
    onPressItem =  id =>{
                const {title}= this.state.gridData[id];
                Navigation.push('sectionStack',  {
                    component: {
                        id: 'sectionPage',
                        name: 'SectionPage',
                        options:{
                            bottomTabs: { visible: false, drawBehind: true, animate: true },
                            layout: {
                                orientation: ['portrait']
                            }
                        },
                        passProps: {
                            title:title,
                            sectionId:id
                        },
                    },
                },)
        }

    _keyExtractor = (item, index) => index.toString();
    renderItem({item}){
        return(
            <SectionGridItem language={this.state.language} onPressSection={this.onPressItem} data={item}/>
        )
    }
    render(){
        return(
            <View style={{flex:1,
                backgroundColor:"#dfdfdf"
            }}>
                <View style={{flex:1}}>
                    <SlieShow stack={"sectionStack"}  fromUri={false}data={sliderDummyData}/>
                </View>
                <View style={{flex:2}}>
                    <View style={{flex:1}}>
                        <FlatList
                            data={this.state.gridData}
                            keyExtractor={this._keyExtractor}
                            renderItem={this.renderItem}
                            numColumns={2}
                            contentContainerStyle={{alignItems:'center'}}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>
        )
    }
}