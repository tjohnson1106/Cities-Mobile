import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Textinput,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";

import { colors } from "../theme";

class City extends Component {
  static navigationOptions = props => {
    return {
      title: props.navigation.state.params.city.city,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "400"
      }
    };
  };

  state = {
    name: "",
    info: ""
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  addLocation = () => {
    if (this.state.name === "" || this.state.info === "") return;
    const { city } = this.props.navigation.state.params;
    const location = {
      name: this.state.name,
      info: this.state.info
    };
    this.props.screenProps.addLocation(location, city);
    this.setState({
      name: "",
      info: ""
    });
  };

  render() {
    return (
      <View>
        <Text>City</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default City;
