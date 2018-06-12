import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";

import { colors } from "../theme";

class Cities extends Component {
  static navigationOptions = {
    title: "Cities",
    headerTitleStyle: {
      color: "white",
      fontSize: 20,
      fontWeight: "400"
    }
  };

  viewCity = city => {
    this.props.navigation.navigate("City", { city });
  };
  render() {
    return (
      <ScrollView>
        <View>
          {this.props.screenProps.cities.map((city, index) => (
            <View>
              <TouchableWithoutFeedback
                onPress={() => this.viewCity(city)}
              >
                <View style={styles.cityContainer}>
                  <Text style={styles.cityText}>{city.city}</Text>
                  <Text style={styles.countryText}>
                    {city.country}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cityContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  cityText: {
    fontSize: 20
  },
  countryText: {
    color: "rgba(0, 0, 0, .5)"
  }
});

export default Cities;
