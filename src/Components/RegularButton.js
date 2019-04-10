import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,Text} from 'react-native'
import {Button} from 'native-base'
import {BoxShadow} from 'react-native-shadow'
import {getFont} from '../Data'
export default class RegularButton extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
              <BoxShadow setting={shadowOpt}>
                 <Button  style={[styles.button,this.props.style]} onPress={this.props.onPress}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </Button>
              </BoxShadow>
        )
    }
}
const shadowOpt = {

    width:150,
    height:50,
    color:"#000",
    border:10,
    radius:25,
    opacity:0.1,
}
const styles = StyleSheet.create({
    button :{
        width:150,
        height:50,
        justifyContent: 'center',
        backgroundColor:'#d0d0d0',
        borderRadius:40
    },
    title:{
        color:'#fffffb',
        fontFamily:getFont('regular'),
        fontSize:14,
        textAlign:'center'
    }
})