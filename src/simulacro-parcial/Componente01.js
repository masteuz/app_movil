import { ListItem } from '@rneui/base';
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export const Componente01 = ({ navigation }) => {

    const [texto, setTexto] = useState('');

    const parametros = [
        {
            nombre: texto ,
            estado: false
        }];

    return (
        <SafeAreaView>
            <Text style={styles.text}>Pantalla principal</Text>

            <TextInput
                style={styles.input}
                onChangeText={setTexto}
                value={texto}
                placeholder='Ingrese texto'
            />


            <ListItem bottomDivider onPress={() => navigation.navigate('Props2', { parametros })}>
                <ListItem.Content >
                    <ListItem.Title>Props02</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => navigation.navigate('Axios3')}>
                <ListItem.Content >
                    <ListItem.Title>Axios03</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => navigation.navigate('AsyncStorage4')}>
                <ListItem.Content >
                    <ListItem.Title>AsyncStorage4</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        marginTop: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 30
    },
});