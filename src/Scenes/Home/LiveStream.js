import React,{Component} from "react"
import {View,Text} from "react-native"
import {HEIGHT, WIDTH} from "../../Data";
import Video from "react-native-video";
import {Navigation} from "react-native-navigation";
export default class LiveStream extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paused :true
        }
    }
    componentDidMount(){
        this.navigationEventListener = Navigation.events().bindComponent(this);
        this.navigationEventListener = Navigation.events().bindComponent(this);
    }
    componentDidAppear() {
        this.setState({
            paused :false
        })
    }
    componentWillUnmount(){
        if (this.navigationEventListener) {
            this.navigationEventListener.remove();
        }
        if (this.navigationEventListener) {
            this.navigationEventListener.remove();
        }
    }
    componentDidDisappear() {
        this.setState({
            paused: true
        })
    }
    render(){
        return(
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                transform: [{ rotate: '90deg'}]
            }}>
                <Video
                    style={{
                     width: HEIGHT,
                     height:WIDTH,
                     flex:1,
                        borderWidth:1
                    }}
                    source={{uri:"https://fajr.arvanvod.com/kl9XmDdyV3/pgBwgmMaD9/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/manifest.mpd"}}
                    ref={(ref) => {
                        this.player = ref
                    }}
                    paused={this.state.paused}
                />
            </View>
        )
    }
}