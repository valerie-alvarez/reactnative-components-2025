import { use, useState } from "react"
import { View, Button, useColorScheme, Text } from "react-native"

export default function ThemeSwitcher({ toggle }){
    
    const color = useColorScheme();

    return(
        <View>
            <Button title = "Cambiar tema" onPress={ toggle }>
            </Button>
            <Text>{"\n"}</Text>
        </View>
    )
}