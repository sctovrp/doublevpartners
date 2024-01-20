import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export const UserInfoItems = (props) => {
  if (Object.keys(props).length === 1) return null
  return (
    <View style={[styles.cardWrappper]}>
      <View style={[styles.imageSection]}>
        <Image
          source={{ uri: props.avatar_url }}
          style={{ width: "110%", height: "110%", borderRadius: 0 }}
        />
      </View>
      <View style={[styles.slackContainer]}></View>
      <View style={[styles.infoSection]}>
        <View style={[styles.seccionTitle]}>
          <Text
            style={[styles.titleValue]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {props.login.toUpperCase()}
          </Text>
          <Text
            style={[styles.titleSub]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {props.name ? props.name : "na"}
          </Text>
        </View>
        <View style={[styles.seccionDetails]}>
          <View style={[styles.seccion]}>
            <Text style={[styles.seccionLabel]} numberOfLines={1}>
              {props.cardType ? "Followers" : "Score"}
            </Text>
            <Text style={[styles.seccionValue]} numberOfLines={1}>
              {props.cardType ? props.followers : props.score}
            </Text>
          </View>
          <View style={[styles.separator]}></View>
          <View style={[styles.seccion]}>
            <Text style={[styles.seccionLabel]} numberOfLines={1}>
              ID
            </Text>
            <Text style={[styles.seccionValue]} numberOfLines={1}>
              {props.id}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrappper: {
    flex: 0,
    padding: 0,
    height: 150,
    flexDirection: "row",
    position: "relative",
    paddingTop: 30,
  },
  imageSection: {
    position: "absolute",
    top: 0,
    left: 10,
    zIndex: 100,
    flex: 1,
    paddingHorizontal: 5,
    borderRadius: 3,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 10,
    paddingVertical: 5,
    borderRadius: 100,
    height: 100,
    width: 100,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  slackContainer: {
    flex: 1,
  },
  infoSection: {
    flex: 3,
    borderRadius: 5,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 10,
    paddingVertical: 5,
    paddingLeft: 20,
  },

  seccionTitle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },

  seccionDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  seccion: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  seccionLabel: {
    flex: 1,
    textAlign: "left",
    fontSize: 9,
    opacity: 0.7,
    lineHeight: 8,
    textAlignVertical: "bottom",
    fontFamily: "Poppins_900Black",
    color: "#666666",
  },
  seccionValue: {
    flex: 2,
    fontSize: 25,
    textAlign: "left",
    textAlignVertical: "top",
    lineHeight: 28,
    fontFamily: "Poppins_500Medium",
    color: "#555555",
  },
  separator: {
    width: 1,
    height: 50,
    backgroundColor: "#E0E0E0",
    alignSelf: "center",
  },
  titleValue: {
    flex: 1,
    fontSize: 25,
    textAlign: "left",
    textAlignVertical: "bottom",
    lineHeight: 1,
    fontFamily: "Poppins_500Medium",
    color: "#555555",
  },
  titleSub: {
    flex: 1,
    fontSize: 9,
    opacity: 0.7,
    lineHeight: 12,
    textAlignVertical: "top",
    fontFamily: "Poppins_600SemiBold_Italic",
    color: "#666666",
  },
});
