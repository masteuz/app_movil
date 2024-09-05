import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Button, ListItem, Text } from '@rneui/themed';


const AsyncStorageParcial04 = () => {
    const [carrera, setCarrera] = useState('');
    const [facultad, setFacultad] = useState('');
    const [key, setKey] = useState('');
    const [dataList, setDataList] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);


    useEffect(() => {
        listar();
    }, []);

    const listar = async () => {
        try {
            setIsDisabled(false);
            const keys = await AsyncStorage.getAllKeys();
            const items = await AsyncStorage.multiGet(keys);
            setDataList(
                items.map(([id, data]) => {
                    const { carrera, facultad } = JSON.parse(data);
                    return {
                        id,
                        carrera,
                        facultad,
                    };
                })
            );
            // setDataList(items.map(([id, carrera, facultad]) => ({ id, carrera, facultad })));
        } catch (error) {
            console.error('Error loading lista', error);
        }
    };

    const editar = async (id, carrera, facultad) => {
        setKey(id);
        setCarrera(carrera);
        setFacultad(facultad);
        setIsDisabled(true);
    }

    const guardar = async () => {
        try {
            if (carrera.trim() === '' || facultad.trim === '') {
                Alert.alert('Error', 'Completa todos los campos');
                return;
            }
            if (key.trim() === '') { //Guardar
                const key = `item_${Date.now()}`;
                await AsyncStorage.setItem(key, JSON.stringify({ carrera, facultad }));
                setCarrera('');
                setFacultad('');
                setKey('');
                listar();
                Alert.alert('Éxito', 'Datos guardados');

            } else {//Actualizar
                actualizar();
            }
        } catch (error) {
            Alert.alert('Error', 'Error al guardar los datos');
            console.error(error);
        }
    };

    const actualizar = async () => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify({ carrera, facultad }));
            setCarrera('');
            setFacultad('');
            setKey('');
            listar();
            Alert.alert('Éxito', 'Datos actualizados');
        } catch (error) {
            Alert.alert('Error', 'Error al actualizar los datos');
            console.error(error);
        }
    };


    const eliminar = async (id) => {
        try {
            await AsyncStorage.removeItem(id);
            listar();
            Alert.alert('Éxito', 'Datos eliminados');
        } catch (error) {
            Alert.alert('Error', 'Error al eliminar los datos');
            console.error(error);
        }
    };


    return (
        <View style={styles.container}>
            <View>
                <Input
                    placeholder="Código"
                    disabled={isDisabled}
                    value={key}
                    style={styles.input}
                />
            </View>
            <View>
                <Input
                    placeholder="Ingrese la carrera"
                    value={carrera}
                    onChangeText={setCarrera}
                    style={styles.input}
                />
            </View>
            <View>
                <Input
                    placeholder="Ingrese la facultad"
                    value={facultad}
                    onChangeText={setFacultad}
                    style={styles.input}
                />
            </View>
            <Button title={isDisabled ? "Actualizar" : "Guardar"} onPress={guardar} />
            <Text h4 style={styles.title}>Lista de carreras:</Text>
            {dataList.map(({ id, carrera, facultad }) => (
                <ListItem key={id} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{carrera}</ListItem.Title>
                        <ListItem.Title>{facultad}</ListItem.Title>
                        <ListItem.Subtitle>{id}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Button title={'Editar'} onPress={() => editar(id, carrera, facultad)} />
                    <Button style={styles.eliminar} title={'Eliminar'} onPress={() => eliminar(id)} />
                </ListItem>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        marginBottom: 15,
    },
    title: {
        marginVertical: 10,
    },
    overlayContent: {
        width: '80%',
        padding: 20,
    }
});
export default AsyncStorageParcial04