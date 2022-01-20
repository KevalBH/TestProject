import { Layout } from "antd";
import { createContext, useEffect, useReducer } from "react";
import useFetch from "../../hooks/useFetch";
import Order from "../../utils/order.model";
import OrderReducer from "../../utils/reducer/order.reducer";
import setAccessToken from "../../utils/setAccessToken";
import BigFooter from "../bigFooter";
import Head from "../head";
import { URL } from "../../config";

const { Content } = Layout;

export const UserContext = createContext();
export const OrderContext = createContext();

const AppLayout = ({ children }) => {
  const userId = localStorage.getItem("user");
  const token = localStorage.BYTAccessToken;
  const [state, dispatch] = useReducer(OrderReducer, Order);

  useEffect(() => {
    if (token) {
      setAccessToken(token);
    } else {
      console.log("Login to continue");
    }
  });

  const { data: user } = useFetch(URL + "user/" + userId);
  return (
    <Layout>
      <UserContext.Provider value={user}>
        <OrderContext.Provider
          value={{ orderState: state, orderDispatch: dispatch }}
        >
          <Content>
            <Head />
            {children}
            <BigFooter />
          </Content>
        </OrderContext.Provider>
      </UserContext.Provider>
    </Layout>
  );
};

export default AppLayout;
