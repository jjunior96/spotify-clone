import Logo from 'components/Logo';
import Profile from 'components/Profile';

import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <S.Nav>
          <S.List>
            <S.ListItem>Premium</S.ListItem>
            <S.ListItem>Suporte</S.ListItem>
            <S.ListItem>Baixar</S.ListItem>
          </S.List>
          <Profile />
        </S.Nav>
      </S.Content>
    </S.Container>
  );
};

export default Header;
