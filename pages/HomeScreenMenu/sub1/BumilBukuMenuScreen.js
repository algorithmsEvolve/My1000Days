import React from "react";
import { StyleSheet, View } from "react-native";
import PDFReader from "rn-pdf-reader-js";
import Constants from "expo-constants";

export default class BumilBukuMenuScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PDFReader
          source={{
            uri:
              "https://github.com/algorithmsEvolve/video-host/raw/master/PP%20BUMIL.pdf"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  }
});
