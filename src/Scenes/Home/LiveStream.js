import React,{Component} from "react"
import {Navigation} from "react-native-navigation";
import VideoPlayer from "react-native-video-controls";
export default class LiveStream extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paused :true
        }
        this.onEnter = this.onEnter.bind(this)
        this.onExit = this.onExit.bind(this)
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
    onEnter(){
        Navigation.mergeOptions("liveStream", {
            bottomTabs: { visible: false, drawBehind: true, animate: true }
        });
    }
    onExit(){
        Navigation.mergeOptions("liveStream", {
            bottomTabs: { visible: true, drawBehind: true, animate: true }
        });
    }
    render(){
        return(

                <VideoPlayer
                    onEnterFullscreen={this.onEnter}
                    onExitFullscreen={this.onExit}
                    disableBack={true}
                    style={{flex:1}}
                    navigator={null}
                    paused={this.state.paused}
                    source={{ uri:"http://diaco.arvanlive.com/dash/ch1/ch1.mpd"}}
                />
        )
    }
}