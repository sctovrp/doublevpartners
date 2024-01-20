import React, { useContext, useEffect, useState } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { findGitHubQuery, searchUserQuery } from '../../helper';
import { useSelector } from 'react-redux';
import { UserInfoItems } from '../utils/userInfo';



export const UsersFlatList = () => {

    const search = useSelector(state => state.query.search)
    const [userList, setUserList] = useState(null);


    useEffect(() => {
        searchUserQuery(search).then((data) => {
            setUserList(data)
        })
    }, [search])


    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={userList}
                renderItem={({item}) => <UserInfoItems {...item} cardType={false} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
      width: "100%",
    },
    chart: {
        flex: 1,
    },
    list: {
        flex: 1,
    }
});
