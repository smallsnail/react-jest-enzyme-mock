import React from "react";
import { shallow } from "enzyme";

// 引入被测试组件
import Table from "../components/table";

// case1 测试组件是否正常渲染
// 通过查找存在 input 和 button,测试组件正常渲染
describe("TableView", () => {
  it("Table Component should be render", () => {
    const wrapper = shallow(<Table />);
    expect(wrapper.find('table').exists());

    // expect(wrapper.find("div").exists()).toBeTruthy();
  });
});

