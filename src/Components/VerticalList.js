import React,{Component} from "react"
import {FlatList} from "react-native";
import HorizontalLisItem from "./HorizontalListItem";
import VerticalListItem from "./VerticalListItem";

export default class VerticalList extends Component {

    constructor(props){
        super(props)
    }
    _keyExtractor = (item, index) => index.toString();

    renderItem({item}){
        return(
            <VerticalListItem id={item.id} title={item.title} image={item.image}/>
        )
    }
    render(){
        return(
            <FlatList
                style={this.props.style}
                data={this.props.data}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderItem}
                // contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                showsVerticalScrollIndicator={false}
            />
        )
    }
}