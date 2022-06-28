import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>My First React Native App!</Text>
      <Text style={styles.dummyText}>I love Expo Go.</Text>
      <Button title='Tap Me'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    marginBottom: 16, 
    borderWidth: 2, 
    borderColor: 'red', 
    padding: 16
  }
});
