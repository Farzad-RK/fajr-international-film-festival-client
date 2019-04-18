import React,{Component} from "react"
import {View, Text, TouchableOpacity, Image,ImageBackground} from "react-native"
import Carousel from "react-native-snap-carousel";
import {getFont, HEIGHT, WIDTH} from "../../Data";
import Share from "../../../assets/img/share.svg";
import Profile from "../../../assets/img/profile.svg";
import Settings from "../../../assets/img/settings.svg";
import dummy from "../../../assets/img/slide-image.jpg";
import Pagination from "react-native-snap-carousel/src/pagination/Pagination";
import LinearGradient from "react-native-linear-gradient";
import eventDummy from "../../../assets/img/event-dummy.jpg"
import VerticalListItem from "../../Components/VerticalListItem";
import VerticalList from "../../Components/VerticalList";
import dummyAvatar from "../../../assets/img/dummy-avatar.jpg";
import SlieShow from "../../Components/SlieShow";
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
const listDummyData = [
    {
        image:eventDummy,
        title:"میهمانی ها"
    },
    {
        image:eventDummy,
        title:"افتتاحیه"
    },
    {
        image:eventDummy,
        title:"اختتامیه"
    },
    {
        image:eventDummy,
        title:"رویدادهای جانبی"
    }
]

export default class Events extends Component {

    constructor(props) {
        super(props);
        this.viewableSlide = this.viewableSlide.bind(this)
        this.viewabilityConfig = {
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold:50
        }
        this.state={
            activeSlide:0
        }
    }
    sliderRender({item}){
        return(
            <View style={{
                flex:1,
            }}>
                <ImageBackground
                    style={{
                        justifyContent: 'flex-end',
                        flex:1,
                        height: undefined,
                        width: undefined}}
                    resizeMode="stretch"
                    source={item.image}>
                    <Text style={{
                        padding:5,
                        marginBottom:35,
                        fontFamily:getFont('regular'),
                        fontSize:14,
                        color:"#fff",
                        textAlign:'center'
                    }}>
                        {"جزییات رویداد"}
                    </Text>
                </ImageBackground>
            </View>
        )
    }
    viewableSlide({viewableItems}){

        this.setState({
            activeSlide:viewableItems[0].index
        })
    }
    get pagination () {
        const { activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={sliderDummyData.length}
                activeDotIndex={activeSlide}
                containerStyle={{
                    position:'absolute',
                    top:HEIGHT/5,
                    left:0,
                    right:0
                }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }
    render(){
        return(
            <View style={{
                flex:1
            }}>
                <View style={{
                    flex:1,
                }}>
                   <SlieShow fromUri ={false}data={sliderDummyData}/>
                </View>
                <View style={{flex:2,}}>
                   <VerticalList
                       data={listDummyData}
                       style={{
                            flex:1,
                   }}/>
                </View>
            </View>
        )
    }
}