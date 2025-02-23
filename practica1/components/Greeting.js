import { View, Text } from "react-native";

const Greeting = ({name}) => {
  return(
    <View>
      <Text> Hello, {name}!</Text>
      <Text>{"\n"}</Text>
    </View>
  );
};

  export default Greeting; 