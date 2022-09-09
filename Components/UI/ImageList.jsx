import { View , FlatList , StyleSheet , Image} from "react-native";

import ImagePreview from "../ImagePreview";

const ImageList = ({imageData , DeleteHandler}) => {

    const RenderMethod = (item) => <ImagePreview item={item} onpressFn={DeleteHandler} />

    return (
        <View style={styles.rootContainer}>
            <FlatList data={imageData} keyExtractor={(item) => item.id } renderItem={RenderMethod}  horizontal={true}  />
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        height: 200 ,
        width: 350,
        alignItems:'center'
        
    }
})

export default ImageList;