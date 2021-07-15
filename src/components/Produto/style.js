import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        padding: 20,        
    },
    image: {
      flex: 1,
      width: 140,
      height: 140
    },
    buttonGreen: {
        width: 30,
        height: 30,
        backgroundColor:"green",
        padding: 10,
        borderRadius: 15  
    },
    buttonRed: {
        width: 30,
        height: 30,
        backgroundColor:"red",
        padding: 10,
        borderRadius: 15  
    }
})

export default styles