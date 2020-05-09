//This is an example code for Bottom Navigation//
import React, { Component } from "react";
//import react in our code.
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import "../../HomeScreen";
//import all the basic component we have used
const soundObject = new Audio.Sound();
export default class BayiPodcastMenuScreen extends Component {
  state = {
    duration: this.CurrentDuration,
  };
  async componentDidMount() {
    try {
      await homeAudio.pauseAsync();
      await soundObject.loadAsync(
        require("../../../assets/podcast/podcastbayi.mp3")
      );
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
    this.getStatus();
    this.interval = setInterval(() => this.getStatus(), 800);
  }
  constructor(props) {
    super(props);
    homeAudio.pauseAsync();
    this.state = {
      isPlaying: false,
      position: 0,
      timeLeft: "",
      durationTime: "",
      positionTIme: "",
    };
  }
  async componentWillUnmount() {
    await soundObject.pauseAsync();
    homeAudio.playAsync();
  }
  togglePlay() {
    soundObject.playAsync();
  }
  togglePause() {
    soundObject.pauseAsync();
  }
  toggleStop() {
    soundObject.stopAsync();
  }
  CurrentDuration = async () => {
    const Mill = await soundObject.getStatusAsync();
    let p = Mill.positionMillis;
    return p;
  };
  msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return mins + ":" + secs;
  }
  getStatus = async () => {
    const Mill = await soundObject.getStatusAsync();
    let p = Mill.positionMillis;
    var percentage = (Mill.positionMillis / Mill.durationMillis) * 100;
    var remainingTime = this.msToTime(
      Mill.durationMillis - Mill.positionMillis
    );
    var durationTimeS = this.msToTime(Mill.durationMillis);
    var positionTimeS = this.msToTime(Mill.positionMillis);
    this.setState({
      position: percentage,
      timeLeft: remainingTime,
      durationTime: durationTimeS,
      positionTime: positionTimeS,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}></View>
        {/* progressbar */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            padding: 10,
            maxHeight: "5%",
          }}
        >
          <View
            style={{
              flex: 1,
              height: 4,
              backgroundColor: "white",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                position: "absolute",
                width: `${this.state.position}%`,
                left: 0,
                height: 4,
                backgroundColor: "black",
              }}
            />
            <View
              style={{
                position: "absolute",
                left: `${this.state.position}%`,
                borderRadius: 100 / 2,
                width: 10,
                height: 10,
                backgroundColor: "black",
              }}
            />
          </View>
          <Text style={{ color: "black", width: 83, textAlign: "right" }}>
            {this.state.positionTime}/{this.state.durationTime}
          </Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.textTitle}>
            "Pemberian makan untuk bayi tidak sembarangan loh cans! Jangan
            sampai salah ya!"
          </Text>
        </View>
        <View style={styles.buttonView}>
          <View style={styles.buttonContainer}>
            {/* pause */}
            <TouchableOpacity onPress={this.togglePause}>
              <View>
                <Image
                  source={require("../../../assets/images/podcast-icon/pause-icon.png")}
                  style={styles.ImageIconStyle2}
                />
              </View>
            </TouchableOpacity>

            {/* play */}
            <TouchableOpacity onPress={this.togglePlay}>
              <View>
                <Image
                  source={require("../../../assets/images/podcast-icon/play-icon.png")}
                  style={styles.ImageIconStyle}
                />
              </View>
            </TouchableOpacity>

            {/* stop */}
            <TouchableOpacity onPress={this.toggleStop}>
              <View>
                <Image
                  source={require("../../../assets/images/podcast-icon/stop-icon.png")}
                  style={styles.ImageIconStyle2}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  backgroundVideo: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
  },
  ImageIconStyle: {
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  ImageIconStyle2: {
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleView: {
    flex: 0,
    bottom: 0,
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    top: 10,
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
