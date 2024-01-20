import React, { useContext, useEffect, useState } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';
import { findGitHubQuery } from '../../helper';
import { UserInfoItems } from '../utils/userInfo';

export const GithubFlatlist = () => {
    const find = useSelector(state => state.query.find);
    const [githubList, setGithubList] = useState(null);

    useEffect(() => {
        findGitHubQuery(find).then((data) => {
          setGithubList(data)
        });
    }, [find])
    return(
        <View style={styles.container}>
          <UserInfoItems {...githubList} cardType={true}/> 
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    width: "100%",
  }
});