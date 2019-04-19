import React,{Component} from "react"
import {FlatList, TextInput, TouchableOpacity, View, Image, Text, AsyncStorage} from "react-native"
import { getTypo, HEIGHT, WIDTH} from "../../Data";
import Search from "../../../assets/img/search.svg";
import { getTranslation} from "../../Locale";
import Back from "../../../assets/img/back.svg";
import ContentGridItem from "../../Components/ContentGridItem";
import axios from "axios";
import {Navigation} from 'react-native-navigation'
import debounce from 'lodash/debounce'


export default class ContentIndex extends Component{

    constructor(props){
        super(props)
        this.state = {
            data : [],
            language:'fa',
        }
        this.backupData = []
        this.formatRow = this.formatRow.bind(this)
        this.onPressItem = this.onPressItem.bind(this)
        this.renderItem = this.renderItem.bind(this)
        this.renderHeader = this.renderHeader.bind(this)
        this.onChangeText = debounce(this.onChangeText, 750);
        this.getLanguage()
    }
    getLanguage =async () =>{
        let language = await AsyncStorage.getItem("selectedLocale")
        this.setState({
            language:language
        })
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
                this.backupData = response.data
                this.setState({
                    data:response.data,
                })
            }
        ).catch( error =>{
            this.fetchContent()
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

    renderItem({item}){
        let hidden = false;
        if(item.empty){
            hidden =true;
        }
        return(
            <ContentGridItem sectionId={this.props.sectionId}
                             hidden={hidden}
                             onPressContent={this.onPressItem}
                             language={this.state.language}
                             data={item}
                           />
        )
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
    onPressBack  = () =>{
        Navigation.pop('contentIndex')
    }
    onChangeText(text){
        if(text!==''){
            let endpoint ="http://5.253.26.114/api/search?search="
            endpoint = endpoint.concat(text)
            axios.get(endpoint
                , { "Content-Type": "application/json"}
            ).then(
                response =>{
                    switch (this.props.sectionId) {
                        case 0:
                            this.setState({
                                data:response.data.interviews
                            })
                            break;
                        case 1:
                            this.setState({
                                data:response.data.workshops
                            })
                            break;
                        case 3:
                            this.setState({
                                data:response.data.workshops
                            })
                            break
                    }
                }
            ).catch( error =>{

            })
        }else {
            this.setState({
                data:this.backupData
            })
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
                    <View style={{flex:1,padding:HEIGHT/42}}>
                        <Search style={{flex:1}}/>
                    </View>
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
                        fontFamily:getTypo('regular',this.state.language),
                        color:'#fff',
                    }} onChangeText={this.onChangeText.bind(this)} placeholder={getTranslation('searchPlaceHolder',this.state.language)}>
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