import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useState } from "react";

import { useFormik } from "formik";

//custom usable Input field

import InputField from "./UI/InputField";
import Counter from "./UI/Counter";

const UnitDataForm = ({ defaultValues }) => {
  const [Inputs, setInputs] = useState({
    unitSize: { value: "", valid: true },
    bedRooms: { value: "", valid: true },
    bathRooms: { value: "", valid: true },
    guestRooms: { value: "", valid: true },
    Longues: { value: "", valid: true },
    Furnished: { value: "", valid: true },
    kitchen: { value: "", valid: true },
    Parking: { value: "", valid: true },
    ElecNo: { value: "", valid: true },
    WaterNo: { value: "", valid: true },
    selectAc: { value: "", valid: true },
    photo: { value: "", valid: true },
  });

  const formik = useFormik({
    initialValues: Inputs,
    // validate: ValidateHandler,
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {


    const Errors = {
      unitSize : '' ,
      bedRooms : '' ,
      bathRooms : '' ,
      guestRooms : '' ,
      Longues : '' ,
      Furnished : '' ,
      kitchen : '' ,
      Parking : '' ,
      ElecNo : '' ,
      WaterNo : '' ,
      selectAc : '' ,
      photo : '' ,
    };

    console.log(inputIdentifier)
    switch (inputIdentifier) {

        case 'unitSize':

        if( !isFinite(enteredValue) || enteredValue === '' )  {
            Errors.unitSize = 'Invalid Value'
            setInputs((prevData) => { return { ...prevData , [inputIdentifier] :  { value: enteredValue  , valid: false} } })
        }else{
            setInputs((prevData) => { return { ...prevData , [inputIdentifier] :  { value: enteredValue  , valid: true} } })
        }
            break;




            default :
             setInputs((curInputs) => {
                return {
                  ...curInputs,
                  [inputIdentifier]: { value: enteredValue, isValid: true },
                };
              });
            break;
    }
  }

  return (
    <View style={Styles.rootContainer}>
      <InputField
        invalid={!Inputs.unitSize.valid}
        label="Unit Size"
        inputStyle={{ width: 350 }}
        textInputConfig={{
          keyboardType: "decimal-pad",
          placeholder: "Enter Size",
          onChangeText: inputChangedHandler.bind(this, "unitSize"),
          value: Inputs.unitSize.value ,
        }}
      />

      <View style={Styles.counterFlex}>
        <Counter la />
      </View>

    <InputField
        invalid={!Inputs.ElecNo.valid}
        label="Electricity Meter No."
        inputStyle={{ width: 350 }}
        textInputConfig={{
        keyboardType: "decimal-pad",
        placeholder: "Electricity Meter Number",
        onChangeText: inputChangedHandler.bind(this, "ElecNo"),
        value: Inputs.ElecNo.value ,
        }}
        />

    <InputField
        invalid={!Inputs.WaterNo.valid}
        label="Water Meter No."
        inputStyle={{ width: 350 }}
        textInputConfig={{
        keyboardType: "decimal-pad",
        placeholder: "Water Meter Number",
        onChangeText: inputChangedHandler.bind(this, "WaterNo"),
        value: Inputs.WaterNo.value ,
        }}
        />
    </View>
  );
};

const Styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  counterFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  }
});

export default UnitDataForm;
