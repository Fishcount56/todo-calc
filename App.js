import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler"
import * as React from "react"
import { NativeBaseProvider, extendTheme } from "native-base"
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  RedHatDisplay_400Regular,
  RedHatDisplay_400Regular_Italic
 } from "@expo-google-fonts/red-hat-display"


import Container from './container';


export default function App() {
  // Load the font
  let  [fontsLoaded] = useFonts({
    RedHatDisplay_400Regular,
    RedHatDisplay_400Regular_Italic
  })

  const fontConfig = {
    RedHatDisplay: {
      400: {
        normal: "RedHatDisplay_400Regular",
        italic: "RedHatDisplay_400Regular_Italic"
      }
    }
  }


  const customeColor = {
    primary: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    amber: {
      400: "#d97706",
    }
  }

  const theme = extendTheme({
    colors: customeColor,
    fontConfig,
    fonts: {
      heading: "RedHatDisplay",
      body: "RedHatDisplay",
      mono: "RedHatDisplay"
    },
    config: { initialColorMode: "dark" }
  })

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    )
  }

}

