import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useTMDBInfinite } from "@/service/swr";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Search() {
  const [search, onSearch] = useState("");
  const router = useRouter();
  const moviesList = useTMDBInfinite(
    search === "" ? null : "/search/movie",
    search,
  );
  const inputRef = useRef<TextInput>(null);

  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }, []),
  );

  console.log(moviesList.data);
  return (
    <View className="flex-1 bg-primary h-full w-full">
      <Image source={images.bg} className="w-full absolute z-0" />
      <View className="flex-1 px-5 mb-20 w-full h-full">
        <View className="flex-row w-full h-max flex justify-center items-center pr-[32px] pl-[32px]">
          <Image source={icons.logo} className="w-12 h-10 mt-8 mb-5 mr-8" />
          <Text className="text-white text-[24px] font-bold">Cinniflex</Text>
        </View>
        <SearchBar
          placeholder="Search for a movie"
          value={search}
          onChangeText={onSearch}
          onPress={() => {}}
        />
        {moviesList.isLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : (
          <>
            <FlatList
              className="my-4 flex-1"
              contentContainerClassName="pb-10"
              data={moviesList.data?.flat()}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id}
              numColumns={3}
              columnWrapperClassName="justify-between mb-4"
              onEndReached={() => {
                if (!moviesList.isValidating) {
                  moviesList.setSize((size) => size + 1);
                }
              }}
              onEndReachedThreshold={2}
              ListFooterComponent={
                moviesList.isValidating ? (
                  <ActivityIndicator
                    size="small"
                    color="#ab8bff"
                    className="my-4"
                  />
                ) : null
              }
            />
          </>
        )}
      </View>
    </View>
  );
}
