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
            <S.NavItem>Premium</S.NavItem>
            <S.NavItem>Suporte</S.NavItem>
            <S.NavItem>Baixar</S.NavItem>
          </S.List>
          <Profile />
        </S.Nav>
      </S.Content>
    </S.Container>
  );
};

export default Header;
