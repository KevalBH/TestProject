import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppLayout from "./components/appLayout";
import HomePage from "./components/homePage";
import Authentication from "./components/authentication";
import Logout from "./components/authentication/Logout";
import Restaurant from "./components/restaurant";
import AboutUs from "./components/aboutUs";
import Privacy from "./components/forYou/Privacy";
import Terms from "./components/forYou/Terms";
import Security from "./components/forYou/Security";
import SiteMap from "./components/forYou/SiteMap";
import ViewOrder from "./components/viewOrder";
import MyOrders from "./components/myOrders";
import ConfirmedBooking from "./components/confirmedBooking";
import ReservationTracking from "./components/reservationTracking";

import Test from './Test/Test'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/authenticate" component={Authentication} />
          <Route exact path="/logout" component={Logout} />
          <AppLayout>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/security" component={Security} />
            <Route exact path="/sitemap" component={SiteMap} />
            <Route
              exact
              path="/restaurant/:restaurantId"
              component={Restaurant}
            />
            <Route exact path="/view-order/:orderId" component={ViewOrder} />
            <Route exact path="/my-orders" component={MyOrders} />
            <Route
              exact
              path="/booking/:orderId"
              component={ConfirmedBooking}
            />
            <Route
              exact
              path="/track-reservation/:orderId"
              component={ReservationTracking}
            />
            <Route path='/test' component={Test} />
          </AppLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
