import { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

function GoalInput(props) {
    const [enteredGoalText,setEtnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        // console.log(enteredText)
        setEtnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEtnteredGoalText('')
    }
    
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your course goal!' value={enteredGoalText} onChangeText={goalInputHandler}/>
            <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
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
})