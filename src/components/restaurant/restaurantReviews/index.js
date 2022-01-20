// import { Col, Row } from "antd";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import useFetch from "../../../hooks/useFetch";

// const RestaurantReviews = () => {
//   const { restaurantId } = useParams();

//   const {
//     data: reviews,
//     noData,
//     isLoading,
//     error,
//   } = useFetch(
//     "http://localhost:3001/api/v1/review/restaurant/" + restaurantId
//   );
//   console.log(reviews);
//   return (
//     <Row justify="center" align="middle">
//       <Conatiner span={24}>
//         {reviews &&
//           reviews.review_details.result.map((review) => (
//             <Row justify="center" align="middle" key={review._id}>
//               <Col span={20}></Col>
//               <Col span={4}>{review.createdAt}</Col>
//             </Row>
//           ))}
//       </Conatiner>
//     </Row>
//   );
// };

// export default RestaurantReviews;

// const Conatiner = styled(Col)``;

import {
  Avatar,
  Col,
  Empty,
  Image,
  Rate,
  Row,
  Skeleton,
  Typography,
} from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../../../hooks/useFetch";

import upvoteIcon from "../../../assets/Restaurant Review/Hand-01.svg";
import downvoteIcon from "../../../assets/Restaurant Review/Hand-02.svg";
import { URL } from "../../../config";

const { Title, Text } = Typography;

const GetDate = (e) => {
  var date = new Date(e),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()].join(" / ");
};

const CustomerReview = () => {
  const { restaurantId } = useParams();
  const [page, setPage] = useState("1");
  const [limit, setLimit] = useState("10");

  const {
    data: reviewList,
    noData,
    isLoading,
    error,
  } = useFetch(
    URL +
      "review/restaurant/" +
      restaurantId +
      "?page=" +
      page +
      "&limit=" +
      limit
  );

  console.log(reviewList);

  return (
    <Row justify="center" align="middle">
      <Container span={24}>
        <Row justify="start" align="middle">
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
          {reviewList &&
            reviewList.review_details.result.map((review) => (
              <DataContainer span={22} offset={1} key={review._id}>
                <Row justify="start" align="middle">
                  <Col span={20}></Col>
                  <Col span={4}>
                    <DateText>{GetDate(review.createdAt)}</DateText>
                  </Col>
                </Row>
                <Row justify="center" align="middle">
                  <Col span={2}>
                    <Avatar
                      size="large"
                      icon={
                        <Image
                          src={URL + review.reviewerId[0].profile}
                          preview={false}
                        />
                      }
                    />
                  </Col>
                  <Col span={14}>
                    <Row justify="center" align="middle">
                      <Col span={24}>
                        <UserName>{review.reviewerId[0].name}</UserName>
                      </Col>
                      <Col span={24}>
                        <Description>{review.description}</Description>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={8}>
                    <Image
                      src={URL + review.image}
                      width={100}
                      preview={false}
                      style={{ borderRadius: "15px" }}
                    />
                  </Col>
                </Row>
                <Row justify="start" align="middle">
                  <Col span={4}>
                    <Rate value={review.rating} disabled />
                  </Col>
                  <Col span={3}>
                    <Row justify="center" align="middle">
                      <Col span={10}>
                        <Image src={upvoteIcon} preview={false} />
                      </Col>
                      <Col span={14}>
                        <Vote>({review.upVote})</Vote>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={3}>
                    <Row justify="center" align="middle">
                      <Col span={10}>
                        <Image src={downvoteIcon} preview={false} />
                      </Col>
                      <Col span={14}>
                        <Vote>({review.downVote})</Vote>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </DataContainer>
            ))}
        </Row>
      </Container>
    </Row>
  );
};

export default CustomerReview;

const Container = styled(Col)`
  background: #ffffff;
  text-align: left;
  padding-top: 2%;
  padding-bottom: 2%;
  margin-bottom: 2%;

  border-radius: 0 0 24px 24px;
`;

const DataContainer = styled(Col)`
  padding-top: 1%;
  padding-bottom: 3%;
  margin-bottom: 1%;
  border-bottom: 1px solid #707070;
`;

const UserName = styled(Title)`
  &.ant-typography {
    font-family: Montserrat-Bold;
    font-size: 20px;
    color: #111111;
    text-transform: capitalize;
  }
`;

const DateText = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 20px;
    color: #8d92a3;
    text-transform: capitalize;
  }
`;

const Vote = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Regular;
    font-size: 20px;
    color: #111111;
    text-transform: capitalize;
  }
`;

const Description = styled(Text)`
  &.ant-typography {
    font-family: Montserrat-Medium;
    font-size: 18px;
    color: #9ca0ab;
  }
`;

const Btn = styled(Col)`
  font-family: Roboto-Regular;
  font-size: 20px;
  color: #ee1414;
  text-transform: capitalize;
  cursor: pointer;
  text-align: right;
`;
