import { Col, Image, Row } from "antd";
import styled, { css } from "styled-components";

import filterIcon from "../../../assets/HomePage/Group 4834.svg";

const FilterButtons = (props) => {
  const HandleFilter = () => {
    props.setOpenFilter(true);
    props.setFilterSelected(true);
    props.setRatingsSelected(false);
    props.setBreakfastSelected(false);
    props.setLunchSelected(false);
  };
  const HandleRatings = () => {
    props.setFilterSelected(false);
    props.setRatingsSelected(true);
    props.setBreakfastSelected(false);
    props.setLunchSelected(false);
  };
  const HandleBreakfast = () => {
    props.setFilterSelected(false);
    props.setRatingsSelected(false);
    props.setBreakfastSelected(true);
    props.setLunchSelected(false);
  };
  const HandleLunch = () => {
    props.setFilterSelected(false);
    props.setRatingsSelected(false);
    props.setBreakfastSelected(false);
    props.setLunchSelected(true);
  };

  return (
    <Row justify="center" align="middle">
      <Container span={22}>
        <Row justify="space-between" align="middle">
          <Buttons
            span={5}
            $active={props.filterSelected}
            onClick={HandleFilter}
          >
            <Row justify="center" align="middle">
              <Col span={2}>
                <Image src={filterIcon} preview={false} />
              </Col>
              <Col span={12}>filters</Col>
            </Row>
          </Buttons>
          <Buttons
            span={5}
            $special
            $active={props.ratingsSelected}
            onClick={HandleRatings}
          >
            rating 4.0 +
          </Buttons>
          <Buttons
            span={5}
            $active={props.breakfastSelected}
            onClick={HandleBreakfast}
          >
            breakast
          </Buttons>
          <Buttons span={5} $active={props.lunchSelected} onClick={HandleLunch}>
            lunch
          </Buttons>
        </Row>
      </Container>
    </Row>
  );
};

export default FilterButtons;

const Container = styled(Col)``;

const Buttons = styled(Col)`
  background: #eeeeee;
  border-radius: 20px;
  padding: 1.5%;
  font-family: Montserrat-SemiBold;
  font-size: 20px;
  color: #808183;
  text-transform: capitalize;
  cursor: pointer;
  ${(props) =>
    props.$active &&
    css`
      background: #1b2749;
      color: #ffffff;
    `}
  ${(props) =>
    props.$special &&
    css`
      background: #fa6300;
      color: #ffffff;
    `}
`;
