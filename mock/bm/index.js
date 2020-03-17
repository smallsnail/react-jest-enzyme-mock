var Mock = require("mockjs")
var express = require("express")
var router = express.Router();

router.use("/get_staff_kpi_list",function (req,res) {
  //调用mock方法模拟数据
  var data = Mock.mock({
      'list|1-10': [
        {
          'qq_number|+1':"1302507089",
          'operator_name': "test",
          'wechat_number': "zixue0505",
          'year|+1': 2019
        }
      ],
      config:{
        page: 1,
        page_size: 10,
        total_num: 4,
        total_page: 1
      }
    }
  );
  return res.json(data);
})
router.use("/get_kpi_list",function (req,res) {
  //调用mock方法模拟数据
  var data = Mock.mock({
      'list|1-10': [
        {
          'id+1': 10000013,
          'period': "2020Q1",
          'total_cost_kpi+1': 213213,
          'created_time': 1578381025,
          'new_advertiser_num+1': 213123
        }
      ]
    }
  );
  return res.json(data);
})

module.exports = router;