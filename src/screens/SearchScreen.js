import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage, isLoading] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {isLoading ? (
        <Text style={{ alignSelf: "center" }}>Loading...</Text>
      ) : (
        <ScrollView>
          <ResultsList
            results={filterResultsByPrice("₺")}
            title="Cost Effective"
          />
          <ResultsList
            results={filterResultsByPrice("₺₺")}
            title="Bit Pricier"
          />
          <ResultsList
            results={filterResultsByPrice("₺₺₺")}
            title="Big Spender"
          />
          <ResultsList
            results={filterResultsByPrice(undefined)}
            title="Not Defined"
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, paddingBottom: 0, flex: 1 },
});

export default SearchScreen;
