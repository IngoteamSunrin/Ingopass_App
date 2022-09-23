import {View, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/header';
import BottomNavigation from '../components/bottomNavigation';
const MyInfo: React.FC = () => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#fdfdff'}} />
      <AppContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
        <Header />
        <ScrollView style={{height: '20%', backgroundColor: '#fdfdff'}} />
        <BottomNavigation />
      </AppContainer>
    </>
  );
};

export default MyInfo;

const AppContainer = styled.SafeAreaView`
  height: 100%;
  background-color: #e9edf6;
  flex: 1;
`;
