import React,{Component} from 'react'
import {View, Picker, Text, FlatList, TouchableOpacity, AsyncStorage} from 'react-native'
import {getTypo, HEIGHT, WIDTH} from "../Data";
import {Button} from 'native-base'
import {getTranslation} from "../Locale";
import HorizontalLisItem from "./HorizontalListItem";
import {Navigation} from "react-native-navigation";
import {goToHome} from "../Navigation";
const listData = [
    {
        name:"فارسی",
        id:"fa"
    },{
        name:"English",
        id:"en"
    }
]
export default class LanguageOverlay extends Component {

    constructor(props){
        super(props)
        const currentLanguage = this.props.language;
        this.state= {
            selectedLanguage:currentLanguage
        }
        this.renderItem = this.renderItem.bind(this)
        this.onSelectLang = this.onSelectLang.bind(this)
    }
    componentDidMount(){

    }
    onPressLang(item){
        this.setState({
            selectedLanguage:item.id
        })
    }
    onSelectLang = async () =>{
        await AsyncStorage.setItem("selectedLocale",this.state.selectedLanguage)
        await this.props.changeLanguage(this.state.selectedLanguage)
        Navigation.dismissOverlay("LanguageOverlay");
    }
    _keyExtractor = (item, index) => index.toString();
    renderItem({item}){
        if(item.id===this.state.selectedLanguage){
            return(
                <TouchableOpacity
                    onPress={()=>this.onPressLang(item)}
                    style={{
                    width:WIDTH/1.5,
                    height:HEIGHT/12,
                    // marginTop:WIDTH/100,
                    justifyContent:'center'
                }}>
                    <Text style={{
                        fontSize:(HEIGHT/100)*3,
                        fontFamily:getTypo("fa"),
                        color:'#ca1814',
                        textAlignVertical: 'center',
                        textAlign: 'center'
                    }}>
                        {item.name}
                    </Text>

                </TouchableOpacity>
            ) }else {
                return(
                    <TouchableOpacity
                        onPress={()=>this.onPressLang(item)}
                        style={{
                        width:WIDTH/1.5,
                        height:HEIGHT/12,
                        // marginTop:WIDTH/100,
                        justifyContent:'center'
                    }}>
                        <Text style={{
                            fontSize:(HEIGHT/100)*3,
                            fontFamily:getTypo("fa"),
                            textAlignVertical: 'center',
                            color:'#808080',
                            textAlign: 'center'
                        }}>
                            {item.name}
                        </Text>

                    </TouchableOpacity>)
            }
        }

    render(){
        return(

            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                marginTop:20,
                backgroundColor:'rgba(0,0,0,0.5)'
            }}>
                <View style={{
                    width:WIDTH/1.5,
                    flexDirection:'column',
                    borderRadius:10,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#dedede',
                    height:HEIGHT/3
                }}>

                <FlatList
                    data={listData}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem}
                    extraData={this.state}
                    showsVerticalScrollIndicator={false}
                />
                    <View style={{
                        flex:1,
                        alignItems:'center',
                        width:'100%',
                        marginBottom:20,
                        borderRadius:10,
                    }}>
                        <Button
                            onPress={this.onSelectLang}
                            style={{
                            width:'85%',
                            alignSelf:'center',
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:'#ca1814',
                        }} >
                            <Text style={{
                                color:'#fff',

                                fontFamily:getTypo(this.props.language),
                                textAlign:'center'
                            }}>
                                {getTranslation("select",this.props.language)}
                            </Text>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}