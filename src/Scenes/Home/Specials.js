import React,{Component} from "react"
import {View, Text, Image, TouchableOpacity, ImageBackground} from "react-native"
import {Button} from "native-base"
import {WIDTH, HEIGHT, getFont} from "../../Data";
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import dummy from '../../../assets/img/slide-image.jpg'
import dummyAvatar from '../../../assets/img/dummy-avatar.jpg'
import Settings  from '../../../assets/img/settings.svg'
import Share  from '../../../assets/img/share.svg'
import Profile from '../../../assets/img/profile.svg'
import HorizontalLisItem from "../../Components/HorizontalListItem";
import HorizontalList from "../../Components/HorizontalList";
import LinearGradient from "react-native-linear-gradient";


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
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    }
]

export default class Specials extends Component {

    constructor(props) {
        super(props);
        this.onSnapToItem = this.onSnapToItem.bind(this);
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
                    resizeMode="contain"
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
   onSnapToItem(index){
        this.setState({
            activeSlide :index
        })
   }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{
                    flex:1,
                    }}>
                <Carousel
                    style={{flex:1,height:'100%'}}
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
                          <View style={{flex:1}}>
                            <View style={{
                                flex:0.2,
                                flexDirection:'row',
                                justifyContent:'space-between'}}>
                                <Button
                                    small
                                    style={{
                                    justifyContent: 'center',
                                    width:60,
                                    borderRadius:5,
                                    marginTop:5,
                                    marginLeft:15,
                                    height:20,
                                    backgroundColor:'#ca1814'}}>
                                    <Text style={{ textAlign:'center' ,fontSize:10, color:'#fff', fontFamily:getFont('regular')}}>{"بیشتر"}</Text>
                                </Button>
                                <Text style={{
                                    padding:5,
                                    fontSize:12,
                                    color:'#000',
                                    fontFamily:getFont('bold')}}>
                                    {" تماشای کارگاه های بازیگری"}
                                </Text>
                            </View>
                            <View style={{flex:0.8}}>
                                <HorizontalList data={listDummyData}/>
                            </View>
                          </View>
                          <View style={{flex:1}}>
                              <View style={{
                                  flex:0.2,
                                  flexDirection:'row',
                                  justifyContent:'space-between'}}>
                                  <Button
                                      small
                                      style={{
                                          justifyContent: 'center',
                                          width:60,
                                          borderRadius:5,
                                          marginTop:5,
                                          marginLeft:15,
                                          height:20,
                                          backgroundColor:'#ca1814'}}>
                                      <Text style={{ textAlign:'center' ,fontSize:10, color:'#fff', fontFamily:getFont('regular')}}>{"بیشتر"}</Text>
                                  </Button>
                                  <Text style={{
                                      padding:5,
                                      fontSize:12,
                                      color:'#000',
                                      fontFamily:getFont('bold')}}>
                                      {"تماشای کارگاه های کارگردانی"}
                                  </Text>
                              </View>
                              <View style={{flex:0.8}}>
                                  <HorizontalList data={listDummyData}/>
                              </View>
                          </View>
                     </View>
                <LinearGradient
                    start={{x: 0.0, y: 0}} end={{x: 0.0, y:2.5}} locations={[0, 0.45]}
                    colors={['#000', 'transparent']}
                    style={{
                        width:WIDTH,
                        zIndex:1,
                        height:40,
                        justifyContent:'space-between',
                        position:"absolute",
                        backgroundColor:'transparent',
                        flexDirection:'row',
                        top:0
                    }}>
                    <View style={{marginTop:10,marginLeft:20,zIndex:1}} >
                        <TouchableOpacity style={{flex:1}}>
                            <Share width={25} height={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        marginTop:10
                        ,marginRight:20}} >
                        <TouchableOpacity >
                            <Profile style={{marginTop:5,marginRight:15}} width={25} height={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Settings style={{marginTop:5,marginLeft:5}} width={25} height={25} />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <LinearGradient   start={{x: 0.0, y: 0}} end={{x: 0.0, y:5}} locations={[0, 1]}
                                  colors={['transparent','rgba(0,0,0,.5)' ]}
                                style={{top:HEIGHT/4,position:'absolute',width: WIDTH, height:20,zIndex:2}}/>

            </View>
        )
    }
}