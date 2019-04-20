import React, {Component} from "react"
import {AsyncStorage, FlatList, View} from "react-native"
import SlieShow from "../../Components/SlieShow";
import workshopCard from '../../../assets/img/workshop-card.png'
import SectionGridItem from "../../Components/SectionGridItem";
import {getTranslation} from "../../Locale";
import {Navigation} from "react-native-navigation"
//
import interviewPoster from "../../../assets/img/interview-poster.png"
import videolibraryPoster from "../../../assets/img/video-library-poster.png"
import meetingPoster from "../../../assets/img/meetings-poster.png"
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
                   image:interviewPoster,
                   id:0,
                   title:getTranslation("professionalInterviews",language)
               },{
                   image:workshopCard,
                   id:1,
                   title:getTranslation("workshops",language)
               },{
                   image:videolibraryPoster,
                   id:2,
                   title:getTranslation("videoLibrary",language)
               },{
                   image:meetingPoster,
                   id:3,
                   title:getTranslation("professionalMeeting",language)
               }
           ],
            language:language
        })

    }
    onPressItem =  id =>{
        const {title}= this.state.gridData[id];
                if(id===2){
                    Navigation.push('sectionStack',  {
                        component: {
                            id: 'videoLibrary',
                            name: 'VideoLibrary',
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
            else{

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