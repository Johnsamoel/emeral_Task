import {  StyleSheet, Text, View , TextInput} from 'react-native';

// colors
import { colors } from '../../Utils/Styles';

const InputField = ({ label, invalid, style, textInputConfig , inputStyle }) => {

    const inputStyles = [styles.input];

    if (invalid) {
        inputStyles.push(styles.invalidInput);
      }

    return (
        <View style={[ styles.inputContainer ,style]}>
        <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
        <TextInput style={[inputStyles , inputStyle]} {...textInputConfig} />
      </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
      marginVertical: 18,
    },
    label: {
      fontSize: 16,
      color: colors.palette_main_grey,
      marginBottom: 10,
    },
    input: {
      backgroundColor: 'transparent',
      padding: 15,
      borderRadius: 6,
      fontSize: 18,
      width: 300,
      borderColor: colors.palette_Sencod_grey,
      borderWidth: 1
    },
    invalidLabel: {
      color: colors.palette_error_main
    },
    invalidInput: {
      borderColor: colors.palette_error_dark,
    }
  });

export default InputField;