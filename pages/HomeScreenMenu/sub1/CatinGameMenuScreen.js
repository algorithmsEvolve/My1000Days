//This is an example code for Bottom Navigation//
import React from "react";
//import react in our code.
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ToastAndroid,
} from "react-native";
import { AppLoading } from "expo";
import { Audio } from "expo-av";
import "../../HomeScreen";
//import all the basic component we have used
export default class CatinGameMenuScreen extends React.Component {
  state = {
    timer: 20,
    fontLoaded: false,
    isisoal: this.soal(0),
    nomor: 1,
    bgcolorA: "teal",
    bgcolorB: "teal",
    bgcolorC: "teal",
    bgcolorD: "teal",
    jA3: "1000 Hari Pertama Kelahiran",
    jB3: "1000 Hari Pertama Kehidupan",
    jC3: "1000 Hari Pernikahan di Kehidupan",
    jD3: "1000 Hari Pernikahan dan Kelahiran",
    nextButton: "Next",
  };
  async componentDidMount() {
    await Expo.Font.loadAsync({
      "GoogleSans-Regular": require("../../../assets/fonts/GoogleSans-Regular.ttf"),
    });
    this.setState({ fontLoaded: true });
    this.interval = setInterval(
      () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
      1000
    );
    try {
      await quizAudio.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }
  async componentWillUnmount() {
    global.menu = "app";
    quizAudio.pauseAsync();
    homeAudio.playAsync();
    victoryAudio.stopAsync();
  }
  componentDidUpdate() {
    if (this.state.timer === 0) {
      clearInterval(this.interval);
      global.pressed = 2;
      ToastAndroid.showWithGravity(
        "Waktu Kamu Habis!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      this.setState({
        timer: "Klik 'Next' untuk soal selanjutnya...",
        buttonToNext: (
          <TouchableOpacity
            style={styles.nextPrevItem}
            onPress={this.nextAction}
          >
            <Text styles={styles.fontNP}>Next</Text>
          </TouchableOpacity>
        ),
      });
    }
  }
  //Guide Screen to show in Guide Option

  constructor(props) {
    super(props);
    global.menu = "game";
    homeAudio.pauseAsync();
    quizAudio.playAsync();
    global.jumlahSoal3 = 14;
    global.start3 = 0;
    global.nilai = 0;
    global.pressed = 1;
    global.indicator = start3;
    global.stop3 = start3;
  }
  nextAction = () => {
    global.indicator++;
    global.pressed = 1;
    clearInterval(this.interval);
    this.setState({
      timer: 20,
      buttonToNext: <Text></Text>,
    });
    this.interval = setInterval(
      () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
      1000
    );
    if (global.indicator == 15) {
      quizAudio.stopAsync();
      victoryAudio.stopAsync();
      victoryAudio.playAsync();
      global.stop3 = 69;
      clearInterval(this.interval);
      this.setState({
        timer: "Kuis Selesai!",
        nomor: 15,
        isisoal: "Nilai kamu: " + global.nilai + " dari 15",
        jA3: "",
        jB3: "",
        jC3: "",
        jD3: "",
        nextButton: "",
        bgcolorA: "teal",
        bgcolorB: "teal",
        bgcolorC: "teal",
        bgcolorD: "teal",
      });
    } else if (global.stop3 != 69) {
      var jml = this.state.nomor + 1;
      this.jawaban(global.indicator);
      this.setState({
        isisoal: this.soal(global.indicator),
        nomor: jml,
        bgcolorA: "teal",
        bgcolorB: "teal",
        bgcolorC: "teal",
        bgcolorD: "teal",
      });
    }
  };

  //scoring
  scoreA = () => {
    if (this.state.timer < 1) {
      global.pressed = 2;
    }
    if (global.pressed == 1) {
      if (global.indicator == 9 || global.indicator == 12) {
        global.nilai++;
        this.setState({
          bgcolorA: "green",
        });
      } else {
        this.setState({
          bgcolorA: "red",
        });
      }
      clearInterval(this.interval);
      this.setState({
        timer: "Menuju soal selanjutnya...",
      });
      this.interval = setInterval(() => this.nextAction(), 2000);
    }
    global.pressed = 2;
  };

