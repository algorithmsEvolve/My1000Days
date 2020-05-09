//This is an example code for Bottom Navigation//
import React from "react";
import { AppLoading } from "expo";
//import react in our code.
import {
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ScreenOrientation } from "expo";
//import all the basic component we have used

export default class BayiMenuScreen extends React.Component {
  constructor(props) {
    super(props);
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Expo.Font.loadAsync({
      "GoogleSans-Regular": require("../../assets/fonts/GoogleSans-Regular.ttf"),
    });
    this.setState({ fontLoaded: true });
  }
  //Detail Screen to show from any Open detail button
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {
          <View style={styles.menuContainer}>
            <View style={styles.titleStyle}>
              <Image
                source={require("../../assets/images/hs-icon/bayi-icon.jpg")}
                style={styles.ImageIconStyle}
              />
              <View style={styles.verticalCenter}>
                <Text style={styles.textTitleStyle}>Bayi</Text>
              </View>
            </View>

            {/* menu */}
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("BayiBukuMenu")}
              >
                <View style={styles.titleStyle}>
                  <Image
                    source={require("../../assets/images/hs-menu-icon/buku-icon.png")}
                    style={styles.MenuIconStyle}
                  />
                  <View style={styles.verticalCenter}>
                    <Text style={styles.menuTitleStyle}>Buku</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("BayiVideoMenu")}
              >
                <View style={styles.titleStyle}>
                  <Image
                    source={require("../../assets/images/hs-menu-icon/video-icon.png")}
                    style={styles.MenuIconStyle}
                  />
                  <View style={styles.verticalCenter}>
                    <Text style={styles.menuTitleStyle}>Video</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("BayiGameMenu")}
              >
                <View style={styles.titleStyle}>
                  <Image
                    source={require("../../assets/images/hs-menu-icon/quiz-icon.png")}
                    style={styles.MenuIconStyle}
                  />
                  <View style={styles.verticalCenter}>
                    <Text style={styles.menuTitleStyle}>Kuis Cerdas</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("BayiPodcastMenu")
                }
              >
                <View style={styles.titleStyle}>
                  <Image
                    source={require("../../assets/images/hs-menu-icon/podcast-icon.png")}
                    style={styles.MenuIconStyleHitung}
                  />
                  <View style={styles.verticalCenter}>
                    <Text style={styles.menuTitleStyle}>Podcast</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("BayiDiaryMenu")}
              >
                <View style={styles.titleStyle2}>
                  <Image
                    source={require("../../assets/images/hs-menu-icon/diary-icon.png")}
                    style={styles.MenuIconStyleHitung}
                  />
                  <View style={styles.verticalCenter}>
                    <Text style={styles.menuTitleStyle}>Diary Gizi Bayi</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {/* end menu */}
          </View>
        }
      </ScrollView>
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
  container: {
    flex: 1,
    paddingTop: 15,
  },
  titleStyle: {
    flexDirection: "row",
    flex: 1,
    paddingBottom: 10,
    marginHorizontal: 18,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  textTitleStyle: {
    fontSize: 20,
    fontFamily: "GoogleSans-Regular",
  },
  ImageIconStyle: {
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 100,
  },
  MenuIconStyle: {
    borderWidth: 1,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    marginTop: 10,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 100,
  },
  menuTitleStyle: {
    fontSize: 16,
    alignSelf: "center",
    fontFamily: "GoogleSans-Regular",
  },
  verticalCenter: {
    alignSelf: "center",
  },
  titleStyle2: {
    flexDirection: "row",
    flex: 1,
    paddingBottom: 10,
    marginHorizontal: 18,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  MenuIconStyleHitung: {
    borderWidth: 1,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    marginTop: 10,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 100,
  },
});
