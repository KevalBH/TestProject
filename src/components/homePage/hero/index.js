import {
  Col,
  Image,
  Input,
  Row,
  Typography,
  Select,
  Divider,
  Button,
} from "antd";

import bg from "../../../assets/HomePage/Banner.png";
import searchIcon from "../../../assets/HomePage/Icon ionic-ios-search.svg";
import locationIcon from "../../../assets/HomePage/Icon awesome-map-marker-alt.svg";
import micIcon from "../../../assets/HomePage/Icon awesome-microphone.svg";
import styled from "styled-components";

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const Hero = ({ setSearchByText }) => {
  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Image
              src={bg}
              preview={false}
              style={{ filter: "brightness(50%)" }}
            />
          </Col>
          <HeroContainer span={24}>
            <Row justify="center" align="middle">
              <Col span={24}>
                <H1>book your table</H1>
                <P1>Lorem ipsum is simply dummy test of the printing</P1>
              </Col>
              <SearchContainer span={18}>
                <Row justify="start" align="middle">
                  <Col span={1} offset={1}>
                    <Image src={locationIcon} preview={false} width={15} />
                  </Col>
                  <Col span={6}>
                    <Select defaultValue="one" bordered={false}>
                      <Option value="one">Lorem Ipsum 1</Option>
                      <Option value="two">Lorem Ipsum 2</Option>
                    </Select>
                  </Col>
                  <Col span={16}>
                    <DividerLine type="vertical" />
                    <SearchBox
                      allowClear
                      bordered={false}
                      prefix={
                        <Image src={searchIcon} preview={false} width={20} />
                      }
                      onSearch={() => console.log("searching")}
                      onClick={() => setSearchByText(true)}
                    />
                  </Col>
                </Row>
              </SearchContainer>
              <MicContainer span={1} offset={1}>
                <Button size="large" shape="circle">
                  <Image src={micIcon} preview={false} width={15} />
                </Button>
              </MicContainer>
            </Row>
          </HeroContainer>
        </Row>
      </Container>
    </Row>
  );
};

export default Hero;

const Container = styled(Col)``;

const HeroContainer = styled(Col)`
  margin-top: -50%;
`;

const SearchContainer = styled(Col)`
  border-radius: 10px;
  background: #ffffff;
  padding: 0.5%;
`;
const MicContainer = styled(Col)``;

const SearchBox = styled(Search)`
  &.ant-input-search {
    width: 50%;
  }

  &.ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button:not(.ant-btn-primary) {
    display: none;
  }
`;

const H1 = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-Bold;
    font-size: 40px;
    color: #ffffff;
    text-transform: uppercase;
  }
`;

const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 20px;
    color: #ffffff;
  }
`;

const DividerLine = styled(Divider)`
  &.ant-divider-vertical {
    color: #aeb0b1;
    height: 30px;
    overflow: hidden;
  }
`;
