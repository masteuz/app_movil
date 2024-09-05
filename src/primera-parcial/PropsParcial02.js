import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PropsParcial02 = ({ route }) => {
    const { parametros } = route.params;
    return (
        <View>
            {parametros.map(p => (
                <Text style={styles.text}>Mi nombre es: {p.nombre}, actualmente tengo {p.edad} años. </Text>
            ))}

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 25
    },
});
