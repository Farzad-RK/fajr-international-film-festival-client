import React,{Component} from "react"
import {View, Text, Image, TouchableOpacity, ImageBackground,ScrollView} from "react-native"
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
    }
    render(){
        return(
            <View style={{flex:1, backgroundColor:"#dfdfdf"}}>
                <View style={{
                    flex:1,
                    }}>
                <SlieShow data={sliderDummyData}/>
                </View>
                      <View style={{flex:2}}>
                         <ScrollView style={{flex:1}}>
                          <View style={{flex:1,height:HEIGHT/2.7,marginTop:10,marginBottom:5}}>
                            <View style={{
                                flex:0.2,
                                flexDirection:'row',
                                justifyContent:'space-between'}}>
                                <Button
                                    style={{
                                    justifyContent: 'center',
                                    width:WIDTH/4,
                                    borderRadius:5,
                                    marginTop:5,
                                    marginLeft:15,
                                    height:HEIGHT/24,
                                    backgroundColor:'#ca1814'}}>
                                    <Text style={{ textAlign:'center' ,fontSize:(HEIGHT/100)*2, color:'#fff', fontFamily:getFont('regular')}}>{"بیشتر"}</Text>
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
                          <View style={{flex:1,height:HEIGHT/2.7,marginTop:10,marginBottom:5}}>
                              <View style={{
                                  flex:0.2,
                                  flexDirection:'row',
                                  justifyContent:'space-between'}}>
                                  <Button
                                      small
                                      style={{
                                          justifyContent: 'center',
                                          width:WIDTH/4,
                                          borderRadius:5,
                                          marginTop:5,
                                          marginLeft:15,
                                          height:HEIGHT/24,
                                          backgroundColor:'#ca1814'}}>
                                      <Text style={{ textAlign:'center' ,fontSize:(HEIGHT/100)*2, color:'#fff', fontFamily:getFont('regular')}}>{"بیشتر"}</Text>
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
                         </ScrollView>
                     </View>
            </View>
        )
    }
}