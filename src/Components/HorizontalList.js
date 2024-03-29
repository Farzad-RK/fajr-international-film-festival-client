import React,{Component} from 'react'
import {FlatList} from 'react-native'
import HorizontalLisItem from "./HorizontalListItem";
import {WIDTH} from "../Data";
import {Navigation} from "react-native-navigation";

export default class HorizontalList extends Component{
    constructor(props){
        super(props)
        this.renderItem = this.renderItem.bind(this)

    }
    _keyExtractor = (item, index) => index.toString();
    renderItem({item}){
        return(
            <HorizontalLisItem type={this.props.type} width={WIDTH/3} language={this.props.language} height={'95%'} data={item}/>
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