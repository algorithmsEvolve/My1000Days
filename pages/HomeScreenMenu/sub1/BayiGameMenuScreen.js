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
export default class BayiGameMenuScreen extends React.Component {
  //Guide Screen to show in Guide Option
  state = {
    timer: 20,
    fontLoaded: false,
    isisoal: this.soal(0),
    nomor: 1,
    bgcolorA: "teal",
    bgcolorB: "teal",
    bgcolorC: "teal",
    bgcolorD: "teal",
    jA3: "Pemantauan berat badan dan tinggi badan",
    jB3: "Kebersihan lingkungan",
    jC3: "Pemenuhan gizi pada fase 1000 HPK",
    jD3: "Ketidak inginan mencari informasi",
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
      victoryAudio.playAsync();
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
      if (
        global.indicator == 2 ||
        global.indicator == 6 ||
        global.indicator == 7 ||
        global.indicator == 13
      ) {
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
        global.indicator == 1 ||
        global.indicator == 3 ||
        global.indicator == 8 ||
        global.indicator == 10 ||
        global.indicator == 12
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
        global.indicator == 4 ||
        global.indicator == 11 ||
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
        global.indicator == 0 ||
        global.indicator == 5 ||
        global.indicator == 9
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

  //soal
  soal(no) {
    switch (no) {
      case 0:
        return "Yang bukan termasuk pencegahan stunting?";
        break;
      case 1:
        return "Berapa lama ASI eksklusif diberikan pada bayi?";
        break;
      case 2:
        return "Apa kegiatan yang dilakukan segera setelah bayi lahir?";
        break;
      case 3:
        return "Apa sebutan ASI pertama yang diproduksi oleh ibu dan berwarna kuning?";
        break;
      case 4:
        return "Kapan bayi mulai diberikan MPASI?";
        break;
      case 5:
        return "Berapa lama sebaiknya ASI diberikan pada bayi?";
        break;
      case 6:
        return "Berapa banyak makanan yang diberikan pada anak usia 6 bulan setiap kali makan?";
        break;
      case 7:
        return "Berapa kali makananan selingan/snack diberikan pada anak usia 6-24 bulan dalam satu hari?";
        break;
      case 8:
        return "Berapa kali frekuensi pemberian makan anak usia 6 bulan dalam satu hari?";
        break;
      case 9:
        return "Apa makanan yang tepat bagi bayi usia 12-23 bulan?";
        break;
      case 10:
        return "Kapan MP-ASI pertama kali dapat diberikan pada bayi?";
        break;
      case 11:
        return "Apa makanan yang tepat bagi bayi usia 6-8 bulan?";
        break;
      case 12:
        return "Apa makanan yang tepat bagi bayi usia 9-11 bulan?";
        break;
      case 13:
        return "Bagaimana penambahan lemak pada MPASI bubur saring?";
        break;
      case 14:
        return "Kapan anak mulai dikenalkan finger food (makanan yang dapat dipegang dengan potongan kecil?";
        break;
      default:
        return "";
    }
  }

  jawaban(no) {
    switch (no) {
      case 0:
        this.setState({
          jA3: "Pemantauan berat badan dan tinggi badan",
          jB3: "Kebersihan lingkungan",
          jC3: "Pemenuhan gizi pada fase 1000 HPK",
          jD3: "Ketidak inginan mencari informasi",
        });
        break;
      case 1:
        this.setState({
          jA3: "0-3 bulan",
          jB3: "0-6 bulan",
          jC3: "0-12 bulan",
          jD3: "12-24 bulan",
        });
        break;
      case 2:
        this.setState({
          jA3: "Inisiasi menyusu dini",
          jB3: "Inisiatif menyusui dini",
          jC3: "Inisiaisi menyusui dini",
          jD3: "Inisiatif menyusu dini",
        });
        break;
      case 3:
        this.setState({
          jA3: "ASI kuning",
          jB3: "Kolostrum",
          jC3: "ASI pertama",
          jD3: "Kolelitiasis",
        });
        break;
      case 4:
        this.setState({
          jA3: "4 bulan",
          jB3: "5 bulan",
          jC3: "6 bulan",
          jD3: "7 bulan",
        });
        break;
      case 5:
        this.setState({
          jA3: "6 bulan",
          jB3: "12 bulan",
          jC3: "18 bulan",
          jD3: "24 bulan",
        });
        break;
      case 6:
        this.setState({
          jA3: "2-3 sendok makan setiap kali makan",
          jB3: "4-5 sendok makan setiap kali makan",
          jC3: "6-7 sendok makan setiap kali makan",
          jD3: "8-9 sendok makan setiap kali makan",
        });
        break;
      case 7:
        this.setState({
          jA3: "1-2 kali",
          jB3: "3 kali",
          jC3: "3-4 kali",
          jD3: "5 kali",
        });
        break;
      case 8:
        this.setState({
          jA3: "1 kali makan dalam satu hari",
          jB3: "1-2 kali makan dalam satu hari",
          jC3: "2 kali makan dalam satu hari ",
          jD3: "2-3 kali makan dalam satu hari",
        });
        break;
      case 9:
        this.setState({
          jA3: "ASI",
          jB3: "Makanan keluarga lembek",
          jC3: "Makanan saring/lumat",
          jD3: "Makanan keluarga sedikit lembek",
        });
        break;
      case 10:
        this.setState({
          jA3: "3 bulan",
          jB3: "6 bulan",
          jC3: "9 bulan",
          jD3: "12 bulan",
        });
        break;
      case 11:
        this.setState({
          jA3: "ASI",
          jB3: "Makanan keluarga lembek",
          jC3: "Makanan saring/lumat",
          jD3: "Makanan keluarga",
        });
        break;
      case 12:
        this.setState({
          jA3: "ASI",
          jB3: "Makanan keluarga lembek",
          jC3: "Makanan saring/lumat",
          jD3: "Makanan keluarga sedikit lembek",
        });
        break;
      case 13:
        this.setState({
          jA3: "1sdt minyak ditambahakan setiap kali makan",
          jB3: "½ sdt minyak ditambahakan setiap kali makan",
          jC3: "½ sdm minyak ditambahakan setiap kali makan",
          jD3: "1 sdm minyak ditambahakan setiap kali makan",
        });
        break;
      case 14:
        this.setState({
          jA3: "0-6 bulan",
          jB3: "6-8 bulan",
          jC3: "9-11 bulan",
          jD3: "12-24 bulan",
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
