//This is an example code for Bottom Navigation//
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  ToastAndroid,
} from "react-native";
//import all the basic component we have used
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScreenOrientation } from "expo";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import ExitScreen from "./pages/ExitScreen";
import CatinMenuScreen from "./pages/HomeScreenMenu/CatinMenuScreen";
import BumilMenuScreen from "./pages/HomeScreenMenu/BumilMenuScreen";
import BayiMenuScreen from "./pages/HomeScreenMenu/BayiMenuScreen";
import CatinBukuMenuScreen from "./pages/HomeScreenMenu/sub1/CatinBukuMenuScreen";
import CatinVideoMenuScreen from "./pages/HomeScreenMenu/sub1/CatinVideoMenuScreen";
import CatinGameMenuScreen from "./pages/HomeScreenMenu/sub1/CatinGameMenuScreen";
import CatinHitungMenuScreen from "./pages/HomeScreenMenu/sub1/CatinHitungMenuScreen";
import BumilBukuMenuScreen from "./pages/HomeScreenMenu/sub1/BumilBukuMenuScreen";
import BumilVideoMenuScreen from "./pages/HomeScreenMenu/sub1/BumilVideoMenuScreen";
import BumilGameMenuScreen from "./pages/HomeScreenMenu/sub1/BumilGameMenuScreen";
import BayiBukuMenuScreen from "./pages/HomeScreenMenu/sub1/BayiBukuMenuScreen";
import BayiVideoMenuScreen from "./pages/HomeScreenMenu/sub1/BayiVideoMenuScreen";
import BayiGameMenuScreen from "./pages/HomeScreenMenu/sub1/BayiGameMenuScreen";
import BayiPodcastMenuScreen from "./pages/HomeScreenMenu/sub1/BayiPodcastMenuScreen";
import BumilPodcastMenuScreen from "./pages/HomeScreenMenu/sub1/BumilPodcastMenuScreen";
import CatinDiaryGiziScreen from "./pages/HomeScreenMenu/sub1/CatinDiaryGiziScreen";
import BumilTTDMenuScreen from "./pages/HomeScreenMenu/sub1/BumilTTDMenuScreen";
import BumilTTDMenuScreen2 from "./pages/HomeScreenMenu/sub1/BumilTTDMenuScreen2";
import BumilTTDMenuScreen3 from "./pages/HomeScreenMenu/sub1/BumilTTDMenuScreen3";
import BumilTTDMenuScreen4 from "./pages/HomeScreenMenu/sub1/BumilTTDMenuScreen4";
import BumilTTDMenuScreen5 from "./pages/HomeScreenMenu/sub1/BumilTTDMenuScreen5";
import BumilTTDMenuScreen6 from "./pages/HomeScreenMenu/sub1/BumilTTDMenuScreen6";
import BumilDiaryGiziScreen from "./pages/HomeScreenMenu/sub1/BumilDiaryGiziScreen";
import BayiDiaryGiziScreen from "./pages/HomeScreenMenu/sub1/BayiDiaryGiziScreen";
import DiaryViewScreen from "./pages/HomeScreenMenu/sub1/DiaryViewScreen";
import DiaryEditScreen from "./pages/HomeScreenMenu/sub1/DiaryEditScreen";
import DiaryEditScreen2 from "./pages/HomeScreenMenu/sub1/DiaryEditScreen2";
import EditTabletScreen from "./pages/HomeScreenMenu/sub1/EditTabletScreen";
import { Audio } from "expo-av";
import "./pages/HomeScreen";
import "./pages/HomeScreenMenu/sub1/CatinGameMenuScreen";
import "./pages/HomeScreenMenu/sub1/BayiGameMenuScreen";
import "./pages/HomeScreenMenu/sub1/BumilGameMenuScreen";

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    CatinMenu: { screen: CatinMenuScreen },
    BumilMenu: { screen: BumilMenuScreen },
    BayiMenu: { screen: BayiMenuScreen },
    CatinBukuMenu: {
      screen: CatinBukuMenuScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    CatinVideoMenu: { screen: CatinVideoMenuScreen },
    CatinGameMenu: { screen: CatinGameMenuScreen },
    CatinHitungMenu: { screen: CatinHitungMenuScreen },
    CatinDiaryMenu: {
      screen: CatinDiaryGiziScreen,
      navigationOptions: {
        title: "Diary Gizi Catin",
      },
    },
    BumilBukuMenu: {
      screen: BumilBukuMenuScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    BumilPodcastMenu: { screen: BumilPodcastMenuScreen },
    BumilVideoMenu: { screen: BumilVideoMenuScreen },
    BumilGameMenu: { screen: BumilGameMenuScreen },
    BumilTTDMenu1: {
      screen: BumilTTDMenuScreen,
      navigationOptions: {
        title: "Checklist TTD",
      },
    },
    BumilTTDMenu2: {
      screen: BumilTTDMenuScreen2,
      navigationOptions: {
        title: "Checklist TTD",
      },
    },
    BumilTTDMenu3: {
      screen: BumilTTDMenuScreen3,
      navigationOptions: {
        title: "Checklist TTD",
      },
    },
    BumilTTDMenu4: {
      screen: BumilTTDMenuScreen4,
      navigationOptions: {
        title: "Checklist TTD",
      },
    },
    BumilTTDMenu5: {
      screen: BumilTTDMenuScreen5,
      navigationOptions: {
        title: "Checklist TTD",
      },
    },
    BumilTTDMenu6: {
      screen: BumilTTDMenuScreen6,
      navigationOptions: {
        title: "Checklist TTD",
      },
    },
    BumilDiaryMenu: {
      screen: BumilDiaryGiziScreen,
      navigationOptions: {
        title: "Diary Gizi Bumil",
      },
    },
    BayiBukuMenu: {
      screen: BayiBukuMenuScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    BayiPodcastMenu: { screen: BayiPodcastMenuScreen },
    BayiVideoMenu: { screen: BayiVideoMenuScreen },
    BayiGameMenu: { screen: BayiGameMenuScreen },
    BayiDiaryMenu: {
      screen: BayiDiaryGiziScreen,
      navigationOptions: {
        title: "Diary Gizi Bayi",
      },
    },
    DiaryView: {
      screen: DiaryViewScreen,
      navigationOptions: {
        title: "Diary",
      },
    },
    DiaryEdit: {
      screen: DiaryEditScreen,
      navigationOptions: {
        title: "Edit Diary",
      },
    },
    DiaryEdit2: {
      screen: DiaryEditScreen2,
      navigationOptions: {
        title: "Edit Diary",
      },
    },
    EditTabletMenu: {
      screen: EditTabletScreen,
      navigationOptions: {
        title: "Tandai",
      },
    },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: "#FFD1DC",
        elevation: 0,
      },
      headerRight: () => (
        <TouchableOpacity onPress={() => muteEvent()}>
          <View style={styles.muteIcon}>
            <Image
              source={require("./assets/images/hs-icon/volume-icon.png")}
              style={styles.MenuIconStyle}
            />
          </View>
        </TouchableOpacity>
      ),
      cardStyle: { backgroundColor: "#FFD1DC" },
      headerTintColor: "#000000",
      title: "",
      //Header title
    },
  }
);
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 1) {
    tabBarVisible = false;
  }

  // if (navigation.state.index <= 1) {
  //   ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  // }

  return {
    tabBarVisible,
  };
};

