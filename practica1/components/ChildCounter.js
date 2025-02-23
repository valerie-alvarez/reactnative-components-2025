import { View, Text, Button} from "react-native";

const ChildCounter = ({contador, onPress, onReset}) =>{
    return(
    <View>
    <Text>Contador: {contador}</Text>
    <Button onPress={onPress} title = "Clic para sumar al contador"></Button>
    <Button onPress={onReset} title = "Reset"></Button>
    </View>)
}
export default ChildCounter 