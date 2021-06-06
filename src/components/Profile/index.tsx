import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';

import * as S from './styles';

const Profile = () => {
  return (
    <S.Container>
      <Image src="/img/profile.png" width="40" height="40" />
      <S.Content>
        <p>Perfil</p>
        <IoIosArrowDown />
      </S.Content>
    </S.Container>
  );
};

export default Profile;
