import {  StyleSheet, Text, View , Pressable } from 'react-native';
import { useState } from 'react';


import { colors } from '../../Utils/Styles';


const DoubleChoice = ({label , data , defaultValue }) => {

    const [chosen , setChosen] = useState(defaultValue)



    const onpressRightSide = () => {
       setChosen('Right')
    }

    const onpressLefttSide = () => {
        setChosen('left')
    }

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.optionsContainer}>

        {data?.map((item , index) => {
      
            if(index % 2 === 0) {
                return( <Pressable key={item.name} style={ ({pressed}) => pressed || chosen === 'left'? styles.leftchosenOption : styles.leftoption }
                onPress={() =>{
                    onpressLefttSide()
                    item.Action()}} >
                <View>
                <Text style={[styles.text , chosen === 'left' && {color: 'white'}]}>{item.name}</Text>
                </View>
                </Pressable>)
            }else{
                return(<Pressable key={item.name} style={ ({pressed}) => pressed || chosen === 'Right'? styles.RightchosenOption : styles.Rightoption  }  onPress={() =>{
                    onpressRightSide()
                    item.Action()}} >
                <View>
                <Text style={[styles.text , chosen === 'Right' && {color: 'white'}]}>{item.name}</Text>
                </View>
                </Pressable>)
            }
        })}






            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        height: 100,
        borderRadius: 10,
        marginHorizontal: 15
    },
    optionsContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 40,
        borderRadius: 10
    },
    label: {
        fontSize: 16,
        color: colors.palette_main_grey,
      },
    Rightoption: {
     height: 50,
     width: 80,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: colors.palette_Sencod_grey,
     borderBottomRightRadius: 10,
     borderTopRightRadius: 10
    },
    RightchosenOption: {
        height: 50,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.palette_success_dark,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    leftoption: {
        height: 50,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.palette_Sencod_grey,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
       },
       leftchosenOption: {
           height: 50,
           width: 80,
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: colors.palette_success_dark,
           borderBottomLeftRadius: 10,
           borderTopLeftRadius: 10,
       },

})

export default DoubleChoice;