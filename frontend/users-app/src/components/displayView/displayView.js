import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { SearchUserInput } from "../search/searchUserInput";
import { UsersFlatList } from "../search/user";
import { FindGithubInput } from "../find/findGithubInput";
import { GithubFlatlist } from "../find/github";
import { ToggleDisplaySearch } from "../toggleDisplaySearch/toggleDisplaySearch";

export const DisplayView = () => {
  const toggleDisplaySearch = useSelector(
    (state) => state.query.toggleDisplaySearch
  );

  return (
    <View style={styles.container}>
      {toggleDisplaySearch ? (
        <>
          <SearchUserInput></SearchUserInput>
          <UsersFlatList></UsersFlatList>
        </>
      ) : (
        <>
          <FindGithubInput></FindGithubInput>
          <GithubFlatlist></GithubFlatlist>
        </>
      )}
      <ToggleDisplaySearch></ToggleDisplaySearch>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
