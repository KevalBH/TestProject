import { Col, Divider, Image, Row, Typography } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { URL } from "../../../config";

const { Text } = Typography;

const TrendingList = (trendingLists) => {
  const history = useHistory();
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        {trendingLists && (
          <Row justify="space-between" align="middle">
            {trendingLists.trendingLists.restaurants.result.map(
              (restaurant) => (
                <CardContainer
                  span={7}
                  key={restaurant._id}
                  onClick={() => history.push("/restaurant/" + restaurant._id)}
                >
                  <Row justify="center" align="middle">
                    <Col span={24}>
                      <RestaurantImage
                        src={URL + restaurant.image}
                        preview={false}
                      />
                    </Col>
                    <LineDivider span={24}>
                      <Divider />
                    </LineDivider>
                    <Col span={24}>
                      <RestaurantName>{restaurant.name}</RestaurantName>
                    </Col>
                  </Row>
                </CardContainer>
              )
            )}
          </Row>
        )}
      </Container>
    </Row>
  );
};

export default TrendingList;

const Container = styled(Col)``;
const CardContainer = styled(Col)`
  cursor: pointer;
`;

const RestaurantImage = styled(Image)`
  box-shadow: 0px 3px 12px #00000029;
  border-radius: 16px;
`;

const LineDivider = styled(Col)`
  margin-top: -4%;
  margin-bottom: -7%;
`;

const RestaurantName = styled(Text)`
  &.ant-typography {
    font-family: montserrat-SemiBold;
    font-size: 20px;
    color: #1b2749;
    text-transform: uppercase;
  }
`;
