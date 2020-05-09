import React, { Component } from "react";
import { AppLoading } from "expo";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
} from "react-native";

export default class CatingHitungMenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", fontLoaded: false };
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      "GoogleSans-Regular": require("../../../assets/fonts/GoogleSans-Regular.ttf"),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.menuTitleStyle}>
            <Image
              source={require("../../../assets/images/hs-menu-icon/imt-icon.png")}
              style={styles.MenuIconStyle}
            />
            <View style={styles.verticalCenter}>
              <Text style={styles.textTitleStyle}>Hitung BB Ideal dan IMT</Text>
            </View>
          </View>
          <View style={styles.containerInput}>
            <View>
              <Text style={styles.titleInput}>Nama</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Masukkan Nama Anda"
                onChangeText={(nama) => this.setState({ nama })}
                value={this.state.nama}
                multiline={true}
              />
            </View>
            <View>
              <Text style={styles.titleInput}>Tinggi Badan</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Masukkan Tinggi Badan"
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
                keyboardType="number-pad"
                multiline={true}
              />
            </View>
            <View>
              <Text style={styles.titleInput}>Berat Badan</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Masukkan Berat Badan"
                onChangeText={(text2) => this.setState({ text2 })}
                value={this.state.text2}
                keyboardType="number-pad"
              />
            </View>
            <View>
              <Text style={styles.titleOutput}>BB ideal</Text>
              <Text style={styles.output}>{this.BBIdeal()}</Text>
            </View>
            <View>
              <Text style={styles.titleOutput}>IMT (Indeks Massa Tubuh)</Text>
              <Text style={styles.output}>
                {Number(
                  (
                    parseInt(this.state.text2) /
                    ((parseInt(this.state.text) / 100) *
                      (parseInt(this.state.text) / 100))
                  ).toFixed(2)
                ) || "-"}
              </Text>
            </View>
          </View>
          <View style={styles.allOutput}>
            <Text style={styles.textAllOutput}>Berat Badan Ideal untuk</Text>
            <Text style={styles.allOutputValue}>{this.state.nama || "-"}</Text>
            <Text style={styles.textAllOutput}>adalah </Text>
            <Text style={styles.allOutputValue}>{this.BBIdeal()}</Text>
            <Text style={styles.textAllOutput}>dan IMT sebesar </Text>
            <Text style={styles.allOutputValue}>
              {Number(
                (
                  parseInt(this.state.text2) /
                  ((parseInt(this.state.text) / 100) *
                    (parseInt(this.state.text) / 100))
                ).toFixed(2)
              ) || "-"}
            </Text>
            <Text style={styles.textAllOutput}>Masuk dalam kategori </Text>
            {this.kategoriIMT()}
          </View>
          <View style={{ flex: 3, marginTop: "26%" }}></View>
        </View>
      </ScrollView>
    );
  }

  BBIdeal = () => {
    if (parseInt(this.state.text) >= 150) {
      return (
        parseInt(this.state.text) -
        100 -
        (parseInt(this.state.text) - 100) * (10 / 100)
      );
    } else if (parseInt(this.state.text) < 150) {
      return parseInt(this.state.text) - 100;
    } else {
      return "-";
    }
  };

  kategoriIMT() {
    var IMT = Number(
      (
        parseInt(this.state.text2) /
        ((parseInt(this.state.text) / 100) * (parseInt(this.state.text) / 100))
      ).toFixed(2)
    );
    if (IMT < 18.5) {
      return <Text style={styles.allOutputValue}> Kurang (Underweight) </Text>;
    } else if (IMT >= 18.5 && IMT <= 22.9) {
      return <Text style={styles.allOutputValue}> Normal </Text>;
    } else if (IMT >= 23 && IMT <= 24.9) {
      return (
        <Text style={styles.allOutputValue}>
          {" "}
          Kelebihan Berat Badan (Overweight){" "}
        </Text>
      );
    } else if (IMT >= 25 && IMT <= 29.9) {
      return <Text style={styles.allOutputValue}> Obesitas I </Text>;
    } else if (IMT >= 30) {
      return <Text style={styles.allOutputValue}> Obesitas II </Text>;
    } else {
      return <Text style={styles.allOutputValue}> - </Text>;
    }
  }
}

const styles = StyleSheet.create({
  menuTitleStyle: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  verticalCenter: {
    alignSelf: "center",
  },
  textTitleStyle: {
    fontSize: 20,
    fontFamily: "GoogleSans-Regular",
  },
  titleStyle: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  MenuIconStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignSelf: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    marginTop: 10,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 100,
  },
  container: {
    marginHorizontal: 18,
    flex: 1,
    paddingTop: 15,
  },
  containerInput: {
    flex: 1,
  },
  output: {
    padding: 10,
    fontSize: 20,
    fontFamily: "GoogleSans-Regular",
  },
  textInput: {
    height: 40,
    width: 200,
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
    fontFamily: "GoogleSans-Regular",
  },
  titleInput: {
    fontSize: 15,
    paddingBottom: 5,
    marginTop: 10,
    fontFamily: "GoogleSans-Regular",
  },
  textAllOutput: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "GoogleSans-Regular",
  },
  allOutputValue: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "GoogleSans-Regular",
  },
  allOutput: {
    marginTop: 50,
    flex: 3,
  },
});
