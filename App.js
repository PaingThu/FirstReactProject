import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem'

export default function App() {


    const [courseGoals, setCourseGoals] = useState([])



    function addGoalHandler(enteredGoalText) {
        // console.log(enteredGoalText)
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }])
    }


    return (
        <View style={styles.appContainer}>

            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalContainer}>
                <FlatList data={courseGoals} renderItem={itemData => {
                    return <GoalItem goal={itemData.item.text} />
                }}
                    keyExtractor={(item, index) => {
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
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: 'orange',
    },


    goalContainer: {
        flex: 5,
        padding: 16
    },


});
