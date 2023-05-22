import { createStackNavigator } from '@react-navigation/stack';
import DisplayMission from '../pages/DisplayMission/DisplayMission';
import HomeScreen from '../pages/HomeScreen/HomeScreen';
import MissionList from '../pages/MissionList/MissionList'

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