  scoreB = () => {
    if (this.state.timer < 1) {
      global.pressed = 2;
    }
    if (global.pressed == 1) {
      if (
        global.indicator == 0 ||
        global.indicator == 4 ||
        global.indicator == 5 ||
        global.indicator == 6 ||
        global.indicator == 7 ||
        global.indicator == 13
      ) {
        global.nilai++;
        this.setState({
          bgcolorB: "green",
        });
      } else {
        this.setState({
          bgcolorB: "red",
        });
      }
      clearInterval(this.interval);
      this.setState({
        timer: "Menuju soal selanjutnya...",
      });
      this.interval = setInterval(() => this.nextAction(), 2000);
    }
    global.pressed = 2;
  };

  scoreC = () => {
    if (this.state.timer < 1) {
      global.pressed = 2;
    }
    if (global.pressed == 1) {
      if (
        global.indicator == 1 ||
        global.indicator == 2 ||
        global.indicator == 3 ||
        global.indicator == 14
      ) {
        global.nilai++;
        this.setState({
          bgcolorC: "green",
        });
      } else {
        this.setState({
          bgcolorC: "red",
        });
      }
      clearInterval(this.interval);
      this.setState({
        timer: "Menuju soal selanjutnya...",
      });
      this.interval = setInterval(() => this.nextAction(), 2000);
    }
    global.pressed = 2;
  };

