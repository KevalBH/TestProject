import { Button, Col, Empty, Image, Row, Skeleton, Typography } from "antd";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../../../../hooks/useFetch";
import AddOnButton from "../../../buttons/addonButton";
import minus from "../../../../assets/Restaurant Menu/Icon awesome-minus.svg";
import plus from "../../../../assets/Restaurant Menu/Icon awesome-plus.svg";
import clockIcon from "../../../../assets/Restaurant Info/Icon-Glyph-Star Copy.svg";
import { useState } from "react";
import ItemList from "./ItemList";
import { URL } from "../../../../config";

const { Title, Text } = Typography;

const MenuCard = ({ category, activeTag }) => {
  const { restaurantId } = useParams();
  const {
    data: menus,
    noData,
    isLoading,
    error,
  } = useFetch(URL + "menu_item/menu_tag/" + activeTag + "/" + category);

  const [itemCounter, setItemCounter] = useState(0);

  const HandleAddCounter = () => {
    setItemCounter((previousCount) => previousCount + 1);
  };
  const HandleMinusCounter = () => {
    setItemCounter((previousCount) => previousCount - 1);
  };
  return (
    <Row justify="center" align="middle">
      {category && (
        <Container span={24}>
          <Col span={24}>
            {isLoading && <Skeleton active />}
            {noData ? (
              <Row justify="center" align="middle">
                <Container span={24}>
                  <Empty description="No Data Found" />
                </Container>
              </Row>
            ) : (
              error && <div> {error}</div>
            )}
          </Col>
          {menus &&
            menus.menuItems.result.map((menuItem) => (
              <ItemList
                menu={menuItem}
                HandleAddCounter={HandleAddCounter}
                HandleMinusCounter={HandleMinusCounter}
                itemCounter={itemCounter}
                key={menuItem._id}
              />
            ))}
        </Container>
      )}
    </Row>
  );
};

export default MenuCard;

const Container = styled(Col)`
  text-align: left;
  margin-top: 2%;
  margin-bottom: 2%;
`;
