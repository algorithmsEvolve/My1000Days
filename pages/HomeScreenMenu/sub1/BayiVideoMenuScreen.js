//This is an example code for Bottom Navigation//
import React, { Component } from "react";
//import react in our code.
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { Video } from "expo-av";
import { ScreenOrientation } from "expo";
import "../../HomeScreen";
//import all the basic component we have used

export default class BayiVideoMenuScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   ScreenOrientation.lockAsync(
  //     ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
  //   );
  // }

  async componentDidMount() {
    try {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
      );
      await homeAudio.pauseAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }

  async componentWillUnmount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    await homeAudio.playAsync();
  }

  // state = {
  //   rotateIndicator: "portrait"
  // };
  render() {
    const { width } = Dimensions.get("window");

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.videoView}>
            <Video
              source={{
                uri:
                  "https://github.com/algorithmsEvolve/video-host/raw/master/bayi-video.m4v"
              }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              useNativeControls={true}
              resizeMode={Video.RESIZE_MODE_CONTAIN}
              style={styles.backgroundVideo}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
  // rotate() {
  //   if (this.state.rotateIndicator == "portrait") {
  //     ScreenOrientation.lockAsync(
  //       ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
  //     );
  //     this.setState({ rotateIndicator: "landscape" });
  //   } else {
  //     ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  //     this.setState({ rotateIndicator: "portrait" });
  //   }
  // }
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  backgroundVideo: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: Dimensions.get("window").width,
    height: (Dimensions.get("window").width * 70) / 100
  },
  MenuIconStyle: {
    alignSelf: "center",
    justifyContent: "center",
    width: 30,
    height: 30
  },
  rotateView: {
    alignSelf: "center",
    paddingTop: "0%",
    top: 0
  },
  videoView: {
    alignSelf: "center",
    justifyContent: "center"
  }
});
