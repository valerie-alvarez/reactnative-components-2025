import { useState } from "react";
import { View, Button, Text } from "react-native"

export default function ClickCounter (){

    const [count, setCount] = useState(0);
    const handlePress = () => {
        setCount(count + 1)
    }

    const handleReset = () => {
        setCount(0)
    }
    return(
        <View>
            <Button title = 'Hola oprímeme' onPress={handlePress}/>
            <Text> Ha presionado este botón {count} veces </Text>
            <Button title = 'Reset' onPress={handleReset}></Button>
        </View>
        
    );
}