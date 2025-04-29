import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Movies</Text>
      <TextInput style={styles.input}placeholder='Search' />
      <Text style={styles.movies}>Popular Movies</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
