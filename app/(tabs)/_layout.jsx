import { View, Text } from "react-native"
import { Tabs, Redirect } from "expo-router"
import { icons } from "@constants"

const TabIcon = ({icon, color, name, focus}) => {
  <View>
    <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="h-6 w-6"
    />
    <Text>
      {name}
    </Text>
  </View>
}

const TabLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => <TabIcon
              icon={icons.home}
              name="home"
              color={color} 
              focus={focused}
              />,
          }}
        />
      </Tabs>
    </>
  )
}

export default TabLayout