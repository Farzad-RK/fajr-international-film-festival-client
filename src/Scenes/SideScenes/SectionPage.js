import React, {Component} from 'react'
import {AsyncStorage, FlatList, ImageBackground, Text, TouchableOpacity, View} from 'react-native'
import {getTypo, HEIGHT, WIDTH} from "../../Data";
import Back from "../../../assets/img/back.svg";
import LinearGradient from 'react-native-linear-gradient'
import sectionDummy from "../../../assets/img/top-logo.png";
import {Navigation} from "react-native-navigation"
import axios from "axios";
import PeriodItem from "../../Components/PeriodItem";

import interviewPoster from "../../../assets/img/interview-poster.jpg"
import videolibraryPoster from "../../../assets/img/videolibrary-poster.jpg"
import meetingPoster from "../../../assets/img/meeting-poster.jpg"
import workshopPoster from '../../../assets/img/workshop-poster.png'
//top posters
import period34 from "../../../assets/img/period34.png"
import period35 from "../../../assets/img/period35.png"
import period36 from "../../../assets/img/period36.png"
import period37 from "../../../assets/img/period37.png"

export default class SectionPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            periods:[],
            language:'fa'
        }
        // this.onPressItem = this.onPressItem.bind(this)
        this.renderItem = this.renderItem.bind(this)
        this.fetchPeriods = this.fetchPeriods.bind(this)
        this.getLanguage()

    }
    getLanguage =async () =>{
        let language = await AsyncStorage.getItem("selectedLocale")
        this.setState({
            language:language
        })
    }
    componentDidMount(){
        this.fetchPeriods()
    }

    getPeriodImage = (title)=>{
        switch (title) {
            case "34":
                return period34;
            case "35":
                return period35
            case "36":
                return period36
            case "37":
                return period37
            default :
                return sectionDummy
        }
    }
    fetchPeriods = () =>{
        let endpoint;
        switch (this.props.sectionId) {
            case 0 :
                endpoint = "http://5.253.26.114/api/interviews/festivals-count"
                break
            case 1 :
                endpoint = "http://5.253.26.114/api/workshops/festivals-count"
                break
            case 3 :
                endpoint = "http://5.253.26.114/api/meetings/festivals-count"
                break
        }
        axios.get(endpoint
            , { "Content-Type": "application/json"
            }
        ).then(
           response =>{
                let toStore = []
                response.data.forEach(e =>{
                    let img = this.getPeriodImage(e)
                    toStore.push({
                        image:img,
                        title:e
                    })
                })
                this.setState({
                    periods:toStore
                })
            }
        ).catch( error =>{
        })
    }
    onPressBack = () =>{
        Navigation.pop('sectionPage')
    };
    onPressItem = (title) =>{
        Navigation.push('sectionStack',
            {
                component: {
                    id:'contentIndex',
                    name: 'ContentIndex',
                    options: {
                        layout:{
                            direction:['portrait']
                        },
                        bottomTabs: { visible: false, drawBehind: true, animate: true }
                    },
                    passProps:{
                       title:title,
                       sectionName:this.props.title,
                       sectionId :this.props.sectionId
                    }
                },
            },
        )
    }
    _keyExtractor = (item, index) => index.toString();
    renderItem({item}){
        return(
            <PeriodItem type={this.props.sectionId} onPressSection={this.onPressItem} language={this.state.language} data={item}/>
        )
    }
    render(){
        let image;
        switch (this.props.sectionId) {
            case 0:
                image = interviewPoster
                break
            case 1:
                image = workshopPoster
                break
            case 2 :
                image = videolibraryPoster
                break
            case 3 :
                 image = meetingPoster
        }
        return(
            <View style={{
                flex:1,
                backgroundColor:"#dedede",
            }}>
                <View style={{flex:1}}>
                    <ImageBackground
                        source={image}
                        style={{
                        flex:1,
                        justifyContent: 'space-between',
                        width:undefined,
                        height:undefined,
                        resizeMode: 'cover' }}>
                        <LinearGradient
                            // start={{x: 0.0, y: 0}}
                            // end={{x: 0.0, y:0.8}}
                            colors={['rgba(0,0,0,1 )','rgba(0,0,0,0)' ]}
                            style={{
                                // borderWidth:1,
                            width:WIDTH,
                            flexDirection:'row',
                            height:HEIGHT/12,
                            backgroundColor:'#transparent'}}>
                            <View style={{flex:0.2}}>
                                <View style={{flex:1,padding:HEIGHT/42}}>
                                </View>
                            </View>
                            <View
                                style={{
                                    flex:0.6,
                                    marginTop:10,

                                    height:'60%',paddingTop: 0,paddingBottom: 0,
                                }}>
                                {/*<Search/>*/}
                            </View>
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
                                fontFamily:getTypo("regular",this.state.language),
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
                    <View style={{flex:1}}>
                        <FlatList
                            data={this.state.periods}
                            keyExtractor={this._keyExtractor}
                            renderItem={this.renderItem}
                            numColumns={2}
                            contentContainerStyle={{alignItems:'center'}}
                            // contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>
        )
    }
}
