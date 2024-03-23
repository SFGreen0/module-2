import { SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import CardFront from './CardFront.js';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, {flex: 1}, {backgroundColor: 'purple'}]}>
      <ScrollView style={[{padding: 15}, {flex: 1}]}>
        <CardFront />
      </ScrollView>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',

  },
  infoLogo: {
    width: '80%',
    resizeMode: 'contain',
    opacity: 1,
    zIndex: 1,
  },
  reactLogo: {
    height: 400,
    resizeMode: 'contain',
    position: 'absolute',
    opacity: .3,
  },
});