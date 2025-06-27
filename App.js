import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailsScreen from './components/DetailsScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [userData, setUserData] = useState(null);

  const user_details = {
    name: 'S.G.',
    age: 24,
    email: 'sg@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, Cityville',
    occupation: 'Software Developer',
    company: 'Tech Innovations Inc.'
  };

  const setData = async () => {
    try {
      await AsyncStorage.setItem('user_details', JSON.stringify(user_details));
      console.log('Data saved successfully');
    } catch (e) {
      console.error('Save error:', e);
    }
  };

  const showData = async () => {
    try {
      const user = await AsyncStorage.getItem('user_details');
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserData(parsedUser);
      }
    } catch (e) {
      console.error('Read error:', e);
    }
  };

  const clearData = async () => {
    try {
      await AsyncStorage.clear();
      setUserData(null);
      console.log('Storage cleared');
    } catch (e) {
      console.error('Clear error:', e);
    }
  };

  const navigateToDetails = () => {
    if (userData) {
      navigation.navigate('Details', { userData });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Set Data" onPress={setData} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Show Data" onPress={showData} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Clear Data" onPress={clearData} />
      </View>

      {userData && (
        <View style={styles.dataContainer}>
          <Text style={styles.heading}>User Information</Text>
          
          <View style={styles.dataRow}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{userData.name}</Text>
          </View>
          
          <View style={styles.dataRow}>
            <Text style={styles.label}>Age:</Text>
            <Text style={styles.value}>{userData.age}</Text>
          </View>
          
          <View style={styles.dataRow}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{userData.email}</Text>
          </View>
          
          <View style={styles.dataRow}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{userData.phone}</Text>
          </View>
          
          <View style={styles.dataRow}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{userData.address}</Text>
          </View>
          
          <View style={styles.dataRow}>
            <Text style={styles.label}>Occupation:</Text>
            <Text style={styles.value}>{userData.occupation}</Text>
          </View>
          
          <View style={styles.dataRow}>
            <Text style={styles.label}>Company:</Text>
            <Text style={styles.value}>{userData.company}</Text>
          </View>
          
          <View style={[styles.buttonContainer, { marginTop: 20 }]}>
            <Button 
              title="View Details Screen" 
              onPress={navigateToDetails} 
              color="#4CAF50"
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'User Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  buttonContainer: {
    marginVertical: 10
  },
  dataContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10
  },
  dataRow: {
    flexDirection: 'row',
    marginBottom: 12
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    width: 100
  },
  value: {
    fontSize: 16,
    color: '#666',
    flex: 1
  }
});