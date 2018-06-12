import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import uuidV4 from "uuid/v4";
import { colors } from "../theme";

class AddCity extends Component {
  state = {
    city: "",
    country: ""
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  submit = () => {};

  render() {
    return (
      <View>
        <Text>Add City</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default AddCity;
