import { createStackNavigator } from '@react-navigation/stack';
import NavigationBottom from './NavigationBottom';
import MainScreen from './MainScreen';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-native-paper';
import {  Button, Image, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon, { Icons } from '../components/Icons';


const Stack = createNativeStackNavigator();
function LogoTitle() {
    return (
      <Image
        style={{ 
            width: 40, height: 40, 
            borderRadius:30
        }}
        source={require('../assets/img/avt.jpg')}
      />
    );
  }
export default MyStack = () => {
    const [navigation, setnavigation] = useState(null)
    return (
        <NavigationContainer>
        <Stack.Navigator
        
      >
        <Stack.Screen name="NavigationBottom" component={NavigationBottom} 
        options={{ 
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
              ),
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

