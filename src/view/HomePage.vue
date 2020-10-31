<template>
  <div class="home">
    <div class="center">
      <a-card title="管理中心" style="width: 100%; height: 100%">
        <div class="list">
          <div class="centerData" v-for="item in centerData.data" :key="item">
            <div class="img"><img src="" alt="" /></div>
            <p>{{ item.des }}</p>
            <p class="count">{{ item.count }}</p>
          </div>
        </div>
      </a-card>
    </div>
    <div class="card">
      <a-card title="访问浏览量 pv" style="width: 48%">
        <template v-slot:extra><a href="#">统计日期: 2020-8-30</a></template>
        <div class="textContent">
          昨日<span>1000</span> 前日<span>200</span> 浮动<span
            >500% &#8593;</span
          >
        </div>

        <div ref="chart" style="width: 96%; height: 30vh" id="haha"></div>
      </a-card>

      <a-card title="活跃用户数 uv" style="width: 48%">
        <template v-slot:extra><a href="#">统计日期: 2020-8-30</a></template>
        <div class="textContent">
          昨日<span>1000</span> 前日<span>200</span> 浮动<span
            >500% &#8593;</span
          >
        </div>

        <div ref="chart2" style="width: 96%; height: 30vh" id="haha2"></div>
      </a-card>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
let echarts2 = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
import { ref, onMounted, reactive } from "vue";
export default {
  name: "homePage",
  setup() {
    //管理中心的数据
    let centerData = reactive({
      data: [
        {
          image: "",
          des: "新增商品",
          count: 6,
        },
        {
          image: "",
          des: "新增求购",
          count: 6,
        },
        {
          image: "",
          des: "商家入驻申请",
          count: 6,
        },
        {
          image: "",
          des: "新增用户",
          count: 6,
        },
      ],
    });
    onMounted(() => {
      initChart();
    });
    function initChart() {
      let myChart1 = echarts.init(document.getElementById("haha"));
      let myChart2 = echarts.init(document.getElementById("haha2"));
      myChart1.setOption(setOption("浏览量"));
      myChart2.setOption(setOption("用户数"));
    }
    function setOption(title) {
      let option = {
        color: ["#ffb515", "#32acf8", "#bb5edf"],
        title: { text: title },
        tooltip: {
          trigger: "axis",
          padding: [10, 20],
          backgroundColor: "rgba(255,255,255,0.9)", //通过设置rgba调节背景颜色与透明度
          color: "#0f0f0f",
          textStyle: {
            color: "black",
          },
          axisPointer: {
            type: "line",
            label: {
              backgroundColor: "#6a7985",
            },
          },

          formatter: function (params, ticket, callback) {
            var htmlStr = "<div style='margin-top:10%'>";
            params.forEach((v, i) => {
              htmlStr += "<p>";
              htmlStr +=
                v.marker +
                "<span style='display:inline-block;width:60px;font-size:14px;margin-left:10px;text-align: left;'>" +
                title +
                "</span>";
              htmlStr +=
                "<span style='display:inline-block;width:40px;font-size:18px;color:#0675eb;margin-left:20px;margin-right:6px;text-align: right;'>" +
                v.value +
                "</span>";
              htmlStr += "</p>";
            });
            htmlStr += "</div>";
            return htmlStr;
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#e8e8e8",
              fontSize: "12px",
            },
          },
          axisLabel: {
            show: true,
            color: "#666666",
          },
          splitLine: {
            show: false,
          },
          data: ["10.1", "10.2", "10.3", "10.4", "10.5", "10.6", "10.7"],
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false,
            lineStyle: {
              color: "#e8e8e8",
              fontSize: "12px",
            },
          },
          axisLabel: {
            show: true,
            color: "#666666",
          },
          splitLine: {
            show: true,
          },
        },
        series: [
          {
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "#32acf8",
                lineStyle: {
                  color: "#32acf8",
                  width: 1,
                },
                areaStyle: {},
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(88,171,239,0.4)",
                    },
                    {
                      offset: 1,
                      color: "rgba(88,171,239,0.4)",
                    },
                  ]),
                },
              },
            },
            data: [0, 932, 901, 934, 1290, 1330, 1500],
          },
        ],
      };
      return option;
    }

    return {
      initChart,
      setOption,
      centerData,
    };
  },
};
</script>

<style>
.center {
  margin: 20px 0px;
}
.centerData .img {
  width: 180px;
  height: 100px;
}
.list {
  display: flex;
  justify-content: space-around;
}
.list .centerData {
  /* width: 20%; */
  /* height: 100px; */
  background: #1890ff;
  text-align: center;
}
.card {
  display: flex;
  justify-content: space-between;
}

.textContent {
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
}
.textContent span {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 20%;
}
.textContent span:nth-child(3) {
  font-size: 16px;
  color: rgb(247, 12, 12);
  margin-right: 0px;
}
</style>
