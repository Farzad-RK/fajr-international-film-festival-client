import React,{Component} from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'
import { FaNum, Regular} from "../Data";

export default class InputField extends Component {

    constructor(props) {
        super(props);
        TextInput.defaultProps.selectionColor = "#666666"
    }

    render(){
        if(this.props.label==null){
            return(
                <View style={[styles.container,{height:45}]}>
                    <View style={[styles.inputContainer]}>
                        <TextInput style={styles.input}
                                   keyboardType={this.props.keyboardType}
                                   placeholder={this.props.placeholder}
                                   placeholderTextColor={'#666666'}/>
                    </View>
                </View>
            )
        }
        return(
            <View style={styles.container}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>{this.props.label}</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                               keyboardType={this.props.keyboardType}
                               placeholder={this.props.placeholder}
                               placeholderTextColor={'#666666'}/>
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:100,
        paddingLeft:10,
        paddingRight:10,
    },
    labelContainer: {
        flex:1,
    },
    label:{
        padding:10,
        flex:1,
        marginRight:'12%',
        textAlign:'left',
        color:'#000',
        fontFamily:Regular,
        fontSize:16
    },
    inputContainer: {
       flex:1,
       alignItems: 'center',
    },
    input: {
        paddingLeft:20,
        paddingRight:20,
        flex:1,
        width:'80%',
        color:'#000',
        textAlign:'center',
        fontFamily:FaNum,
        fontSize:16,
        borderRadius:10,
        backgroundColor:'#d0d0d0',
    }
})