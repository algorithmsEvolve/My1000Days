//This is an example code for Bottom Navigation//
import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { RadioButton } from "react-native-paper";
//import react in our code.
//import all the basic component we have used

export default class EditTabletScreen extends React.Component {
  constructor(props) {
    super(props);
    //get tanggal
    let today = new Date();
    global.nowDate =
      today.getDate() +
      "/" +
      parseInt(today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    // end get tanggal
    this.state = {
      file: "",
      date: global.nowDate,
      alasan: <View></View>,
      isiAlasan: "Masukkan alasan Anda",
      isDatePickerVisible: false,
      tablet: "",
      indicate: "",
      menu: "",
      checked: "ceklis",
    };
    //cek storage
    //get async storage
    AsyncStorage.getItem("on")
      .then((value) => {
        const on = JSON.parse(value);
        this.setState({
          tablet: on.on,
          checked: on.status,
          menu: on.menu,
        });
        if (this.state.menu == 1) {
          this.setState({
            file: "check1",
            indicate: this.state.tablet,
          });
        } else if (this.state.menu == 2) {
          this.setState({
            file: "check2",
            indicate: parseInt(this.state.tablet + 15),
          });
        } else if (this.state.menu == 3) {
          this.setState({
            file: "check3",
            indicate: parseInt(this.state.tablet + 30),
          });
        } else if (this.state.menu == 4) {
          this.setState({
            file: "check4",
            indicate: parseInt(this.state.tablet + 45),
          });
        } else if (this.state.menu == 5) {
          this.setState({
            file: "check5",
            indicate: parseInt(this.state.tablet + 60),
          });
        } else if (this.state.menu == 6) {
          this.setState({
            file: "check6",
            indicate: parseInt(this.state.tablet + 75),
          });
        }
        AsyncStorage.getItem("check" + this.state.menu)
          .then((value) => {
            const result = JSON.parse(value);
            this.setState({
              isiAlasan: result["alasan" + this.state.tablet],
              date: result["date" + this.state.tablet],
            });
            if (this.state.date == "-" || this.state.date == undefined) {
              this.setState({
                date: global.nowDate,
              });
            }
            if (this.state.checked == "silang") {
              this.openAlasan();
            } else if (
              this.state.checked == undefined ||
              this.state.checked == "" ||
              this.state.checked == null ||
              this.state.checked == "false"
            ) {
              this.setState({
                checked: "ceklis",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //timepicker
  showPicker = () => {
    this.setState({ isDatePickerVisible: true });
  };
  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  handleDatePicked = (date) => {
    let datePicked =
      date.getDate() +
      "/" +
      parseInt(date.getMonth() + 1) +
      "/" +
      date.getFullYear();
    this.setState({
      date: datePicked,
    });
    this.hideDatePicker();
  };

  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };
  componentWillUnmount() {
    this.props.navigation.state.params.onNavigateBack(this.state.tablet);
    this.props.navigation.goBack();
  }

  showTime = (value) => {
    if (value == undefined) {
      return global.nowDate;
    } else {
      return value;
    }
  };

  placeholder = (value) => {
    if (
      value == undefined ||
      value == "" ||
      value == "false" ||
      value == null
    ) {
      return "Masukkan alasan Anda";
    } else {
      return value;
    }
  };

  openAlasan = (value) => {
    this.setState({
      checked: "silang",
      alasan: (
        <View>
          <Text style={styles.fontLabel}>Alasan : {value}</Text>
          <TextInput
            style={styles.textInput}
            placeholder={this.placeholder(this.state.isiAlasan)}
            onChangeText={(alasanIsi) => this.setState({ alasanIsi })}
            value={this.state.alasanIsi}
            multiline={true}
          />
        </View>
      ),
    });
  };

  simpanFile = () => {
    const fileBaru = {
      ["date" + this.state.tablet]: this.state.date,
      ["status" + this.state.tablet]: this.state.checked,
      ["alasan" + this.state.tablet]: this.state.alasanIsi,
    };
    AsyncStorage.mergeItem(this.state.file, JSON.stringify(fileBaru));
    this.props.navigation.navigate("BumilTTDMenu" + this.state.menu);
  };
  kembali = () => {
    this.props.navigation.navigate("BumilTTDMenu" + this.state.menu);
  };
  // end timepicker
  //Exit Screen to show in Exit Option
  render() {
    return (
      <ScrollView>
        {/* timepicker */}
        <DateTimePicker
          mode="date"
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDatePicker}
        />
        {/* end time picker */}
        <View style={styles.header}>
          <Text style={styles.fontHeader}>Tablet ke-{this.state.indicate}</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.tglView}>
            <Text style={styles.fontLabel}>Tanggal:</Text>
            <TouchableOpacity
              style={styles.tpButton}
              onPress={() => this.showPicker()}
            >
              <Text style={styles.tpFont}>
                {this.showTime(this.state.date)}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.fontLabel}>
            Apakah Anda Mengonsumsi Tablet Tambah Darah?
          </Text>
          <View style={styles.rbView}>
            <RadioButton
              value="ceklis"
              color="red"
              status={this.state.checked === "ceklis" ? "checked" : "unchecked"}
              onPress={() => {
                this.setState({
                  checked: "ceklis",
                  alasan: <View></View>,
                  alasanIsi: undefined,
                });
              }}
            />
            <Text style={styles.fontLabel}>Ya</Text>
            <RadioButton
              value="silang"
              color="red"
              status={this.state.checked === "silang" ? "checked" : "unchecked"}
              onPress={() => this.openAlasan()}
            />
            <Text style={styles.fontLabel}>Tidak</Text>
          </View>
          {this.state.alasan}
        </View>
        {/* button */}
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => this.simpanFile()}>
            <View style={styles.simpanButton}>
              <Text style={styles.fontSimpanButton}>Simpan</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.kembali()}>
            <View style={styles.batalButton}>
              <Text style={styles.fontBatalButton}>Batal</Text>
            </View>
          </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingHorizontal: Dimensions.get("window").width / 30,
  },
  fontHeader: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  tpButton: {
    alignSelf: "flex-start",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  tpFont: {
    padding: 5,
    fontSize: 16,
    color: "grey",
  },
  rbView: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    height: Dimensions.get("window").height / 8,
    width: (Dimensions.get("window").width / 5) * 4,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  simpanButton: {
    alignSelf: "flex-start",
    marginRight: 5,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 2,
  },
  batalButton: {
    alignSelf: "flex-start",
    marginHorizontal: 5,
    padding: 5,
    backgroundColor: "red",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 2,
  },
  fontSimpanButton: {
    fontSize: 16,
    paddingHorizontal: 5,
    textAlign: "center",
  },
  fontBatalButton: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: "white",
    textAlign: "center",
  },
  fontLabel: {
    fontSize: 16,
    marginVertical: 10,
  },
  buttonView: {
    paddingVertical: Dimensions.get("window").width / 30,
    paddingHorizontal: Dimensions.get("window").width / 30,
    flexDirection: "row",
  },
  tglView: {
    alignSelf: "flex-start",
  },
});
