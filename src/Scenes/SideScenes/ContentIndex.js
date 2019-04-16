import React,{Component} from "react"
import {FlatList, TextInput, TouchableOpacity, View,Image,Text} from "react-native"
import {getFont, HEIGHT, WIDTH} from "../../Data";
import Search from "../../../assets/img/search.svg";
import {getAlignment, getText} from "../../Locale";
import Back from "../../../assets/img/back.svg";
import HorizontalLisItem from "../../Components/HorizontalListItem";
import dummyContentImage  from "../../../assets/img/content-item.jpg"
import ContentGridItem from "../../Components/ContentGridItem";
const gridDummyData = [
    {
        subject:"بررسی فیلم",
        teacher:"مسعود موسوی",
        image: dummyContentImage
    },{
        subject:"بررسی فیلم",
        teacher:"مسعود موسوی",
        image: dummyContentImage
    },{
        subject:"بررسی فیلم",
        teacher:"مسعود موسوی",
        image: dummyContentImage
    },{
        subject:"بررسی فیلم",
        teacher:"مسعود موسوی",
        image: dummyContentImage
    },{
        subject:"بررسی فیلم",
        teacher:"مسعود موسوی",
        image: dummyContentImage
    },{
        subject:"بررسی فیلم",
        teacher:"مسعود موسوی",
        image: dummyContentImage
    }
]
export default class ContentIndex extends Component{

    constructor(props){
        super(props)
    }
    onPressItem = ()=>{

    }
    _keyExtractor = (item, index) => index.toString();

    renderItem({item}){
        let hidden = false;
        if(item.empty){
            hidden =true;
        }
        return(
            <ContentGridItem hidden={hidden}
                             onPressSection={this.onPressItem}
                             image={item.image}
                             subject={item.subject}
                             teacher={item.teacher}/>
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
    render() {
        return (
            <FlatList
                numColumns={2}
                ListHeaderComponent={this.renderHeader}
                data={this.formatRow(gridDummyData,3)}
                contentContainerStyle={{alignItems:'center'}}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderItem}
                showsVerticalScrollIndicator={true}
                stickyHeaderIndices={[0]}
                scrollEnabled={true}
            />
        );
    }
}