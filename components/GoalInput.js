import { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

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
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Your course goal!' value={enteredGoalText} onChangeText={goalInputHandler}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler}/>
                    </View>
                    
                   
                </View>
                
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        marginRight: 8,
        padding: 8,
    },
    buttonContainer:{
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
        
})