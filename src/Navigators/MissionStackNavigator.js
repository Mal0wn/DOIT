import { createStackNavigator } from '@react-navigation/stack';
import DisplayMission from '../DisplayMission';
import HomeScreen from '../HomeScreen';
import MissionList from '../MissionList'

const Stack = createStackNavigator();

export const MissionStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MissionList" screenOptions={{headerShown: false}} >
      <Stack.Screen name="DisplayMission" component={DisplayMission} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MissionList" component={MissionList}  />
    </Stack.Navigator>
  );
}