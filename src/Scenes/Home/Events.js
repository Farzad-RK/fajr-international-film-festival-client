import React, {Component} from "react"
import {ImageBackground, Text, View} from "react-native"
import {getFont, HEIGHT} from "../../Data";
import event1 from "../../../assets/img/event1.png"
import event2 from "../../../assets/img/event2.png"
import event3 from "../../../assets/img/event3.png"
import event4 from "../../../assets/img/event4.png"
import Pagination from "react-native-snap-carousel/src/pagination/Pagination";
import VerticalList from "../../Components/VerticalList";
import SlieShow from "../../Components/SlieShow";
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
const listDummyData = [
    {
        image:event1,
        title:"میهمانی ها"
    },
    {
        image:event2,
        title:"افتتاحیه"
    },
    {
        image:event3,
        title:"اختتامیه"
    },
    {
        image:event4,
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
                flex:1,
                backgroundColor:"#dfdfdf"
            }}>
                <View style={{
                    flex:1,
                }}>
                   <SlieShow stack={"eventStack"} fromUri ={false}data={sliderDummyData}/>
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