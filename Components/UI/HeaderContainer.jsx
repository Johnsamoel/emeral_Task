import {  StyleSheet, Text, View } from 'react-native';

// //importing my custom colors
 import { colors }  from '../../Utils/Styles';

const HeaderContainer = ({title , subtitle}) => {
    return (
        <View style={styles.titleContainer}>
        <Text  style={styles.title}>{title}</Text>
        <Text  style={styles.text}>{subtitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingHorizontal: 20
    },
    text: {
        color: colors.palette_success_main,
        fontWeight: '700',
    },
    titleContainer: {
        height: 100,
        // marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5
    }
})

export default HeaderContainer;