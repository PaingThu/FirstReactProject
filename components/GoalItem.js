import { View, Text, StyleSheet, Pressable } from 'react-native'

function GoalItem (props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)} >
            <View style={styles.goalView}>
                <Text style={styles.goalText} >{props.goal}</Text>
            </View>
        </Pressable>
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