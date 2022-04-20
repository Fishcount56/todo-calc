import * as React from 'react'
import { Text, Box } from "native-base"
import { StatusBar } from 'native-base'

export default function Home() {
    return (
        <Box
            bg="coolGray.200"
            flex={1}
            alignItems="center"
            justifyContent="center"
            safeArea>
                <StatusBar>
                    <Text>Hello</Text>
                </StatusBar>
                <Text 
                    fontSize="30px"
                    color="darkBlue.900"
                >Home</Text>
        </Box>
    )
}