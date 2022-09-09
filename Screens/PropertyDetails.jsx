import { ScrollView, StyleSheet, View } from 'react-native';
import HeaderContainer from '../Components/UI/HeaderContainer';
 
//custom colors
import { colors } from '../Utils/Styles';

// custom components
import UnitDataForm from '../Components/UnitDataForm';

const PropertyDetails = () => {
    return (
        <ScrollView style={styles.rootContainer}>
        <View style={styles.rootContainer}>
                    <HeaderContainer title='Step 1 - Unit Details' subtitle='Please Enter the Unit information below'/>
                    <UnitDataForm />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10
    }
})

export default PropertyDetails;