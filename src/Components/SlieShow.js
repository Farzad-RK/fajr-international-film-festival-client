import React,{Component} from "react"
import {ImageBackground, Text, TouchableOpacity, View} from "react-native"
import {getFont, HEIGHT, WIDTH} from "../Data";
import dummy from "../../assets/img/slide-image.jpg";
import Pagination from "react-native-snap-carousel/src/pagination/Pagination";
import Carousel from "react-native-snap-carousel";
import LinearGradient from "react-native-linear-gradient";
import Share from "../../assets/img/share.svg";
import Profile from "../../assets/img/profile.svg";
import Settings from "../../assets/img/settings.svg";
import {Navigation} from "react-native-navigation";

export default class SliedShow extends Component {

    constructor(props){
        super(props)
        this.onSnapToItem = this.onSnapToItem.bind(this);
        this.viewableSlide = this.viewableSlide.bind(this)
        this.sliderRender = this.sliderRender.bind(this)
        this.onPressSettings = this.onPressSettings.bind(this)
        this.viewabilityConfig = {
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold:50
        }
        this.state={
            activeSlide:0
        }
    }
    sliderRender({item}){
        if(this.props.fromUri){
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
                        source={{uri:item.image}}>
                        <Text style={{
                            padding:5,
                            marginBottom:WIDTH/8,
                            fontFamily:getFont('regular'),
                            fontSize:14,
                            color:"#fff",
                            textAlign:'center'
                        }}>
                            {item.title}
                        </Text>
                    </ImageBackground>
                </View>
            )
        }else {
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
                        </Text>
                    </ImageBackground>
                </View>
            )
        }

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
                dotsLength={this.props.data.length}
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
    onSnapToItem(index) {
        this.setState({
            activeSlide: index
        })
    }
    onPressSettings(){
        switch (this.props.stack) {
            case "eventStack":
                Navigation.push('eventStack',
                    {
                        component: {
                        id:'settings',
                         name: 'Settings',
                         passProps :{
                             language:"fa"
                             },
                            options: {
                                layout:{
                                    direction:['portrait','landscape']
                                },
                                bottomTabs: { visible: false, drawBehind: true, animate: true }
                            },
                        },
                    },
                )
                break
            case "specialStack":
                Navigation.push('specialStack',
                    {
                        component: {
                            id:'settings',
                            name: 'Settings',
                            passProps :{
                                language:"fa"
                            },
                            options: {
                                layout:{
                                    direction:['portrait','landscape']
                                },
                                bottomTabs: { visible: false, drawBehind: true, animate: true }
                            },
                        },
                    },
                )
                break
            case "sectionStack":
                Navigation.push('sectionStack',
                    {
                        component: {
                            id:'settings',
                            name: 'Settings',
                            passProps :{
                                language:"fa"
                            },
                            options: {
                                layout:{
                                    direction:['portrait','landscape']
                                },
                                bottomTabs: { visible: false, drawBehind: true, animate: true }
                            },
                        },
                    },
                )
        }
    }
    render(){
        return(
            <View style={{
                flex:1,
            }}>
                <Carousel
                    containerCustomStyle={{flex:1}}
                    ref={(c) => { this._carousel = c; }}
                    data={this.props.data}
                    onViewableItemsChanged={this.viewableSlide}
                    viewabilityConfig={this.viewabilityConfig}
                    renderItem={this.sliderRender}
                    sliderWidth={WIDTH}
                    itemWidth={WIDTH}
                />
                { this.pagination }
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
                        {/*<TouchableOpacity style={{flex:1}}>*/}
                            {/*<Share width={25} height={25} />*/}
                        {/*</TouchableOpacity>*/}
                    </View>
                    <View style={{
                        flexDirection:'row',
                        marginTop:10
                        ,marginRight:20}} >
                        {/*<TouchableOpacity >*/}
                            {/*<Profile style={{marginTop:5,marginRight:15}} width={25} height={25} />*/}
                        {/*</TouchableOpacity>*/}
                        <TouchableOpacity onPress={this.onPressSettings}>
                            <Settings style={{marginTop:5,marginLeft:5}} width={30} height={30} />
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