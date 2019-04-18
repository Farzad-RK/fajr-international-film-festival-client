import React,{Component} from "react"
import {View,Text} from "react-native"
import {HEIGHT, WIDTH} from "../../Data";
import Video from "react-native-video";
import {Navigation} from "react-native-navigation";
import VideoPlayer from "react-native-video-controls";
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

                <VideoPlayer
                    disableBack={true}
                    style={{flex:1}}
                    navigator={null}
                    paused={this.state.paused}
                    source={{ uri:"http://diaco.arvanlive.com/dash/ch1/ch1.mpd"}}
                />
        )
    }
}