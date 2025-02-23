import { useState } from "react";
import { View, Text } from "react-native"
import GuessForm from "./GuessForm";


export default function GuessingGame() {
    const [correctAnswer, setCorrectAnswer]=useState("Plátano");

    
    return(
        <View>
            <Text style = {{alignItems:'center',
                              fontWeight: 'bold',
                              fontSize: 20
                }}>El Enigma de la Esfinge</Text>
            <Text>{"\n"}</Text>
            <Text>Plata no es.</Text>
            <Text>Oro, tampoco.</Text>
            <Text>Visto de amarillo</Text>
            <Text>y a los primates vuelvo locos.</Text>
            <Text>{"\n"}</Text>
        <GuessForm correctAnswer= {correctAnswer}></GuessForm>
        </View>
    )
}