import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem'

export default function App() {


    const [courseGoals, setCourseGoals] = useState([])
    const [modalIsVisible,setModalIsVisible] = useState(false)

    function setAddGoalHandler() {
        setModalIsVisible(true)
    }
    function endAddGoalHandler(){
        setModalIsVisible(false)
    }

    function addGoalHandler(enteredGoalText) {
        // console.log(enteredGoalText)
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }])
        setModalIsVisible(false)
    }

    function deleteGoalHandler(id){
        console.log("Delete")
        setCourseGoals(currentCourseGoals => {
            return currentCourseGoals.filter(goal=> goal.id !== id)
        })
    }


    return (
        <View style={styles.appContainer}>
            <Button title='Add New Goal' color="gray" onPress={setAddGoalHandler}/>
            <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
            <View style={styles.goalContainer}>
                <FlatList data={courseGoals} renderItem={itemData => {
                    return <GoalItem goal={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />
                }}
                    keyExtractor={(item, index) => {
                        return item.id
                    }}
                    alwaysBounceVertical={false} />

            </View>

            <StatusBar style="light" />
        </View>

    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        // backgroundColor: 'orange',
    },


    goalContainer: {
        flex: 5,
        padding: 16
    },


});