// HomeStack.router.getStateForAction = (action, state) => {
//     if(state.index === 1 && action.type === NavigationActions.BACK){
//       BackHandler.exitApp();
//       return null;
// }

const ExitStack = createStackNavigator(
  {
    //Defination of Navigaton from Exit screen
    Exit: { screen: ExitScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: "#FFD1DC",
        elevation: 0,
      },
      cardStyle: { backgroundColor: "#FFD1DC" },
      headerTintColor: "#000000",
      title: "Keluar Aplikasi",
      //Header title
    },
  }
);
const AboutStack = createStackNavigator(
  {
    //Defination of Navigaton from About screen
    About: { screen: AboutScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: "#FFD1DC",
        elevation: 0,
      },
      cardStyle: { backgroundColor: "#FFD1DC" },
      headerTintColor: "#000000",
      title: "Tentang Aplikasi",
      //Header title
    },
  }
);
const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    About: { screen: AboutStack },
    Exit: { screen: ExitStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home${focused ? "" : ""}`;
        } else if (routeName === "Settings") {
          iconName = `ios-checkmark-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "About") {
          iconName = `ios-help-circle${focused ? "" : ""}`;
        } else if (routeName === "Exit") {
          iconName = `ios-exit${focused ? "" : ""}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#000000",
      inactiveTintColor: "#b5b0a3",
      style: {
        backgroundColor: "#FFD1DC",
        borderTopColor: "transparent",
      },
    },
  }
);
global.menu = "app";
global.cek = 1;
global.muteEvent = () => {
  if (global.cek == 1) {
    ToastAndroid.showWithGravity(
      "Music Off",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    Audio.setIsEnabledAsync(false);
    global.cek = 2;
  } else if (global.cek == 2) {
    ToastAndroid.showWithGravity(
      "Music On",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    Audio.setIsEnabledAsync(true);
    if (global.menu == "game" || global.menu != "app") {
      quizAudio.playAsync();
    } else if (global.menu == "app") {
      homeAudio.playAsync();
    }
    global.cek = 1;
  }
};

const styles = StyleSheet.create({
  MenuIconStyle: {
    alignSelf: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
  },
  muteIcon: {
    padding: "70%",
  },
});
export default createAppContainer(App);
