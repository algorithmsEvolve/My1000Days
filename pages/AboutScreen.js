//This is an example code for Bottom Navigation//
import React from "react";
import { AppLoading } from "expo";
//import react in our code.
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
//import all the basic component we have used

export default class AboutScreen extends React.Component {
  //font
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Expo.Font.loadAsync({
      "GoogleSans-Regular": require("../assets/fonts/GoogleSans-Regular.ttf"),
    });
    this.setState({ fontLoaded: true });
  }
  //About Screen to show in About Option
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      // view about
      <ScrollView persistentScrollbar={true}>
        {
          <View style={styles.menuContainer}>
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
            <View style={styles.aboutStyle}>
              <Text style={styles.textAboutStyle}>
                Aplikasi ini dibuat oleh Erni, mahasiswa POLTEKKES KEMENKES
                JAKARTA II Jurusan Gizi dan Dietetika.
              </Text>
              <Text style={styles.textAboutStyle}>
                Aplikasi ini bertujuan untuk mengedukasi catin dalam memahami
                gizi 1000 HPK. Untuk menunjang keberhasilan gizi 1000 HPK yang
                dimulai dari sebelum kehamilan sampai memiliki anak usia 2 tahun
                maka disarankan untuk mengeksplorasi seluruh fitur yang ada di
                aplikasi ini.
              </Text>
            </View>
          </View>
        }
      </ScrollView>
      // end view about
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
    backgroundColor: "#FFD1DC",
  },
  titleStyle: {
    flex: 1,
    marginHorizontal: 18,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  textTitleStyle: {
    fontSize: 16,
    fontFamily: "GoogleSans-Regular",
  },
  aboutStyle: {
    flex: 1,
    marginHorizontal: 18,
  },
  textAboutStyle: {
    fontSize: 15,
    //15
    textAlign: "left",
    fontFamily: "GoogleSans-Regular",
  },
  ViewGiziCatin: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  ImageBigStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 500,
    height: 500,
  },
  ImageGiziCatin: {
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
