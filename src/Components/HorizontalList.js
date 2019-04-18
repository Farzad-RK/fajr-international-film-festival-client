import React,{Component} from 'react'
import {FlatList} from 'react-native'
import HorizontalLisItem from "./HorizontalListItem";
import {WIDTH} from "../Data";
import {Navigation} from "react-native-navigation";

export default class HorizontalList extends Component{
    constructor(props){
        super(props)
        this.renderItem = this.renderItem.bind(this)
        this.onPressItem = this.onPressItem.bind(this)
    }
    onPressItem = (itemData) => {
        Navigation.push('specialStack',
            {
                component: {
                    id:'contentDetailView',
                    name: 'ContentDetailView',
                    options: {
                        layout:{
                            direction:['portrait','landscape']
                        }
                    },
                    passProps:{
                        data:itemData
                    }
                },
            },
        )
    }
    _keyExtractor = (item, index) => index.toString();
    renderItem({item}){
        return(
            <HorizontalLisItem width={WIDTH/3} language={this.props.language} height={'95%'} onPressSpecial={this.onPressItem} data={item}/>
        )
    }
    render(){
        console.log(this.props.data)
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