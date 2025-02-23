import { useState } from "react";
import { View, Text, Button } from "react-native";

function ToggleText (){
    const [isVisible, setIsVisible] = useState(false);
    return (
        <View>
            <Button onPress = {()=>{
                if (!isVisible) {
                    setIsVisible(true)
                }
                else{setIsVisible(false)}
            }}
            title = {isVisible ? "Hide text" : "Show text"}/>
            <Text>{isVisible ? 'Este texto es ahora visible' : ''}</Text>
            <Text>{"\n"}</Text>
        </View>
    )
};

export default ToggleText;