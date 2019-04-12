import React,{Component} from "react"
import {View,Text,FlatList,Image} from "react-native"
import dummyAvatar from "../../../assets/img/dummy-avatar.jpg";
import {HEIGHT, WIDTH} from "../../Data";
import HorizontalLisItem from "../../Components/HorizontalListItem";

const gridDummyData = [
    {
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    },{
        image:dummyAvatar,
        title:"الیور استون"
    }
    ,
    {
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    },{
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    },{
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    },{
        image:dummyAvatar,
        title:"الیور استون"
    },
    {
        image:dummyAvatar,
        title:"الیور استون"
    },
]
export default class MoreSpecial extends Component {

    constructor(props){
        super(props)
    }

    _keyExtractor = (item, index) => index.toString();

    renderItem({item}){
        return(
            <HorizontalLisItem width={0.25*WIDTH} height={HEIGHT/4} onPress={()=>{}} title={item.title} thumbNail={item.image}/>
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
               data={this.formatRow(gridDummyData,3)}
               contentContainerStyle={{alignItems:'center'}}
               keyExtractor={this._keyExtractor}
               renderItem={this.renderItem}
               showsVerticalScrollIndicator={true}
               scrollEnabled={true}
           />

        )
    }
}