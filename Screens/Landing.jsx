import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Landing = ({navigation}) => {

    const NavigationHandler = () => {
        navigation.navigate('Property Details')
    }


    return (
        <SafeAreaView style={style.rootContainer}>
        <View style={style.rootContainer}>

            <View style={style.container}>
                <Text>
                    Let's start the app
                </Text>
                <Button title='start' onPress={NavigationHandler}/>
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
        alignContent: 'center'
    }
})
export default Landing;