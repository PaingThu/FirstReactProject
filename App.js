import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
    const [enteredGoalText,setEtnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        // console.log(enteredText)
        setEtnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        console.log(enteredGoalText)
    }


    return (
        <View style={styles.appContainer}>

            <View style={styles.sampleForm}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
                    <Button title='Add Goal' onPress={addGoalHandler}/>
                </View>
                <View>
                    <Text>List of Goals....</Text>
                </View>
            </View>

            {/* <View style={styles.sampleBox}>
                <View style={styles.box1}>
                    <Text>Box 1</Text>
                </View>
                <View style={styles.box2}>
                    <Text>Box 2</Text>
                </View>
                <View style={styles.box3}>
                    <Text>Box 3</Text>
                </View>
            </View> */}

            <StatusBar style="auto" />
        </View>
        
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16
    },

    sampleForm: {
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },


    sampleBox: {
        paddingTop: 50,
        flexDirection: 'row',
        width: '100%',
        height: 200,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    box1: {
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        },
        box2: {
        backgroundColor: 'green',
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
        },
        box3: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
