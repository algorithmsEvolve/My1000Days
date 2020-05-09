import React from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";

export default class BumilTTDMenuScreen3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: <View></View>,
      jumlahSilang: 0,
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      status5: "",
      status6: "",
      status7: "",
      status8: "",
      status9: "",
      status10: "",
      status11: "",
      status12: "",
      status13: "",
      status14: "",
      status15: "",
      date1: "-",
      date2: "-",
      date3: "-",
      date4: "-",
      date5: "-",
      date6: "-",
      date7: "-",
      date8: "-",
      date9: "-",
      date10: "-",
      date11: "-",
      date12: "-",
      date13: "-",
      date14: "-",
      date15: "-",
      alasan: "",
      checkIcon1: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
      checkIcon2: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
      checkIcon3: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
      checkIcon4: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
      checkIcon5: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
      checkIcon6: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
      checkIcon7: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
      checkIcon8: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
      checkIcon9: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
      checkIcon10: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
      checkIcon11: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
      checkIcon12: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
      checkIcon13: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
      checkIcon14: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
      checkIcon15: (
        <Image
          source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
          style={styles.checkIconStyle}
        />
      ),
    };
    //get async storage
    AsyncStorage.getItem("check3")
      .then((value) => {
        const result = JSON.parse(value);
        if (result != null) {
          this.setState({
            status1: result.status1,
            status2: result.status2,
            status3: result.status3,
            status4: result.status4,
            status5: result.status5,
            status6: result.status6,
            status7: result.status7,
            status8: result.status8,
            status9: result.status9,
            status10: result.status10,
            status11: result.status11,
            status12: result.status12,
            status13: result.status13,
            status14: result.status14,
            status15: result.status15,
            date1: result.date1,
            date2: result.date2,
            date3: result.date3,
            date4: result.date4,
            date5: result.date5,
            date6: result.date6,
            date7: result.date7,
            date8: result.date8,
            date9: result.date9,
            date10: result.date10,
            date11: result.date11,
            date12: result.date12,
            date13: result.date13,
            date14: result.date14,
            date15: result.date15,
          });
          this.showIcon();
        } else {
          const checkList = {
            status1: "false",
            status2: "false",
            status3: "false",
            status4: "false",
            status5: "false",
            status6: "false",
            status7: "false",
            status8: "false",
            status9: "false",
            status10: "false",
            status11: "false",
            status12: "false",
            status13: "false",
            status14: "false",
            status15: "false",
            date1: "-",
            date2: "-",
            date3: "-",
            date4: "-",
            date5: "-",
            date6: "-",
            date7: "-",
            date8: "-",
            date9: "-",
            date10: "-",
            date11: "-",
            date12: "-",
            date13: "-",
            date14: "-",
            date15: "-",
            alasan1: "",
            alasan2: "",
            alasan3: "",
            alasan4: "",
            alasan5: "",
            alasan6: "",
            alasan7: "",
            alasan8: "",
            alasan9: "",
            alasan10: "",
            alasan11: "",
            alasan12: "",
            alasan13: "",
            alasan14: "",
            alasan15: "",
          };
          AsyncStorage.setItem("check3", JSON.stringify(checkList));
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // end get async
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
      2000
    );
  hitungSilang = () => {
    var jumlahSilang = 0;
    for (let y = 1; y <= 6; y++) {
      //get async storage
      AsyncStorage.getItem("check" + y)
        .then((value) => {
          let result = JSON.parse(value);
          for (let x = 1; x <= 15; x++) {
            if (result["status" + x] == "silang") {
              jumlahSilang = parseInt(jumlahSilang + 1);
              global.jumSil = jumlahSilang;
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });

      // end get async
    }

    this.setState({
      jumlahSilangState: global.jumSil,
    });
  };

  componentDidMount() {
    this.openAcitivityIndicator();
    this.closeActivityIndicator();
    this.hitungSilang();
  }
  showIcon = () => {
    // showIcon
    for (let x = 1; x <= 15; x++) {
      switch (this.state["status" + x]) {
        case "ceklis":
          this.setState({
            ["checkIcon" + x]: (
              <Image
                source={require("../../../assets/images/ttd-icon/checklist-icon.png")}
                style={styles.checkIconStyle}
              />
            ),
          });
          break;
        case "silang":
          this.setState({
            ["checkIcon" + x]: (
              <Image
                source={require("../../../assets/images/ttd-icon/crosslist-icon.png")}
                style={styles.checkIconStyle}
              />
            ),
          });
          break;
        default:
          this.setState({
            ["checkIcon" + x]: (
              <Image
                source={require("../../../assets/images/ttd-icon/emptybox-icon.png")}
                style={styles.checkIconStyle}
              />
            ),
          });
      }
    }
    // end show icon
  };
  handleOnNavigateBack = () => {
    this.hitungSilang();
    //get async storage
    AsyncStorage.getItem("check3")
      .then((value) => {
        const result = JSON.parse(value);
        if (result != null) {
          this.setState({
            status1: result.status1,
            status2: result.status2,
            status3: result.status3,
            status4: result.status4,
            status5: result.status5,
            status6: result.status6,
            status7: result.status7,
            status8: result.status8,
            status9: result.status9,
            status10: result.status10,
            status11: result.status11,
            status12: result.status12,
            status13: result.status13,
            status14: result.status14,
            status15: result.status15,
            date1: result.date1,
            date2: result.date2,
            date3: result.date3,
            date4: result.date4,
            date5: result.date5,
            date6: result.date6,
            date7: result.date7,
            date8: result.date8,
            date9: result.date9,
            date10: result.date10,
            date11: result.date11,
            date12: result.date12,
            date13: result.date13,
            date14: result.date14,
            date15: result.date15,
          });
          this.showIcon();
        } else {
          const checkList = {
            status1: "false",
            status2: "false",
            status3: "false",
            status4: "false",
            status5: "false",
            status6: "false",
            status7: "false",
            status8: "false",
            status9: "false",
            status10: "false",
            status11: "false",
            status12: "false",
            status13: "false",
            status14: "false",
            status15: "false",
            date1: "-",
            date2: "-",
            date3: "-",
            date4: "-",
            date5: "-",
            date6: "-",
            date7: "-",
            date8: "-",
            date9: "-",
            date10: "-",
            date11: "-",
            date12: "-",
            date13: "-",
            date14: "-",
            date15: "-",
            alasan1: "",
            alasan2: "",
            alasan3: "",
            alasan4: "",
            alasan5: "",
            alasan6: "",
            alasan7: "",
            alasan8: "",
            alasan9: "",
            alasan10: "",
            alasan11: "",
            alasan12: "",
            alasan13: "",
            alasan14: "",
            alasan15: "",
          };
          AsyncStorage.setItem("check3", JSON.stringify(checkList));
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // end get async
  };

  editTablet = (indicator) => {
    AsyncStorage.getItem("check3")
      .then((value) => {
        const result = JSON.parse(value);
        if (
          result["alasan" + indicator] != null ||
          result["alasan" + indicator] != undefined ||
          result["alasan" + indicator] != ""
        ) {
          this.setState({
            alasan: result["alasan" + indicator],
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    const cek = {
      on: indicator,
      status: this.state["status" + indicator],
      alasan: this.state.alasan,
      date: this.state["date" + indicator],
      menu: 3,
    };
    AsyncStorage.setItem("on", JSON.stringify(cek));
    this.props.navigation.navigate("EditTabletMenu", {
      onNavigateBack: this.handleOnNavigateBack,
    });
  };

  render() {
    return (
      <ScrollView>
        {this.state.loading}
        <View style={styles.container}>
          {/* checklist */}
          {/* cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(1)}
          >
            {this.state.checkIcon1}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-31</Text>
              <Text style={styles.cbTitleDate}>{this.state.date1}</Text>
            </View>
          </TouchableOpacity>
          {/* end cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(2)}
          >
            {this.state.checkIcon2}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-32</Text>
              <Text style={styles.cbTitleDate}>{this.state.date2}</Text>
            </View>
          </TouchableOpacity>
          {/* cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(3)}
          >
            {this.state.checkIcon3}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-33</Text>
              <Text style={styles.cbTitleDate}>{this.state.date3}</Text>
            </View>
          </TouchableOpacity>
          {/* end cl */}
          {/* cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(4)}
          >
            {this.state.checkIcon4}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-34</Text>
              <Text style={styles.cbTitleDate}>{this.state.date4}</Text>
            </View>
          </TouchableOpacity>
          {/* end cl */}
          {/* cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(5)}
          >
            {this.state.checkIcon5}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-35</Text>
              <Text style={styles.cbTitleDate}>{this.state.date5}</Text>
            </View>
          </TouchableOpacity>
          {/* end cl */}
          {/* cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(6)}
          >
            {this.state.checkIcon6}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-36</Text>
              <Text style={styles.cbTitleDate}>{this.state.date6}</Text>
            </View>
          </TouchableOpacity>
          {/* end cl */}
          {/* cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(7)}
          >
            {this.state.checkIcon7}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-37</Text>
              <Text style={styles.cbTitleDate}>{this.state.date7}</Text>
            </View>
          </TouchableOpacity>
          {/* end cl */}
          {/* cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(8)}
          >
            {this.state.checkIcon8}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-38</Text>
              <Text style={styles.cbTitleDate}>{this.state.date8}</Text>
            </View>
          </TouchableOpacity>
          {/* end cl */}
          {/* cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(9)}
          >
            {this.state.checkIcon9}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-39</Text>
              <Text style={styles.cbTitleDate}>{this.state.date9}</Text>
            </View>
          </TouchableOpacity>
          {/* end cl */}
          {/* cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(10)}
          >
            {this.state.checkIcon10}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-40</Text>
              <Text style={styles.cbTitleDate}>{this.state.date10}</Text>
            </View>
          </TouchableOpacity>
          {/* end cl */}
          {/* cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(11)}
          >
            {this.state.checkIcon11}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-41</Text>
              <Text style={styles.cbTitleDate}>{this.state.date11}</Text>
            </View>
          </TouchableOpacity>
          {/* end cl */}
          {/* cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(12)}
          >
            {this.state.checkIcon12}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-42</Text>
              <Text style={styles.cbTitleDate}>{this.state.date12}</Text>
            </View>
          </TouchableOpacity>
          {/* end cl */}
          {/* cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(13)}
          >
            {this.state.checkIcon13}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-43</Text>
              <Text style={styles.cbTitleDate}>{this.state.date13}</Text>
            </View>
          </TouchableOpacity>
          {/* end cl */}
          {/* cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(14)}
          >
            {this.state.checkIcon14}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-44</Text>
              <Text style={styles.cbTitleDate}>{this.state.date14}</Text>
            </View>
          </TouchableOpacity>
          {/* end cl */}
          {/* cl */}
          <TouchableOpacity
            style={styles.cbButton}
            onPress={() => this.editTablet(15)}
          >
            {this.state.checkIcon15}
            <View>
              <Text style={styles.cbTitle}>Tablet ke-45</Text>
              <Text style={styles.cbTitleDate}>{this.state.date15}</Text>
            </View>
          </TouchableOpacity>
          {/* end cl */}
          {/* end checklist */}
          {/* button */}
          <View style={styles.nextPrevView}>
            {/* prev */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("BumilTTDMenu2")}
            >
              <Text style={styles.fontButton}>Prev</Text>
            </TouchableOpacity>

            {/* page button */}
            {/* 1 */}
            <TouchableOpacity
              style={styles.pageButton}
              onPress={() => this.props.navigation.navigate("BumilTTDMenu1")}
            >
              <Text style={styles.fontButton}>1</Text>
            </TouchableOpacity>
            {/* 2 */}
            <TouchableOpacity
              style={styles.pageButton}
              onPress={() => this.props.navigation.navigate("BumilTTDMenu2")}
            >
              <Text style={styles.fontButton}>2</Text>
            </TouchableOpacity>
            {/* 3 */}
            <TouchableOpacity style={styles.pageButton}>
              <Text style={styles.fontActive}>3</Text>
            </TouchableOpacity>
            {/* 4 */}
            <TouchableOpacity
              style={styles.pageButton}
              onPress={() => this.props.navigation.navigate("BumilTTDMenu4")}
            >
              <Text style={styles.fontButton}>4</Text>
            </TouchableOpacity>
            {/* 5 */}
            <TouchableOpacity
              style={styles.pageButton}
              onPress={() => this.props.navigation.navigate("BumilTTDMenu5")}
            >
              <Text style={styles.fontButton}>5</Text>
            </TouchableOpacity>
            {/* 6 */}
            <TouchableOpacity
              style={styles.pageButton}
              onPress={() => this.props.navigation.navigate("BumilTTDMenu6")}
            >
              <Text style={styles.fontButton}>6</Text>
            </TouchableOpacity>
            {/* next */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("BumilTTDMenu4")}
            >
              <Text style={styles.fontButton}>Next</Text>
            </TouchableOpacity>
          </View>
          {/* jumsil */}
          <View style={styles.containJumSil}>
            <Text style={styles.fontJumSil}>
              *Jumlah tablet yang belum diminum: {global.jumSil}
            </Text>
          </View>
          {/* end jumsil */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  cbTitle: {
    paddingLeft: 10,
    fontWeight: "bold",
  },
  cbTitleDate: {
    paddingLeft: 10,
    fontWeight: "bold",
    color: "grey",
  },
  nextPrevView: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pageButton: {
    borderRadius: 5,
    margin: 5,
    padding: 5,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 2,
  },
  button: {
    borderRadius: 10,
    margin: 5,
    padding: 5,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 2,
  },
  fontActive: {
    fontSize: 17,
    color: "pink",
    fontWeight: "bold",
  },
  fontButton: {
    fontSize: 17,
    color: "black",
  },
  textInput: {
    height: 40,
    width: (Dimensions.get("window").width / 5) * 4,
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },
  cbButton: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width:
      (Dimensions.get("window").width / 5) * 4 +
      Dimensions.get("window").width / 10,
    backgroundColor: "#ffffff",
    paddingLeft: 5,
    paddingRight: 15,
    marginBottom: 10,
    marginLeft: Dimensions.get("window").width / 22,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 4,
  },
  checkIconStyle: {
    width: 30,
    height: 30,
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
  containJumSil: {
    justifyContent: "center",
    alignItems: "center",
  },
  fontJumSil: {
    color: "red",
    fontSize: 14,
  },
});
