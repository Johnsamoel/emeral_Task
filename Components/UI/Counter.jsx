import { StyleSheet, Text, TextInput, View } from "react-native";

import { useWindowDimensions } from "react-native";

import SmallButton from "./SmallButton";

import { colors } from "../../Utils/Styles";

const Counter = ({ label, onChange , value }) => {
  const { width, height } = useWindowDimensions();

  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "flex-start",
      marginHorizontal: 25,
      // width: width > 400 ? '100%' : '50%' ,
      minHeight: 100,
    },
    text: {
      fontWeight: "bold",
      fontSize: 15,
    },
    subContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    input: {
      backgroundColor: "#fcfcfc",
      padding: 15,
      fontSize: 18,
      width: 70,
      borderColor: colors.palette_Sencod_grey,
      borderWidth: 1,
      height: 50,
      textAlign: "center",
    },
    label: {
      fontSize: 16,
      color: colors.palette_main_grey,
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.subContainer}>
        <SmallButton iconName="remove" onpress={() => onChange('-')} />
        <TextInput style={styles.input} value={value.toString()} />
        <SmallButton iconName="add-outline" onpress={() => onChange('+')}  />
      </View>
    </View>
  );
};

export default Counter;