  scoreD = () => {
    if (this.state.timer < 1) {
      global.pressed = 2;
    }
    if (global.pressed == 1) {
      if (
        global.indicator == 8 ||
        global.indicator == 10 ||
        global.indicator == 11
      ) {
        global.nilai++;
        this.setState({
          bgcolorD: "green",
        });
      } else {
        this.setState({
          bgcolorD: "red",
        });
      }
      clearInterval(this.interval);
      this.setState({
        timer: "Menuju soal selanjutnya...",
      });
      this.interval = setInterval(() => this.nextAction(), 2000);
    }
    global.pressed = 2;
  };
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <ScrollView style={styles.SVcontainer}>
        <View style={styles.container}>
          <View style={styles.titleInfo}>
            <Text style={styles.fontTitle}>Kuis Cerdas {this.state.nomor}</Text>
          </View>
          <View style={styles.timer}>
            <Image
              source={require("../../../assets/images/game-icon/timer-icon.png")}
              style={styles.timerIconStyle}
            />
            <Text style={styles.redFont}> {this.state.timer} </Text>
          </View>
          <View style={styles.questionStyle}>
            <Text style={styles.fontQuestion}>{this.state.isisoal}</Text>
          </View>
          <View style={styles.answerStyle}>
            <TouchableOpacity
              style={{
                flex: 1,
                width: "100%",
                maxHeight: "50%",
                alignItems: "center",
                justifyContent: "center",
                margin: 5,
                padding: 5,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 20,
                backgroundColor: this.state.bgcolorA,
              }}
              onPress={this.scoreA}
            >
              <Text style={styles.fontGS}>{this.state.jA3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                width: "100%",
                maxHeight: "50%",
                alignItems: "center",
                justifyContent: "center",
                margin: 5,
                padding: 5,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 20,
                backgroundColor: this.state.bgcolorB,
              }}
              onPress={this.scoreB}
            >
              <Text style={styles.fontGS}>{this.state.jB3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                width: "100%",
                maxHeight: "50%",
                alignItems: "center",
                justifyContent: "center",
                margin: 5,
                padding: 5,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 20,
                backgroundColor: this.state.bgcolorC,
              }}
              onPress={this.scoreC}
            >
              <Text style={styles.fontGS}>{this.state.jC3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                width: "100%",
                maxHeight: "50%",
                alignItems: "center",
                justifyContent: "center",
                margin: 5,
                padding: 5,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 20,
                backgroundColor: this.state.bgcolorD,
              }}
              onPress={this.scoreD}
            >
              <Text style={styles.fontGS}>{this.state.jD3}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nextPrev}>{this.state.buttonToNext}</View>
        </View>
      </ScrollView>
    );
  }

  soal(no) {
    switch (no) {
      case 0:
        return "Apa kepanjangan 1000 HPK?";
        break;
      case 1:
        return "Salah satu fokus utama penanganan masalah gizi pada Wanita Usia Subur dalam 1000 HPK adalah?";
        break;
      case 2:
        return "Sampai usia berapa periode emas (golden period) terjadi?";
        break;
      case 3:
        return "Bagaimana susunan makanan untuk catin sesuai dengan pedoman gizi seimbang?";
        break;
      case 4:
        return "Apa yang dimaksud 1000 HPK?";
        break;
      case 5:
        return "Apa zat gizi yang harus dikonsumsi catin untuk mencegah terjadinya anemia?";
        break;
      case 6:
        return "Berapa kadar normal Hb pada catin?";
        break;
      case 7:
        return "Berat badan ibu sebelum hamil adalah faktor yang sangat penting. Berapa IMT Normal pada catin?";
        break;
      case 8:
        return "Berapa LiLA catin untuk persiapan kehamilan?";
        break;
      case 9:
        return "Bagaimana urutan masa penentu berhasilnya 1000 HPK?";
        break;
      case 10:
        return "Cinta memiliki IMT 29,9 maka status gizi cinta adalah?";
        break;
      case 11:
        return "Yang bukan termasuk 4 pilar gizi seimbang?";
        break;
      case 12:
        return "Berikut adalah makanan yang mengandung sumber zat besi tertinggi?";
        break;
      case 13:
        return "suplementasi zat besi yang harus dikonsumsi catin adalah?";
        break;
      case 14:
        return "cinta memiliki tinggi badan 160 cm dan berat badan 60 kg. Berapa berat badan ideal cinta?";
        break;
      default:
        return "Tekan Next untuk mulai";
    }
  }

  jawaban(no) {
    switch (no) {
      case 0:
        this.setState({
          jA3: "1000 Hari Pertama Kelahiran",
          jB3: "1000 Hari Pertama Kehidupan",
          jC3: "1000 Hari Pernikahan di Kehidupan",
          jD3: "1000 Hari Pernikahan dan Kelahiran",
        });
        break;
      case 1:
        this.setState({
          jA3: "Angka kejadian hipertensi",
          jB3: "Angka kejadian DM",
          jC3: "Angka kejadian anemia",
          jD3: "Angka kejadian mual-muntah",
        });
        break;
      case 2:
        this.setState({
          jA3: "Dari masa kehamilan sampai anak usia 6 bulan",
          jB3: "Dari masa kehamilan sampai anak usia 12 bulan",
          jC3: "Dari masa kehamilan sampai anak usia 24 bulan",
          jD3: "Dari masa kehamilan sampai anak usia 30 bulan",
        });
        break;
      case 3:
        this.setState({
          jA3: "Nasi, lauk hewani, sayur",
          jB3: "Nasi, lauk hewani, lauk nabati, sayur",
          jC3: "Nasi, lauk hewani, lauk nabati, sayur dan buah",
          jD3: "Nasi, lauk nabati dan buah",
        });
        break;
      case 4:
        this.setState({
          jA3:
            "Seribu hari terdiri dari, 280 hari selama kehamilan dan kehidupan pertama sejak bayi dilahirkan sampai usia 24 bulan",
          jB3:
            "Seribu hari terdiri dari, 270 hari selama kehamilan dan kehidupan pertama sejak bayi dilahirkan sampai usia 24 bulan",
          jC3:
            "Seribu hari terdiri dari, 260 hari selama kehamilan dan kehidupan pertama sejak bayi dilahirkan sampai usia 24 bulan",
          jD3:
            "Seribu hari terdiri dari, 250 hari selama kehamilan dan kehidupan pertama sejak bayi dilahirkan sampai usia 24 bulan",
        });
        break;
      case 5:
        this.setState({
          jA3: "Zink",
          jB3: "Fe (Besi)",
          jC3: "Natrium",
          jD3: "Vitamin B",
        });
        break;
      case 6:
        this.setState({
          jA3: "8-11 gr/dL",
          jB3: "12-16 gr/dL",
          jC3: "16-20 gr/dL",
          jD3: "21-25 gr/dL",
        });
        break;
      case 7:
        this.setState({
          jA3: "<18",
          jB3: "21-22",
          jC3: "25",
          jD3: ">30",
        });
        break;
      case 8:
        this.setState({
          jA3: "20 cm",
          jB3: "21,5 cm",
          jC3: "22 cm",
          jD3: "23,5 cm",
        });
        break;
      case 9:
        this.setState({
          jA3: "Gizi prakonsepsi, Gizi konsepsi, Gizi bayi 0-2 tahun",
          jB3: "Gizi prakonsepsi, Gizi bayi 0-2 tahun, Gizi konsepsI",
          jC3: "Gizi bayi 0-2 tahun, Gizi konsepsi, Gizi prakonsepsi",
          jD3: "Gizi bayi 0-2 tahun, Gizi prakonsepsi, Gizi konsepsi",
        });
        break;
      case 10:
        this.setState({
          jA3: "Underweight",
          jB3: "Normal",
          jC3: "Overweight",
          jD3: "Obesitas I",
        });
        break;
      case 11:
        this.setState({
          jA3: "makan yang beragam",
          jB3: "rajin berolahraga",
          jC3: "pantau berat badan",
          jD3: "hidup kurang sehat",
        });
        break;
      case 12:
        this.setState({
          jA3: "hati ayam",
          jB3: "kangkung",
          jC3: "ayam bagian dada",
          jD3: "bayam",
        });
        break;
      case 13:
        this.setState({
          jA3: "tablet vitamin c",
          jB3: "tablet tambah darah",
          jC3: "tablet zinc",
          jD3: "tablet kalsium",
        });
        break;
      case 14:
        this.setState({
          jA3: "60 kg",
          jB3: "57 kg",
          jC3: "54 kg",
          jD3: "51 kg",
        });
        break;
      default:
        this.setState({
          jA3: "",
          jB3: "",
          jC3: "",
          jD3: "",
        });
    }
  }
}
const styles = StyleSheet.create({
  SVcontainer: {
    flex: 1,
    height: "100%",
  },
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  titleInfo: {
    flex: 1,
    width: "100%",
    height: 20,
    maxHeight: "10%",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
  },
  questionStyle: {
    flex: 2,
    width: "100%",
    height: 300,
    maxHeight: "30%",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 25,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    backgroundColor: "white",
  },
  answerStyle: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  answerChoice: {
    flex: 1,
    width: "100%",
    maxHeight: "50%",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    backgroundColor: "teal",
  },
  fontGS: {
    fontFamily: "GoogleSans-Regular",
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  fontTitle: {
    fontFamily: "GoogleSans-Regular",
    textAlign: "center",
    fontSize: 20,
  },
  fontQuestion: {
    fontFamily: "GoogleSans-Regular",
    textAlign: "center",
    fontSize: 20,
  },
  nextPrev: {
    flex: 1,
    flexDirection: "row",
  },
  nextPrevItem: {
    flex: 1,
    width: "100%",
    maxHeight: "30%",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginTop: 50,
    padding: 5,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    backgroundColor: "white",
  },
  fontNP: {
    fontFamily: "GoogleSans-Regular",
    fontSize: 15,
  },
  timer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  redFont: {
    fontFamily: "GoogleSans-Regular",
    textAlign: "center",
    fontSize: 20,
    color: "red",
  },
  timerIconStyle: {
    width: 30,
    height: 30,
  },
});
