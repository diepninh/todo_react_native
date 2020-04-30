import React  from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Todoapp</Text>
        </View>
    )

}
const styles =StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 40,
        backgroundColor: '#33CCFF'
    },
    title: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 23,
        fontWeight: 'bold',
    }
});