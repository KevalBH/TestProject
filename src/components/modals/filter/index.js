import { Col, Image, Row, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useFetch from "../../../hooks/useFetch";
import Head from "../head";
import SubmitButton from "../../buttons/submitButton";
import CancelButton from "../../buttons/cancelButton";

import selectedIcon from "../../../assets/Filter/Icon ionic-ios-checkbox-outline.svg";
import unSelectedIcon from "../../../assets/Filter/Path 2952.svg";
import { URL } from "../../../config";

const { Text } = Typography;

const Filter = ({ onClick }) => {
  const { data: filters } = useFetch(URL + "filter/");

  const [filterList, setFilterList] = useState(null);
  const [filterId, setFilterId] = useState(null);
  const [filterSelected, setFilterSelected] = useState([]);

  const HandleFilters = (e) => {
    setFilterId(e);
    axios
      .get(URL + "filter/" + e)
      .then((res) => setFilterList(res.data.filters))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const abortControl = new AbortController();

    HandleFilters(filters ? filters.filters.result[0]._id : null);

    return () => {
      abortControl.abort();
    };
  }, [filters]);

  const HandleSelectFilter = (e) => {
    filterSelected.includes(e)
      ? filterSelected.splice(filterSelected.indexOf(e), 1) &&
        setFilterSelected((previous) => [...previous])
      : setFilterSelected((previous) => [...previous, e]);
  };

  const HandleSubmit = () => {
    alert(filterSelected);
  };

  const HandleClear = () => {
    setFilterSelected([]);
  };

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Body span={24}>
            <Row justify="center" align="middle">
              <Col span={24}>
                <Head text="filter" onClick={onClick} />
              </Col>
            </Row>
            <Row justify="center" align="middle">
              <TabHead span={24}>
                {filters && (
                  <Row justify="center" align="middle">
                    {filters.filters.result.map((filter) => (
                      <Tabs
                        active={filterId === filter._id ? true : false}
                        span={24 / filters.filters.totalDocs}
                        key={filter._id}
                        onClick={() => HandleFilters(filter._id)}
                      >
                        <H1>{filter.filterTitle}</H1>
                      </Tabs>
                    ))}
                  </Row>
                )}
              </TabHead>
              <TabBody span={24}>
                {filterList && (
                  <Row justify="center" align="middle">
                    {filterList.map((filter) => (
                      <Col
                        span={22}
                        key={filter._id}
                        onClick={() => HandleSelectFilter(filter._id)}
                      >
                        <Row justify="center" align="middle">
                          <Col span={2}>
                            <Image
                              src={
                                filterSelected.includes(filter._id)
                                  ? selectedIcon
                                  : unSelectedIcon
                              }
                              preview={false}
                              width={15}
                            />
                          </Col>
                          <Col span={20}>
                            <P1>{filter.name}</P1>
                          </Col>
                        </Row>
                      </Col>
                    ))}
                  </Row>
                )}
                <Row justify="center" align="middle">
                  <Buttons span={20}>
                    <Row justify="space-between" align="middle">
                      <Col span={11}>
                        <SubmitButton text="apply" onClick={HandleSubmit} />
                      </Col>
                      <Col span={11}>
                        <CancelButton text="clear all" onClick={HandleClear} />
                      </Col>
                    </Row>
                  </Buttons>
                </Row>
              </TabBody>
            </Row>
          </Body>
        </Row>
      </Container>
    </Row>
  );
};

export default Filter;

const Container = styled(Col)`
  background: #ffffff;
  box-shadow: 0px 40px 40px #00000040;
  border-radius: 15px;
  padding: 2%;
`;

const Body = styled(Col)`
  border: 2px solid #1b2749;
  border-radius: 10px;
`;

const TabHead = styled(Col)`
  background: #ffffff;
  box-shadow: 0px 15px 25px #00000029;
  margin-bottom: 5%;
  text-align: center;
  text-transform: capitalize;
`;

const Tabs = styled(Col)`
  padding-top: 3%;
  padding-bottom: 3%;
  transition: 0.2s linear;
  ${({ active }) =>
    active && `border-bottom :5px solid #1B2749; border-radius:4px`};
`;

const TabBody = styled(Col)`
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Buttons = styled(Col)`
  margin-top: 5%;
`;

const H1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 25px;
    color: #9c9eaf;
    cursor: pointer;
  }
`;

const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 20px;
    color: #111111;
    text-transform: capitalize;
    cursor: pointer;
  }
`;
