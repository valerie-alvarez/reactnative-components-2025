import { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

export default function DynamicForm() {
    const [input, setInput] = useState('');
    const [savedInput, setSavedInput] = useState('');
    const [show, SetShow] = useState(false);

    const handlePress = () => {
      setSavedInput(input);
      SetShow(true) }
        
    return(
        <View>
            <TextInput
            style = {styles.input}
            placeholder="Type something" 
            onChangeText={setInput} 
            value={input}/>
            <Button 
            title = "Click me" 
            onPress={handlePress}/>
            <Text>{show ? savedInput  : ''} </Text>
        </View>
        );
};

const styles = StyleSheet.create({
    container: {
      marginBottom: 15, // Espacio entre inputs si hay varios
    },
    input: {
      height: 40,
      borderWidth: 2,
      borderColor: "#007BFF",
      borderRadius: 10,
      paddingHorizontal: 10,
      fontSize: 16,
      backgroundColor: "#fff",
    },
  });