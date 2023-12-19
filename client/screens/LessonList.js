import React from "react";
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Image, View } from "react-native-animatable";
import Icon, { Icons } from '../components/Icons';

export default LessonList = ({navigation, route}) => {
    console.log("####State NEW:")
    console.log(route);
    console.log("####=======")
    let params = route.params


    let parentStack = navigation.getParent().getParent();

    parentStack.setOptions({ 
        headerShown:true,
        headerTitle: () => (
            <View style={{
             flexDirection:"row",
             width:360,
             height:50,
             marginStart:-16,
             alignItems:"center"
              }}>
             <TouchableOpacity style={{
                 marginLeft:10,
                 flex:.45,
             }}
             onPress={() => {
                navigation.getParent()?.setOptions({ 
                tabBarStyle: { display: 'flex' },
                tabBarVisible: true,
                headerShown:false
                });
                parentStack.setOptions({
                    headerTitle: () => (
                        <View style={{
                         flexDirection:"row",
                         width:360,
                         height:50,
                         marginStart:-16,
                         alignItems:"center"
                          }}>
                         <TouchableOpacity style={{
                             marginLeft:10,
                             flex:.45,
                         }}>
                                             <Image
                                     style={{ 
                                         width: 40, height: 40, 
                                         borderRadius:30
                                     }}
                                 source={require('../assets/img/avt.jpg')}
                             />
                         </TouchableOpacity>
                         
                          <TouchableOpacity style={{
                             backgroundColor:"#9dacc420",
                             height:45,
                             borderRadius:20,
                             alignItems:"center",
                             justifyContent:"center",
                             flex:1,
                             }} 
                             onPress={() => {}}>
                             <Text style={{
                                 color:"#0000FF",
                                 fontStyle:"normal",
                                 fontWeight:"bold",
                                 fontSize:20,
                                 }}>English Anytime</Text>
                              
                         </TouchableOpacity>
         
                            <TouchableOpacity
                            style={{
                             color:"#0000FF",
                             flex:.2,
                             marginStart:50
                             
                             }}
                            >
                            <Icon type={Icons.FontAwesome5} name="bars" color="#db5d14" />
                            </TouchableOpacity>
                        </View>
                       )
                 
                })
                navigation.goBack()
            
            }}
             >
                                 <Image
                         style={{ 
                             width: 40, height: 40, 
                             borderRadius:30
                         }}
                     source={require('../assets/img/left_back.png')}
                 />
             </TouchableOpacity>
             
              <TouchableOpacity style={{
                 backgroundColor:"#9dacc420",
                 height:45,
                 borderRadius:20,
                 alignItems:"center",
                 justifyContent:"center",
                 flex:1,
                 }} 
                 onPress={() => {}}>
                 <Text style={{
                     color:"#0000FF",
                     fontStyle:"normal",
                     fontWeight:"bold",
                     fontSize:20,
                     }}>{params.TopicName}</Text>
                  
             </TouchableOpacity>

                <TouchableOpacity
                style={{
                 color:"#0000FF",
                 flex:.2,
                 marginStart:50
                 
                 }}
                >
                <Icon type={Icons.FontAwesome5} name="bars" color="#db5d14" />
                </TouchableOpacity>
            </View>
           )

        });
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ok</Text>
        </View>
        
    )


}
const styles = StyleSheet.create(
    {
        container:{
            alignContent:"center",
            justifyContent:"center",
            backgroundColor:"#FF00FF"
        },
        text:{
            color:"#000000"
        }
        
    }
)