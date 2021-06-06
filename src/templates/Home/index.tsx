import Image from 'next/image';

import Header from 'components/Header';

import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.Degrade>
        <S.Content>
          <S.Info>
            <S.LeftContent>
              <div>
                <h2>É música que você quer?</h2>
                <p>Conheça os melhores lançamentos do momento.</p>

                <button>Abrir o web player</button>
              </div>
            </S.LeftContent>

            <S.RightContent>
              <div>
                <Image src="/img/1.jpeg" width="400" height="400" />
                <Image src="/img/2.jpeg" width="400" height="400" />
                <Image src="/img/3.jpeg" width="400" height="400" />
                <Image src="/img/4.jpeg" width="400" height="400" />
                <Image src="/img/5.jpeg" width="400" height="400" />
                <Image src="/img/6.jpeg" width="400" height="400" />
              </div>
            </S.RightContent>
          </S.Info>

          <S.Section>
            <div>
              <h2>Aproveite ao máximo o Spotify</h2>

              <section>
                <div>
                  <h3>Gerencie sua conta</h3>
                  <p>
                    Edite seu perfil, altere sua senha e atualize suas
                    informações de pagamento.
                  </p>

                  <a href="#">gerenciar conta</a>
                </div>

                <div>
                  <h3>Gerencie sua conta</h3>
                  <p>
                    Edite seu perfil, altere sua senha e atualize suas
                    informações de pagamento.
                  </p>

                  <a href="#">baixe o aplicativo para computador</a>
                </div>

                <div>
                  <h3>Gerencie sua conta</h3>
                  <p>
                    Edite seu perfil, altere sua senha e atualize suas
                    informações de pagamento.
                  </p>

                  <a href="#">abrir o web player</a>
                </div>
              </section>
            </div>
          </S.Section>
        </S.Content>
      </S.Degrade>
    </S.Container>
  );
};

export default Home;
