import React,{Component} from 'react'
import {FlatList} from 'react-native'
import HorizontalLisItem from "./HorizontalListItem";

export default class HorizontalList extends Component{
    constructor(props){
        super(props)
    }
    _keyExtractor = (item, index) => index.toString();
    renderItem({item}){
        return(
            <HorizontalLisItem onPress={()=>{}} title={item.title} thumbNail={item.image}/>
        )
    }
    render(){
        return(
            <FlatList
                horizontal={true}
                data={this.props.data}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderItem}
                showsHorizontalScrollIndicator={false}
            />
        )
    }
}