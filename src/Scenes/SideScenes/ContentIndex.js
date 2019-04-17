import React,{Component} from "react"
import {FlatList, TextInput, TouchableOpacity, View,Image,Text} from "react-native"
import {getFont, HEIGHT, WIDTH} from "../../Data";
import Search from "../../../assets/img/search.svg";
import {getAlignment, getText} from "../../Locale";
import Back from "../../../assets/img/back.svg";
import HorizontalLisItem from "../../Components/HorizontalListItem";
import dummyContentImage  from "../../../assets/img/content-item.jpg"
import ContentGridItem from "../../Components/ContentGridItem";
import axios from "axios";
import {Navigation} from 'react-native-navigation'
import sectionDummy from "../../../assets/img/section-dummy.jpg";
// const gridDummyData = [
//     {
//         subject:"بررسی فیلم",
//         teacher:"مسعود موسوی",
//         image: dummyContentImage
//     },{
//         subject:"بررسی فیلم",
//         teacher:"مسعود موسوی",
//         image: dummyContentImage
//     },{
//         subject:"بررسی فیلم",
//         teacher:"مسعود موسوی",
//         image: dummyContentImage
//     },{
//         subject:"بررسی فیلم",
//         teacher:"مسعود موسوی",
//         image: dummyContentImage
//     },{
//         subject:"بررسی فیلم",
//         teacher:"مسعود موسوی",
//         image: dummyContentImage
//     },{
//         subject:"بررسی فیلم",
//         teacher:"مسعود موسوی",
//         image: dummyContentImage
//     }
// ]
export default class ContentIndex extends Component{

    constructor(props){
        super(props)
        this.state = {
            data : []
        }
        this.formatRow = this.formatRow.bind(this)
        this.onPressItem = this.onPressItem.bind(this)
        this.renderItem = this.renderItem.bind(this)
    }

    componentDidMount(){
        this.fetchContent()
    }
    fetchContent = () =>{
        const baseUrl = "http://5.253.26.114";
        let endpoint;
        switch (this.props.sectionId) {
            case 0 :
                endpoint = "/api/interviews/festival/"+this.props.title
                break
            case 1 :
                endpoint = "/api/workshops/festival/"+this.props.title
                break
            case 3 :
                endpoint = "/api/meetings/festival/‬‬"+this.props.title
                break
        }
        axios.get(baseUrl+endpoint
            , { "Content-Type": "application/json"}
        ).then(
            response =>{
                console.log(response.data)
                this.setState({
                    data:response.data
                })
            }
        ).catch( error =>{
            console.log(error)
        })
    }
    onPressItem = (itemData)=>{
        Navigation.push('sectionStack',
            {
                component: {
                    id:'contentDetailView',
                    name: 'ContentDetailView',
                    options: {},
                    passProps:{
                        data:itemData
                    }
                },
            },
        )
    }
    _keyExtractor = (item, index) => index.toString();

    renderItem({item}){
        let hidden = false;
        if(item.empty){
            hidden =true;
        }
        return(
            <ContentGridItem hidden={hidden}
                             onPressContent={this.onPressItem}
                             data={item}
                           />
        )
    }
    formatRow = (numColumns) => {
        const numberOfFullRows = Math.floor(this.state.data.length / numColumns);
        let numberOfElementsLastRow = this.state.data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
            this.state.data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
            numberOfElementsLastRow++;
        }
        return this.state.data;
    }
    onPressBack  = () =>{
        Navigation.pop('contentIndex')
    }
    renderHeader(){
        return(
            <View style={{
                width:WIDTH,
                flexDirection:'row',
                height:HEIGHT/12,
                backgroundColor:'#c71815'}}>
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
                    <TouchableOpacity onPress={()=>Navigation.pop('contentIndex')} style={{flex:1,padding:HEIGHT/42}}>
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
                data={this.formatRow(2)}
                contentContainerStyle={{alignItems:'center',backgroundColor:"#dfdfdf"}}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderItem}
                showsVerticalScrollIndicator={true}
                stickyHeaderIndices={[0]}
                scrollEnabled={true}
            />
        );
    }
}