import React, { FC, useEffect, useRef } from "react";
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import {
	BarChart,
	PieChart
} from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
	TitleComponent,
	TooltipComponent,
	GridComponent
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {
	CanvasRenderer
} from 'echarts/renderers';

// 注册必须的组件
echarts.use(
	[TitleComponent, TooltipComponent, GridComponent, BarChart, PieChart, CanvasRenderer]
);

interface IProps {
	width?: string
	height?: string
	option: any
}

const Echarts: FC<IProps> = ({ width, height, option }) => {

	const chart = useRef(null);

	useEffect(() => {
		let myChart = echarts.init(chart.current as unknown as HTMLElement);
		myChart.setOption(option);
	}, []);


	return (
		<div ref={chart} style={{ width: width ?? '100%', height: height ?? '300px' }} />
	);
};

export default Echarts;