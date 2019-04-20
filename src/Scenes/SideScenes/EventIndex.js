import React,{Component} from 'react'
import {AsyncStorage, FlatList,  TouchableOpacity, View} from "react-native";
import { HEIGHT, WIDTH} from "../../Data";
import Back from "../../../assets/img/back.svg";
import {Navigation} from "react-native-navigation";
import endingImage from "../../../assets/img/Ekhtetamie.png"
import openingImage from "../../../assets/img/Eftetahie.png"
import sideImage from "../../../assets/img/Ekhtetamie.png"
import ContentGridItem from "../../Components/ContentGridItem";
import Search from "../../../assets/img/search.svg";

const endingData = [

    {
        image:endingImage,
        link_dash:"https://fajr.arvanvod.com/kl9XmDdyV3/78dZp4ZOG1/h_,144_200,240_400,360_800,480_1500,720_2500,1080_2990,k.mp4.list/master.m3u8",
        title:"اختتامیه سی و پنجمین جشنواره جهانی فیلم فجر"
    }
]
const opening= [
    {   image:openingImage,
        link_dash:"https://fajr.arvanvod.com/kl9XmDdyV3/z2brb5pE4K/h_,144_200,240_400,360_800,480_1500,720_2500,1080_4500,k.mp4.list/master.m3u8",
        title: "افتتاحیه سی و هفتمین دوره جشنواره جهانی فیلم فجر"
    }
]
const side = [
    {   image:sideImage,
        title:"بازدید میهمانان خارجی از خانه سینما و شهرک غزالی",
        link_dash:"https://fajr.arvanvod.com/kl9XmDdyV3/12vMx3nG8E/h_,144_200,240_400,360_800,480_1500,720_2500,1080_4500,k.mp4.list/master.m3u8"
    }
]
export default class EventIndex extends Component{

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
        this.fetchData = this.fetchData.bind(this)
    }
    componentDidMount(){
        console.log(this.props.id)
        this.fetchData()
    }
    fetchData(){
        switch (this.props.id) {
            case 1:
                this.setState({
                    data:opening
                })
                break
            case 2:
                this.setState({
                    data:endingData
                })
                break
            case 3:
                this.setState({
                    data:side
                })
                break
        }

    }
    getLanguage =async () =>{
        let language = await AsyncStorage.getItem("selectedLocale")
        this.setState({
            language:language
        })
    }
    onPressItem = (itemData,type)=>{
        Navigation.push('eventStack',
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


    renderItem({item}){
        console.log(item)
        let hidden = false;
        if(item.empty){
            hidden =true;
        }
        return(
            <ContentGridItem sectionId={4}
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
                    <TouchableOpacity onPress={()=>Navigation.pop('eventIndex')} style={{flex:1,padding:HEIGHT/42}}>
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