import { ScrollView, StyleSheet, View, Text, Alert } from "react-native";
import { useState } from "react";

import { useFormik } from "formik";

//custom usable Input field

import InputField from "./UI/InputField";
import Counter from "./UI/Counter";

const UnitDataForm = ({ defaultValues }) => {
  const [Inputs, setInputs] = useState({
    unitSize: { value: "", valid: true },
    bedRooms: { value: 0, valid: true },
    bathRooms: { value: 0, valid: true },
    guestRooms: { value: 0, valid: true },
    Longues: { value: 0, valid: true },
    Furnished: { value: "NO", valid: true },
    kitchen: { value: "Open", valid: true },
    Parking: { value: "Central", valid: true },
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

    
        if( !isFinite(enteredValue) || enteredValue === '' )  {
            Errors.unitSize = 'Invalid Value'
            setInputs((prevData) => { return { ...prevData , [inputIdentifier] :  { value: enteredValue  , valid: false} } })
        }else{
          Errors.unitSize = ''
            setInputs((prevData) => { return { ...prevData , [inputIdentifier] :  { value: enteredValue  , valid: true} } })
        }

        return Errors;
       
  }

  const ChangeHandler = (identifier , operation) => {


    if(operation === '+'){
      setInputs((prevValue) => { return { ...prevValue , [identifier] : { value: +prevValue[identifier].value + 1 , valid: true  } } })
    }else{

      setInputs((prevValue) => { 
        if( +prevValue[identifier].value === 0 ){
          Alert.alert('Invalid Operation' , 'you can Not Enter A number less Than zero')
          return prevValue;
        }
        return { ...prevValue , [identifier] : { value: +prevValue[identifier].value - 1 , valid: true  } } })
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
        <Counter label='Bed Rooms' value={ Inputs.bedRooms.value } onChange={ ChangeHandler.bind(this, 'bedRooms') } />
        <Counter label='Bath Rooms'  value={ Inputs.bathRooms.value } onChange={ ChangeHandler.bind(this, 'bathRooms')}/>
      </View>

      <View style={Styles.counterFlex}>
        <Counter label='Guest Rooms' value={ Inputs.guestRooms.value } onChange={ ChangeHandler.bind(this, 'guestRooms')} />
        <Counter label='Longues'  value={ Inputs.Longues.value } onChange={ ChangeHandler.bind(this, 'Longues')}/>
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // alignItems: 'center',
    width: '100%',

  }
});

export default UnitDataForm;
