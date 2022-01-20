import { Col, Divider, Row, Switch } from "antd";
import { useContext, useState } from "react";
import styled from "styled-components";
import ACTIONS from "../../../../utils/actions/order.action";
import { OrderContext } from "../../../appLayout";

import CancelButton from "../../../buttons/cancelButton";
import Guests from "./guests";
import Table from "./table";

const Dine = ({
  selectedRestaurant,
  adultCount,
  setAdultCount,
  kidCount,
  setKidCount,
  setProceed,
  onOpenSelectTableDialog,
  selectedTable
}) => {
  // const [selectedTables, setSelectedTables] = useState(["1", "2", "3"]);
  const { orderState, orderDispatch } = useContext(OrderContext);

  // const HandleTableClick = () => {
  //   selectedTables.map((table) =>
  //     // selectedTables.indexOf(table)
  //     orderState.table.includes(table)
  //       ? console.log("Table already included")
  //       : orderDispatch({ type: ACTIONS.TABLE, payload: table })
  //   );
  //   alert("select table");
  //   // orderDispatch({ type: ACTIONS.TABLE, payload: selectedTables });
  // };

  const HandleSubmit = () => {
    setProceed(true);
  };

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Spacer span={22}>
            <Guests
              adultCount={adultCount}
              setAdultCount={setAdultCount}
              kidCount={kidCount}
              setKidCount={setKidCount}
            />
          </Spacer>
        </Row>
        <Row justify="center" align="middle">
          <Spacer span={22}>

            {/* Select Table Code */}

            <Table selectedTable={selectedTable} onClick={(flag) => onOpenSelectTableDialog(flag)} />

            {/* Select Table Code End */}

          </Spacer>
        </Row>
        <Row justify="center" align="middle">
          <Col span={24}>
            <DividerLine />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <StatusContainer span={22}>
            <Row justify="space-between" align="middle">
              <Col span={10}>status</Col>
              <Col span={2}>
                <StatusSignal checked={true} />
              </Col>
            </Row>
          </StatusContainer>
        </Row>
        <Row justify="center" align="middle">
          <WaitingContainer span={22}>
            <Col span={22}>waiting list (0)</Col>
          </WaitingContainer>
        </Row>
        <Row justify="center" align="middle">
          <NoticeContainer span={22}>
            <Row justify="center" align="middle">
              <Col span={24}>note:</Col>
              <Notice span={23}>
                you will be notified when your table is ready. please allow byt
                notifications on your phone
              </Notice>
            </Row>
          </NoticeContainer>
        </Row>
        <Row justify="center" align="middle">
          <Col span={12}>
            <CancelButton text="book table" onClick={HandleSubmit} />
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Dine;

const Container = styled(Col)``;

const Spacer = styled(Col)`
  margin-top: 4%;
  margin-bottom: 4%;
`;
const DividerLine = styled(Divider)`
  border: 1px solid #2b3657;
`;

const StatusContainer = styled(Col)`
  font-family: Montserrat-Medium;
  font-size: 30px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 4%;
`;
const WaitingContainer = styled(Col)`
  font-family: Montserrat-Medium;
  font-size: 30px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 4%;
`;

const NoticeContainer = styled(Col)`
  font-family: Montserrat-Medium;
  font-size: 30px;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 4%;
`;

const StatusSignal = styled(Switch)`
  &.ant-switch-checked {
    background-color: #2fc177;
  }
`;

const Notice = styled(Col)`
  font-family: Montserrat-Regular;
  font-size: 20px;
  color: #ffffff;
  text-transform: uppercase;
`;
