import { Pressable , View , StyleSheet , Text} from 'react-native';

import { colors } from '../../Utils/Styles';

const SelectImageButton = ({onPressFn}) => {

    const onpressHandler = () => {
        onPressFn()
    }
    return (
           <Pressable style={({pressed}) => pressed? styles.pressed : styles.firstContainer} onPress={onpressHandler}>
            <View style={styles.rootContainer}>

            <Text style={styles.text}>Choose Images</Text>  
            </View>
            </Pressable>
    );
};


const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        width: 150,
        height: 40,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    firstContainer: {
        flex:1,
        width: 180,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        borderRadius: 12,
        marginVertical: 15,
        padding: 5,
        backgroundColor: colors.palette_success_main,
    },
    pressed : {
        opacity: 0.5
    },
    text: {
        color: colors.palette_success_dark,
        fontWeight: 'bold',
    }
})
export default SelectImageButton;