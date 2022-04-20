import React, { useState, useEffect } from 'react';
import { Text, Box } from "native-base"
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { StatusBar } from "expo-status-bar"


export default function Calculator() {
    const [hitung, setHitung] = useState(0)
    let enterValue = (value) => {
        if(hitung == 0) {
            setHitung(value)
        } else {
            setHitung(hitung + '' + value)
        }
    }
    let findResult = () => {
        let hasil = eval(hitung)
        setHitung(hasil)
    }

    let percentage = () => {
        let hasil = eval(hitung)
        let percent = hasil * 0.01
        setHitung(percent)
    }
    return (
        <View style={style.container}>
            <StatusBar></StatusBar>
            <View style={style.display}>
                <Text style={style.displayValue}>{hitung}</Text>
            </View>
            <View style={style.displayInputParent}>
                <View style={style.displayInput}>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => setHitung(0)}>
                        <Text style={style.clearInput}>Clear</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.displayInput}>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => enterValue(1)}>
                        <Text style={style.inputNumbers}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => enterValue(2)}>
                        <Text style={style.inputNumbers}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => enterValue('-')}>
                        <Text style={style.inputOperators}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => enterValue('+')}>
                        <Text style={style.inputOperators}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.displayInput}>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => enterValue(3)}>
                        <Text style={style.inputNumbers}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => enterValue(4)}>
                        <Text style={style.inputNumbers}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => enterValue('/')}>
                        <Text style={style.inputOperators}>/</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => enterValue('*')}>
                        <Text style={style.inputOperators}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.displayInput}>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => enterValue(5)}>
                        <Text style={style.inputNumbers}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => enterValue(6)}>
                        <Text style={style.inputNumbers}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => percentage()}>
                        <Text style={style.inputOperators}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => findResult()}>
                        <Text style={style.inputOperators}>=</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.displayInput}>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => enterValue(7)}>
                        <Text style={style.inputNumbers}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => enterValue(8)}>
                        <Text style={style.inputNumbers}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => enterValue(9)}>
                        <Text style={style.inputNumbers}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.numberRowOne} onPress={() => enterValue(0)}>
                        <Text style={style.inputNumbers}>0</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#B0AFB3",
    },
    display: {
        backgroundColor: "#EDE8E8",
        marginTop: 48,
        height: "120px",
        justifyContent: "flex-end",
        textAlign: "right"
    },
    displayValue: {
        fontSize: "32px",
        color: "black",
        fontWeight: "700",
        marginEnd: "7px"
    },
    displayInput: {
        flexDirection: "row"
    },
    numberRowOne: {
        flex: 1,
        justifyContent: "center",
        borderWidth: 1,
        margin: 5
    },
    inputNumbers: {
        textAlign: "center",
        fontSize: "32px",
        backgroundColor: "#eef527",
        color: "black"
    },
    inputOperators: {
        textAlign: "center",
        fontSize: "32px",
        backgroundColor: "#5fafc7"
    },
    clearInput: {
        textAlign: "center",
        fontSize: "32px",
        backgroundColor: "#ed1f2d"
    },
    displayInputParent: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    }
})