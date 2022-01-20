import { Col, Empty, Image, Row, Skeleton, Typography } from "antd";
import styled from "styled-components";
import useFetch from "../../../hooks/useFetch";

import checked from "../../../assets/Add Ons/Icon ionic-md-checkmark-circle.svg";
import unchecked from "../../../assets/Add Ons/Icon material-radio-button-unchecked.svg";

import Head from "../head";
import { useEffect, useState } from "react";
import SubmitButton from "../../buttons/submitButton";
import { URL } from "../../../config";

const { Text } = Typography;

const Addons = ({ setOpenAddon, menu, setSelectedAddons, HandleAddAddon }) => {
  const [addonList, setAddonList] = useState([]);
  const {
    data: addons,
    noData,
    isLoading,
    error,
  } = useFetch(URL + "addon/menu_item/" + menu._id);

  const HandleAddonList = (addon) => {
    const index = addonList.findIndex((addons) => addons.id === addon._id);
    index > -1
      ? setAddonList((addons) => {
          let newAddonList = addonList.filter((item) => item.id !== addon._id);
          return newAddonList;
        })
      : setAddonList((addons) => [
          ...addons,
          { id: addon._id, menuItem: menu._id, price: addon.price },
        ]);
  };
  useEffect(() => {
    setSelectedAddons(addonList);
  }, [addonList]);

  const HandleSubmitAddon = (menu) => {
    setOpenAddon(false);
    HandleAddAddon(menu);
  };

  const HandleCloseAddon = () => {
    setAddonList([]);
    setOpenAddon(false);
  };

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Head text="Add-Ons" onClick={HandleCloseAddon} />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={24}>
            {isLoading && <Skeleton active />}
            {noData ? (
              <Row justify="center" align="middle">
                <Container span={24}>
                  <Empty description="No Addons avaliable for this item" />
                </Container>
              </Row>
            ) : (
              error && <div> {error}</div>
            )}
          </Col>
        </Row>
        {addons && (
          <Row justify="center" align="middle">
            <Col span={20}>
              <Row justify="center" align="middle">
                {addons.addons.result.map((addon) => (
                  <AddonContainer
                    span={24}
                    key={addon._id}
                    onClick={() => HandleAddonList(addon)}
                  >
                    <Row justify="center" align="middle">
                      <Col span={2}>
                        <Image
                          src={
                            addonList.findIndex(
                              (list) => list.id === addon._id
                            ) > -1
                              ? checked
                              : unchecked
                          }
                          preview={false}
                          width={25}
                        />
                      </Col>
                      <Col span={16}>
                        <P1>{addon.name}</P1>
                      </Col>
                      <Col span={6}>
                        <P2>{addon.price} KD</P2>
                      </Col>
                    </Row>
                  </AddonContainer>
                ))}
              </Row>
            </Col>
            <Button span={12}>
              <SubmitButton
                text="add"
                onClick={() => HandleSubmitAddon(menu)}
              />
            </Button>
          </Row>
        )}
        <Row justify="center" align="middle"></Row>
      </Container>
    </Row>
  );
};

export default Addons;

const Container = styled(Col)`
  border-radius: 24px;
  background: #ffffff;
  margin-bottom: 5%;
`;

const AddonContainer = styled(Col)`
  cursor: pointer;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const P1 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 20px;
    color: #a6a7b7;
    text-transform: capitalize;
  }
`;
const P2 = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-SemiBold;
    font-size: 20px;
    color: #f86401;
    text-transform: capitalize;
  }
`;

const Button = styled(Col)`
  margin-top: 5%;
  margin-bottom: 5%;
`;
