import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import axios from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    setIsloading(true);
    try {
      const response = await axios.get(id);
      setResult(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsloading(false);
    }
  };
  useEffect(() => {
    getResult(id);
  }, [id]);
  if (!result) return <></>;
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: { height: 200, width: 300 },
});

export default ResultsShowScreen;
