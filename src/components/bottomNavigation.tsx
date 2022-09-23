import styled from 'styled-components/native';
import {WithLocalSvg} from 'react-native-svg';
import Device from '../assets/icons/device.svg';
import DeviceSelected from '../assets/icons/deviceSelected.svg';
import Card from '../assets/icons/card.svg';
import Person from '../assets/icons/person.svg';
import PersonSelected from '../assets/icons/personSelected.svg';
import Home from '../assets/icons/home.svg';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const NavItem = ({name, asset}) => {
  return (
    <ItemContainer>
      <WithLocalSvg height={26} asset={asset} />
      <ItemName>{name}</ItemName>
    </ItemContainer>
  );
};

const NavItemSelected = ({name, asset}) => {
  return (
    <ItemContainer>
      <WithLocalSvg height={26} asset={asset} />
      <ItemNameSelected>{name}</ItemNameSelected>
    </ItemContainer>
  );
};

const BottomNavigation: React.FC = () => {
  const devicePaths = ['Products', 'RecordStatus'];
  const homePaths = ['Card', 'Main'];
  const myInfoPaths = ['MyInfo', 'RentalRecord'];
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <Container>
      {devicePaths.filter(item => item === route.name).length !== 0 ? (
        <NavItemSelected name="물품" asset={DeviceSelected} />
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
          <NavItem name="물품" asset={Device} />
        </TouchableOpacity>
      )}
      {homePaths.filter(item => item === route.name).length !== 0 ? (
        <CardItem>
          <WithLocalSvg height={26} asset={Card} />
        </CardItem>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <NavItem name="홈" asset={Home} />
        </TouchableOpacity>
      )}

      {myInfoPaths.filter(item => item === route.name).length !== 0 ? (
        <NavItemSelected name="내 정보" asset={PersonSelected} />
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('MyInfo')}>
          <NavItem name="내 정보" asset={Person} />
        </TouchableOpacity>
      )}
    </Container>
  );
};
export default BottomNavigation;

const CardItem = styled.View`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: #dae1ee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  height: 70px;
  background-color: #e9edf6;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;
const ItemContainer = styled.View`
  height: 45px;
  justify-content: space-between;
  align-items: center;
`;

const ItemName = styled.Text`
  color: #7a86a0;
  font-weight: 400;
  font-size: 12px;
`;

const ItemNameSelected = styled.Text`
  color: #3c4963;
  font-weight: 500;
  font-size: 12px;
`;
