import React,{Component} from 'react'
import {AsyncStorage, FlatList, Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {getTypo, HEIGHT, WIDTH} from "../../Data";
import Back from "../../../assets/img/back.svg";
import {Navigation} from "react-native-navigation";
import videolibraryPoster from "../../../assets/img/video-library-poster.png";
import PeriodItem from "../../Components/PeriodItem";
import {getAlignment, getTranslation} from "../../Locale";
import UniversalDummy from "../../../assets/img/UniversalDummy.png";
import axios from "axios";
import ContentGridItem from "../../Components/ContentGridItem";
import Search from "../../../assets/img/search.svg";

export default class VideoLibrary extends Component{

    constructor(props) {
        super(props);
        this.getLanguage()
        this.state={
            language:'fa',
            data:[]
        }
        this.renderItem = this.renderItem.bind(this)
        this.onPressItem = this.onPressItem.bind(this)
        this.renderHeader =this.renderHeader.bind(this)
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData =()=>{
        const url = "http://5.253.26.114/api/video-library"
        axios.get(url
            , { "Content-Type": "application/json"
            }
        ).then(
            response =>{

                this.setState({
                    data:response.data
                })
            }
        ).catch( error =>{
            this.fetchData()
        })
    }
    getLanguage =async () =>{
        let language = await AsyncStorage.getItem("selectedLocale")
        this.setState({
            language:language
        })
    }
    onPressItem = (itemData,type)=>{
        Navigation.push('sectionStack',
            {
                component: {
                    id:'contentDetailView',
                    name: 'ContentDetailView',
                    options: {
                        layout:{
                            direction:['portrait','landscape']
                        },
                        bottomTabs: { visible: false, drawBehind: true, animate: true }
                    },
                    passProps:{
                        language:this.state.language,
                        data:itemData,
                        type:type
                    }
                },
            },
        )
    }
    _keyExtractor = (item, index) => index.toString();

    handleImage=(item)=>{
        if(item.thumbnail_url!==undefined){
            if(item.thumbnail_url!=null){
                return(
                    <Image source={{uri:item.thumbnail_url}}
                           resizeMode="cover"
                           style={{
                               flex:0.7,
                               borderRadius:10,
                               width:undefined,
                               height:undefined}}
                    />
                )
            }else {
                return(
                    <Image source={UniversalDummy}
                           resizeMode="cover"
                           style={{
                               flex:0.7,
                               borderRadius:10,
                               width:undefined,
                               height:undefined}}
                    />
                )
            }
        }else {
            return(
                <Image source={UniversalDummy}
                       resizeMode="cover"
                       style={{
                           flex:0.7,
                           borderRadius:10,
                           width:undefined,
                           height:undefined}}
                />
            )
        }
    }
    renderItem({item}){

        let hidden = false;
        if(item.empty){
            hidden =true;
        }
        return(
            <ContentGridItem sectionId={3}
                             hidden={hidden}
                             onPressContent={this.onPressItem}
                             language={this.state.language}
                             data={item}
            />
        )
    }
    onPressBack =()=>{
        Navigation.pop('videoLibrary')
    }
    formatRow = (data, numColumns) => {
        if(data.length>0){
            const numberOfFullRows = Math.floor(data.length / numColumns);
            let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
            while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
                data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
                numberOfElementsLastRow++;
            }
            return data;
        } else {
            return [];
        }
    }
    renderHeader(){
        return(
            <View style={{
                width:WIDTH,
                flexDirection:'row',
                height:HEIGHT/12,
                backgroundColor:'#c71815'}}>
                <View style={{flex:0.2}}>
                    <View style={{flex:1,padding:HEIGHT/42,opacity:0}}>
                        <Search style={{flex:1}}/>
                    </View>
                </View>
               <View style={{
                   flex:0.6
               }}>
               </View>
                <View style={{flex:0.2}}>
                    <TouchableOpacity onPress={()=>Navigation.pop('videoLibrary')} style={{flex:1,padding:HEIGHT/42}}>
                        <Back style={{flex:1}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
        render() {
            return (
                <FlatList
                    numColumns={2}
                    ListHeaderComponent={this.renderHeader}
                    data={this.formatRow(this.state.data,2)}
                    contentContainerStyle={{alignItems:'center',backgroundColor: '#dedede'}}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem}
                    showsVerticalScrollIndicator={true}
                    stickyHeaderIndices={[0]}
                    scrollEnabled={true}
                />
            );
        }

}