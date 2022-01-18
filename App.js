import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottle, setBottle] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [rescolor, setRescolor] = useState({ fontSize:'25px',color: 'lightgreen'});
  const [bloodalcohol, setBloodalcohol] = useState(0);


 const Bottles= Array();
 Bottles.push({label: '1 bottles', value: 1});
 Bottles.push({label: '2 bottles', value: 2});
 Bottles.push({label: '3 bottles', value: 3});
 Bottles.push({label: '4 bottles', value: 4});
 Bottles.push({label: '5 bottles', value: 5});
 Bottles.push({label: '6 bottles', value: 6});
 Bottles.push({label: '7 bottles', value: 7});
 Bottles.push({label: '8 bottles', value: 8});
 Bottles.push({label: '9 bottles', value: 9});
 Bottles.push({label: '10 bottles', value: 10});


 const Times= Array();
 Times.push({label: '1 Hours', value: 1});
 Times.push({label: '2 Hours', value: 2});
 Times.push({label: '3 Hours', value: 3});
 Times.push({label: '4 Hours', value: 4});
 Times.push({label: '5 Hours', value: 5});
 Times.push({label: '6 Hours', value: 6});
 Times.push({label: '7 Hours', value: 7});
 Times.push({label: '8 Hours', value: 8});
 Times.push({label: '9 Hours', value: 9});
 Times.push({label: '10 Hours', value: 10});

 const genders = [
   {label: 'Male', value: 'male'},
   {label: 'Female', value: 'female' }
 ];

 function calculate() {
   let result = 0
   let litres = 0
   let grams = 0
   let burning = 0
   let gramsleft = 0

  if (weight===0 ) {
    alert("Please enter your weight!")
  }
   else if (gender === 'male') {
     litres = bottle * 0.33
     grams = litres * 8 * 4.5
     burning = weight / 10
     gramsleft = grams - (burning * time)
     result = gramsleft / (weight * 0.7)
     
   } else {
    litres = bottle * 0.33
    grams = litres * 8 * 4.5
    burning = weight / 10
    gramsleft = grams - (burning * time)
    result = gramsleft / (weight * 0.6)
    
    
   }
   if (result>0){
   setBloodalcohol(result);
   }else if (result<0) {
     result = 0
     setBloodalcohol(result)
   } 
   if (result>1){
     setRescolor({fontSize:'25px',color:'red'});
   } else if (result>0.4){
    setRescolor({fontSize:'25px',color:'yellow'});
   } else  {
    setRescolor({fontSize:'25px',color:'lightgreen'});
   }
 }
  return ( 
   
    <View style={styles.container}>
      <View style={styles.heading}>
       <Text style={styles.baseText}>Alcometer</Text>
       </View>
      <View style={styles.field}>
      <Text >Weight</Text>
     <TextInput style={styles.input}
     onChangeText={text => setWeight(text)}
     placeholder="in kilograms"
     keyboardType='numeric'></TextInput>
    </View>
    <View style={styles.field}>
      <Text> Bottle</Text>
      <Picker style ={styles.bottle}
      onValueChange={(itemValue) => setBottle(itemValue)}
      selectedValue={bottle}
      >
        {Bottles.map((bottle, index) => (
        <Picker.Item key={index} label={bottle.label} value={bottle.value}/>
        ))
        }
      </Picker>
    </View>
    <View style={styles.field}>
      <Text> Time</Text>
      <Picker style ={styles.time}
      onValueChange={(itemValue) => setTime(itemValue)}
      selectedValue={time}
      >
        {Times.map((time, index) => (
        <Picker.Item key={index} label={time.label} value={time.value}/>
        ))
        }
      </Picker>
    </View>

    <View style={styles.field}>
      <Text>Gender</Text>
      <RadioForm style={styles.radio}
      buttonSize = {10}
      radio_props={genders}
      initial={0}
      onPress={(value) => {setGender(value)}}
      />
    </View>
    <View style={styles.answer}>
      <Text style={rescolor}>{bloodalcohol.toFixed(2)}</Text>
      </View>
    
    <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#E8E8E8',
  },
  field: {
    margin: 10,
  },
  input: {
    marginLeft: 2,
    backgroundColor: 'white',
    padding: 5,
  },
  radio:{
    marginTop: 10,
    marginBottom: 10,
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  heading: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  answer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
