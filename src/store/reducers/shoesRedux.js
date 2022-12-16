import data from "../../data/DataShoes.json";

const DEFAULT_STATE = {
  data,
  carts: [],
};

export const shoesReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_SHOES":
      {
        const data = [...state.carts];

        const idx = data.findIndex((element) => element.id === payload.id);

        if (idx === -1) {
          data.push({ ...payload, soLuong: 1 });
        } else {
          data[idx].soLuong += 1;
        }

        state.carts = data;
      }

      break;

    case "HANDLE_QUANTITY":
      {
        const { shoes, isIncrease } = payload;

        const data = [...state.carts];
        const idx = data.findIndex((element) => element.id === shoes.id);

        if (isIncrease) {
          data[idx].soLuong += 1;
        } else {
          if (data[idx].soLuong > 1) {
            data[idx].soLuong -= 1;
          } else if (window.confirm("Bạn có muốn xóa sản phẩm")) {
            data.splice(idx, 1);
          }
        }

        state.carts = data;
      }

      break;

    case "DELETE_SHOES":
      {
        const data = [...state.carts];

        const idx = data.findIndex((element) => element.id === payload.id);

        data.splice(idx, 1);

        state.carts = data;
      }

      break;

      case "GET_DESC":
        alert(payload.description)
        break;

    default:
      break;
  }

  return { ...state };
};
