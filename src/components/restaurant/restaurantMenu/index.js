import { Col, Empty, Image, Row, Skeleton } from "antd";
import styled, { css } from "styled-components";
import SubmitButton from "../../buttons/submitButton";
import MenuCard from "./menuCard";
import veg from "../../../assets/Restaurant Menu/Group 5389.svg";
import nonVeg from "../../../assets/Restaurant Menu/Group 5390.svg";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { URL } from "../../../config";

const RestaurantMenu = ({ setBookTypeModal }) => {
  const { restaurantId } = useParams();
  const [category, setCategory] = useState("vegetarian");
  const [activeTag, setActiveTag] = useState();

  const { data: menuTags, isLoading } = useFetch(
    URL + "menu_tag/restaurant/" + restaurantId
  );

  useEffect(() => {
    menuTags && setActiveTag(menuTags.menuTags.result[0]._id);
  }, [menuTags]);

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Col span={24}>{isLoading && <Skeleton active />}</Col>
        {menuTags && (
          <Row justify="center" align="middle">
            <MenuTagContainer span={23}>
              <Row justify="center" align="middle">
                {menuTags.menuTags.result.map((tag) => (
                  <MenuTag
                    span={3}
                    key={tag._id}
                    $primary={activeTag === tag._id ? true : false}
                    onClick={() => setActiveTag(tag._id)}
                  >
                    {tag.name}
                  </MenuTag>
                ))}
              </Row>
            </MenuTagContainer>
          </Row>
        )}
        <Row justify="start" align="middle">
          <CateogryTab
            span={4}
            offset={1}
            onClick={() => setCategory("vegetarian")}
            $background={category === "vegetarian" && "#8dbf9c"}
            $color={category === "vegetarian" && "#ffffff"}
          >
            <Row justify="center" align="middle">
              <Col span={4}>
                <Image src={veg} preview={false} />
              </Col>
              <Col span={18}>Veg</Col>
            </Row>
          </CateogryTab>
          <CateogryTab
            span={4}
            offset={1}
            onClick={() => setCategory("non-vegetarian")}
            $background={category === "non-vegetarian" && "#e69995"}
            $color={category === "non-vegetarian" && "#ffffff"}
          >
            <Row justify="center" align="middle">
              <Col span={4}>
                <Image src={nonVeg} preview={false} />
              </Col>
              <Col span={18}> Non-Veg</Col>
            </Row>
          </CateogryTab>
        </Row>

        <Row justify="center" align="middle">
          <Col span={24}>
            <MenuCard category={category} activeTag={activeTag} />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <MenuContainer span={8}>
            <SubmitButton
              text="proceed"
              onClick={() => setBookTypeModal(true)}
            />
          </MenuContainer>
        </Row>
      </Container>
    </Row>
  );
};

export default RestaurantMenu;

const Container = styled(Col)`
  background: #ffffff;
  border-radius: 0 0 24px 24px;
`;

const MenuTagContainer = styled(Col)`
  margin-top: 2%;
  margin-bottom: 1%;
`;
const MenuTag = styled(Col)`
  font-family: Montserrat-Bold;
  font-size: 30px;
  color: #adb3bf;
  text-transform: capitalize;
  border-bottom: 5px solid #d1d5dcb2;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  ${(props) =>
    props.$primary &&
    css`
      color: #1b2749;
      border-bottom: 5px solid #1b2749;
    `}
`;

const CateogryTab = styled(Col)`
  background: ${(props) => props.$background};
  border: 0.699999988079071px solid #707070;
  border-radius: 14px;
  font-family: Gotham-Medium;
  font-size: 20px;
  color: ${(props) => props.$color || "#707070"};
  margin-top: 3%;
  margin-bottom: 1%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  cursor: pointer;
`;

const MenuContainer = styled(Col)`
  margin-top: 10%;
  margin-bottom: 5%;
`;
