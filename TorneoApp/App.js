import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css"

export default function App() {
  return (
    <View className="flex justify-center items-center bg-blue-500 w-[100vw] ">
      <StatusBar style="auto" />
      <Text className="text-2xl font-bold text-white">
        ensayar! 
      </Text>
      
    </View>
  );
}
