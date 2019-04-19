import React,{Component} from "react"
import {View,TextInput,FlatList,TouchableOpacity} from "react-native"
import dummyAvatar from "../../../assets/img/dummy-avatar.jpg";
import {getFont, HEIGHT, WIDTH} from "../../Data";
import Back from "../../../assets/img/back.svg"
import Search from "../../../assets/img/search.svg"

import HorizontalLisItem from "../../Components/HorizontalListItem";
import {getText} from "../../Locale";

export default class MoreSpecial extends Component {

    constructor(props){
        super(props)
    }

    _keyExtractor = (item, index) => index.toString();

    renderItem({item}){
        let hidden = false;
        if(item.empty){
            hidden =true;
        }
        return(
            <HorizontalLisItem hidden={hidden} width={0.25*WIDTH} height={HEIGHT/4} onPress={()=>{}} title={item.title} thumbNail={item.image}/>
        )
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
                    <TouchableOpacity style={{flex:1,padding:HEIGHT/42}}>
                        <Back style={{flex:1}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    formatRow = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
            data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
            numberOfElementsLastRow++;
        }
        return data;
    }

    render(){
        return(

           <FlatList
               numColumns={3}
               ListHeaderComponent={this.renderHeader}
               data={this.formatRow(gridDummyData,3)}
               contentContainerStyle={{alignItems:'center'}}
               keyExtractor={this._keyExtractor}
               renderItem={this.renderItem}
               showsVerticalScrollIndicator={true}
               stickyHeaderIndices={[0]}
               scrollEnabled={true}
           />

        )
    }
}