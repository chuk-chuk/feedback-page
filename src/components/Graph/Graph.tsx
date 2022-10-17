import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getChartOptions } from "./Graph.config";

function Graph({ graphData }: { graphData: number[] }) {
  const chartOptions = getChartOptions(graphData);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}

export default Graph;
