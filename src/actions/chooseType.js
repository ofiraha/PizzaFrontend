import {CHOOSE_TYPE} from "../helpers/constants";

const chooseType = (pizza = {}) => {
  return {
    pizzaType: pizza,
    type: CHOOSE_TYPE
  }
}

export default chooseType
