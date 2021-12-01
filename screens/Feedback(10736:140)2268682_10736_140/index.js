import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_10736_141}>
        <View style={styles.View_10736_142}>
          <Text style={styles.Text_10736_142}>Feedback</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48b9/14fc/67d92fae97364ba4e4fae9869bf73db1"
          }}
          style={styles.TouchableOpacity_10736_143}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10736_54"))
          }
        />
      </View>
      <View style={styles.View_10736_144}>
        <View style={styles.View_10736_145}>
          <Text style={styles.Text_10736_145}>
            Please share your feedback with us to improve your user experience!
          </Text>
        </View>
        <View style={styles.View_10736_146}>
          <Text style={styles.Text_10736_146}>👏 Made with Bravo</Text>
        </View>
        <View style={styles.View_10736_147} />
        <View style={styles.View_10736_148}>
          <Text style={styles.Text_10736_148}>Name</Text>
        </View>
        <View style={styles.View_10736_149} />
        <View style={styles.View_10736_150}>
          <Text style={styles.Text_10736_150}>Last Name</Text>
        </View>
        <View style={styles.View_10736_151} />
        <View style={styles.View_10736_152}>
          <Text style={styles.Text_10736_152}>Email Address</Text>
        </View>
        <View style={styles.View_10736_153}>
          <Text style={styles.Text_10736_153}>Overall rating from 1-5</Text>
        </View>
        <View style={styles.View_10736_154}>
          <Text style={styles.Text_10736_154}>1😤 horrible / 5 😍 Loved</Text>
        </View>
        <View style={styles.View_10736_155} />
        <View style={styles.View_10736_156}>
          <Text style={styles.Text_10736_156}>⭐️ Rating </Text>
        </View>
        <View style={styles.View_10736_157} />
        <View style={styles.View_10736_158}>
          <Text style={styles.Text_10736_158}>Submit</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_10736_141: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_10736_142: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_10736_142: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10736_143: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%")
  },
  View_10736_144: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10736_145: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_10736_145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_146: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("81%"),
    justifyContent: "center"
  },
  Text_10736_146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_147: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    backgroundColor: "rgba(238, 238, 238, 1)"
  },
  View_10736_148: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("15%"),
    justifyContent: "center"
  },
  Text_10736_148: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_149: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("22%"),
    backgroundColor: "rgba(238, 238, 238, 1)"
  },
  View_10736_150: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("23%"),
    justifyContent: "center"
  },
  Text_10736_150: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_151: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("31%"),
    backgroundColor: "rgba(238, 238, 238, 1)"
  },
  View_10736_152: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_10736_152: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_153: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("42%"),
    justifyContent: "flex-end"
  },
  Text_10736_153: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_154: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("56%"),
    justifyContent: "center"
  },
  Text_10736_154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_155: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("48%"),
    backgroundColor: "rgba(238, 238, 238, 1)"
  },
  View_10736_156: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_10736_156: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10736_157: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("64%"),
    backgroundColor: "rgba(149, 191, 71, 1)"
  },
  View_10736_158: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("66%"),
    justifyContent: "center"
  },
  Text_10736_158: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
