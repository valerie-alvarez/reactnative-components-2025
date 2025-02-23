import { useState } from "react";
import { View, Text } from "react-native";
import ImageList from "./ImageList";

export default function ImageGallery(){
    const [imageArray, setImageArray] = useState(
        ['https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic2709904.webp?w=1279&h=929&q=100',
            'https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic1740714.webp?w=1279&h=853&q=100',
            'https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic2709891.webp?w=1279&h=1279&q=100'

        ])

        return(
            <View style={{ flex: 1 }}>
                <Text style = {{fontWeight :'bold', 
                textAlign: 'center',
                fontSize: 24}}> World Wonders </Text>
                 <Text>{"\n"}</Text>
                <ImageList urls={imageArray} /> 
                <Text>{"\n"}</Text>
            </View>
        )
    }