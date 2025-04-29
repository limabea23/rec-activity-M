import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Card({image, title, description}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    card: {
    backgroundColor: '#f0ebeb', 
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    maxWidth: 300,
    minHeight: 150,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        fontSize: 10,
        textAlign: 'justify',
    }
})