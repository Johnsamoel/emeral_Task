import { View , StyleSheet , Text, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { colors } from "../Utils/Styles";
import UploadButon from "./UI/UploadButon";

import { launchCameraAsync } from 'expo-image-picker';

const ImagePicker = ({dispatch}) => {

    async function TakeImageHandler() {
    try{     const img =  await launchCameraAsync()
        dispatch(img)
    } catch (err) {
        Alert.alert('Error' , 'SomeThing went wrong!')
    }

        
 }


    return (
        <>
        <Text style={ styles.label}>Upload Photo</Text>
        <View style={styles.rootContainer}>
        <Ionicons name="images" size={55} color={colors.palette_main_grey} />
        <Text style={styles.text}>Select A photo From your gallery</Text>
        <UploadButon onPress={TakeImageHandler} />
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1 ,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 200 ,
        marginHorizontal: 10 ,
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: colors.palette_Sencod_grey,
        padding: 10
    },
    label: {
        fontSize: 16,
        color: colors.palette_main_grey,
        marginBottom: 20,
    },
    text:{
            marginVertical: 10,
            fontSize: 16,
            color: colors.palette_main_grey,
            marginBottom: 20,
    }
})

export default ImagePicker;