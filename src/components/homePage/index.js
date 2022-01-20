import { Col, Modal, Row } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BookTable from "../modals/bookTable";
import BookType from "../modals/bookType";
import Filter from "../modals/filter";
import SearchByText from "../modals/searchByText";
import Banner from "./banner";
import Breakfast from "./breakfast";
import CardAds from "./cardAds";
import FilterButtons from "./filterButtons";
import Hero from "./hero";
import Hotspots from "./hotspots";
import Lunch from "./lunch";
import NearYou from "./nearYou";
import TopRated from "./topRated";
import Trending from "./trending";

const HomePage = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [filterSelected, setFilterSelected] = useState(false);
  const [ratingsSelected, setRatingsSelected] = useState(false);
  const [lunchSelected, setLunchSelected] = useState(false);
  const [breakfastSelected, setBreakfastSelected] = useState(false);

  const [openFilter, setOpenFilter] = useState(false);
  const [bookTypeModal, setBookTypeModal] = useState(false);
  const [firstVisitModal, setFirstVisitModal] = useState(false);
  const [searchByText, setSearchByText] = useState(false);

  useEffect(() => {
    const abortControl = new AbortController();

    setFirstVisitModal(true);

    return () => {
      abortControl.abort();
    };
  }, []);

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Hero setSearchByText={setSearchByText} />
        <ButtonContainer span={24}>
          <FilterButtons
            openFilter={openFilter}
            setOpenFilter={setOpenFilter}
            filterSelected={filterSelected}
            setFilterSelected={setFilterSelected}
            ratingsSelected={ratingsSelected}
            setRatingsSelected={setRatingsSelected}
            lunchSelected={lunchSelected}
            setLunchSelected={setLunchSelected}
            breakfastSelected={breakfastSelected}
            setBreakfastSelected={setBreakfastSelected}
          />
        </ButtonContainer>
        {(ratingsSelected || breakfastSelected || lunchSelected) === false && (
          <>
            <CardContainer span={24}>
              <Trending />
            </CardContainer>
            <CardContainer span={24}>
              <NearYou />
            </CardContainer>
            <CardContainer span={24}>
              <Hotspots />
            </CardContainer>{" "}
          </>
        )}
        {ratingsSelected && (
          <CardContainer span={24}>
            <TopRated />
          </CardContainer>
        )}
        {breakfastSelected && (
          <CardContainer span={24}>
            <Breakfast
              setBookTypeModal={setBookTypeModal}
              setSelectedRestaurant={setSelectedRestaurant}
            />
          </CardContainer>
        )}
        {lunchSelected && (
          <CardContainer span={24}>
            <Lunch />
          </CardContainer>
        )}
      </Container>
      <AdsContainer span={24}>
        <CardAds />
      </AdsContainer>
      <BannerConatiner span={24}>
        <Banner />
      </BannerConatiner>
      <SpecialModal
        visible={openFilter || bookTypeModal || searchByText || firstVisitModal}
        onCancel={() => {
          setOpenFilter(false);
          setBookTypeModal(false);
          setSearchByText(false);
        }}
        footer={false}
        closable={false}
        maskStyle={false}
        maskClosable={true}
        width={1000}
      >
        {openFilter && (
          <Filter
            onClick={() => {
              setOpenFilter(false);
            }}
          />
        )}
        {bookTypeModal && (
          <BookType
            onClose={() => setBookTypeModal(false)}
            selectedRestaurant={selectedRestaurant}
          />
        )}
        {searchByText && (
          <SearchByText onClose={() => setSearchByText(false)} />
        )}

        {firstVisitModal && (
          <BookTable onClose={() => setFirstVisitModal(false)} />
        )}
      </SpecialModal>
    </Row>
  );
};

export default HomePage;

const Container = styled(Col)`
  background: #ffffff;
`;

const ButtonContainer = styled(Col)`
  background: #ffffff;
  padding-top: 3%;
  padding-bottom: 3%;
`;

const CardContainer = styled(Col)`
  background: #f8f8f8;
  margin-top: 3%;
  margin-bottom: 3%;
  padding-top: 3%;
  padding-bottom: 3%;
`;
const AdsContainer = styled(Col)`
  background: #ffffff;
  padding-top: 3%;
  padding-bottom: 3%;
`;

const BannerConatiner = styled(Col)``;

const SpecialModal = styled(Modal)`
  .ant-modal-content {
    background: none;
    box-shadow: none;
  }
`;
