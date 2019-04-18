import React,{Component} from "react"
import {View, FlatList, AsyncStorage} from "react-native"
import SlieShow from "../../Components/SlieShow";
import dummy from "../../../assets/img/slide-image.jpg";
import universalDummy from "../../../assets/img/UniversalDummy.png"
import workshopCard from '../../../assets/img/workshop-card.png'
import meetingCard from '../../../assets/img/meetingCard.png'
import SectionGridItem from "../../Components/SectionGridItem";
import { getTranslation} from "../../Locale";
import { gotToSectionPage} from "../../Navigation";

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
                gotToSectionPage(title,id)
        }

    _keyExtractor = (item, index) => index.toString();
    renderItem({item}){
        return(
            <SectionGridItem language={this.state.language} onPressSection={this.onPressItem} data={item}/>
        )
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <SlieShow  fromUri={false}data={sliderDummyData}/>
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