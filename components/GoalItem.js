import { View, Text, StyleSheet, Pressable } from 'react-native'

function GoalItem (props) {
    return (
        <View style={styles.goalView}>
            <Pressable onPress={props.onDeleteItem.bind(this, props.id)} 
            android_ripple={{color: '#dddddd'}}
            style={({pressed}) => pressed && styles.pressedItem} >
                <Text style={styles.goalText} >{props.goal}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalView:{
        marginVertical: 8,
        borderRadius: 6,
    },
    pressedItem:{
        opacity: 0.5    
    },
    goalText: {
        padding: 8,
        color: 'gray'
    }
})