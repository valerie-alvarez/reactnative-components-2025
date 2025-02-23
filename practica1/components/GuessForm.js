import { useState } from "react"
import { View, TextInput, Button, Alert, Text } from "react-native"

const GuessForm = ( {correctAnswer} ) =>{

    const [ respuesta, setRespuesta ] = useState('')

    const comparar = () =>{
        if (respuesta.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
            Alert.alert("Has adivinado correctamente.");
          } else {
            Alert.alert("Incorrecto, intenta de nuevo. Pista: Con tilde. Cáscara que hace resbalar");
          }
    }

    return(
    <View>
    <TextInput placeholder="Adivina qué es" 
            onChangeText={setRespuesta} 
            value={respuesta}></TextInput>
    <Button title = "Enviar respuesta" 
            onPress={comparar}></Button>
    </View>
    )
}
export default GuessForm 