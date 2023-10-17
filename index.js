import { renderChart } from "./chart.js";
import { getReadings, groupByDay, sortByTime, getConsumption } from "./reading";

const readings = await getReadings();
renderChart(sortByTime(groupByDay(readings)).slice(-30));
document.getElementById('consumption').innerHTML=`$ ${getConsumption(readings, 30)}`