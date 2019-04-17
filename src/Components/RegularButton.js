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
        if(this.props.dis){
            return(
                <BoxShadow setting={shadowOpt}>
                    <Button disabled style={[styles.button,this.props.style,{backgroundColor:'#b2bec3'}]} onPress={this.props.onPress}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </Button>
                </BoxShadow>
            )

        }else {
            return(
                <BoxShadow setting={shadowOpt}>
                    <Button  style={[styles.button,this.props.style]} onPress={this.props.onPress}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </Button>
                </BoxShadow>
            )
        }

    }
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