import {  StyleSheet, Text, View , Pressable } from 'react-native';
import { colors } from '../../Utils/Styles';

// import  { Ionicons } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons'

const SmallButton = ({onpress , iconName}) => {




    return (
        <Pressable style={( {pressed}) => pressed ? styles.pressed :  styles.rootContainer } onPress={onpress} >
            <View style={styles.text}>
            <Ionicons name={iconName} color='black' size={20} />
            </View>
         </Pressable>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        borderRadius: 5,
        backgroundColor: colors.palette_main_grey,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7
    },
    text: {
        width: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 2,
        backgroundColor: '#E8E8E8',
    }
})

export default SmallButton;