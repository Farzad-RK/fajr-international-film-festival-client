import React,{Component} from "react"
import {View,FlatList} from "react-native"
import VerticalListItem from "./VerticalListItem";
import SectionGridItem from "./SectionGridItem";

export  default  class  SectionGrid extends Component{
    constructor(props){
        super(props)
        this.onPressItem = this.onPressItem.bind(this)
        this.renderItem =   this.renderItem.bind(this)
    }

    onPressItem(id){
        console.log(id)
    }
    _keyExtractor = (item, index) => index.toString();
    renderItem({item}){
        return(
            <SectionGridItem onPressSection={this.onPressItem} data={item}/>
        )
    }
    render(){
        return(
            <View style={{flex:1}}>
                <FlatList
                    style={this.props.style}
                    data={this.props.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem}
                    numColumns={2}
                    contentContainerStyle={{alignItems:'center'}}
                    // contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}