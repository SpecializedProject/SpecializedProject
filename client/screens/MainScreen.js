import React from "react";
import { Text , View, StyleSheet} from "react-native";

const styles = StyleSheet.create(
    {
     container:{
         flex:1,
         justifyContent:"center",
         alignItems:"center",
         
     },
     txt:{
        color:"#000000",
        fontSize:20,
        
     }
    }
 )
 export default MainScreen = () =>{
    return (
        <View 
        style={styles.container}
        >
            <Text
            style={styles.txt}
            >This is MainScreen</Text>
        </View>
    )
}