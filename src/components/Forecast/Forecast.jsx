import React from "react";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from "victory";

const Forecast = (props) => {
  const weatherForChart = props.forecastInfo;

  const chartData = weatherForChart.map((item) => {
    return {
      x: `${item.hour.toString().padStart(2, "0")}:00`,
      y: item.forecastTemp,
    };
  });
  console.log(chartData);
  return (
    <div>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis
          dependentAxis
          label="Temperature ℃"
          style={{
            axisLabel: { padding: 30 },
          }}
        />
        <VictoryAxis
          label="Time"
          style={{
            axisLabel: { padding: 30 },
            tickLabels: { padding: 10 },
          }}
        />
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
            labels: { padding: 15 },
          }}
          data={chartData}
          labels={({ datum }) => datum.y}
        />
      </VictoryChart>
    </div>
  );
};

export default Forecast;
