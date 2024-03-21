import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profile}>
        <Image source={require('./design.jpg')} style={styles.profilePicture} />
        <Text style={styles.infoText}>Student Name: Mateke Mpholle</Text>
        <Text style={styles.infoText}>Student Number: 901016571</Text>
        <Text style={styles.infoText}>Current Semester: BSCSMY2S2</Text>
      </View>

      <View style={styles.grades}>
        <Text style={styles.sectionTitle}>Semester Grades:</Text>
        <Text style={styles.infoText}>  web design A</Text>
        <Text style={styles.infoText}>Database systems B</Text>
        <Text style={styles.infoText}> Multimedia A+</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profile: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 700,
    height: 700,
    borderRadius: 35,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
