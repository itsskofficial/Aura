import { Image, StatusBar, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-web";
import { images } from "@constants";
import CustomButton from "@components/customButton";

const App = () => {
	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View className="w-full justify-center items-center h-full px-4 min-h-[85vh]">
					<Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" />
					<Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />
					<View className="relative mt-5">
						<Text className="text-3xl text-white font-bold text-center">
							Discover Endless Possibilities With {' '}
                        </Text>
                        <Text className="text-secondary-200">
                            Aora
                        </Text>
                        <Image source={images.path} 
                            className="w-[136px] -bottom-2 -right-0 absolute h-[15px"
                            resizeMode="contain" />
                    </View>
                    <Text className="text-sm font-pregular text-grey-100 mt-7 text-center">
                        Where creativity meets innovation: embark on a wonderful journey with Aora
                    </Text>
                    <CustomButton 
                        title="Continue with email"
                        containerStyles="w-full mt-7"
                        textStyles="font-psemibold"
                        handlePress={() => router.push("/signIn")}
                    />
				</View>
            </ScrollView>
            <StatusBar backgroundColor={"#161622"} barStyle="light-content" />
		</SafeAreaView>
	)
};

export default App