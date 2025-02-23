import { StyleSheet, View, Text, SafeAreaView, FlatList, TextInput} from 'react-native';
import { Alert } from 'react-native';
import { useState } from 'react';
import Greeting from './components/Greeting';
import UserDetails from './components/UserDetails';
import Task from './components/Task';
import ToggleText from './components/ToggleText';
import DynamicForm from './components/DynamicForm';
import ClickCounter from './components/ContadordeClics';
import RegistrationForm from './components/RegistrationForm';
import ThemeSwitcher from './components/ThemeSwitcher';
import AlertButton from './components/AlertButton';
import GuessingGame from './components/GuessingGame';
import ImageGallery from './components/ImageGallery';
import ParentCounter from './components/ParentCounter';

export default function App() {
  const myTask = { title: 'Aprender React Native', completed: true };

  const [data, setData] = useState({
    nombre:'',
    correo: '',
    contraseña:''}
  );

  const recibirForm = (nombre, correo, contraseña) =>{
    setData({nombre, correo, contraseña});
  };

  const [isDark, SetIsDark] = useState(false);

  const temas = {
    backgroundColor: isDark ? "#222" : "#fff",
    color: isDark ? "#fff" : "#000",
  };

  const switchTheme = () =>{
    SetIsDark(!isDark)
}

  const alertar = () => {
      Alert.alert("Atención!", "Fije la vista fuera de la pantalla!");
    };
    
    const respuestasTaller  = [
      {
        id : '1',
        title: 'Paso de Parámetros a Componentes',
        componentes: [
          <Greeting key="greeting" name="Valerie" />,
          <UserDetails key="userdetails" nombre="Earth" edad="4.54 billion" ocupacion="Planet" />,
          <Task key="task" task={myTask} />
        ]
      },
      {
        id: '2',
        title: 'Uso de useState',
        componentes: [
          <ToggleText key="toggletext" />,
          <DynamicForm key="dynamicform" />,
          <ClickCounter key="clickcounter" />
        ]
      },
      {
        id: '3',
        title: 'Eventos con Botones',
        componentes: [
          <RegistrationForm key="registrationform" pedirForm={recibirForm} />,
          <Text key="formName">Nombre: {data.nombre}</Text>,
          <Text key="formEmail">Correo: {data.correo}</Text>,
          <Text key="formPasswortd">Contraseña: {"*".repeat(data.contraseña.length)}</Text>,
          <ThemeSwitcher key="themeswitcher" toggle={switchTheme} />,
          <AlertButton key="alertbutton" onPress={alertar} />
        ]
      },
      {
        id:'4',
        title: 'Paso de parámetros de Padre a Hijo',
        componentes: [
          <ParentCounter key="parentcounter" />,
          <ImageGallery key="imagegallery" />,
          <GuessingGame key="guessinggame" />
        ] 
      }
    ]
   return (
    
    <View style={[styles.container, { backgroundColor: temas.backgroundColor }]}>
    <SafeAreaView style={[styles.safeArea, { backgroundColor: temas.backgroundColor }]}>
    <FlatList
          data={respuestasTaller}
          renderItem={({ item }) => (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{item.title}</Text>
              {item.componentes}
              </View>

          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
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
  section: {
    marginBottom: 20,
    padding: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  }
});
