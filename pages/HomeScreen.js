import React from "react";
import { AppLoading } from "expo";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Audio } from "expo-av";

global.menu = "HomeScreenMenu";
global.homeAudio = new Audio.Sound();
global.quizAudio = new Audio.Sound();
global.victoryAudio = new Audio.Sound();
export default class HomeScreen extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Expo.Font.loadAsync({
      "GoogleSans-Regular": require("../assets/fonts/GoogleSans-Regular.ttf"),
    });
    this.setState({ fontLoaded: true });
    try {
      await homeAudio.loadAsync(require("../assets/music/home-music.mp3"), {
        isLooping: true,
        isPlaying: true,
      });
      await quizAudio.loadAsync(require("../assets/music/quiz-music.mp3"), {
        isLooping: true,
      });
      await victoryAudio.loadAsync(
        require("../assets/music/victory-music.mp3")
      );
      homeAudio.playAsync();
    } catch (error) {
      // An error occurred!
    }
  }
  componentWillUnmount() {
    homeAudio.stopAsync();
  }

  stopHomeAudio() {
    homeAudio.stopAsync();
  }
  //Home Screen to show in Home Option
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Settings")}
          >
            <Text>Go to settng Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Details")}
          >
            <Text>Open Details Screen</Text>
          </TouchableOpacity>
        </View> */}

        {/* view gizi catin */}
        <View style={styles.ViewGiziCatin}>
          <View style={styles.ImageGiziCatin}>
            <Image
              source={require("../assets/images/hs-icon/logo.png")}
              style={styles.ImageBigStyle}
            />
          </View>
        </View>
        {/* end view gizi catin */}

        {/* view icon HS */}
        <View style={styles.iconHS}>
          {/* Catin icon */}
          <View style={styles.viewIcon}>
            <TouchableOpacity
              style={styles.ImageIconStyleWrapper}
              onPress={() => this.props.navigation.navigate("CatinMenu")}
            >
              <View>
                <Image
                  source={require("../assets/images/hs-icon/catin-icon.jpg")}
                  style={styles.ImageIconStyle}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.bodyFont}>Catin</Text>
          </View>
          {/* end catin icon */}

          {/* bumil icon */}
          <View style={styles.viewIcon}>
            <TouchableOpacity
              style={styles.ImageIconStyleWrapper}
              onPress={() => this.props.navigation.navigate("BumilMenu")}
            >
              <View>
                <Image
                  source={require("../assets/images/hs-icon/bumil-icon.jpg")}
                  style={styles.ImageIconStyle}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.bodyFont}>Bumil</Text>
          </View>
          {/* end bumil icon */}

          {/* bayi icon */}
          <View style={styles.viewIcon}>
            <TouchableOpacity
              style={styles.ImageIconStyleWrapper}
              onPress={() => this.props.navigation.navigate("BayiMenu")}
            >
              <View>
                <Image
                  source={require("../assets/images/hs-icon/bayi-icon.jpg")}
                  style={styles.ImageIconStyle}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.bodyFont}>Bayi</Text>
          </View>
          {/* end bayi icon */}
        </View>
        {/* end view icon HS */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  viewIcon: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  iconHS: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  ImageIconStyle: {
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 90,
    backgroundColor: "#fff",
    borderRadius: 100,
  },
  ImageBigStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 500,
    height: 500,
  },
  ViewGiziCatin: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  TextGiziCatin: {
    fontSize: 40,
  },
  bodyFont: {
    fontFamily: "GoogleSans-Regular",
  },
});
