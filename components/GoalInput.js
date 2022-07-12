import { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'

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
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput style={styles.textInput} placeholder='Your course goal!' value={enteredGoalText} onChangeText={goalInputHandler}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' color="orange" onPress={props.onCancel}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' color="orange" onPress={addGoalHandler}/>
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
        backgroundColor: 'gray',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
        width: '100%',
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