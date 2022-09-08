import { StyleSheet, Text, View } from 'react-native';
 
const PropertyDetails = () => {
    return (
        <View style={styles.rootContainer}>
            <Text  style={styles.text}>just a damin view</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    text: {
        color: 'red'
    }
})

export default PropertyDetails;