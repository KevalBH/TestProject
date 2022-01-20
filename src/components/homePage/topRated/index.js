import { Col, Row } from "antd";
import useFetch from "../../../hooks/useFetch";
import TopRatedLists from "./TopRatedList";
import { URL } from "../../../config";

const TopRated = () => {
  const { data: restaurantLists } = useFetch(URL + "restaurant/top");
  return (
    <Row justify="center" align="middle">
      {restaurantLists && (
        <Col span={22}>
          <TopRatedLists restaurantLists={restaurantLists} />
        </Col>
      )}
    </Row>
  );
};

export default TopRated;
