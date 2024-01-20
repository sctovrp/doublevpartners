import React, { createContext, useContext, useEffect, useState } from 'react';
import {Button, FlatList, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import { } from '../../helper';
import { useDispatch } from 'react-redux';
import { setFind } from '../../store/slices/search.slice';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const FindGithubInput = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('')

    return(
        <View style={[styles.inputContainer]}>
            
            <TextInput 
                style={[styles.input]}
                placeholder="Search github..."
                onChangeText={e => setTextInput(e)}
                defaultValue={''}
                selectionColor={"#555"}
                cursorColor={"#555"}
            />
            <Pressable onPress={() => dispatch(setFind(textInput))} title='' style={[styles.button]}>
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