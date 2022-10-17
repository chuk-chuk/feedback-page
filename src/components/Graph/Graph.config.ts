export const getChartOptions = (series: number[]) => {
  return {
    chart: {
      type: "column",
    },
    credits: { enabled: false },
    accessibility: { enabled: false },
    title: {
      text: "",
    },
    subtitle: {
      text: "Graph",
    },
    xAxis: {
      categories: [
        "⭐️",
        "⭐️⭐️",
        "⭐️⭐️⭐️",
        "⭐️⭐️⭐️⭐️",
        "⭐️⭐️⭐️⭐️⭐️",
      ],
      crosshair: true,
    },
    yAxis: {
      title: {
        text: "Number of people",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: "</table>",
      useHTML: true,
    },
    series: [
      {
        name: "Number of reviews",
        data: series,
      },
    ],
  };
};
