import type { TrackDescriptor } from "@/types/musicConfig";

/**
 * 侧栏音乐本地曲目数据源。
 * 遵循「零额外负担」原则：配置与数据解耦，此处专用于管理本地曲目列表。
 */
export const musicTracks: readonly TrackDescriptor[] = [
	{
		id: "pachelbel-canon",
		title: "D大调卡农",
		artist: "Johann Pachelbel",
		cover: "/assets/music/cover/D大调卡农.webp",
		source: "/assets/music/url/D大调卡农.m4a",
		duration: 331,
	},
	{
		id: "c418-minecraft",
		title: "Minecraft",
		artist: "C418",
		cover: "/assets/music/cover/MC.webp",
		source: "/assets/music/url/Minecraft.m4a",
		duration: 254,
	},
	{
		id: "kenny-g-going-home",
		title: "回家",
		artist: "Kenny G",
		cover: "/assets/music/cover/sax.webp",
		source: "/assets/music/url/回家.m4a",
		duration: 284,
	},
	{
		id: "luohuisan-luoyinggu",
		title: "落樱谷",
		artist: "路灰气球z",
		cover: "/assets/music/cover/落樱谷.webp",
		source: "/assets/music/url/落樱谷.m4a",
		duration: 214,
	},
];
