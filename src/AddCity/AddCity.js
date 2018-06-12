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

  submit = () => {
    if ((this.state.city === "") | (this.state.country === ""))
      return;
    const city = {
      city: this.state.city,
      country: this.state.country,
      locations: [],
      id: uuidV4()
    };
    this.props.screenProps.addCity(city);
    this.setState(
      {
        city: "",
        country: ""
      },
      () => {
        this.props.navigation.navigate("Cities");
      }
    );
  };

  render() {
    console.log("props:", this.props);
    return (
      <View style={styles.root}>
        <Text style={styles.heading}>Find Your City</Text>
        <TextInput
          style={styles.input}
          placeholder="City Name"
          value={this.state.city}
          onChangeText={val => this.onChangeText("city", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="City Name"
          value={this.state.country}
          onChangeText={val => this.onChangeText("country", val)}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles._button}>
            <Text style={styles.buttonText}>Add City</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "center"
  },
  input: {
    backgroundColor: "#fff",
    margin: 10,
    paddingHorizontal: 8,
    height: 50
  },
  _button: {
    height: 50,
    backgroundColor: "#666",
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  buttonText: {
    color: "#fff"
  },

  heading: {
    fontSize: 35,
    textAlign: "center",
    margin: 10,
    color: "#fff"
  }
});

export default AddCity;
