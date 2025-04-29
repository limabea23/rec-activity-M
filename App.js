import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Text, TextInput, ScrollView, Image } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Movies</Text>
      <TextInput style={styles.input}placeholder='Search' />

      <Text style={styles.subtitle}>Popular Movies</Text>
      <ScrollView horizontal style={styles.popular}>
        <Image style={styles.image} source={require('./assets/public/letterstojuliet.jpg')} />
        <Image style={styles.image} source={require('./assets/public/htlagi10d.jpg')} />
        <Image style={styles.image} source={require('./assets/public/mammamia.jpg')} />
        <Image style={styles.image} source={require('./assets/public/clouds.jpg')} />
      </ScrollView>

      <Text style={styles.subtitle}>Top Rated</Text>
      <View style={styles.rated}>
        <Card  title='Five Feet Apart' description='Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control -- all of which get put to the test when she meets Will, an impossibly charming teen who has the same illness. Theres an instant flirtation, though restrictions dictate that they must maintain a safe distance between them. As their connection intensifies, so does the temptation to throw the rules out the window and embrace that attraction.' />
        <Card  title='Coco' description='Despite his familys generations-old ban on music, young Miguel dreams of becoming an accomplished musician like his idol Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead. After meeting a charming trickster named Héctor, the two new friends embark on an extraordinary journey to unlock the real story behind Miguels family history.' />
      </View>

      <StatusBar style="auto" /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3b3b3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#0a0a0a',
    borderWidth: 1,
    borderRadius: 15,
    width: 250,
    height: 50,
    fontSize: 15,
    color: "#0a0a0a",
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 10,
  },
  popular: {
    height: 100, 
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 5,
  },
});
