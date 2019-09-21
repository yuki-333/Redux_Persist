import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Button,
    TextInput,
  } from 'react-native';
import styles from "../styles/style0";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          inputText: "",
          text: "",
        }
    }
    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.text}>
            CURLY {this.props.title} {this.props.day} {this.props.number}
            {this.props.todo}
        </Text>
            <TextInput
                placeholder="write here..." 
                value={this.state.inputText}
                onChangeText={(text) => this.setState({inputText: text})}
            />
            <Button
                 title="Button1"
                onPress={()=> this.props.onAddToDo(this.state.inputText)}
            />
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

