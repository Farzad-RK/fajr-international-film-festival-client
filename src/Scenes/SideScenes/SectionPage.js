import React,{Component} from 'react'
import {View, Text,ImageBackground, TouchableOpacity, TextInput} from 'react-native'
import workshopPoster from '../../../assets/img/workshop-poster.jpg'
import {getFont, HEIGHT, WIDTH} from "../../Data";
import Search from "../../../assets/img/search.svg";
import {getText} from "../../Locale";
import Back from "../../../assets/img/back.svg";
import LinearGradient from 'react-native-linear-gradient'
import SectionGrid from "../../Components/SectionGrid";
import sectionDummy from "../../../assets/img/section-dummy.jpg";
import {Navigation} from "react-native-navigation"
import {goToHome} from "../../Navigation";
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
export default class SectionPage extends Component {

    constructor(props){
        super(props)
    }
    onPressBack = () =>{
      goToHome(3)
    };
    render(){
        return(
            <View style={{
                flex:1
            }}>
                <View style={{flex:1}}>
                    <ImageBackground
                        source={workshopPoster}
                        style={{
                        flex:1,
                        justifyContent: 'space-between',
                        width:undefined,
                        height:undefined,
                        resizeMode: 'cover' }}>
                        <LinearGradient
                            // start={{x: 0.0, y: 0}}
                            // end={{x: 0.0, y:0.8}}
                            colors={['rgba(0,0,0,1 )','rgba(0,0,0,0.2)' ]}
                            style={{
                                // borderWidth:1,
                            width:WIDTH,
                            flexDirection:'row',
                            height:HEIGHT/12,
                            backgroundColor:'#transparent'}}>
                            <View style={{flex:0.2}}>
                                <TouchableOpacity style={{flex:1,padding:HEIGHT/42}}>
                                    <Search style={{flex:1}}/>
                                </TouchableOpacity>
                            </View>
                            <TextInput
                                placeholderTextColor={"#dedede"}
                                style={{
                                    flex:0.6,
                                    marginTop:10,
                                    textAlign: 'center',
                                    borderBottomWidth:0.5,
                                    borderBottomColor:"#fff",
                                    height:'60%',paddingTop: 0,paddingBottom: 0,
                                    fontFamily:getFont('regular'),
                                    color:'#fff',
                                }} placeholder={getText('searchPlaceHolder')}>
                                {/*<Search/>*/}
                            </TextInput>
                            <View style={{flex:0.2}}>
                                <TouchableOpacity onPress={this.onPressBack} style={{flex:1,padding:HEIGHT/42}}>
                                    <Back  style={{flex:1}}/>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                        <LinearGradient   start={{x: 0.0, y: 0}}    end={{x: 0.0, y:0.8}} locations={[0, 1]}
                                          colors={['transparent','rgba(0,0,0,1)' ]}
                                          style={{width: WIDTH, justifyContent:'space-around', height:HEIGHT/12,zIndex:2}}>

                            <View style={{flex:0.1}}/>
                            <Text style={{
                                flex:0.9,
                                fontFamily:getFont("regular"),
                                fontSize:(HEIGHT/100)*4,
                                color:'#fff',
                                textAlign:'center',
                            }}>
                                {this.props.title}
                            </Text>
                        </LinearGradient>
                    </ImageBackground>
                </View>
                <View style={{flex:2,borderWidth:1}}>
                      <SectionGrid data={gridData}/>
                </View>
            </View>
        )
    }
}
