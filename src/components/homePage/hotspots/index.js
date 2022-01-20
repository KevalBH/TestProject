import { Col, Empty, Row, Skeleton, Typography } from "antd";
import styled from "styled-components";
import useFetch from "../../../hooks/useFetch";
import ViewAllButton from "../../buttons/viewAllButton";
import HotspotsList from "./HotspotsList";
import { URL } from "../../../config";

const { Text, Title } = Typography;

const Hotspots = () => {
  const {
    data: restaurantLists,
    noData,
    isLoading,
    error,
  } = useFetch(
    URL +
      "restaurant/hotspot?lat=18.418559453758554&long=73.8533307305369&page=1&limit=3"
  );

  return (
    <Row justify="center" align="middle">
      <Container span={22}>
        <Row justify="start" align="middle">
          <HeadingContainer span={24}>
            <Row justify="start" align="middle">
              <Col span={20}>
                <H1>hotspots near you</H1>
                <P1>lorem ipsum is simply dummy text of the printing</P1>
              </Col>
              <Col span={4}>
                <ViewAllButton text="view all" />
              </Col>
            </Row>
          </HeadingContainer>
          <ItemContainer span={24}>
            <Row justify="start" align="middle">
              <Col span={24}>
                {isLoading && <Skeleton active />}
                {noData ? (
                  <Row justify="center" align="middle">
                    <Col span={24}>
                      <Empty description="No Data Found" />
                    </Col>
                  </Row>
                ) : (
                  error && <div> {error}</div>
                )}
              </Col>
              <Col span={24}>
                {restaurantLists && (
                  <HotspotsList restaurantLists={restaurantLists} />
                )}
              </Col>
            </Row>
          </ItemContainer>
        </Row>
      </Container>
    </Row>
  );
};

export default Hotspots;

const Container = styled(Col)`
  text-align: left;
`;

const HeadingContainer = styled(Col)``;
const ItemContainer = styled(Col)`
  margin-top: 5%;
  margin-bottom: 3%;
`;

const H1 = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-Bold;
    font-size: 35px;
    color: #1b2749;
    text-transform: uppercase;
  }
`;
const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 20px;
    color: #858484;
  }
`;
