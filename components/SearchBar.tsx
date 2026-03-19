import { icons } from "@/constants/icons";
import { View, Text, Image, TextInput } from "react-native";

export default function SearchBar({
  value,
  onChangeText,
  onPress = () => {},
}: {
  value: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
}) {
  return (
    <View className="flex flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <TextInput
        className="font-bold text-white mr-2 flex-1"
        onPress={() => {}}
        placeholder="Search"
        placeholderTextColor="#ab8bff"
        value=""
        onChangeText={(text) => {}}
        a
      />
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
    </View>
  );
}
