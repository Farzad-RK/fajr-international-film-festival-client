import React,{Component} from "react"
import {FlatList, ImageBackground, Text, TouchableOpacity, View} from "react-native"
import {getFont, getTypo, HEIGHT, WIDTH} from "../Data";
import LinearGradient from "react-native-linear-gradient";

export  default  class  SectionGridItem extends Component{
    constructor(props){
        super(props)
    }
    _onPress = () =>{
        this.props.onPressSection(this.props.data.id)
    }
    render(){
        return(
            <TouchableOpacity
                onPress={this._onPress}
                style={{
                    elevation:5,
                    borderRadius:15,
                    height:HEIGHT/4.5,
                    width:HEIGHT/4.3,
                    margin:WIDTH/25
                }}>
                <ImageBackground
                    imageStyle={{
                        borderRadius: 15,
                        flex:1,
                        resizeMode: 'cover' }}
                    source={this.props.data.image}
                    style ={{
                        flex:1,

                        borderRadius:10,
                        justifyContent:'center',
                        height: undefined,
                        width: undefined}}>
                    <LinearGradient  start={{x: 0.0, y: 0}} end={{x: 0.0, y:2}} locations={[0, .5]}
                                     colors={['transparent','rgba(0,0,0,.8)' ]}
                                     style={{flex:1,borderRadius:10}}>
                        <Text style={{
                            textAlign:'center',
                            marginTop:100,
                            color:'#fff',
                            fontSize:(HEIGHT/100)*2,
                            fontFamily:getTypo('regular',this.props.language)}}>
                            {this.props.data.title}
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}