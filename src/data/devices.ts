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
		specs: "Gray / 16G + 512GB",
		description: "None",
		image: "/images/device/oneplus-ace-5-ultra.webp",
		link: "https://www.oneplus.com/cn/ace-5-ultra",
		featured: true,
	},
	{
		id: "gl-mt3000",
		name: "GL-MT3000",
		brand: "GL.iNet",
		category: "network",
		status: "active",
		specs: "1000Mbps / 2.5G",
		description:
			"Portable WiFi 6 router suitable for business trips and home use.",
		image: "/images/device/mt3000.webp",
		link: "https://www.gl-inet.cn/products/gl-mt3000/",
		featured: true,
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
