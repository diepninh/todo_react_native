import React ,{useState}from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView } from 'react-native';
import Header from './components/Header';

import AddJob from './components/AddJob';
import TodoItem2 from './components/TodoItem2';

const todos = [
    { text: 'mua bim bim',key:'1'},
    {text: 'mua keo mut',key: '2'},
    {text: 'mua mi tom', key: '3'}
];

export default function App() {
    const  [todos,setTodos]= useState([
        { text: 'mua bim bim',key:'1'},
        {text: 'mua keo mut',key: '2'},
        {text: 'mua mi tom', key: '3'}
    ]);
//xoá job
    const pressHandler= (key)=>{
        setTodos((prevTodos)=>{
            return prevTodos.filter(todo =>todo.key != key);
        });
    }
    // tạo job
    const submitHandler =(text)=> {
        setTodos((prevTodos)=>{
            return [
                {text:text, key: Math.random().toString()},
                ...prevTodos
            ]
        })
    }

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <AddJob submitHandler={submitHandler}/>
                <ScrollView>
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({item}) =>(

                                <TodoItem2 item={item} pressHandler={pressHandler}/>

                            )}
                        />

                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    }
});
