import React, { createContext, useContext, useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { SearchUserQuery } from '../../helper';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/slices/search.slice';

import { MaterialIcons } from '@expo/vector-icons';

export const SearchUserInput = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('')

    return (
        <View style={[styles.inputContainer]}>
            <TextInput
                style={[styles.input]}
                placeholder="Search..."
                onChangeText={e => setTextInput(e)}
                defaultValue={''}
                selectionColor={"#555"}
                cursorColor={"#555"}
            />
            <Pressable onPress={() => dispatch(setSearch(textInput))} title='' style={[styles.button]} >
                <MaterialIcons name="navigate-next" size={30} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        height: 55,
        width: "100%",
        paddingHorizontal: 10,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fefefe",
    },
    input: {
        flex: 7,
        height: "100%",
        backgroundColor: "#efefef",
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        paddingHorizontal: 20,
        fontFamily: "Poppins_800ExtraBold",
        fontSize: 15,
        color: "#222222",
    },
    button: {
        flex: 1,
        height: "100%",
        padding: 10,
        backgroundColor: "#efefef",
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        borderLeftColor: "#fff",
        borderLeftWidth: 5,
        justifyContent: "center",
        alignItems: "center",
    }
})
