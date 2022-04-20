import React, { useState, useEffect } from "react"
import { View, StyleSheet, TouchableOpacity, Text, FlatList, TextInput } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { db } from "../firebase"
import { collection, addDoc, query, onSnapshot, deleteDoc, doc, updateDoc } from "firebase/firestore"

const NewTodoCard = ({title, id, isCheck, navigation, handleDelete}) => {
    return (
        <TouchableOpacity style={style.itemCard}  >
            <View style={style.cardTitle}>
                <Text style={style.todotitle} numberOfLines={1}>{title}</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="trash-can-outline" size={30} onPress={() => handleDelete(id)}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const NewTodo = ({navigation}) => {
    const [newData, setNewData] = useState(false)
    const [listData, setListData] = useState({title: "", isCheck: false})
    const [todoData, setTodoData] = useState({})
    
    // Create / insert new todo item to firebase database
    const Create = async (e) => {
        e.preventDefault()
        await addDoc(collection(db, "todo"), {
            ...listData
        })
        setListData("")
    }

    // Get data from firebase database
    const Fetch = () => {
        const q = query(collection(db, "todo"))
        const datas = onSnapshot(q, (querySnapshot) => {
            let dataArray = []
            querySnapshot.forEach((doc) => {
                dataArray.push({...doc.data(), id: doc.id})
            })
            setTodoData(dataArray)
        })
    }

    // Delete data by id from firebase database
    const Delete = async(id) => {
        await deleteDoc(doc(db, "todo" , id))
    }


    useEffect(() => {
        Fetch()
    }, [])
    return(
        <View style={style.container}>
            <View style={style.formAddData}>
                <TouchableOpacity style={style.newTask} onPress={() => setNewData(true)}>
                    <TextInput 
                        underlineColorAndroid={"transparent"}
                        selectionColor={"transparent"}
                        placeholder={"Add new item"}
                        maxLength={100}
                        value={listData.title}
                        style={[style.input, { outline: "none"}]}
                        onBlur={() => {setNewData(false)}}
                        onChangeText={(value) => setListData({title: value, isCheck: false})}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={style.addButton} onPress={Create}>
                    <Text style={style.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={style.todoItemsCard}>
                <FlatList
                    key={todoData.id}
                    data={todoData}
                    renderItem={({item: {title, id, isCheck}, index}) => {
                        return(
                            <View>
                                <NewTodoCard title={title} isCheck={isCheck} navigation={navigation} id={id} handleDelete={() => Delete(id)}/>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EDEDED"
    },
    formAddData: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 20,
    },
    newTask: {
        width: "80%",
        justifyContent: "flex-end",
        marginEnd: 10
    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        paddingVertical: 10,
        fontSize: 18
    },
    addButton: {
        width: "20%",
        justifyContent: "center",
        textAlign: "center",
        padding: 7,
        borderWidth: 2,
        borderColor: "#57afb5",
        borderRadius: 8,
        backgroundColor: "#4ed4de",
    },
    addButtonText: {
        fontWeight: "800",
        color: "#404242"
    },
    itemCard: {
        flex: 1,
        backgroundColor: "#77cc62",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: "20px",
        marginVertical: "7px",
        padding: 15,
        borderRadius: 12,
        justifyContent: "space-between",
        height: "100%",
        shadowColor: "#a1a6a2",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    todotitle: {
        fontSize: 24,
        color: "white"
    },
    todoItemsCard: {
        flex: 1,
        marginTop: 13
    },
    cardTitle: {
        width: "80%"
    }
})

export default NewTodo