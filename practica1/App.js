import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ListaContador from './components/ListaContador';
import Contador from './components/Contador';

export default function App() {
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.safeArea}>
      <ListaContador />
    </SafeAreaView>
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
  safeArea: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});
