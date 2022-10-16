import React from "react";
import Highcharts, { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";

const chartOptions = {
  chart: {
    type: "bar",
  },
  credits: { enabled: false },
  title: {
    text: "Graph Data",
  },
  xAxis: {
    categories: ["Cat1", "Cat2"],
  },
  yAxis: {
    title: {
      text: "Text under the graph",
    },
  },
  series: [
    {
      name: "Person1",
      data: [1, 0, 4],
    },
    {
      name: "Person2",
      data: [5, 7, 3],
    },
  ],
};

function Graph() {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions as Options}
      />
    </div>
  );
}

export default Graph;
