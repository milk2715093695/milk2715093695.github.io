import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "D大调卡农",
		artist: "Johann Pachelbel",
		cover: "assets/music/cover/D大调卡农.webp",
		url: "assets/music/url/D大调卡农.m4a",
		duration: 0,
	},
	{
		id: 2,
		title: "Minecraft",
		artist: "C418",
		cover: "assets/music/cover/MC.webp",
		url: "assets/music/url/Minecraft.m4a",
		duration: 0,
	},
	{
		id: 3,
		title: "回家",
		artist: "Kenny G",
		cover: "assets/music/cover/sax.webp",
		url: "assets/music/url/回家.m4a",
		duration: 0,
	},
	{
		id: 4,
		title: "落樱谷",
		artist: "路灰气球z",
		cover: "assets/music/cover/落樱谷.webp",
		url: "assets/music/url/落樱谷.m4a",
		duration: 0,
	},
];

export const DEFAULT_SONG: Song = {
	title: "D大调卡农",
	artist: "Johann Pachelbel",
	cover: "assets/music/cover/D大调卡农.webp",
	url: "assets/music/url/D大调卡农.m4a",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
