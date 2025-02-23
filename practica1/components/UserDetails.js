import { View, Text } from "react-native";

function UserDetails({nombre, edad, ocupacion}){
    return(
        <View>
            <Text>Nombre: {nombre}</Text>
            <Text>Edad: {edad}</Text>
            <Text>Ocupacion: {ocupacion}</Text>
            <Text>{"\n"}</Text>
        </View>
    );
};

export default UserDetails;