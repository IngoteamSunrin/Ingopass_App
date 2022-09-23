import {View, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/header';
import BottomNavigation from '../components/bottomNavigation';
const Products: React.FC = () => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#fdfdff'}} />
      <AppContainer>
        <ScrollView style={{height: '20%', backgroundColor: '#fdfdff'}} />
      </AppContainer>
    </>
  );
};

export default Products;

const AppContainer = styled.SafeAreaView`
  height: 100%;
  background-color: #e9edf6;
  flex: 1;
`;
