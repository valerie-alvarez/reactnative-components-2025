import { View, Image, FlatList } from "react-native"

const Item = ({imagen}) => (
    <View style={{ flex: 1 }}>
       <Image source = {{url: imagen}} style={{ width: 200, height: 200 }}>
                </Image>
    </View>
  );
  

const ImageList = ( { urls }) =>{
    return(
        <FlatList
        data={urls}
        renderItem={({item}) => <Item imagen={item}
        /> }
        nestedScrollEnabled={true} />
    )
}
export default ImageList