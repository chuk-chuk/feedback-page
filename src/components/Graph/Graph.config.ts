const map: Record<string, string> = {
  "1": "⭐️",
  "2": "⭐️⭐️",
  "3": "⭐️⭐️⭐️",
  "4": "⭐️⭐️⭐️⭐️",
  "5": "⭐️⭐️⭐️⭐️⭐️",
};

export const getChartOptions = (series: number[], categories: string[]) => {
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
      text: "Review monitoring",
    },
    xAxis: {
      categories: categories.map((cat) => map[cat]),
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
