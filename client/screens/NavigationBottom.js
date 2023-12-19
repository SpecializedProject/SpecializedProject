import React, { useEffect, useRef } from 'react'
//
//, PronounceScreen, SearchScreen
import HomeScreen from './HomeScreen';
import About from './About';
import PronounceScreen from './PronounceScreen'; 
import SearchScreen from './SearchScreen';
import StackHomeScreen from './StackHomeScreen';
//
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Import Icon
import Icon, { Icons } from '../components/Icons';
//Import Animatable
import * as Animatable from 'react-native-animatable';


//
const TabDataArr = [
  { route: 'Home', label: 'Home', type: Icons.FontAwesome5, activeIcon: "book", inActiveIcon: 'book', component: StackHomeScreen},
  { route: 'Pronounce', label: 'Pronounce', type: Icons.Fontisto, activeIcon: "open-mouth", inActiveIcon: 'open-mouth', component: PronounceScreen},
  { route: 'Search', label: 'Search', type: Icons.FontAwesome5, activeIcon: "search", inActiveIcon: 'search', component: SearchScreen},
  { route: 'About', label: 'About', type:  Icons.FontAwesome, activeIcon: "user-circle", inActiveIcon: 'user-circle', component: About}
]
//
const Tab = createBottomTabNavigator();

//TabButton
const TabButton = (props) =>{
  const {item , onPress, accessibilityState, navigation} = props;

 
  
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  //useEffect
  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: .5, rotate: '0deg'}, 1: {scale: 1.5, rotate: '360deg'}});
    } else {
      viewRef.current.animate({0: {scale: 1.5, rotate: '360deg'}, 1: {scale: 1, rotate: '0deg'}});
    }
  }, [focused])
  return (
    <TouchableOpacity
    //OnPress cua TouchableOpacity nay chinh la onPress cua Screen component
    onPress={onPress}
    style={styles.container}
    >
      <Animatable.View
      ref={viewRef}
      duration={500}
      >
        <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? "#db5d14" : "#1475f5"} />

      </Animatable.View>

    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default NavigationBottom = ({navigation }) => {
    return (
                <Tab.Navigator
                 screenOptions= {{
                  headerShown:false,
                  tabBarStyle:{
                    position:"absolute",
                    margin:10,
                    borderRadius:12
                  },
                 
                 }}

                >
                
                  {
                    TabDataArr.map((item, index) => {
                      
                        return (
                          <Tab.Screen key={index} name={item.route} component={item.component}
                          options={{
                            tabBarColor :"#f25900",
                            //Badge on Icon Tab
                            tabBarBadge:"!",
                            title:item.label,
                            tabBarButton: (props) => <TabButton {...props} item={item} navigation={navigation}/>,
                          }}
                          />
                        )
                    })
                  }
                </Tab.Navigator>
    );
  }
