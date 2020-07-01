import React, { memo } from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import Card from "~/common/components/Card";
import { snsAccounts } from "~/common/utils/constants";
import { AnchorLink } from "~/common/components/Link";
import { Bold } from "~/common/components/Bold";
import { HoverAnim } from "~/common/Animations/hover";
import { Title } from "~/common/components/Title";
import { FaTwitter, FaBlog, FaGithub } from "react-icons/fa";

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
                <Bold>Naporitan</Bold>っていいます！主な活動場所はTwitterでWebフロントエンドをやってるよ！
              </p>
              <p>
                趣味は<Bold>プログラミング</Bold>と<Bold>Vtuber</Bold>と<Bold>漫画</Bold>を読むこと
              </p>
              <p>かわいいものと音楽が好き！みんな仲良くしてね</p>
            </Card>
            <Card title={"Like"} delayInitialMount={1500}>
              <Title level={4}>Vtuber</Title>
              <p>名取さなさんが好きです</p>
              <Title level={4}>音楽</Title>
              <p>カンザキイオリさん・花譜ちゃん・DUSTCELLよく聴いてます</p>
              <p>最近はMU2020とかAOFとかで影響されてDJイベント参加にも興味が湧いています</p>
              <Title level={4}>東方</Title>
              <p>封獣ぬえちゃんが好きです</p>
              <p>例大祭とか行くので誘ってください</p>
              <Title level={4}>漫画</Title>
              <p>百合漫画が好きですが何でも読みます</p>
              <p>
                最近読んだものだと「きたない君が一番かわいい」・「アクタージュ」・「たとえ届かぬ糸だとしても」が好きです
              </p>
            </Card>
            <Card title={"Programing"} delayInitialMount={2000}>
              <Title level={4}>好きなエディタ</Title>
              <p>VisualStudioCode</p>
              <Title level={4}>よく書くよ！好き！</Title>
              <p>Typescript・React・Next.js・NestJS</p>
              <Title level={4}>たまに触る！まだよくわかってない</Title>
              <p>docker・GCP・AWS</p>
              <p>GithubActions</p>
              <p>firebase・vercel・heroku</p>
              <Title level={4}>気になってる！勉強中！</Title>
              <p>PIXI.js・THREE.js・react-spring・react-spring/three-fiber・GLSL・ CircleCI</p>
            </Card>
            <Card title={"SNSAccounts"} delayInitialMount={1000}>
              <AccountContainer>
                {accounts.map(({ type, url }) => (
                  <AnchorLink href={url} target="_blank" rel="noreferrer" key={`${type}-${url}`}>
                    {type === "twitter" && <FaTwitter size={"32px"} />}
                    {type === "github" && <FaGithub size={"32px"} />}
                    {type === "hatenablog" && <FaBlog size={"32px"} />}
                  </AnchorLink>
                ))}
              </AccountContainer>
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
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
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
    max-height: calc(100vh - 128px);
    object-fit: contain;
    animation: ${HoverAnim} 1s ease-in-out;
  }
`;

const CardContainer = styled.div`
  height: calc(100vh - 128px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 32px;
  flex: 1;
  min-width: 432px;

  & > div {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    height: 100%;
    overflow-y: visible;
  }

  @media screen and (max-width: 480px) {
    margin: 16px 0 0 0;
    min-width: 100%;
  }
`;

const AccountContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  & > a {
    margin: 0 16px;
  }
`;
