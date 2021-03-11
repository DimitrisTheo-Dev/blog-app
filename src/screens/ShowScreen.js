import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
    );

    return (
        <View styles={styles.row}>
            <Text styles={styles.title}>{blogPost.title}</Text>
            <Text styles={styles.title}>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', navigation.getParam('id'))}>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18,
    },
});

export default ShowScreen;