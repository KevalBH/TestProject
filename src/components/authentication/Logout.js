import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { URL } from "../../config";

const Logout = () => {
  const history = useHistory();

  const [err, setErr] = useState(null);

  const { data } = useFetch(URL + "user/logout");

  useEffect(() => {
    if (data) {
      localStorage.removeItem("user");
      localStorage.removeItem("BYTAccessToken");
      setErr(null);
      history.push("/");
    } else {
      setErr("Error logging out user");
    }
  }, [data]);

  return (
    <Row justify="center" align="middle">
      {err && <Col span={24}>{err}</Col>}
      {data && <Col span={24}>{data.message}</Col>}
    </Row>
  );
};

export default Logout;
