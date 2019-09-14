import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Button,
  } from 'react-native';
import styles from "../styles/style0"

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.text}>
            App {this.props.title} {this.props.day} {this.props.number}
        </Text>
            <Button
                title="+"
                onPress={() => {
                this.props.plus(100);
                }}
            />
            <Button
                title="-"
                onPress={() => {
                this.props.minus(100);
                }}
            />
        </View>
      );
    }
  }


export default App;

