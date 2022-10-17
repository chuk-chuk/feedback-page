import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getChartOptions } from "./Graph.config";

function Graph({
  graphData,
  categories,
}: {
  graphData: number[];
  categories: string[];
}) {
  const chartOptions = getChartOptions(graphData, categories);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}

export default Graph;
