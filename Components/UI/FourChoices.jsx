import { useState } from "react";
import { View , Text , StyleSheet , Pressable} from "react-native";

import { colors } from "../../Utils/Styles";

const FourChoices = ({data}) => {

    const [Chosen , setChosen] = useState('Split')

    const onpressHandler = (identifier) => {
        data(identifier[0])
        setChosen(identifier[0])
    }

    return (
        <View style={styles.rootComponent}>
            <Text style={styles.label}>Select AC Type</Text>
            <View style={styles.rowContainer}>
            <Pressable style={({pressed}) => pressed || Chosen === 'Split' ? [styles.LeftContainer , styles.choseContainer ] : styles.LeftContainer  } onPress={() => onpressHandler.call(null , ['Split'])} >
            <View >
                <Text>Split</Text>
            </View>
            </Pressable>

            <Pressable style={({pressed}) => pressed || Chosen === 'Central'? [styles.midContainers , styles.choseContainer ] : styles.midContainers  } onPress={() => onpressHandler.call(null , ['Central'])} >
            <View >
                <Text>Central</Text>
            </View>
            </Pressable>

            <Pressable style={({pressed}) => pressed || Chosen === 'Window'? [styles.midContainers , styles.choseContainer  ] : styles.midContainers  } onPress={() => onpressHandler.call(null , ['Window'])}>
            <View>
                <Text>Window</Text>
            </View>
            </Pressable>


            <Pressable style={({pressed}) => pressed || Chosen === 'Not Installed' ? [styles.rightContainer , styles.choseContainer ] : styles.rightContainer  } onPress={() => onpressHandler.call(null , ['Not Installed'])}>
            <View >
                <Text style={{textAlign: 'center'}}>Not Installed</Text>
            </View>
            </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rootComponent: {
        flex: 1,
        height: 150,
        alignItems: 'flex-start',

    },
    label: {
        fontSize: 16,
        color: colors.palette_main_grey,
        marginBottom: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
    },
    midContainers: {
        backgroundColor: 'red',
        height: 60,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.palette_Sencod_grey,
        borderRightColor: colors.palette_main_grey,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderLeftColor:  colors.palette_main_grey,
    },
    rightContainer: {
        height: 60,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.palette_Sencod_grey,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    LeftContainer: {
        height: 60,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.palette_Sencod_grey,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    choseContainer: {
        backgroundColor: colors.palette_success_dark,
        
    }
})

export default FourChoices;