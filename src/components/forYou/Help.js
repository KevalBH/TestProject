import { Col, Row, List, Typography, Image } from "antd";
import { useState } from "react";
import styled from "styled-components";
import RightArrowIcon from "../../assets/rightArrowIcon.svg";

const { Title, Paragraph } = Typography;
const [listItems, setListItems] = useState([
  { description: "Lorem Ipsum is simply dummy text of the printing?" },
  {
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  },
  { description: "Lorem Ipsum is simply dummy text of the printing?" },
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been?",
  },
  { description: "Lorem Ipsum is simply dummy text of the printing?" },
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
  },
  { description: "Lorem Ipsum is simply dummy text of the printing?" },
  {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
  },
  { description: "Lorem Ipsum is simply dummy text of the printing?" },
]);

const Help = () => {
  return (
    <Row justify="center" align="middle" style={{ backgroundColor: "#E4E4E4" }}>
      <Col
        span={22}
        style={{ backgroundColor: "#FFFFFF", padding: "5% 2% 5% 2%" }}
      >
        <Head>HELP AND SUPPORT</Head>

        <Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining esse- ntially unchanged.
        </Body>
        <Body>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions
        </Body>
        <Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining esse- ntially unchanged.
        </Body>
        <SecondHead>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions
        </SecondHead>
        <List
          itemLayout="horizontal"
          dataSource={listItems}
          renderItem={(item) => (
            <List.Item actions={[<Image src={RightArrowIcon} />]}>
              <List.Item.Meta
                description={<ListItem>{item.description}</ListItem>}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default Help;

const Head = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 61px;
    color: #1b2749;
  }
`;
const SecondHead = styled(Paragraph)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 25px;
    color: #000000;
    margin: 2px 0 2px 0;
  }
`;

const Body = styled(Paragraph)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 20px;
    color: #858484;
  }
`;
const ListItem = styled(Paragraph)`
  font-family: Montserrat-Medium;
  font-size: 15px;
  color: #858484;
`;
