import { icons } from "@/constants/icons";
import { View, Image, TextInput } from "react-native";

export default function SearchBar({
  value,
  onChangeText,
  onPress,
  placeholder,
  ref,
}: {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
  ref?: any;
}) {
  return (
    <View className="flex flex-row items-center bg-dark-200 rounded-full px-5 py-2">
      <TextInput
        ref={ref}
        className="font-bold text-white mr-2 flex-1 "
        onPress={onPress}
        placeholder={placeholder}
        placeholderTextColor="#4a3d5f"
        value={value}
        onChangeText={(text) => onChangeText(text)}
        cursorColor="#ab8bff"
        keyboardType="default"
        autoCapitalize="none"
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
