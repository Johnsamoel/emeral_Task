import { View , FlatList , StyleSheet , Image , Text} from "react-native";
import { colors } from "../../Utils/Styles";

import ImagePreview from "../ImagePreview";

const ImageList = ({imageData , DeleteHandler}) => {

    const RenderMethod = (item) => <ImagePreview item={item} onpressFn={DeleteHandler} />

    return (
        <View style={styles.rootContainer}>

            { imageData.length > 0 ?   <FlatList data={imageData} keyExtractor={(item) => item.id } renderItem={RenderMethod}  horizontal={true}  />
            : <Text style={{fontWeight: 'bold' , fontSize: 18 , color:colors.palette_main_grey}}>No photos Added Yet.</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        height: 220 ,
        width: 335,
        alignItems:'center',
        backgroundColor: colors.palette_Sencod_grey,
        borderRadius: 12,
        justifyContent: 'center',
        marginHorizontal: 10
    }
})

export default ImageList;