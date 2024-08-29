import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ListaContador from './components/ListaContador';

export default function App() {
  
    // ListaContador es un ejemplo que tiene todo lo visto en clase
    // el complemento de este ejmplo es el archivo codigoContador.js
    // Esta es como se veria en codigo sin la parte grafica. 
    // No es necesario que le den vueltas a este codigo. Es en caso de que les pueda ser util
    // La diea del taller es que los puntos los agreguen dentro del tag SafeAreaView
    // Notas:
    // Estos comentarios pueden borrarlos si les estorban. solo es para que entiendan el codigo
    // Si tienen dudas no duden en preguntar
    // Adiconlamente van agregando los componentes que se les piden en el taller
    // y luego los van comentando para que no se les mezclen los componentes
    // los componentes se comentan como esta el segundo componente de este archivo
   
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.safeArea}>
      <ListaContador />
      {/* <ListaContador /> */}
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
