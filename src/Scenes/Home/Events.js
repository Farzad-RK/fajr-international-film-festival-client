import React,{Component} from "react"
import {View, Text, TouchableOpacity, Image} from "react-native"
import Carousel from "react-native-snap-carousel";
import {getFont, HEIGHT, WIDTH} from "../../Data";
import {Button} from "native-base";
import HorizontalList from "../../Components/HorizontalList";
import Share from "../../../assets/img/share.svg";
import Profile from "../../../assets/img/profile.svg";
import Settings from "../../../assets/img/settings.svg";
import dummy from "../../../assets/img/slide-image.jpg";
import Pagination from "react-native-snap-carousel/src/pagination/Pagination";

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
                <Image
                    style={{flex:1, height: undefined, width: undefined}}
                    resizeMode="contain"
                    source={item.image}/>
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
                    zIndex:1,
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
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={sliderDummyData}
                        onViewableItemsChanged={this.viewableSlide}
                        viewabilityConfig={this.viewabilityConfig}
                        renderItem={this.sliderRender}
                        sliderWidth={WIDTH}
                        itemWidth={WIDTH}
                    />
                    { this.pagination }
                </View>
                <View style={{flex:2,}}>

                </View>
                <View style={{
                    width:WIDTH,
                    height:40,
                    justifyContent:'space-between',
                    position:"absolute",
                    backgroundColor:'transparent',
                    zIndex:1,
                    flexDirection:'row',
                    top:0
                }}>
                    <View style={{marginTop:10,marginLeft:20}} >
                        <TouchableOpacity>
                            <Share width={25} height={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        marginTop:10
                        ,marginRight:20}} >
                        <TouchableOpacity>
                            <Profile style={{marginTop:5,marginRight:15}} width={25} height={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Settings style={{marginTop:5,marginLeft:5}} width={25} height={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    width:WIDTH,
                    height:40,
                    position:"absolute",
                    backgroundColor:'transparent',
                    zIndex:1,
                    top:HEIGHT/5.5
                }}>
                    <Text style={{
                        justifyContent:'center',
                        padding:5,
                        fontFamily:getFont('regular'),
                        fontSize:14,
                        color:"#fff",
                        textAlign:'center'
                    }}>
                        {"جزییات رویداد"}
                    </Text>
                </View>
            </View>
        )
    }
}