
export interface Video {
	id: string;
	height: number;
	width: number;
	duration: number;
	ratio: string;
	cover: string;
	originCover: string;
	dynamicCover: string;
	playAddr: string;
	downloadAddr: string;
	shareCover: string[];
	reflowCover: string;
	bitrate: number;
	encodedType: string;
	format: string;
	videoQuality: string;
	encodeUserTag: string;
	codecType: string;
	definition: string;
}

export interface Author {
	id: string;
	uniqueId: string;
	nickname: string;
	avatarThumb: string;
	avatarMedium: string;
	avatarLarger: string;
	signature: string;
	verified: boolean;
	secUid: string;
	secret: boolean;
	ftc: boolean;
	relation: number;
	openFavorite: boolean;
	commentSetting: number;
	duetSetting: number;
	stitchSetting: number;
	privateAccount: boolean;
}

export interface Music {
	id: string;
	title: string;
	playUrl: string;
	coverThumb: string;
	coverMedium: string;
	coverLarge: string;
	authorName: string;
	original: boolean;
	duration: number;
	album: string;
}

export interface Stats {
	diggCount: number;
	shareCount: number;
	commentCount: number;
	playCount: number;
}

export interface DuetInfo {
	duetFromId: string;
}

export interface EffectSticker {
	name: string;
	ID: string;
}

export interface AuthorStats {
	followingCount: number;
	followerCount: number;
	heartCount: number;
	videoCount: number;
	diggCount: number;
	heart: number;
}

export interface iUserFeed {
	id: string;
	desc: string;
	createTime: number;
	video: Video;
	author: Author;
	music: Music;
	stats: Stats;
	duetInfo: DuetInfo;
	originalItem: boolean;
	officalItem: boolean;
	secret: boolean;
	forFriend: boolean;
	digged: boolean;
	itemCommentStatus: number;
	showNotPass: boolean;
	vl1: boolean;
	itemMute: boolean;
	effectStickers: EffectSticker[];
	authorStats: AuthorStats;
	privateItem: boolean;
	duetEnabled: boolean;
	stitchEnabled: boolean;
	shareEnabled: boolean;
	isAd: boolean;
	duetDisplay: number;
	stitchDisplay: number;
}

export interface iUserFeedSignal {
	killed: boolean;
	code: number;
	signal?: any;
	cmd: string;
}

export interface User {
	id: string;
	shortId: string;
	uniqueId: string;
	nickname: string;
	avatarLarger: string;
	avatarMedium: string;
	avatarThumb: string;
	signature: string;
	createTime: number;
	verified: boolean;
	secUid: string;
	ftc: boolean;
	relation: number;
	openFavorite: boolean;
	commentSetting: number;
	duetSetting: number;
	stitchSetting: number;
	privateAccount: boolean;
	secret: boolean;
	isADVirtual: boolean;
	roomId: string;
}

export interface Stats {
	followerCount: number;
	followingCount: number;
	heart: number;
	heartCount: number;
	videoCount: number;
	diggCount: number;
}

export interface iUser {
	user: User;
	stats: Stats;
	itemList: any[];
}
