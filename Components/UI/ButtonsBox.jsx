
import { View , Text , Pressable , StyleSheet } from 'react-native';
import { colors } from '../../Utils/Styles';

const ButtonsBox = ({onBackfn , nextfn}) => {
    return (
       <View style={styles.root}>
        <View style={styles.box}>
            <Pressable style={ ({pressed}) => pressed ? [styles.button , styles.outlined , styles.pressed] : [styles.button , styles.outlined]} onPress={onBackfn}>
                <View>
                    <Text style={[styles.text , styles.outlinedText]}>Back</Text>
                </View>
            </Pressable>
            <Pressable  style={ ({pressed}) => pressed ? [styles.button , styles.pressed] : styles.button} onPress={nextfn}>
                <View>
                    <Text style={styles.text}>Next</Text>
                </View>
            </Pressable>

        </View>
       </View>
    );
};

const styles = StyleSheet.create({
    root:{
        flex: 1,
        width: 350,
        height: 100,
        justifyContent: 'flex-end',
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: colors.palette_success_main,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    },
    outlined: {
        backgroundColor: 'transparent',
        borderColor: colors.palette_success_dark,
        borderWidth: 3
    },
    outlinedText: {
        color: colors.palette_success_main,
    },
    pressed: {
        opacity: 0.5
    }
})

export default ButtonsBox;