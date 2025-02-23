import { useState } from "react";
import { View, Text } from "react-native";
import ChildCounter from "./ChildCounter";

const ParentCounter = () =>{
    const [count, setCount] = useState(0);
    const sumar = () =>{
        setCount(count+1)
    }

    const reset = () => {
        setCount(0)
    }
    
    return(
        <View>
            <ChildCounter contador = {count} onPress={sumar} onReset={reset}></ChildCounter>
            <Text>{"\n"}</Text>
        </View>
    )
}
export default ParentCounter