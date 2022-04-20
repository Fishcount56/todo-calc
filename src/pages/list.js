import React, { useState, useLayoutEffect } from "react"
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from "react-native"
import TodoItem from "../components/todoitem"



const renderAddButton = (addItem) => {
    return (
        <TouchableOpacity onPress={() => addItem({text: "Job 2", isChecked: false})}>
            <Text style={style.icon}>+</Text>
        </TouchableOpacity>
    )
}


const TodoList = ({navigation}) => {
    const [todoList, setTodoList] = useState ([
        {text: "Job 1", isCheck: false}
    ])

    const addTodoItem = (item) => {
        todoList.push(item)
        setTodoList([...todoList])
    }

    const deleteTodoItem = (index) => {
        todoList.splice(index, 1)
        setTodoList([...todoList])
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => renderAddButton(addTodoItem),
        });
    });

    const updateTodoItem = (index, item) => {
        todoList[index] = item
        setTodoList([...todoList])
    }

    return (
        <View style={style.container}>
            <FlatList
                data={todoList}
                renderItem={({item: {text, isCheck}, index}) => {
                    return(
                        <View>
                            <TodoItem 
                                text={text} 
                                isCheck={isCheck} 
                                onCheck={() => {
                                    const todoItem = todoList[index]
                                    todoItem.isCheck = !isCheck
                                    updateTodoItem(index, todoItem)
                                }}
                                onChangeText={(newText) => {
                                    const todoItem = todoList[index]
                                    todoItem.text = newText
                                    updateTodoItem(index, todoItem)
                                }}
                                onDelete={() => {
                                    deleteTodoItem(index)
                                }}
                            />
                        </View>
                    )
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C7C7D6",
        paddingHorizontal: "20px",
        paddingVertical: "30px"
    },
    icon: {
        marginEnd: 30,
        paddingBottom: 3,
        fontSize: 32,
        color: "black"
    }
})

export default TodoList