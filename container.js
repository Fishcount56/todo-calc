import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useTheme } from "native-base"


import Home from "./src/screen/Home"
import Calculator from "./src/screen/Calculator"
import NewTodo from "./src/screen/newTodo"
import EditTodo from "./src/components/Todo"

const Stack = createStackNavigator()

const Tab = createMaterialBottomTabNavigator()

function myTab() {
    const theme = useTheme()
    return (
        <Tab.Navigator
            initialRouteName="Home"
            barStyle={{ backgroundColor: "#EDEDED" }}
            labeled={false}
            screenOptions={({ route }) => ({
                headerMode: "screen",
                headerTintColor: "White",
                headerStyle: { backgroundColor: theme.colors.primary["600"]},
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName

                    if (route.name === "Home") {
                        iconName = focused ? "home-variant" : "home-variant-outline"
                    } else if (route.name === "Calculator") {
                        iconName = focused ? "calculator-variant" : "calculator-variant"
                    } else if (route.name === "Todo") {
                        iconName = focused ? "check-circle" : "check-circle-outline"
                    }

                    return <MaterialCommunityIcons name={iconName} size="26px" color={color} />
                },
                tabBarActiveTintColor: theme.colors.primary["800"],
                tabBarInactiveTintColor: "gray",
            })}        
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false}} />
            <Tab.Screen name="Calculator" component={Calculator} />
            <Tab.Screen name="Todo" component={NewTodo}/>
        </Tab.Navigator>
    )
}

export default function Container(){
    const theme = useTheme()
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerMode: "screen",
                    headerTintColor: "white",
                    headerStyle: { backgroundColor: theme.colors.primary["300"] },
                }}
            >
                <Stack.Screen
                    name="Main"
                    component={myTab}
                    options={{ headerShown: false}}
                />
                <Stack.Screen
                    name="Calculator"
                    component={Calculator}
                    options={{
                        title: "Calculator"
                    }}
                />
                <Stack.Screen
                    name="EditTodo"
                    component={EditTodo}
                    options = {({route})=> {
                        return({
                            title: route.params.title
                        })
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}