import { ScrollView, StyleSheet, View, Alert, Button } from "react-native";
import { useState , useEffect} from "react";

import { useFormik } from "formik";
import uuid from 'react-native-uuid';

import { launchImageLibraryAsync } from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


//custom usable Input field
import InputField from "./UI/InputField";
import Counter from "./UI/Counter";
import DoubleChoice  from './UI/DoubleChoice';
import FourChoices from "./UI/FourChoices";
import ImageList from "./UI/ImageList";
import ImagePicker from "./ImagePicker";


const UnitDataForm = () => {

  useEffect(() => {
    async function GeTStoredData() {
      const data = await AsyncStorage.getItem('userdata');
      if(data) setInputs(JSON.parse(data))}

    GeTStoredData()
  } , [])

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
    photo: { value: [], valid: true },
  });

  useEffect(() => {
    async function saveData ()  {
     await AsyncStorage.setItem('userdata' , JSON.stringify(Inputs))
    }

    saveData()

  } , [Inputs])

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

  const FurnishedDataHandler = (identifier) => {
    if(identifier === 'Yes') {
      setInputs((prevData) => {return {...prevData , Furnished: { value: "Yes", valid: true }}})
    }else{
      setInputs((prevData) => {return {...prevData , Furnished: { value: "No", valid: true }}})
    }

  }

  const KitchenDataHandler = (identifier) => {
    if(identifier === 'Open') {
      setInputs((prevData) => {return {...prevData , kitchen: { value: "Open", valid: true }}})
    }else{
      setInputs((prevData) => {return {...prevData , kitchen: { value: "Closed", valid: true }}})
    }
  }


  const ParkingDataHandler = (identifier) => {
    if(identifier === 'Split') {
      setInputs((prevData) => {return {...prevData , Parking : { value: "Split", valid: true }}})
    }else{
      setInputs((prevData) => {return {...prevData , Parking : { value: "Central", valid: true }}})
    }

  }


  const AcDataHandler = (identifier) => {

    if(identifier){
      setInputs((prevData) => { return {...prevData , selectAc: { value: identifier , valid: true }  }  })
    }
  }

  const ImageUpdateHandler = ({uri}) => {

    if(uri){
      setInputs((prevData) => { return {...prevData , photo: { value: [...prevData.photo.value , { uri: uri , id: uuid.v4() } ] , valid: true }} })
      AsyncStorage.setItem('userdata' , JSON.stringify(Inputs))
    }


    }


const ImageDeleteHandler = ({item}) => {

  if(item) { 
    setInputs((prevData) => { return {...prevData , photo: { value: prevData.photo.value.filter((photo) => photo.id !== item.id) , valid: true }} }) 
   AsyncStorage.setItem('userdata' , JSON.stringify(Inputs))
}}

async function ChooseImageHandler() {

  try{
   const images = await launchImageLibraryAsync({allowsMultipleSelection: true})

   if(images.selected) {
    const selectedImages =  images.selected.map((item) => {return { uri: item.uri , id: uuid.v4() }})
    setInputs((prevData) => { return {...prevData , photo: { value: [...prevData.photo.value , ...selectedImages ] , valid: true }} })
   
   }else {
    setInputs((prevData) => { return {...prevData , photo: { value: [...prevData.photo.value , { uri: images.uri , id: uuid.v4() } ] , valid: true }} })
   }

  }
  catch(error) {
    Alert.alert('Error' , 'Something went wrong')
  }


}


  const FurnishedData = [{name: 'Yes' , Action: FurnishedDataHandler.bind(null, 'Yes') } ,
  {name: 'No' , Action: FurnishedDataHandler.bind(null, 'No') }]

  const KitchenData = [{name: 'Closed' , Action: KitchenDataHandler.bind(null, 'Closed') } ,
  {name: 'Open' , Action: KitchenDataHandler.bind(null, 'Open') }]


  const ParkingData = [{name: 'Split' , Action: ParkingDataHandler.bind(null, 'Split') } ,
  {name: 'Central' , Action: ParkingDataHandler.bind(null, 'Central') }]

  const showData = () => {
   console.log(Object.values(Inputs))
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

        <View style={Styles.counterFlex}>
        <DoubleChoice label='Furnished' data={FurnishedData} defaultValue={Inputs.Furnished.value === 'Yes' ? 'Right' : 'left'} />
        <DoubleChoice label='Kitchen' data={KitchenData} defaultValue={Inputs.kitchen.value === 'Open' ? 'Right' : 'left'} />
        </View>


        <DoubleChoice label='Parking' data={ParkingData} options={['Split' , 'Central']} defaultValue={Inputs.Parking.value === 'Central'? 'Right' : 'left' } />

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

        <FourChoices data={AcDataHandler} defValue={Inputs.selectAc.value} />

        <ImagePicker dispatch={ImageUpdateHandler} selectFn={ChooseImageHandler} />

          <ImageList imageData={Inputs.photo.value} DeleteHandler={ImageDeleteHandler} /> 

          <Button title="submit" onPress={showData} />
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
    width: '100%',

  }
});

export default UnitDataForm;
