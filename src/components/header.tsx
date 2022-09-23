import styled from 'styled-components/native';
import {WithLocalSvg} from 'react-native-svg';
import IngopassLogo from '../assets/appLogo.svg';
import Settings from '../assets/icons/settings.svg';
import Support from '../assets/icons/support.svg';
import Notification from '../assets/icons/notification.svg';

import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const Header: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <WithLocalSvg height={22} asset={IngopassLogo} />
      <Icons>
        <TouchableOpacity onPress={() => navigation.push('Settings')}>
          <WithLocalSvg height={22} asset={Settings} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Council')}>
          <WithLocalSvg height={22} asset={Support} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Notification')}>
          <WithLocalSvg height={22} asset={Notification} />
        </TouchableOpacity>
      </Icons>
    </Container>
  );
};
export default Header;

const Container = styled.View`
  height: 56px;
  background-color: #fdfdff;
  width: 100%;
  align-items: center;
  padding: 0 10px;
  left: 0;
  top: 0;
  margin: 0;
  flex-direction: row;
  justify-content: space-between;
`;

const Icons = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100px;
`;
