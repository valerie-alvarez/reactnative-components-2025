import { View, Text } from "react-native";


const Task = ({task})=>{
    if (task.completed){
        return(
            <View>
                <Text>Task: {task.title}</Text>
                <Text> Status: Completed! </Text>
            </View>)
            }
    else { return(
        <View>
            <Text>Task: {task.title}</Text>
            <Text> Status: Not completed </Text>
            </View>)
    }

  };

  export default Task;