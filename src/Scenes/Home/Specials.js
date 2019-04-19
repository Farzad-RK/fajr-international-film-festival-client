import React,{Component} from "react"
import {View, Text, ScrollView, AsyncStorage} from "react-native"
import {Button} from "native-base"
import {WIDTH, HEIGHT, getTypo} from "../../Data";
import HorizontalList from "../../Components/HorizontalList";
import SlideShow from '../../Components/SlieShow';

import axios from "axios"
import {getTranslation} from "../../Locale";


export default class Specials extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workshopSpecials:[],
            meetingSpecials:[],
            interviewSpecials:[],
            language:'fa',
        }
        this.getLanguage()
    }

    componentDidMount(){
        this.fetchWorkshopSpecials()
        this.fetchInterviewSpecials()
        this.fetchMeetingSpecials()
    }
    getLanguage =async () =>{
        let language = await AsyncStorage.getItem("selectedLocale")
        await this.setState({
            language:language
        })
    }
    fetchMeetingSpecials(){
        const baseUrl = "http://5.253.26.114/api/meetings/specials";
        axios.get(baseUrl
            , { "Content-Type": "application/json"}
        ).then(
            response =>{
                this.setState({
                    meetingSpecials :response.data
                })
            }
        ).catch( error =>{
            this.fetchMeetingSpecials()
        })
    }
    fetchInterviewSpecials(){
        const baseUrl = "http://5.253.26.114/api/interviews/specials";
        axios.get(baseUrl
            , { "Content-Type": "application/json"}
        ).then(
            response =>{
                this.setState({
                    interviewSpecials :response.data
                })
            }
        ).catch( error =>{
            this.fetchInterviewSpecials()
        })
    }
    fetchWorkshopSpecials(){
        const baseUrl = "http://5.253.26.114/api/workshops/specials";
        axios.get(baseUrl
            , { "Content-Type": "application/json"}
        ).then(
            response =>{
                this.setState({
                    workshopSpecials:response.data
                })
            }
        ).catch( error =>{
            this.fetchWorkshopSpecials()
        })
    }
    normalizeSlides = ()=>{
        let maxSlides = 5 ;
        let slides = []
        this.state.workshopSpecials.forEach(
            item =>{
                if(item.pictures!=undefined){
                    if(item.pictures.length>0){
                        let subject;
                        switch (this.state.language) {
                            case "fa":
                                subject=item.subject_fa
                                break;
                            case "en":
                                subject=item.subject_en
                                break
                        }
                        if(slides.length<=maxSlides){
                            slides.push({
                                image:item.pictures[0].path,
                                title:subject
                            })
                        }
                    }
                }
            }
        )
        return slides
    }
    render(){
        let rowFlexDir ;
        switch (this.state.language) {
            case "fa":
                rowFlexDir = 'row'
                break
            case "en":
                rowFlexDir = 'row-reverse'
        }
        return(
            <View style={{flex:1, backgroundColor:"#dfdfdf"}}>
                <View style={{
                    flex:1,
                    }}>
                <SlideShow stack={"specialStack"} fromUri={true} data={this.normalizeSlides()}/>
                </View>
                      <View style={{flex:2}}>
                         <ScrollView style={{flex:1}}>
                          <View style={{flex:1,height:HEIGHT/2.7,marginTop:25,marginBottom:5}}>
                            <View style={{
                                flex:0.2,
                                flexDirection:rowFlexDir,
                                justifyContent:'space-between'}}>
                                <Button
                                    style={{
                                    justifyContent: 'center',
                                    opacity:0,
                                    width:WIDTH/4,
                                    borderRadius:5,
                                    margin:5,
                                    height:HEIGHT/24,
                                    backgroundColor:'#ca1814'}}>
                                    <Text style={{ textAlign:'center' ,fontSize:(HEIGHT/100)*2, color:'#fff',
                                        fontFamily:getTypo('regular',this.state.language)}}>{getTranslation("more",this.state.language)}</Text>
                                </Button>
                                <Text style={{
                                    padding:5,
                                    fontSize:(HEIGHT/100)*3,
                                    textAlign:'center',
                                    color:'#000',
                                    fontFamily:getTypo('regular',this.state.language)}}>
                                    {getTranslation("workshops",this.state.language)}
                                </Text>
                            </View>
                            <View style={{flex:0.8}}>
                                <HorizontalList type={1} language={this.state.language} data={this.state.workshopSpecials}/>
                            </View>
                          </View>
                          <View style={{flex:1,height:HEIGHT/2.7,marginTop:10,marginBottom:5}}>
                              <View style={{
                                  flex:0.2,
                                  flexDirection:rowFlexDir,
                                  justifyContent:'space-between'}}>
                                  <Button
                                      small
                                      style={{
                                          justifyContent: 'center',
                                          width:WIDTH/4,
                                          opacity:0,
                                          borderRadius:5,
                                          marginTop:5,
                                          marginLeft:15,
                                          height:HEIGHT/24,
                                          backgroundColor:'#ca1814'}}>
                                      <Text style={{ textAlign:'center' ,fontSize:(HEIGHT/100)*2, color:'#fff', fontFamily:getTypo('regular',this.state.language)}}>{"بیشتر"}</Text>
                                  </Button>
                                  <Text style={{
                                      padding:5,
                                      fontSize:(HEIGHT/100)*3,
                                      textAlign:'center',
                                      color:'#000',
                                      fontFamily:getTypo('regular',this.state.language)}}>
                                      {getTranslation("professionalInterviews",this.state.language)}
                                  </Text>
                              </View>
                              <View style={{flex:0.8}}>
                                  <HorizontalList language={this.state.language} type={0} data={this.state.interviewSpecials}/>
                              </View>
                          </View>
                             <View style={{flex:1,height:HEIGHT/2.7,marginTop:10,marginBottom:5}}>
                                 <View style={{
                                     flex:0.2,
                                     flexDirection:rowFlexDir,
                                     justifyContent:'space-between'}}>
                                     <Button
                                         small
                                         style={{
                                             justifyContent: 'center',
                                             width:WIDTH/4,
                                             opacity:0,
                                             borderRadius:5,
                                             marginTop:5,
                                             marginLeft:15,
                                             height:HEIGHT/24,
                                             backgroundColor:'#ca1814'}}>
                                         <Text style={{ textAlign:'center' ,fontSize:(HEIGHT/100)*2, color:'#fff', fontFamily:getTypo('regular',this.state.language)}}>{"بیشتر"}</Text>
                                     </Button>
                                     <Text style={{
                                         padding:5,
                                         fontSize:(HEIGHT/100)*3,
                                         textAlign:'center',
                                         color:'#000',
                                         fontFamily:getTypo('regular',this.state.language)}}>
                                         {getTranslation("professionalMeeting",this.state.language)}
                                     </Text>
                                 </View>
                                 <View style={{flex:0.8}}>
                                     <HorizontalList language={this.state.language} type={3} data={this.state.meetingSpecials}/>
                                 </View>
                             </View>
                         </ScrollView>
                     </View>
            </View>
        )
    }
}