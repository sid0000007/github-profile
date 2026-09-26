import { HeatmapChart } from 'echarts/charts';
import { CalendarComponent, TooltipComponent, VisualMapComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([HeatmapChart, CalendarComponent, TooltipComponent, VisualMapComponent, CanvasRenderer]);

export { echarts };
