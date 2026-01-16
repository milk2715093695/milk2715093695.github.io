// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: "OnePlus Ace 5 Ultra",
			image: "/images/device/oneplus-ace-5-ultra.webp",
			specs: "Gray / 16G + 512GB",
			description:
				"None",
			link: "https://www.oneplus.com/cn/ace-5-ultra",
		},
	],
};
