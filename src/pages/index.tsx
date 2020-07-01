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
            <Card title={"Introduction"} delayInitialMount={500}>
              <p>
                <Bold>Naporitan</Bold>っていいます！
              </p>
              <p>
                趣味は<Bold>プログラミング</Bold>と<Bold>Vtuber</Bold>と<Bold>百合漫画</Bold>を読むこと
              </p>
              <p>かわいいものと音楽が好き！みんな仲良くしてね</p>
            </Card>
            <Card title={"SNSAccounts"} delayInitialMount={1000}>
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
                {false && (
                  <div>
                    <Slick images={accounts.map(({ image }) => image)} onChange={setNowImage} />
                  </div>
                )}
              </AccountContainer>
            </Card>
            <Card title={"Like"} delayInitialMount={1500}>
              <p>
                好きな<Bold>漫画</Bold>・<Bold>Vtuber</Bold>・<Bold>音楽</Bold>について書きます
              </p>
            </Card>
            <Card title={"Programing"} delayInitialMount={2000}>
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
            </Card>
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
  }

  @media screen and (max-width: 480px) {
    padding: 16px;
    & > div {
      border: none;
    }
  }
`;

const HoverAnim = keyframes`
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
    animation: ${HoverAnim} 1s ease-in-out;
  }
`;

const CardContainer = styled.div`
  height: 100%;
  margin: 32px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;

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
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }

    &.active {
      font-weight: 600;
      color: ${(props) => props.theme.primary};
    }
  }
  & > div {
    max-width: 600px;
    img {
      object-fit: contain;
      object-position: top;
      width: 100%;
    }
  }
`;
