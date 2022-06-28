import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' />
        <Button title='Add Goal' />
      </View>
      <View>
        <Text>List of Goals....</Text>
      </View> */}

      <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.box3}>
        <Text>Box 3</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    backgroundColor: 'gray',
    flexDirection: 'row',
    width: '100%',
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  // inputContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between'
  // },
  // textInput: {
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   width: '80%',
  //   marginRight: 8,
  //   padding: 8
  // }

  box1: {
    backgroundColor: 'yellow',
    // width: 100,
    // height: 100,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    backgroundColor: 'green',
    // width: 100,
    // height: 100,
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    backgroundColor: 'red',
    // width: 100,
    // height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
