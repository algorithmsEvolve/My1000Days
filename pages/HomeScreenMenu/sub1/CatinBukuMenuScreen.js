import React from "react";
import { StyleSheet, View } from "react-native";
import PDFReader from "rn-pdf-reader-js";
import Constants from "expo-constants";

export default class CatinBukuMenuScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PDFReader
          source={{
            uri:
              "https://github.com/algorithmsEvolve/video-host/raw/master/PPT%20CATIN.pdf",
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
    backgroundColor: "#ecf0f1",
  },
});
