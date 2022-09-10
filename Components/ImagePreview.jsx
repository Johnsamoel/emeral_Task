import { View  , Image , StyleSheet, Pressable } from "react-native";

import uuid from 'react-native-uuid';
import { colors } from "../Utils/Styles";

const ImagePreview = ({item , onpressFn}) => {



    const onpressHandler = () => {
        onpressFn(item)
    }
    
    return (
        <Pressable onPress={onpressHandler} style={styles.rootContainer}>
        <View style={styles.rootContainer}>
           <Image source={{uri: item.item.uri.toString()}} style={{width: 100 , height: 150 , borderRadius: 10}} />
        </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    rootContainer :{
        flex: 1,
        width: 120,
        height: 150,
        borderRadius: 10,
        marginVertical: 15,
        padding: 10,
    }
})

export default ImagePreview;