import { StatusBar, Text, View } from "react-native";
import { Link } from "expo-router";

const App = () => {
	return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl font-bold">
                Hello, World
            </Text>
            <StatusBar style="auto" />
            <Link href="/home" className="text-blue-500">
                Home
            </Link>
        </View>
	);
};

export default App
