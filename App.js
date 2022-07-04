import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
    const [enteredGoalText,setEtnteredGoalText] = useState('')

    const [courseGoals, setCourseGoals] = useState([])

    function goalInputHandler(enteredText) {
        // console.log(enteredText)
        setEtnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        // console.log(enteredGoalText)
        setCourseGoals(currentCourseGoals => [...currentCourseGoals,{text:enteredGoalText, id: Math.random().toString()}])
    }


    return (
        <View style={styles.appContainer}>

            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
                <Button title='Add Goal' onPress={addGoalHandler}/>
            </View>
            <View style={styles.goalContainer}>
                <FlatList data={courseGoals} renderItem={itemData => {
                    return (
                        <View style={styles.goalView}>
                            <Text style={styles.goalText} >{itemData.item.text}</Text>
                        </View>
                    );
                }} 
                keyExtractor={(item,index)=>{
                    return item.id
                }}
                alwaysBounceVertical={false} />
                    
            </View>

            <StatusBar style="auto" />
        </View>
        
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex:1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: 'orange',
    },
        inputContainer: {
            flex:1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#cccccc',
            backgroundColor: 'white'
        },
            textInput: {
                borderWidth: 1,
                borderColor: '#ccc',
                width: '70%',
                marginRight: 8,
                padding: 8,
            },

        goalContainer: {
            flex:5,
            padding: 16
        },
            goalView:{
                padding: 8, 
                marginVertical: 8,
                borderRadius: 6,
                backgroundColor: 'white',
            },
            goalText: {
                color: 'gray'
            }
});
