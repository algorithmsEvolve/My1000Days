import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class BumilDiaryGiziScreen extends React.Component {
  constructor(props) {
    super(props);
    global.x = 0;
    // get date
    let today = new Date();
    if (today.getDate() <= 7) {
      var nowMinggu = "minggu1";
    } else if (today.getDate() > 7 && today.getDate() <= 14) {
      var nowMinggu = "minggu2";
    } else if (today.getDate() > 14 && today.getDate() <= 21) {
      var nowMinggu = "minggu3";
    } else if (today.getDate() > 21) {
      var nowMinggu = "minggu4";
    }
    var nowBulan = "bulan" + parseInt(today.getMonth() + 1);
    var nowTahun = today.getFullYear();
    // end get date
    // set state
    this.state = {
      refresh: true,
      animating: true,
      loading: <View></View>,
      // picked
      pickedMinggu: nowMinggu,
      pickedBulan: nowBulan,
      pickedTahun: nowTahun,
      //content senin
      mp_k1: "",
      mp_ph1: "",
      mp_pn1: "",
      mp_s1: "",
      mp_b1: "",
      s11: "",
      ms_k1: "",
      ms_ph1: "",
      ms_pn1: "",
      ms_s1: "",
      ms_b1: "",
      s21: "",
      mm_k1: "",
      mm_ph1: "",
      mm_pn1: "",
      mm_s1: "",
      mm_b1: "",
      //content selasa
      mp_k2: "",
      mp_ph2: "",
      mp_pn2: "",
      mp_s2: "",
      mp_b2: "",
      s22: "",
      ms_k2: "",
      ms_ph2: "",
      ms_pn2: "",
      ms_s2: "",
      ms_b2: "",
      s22: "",
      mm_k2: "",
      mm_ph2: "",
      mm_pn2: "",
      mm_s2: "",
      mm_b2: "",
      //content rabu
      mp_k3: "",
      mp_ph3: "",
      mp_pn3: "",
      mp_s3: "",
      mp_b3: "",
      s33: "",
      ms_k3: "",
      ms_ph3: "",
      ms_pn3: "",
      ms_s3: "",
      ms_b3: "",
      s23: "",
      mm_k3: "",
      mm_ph3: "",
      mm_pn3: "",
      mm_s3: "",
      mm_b3: "",
      //content kamis
      mp_k4: "",
      mp_ph4: "",
      mp_pn4: "",
      mp_s4: "",
      mp_b4: "",
      s44: "",
      ms_k4: "",
      ms_ph4: "",
      ms_pn4: "",
      ms_s4: "",
      ms_b4: "",
      s24: "",
      mm_k4: "",
      mm_ph4: "",
      mm_pn4: "",
      mm_s4: "",
      mm_b4: "",
      //content jumat
      mp_k5: "",
      mp_ph5: "",
      mp_pn5: "",
      mp_s5: "",
      mp_b5: "",
      s55: "",
      ms_k5: "",
      ms_ph5: "",
      ms_pn5: "",
      ms_s5: "",
      ms_b5: "",
      s25: "",
      mm_k5: "",
      mm_ph5: "",
      mm_pn5: "",
      mm_s5: "",
      mm_b5: "",
      //content sabtu
      mp_k6: "",
      mp_ph6: "",
      mp_pn6: "",
      mp_s6: "",
      mp_b6: "",
      s66: "",
      ms_k6: "",
      ms_ph6: "",
      ms_pn6: "",
      ms_s6: "",
      ms_b6: "",
      s26: "",
      mm_k6: "",
      mm_ph6: "",
      mm_pn6: "",
      mm_s6: "",
      mm_b6: "",
      //content minggu
      mp_k7: "",
      mp_ph7: "",
      mp_pn7: "",
      mp_s7: "",
      mp_b7: "",
      s77: "",
      ms_k7: "",
      ms_ph7: "",
      ms_pn7: "",
      ms_s7: "",
      ms_b7: "",
      s27: "",
      mm_k7: "",
      mm_ph7: "",
      mm_pn7: "",
      mm_s7: "",
      mm_b7: "",
    };
    // end set state

    // async storage
    //check if data exist
    // end async storage
  }
  openAcitivityIndicator = () => {
    this.setState({
      loading: (
        <View style={[styles.loadingContainer, styles.horizontal]}>
          <ActivityIndicator
            animating={this.state.animating}
            size="large"
            color="white"
          />
        </View>
      ),
    });
  };
  closeActivityIndicator = () =>
    setTimeout(
      () =>
        this.setState({
          loading: <View></View>,
        }),
      3000
    );

  cutString = (string) => {
    var stringz = String(string);
    if (
      string == undefined ||
      string == "" ||
      string == "undefined" ||
      string == null ||
      string == "false"
    ) {
      return "";
    }
    if (stringz.length > 30) {
      return stringz.substring(0, 30) + "..";
    } else {
      return stringz;
    }
  };

  componentDidUpdate() {
    if (global.x == 0) {
      global.x = 1;
      this.openAcitivityIndicator();
      this.closeActivityIndicator();
      this.ubahItem();
    }
    global.x = 1;
  }
  handleOnNavigateBack = (foo) => {
    this.ubahMinggu(this.state.pickedMinggu);
  };
  goToDiaryView = (hari) => {
    let namaFileCompleted =
      "bumil_" +
      hari +
      "_" +
      this.state.pickedMinggu +
      "_" +
      this.state.pickedBulan +
      "_" +
      this.state.pickedTahun;
    let namaFile = {
      file: namaFileCompleted,
      menu: "bumil",
      hari: hari,
      minggu: this.state.pickedMinggu,
      bulan: this.state.pickedBulan,
      tahun: this.state.pickedTahun,
    };
    AsyncStorage.setItem("as_namaFile", JSON.stringify(namaFile));
    // this.props.navigation.navigate("DiaryView");
    this.props.navigation.navigate("DiaryView", {
      onNavigateBack: this.handleOnNavigateBack,
    });
  };
  clearState = (hari) => {
    this.setState({
      ["mp_k" + hari]: "",
      ["mp_ph" + hari]: "",
      ["mp_pn" + hari]: "",
      ["mp_s" + hari]: "",
      ["mp_b" + hari]: "",
      ["s1" + hari]: "",
      ["ms_k" + hari]: "",
      ["ms_ph" + hari]: "",
      ["ms_pn" + hari]: "",
      ["ms_s" + hari]: "",
      ["ms_b" + hari]: "",
      ["s2" + hari]: "",
      ["mm_k" + hari]: "",
      ["mm_ph" + hari]: "",
      ["mm_pn" + hari]: "",
      ["mm_s" + hari]: "",
      ["mm_b" + hari]: "",
    });
  };
  ubahItem = () => {
    var namaFileHarian = "";
    // all files template
    var fileTemp =
      this.state.pickedMinggu +
      "_" +
      this.state.pickedBulan +
      "_" +
      this.state.pickedTahun;
    let indicator = 1;
    // for (indicator; indicator <= 8; indicator++) {
    //   console.log(indicator);
    // }
    for (indicator = 1; indicator <= 7; indicator++) {
      //tentukan nama file sesuai hari
      switch (indicator) {
        case 1:
          namaFileHarian = "bumil_" + "senin" + "_" + fileTemp;
          break;
        case 2:
          namaFileHarian = "bumil_" + "selasa" + "_" + fileTemp;
          break;
        case 3:
          namaFileHarian = "bumil_" + "rabu" + "_" + fileTemp;
          break;
        case 4:
          namaFileHarian = "bumil_" + "kamis" + "_" + fileTemp;
          break;
        case 5:
          namaFileHarian = "bumil_" + "jumat" + "_" + fileTemp;
          break;
        case 6:
          namaFileHarian = "bumil_" + "sabtu" + "_" + fileTemp;
          break;
        case 7:
          namaFileHarian = "bumil_" + "minggu" + "_" + fileTemp;
          break;
        default:
          namaFileHarian = "";
      }
      let indicatorAsync = indicator;
      // end tentukan nama file
      AsyncStorage.getItem(namaFileHarian)
        .then((value) => {
          const result = JSON.parse(value);
          if (result.mp_k != "" && result.mp_k != undefined) {
            this.setState({
              ["mp_k" + indicatorAsync]: result.mp_k + ", ",
            });
          }
          if (result.mp_ph != "") {
            this.setState({
              ["mp_ph" + indicatorAsync]: result.mp_ph + ", ",
            });
          }
          if (result.mp_pn != "") {
            this.setState({
              ["mp_pn" + indicatorAsync]: result.mp_pn + ", ",
            });
          }
          if (result.mp_s != "") {
            this.setState({
              ["mp_s" + indicatorAsync]: result.mp_s + ", ",
            });
          }
          if (result.mp_b != "") {
            this.setState({
              ["mp_b" + indicatorAsync]: result.mp_b,
            });
          }
          if (result.s1 != "" && result.s1 != undefined) {
            this.setState({
              ["s1" + indicatorAsync]: result.s1,
            });
          }
          if (result.ms_k != "") {
            this.setState({
              ["ms_k" + indicatorAsync]: result.ms_k + ", ",
            });
          }
          if (result.ms_ph != "") {
            this.setState({
              ["ms_ph" + indicatorAsync]: result.ms_ph + ", ",
            });
          }
          if (result.ms_pn != "") {
            this.setState({
              ["ms_pn" + indicatorAsync]: result.ms_pn + ", ",
            });
          }
          if (result.ms_s != "") {
            this.setState({
              ["ms_s" + indicatorAsync]: result.ms_s + ", ",
            });
          }
          if (result.ms_b != "") {
            this.setState({
              ["ms_b" + indicatorAsync]: result.ms_b,
            });
          }
          if (result.s2 != "") {
            this.setState({
              ["s2" + indicatorAsync]: result.s2,
            });
          }
          if (result.mm_k != "") {
            this.setState({
              ["mm_k" + indicatorAsync]: result.mm_k + ", ",
            });
          }
          if (result.mm_ph != "") {
            this.setState({
              ["mm_ph" + indicatorAsync]: result.mm_ph + ", ",
            });
          }
          if (result.mm_pn != "") {
            this.setState({
              ["mm_pn" + indicatorAsync]: result.mm_pn + ", ",
            });
          }
          if (result.mm_b != "") {
            this.setState({
              ["mm_b" + indicatorAsync]: result.mm_b,
            });
          }
          if (result.mm_s != "") {
            this.setState({
              ["mm_s" + indicatorAsync]: result.mm_s + ", ",
            });
          }
          if (result.s != "") {
            this.setState({
              ["s" + indicatorAsync]: result.s + ", ",
            });
          }
          if (result.b != "") {
            this.setState({
              ["b" + indicatorAsync]: result.b,
            });
          }
        })
        .catch((error) => {
          this.clearState(indicatorAsync);
        });
    }
  };

  ubahBulan = (itemValue) => {
    this.setState({ pickedBulan: itemValue });
    global.x = 0;
  };
  ubahMinggu = (itemValue) => {
    this.setState({ pickedMinggu: itemValue });
    global.x = 0;
  };
  ubahTahun = (itemValue) => {
    this.setState({ pickedTahun: itemValue });
    global.x = 0;
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.loading}
        <View style={styles.pickerView}>
          {/* picker minggu */}
          <View>
            <View style={styles.pickerStyle}>
              <Picker
                selectedValue={this.state.pickedMinggu}
                style={styles.ddMinggu}
                onValueChange={(itemMinggu, itemIndex) =>
                  this.ubahMinggu(itemMinggu)
                }
              >
                <Picker.Item label="Minggu 1" value="minggu1" />
                <Picker.Item label="Minggu 2" value="minggu2" />
                <Picker.Item label="Minggu 3" value="minggu3" />
                <Picker.Item label="Minggu 4" value="minggu4" />
              </Picker>
            </View>
          </View>
          {/* picker bulan */}
          <View>
            <View style={styles.pickerStyle}>
              <Picker
                selectedValue={this.state.pickedBulan}
                style={styles.ddMinggu}
                onValueChange={(itemBulan, itemIndex) =>
                  this.ubahBulan(itemBulan)
                }
              >
                <Picker.Item label="Januari" value="bulan1" />
                <Picker.Item label="Februari" value="bulan2" />
                <Picker.Item label="Maret" value="bulan3" />
                <Picker.Item label="April" value="bulan4" />
                <Picker.Item label="Mei" value="bulan5" />
                <Picker.Item label="Juni" value="bulan6" />
                <Picker.Item label="Juli" value="bulan7" />
                <Picker.Item label="Agustus" value="bulan8" />
                <Picker.Item label="September" value="bulan9" />
                <Picker.Item label="Oktober" value="bulan10" />
                <Picker.Item label="November" value="bulan11" />
                <Picker.Item label="Desember" value="bulan12" />
              </Picker>
            </View>
          </View>
          {/* picker tahun */}
          <View>
            <View style={styles.pickerStyle}>
              <Picker
                selectedValue={this.state.pickedTahun}
                style={styles.ddMinggu}
                onValueChange={(itemTahun, itemIndex) =>
                  this.ubahTahun(itemTahun)
                }
              >
                <Picker.Item label="2020" value="2020" />
                <Picker.Item label="2021" value="2021" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.cardView}>
          {/* card senin */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.goToDiaryView("senin")}
          >
            <Text style={styles.cardTitle}>Senin</Text>
            <View style={styles.contentContainer}>
              <View>
                <Text style={styles.cardContent}>Makan Pagi</Text>
                <Text style={styles.cardContent}>Snack</Text>
                <Text style={styles.cardContent}>Makan Siang</Text>
                <Text style={styles.cardContent}>Snack</Text>
                <Text style={styles.cardContent}>Makan Malam</Text>
              </View>
              <View style={styles.cardContent2View}>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.mp_k1 +
                      this.state.mp_ph1 +
                      this.state.mp_pn1 +
                      this.state.mp_s1 +
                      this.state.mp_b1
                  )}
                </Text>
                <Text style={styles.cardContent2}>
                  : {this.cutString(this.state.s11)}
                </Text>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.ms_k1 +
                      this.state.ms_ph1 +
                      this.state.ms_pn1 +
                      this.state.ms_s1 +
                      this.state.ms_b1
                  )}
                </Text>
                <Text style={styles.cardContent2}>
                  : {this.cutString(this.state.s21)}
                </Text>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.mm_k1 +
                      this.state.mm_ph1 +
                      this.state.mm_pn1 +
                      this.state.mm_s1 +
                      this.state.mm_b1
                  )}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* end card senin */}
          {/* card selasa */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.goToDiaryView("selasa")}
          >
            <Text style={styles.cardTitle}>Selasa</Text>
            <View style={styles.contentContainer}>
              <View>
                <Text style={styles.cardContent}>Makan Pagi</Text>
                <Text style={styles.cardContent}>Snack</Text>
                <Text style={styles.cardContent}>Makan Siang</Text>
                <Text style={styles.cardContent}>Snack</Text>
                <Text style={styles.cardContent}>Makan Malam</Text>
              </View>
              <View style={styles.cardContent2View}>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.mp_k2 +
                      this.state.mp_ph2 +
                      this.state.mp_pn2 +
                      this.state.mp_s2 +
                      this.state.mp_b2
                  )}
                </Text>
                <Text style={styles.cardContent2}>
                  : {this.cutString(this.state.s12)}
                </Text>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.ms_k2 +
                      this.state.ms_ph2 +
                      this.state.ms_pn2 +
                      this.state.ms_s2 +
                      this.state.ms_b2
                  )}
                </Text>
                <Text style={styles.cardContent2}>
                  : {this.cutString(this.state.s22)}
                </Text>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.mm_k2 +
                      this.state.mm_ph2 +
                      this.state.mm_pn2 +
                      this.state.mm_s2 +
                      this.state.mm_b2
                  )}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* end card selasa */}
          {/* card rabu */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.goToDiaryView("rabu")}
          >
            <Text style={styles.cardTitle}>Rabu</Text>
            <View style={styles.contentContainer}>
              <View>
                <Text style={styles.cardContent}>Makan Pagi</Text>
                <Text style={styles.cardContent}>Snack</Text>
                <Text style={styles.cardContent}>Makan Siang</Text>
                <Text style={styles.cardContent}>Snack</Text>
                <Text style={styles.cardContent}>Makan Malam</Text>
              </View>
              <View style={styles.cardContent2View}>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.mp_k3 +
                      this.state.mp_ph3 +
                      this.state.mp_pn3 +
                      this.state.mp_s3 +
                      this.state.mp_b3
                  )}
                </Text>
                <Text style={styles.cardContent2}>
                  : {this.cutString(this.state.s13)}
                </Text>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.ms_k3 +
                      this.state.ms_ph3 +
                      this.state.ms_pn3 +
                      this.state.ms_s3 +
                      this.state.ms_b3
                  )}
                </Text>
                <Text style={styles.cardContent2}>
                  : {this.cutString(this.state.s23)}
                </Text>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.mm_k3 +
                      this.state.mm_ph3 +
                      this.state.mm_pn3 +
                      this.state.mm_s3 +
                      this.state.mm_b3
                  )}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* end card rabu */}
          {/* card kamis */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.goToDiaryView("kamis")}
          >
            <Text style={styles.cardTitle}>Kamis</Text>
            <View style={styles.contentContainer}>
              <View>
                <Text style={styles.cardContent}>Makan Pagi</Text>
                <Text style={styles.cardContent}>Snack</Text>
                <Text style={styles.cardContent}>Makan Siang</Text>
                <Text style={styles.cardContent}>Snack</Text>
                <Text style={styles.cardContent}>Makan Malam</Text>
              </View>
              <View style={styles.cardContent2View}>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.mp_k4 +
                      this.state.mp_ph4 +
                      this.state.mp_pn4 +
                      this.state.mp_s4 +
                      this.state.mp_b4
                  )}
                </Text>
                <Text style={styles.cardContent2}>
                  : {this.cutString(this.state.s14)}
                </Text>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.ms_k4 +
                      this.state.ms_ph4 +
                      this.state.ms_pn4 +
                      this.state.ms_s4 +
                      this.state.ms_b4
                  )}
                </Text>
                <Text style={styles.cardContent2}>
                  : {this.cutString(this.state.s24)}
                </Text>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.mm_k4 +
                      this.state.mm_ph4 +
                      this.state.mm_pn4 +
                      this.state.mm_s4 +
                      this.state.mm_b4
                  )}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* end card kamis */}
          {/* card jumat */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.goToDiaryView("jumat")}
          >
            <Text style={styles.cardTitle}>Jumat</Text>
            <View style={styles.contentContainer}>
              <View>
                <Text style={styles.cardContent}>Makan Pagi</Text>
                <Text style={styles.cardContent}>Snack</Text>
                <Text style={styles.cardContent}>Makan Siang</Text>
                <Text style={styles.cardContent}>Snack</Text>
                <Text style={styles.cardContent}>Makan Malam</Text>
              </View>
              <View style={styles.cardContent2View}>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.mp_k5 +
                      this.state.mp_ph5 +
                      this.state.mp_pn5 +
                      this.state.mp_s5 +
                      this.state.mp_b5
                  )}
                </Text>
                <Text style={styles.cardContent2}>
                  : {this.cutString(this.state.s15)}
                </Text>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.ms_k5 +
                      this.state.ms_ph5 +
                      this.state.ms_pn5 +
                      this.state.ms_s5 +
                      this.state.ms_b5
                  )}
                </Text>
                <Text style={styles.cardContent2}>
                  : {this.cutString(this.state.s25)}
                </Text>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.mm_k5 +
                      this.state.mm_ph5 +
                      this.state.mm_pn5 +
                      this.state.mm_s5 +
                      this.state.mm_b5
                  )}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* end card jumat */}
          {/* card sabtu */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.goToDiaryView("sabtu")}
          >
            <Text style={styles.cardTitle}>Sabtu</Text>
            <View style={styles.contentContainer}>
              <View>
                <Text style={styles.cardContent}>Makan Pagi</Text>
                <Text style={styles.cardContent}>Snack</Text>
                <Text style={styles.cardContent}>Makan Siang</Text>
                <Text style={styles.cardContent}>Snack</Text>
                <Text style={styles.cardContent}>Makan Malam</Text>
              </View>
              <View style={styles.cardContent2View}>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.mp_k6 +
                      this.state.mp_ph6 +
                      this.state.mp_pn6 +
                      this.state.mp_s6 +
                      this.state.mp_b6
                  )}
                </Text>
                <Text style={styles.cardContent2}>
                  : {this.cutString(this.state.s16)}
                </Text>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.ms_k6 +
                      this.state.ms_ph6 +
                      this.state.ms_pn6 +
                      this.state.ms_s6 +
                      this.state.ms_b6
                  )}
                </Text>
                <Text style={styles.cardContent2}>
                  : {this.cutString(this.state.s26)}
                </Text>
                <Text style={styles.cardContent2}>
                  :{" "}
                  {this.cutString(
                    this.state.mm_k6 +
                      this.state.mm_ph6 +
                      this.state.mm_pn6 +
                      this.state.mm_s6 +
                      this.state.mm_b6
                  )}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* end card sabtu */}
          {/* card minggu */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => this.goToDiaryView("minggu")}
          >
            <Text style={styles.cardTitle}>Minggu</Text>
            <View style={styles.contentContainer}>
              <View>
                <Text style={styles.cardContent}>Makan Pagi</Text>
                <Text style={styles.cardContent}>Snack</Text>
                <Text style={styles.cardContent}>Makan Siang</Text>
                <Text style={styles.cardContent}>Snack</Text>
                <Text style={styles.cardContent}>Makan Malam</Text>
              </View>
              <View style={styles.cardContent2View}>
                <Text style={styles.cardContent2}>
                  : {this.state.mp_k7}
                  {this.state.mp_ph7}
                  {this.state.mp_pn7}
                  {this.state.mp_s7}
                  {this.state.mp_b7}
                </Text>
                <Text style={styles.cardContent2}>: {this.state.s17}</Text>
                <Text style={styles.cardContent2}>
                  : {this.state.ms_k7}
                  {this.state.ms_ph7}
                  {this.state.ms_pn7}
                  {this.state.ms_s7}
                  {this.state.ms_b7}
                </Text>
                <Text style={styles.cardContent2}>: {this.state.s27}</Text>
                <Text style={styles.cardContent2}>
                  : {this.state.mm_k7}
                  {this.state.mm_ph7}
                  {this.state.mm_pn7}
                  {this.state.mm_s7}
                  {this.state.mm_b7}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* end card minggu */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Dimensions.get("window").width / 30,
  },
  pickerView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  ddMinggu: {
    width: Dimensions.get("window").width / 3.5,
    height: 30,
  },
  pickerStyle: {
    margin: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  cardView: {
    paddingBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9e9d9d",
    marginVertical: 5,
  },
  cardContent: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  cardContent2: {
    fontSize: 16,
    color: "black",
  },
  cardContent2View: {
    marginLeft: 10,
  },
  card: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#b8b8b8",
  },
  contentContainer: {
    flexDirection: "row",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
