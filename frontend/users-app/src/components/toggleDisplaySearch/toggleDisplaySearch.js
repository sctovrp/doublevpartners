import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setToggleDisplaySearch } from "../../store/slices/search.slice";
import { SimpleLineIcons } from '@expo/vector-icons';

import store from "../../store/store";

export const ToggleDisplaySearch = () => {
  const dispatch = useDispatch();
  const [toggleSearch, setToggleSearch] = useState(true);

  return (
    <View>
      <Pressable onPress={() => {
          dispatch(setToggleDisplaySearch())
          setToggleSearch(!toggleSearch)
        }}>
        {!toggleSearch ? (<SimpleLineIcons name="chart" size={40} color="black" />) : (<SimpleLineIcons name="user" size={40} color="black" />)}
        
      </Pressable>
    </View>
  );
};

