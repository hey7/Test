import { request } from "@/utils";
import { message } from "antd";

export const changeState = (that,value) => {
  that.setState({
    selected: value
  })
  // that.props.$data.reload();
}

