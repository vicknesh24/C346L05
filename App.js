import { Picker } from '@react-native-picker/picker';
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ToastAndroid } from 'react-native';
import {useState} from 'react';

//Create custom component InputBox for TextInputs with Labels

const InputBox = ({label, onChangeText})=> {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
    </View>
  );
};
const MyApp = () => {
    // Declare variables
    const [pw, setPw] = useState('');
    const [userName, setUserName] = useState('');
    const [userType, setUserType] = useState('');
    return (
        <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text>User Type:</Text>
            <Picker
                style={{ backgroundColor: '#d3d3d3' }}
                onValueChange={(value) => setUserType(value)}
            >
                <Picker.Item label="Admin" value="admin" />
                <Picker.Item label="Guest" value="guest" />
            </Picker>


            {/* Ex1G: Create a TextInput labelled as "User Name".} */}
            {/* <Text>User Name:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={(text) => setUserName(text)} />
             */}

            <InputBox label="User Name:" onChangeText={(text) => setUserName(text)} />
            <Text></Text>
            <Text></Text>
            {/* Ex1B: Add a Picker that is labelled "User Type:" with 2 options Admin and Guest. */}

            {/* Ex1A:  Display the text "Password:" with a simple TextInput underneath */}

            
            


            {/* <Text>Password:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={(text) => setPw(text)}
            secureTextEntry={true} /> */}

            <InputBox label="Password:" onChangeText={(text) => setPw(text)} />
            <Text></Text>
            <Button title="LOG IN" onPress={() => alert('Welcome!' + " " + userType + " " + userName)} />
            <Text></Text>
            <Text></Text>
            <TouchableOpacity onPress={() => alert('Welcome!' )}>
                <Text>Alternative LOG IN</Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>

            {/* Ex1C: Add a Button with the title "LOG IN".   */}
            {/* Ex1D: Display Alert message "Welcome!" when the LOG IN button pressed. */}

            <Text></Text>
			
            {/* Ex1E: Add TouchableOpacity labelled as "Alternative LOG IN" with Alert message "Hi hi!" */}
            {/* Ex1F: change Alert message to Toast message */}
            <TouchableOpacity onPress={() => ToastAndroid.show("Welcome!" , ToastAndroid.SHORT)}>
                <Text>Android LOG IN</Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>
            <TouchableOpacity onPress={() => ToastAndroid.show("Welcome!" +   " " + userType +  " " + userName, ToastAndroid.SHORT)}>
                <Text>User name Show login!</Text>
            </TouchableOpacity>
              <Text></Text>
              <Text></Text>
              <TouchableOpacity onPress={()=> {
              const correctPassword = 'otha';
                  let mymessage = 'Error! Wrong Password!';
                  if (pw == correctPassword) {
                  mymessage = 'Welcome ' + userType + ' ' + userName ;
                  }
                  ToastAndroid.show(mymessage, ToastAndroid.SHORT);
                  }
}>
                <Text>Correct password LOG IN</Text>
                  </TouchableOpacity>
            <Text></Text>
            <Text></Text>
            <Text>Entered password: {pw}</Text>
        </View>
    );
};

export default MyApp;
