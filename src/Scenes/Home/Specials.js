import React,{Component} from "react"
import {View, Text, ScrollView, AsyncStorage} from "react-native"
import {Button} from "native-base"
import {WIDTH, HEIGHT, getFont, getTypo} from "../../Data";
import slide1 from '../../../assets/img/slide-image.jpg'
import dummyAvatar from '../../../assets/img/dummy-avatar.jpg'
import HorizontalList from "../../Components/HorizontalList";
import SlideShow from '../../Components/SlieShow';
import sectionDummy from "../../../assets/img/top-logo.png";
import axios from "axios"
import {getTranslation} from "../../Locale";


export default class Specials extends Component {

    constructor(props) {
        super(props);
        this.state = {
            specials:[],
            language:'fa',
        }
        this.getLanguage()
    }

    componentDidMount(){
        this.fetchSpecials()
    }
    getLanguage =async () =>{
        let language = await AsyncStorage.getItem("selectedLocale")
        await this.setState({
            language:language
        })
    }
    fetchSpecials(){
        const baseUrl = "http://5.253.26.114/api/workshops/specials";
        axios.get(baseUrl
            , { "Content-Type": "application/json"}
        ).then(
            response =>{
                this.setState({
                    specials:response.data
                })
            }
        ).catch( error =>{

        })
    }
    normalizeSlides = ()=>{
        let maxSlides = 5 ;
        let slides = []
        this.state.specials.forEach(
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
        return(
            <View style={{flex:1, backgroundColor:"#dfdfdf"}}>
                <View style={{
                    flex:1,
                    }}>
                <SlideShow fromUri={true} data={this.normalizeSlides()}/>
                </View>
                      <View style={{flex:2}}>
                         <ScrollView style={{flex:1}}>
                          <View style={{flex:1,height:HEIGHT/2.7,marginTop:25,marginBottom:5}}>
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
                                    <Text style={{ textAlign:'center' ,fontSize:(HEIGHT/100)*2, color:'#fff',
                                        fontFamily:getTypo('regular',this.state.language)}}>{getTranslation("more",this.state.language)}</Text>
                                </Button>
                                <Text style={{
                                    padding:5,
                                    fontSize:12,
                                    color:'#000',
                                    fontFamily:getTypo('bold',this.state.language)}}>
                                    {getTranslation("workshops",this.state.language)}
                                </Text>
                            </View>
                            <View style={{flex:0.8}}>
                                <HorizontalList language={this.state.language} data={this.state.specials}/>
                            </View>
                          </View>
                          {/*<View style={{flex:1,height:HEIGHT/2.7,marginTop:10,marginBottom:5}}>*/}
                              {/*<View style={{*/}
                                  {/*flex:0.2,*/}
                                  {/*flexDirection:'row',*/}
                                  {/*justifyContent:'space-between'}}>*/}
                                  {/*<Button*/}
                                      {/*small*/}
                                      {/*style={{*/}
                                          {/*justifyContent: 'center',*/}
                                          {/*width:WIDTH/4,*/}
                                          {/*borderRadius:5,*/}
                                          {/*marginTop:5,*/}
                                          {/*marginLeft:15,*/}
                                          {/*height:HEIGHT/24,*/}
                                          {/*backgroundColor:'#ca1814'}}>*/}
                                      {/*<Text style={{ textAlign:'center' ,fontSize:(HEIGHT/100)*2, color:'#fff', fontFamily:getFont('regular')}}>{"بیشتر"}</Text>*/}
                                  {/*</Button>*/}
                                  {/*<Text style={{*/}
                                      {/*padding:5,*/}
                                      {/*fontSize:12,*/}
                                      {/*color:'#000',*/}
                                      {/*fontFamily:getFont('bold')}}>*/}
                                      {/*{"تماشای کارگاه های کارگردانی"}*/}
                                  {/*</Text>*/}
                              {/*</View>*/}
                              {/*<View style={{flex:0.8}}>*/}
                                  {/*<HorizontalList data={[]}/>*/}
                              {/*</View>*/}
                          {/*</View>*/}
                         </ScrollView>
                     </View>
            </View>
        )
    }
}