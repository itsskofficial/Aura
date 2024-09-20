import { View, Text } from "react-native"
import { Tabs, Redirect } from "expo-router"
import { icons } from "@constants"

const TabIcon = ({icon, color, name, focused}) => {
  <View className="items-center justify-center gap-2">
    <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="h-6 w-6"
    />
    <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
    style={{color: color}}>
      {name}
    </Text>
  </View>
}

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232323",
          }
        }}>
        <Tabs.Screen
          name="home"
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
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            tabBarIcon: ({ color, focused }) => <TabIcon
              icon={icons.bookmark}
              name="bookmark"
              color={color} 
              focus={focused}
              />,
          }}
        />
        <Tabs.Screen
          name="creat"
          options={{
            title: "Create",
            tabBarIcon: ({ color, focused }) => <TabIcon
              icon={icons.plus}
              name="create"
              color={color} 
              focus={focused}
              />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => <TabIcon
              icon={icons.profile}
              name="profile"
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