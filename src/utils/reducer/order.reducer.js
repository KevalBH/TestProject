import ACTIONS from "../actions/order.action";

const OrderReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CUSTOMER:
      return { ...state, customer: action.payload };

    case ACTIONS.RESTAURANT:
      return { ...state, restaurant: action.payload };

    case ACTIONS.ADDTOCART:
      return {
        ...state,
        items: [
          ...state.items,
          {
            item: action.payload.id,
            itemName: action.payload.itemName,
            itemImage: action.payload.itemImage,
            quantity: action.payload.quantity,
            customer: [
              {
                customerId: action.payload.user,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.itemPrice,
              },
            ],
            estimatedTime: action.payload.estimatedTime.split(" ")[0],
            note: action.payload.note,
            totalPrice: {
              itemPrice: action.payload.itemPrice,
              addonPrice: action.payload.addonPrice,
              total: action.payload.itemPrice + action.payload.addonPrice,
            },
            price: action.payload.itemPrice,
          },
        ],
      };

    case ACTIONS.ADDITEM:
      let addedItems = state.items.map((item) => {
        if (item.item === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            customer: item.customer.map(
              (customer) =>
                customer.customerId === action.payload.user && {
                  ...customer,
                  quantity: customer.quantity + 1,
                  totalPrice:
                    (customer.quantity + 1) * item.totalPrice.itemPrice,
                }
            ),
            totalPrice: {
              ...item.totalPrice,
              total: (item.quantity + 1) * item.totalPrice.itemPrice,
            },
            addon: action.payload.addon,
          };
        }
        return item;
      });
      return { ...state, items: addedItems };

    case ACTIONS.ADDON:
      let addedItemWithAddon = state.items.map((item) => {
        if (item.item.id === action.payload.id) {
          return {
            ...item,
            addon: action.payload.addon,
          };
        }
        return item;
      });
      return { ...state, items: addedItemWithAddon };

    case ACTIONS.REMOVEITEMBYONE:
      let removedItems = state.items
        .map((item) => {
          if (item.item === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
      return { ...state, items: removedItems };

    case ACTIONS.ORDERTYPE:
      return { ...state, orderType: action.payload };

    case ACTIONS.EVENT:
      return { ...state, event: action.payload };

    case ACTIONS.RESERVATIONTYPE:
      return { ...state, reservationType: action.payload };

    case ACTIONS.VISITORS:
      return {
        ...state,
        visitors: {
          adult: action.payload.adults,
          children: action.payload.kids,
        },
      };

    case ACTIONS.DELIVERYTIME:
      return { ...state, deliveryTime: action.payload };

    case ACTIONS.TABLE:
      return { ...state, table: [...state.table, action.payload] };

    case ACTIONS.GUESTS:
      return { ...state, guests: [...state.guests, action.payload] };

    case ACTIONS.TIP:
      return { ...state, price: { ...state.price, tip: action.payload } };

    case ACTIONS.ESTIMATEDTIME:
      return { ...state, estimatedTime: action.payload };

    case ACTIONS.PRICE:
      return {
        ...state,
        price: {
          ...state.price,
          subtotal: action.payload.subTotal,
          tax: action.payload.tax,
          points: action.payload.points,
          total: action.payload.total,
        },
      };

    case ACTIONS.ORDERNO:
      return { ...state, orderNo: action.payload };

    default:
      return state;
  }
};

export default OrderReducer;
