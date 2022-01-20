import { Button, Col, Image, Input, Row, Typography } from "antd";
import styled from "styled-components";

import timerIcon from "../../../assets/Search_by_Text/timer.svg";
import micIcon from "../../../assets/HomePage/Icon awesome-microphone.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "../../../config";

const { Text } = Typography;

const SearchByText = () => {
  const user = localStorage.user;
  //   const { data: recent } = useFetch(URL + "search_history/user/" + user);
  const [recentSearch, setRecentSearch] = useState([]);

  useEffect(() => {
    axios
      .get(URL + "search_history/user/" + user)
      .then((res) =>
        //  console.log(res.data.searchHistories.result)
        res.data.searchHistories.result.map(
          (result) => console.log(result)
          // setRecentSearch(previous=> [...previous, result.text ])
        )
      )
      .catch((err) => console.log(err));
  }, [recentSearch]);

  const HandleSearch = (text) => {
    axios
      .post(URL + "search_history", { user, text })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={18}>
            <Input
              placeholder="search"
              onPressEnter={(e) => HandleSearch(e.target.value)}
            />
          </Col>
          <Col span={3} offset={1}>
            <Button shape="circle" size="large">
              <Image src={micIcon} preview={false} width={15} />
            </Button>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={22}>
            <H1>Recently searched</H1>
          </Col>
          <Col span={22}>
            {recentSearch &&
              recentSearch.map((history) => (
                <HistoryContainer span={4}>
                  <Row justify="center" align="middle">
                    <Col span={2} offset={1}>
                      <Image src={timerIcon} preview={false} />
                    </Col>
                    <Col span={20} offset={1}>
                      <P1>{history.text}</P1>
                    </Col>
                  </Row>
                </HistoryContainer>
              ))}
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default SearchByText;

const Container = styled(Col)`
  background: #1b2749;
  opacity: 0.96;
  padding: 8%;
`;

const HistoryContainer = styled(Col)`
  border: 1px solid #ffffff;
  text-align: left;
  border-radius: 7px;
`;

const H1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 17px;
    color: #ffffff;
  }
`;

const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 15px;
    color: #ffffff;
  }
`;
