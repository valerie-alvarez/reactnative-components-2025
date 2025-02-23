import { TextInput, Button, View, Text } from "react-native";
import { useState } from "react";

 export default function RegistrationForm({ pedirForm }){
    const [name, setName] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [show, SetShow] = useState(false);

    const handlePress = () =>{
        pedirForm(name, correo, contraseña)
    };

    return(
        <View>
            <TextInput placeholder="Nombre" onChangeText={setName}/>
            <TextInput placeholder="Correo" onChangeText={setCorreo}/>
            <TextInput placeholder="Contraseña" onChangeText={setContraseña} 
            secureTextEntry={true}/>
            <Button title="Guardar datos"
            onPress={(handlePress)}></Button>
            <Text>{"\n"}</Text>
        </View>
    )
}