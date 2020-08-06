/**
 * @author: zxs
 * @date: 2020/7/14
 */
import {Button} from "antd-mobile";
import React from "react";
import {withRouter} from "react-router-dom";
import {NavigationBar} from "../component/navigationBar";
import fetchService from "../../service/fetchService";
import {url_json} from "./requestUrl";

const HttpMain = () => {


  const fetch_json = async () => {
    await fetchService.post(url_json);
  };

  return (
    <div>
      <NavigationBar/>
      <Button onClick={fetch_json}>fetch_json</Button>
    </div>
  )
};

export const Http = withRouter(HttpMain);
