import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function DetailsScreen({ route }) {
  const { userData } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.heading}>User Details</Text>
        
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
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