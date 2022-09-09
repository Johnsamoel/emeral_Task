import {  StyleSheet, Text, TextInput, View } from 'react-native';

import { useWindowDimensions } from 'react-native';

import SmallButton from './SmallButton';

import { colors } from '../../Utils/Styles';

const Counter = ({label, onChangeFunction, }) => {

    const {width , height } = useWindowDimensions() 
   

    const styles = StyleSheet.create({
        rootContainer: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            // width: width > 400 ? '100%' : '50%' ,
            minHeight: 100
        },
        text: {
            fontWeight: 'bold',
            fontSize: 15
        },
        subContainer: {
            flexDirection:"row",
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        input: {
            backgroundColor: '#fcfcfc',
            padding: 15,
            fontSize: 18,
            width: 100,
            borderColor: colors.palette_Sencod_grey,
            borderWidth: 1,
            height: 50,
            textAlign: 'center'

        },label: {
            fontSize: 16,
            color: colors.palette_main_grey,
            marginBottom: 10,
          }
    })
    

    return (
        <View style={styles.rootContainer}>
         <Text style={styles.label}>12</Text>
        <View style={styles.subContainer}>
        <SmallButton iconName='remove' />
        <TextInput style={styles.input} />
        <SmallButton iconName='add-outline' />
        </View>
        </View>
    );
};


export default Counter;