import { useState } from "react"
import { Button, View } from "react-native"

export default function AlertButton ( { onPress }) {

    return(
        <View>
            <Button title = "Ver alerta" 
            onPress = { onPress }>
            </Button>
            
        </View>
            
      
    )
}