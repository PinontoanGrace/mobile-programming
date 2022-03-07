import React, {useState} from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

//[1] Functional Component in react native
 const App = () => {
   return <Text>Hello, My name is John Doe</Text>;
 };

//[2 . 1] Props in react native
const Name = props => {
 return (
  <View>
   <Text>Hello! My name is {props.name}</Text>
  </View>
 );
};

const App = () => {
 return (
   <View>
     <Name name="Matthew" />
     <Name name="Syalom" />
     <Name name="Majesty" />
     <Name name="Grace" />
   </View>
  );
};

//  [2.2] State
 const Name = props => {
   const [isFail, setIsFail] = useState(true);

   return (
     <View>
       <Text>I am {props.name}, and I got C- on my exam</Text>
       <Button
         onPress={() => {
           setIsFail(false);
         }}
         disabled={!isFail}
         title={isFail ? 'You have to study harder' : 'Great Work'}
       />
     </View>
   );
 };

 const App = () => {
   return (
     <>
       <Name name="Matthew" />
       <Name name="Geby" />
       <Name name="Majesty" />
       <Name name="Grace" />
     </>
   );
};

//[3] Styling
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>RED</Text>
      <Text style={styles.blue}>BLUE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 50,
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
  },
  blue: {
    color: 'blue',
    fontWeight: '100',
    fontSize: 20,
  },
});

export default App;
