import { Card } from '@rneui/base'
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native';

export const AxiosParcial03 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.error(error));
    }, []);
    return (
        <ScrollView>
            <Text style={styles.text}>Comentarios</Text>
            {data.map(datos => (
                <Card>
                    <Card.Title>{datos.name}</Card.Title>
                    <Card.Divider />
                    <Text>
                        {datos.body}
                    </Text>
                    <Card.Divider />
                    <Text>
                        Email: {datos.email}
                    </Text>
                </Card>
            ))}
        </ScrollView>

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