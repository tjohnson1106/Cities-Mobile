import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { colors } from "../theme";

class Cities extends Component {
  state = {};
  render() {
    console.log("props:", this.props);
    return (
      <View>
        <Text>City</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Cities;
