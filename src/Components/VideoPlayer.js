import React from 'react';
import {WIDTH,HEIGHT} from "../Data";
import {View, StyleSheet, Slider, TouchableOpacity} from "react-native";
import Video from "react-native-video";
import {Icon} from "native-base";

const VideoPlayer = class VideoPlayer extends React.Component{

    constructor(props){
        super(props);
        this.setTime = this.setTime.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.onSlide = this.onSlide.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.state ={
            duration:0,
            currentPosition:0,
            playIcon:'play',
            paused:true,
        }
    }

    setTime(event){
       this.setState({
           currentPosition:event.currentTime
       });
    }

    onLoad(event){
        this.setState({
            duration :event.duration
        });
    }

    onSlide(value){
       this.player.seek(value) ;
    }
    onPlay(){
        if(this.state.paused){
            this.setState({
                playIcon:'pause',
                paused:false
            })
        }else {
            this.setState({
                playIcon:'play',
                paused:true
            })
        }
    }
    render(){
      return(
          <View style={styles.container}>

              <View style={styles.viewPort}>
                  <Video
                      onProgress={this.setTime}
                      style={{flex:1}}
                      source={{uri:"http://fajr.arvanvod.com/kl9XmDdyV3/pgBwgmMaD9/h_,144_200,240_400,360_800,480_1500,720_2500,k.mp4.list/manifest.mpd"}}
                      ref={(ref) => {
                          this.player = ref
                      }}
                      onLoad={this.onLoad}
                      onError={this.onError}
                      onBuffer={this.onBuffer}
                      paused={this.state.paused}
                  />
              </View>
              <View style={styles.controls}>
                  <Slider
                      onSlidingComplete={this.onSlide}
                      minimumValue={0}
                      maximumValue={this.state.duration}
                      step={0.25}
                      value={this.state.currentPosition}
                      maximumTrackTintColor="#999"
                      minimumTrackTintColor="#2ddabd"
                      style={{width: '100%',marginBottom:20}}
                  />
                  <TouchableOpacity onPress={this.onPlay}>

                      <Icon
                      name={this.state.playIcon}
                      type={'Ionicons'}
                      style={{color:'#ffffff'}}/>

                  </TouchableOpacity>
              </View>
          </View>
      )
    }

};

const styles = StyleSheet.create({
    container : {
       flex:1,
    },
    viewPort : {
         flex:0.7,
         backgroundColor:'#000'
    },
    controls : {
         flex:0.3,
         backgroundColor:'#000',
         justifyContent: 'center',
         alignItems: 'center'
    },
    videoComponent:{
        flex:1,
    }
});
export default VideoPlayer;