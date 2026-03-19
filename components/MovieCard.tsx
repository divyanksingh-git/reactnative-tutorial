import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function MovieCard({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}: Movie) {
  const year = release_date?.split("-")[0];

  return (
    <View className="w-[30%]">
      <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className="relative">
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
            className="w-full h-52 rounded-lg"
            resizeMode="cover"
          />
          <View className="absolute bottom-0 left-0 right-0 bg-black/60 rounded-b-lg px-2 py-2">
            <Text
              className="text-white text-xs font-bold"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {title}
            </Text>
            <View className="flex-row items-center justify-between mt-1">
              <View className="flex-row items-center gap-1">
                <Image
                  source={icons.star}
                  className="w-3 h-3"
                  resizeMode="contain"
                  tintColor="#FBBF24"
                />
                <Text className="text-yellow-400 text-xs font-bold">
                  {vote_average?.toFixed(1)}
                </Text>
              </View>
              <Text className="text-gray-400 text-xs">{year}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
