import React, { memo } from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import Card from "~/common/components/Card";
import { snsAccounts } from "~/common/utils/constants";
import { AnchorLink } from "~/common/components/Link";
import { Bold } from "~/common/components/Bold";
import { HoverAnim } from "~/common/Animations/hover";

type Account = {
  type: string;
  url: string;
  image: string;
};

type Props = {
  accounts: Account[];
};

const Home: React.FC<Props> = ({ accounts }) => {
  return (
    <Container>
      <FirstViewWrapper>
        <FirstView>
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
                <Columns>
                  {accounts.map(({ type, url }) => (
                    <AnchorLink href={url} target="_blank" rel="noreferrer" key={`${type}-${url}`} className={"active"}>
                      {type}
                    </AnchorLink>
                  ))}
                </Columns>
              </AccountContainer>
            </Card>
            <Card title={"Like"} delayInitialMount={1500}>
              <p>
                好きな<Bold>漫画</Bold>・<Bold>Vtuber</Bold>・<Bold>音楽</Bold>について書きます
              </p>
            </Card>
            <Card title={"Programing"} delayInitialMount={2000}>
              <p>Typescriptが好きです。Python・Ruby on Railsはほんとに少しだけかけますが、得意じゃないよ！</p>
              <p>
                フロントエンドフレームワークでは React / Next.js をバックエンドフレームワークでは NestJSを好んで使うよ！
              </p>
              <p>Redux + Redux Toolkit + normalizrを使うやり方が好き！</p>
              <p>
                インフラまわりはfirebase・vercel・herokuが調べつつやりたいことができる程度。
                コンテナ技術・GCP・AWSはほとんどわからないので勉強中・・・。
              </p>
              <p>
                CI/CDまわりはGithubActionsはではじめに少し使っていた程度、CircleCIもすでに動いているymlに付け足すことはできます。
              </p>
            </Card>
          </CardContainer>
        </FirstView>
      </FirstViewWrapper>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const accounts = snsAccounts.map<Account>(({ url, type, image }) => ({ url, type, image }));

  return { props: { accounts } };
};

export default memo(Home);

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.primary};
`;

const FirstViewWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 32px;
  box-sizing: border-box;

  @media screen and (max-width: 480px) {
    padding: 16px;
  }
`;

const FirstView = styled.div`
  width: 100%;
  border-radius: 16px;
  border: solid 5px ${(props) => props.theme.secondary};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    border: none;
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

const AccountContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
`;
