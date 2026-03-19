import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-primary h-full w-full">
      <Image source={images.bg} className="w-full absolute z-0" />
      <ScrollView className="flex-1 px-5 mb-20 w-full">
        <View className="flex-row w-full h-max flex justify-center items-center pr-[32px] pl-[32px]">
          <Image source={icons.logo} className="w-12 h-10 mt-8 mb-5 mr-8" />
          <Text className="text-white text-[24px] font-bold">Cinniflex</Text>
        </View>
        <SearchBar />
      </ScrollView>
    </View>
  );
}
