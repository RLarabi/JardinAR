import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Result from './Result'
import HomeScreen from './HomeScreen';
const Stack = createNativeStackNavigator();


const App = () => {
  
  return (  
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
        />
        <Stack.Screen 
          name="Page2" 
          component={Result}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;













// function Home({navigation}){
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Camera />
//       <Button 
//         title="Go to"
//         onPress={() => navigation.navigate('Page2',{
//           age : 20
//         })}
//         />
//     </View>
//   );
// }