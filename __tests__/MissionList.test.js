import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import MissionList from '../src/pages/MissionList/MissionList';

describe('MissionList', () => {

/*
  it('should render a loading message when isLoading is true', () => {
    const {getByText} = render(<MissionList isLoading={true} />);
    expect(getByText('Loading...')).toBeDefined();
  });
*/

/*
  it('should render the mission list when isLoading is false', () => {
    const missions = [
      {id: 1, title: 'Mission 1', description: 'Mission 1 description'},
      {id: 2, title: 'Mission 2', description: 'Mission 2 description'},
    ];
    const {getByText} = render(<MissionList isLoading={false} data={missions} />);
    expect(getByText('Mission 1')).toBeDefined();
    expect(getByText('Mission 2')).toBeDefined();
  });
*/


  it('should navigate to the mission details screen when a mission is pressed', async () => {
    const navigation = {navigate: jest.fn()};
    const missions = [{id: 1, title: 'Mission 1', description: 'Mission 1 description'}];
    const {getByText} = render(<MissionList isLoading={false} data={missions} navigation={navigation} />);
    const missionButton = getByText('Mission 1');
    fireEvent.press(missionButton);
    await waitFor(() => expect(navigation.navigate).toHaveBeenCalledWith('DisplayMission', {idMission: 1}));
  });
});