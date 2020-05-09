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
export default class BumilGameMenuScreen extends React.Component {
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
    jA3: "Makan dengan pola gizi seimbang dan lebih banyak dari sebelum hamil",
    jB3: "Sama saja seperti sebelum hamil",
    jC3: "Lebih sedikit dari sebelum hamil",
    jD3: "Makan apa saja yang terpenting ibu dan anak bahagia",
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
    global.indicator3 = start3;
    global.stop3 = start3;
  }
  nextAction = () => {
    global.indicator3++;
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
    if (global.indicator3 == 15) {
      quizAudio.stopAsync();
      victoryAudio.playAsync();
      global.stop3 = 69;
      clearInterval(this.interval);
      this.setState({
        nomor: 15,
        timer: "Kuis Selesai!",
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
      this.jawaban(global.indicator3);
      this.setState({
        isisoal: this.soal(global.indicator3),
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
        global.indicator3 == 0 ||
        global.indicator3 == 1 ||
        global.indicator3 == 10 ||
        global.indicator3 == 11 ||
        global.indicator3 == 14
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
        global.indicator3 == 4 ||
        global.indicator3 == 8 ||
        global.indicator3 == 9 ||
        global.indicator3 == 12 ||
        global.indicator3 == 13
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
        global.indicator3 == 3 ||
        global.indicator3 == 6 ||
        global.indicator3 == 7
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
        global.indicator3 == 8 ||
        global.indicator3 == 10 ||
        global.indicator3 == 11 ||
        global.indicator3 == 2 ||
        global.indicator3 == 5
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
        return "Bagaimana anjuran makan bagi ibu hamil ?";
        break;
      case 1:
        return "Berapa anjuran penukar karbohidrat yang harus dikonsumsi ibu hamil pada akhir trimester 3?";
        break;
      case 2:
        return "Berapa anjuran tambahan zat besi (mg) pada trimester 3?";
        break;
      case 3:
        return "Apa sumber zat besi tertinggi pada bahan makanan berikut?";
        break;
      case 4:
        return "Berapa pertambahan total berat badan normal selama kehamilan?";
        break;
      case 5:
        return "Berapa pertambahan total berat badan selama kehamilan trimester 1-3?";
        break;
      case 6:
        return "Berapa banyak tablet tambah darah yang dikonsumsi selama kehamilan?";
        break;
      case 7:
        return "Apakah resiko kekurangan gizi pada ibu hamil?";
        break;
      case 8:
        return "Apa indikator yang digunakan untuk mengetahui status gizi pada ibu hamil?";
        break;
      case 9:
        return "Berapa kali ibu hamil harus memeriksa kadar Hb saat hamil?";
        break;
      case 10:
        return "Apa zat gizi yang diperlukan ibu hamil untuk mencegah terjadinya neural tube defect (cacat lahir pada otak, tulang belakang atau sum-sum tulang belakang?";
        break;
      case 11:
        return "Pola makan yang dapat dilakukan ibu hamil yang mengalami mual muntah berlebih adalah?";
        break;
      case 12:
        return "Porsi makanan yang harus dihindari ibu hamil yang mengalami mual muntah berlebih?";
        break;
      case 13:
        return "Apa zat gizi yang diperlukan ibu hamil untuk mencegah terjadinya anemia?";
        break;
      case 14:
        return "apabila ibu hamil memiliki Lingkar Lengan Atas <23,5cm maka ibu hamil dinyatakan?";
        break;
      default:
        return "Tekan Next untuk mulai";
    }
  }

  jawaban(no) {
    switch (no) {
      case 0:
        this.setState({
          jA3:
            "Makan dengan pola gizi seimbang dan lebih banyak dari sebelum hamil",
          jB3: "Sama saja seperti sebelum hamil",
          jC3: "Lebih sedikit dari sebelum hamil",
          jD3: "Makan apa saja yang terpenting ibu dan anak bahagia",
        });
        break;
      case 1:
        this.setState({
          jA3: "6 penukar",
          jB3: "5 penukar",
          jC3: "7 penukar",
          jD3: "4 penukar",
        });
        break;
      case 2:
        this.setState({
          jA3: "2",
          jB3: "3",
          jC3: "4",
          jD3: "5",
        });
        break;
      case 3:
        this.setState({
          jA3: "Kacang hijau",
          jB3: "Daging merah",
          jC3: "Hati sapi",
          jD3: "kangkung",
        });
        break;
      case 4:
        this.setState({
          jA3: "5-7 kg",
          jB3: "10-12 kg",
          jC3: "15-17 kg",
          jD3: "20-22 kg",
        });
        break;
      case 5:
        this.setState({
          jA3: "180 kkal",
          jB3: "200 kkal",
          jC3: "280 kkal",
          jD3: "300 kkal",
        });
        break;
      case 6:
        this.setState({
          jA3: "60 tablet ",
          jB3: "80 tablet",
          jC3: "90 tablet",
          jD3: "100 tablet",
        });
        break;
      case 7:
        this.setState({
          jA3:
            "Janin tidak berkembang dan berat badan lahir rendah (BBLR yaitu 3 kg)",
          jB3:
            "Janin tidak berkembang dan berat badan lahir rendah (BBLR yaitu 2,5 - 3 kg)",
          jC3:
            "Janin tidak berkembang dan berat badan lahir rendah (BBLR yaitu 1 - 2,5 kg)",
          jD3:
            "Janin tidak berkembang dan berat badan lahir rendah (BBLR yaitu 3 - 4 kg",
        });
        break;
      case 8:
        this.setState({
          jA3: "Kadar Hb",
          jB3: "Lingkar lengan atas",
          jC3: "Tinggi badan dan berat badan",
          jD3: "Kadar gula darah dan tekanan darah",
        });
        break;
      case 9:
        this.setState({
          jA3: "1",
          jB3: "2",
          jC3: "3",
          jD3: "4",
        });
        break;
      case 10:
        this.setState({
          jA3: "folat",
          jB3: "zat besi",
          jC3: "zink",
          jD3: "yodium",
        });
        break;
      case 11:
        this.setState({
          jA3: "Porsi kecil tapi sering",
          jB3: "porsi kecil tapi berkualitas",
          jC3: "Porsi sedang tapi jarang",
          jD3: "Porsi sedang tapi sering",
        });
        break;
      case 12:
        this.setState({
          jA3: "Makanan dengan porsi sedang",
          jB3: "Makanan dengan porsi besar",
          jC3: "Makanan dengan porsi kecil",
          jD3: "makanan dengan porsi sedikit",
        });
        break;
      case 13:
        this.setState({
          jA3: "folat",
          jB3: "zat besi",
          jC3: "zink",
          jD3: "yodium",
        });
        break;
      case 14:
        this.setState({
          jA3: "Kurang Energi Kronis",
          jB3: "Normal",
          jC3: "Kurang Vitamin Dan Mineral",
          jD3: "kurang zat besi",
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
