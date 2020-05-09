//This is an example code for Bottom Navigation//
import React from "react";
//import react in our code.
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
//import all the basic component we have used

export default class DiaryViewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "",
      hari: "",
      minggu: "",
      bulan: "",
      tahun: "",
      cabiA: <View></View>,
      mp_l: <View></View>,
      ms_l: <View></View>,
      mm_l: <View></View>,
      mp_w: "",
      ms_w: "",
      mm_w: "",
      s1_w: "",
      s2_w: "",
      mp_k: "",
      mp_ph: "",
      mp_pn: "",
      mp_s: "",
      mp_b: "",
      s1: "",
      ms_k: "",
      ms_ph: "",
      ms_pn: "",
      ms_s: "",
      ms_b: "",
      s2: "",
      mm_k: "",
      mm_ph: "",
      mm_pn: "",
      mm_s: "",
      mm_b: "",
    };
    // get file temp
    AsyncStorage.getItem("as_namaFile")
      .then((value) => {
        const file = JSON.parse(value);
        this.setState({
          file: file.file,
          menu: file.menu,
          hari: file.hari,
          minggu: file.minggu,
          bulan: file.bulan,
          tahun: file.tahun,
        });
        AsyncStorage.getItem(file.file)
          .then((value) => {
            const content = JSON.parse(value);
            // catin bayi
            if (this.state.menu == "bayi") {
              this.setState({
                cabiA: <Text style={styles.fontContentT}>Lemak</Text>,
              });
              if (content.mp_l != null || content.mp_l != undefined) {
                this.setState({
                  mp_l: (
                    <Text style={styles.fontContentI}>: {content.mp_l}</Text>
                  ),
                });
              } else {
                this.setState({
                  mp_l: <Text style={styles.fontContentI}>: </Text>,
                });
              }
              if (content.ms_l != null || content.ms_l != undefined) {
                this.setState({
                  ms_l: (
                    <Text style={styles.fontContentI}>: {content.ms_l}</Text>
                  ),
                });
              } else {
                this.setState({
                  ms_l: <Text style={styles.fontContentI}>: </Text>,
                });
              }
              if (content.mm_l != null || content.mm_l != undefined) {
                this.setState({
                  mm_l: (
                    <Text style={styles.fontContentI}>: {content.mm_l}</Text>
                  ),
                });
              } else {
                this.setState({
                  mm_l: <Text style={styles.fontContentI}>: </Text>,
                });
              }
            }
            // end catin bayi
            this.setState({
              mp_w: content.mp_w,
              ms_w: content.ms_w,
              mm_w: content.mm_w,
              s1_w: content.s1_w,
              s2_w: content.s2_w,
              mp_k: content.mp_k,
              mp_ph: content.mp_ph,
              mp_pn: content.mp_pn,
              mp_s: content.mp_s,
              mp_b: content.mp_b,
              s1: content.s1,
              ms_k: content.ms_k,
              ms_ph: content.ms_ph,
              ms_pn: content.ms_pn,
              ms_s: content.ms_s,
              ms_b: content.ms_b,
              s2: content.s2,
              mm_k: content.mm_k,
              mm_ph: content.mm_ph,
              mm_pn: content.mm_pn,
              mm_s: content.mm_s,
              mm_b: content.mm_b,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentWillUnmount() {
    this.props.navigation.state.params.onNavigateBack(this.state.mp_k);
    this.props.navigation.goBack();
  }
  handleOnNavigateBack = (foo) => {
    // get file temp
    AsyncStorage.getItem("as_namaFile")
      .then((value) => {
        const file = JSON.parse(value);
        this.setState({
          file: file.file,
          menu: file.menu,
          hari: file.hari,
          minggu: file.minggu,
          bulan: file.bulan,
          tahun: file.tahun,
        });
        AsyncStorage.getItem(file.file)
          .then((value) => {
            const content = JSON.parse(value);
            // catin bayi
            if (this.state.menu == "bayi") {
              this.setState({
                cabiA: <Text style={styles.fontContentT}>Lemak</Text>,
              });
              if (content.mp_l != null || content.mp_l != undefined) {
                this.setState({
                  mp_l: (
                    <Text style={styles.fontContentI}>: {content.mp_l}</Text>
                  ),
                });
              } else {
                this.setState({
                  mp_l: <Text style={styles.fontContentI}>: </Text>,
                });
              }
              if (content.ms_l != null || content.ms_l != undefined) {
                this.setState({
                  ms_l: (
                    <Text style={styles.fontContentI}>: {content.ms_l}</Text>
                  ),
                });
              } else {
                this.setState({
                  ms_l: <Text style={styles.fontContentI}>: </Text>,
                });
              }
              if (content.mm_l != null || content.mm_l != undefined) {
                this.setState({
                  mm_l: (
                    <Text style={styles.fontContentI}>: {content.mm_l}</Text>
                  ),
                });
              } else {
                this.setState({
                  mm_l: <Text style={styles.fontContentI}>: </Text>,
                });
              }
            }
            // end catin bayi
            this.setState({
              mp_w: content.mp_w,
              ms_w: content.ms_w,
              mm_w: content.mm_w,
              s1_w: content.s1_w,
              s2_w: content.s2_w,
              mp_k: content.mp_k,
              mp_ph: content.mp_ph,
              mp_pn: content.mp_pn,
              mp_s: content.mp_s,
              mp_b: content.mp_b,
              s1: content.s1,
              ms_k: content.ms_k,
              ms_ph: content.ms_ph,
              ms_pn: content.ms_pn,
              ms_s: content.ms_s,
              ms_b: content.ms_b,
              s2: content.s2,
              mm_k: content.mm_k,
              mm_ph: content.mm_ph,
              mm_pn: content.mm_pn,
              mm_s: content.mm_s,
              mm_b: content.mm_b,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  goToDiaryEdit = () => {
    if (this.state.menu == "bayi") {
      this.props.navigation.navigate("DiaryEdit2", {
        onNavigateBack: this.handleOnNavigateBack,
      });
    } else {
      this.props.navigation.navigate("DiaryEdit", {
        onNavigateBack: this.handleOnNavigateBack,
      });
    }
  };
  mingguValue = (minggu) => {
    if (minggu == "minggu1") {
      var result = "Minggu ke-1";
    } else if (minggu == "minggu2") {
      var result = "Minggu ke-2";
    } else if (minggu == "minggu3") {
      var result = "Minggu ke-3";
    } else if (minggu == "minggu4") {
      var result = "Minggu ke-4";
    }
    return result;
  };
  bulanValue = (bulan) => {
    switch (bulan) {
      case "bulan1":
        var result = "Januari";
        break;
      case "bulan2":
        var result = "Februari";
        break;
      case "bulan3":
        var result = "Maret";
        break;
      case "bulan4":
        var result = "April";
        break;
      case "bulan5":
        var result = "Mei";
        break;
      case "bulan6":
        var result = "Juni";
        break;
      case "bulan7":
        var result = "Juli";
        break;
      case "bulan8":
        var result = "Agustus";
        break;
      case "bulan9":
        var result = "September";
        break;
      case "bulan10":
        var result = "Oktober";
        break;
      case "bulan11":
        var result = "November";
        break;
      case "bulan12":
        var result = "Desember";
        break;
      default:
        var result = "none";
    }
    return result;
  };
  showTime = (time) => {
    if (time == undefined || time == "") {
      return "";
    } else {
      return " (" + time + ")";
    }
  };
  render() {
    return (
      <ScrollView>
        {/* header */}
        <View style={styles.header}>
          {/* <View style={styles.headerTitle}>
            <Text style={styles.fontHeader}>Diary Bumil</Text>
          </View> */}
          <TouchableOpacity onPress={() => this.goToDiaryEdit()}>
            <View style={styles.editButton}>
              <Text style={styles.fontEdit}>Edit</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* end header */}
        <View style={styles.container}>
          <View style={styles.cardInfo}>
            <Text style={styles.fontInfo}>
              {this.state.hari.charAt(0).toUpperCase() +
                this.state.hari.slice(1)}
            </Text>
            <Text style={styles.fontInfo}>
              {this.mingguValue(this.state.minggu)}
            </Text>
            <Text style={styles.fontInfo}>
              {this.bulanValue(this.state.bulan)} {this.state.tahun}
            </Text>
          </View>

          {/* makan pagi */}
          <View style={styles.card}>
            <Text style={styles.fontTitle}>
              Makan Pagi{this.showTime(this.state.mp_w)}
            </Text>
            <View style={styles.content}>
              <View style={styles.contentA}>
                <Text style={styles.fontContentT}>Karbohidrat</Text>
                <Text style={styles.fontContentT}>Protein Hewani</Text>
                <Text style={styles.fontContentT}>Protein Nabati</Text>
                <Text style={styles.fontContentT}>Sayur</Text>
                <Text style={styles.fontContentT}>Buah</Text>
                {this.state.cabiA}
              </View>
              <View style={styles.contentB}>
                <Text style={styles.fontContentI}>: {this.state.mp_k}</Text>
                <Text style={styles.fontContentI}>: {this.state.mp_ph}</Text>
                <Text style={styles.fontContentI}>: {this.state.mp_pn}</Text>
                <Text style={styles.fontContentI}>: {this.state.mp_s}</Text>
                <Text style={styles.fontContentI}>: {this.state.mp_b}</Text>
                {this.state.mp_l}
              </View>
            </View>
          </View>

          {/* snack 1 */}
          <View style={styles.card}>
            <Text style={styles.fontTitle}>
              Snack{this.showTime(this.state.s1_w)}
            </Text>
            <View style={styles.content}>
              <View style={styles.contentA}>
                <Text style={styles.fontContentT}>Cemilan</Text>
              </View>
              <View style={styles.contentB}>
                <Text style={styles.fontContentI}>: {this.state.s1}</Text>
              </View>
            </View>
          </View>

          {/* makan siang */}
          <View style={styles.card}>
            <Text style={styles.fontTitle}>
              Makan Siang{this.showTime(this.state.ms_w)}
            </Text>
            <View style={styles.content}>
              <View style={styles.contentA}>
                <Text style={styles.fontContentT}>Karbohidrat</Text>
                <Text style={styles.fontContentT}>Protein Hewani</Text>
                <Text style={styles.fontContentT}>Protein Nabati</Text>
                <Text style={styles.fontContentT}>Sayur</Text>
                <Text style={styles.fontContentT}>Buah</Text>
                {this.state.cabiA}
              </View>
              <View style={styles.contentB}>
                <Text style={styles.fontContentI}>: {this.state.ms_k}</Text>
                <Text style={styles.fontContentI}>: {this.state.ms_ph}</Text>
                <Text style={styles.fontContentI}>: {this.state.ms_pn}</Text>
                <Text style={styles.fontContentI}>: {this.state.ms_s}</Text>
                <Text style={styles.fontContentI}>: {this.state.ms_b}</Text>
                {this.state.ms_l}
              </View>
            </View>
          </View>

          {/* snack 2 */}
          <View style={styles.card}>
            <Text style={styles.fontTitle}>
              Snack{this.showTime(this.state.s2_w)}
            </Text>
            <View style={styles.content}>
              <View style={styles.contentA}>
                <Text style={styles.fontContentT}>Cemilan</Text>
              </View>
              <View style={styles.contentB}>
                <Text style={styles.fontContentI}>: {this.state.s2}</Text>
              </View>
            </View>
          </View>

          {/* makan malam */}
          <View style={styles.card}>
            <Text style={styles.fontTitle}>
              Makan Malam{this.showTime(this.state.mm_w)}
            </Text>
            <View style={styles.content}>
              <View style={styles.contentA}>
                <Text style={styles.fontContentT}>Karbohidrat</Text>
                <Text style={styles.fontContentT}>Protein Hewani</Text>
                <Text style={styles.fontContentT}>Protein Nabati</Text>
                <Text style={styles.fontContentT}>Sayur</Text>
                <Text style={styles.fontContentT}>Buah</Text>
                {this.state.cabiA}
              </View>
              <View style={styles.contentB}>
                <Text style={styles.fontContentI}>: {this.state.mm_k}</Text>
                <Text style={styles.fontContentI}>: {this.state.mm_ph}</Text>
                <Text style={styles.fontContentI}>: {this.state.mm_pn}</Text>
                <Text style={styles.fontContentI}>: {this.state.mm_s}</Text>
                <Text style={styles.fontContentI}>: {this.state.mm_b}</Text>
                {this.state.mm_l}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("window").width,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  editButton: {
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  fontHeader: {
    fontSize: 22,
    textAlign: "left",
    fontWeight: "bold",
  },
  fontEdit: {
    fontSize: 18,
    textAlign: "right",
  },
  headerTitle: {
    paddingHorizontal: Dimensions.get("window").width / 30,
    width: (Dimensions.get("window").width / 6) * 5,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  container: {
    paddingHorizontal: Dimensions.get("window").width / 30,
  },
  fontInfo: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  cardInfo: {},
  fontTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    paddingLeft: Dimensions.get("window").width / 32,
  },
  fontContentT: {
    fontSize: 16,
  },
  fontContentI: {
    fontSize: 16,
    color: "grey",
  },
  contentB: {
    marginLeft: 10,
  },
  card: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#b8b8b8",
  },
  contentA: {
    width: Dimensions.get("window").width / 4,
  },
});
