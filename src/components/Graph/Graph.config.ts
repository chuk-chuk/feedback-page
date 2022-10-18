import { starsMap } from "../../App.helpers";

export const getChartOptions = (series: number[], categories: string[]) => {
  return {
    chart: {
      type: "column",
      width: 250,
    },
    credits: { enabled: false },
    accessibility: { enabled: false },
    title: {
      text: "Review monitoring",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      categories: categories.map((cat) => starsMap[cat]),
      crosshair: true,
    },
    yAxis: {
      title: {
        text: "Number of people",
      },
      tickInterval: 1,
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
      footerFormat: "</table>",
      useHTML: true,
    },
    series: [
      {
        name: "Ratings",
        data: series,
      },
    ],
  };
};
