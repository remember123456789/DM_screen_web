import * as echarts from 'echarts/core';
import {
	ToolboxComponent,
	TooltipComponent,
	GridComponent,
	LegendComponent,
	VisualMapComponent,
	TitleComponent,
	DataZoomComponent
} from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import { RadarChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
	ToolboxComponent,
	TooltipComponent,
	GridComponent,
	LegendComponent,
	VisualMapComponent,
	BarChart,
	LineChart,
	DataZoomComponent,
	CanvasRenderer,
	RadarChart,
	UniversalTransition,
	TitleComponent
]);

export default echarts;
