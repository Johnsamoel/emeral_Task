import { Button, SafeAreaView, StyleSheet, Text, View , Pressable } from 'react-native';
import { colors } from '../Utils/Styles';

const Landing = ({navigation}) => {

    const NavigationHandler = () => {
        navigation.navigate('Property Details')
    }


    return (
        <SafeAreaView style={style.rootContainer}>
        <View style={style.rootContainer}>

            <View style={style.container}>
                <Text style={style.header}>
                    Welcome
                </Text>
                <Pressable  style={ ({pressed}) => pressed ? [style.button , style.pressed] : style.button} onPress={NavigationHandler}>
                <View>
                    <Text style={style.text}>Next</Text>
                </View>
            </Pressable>
            </View>
        </View>
        </SafeAreaView>
    );
};


const style = StyleSheet.create({
    rootContainer: {
        marginTop: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        height: 300,
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
    pressed: {
        opacity: 0.5
    },
    header : {
        color: colors.palette_success_main,
        fontWeight: 'bold',
        fontSize: 32,
        marginVertical: 35,
        textAlign: 'center'
    }
})
export default Landing;