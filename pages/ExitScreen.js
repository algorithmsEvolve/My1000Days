//This is an example code for Bottom Navigation//
import React from "react";
import { AppLoading } from "expo";
//import react in our code.
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
} from "react-native";
//import all the basic component we have used

export default class ExitScreen extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Expo.Font.loadAsync({
      "GoogleSans-Regular": require("../assets/fonts/GoogleSans-Regular.ttf"),
    });
    this.setState({ fontLoaded: true });
  }
  //Exit Screen to show in Exit Option
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50%",
        }}
      >
        <Text style={styles.textPrompt}>
          Beneran nih cans mau keluar aplikasi?
        </Text>
        <View style={styles.buttonView}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                return BackHandler.exitApp();
              }}
            >
              <Text style={styles.textButtonStyle}> Iya </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={styles.textButtonStyle}> Gajadi deh </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 5,
  },
  buttonStyle: {
    backgroundColor: "white",
    padding: 10,
    margin: 15,
    width: 120,
  },
  textButtonStyle: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "GoogleSans-Regular",
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
  },
  textPrompt: {
    padding: 30,
    fontSize: 20,
    fontFamily: "GoogleSans-Regular",
  },
});
