import React from 'react';
import { Pressable , StyleSheet , Text , View} from 'react-native';
import { colors } from '../../Utils/Styles';

const UploadButon = ({onPress}) => {
    return (
        <Pressable style={({pressed}) => pressed? [styles.rootContainer, styles.pressed] : styles.rootContainer} onPress={onPress}>
            <View>
            <Text style={styles.text}>Capture Image</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.palette_success_main,
        borderRadius: 10,
        padding: 10,
        width: 150,
        height: 50,
        marginVertical: 5
    },
    text: {
        fontWeight: '800',
        color: colors.palette_success_dark
    },
    pressed: {
        opacity: 0.5
    }
})

export default UploadButon;