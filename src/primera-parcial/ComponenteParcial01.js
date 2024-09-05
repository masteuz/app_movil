import { ListItem } from '@rneui/base';
import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button, Overlay } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ComponenteParcial01 = ({ navigation }) => {

    const parametros = [
        {
            nombre: "Mateos",
            edad: 22
        }];

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <SafeAreaView>
            <Text style={styles.text}>Examen Primera Parcial</Text>

            <Button title="Abrir Overlay" onPress={toggleOverlay} />

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}
                style={{ width: 300, height: 250, padding: 10 }}>
                <Text style={styles.text}>Bienvenido al examen!</Text>
                <Button title="Cerrar" onPress={toggleOverlay} />
            </Overlay>


            <ListItem bottomDivider onPress={() => navigation.navigate('PropsParcial02', { parametros })}>
                <ListItem.Content >
                    <ListItem.Title>Props Parcial 02</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => navigation.navigate('AxiosParcial03')}>
                <ListItem.Content >
                    <ListItem.Title>Axios Paricial 03</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => navigation.navigate('AsyncStorageParcial04')}>
                <ListItem.Content >
                    <ListItem.Title>Async Storage Parcial 04</ListItem.Title>
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
        fontSize: 30,
        textAlign: 'center'
    },
});