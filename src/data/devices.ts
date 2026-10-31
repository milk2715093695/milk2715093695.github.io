import type { DeviceItem } from "@/types/devicesConfig";

/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/devicesConfig.ts 控制。
 */
export const devicesData: DeviceItem[] = [
	{
		id: "oneplus-ace-5-ultra",
		name: "OnePlus Ace 5 Ultra",
		brand: "OnePlus",
		category: "mobile",
		status: "active",
		specs: "天玑 9400+ / 16GB + 512GB",
		specDetails: [
			{ key: "soc", label: "处理器", value: "MediaTek 天玑 9400+" },
			{ key: "memory", label: "内存", value: "16GB + 512GB" },
			{ key: "display", label: "屏幕", value: "6.83 英寸 1.5K 144Hz" },
			{ key: "os", label: "系统", value: "ColorOS 15（Android 15）" },
		],
		description: "主力机，日常使用与移动开发调试。",
		image: "/images/device/oneplus-ace-5-ultra.webp",
		link: "https://www.oneplus.com/cn/ace-5-ultra-specs",
		featured: true,
	},
	{
		id: "xiaomi-pad-5",
		name: "Xiaomi Pad 5",
		brand: "Xiaomi",
		category: "tablet",
		status: "backup",
		specs: "骁龙 860 / 6GB + 128GB",
		specDetails: [
			{ key: "soc", label: "处理器", value: "Qualcomm 骁龙 860" },
			{ key: "memory", label: "内存", value: "6GB + 128GB" },
			{ key: "display", label: "屏幕", value: "11 英寸 2.5K 120Hz" },
			{ key: "os", label: "系统", value: "LineageOS 23（Android 16）" },
		],
		description: "调试与备用平板，用来测试 Android 环境和阅读。",
		icon: "material-symbols:tablet-android",
		link: "https://www.mi.com/xiaomi-pad-5",
		featured: false,
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
