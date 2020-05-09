//This is an example code for Bottom Navigation//
import React, { Component } from "react";
//import react in our code.
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
//import all the basic component we have used

export default class DiaryEditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: <View></View>,
      isDatePickerVisible: false,
      on: "",
      mp_l: "",
      ms_l: "",
      mm_l: "",
      file: "",
      menu: "",
      hari: "",
      minggu: "",
      bulan: "",
      tahun: "",
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
        // get file content
        AsyncStorage.getItem(file.file)
          .then((value) => {
            const content = JSON.parse(value);
            this.setState({
              mp_l: content.mp_l,
              ms_l: content.ms_l,
              mm_l: content.mm_l,
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

  setNotes = (indicator) => {
    if (indicator == "bayi1") {
      return "Protein nabati boleh tidak ditambahkan atau hanya ditambahkan sedikit saja.";
    } else if (indicator == "bayi2") {
      return "Sayur dan buah hanya sebagai bentuk pengenalan sehingga boleh tidak ditambahkan atau hanya ditambahkan sedikit saja.";
    } else if (indicator == "bayi3") {
      return "Sayur dan buah bisa dijadikan sebagai snack seperti pure buah (6-8bulan) dan snack dapat berupa biskuit bayi atau finger food dari buah dan sayur mulai dari 9 bulan.";
    } else if (indicator == "bayi0") {
      return "Catatan";
    } else {
      return "";
    }
  };
  componentWillUnmount() {
    this.props.navigation.state.params.onNavigateBack(this.state.mp_k);
    this.props.navigation.goBack();
  }

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
  simpanFile = () => {
    const fileBaru = {
      mp_l: this.state.mp_l,
      ms_l: this.state.ms_l,
      mm_l: this.state.mm_l,
      mp_w: this.state.mp_w,
      ms_w: this.state.ms_w,
      mm_w: this.state.mm_w,
      s1_w: this.state.s1_w,
      s2_w: this.state.s2_w,
      mp_k: this.state.mp_k,
      mp_ph: this.state.mp_ph,
      mp_pn: this.state.mp_pn,
      mp_s: this.state.mp_s,
      mp_b: this.state.mp_b,
      s1: this.state.s1,
      ms_k: this.state.ms_k,
      ms_ph: this.state.ms_ph,
      ms_pn: this.state.ms_pn,
      ms_s: this.state.ms_s,
      ms_b: this.state.ms_b,
      s2: this.state.s2,
      mm_k: this.state.mm_k,
      mm_ph: this.state.mm_ph,
      mm_pn: this.state.mm_pn,
      mm_s: this.state.mm_s,
      mm_b: this.state.mm_b,
    };
    AsyncStorage.setItem(this.state.file, JSON.stringify(fileBaru));
    this.props.navigation.navigate("DiaryView");
  };
  kembali = () => {
    this.props.navigation.navigate("DiaryView");
  };

  //timepicker
  showPicker = (on) => {
    this.setState({ isDatePickerVisible: true, on: on });
  };
  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  handleDatePicked = (date) => {
    if (date.getHours() < 10 && date.getMinutes() >= 10) {
      var time = "0" + date.getHours() + ":" + date.getMinutes();
    } else if (date.getHours() < 10 && date.getMinutes() < 10) {
      var time = "0" + date.getHours() + ":0" + date.getMinutes();
    } else if (date.getHours() >= 10 && date.getMinutes() < 10) {
      var time = date.getHours() + ":0" + date.getMinutes();
    } else {
      var time = date.getHours() + ":" + date.getMinutes();
    }
    this.setState({
      ["" + this.state.on]: time,
    });
    this.hideDatePicker();
  };

  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };

  showTime = (value) => {
    if (value == undefined) {
      return "Masukkan Waktu yang diinginkan";
    } else {
      return value;
    }
  };
  // end timepicker

  render() {
    return (
      <ScrollView>
        {/* timepicker */}
        <DateTimePicker
          mode="time"
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDatePicker}
        />
        {/* end time picker */}
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
            <Text style={styles.fontTitle}>Makan Pagi</Text>
            <View style={styles.content}>
              <View style={styles.contentB}>
                {/* time picker */}
                <Text style={styles.fontContentT}>Waktu</Text>
                <TouchableOpacity
                  style={styles.tpButton}
                  onPress={() => this.showPicker("mp_w")}
                >
                  <Text style={styles.tpFont}>
                    {this.showTime(this.state.mp_w)}
                  </Text>
                </TouchableOpacity>
                {/* end time picker */}
                <Text style={styles.fontContentT}>Karbohidrat</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Makanan Sumber Karbohidrat"
                  onChangeText={(mp_k) => this.setState({ mp_k })}
                  value={this.state.mp_k}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Protein Hewani</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Makanan Sumber Protein Hewani"
                  onChangeText={(mp_ph) => this.setState({ mp_ph })}
                  value={this.state.mp_ph}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Protein Nabati</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Makanan Sumber Protein Nabati"
                  onChangeText={(mp_pn) => this.setState({ mp_pn })}
                  value={this.state.mp_pn}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Sayur</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Sayur"
                  onChangeText={(mp_s) => this.setState({ mp_s })}
                  value={this.state.mp_s}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Buah</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Buah"
                  onChangeText={(mp_b) => this.setState({ mp_b })}
                  value={this.state.mp_b}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Lemak</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Makanan Sumber Lemak"
                  onChangeText={(mp_l) => this.setState({ mp_l })}
                  value={this.state.mp_l}
                  multiline={true}
                />
              </View>
            </View>
          </View>
          {/* snack 1 */}
          <View style={styles.card}>
            <Text style={styles.fontTitle}>Snack</Text>
            <View style={styles.content}>
              <View style={styles.contentB}>
                {/* time picker */}
                <Text style={styles.fontContentT}>Waktu</Text>
                <TouchableOpacity
                  style={styles.tpButton}
                  onPress={() => this.showPicker("s1_w")}
                >
                  <Text style={styles.tpFont}>
                    {this.showTime(this.state.s1_w)}
                  </Text>
                </TouchableOpacity>
                {/* end time picker */}
                <Text style={styles.fontContentT}>Cemilan</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Cemilan"
                  onChangeText={(s1) => this.setState({ s1 })}
                  value={this.state.s1}
                  multiline={true}
                />
              </View>
            </View>
          </View>
          {/* makan siang */}
          <View style={styles.card}>
            <Text style={styles.fontTitle}>Makan Siang</Text>
            <View style={styles.content}>
              <View style={styles.contentB}>
                {/* time picker */}
                <Text style={styles.fontContentT}>Waktu</Text>
                <TouchableOpacity
                  style={styles.tpButton}
                  onPress={() => this.showPicker("ms_w")}
                >
                  <Text style={styles.tpFont}>
                    {this.showTime(this.state.ms_w)}
                  </Text>
                </TouchableOpacity>
                {/* end time picker */}
                <Text style={styles.fontContentT}>Karbohidrat</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Makanan Sumber Karbohidrat"
                  onChangeText={(ms_k) => this.setState({ ms_k })}
                  value={this.state.ms_k}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Protein Hewani</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Makanan Sumber Protein Hewani"
                  onChangeText={(ms_ph) => this.setState({ ms_ph })}
                  value={this.state.ms_ph}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Protein Nabati</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Makanan Sumber Protein Nabati"
                  onChangeText={(ms_pn) => this.setState({ ms_pn })}
                  value={this.state.ms_pn}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Sayur</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Sayur"
                  onChangeText={(ms_s) => this.setState({ ms_s })}
                  value={this.state.ms_s}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Buah</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Buah"
                  onChangeText={(ms_b) => this.setState({ ms_b })}
                  value={this.state.ms_b}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Lemak</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Makanan Sumber Lemak"
                  onChangeText={(ms_l) => this.setState({ ms_l })}
                  value={this.state.ms_l}
                  multiline={true}
                />
              </View>
            </View>
          </View>
          {/* snack 2 */}
          <View style={styles.card}>
            <Text style={styles.fontTitle}>Snack</Text>
            <View style={styles.content}>
              <View style={styles.contentB}>
                {/* time picker */}
                <Text style={styles.fontContentT}>Waktu</Text>
                <TouchableOpacity
                  style={styles.tpButton}
                  onPress={() => this.showPicker("s2_w")}
                >
                  <Text style={styles.tpFont}>
                    {this.showTime(this.state.s2_w)}
                  </Text>
                </TouchableOpacity>
                {/* end time picker */}
                <Text style={styles.fontContentT}>Cemilan</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Cemilan"
                  onChangeText={(s2) => this.setState({ s2 })}
                  value={this.state.s2}
                  multiline={true}
                />
              </View>
            </View>
          </View>
          {/* makan malam */}
          <View style={styles.card}>
            <Text style={styles.fontTitle}>Makan Malam</Text>
            <View style={styles.content}>
              <View style={styles.contentB}>
                {/* time picker */}
                <Text style={styles.fontContentT}>Waktu</Text>
                <TouchableOpacity
                  style={styles.tpButton}
                  onPress={() => this.showPicker("mm_w")}
                >
                  <Text style={styles.tpFont}>
                    {this.showTime(this.state.mm_w)}
                  </Text>
                </TouchableOpacity>
                {/* end time picker */}
                <Text style={styles.fontContentT}>Karbohidrat</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Makanan Sumber Karbohidrat"
                  onChangeText={(mm_k) => this.setState({ mm_k })}
                  value={this.state.mm_k}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Protein Hewani</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Makanan Sumber Protein Hewani"
                  onChangeText={(mm_ph) => this.setState({ mm_ph })}
                  value={this.state.mm_ph}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Protein Nabati</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Makanan Sumber Protein Nabati"
                  onChangeText={(mm_pn) => this.setState({ mm_pn })}
                  value={this.state.mm_pn}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Sayur</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Sayur"
                  onChangeText={(mm_s) => this.setState({ mm_s })}
                  value={this.state.mm_s}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Buah</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Buah"
                  onChangeText={(mm_b) => this.setState({ mm_b })}
                  value={this.state.mm_b}
                  multiline={true}
                />
                <Text style={styles.fontContentT}>Lemak</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukkan Makanan Sumber Lemak"
                  onChangeText={(mm_l) => this.setState({ mm_l })}
                  value={this.state.mm_l}
                  multiline={true}
                />
              </View>
            </View>
          </View>
          {/* end makan malam */}
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
        {/* notes */}
        <View style={styles.conatinNotes}>
          <Text style={styles.fontNotesHeader}>
            {this.setNotes(this.state.menu + "0")}
          </Text>
          <Text style={styles.fontNotes}>
            {this.setNotes(this.state.menu + "1")}
          </Text>
          <Text style={styles.fontNotes}>
            {this.setNotes(this.state.menu + "2")}
          </Text>
          <Text style={styles.fontNotes}>
            {this.setNotes(this.state.menu + "3")}
          </Text>
        </View>
        {/* end notes */}
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
    paddingHorizontal: 20,
    width: Dimensions.get("window").width / 6,
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
  textInput: {
    height: 40,
    width: (Dimensions.get("window").width / 5) * 4,
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },
  buttonView: {
    paddingVertical: Dimensions.get("window").width / 28,
    paddingHorizontal: Dimensions.get("window").width / 28,
    flexDirection: "row",
  },
  simpanButton: {
    alignSelf: "flex-start",
    marginHorizontal: 5,
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
    paddingHorizontal: 5,
    fontSize: 16,
    textAlign: "center",
  },
  fontBatalButton: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  tpButton: {
    justifyContent: "center",
    height: 40,
    width: (Dimensions.get("window").width / 5) * 4,
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },
  tpFont: {
    fontSize: 14,
    color: "#c9c6c5",
  },
  conatinNotes: {
    padding: Dimensions.get("window").width / 30,
    justifyContent: "center",
    alignItems: "center",
  },
  fontNotes: {
    textAlign: "justify",
    color: "red",
    fontSize: 14,
  },
  fontNotesHeader: {
    textAlign: "left",
    color: "red",
    fontSize: 18,
  },
});
