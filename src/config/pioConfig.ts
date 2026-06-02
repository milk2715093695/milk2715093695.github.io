import type { PioConfig } from "../types/config";

// Pio 看板娘配置
export const pioConfig: PioConfig = {
	enable: true, // 启用看板娘
	models: ["/pio/models/NOIR/noir.model3.json"], // 默认模型路径
	position: "left", // 模型位置
	width: 280, // 默认宽度
	height: 250, // 默认高度
	mode: "draggable", // 默认为可拖拽模式
	hiddenOnMobile: true, // 默认在移动设备上隐藏
	hideAboutMenu: false, // 隐藏内置 About 菜单按钮
	dialog: {
		welcome: "欢迎！这里是 Milk 的个人博客。", // 欢迎词
		touch: [
			"hmm，今天要做什么呢？",
			"戳太多次了啦 QWQ",
			"今天心情不错哦~",
			"怎么啦？",
		], // 触摸提示
		home: "戳这里可以回到首页哦~", // 首页提示
		skin: ["想要换装吗？", "换装需要消耗一些能量哦~"], // 换装提示
		close: "再见~", // 关闭提示
		link: "https://github.com/LyraVoid/Mizuki", // 关于链接
	},
	tips: {
		welcomeMessage: [
			"欢迎来到 Milk 的博客！",
			"今天想看点什么呢？",
		],
		messages: [
			"2、3、5、...、13、17",
			"数质数吧，质数是谁也无法分割的数字",
		],
		duration: 4000,
		interval: 6000,
	},
};
