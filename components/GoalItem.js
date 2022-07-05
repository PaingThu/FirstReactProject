import { View, Text, StyleSheet } from 'react-native'

function GoalItem (props) {
    return (
        <View style={styles.goalView}>
            <Text style={styles.goalText} >{props.goal}</Text>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalView:{
        padding: 8, 
        marginVertical: 8,
        borderRadius: 6,
        backgroundColor: 'white',
    },
    goalText: {
        color: 'gray'
    }
})