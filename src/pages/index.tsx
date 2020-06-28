import React, { memo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { GetStaticProps } from "next";
import Card from "../common/components/Card";
import { snsAccounts } from "../common/utils/constants";
import Slick from "../common/components/Slick";

type Account = {
  type: string;
  url: string;
  image: string;
};

type Props = {
  accounts: Account[];
};

const Home: React.FC<Props> = ({ accounts }) => {
  const [nowImage, setNowImage] = useState(accounts[0]?.image);

  return (
    <Container>
      <FirstView>
        <div>
          <MainVisualContainer>
            <img src="/static/main.png" />
          </MainVisualContainer>
          <CardContainer>
            <ContentCard title={"Introduction"} delay={0.5}>
              <p>
                ぼくは<Bold>Naporitan</Bold>！
              </p>
              <p>
                <Bold>「インターネットで生きていきたい」</Bold>ただそれだけが僕の持つ思い
              </p>
              <p>
                趣味は<Bold>プログラミング</Bold>と<Bold>Vtuber</Bold>と<Bold>百合漫画</Bold>を読むこと
              </p>
              <p>かわいいものと音楽が好き！みんな仲良くしてね</p>
            </ContentCard>
            <ContentCard title={"SNSAccounts"} delay={1}>
              <AccountContainer>
                <div>
                  {accounts.map(({ type, url, image }) => (
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      key={`${type}-${url}`}
                      className={nowImage === image ? "active" : ""}
                    >
                      {type}
                    </a>
                  ))}
                </div>
                <div>
                  <Slick images={accounts.map(({ image }) => image)} onChange={setNowImage} />
                </div>
              </AccountContainer>
            </ContentCard>
            <ContentCard title={"Like"} delay={1.5}>
              <p>
                好きな<Bold>漫画</Bold>・<Bold>Vtuber</Bold>・<Bold>音楽</Bold>について書きます
              </p>
            </ContentCard>
            <ContentCard title={"Programing"} delay={2}>
              <p>Typescriptが好きです。Python・Ruby on Railsはほんとに少しだけかけますが、得意じゃないよ！</p>
              <p>フロントエンドフレームワークではReact/Next.jsをバックエンドフレームワークではNestJSを好んで使うよ！</p>
              <p>Reduxはnormalizrを使うやり方が好き！</p>
              <p>
                インフラまわりはfirebase・vercel・herokuが調べつつやりたいことができる程度。
                コンテナ技術・GCP・AWSはほとんどわからないので勉強中・・・。
              </p>
              <p>
                CI/CDまわりはGithubActionsはではじめに少し使っていた程度、CircleCIもすでに動いているymlに付け足すことはできます。
              </p>
            </ContentCard>
          </CardContainer>
        </div>
      </FirstView>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const accounts = snsAccounts.map<Account>(({ url, type, image }) => ({ url, type, image }));

  return { props: { accounts } };
};

export default memo(Home);

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.primary};
`;

const FirstView = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 32px;
  box-sizing: border-box;

  & > div {
    width: 100%;
    border-radius: 16px;
    border: solid 5px ${(props) => props.theme.secondary};
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    padding: 16px;
    & > div {
      border: none;
    }
  }
`;

const MainVisualAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainVisualContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 800px;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    animation: ${MainVisualAnimation} 1s ease-in-out;
  }
`;

const ContentCard = styled(Card)<{ delay?: number }>`
  opacity: 0;
  animation: ${MainVisualAnimation} 1s ease-in-out ${(props) => props.delay || 0}s;
  animation-fill-mode: forwards;
`;

const CardContainer = styled.div`
  margin: 32px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 480px) {
    margin: 16px 0 0 0;
  }
`;

const Bold = styled.span`
  font-weight: 600;
`;

const AccountContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    display: block;
    color: ${(props) => props.theme.secondary};
    &.active {
      font-weight: 600;
      color: ${(props) => props.theme.primary};
    }
  }
  & > div {
    max-width: 600px;

    @media screen and (max-width: 480px) {
      max-height: 100px;
    }
    img {
      object-fit: contain;
      object-position: top;
      width: 100%;
    }
  }
`;
