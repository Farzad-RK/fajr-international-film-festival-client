import React,{Component} from 'react'
import {FlatList} from 'react-native'
import HorizontalLisItem from "./HorizontalListItem";
import {WIDTH} from "../Data";

export default class HorizontalList extends Component{
    constructor(props){
        super(props)
    }
    _keyExtractor = (item, index) => index.toString();
    renderItem({item}){
        return(
            <HorizontalLisItem width={0.25*WIDTH} height={'95%'} onPress={()=>{}} title={item.title} thumbNail={item.image}/>
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