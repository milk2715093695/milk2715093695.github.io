import Key from "../i18nKey";
import type { Translation } from "../translation";

export const ja: Translation = {
	[Key.home]: "ホーム",
	[Key.about]: "ブログテンプレートについて",
	[Key.archive]: "アーカイブ",
	[Key.search]: "検索",
	[Key.other]: "その他",

	// ナビゲーションバータイトル
	[Key.navLinks]: "リンク",
	[Key.navMy]: "私の",
	[Key.navAbout]: "について",
	[Key.navOthers]: "その他",

	[Key.tags]: "タグ",
	[Key.categories]: "カテゴリ",
	[Key.recentPosts]: "最近の投稿",
	[Key.postList]: "投稿リスト",
	[Key.tableOfContents]: "目次",
	[Key.tocEmpty]: "目次がありません",

	// お知らせ
	[Key.announcement]: "お知らせ",
	[Key.announcementClose]: "閉じる",

	[Key.comments]: "コメント",
	[Key.friends]: "友達",
	[Key.friendsSubtitle]: "より優れたウェブサイトを見つける",
	[Key.friendsSearchPlaceholder]: "友達の名前または説明を検索...",
	[Key.friendsFilterAll]: "すべて",
	[Key.friendsNoResults]: "一致する友達が見つかりません",
	[Key.friendsVisit]: "訪問",
	[Key.friendsCopyLink]: "リンクをコピー",
	[Key.friendsCopySuccess]: "コピー済み",
	[Key.friendsTags]: "タグ",
	[Key.untitled]: "無題",
	[Key.uncategorized]: "未分類",
	[Key.noTags]: "タグはありません",

	[Key.wordCount]: "語",
	[Key.wordsCount]: "語",
	[Key.minuteCount]: "分",
	[Key.minutesCount]: "分",
	[Key.postCount]: "投稿",
	[Key.postsCount]: "投稿",

	[Key.themeColor]: "テーマカラー",

	[Key.lightMode]: "ライト",
	[Key.darkMode]: "ダーク",
	[Key.systemMode]: "システム",

	[Key.more]: "もっと",

	[Key.author]: "著者",
	[Key.publishedAt]: "公開日",
	[Key.license]: "ライセンス",
	[Key.anime]: "アニメ",
	[Key.diary]: "日記",

	// デバイスページ
	[Key.devices]: "私のデバイス",
	[Key.devicesSubtitle]: "ここに私の日常で使用するデバイスを表示します",
	[Key.devicesViewDetails]: "詳細を見る",

	// アニメページ
	[Key.animeTitle]: "私のアニメリスト",
	[Key.animeSubtitle]: "私の二次元の旅を記録する",
	[Key.animeStatusWatching]: "視聴中",
	[Key.animeStatusCompleted]: "完了",
	[Key.animeStatusPlanned]: "予定",
	[Key.animeStatusOnHold]: "一時停止",
	[Key.animeStatusDropped]: "中断",
	[Key.animeFilterAll]: "すべて",
	[Key.animeYear]: "年",
	[Key.animeStudio]: "スタジオ",
	[Key.animeEmpty]: "アニメデータなし",
	[Key.animeEmptyBangumi]:
		"Bangumiの構成またはネットワークの接続を確認してください",
	[Key.animeEmptyBilibili]:
		"Bilibiliの構成またはネットワークの接続を確認してください",
	[Key.animeEmptyLocal]:
		"src/data/anime.tsファイルにアニメの情報を追加してください",
	[Key.animeConfigBilibili]:
		"src/config/siteConfig.tsファイルにBilibiliのvmidを設定してください",
	[Key.animeConfigBangumi]:
		"src/config/siteConfig.tsファイルにBangumiのユーザーIDを設定してください",

	// 日記ページ
	[Key.diarySubtitle]: "いつでも、どこでも生活を共有",
	[Key.diaryNoResults]: "一致するモーメントはありません",
	[Key.diaryCount]: "件の日記のエントリー",

	[Key.diaryTips]: "最新の30件の日記のエントリーのみを表示",
	[Key.diaryMinutesAgo]: "分前",
	[Key.diaryHoursAgo]: "時間前",
	[Key.diaryDaysAgo]: "日前",

	// 404ページ
	[Key.notFound]: "404",
	[Key.notFoundTitle]: "ページが見つかりません",
	[Key.notFoundDescription]:
		"申し訳ありませんが、アクセスしたページは存在しないか、移動されています。",
	[Key.backToHome]: "ホームに戻る",

	// 音楽プレーヤー
	[Key.musicPlayer]: "音楽プレーヤー",
	[Key.musicPlayerShow]: "音楽プレーヤーを表示",
	[Key.musicPlayerHide]: "音楽プレーヤーを非表示",
	[Key.musicPlayerExpand]: "音楽プレーヤーを展開",
	[Key.musicPlayerCollapse]: "プレーヤーを折りたたむ",
	[Key.musicPlayerPause]: "一時停止",
	[Key.musicPlayerPlay]: "再生",
	[Key.musicPlayerPrevious]: "前の曲",
	[Key.musicPlayerNext]: "次の曲",
	[Key.musicPlayerShuffle]: "シャッフル",
	[Key.musicPlayerRepeat]: "リピート",
	[Key.musicPlayerRepeatOne]: "1曲のみリピート",
	[Key.musicPlayerVolume]: "音量のコントロール",
	[Key.musicPlayerProgress]: "再生状況",
	[Key.musicPlayerCover]: "カバー",
	[Key.musicPlayerPlaylist]: "プレイリスト",
	[Key.musicPlayerLoading]: "読み込み中...",
	[Key.musicPlayerErrorPlaylist]: "プレイリストの取得に失敗しました",
	[Key.musicPlayerErrorSong]:
		"現在の曲の読み込みに失敗しました、次の曲を試しています",
	[Key.musicPlayerErrorEmpty]: "プレイリストに利用可能な曲がありません",
	[Key.unknownSong]: "未知の曲",
	[Key.unknownArtist]: "未知のアーティスト",

	// アルバムページ
	[Key.albums]: "アルバム",
	[Key.albumsSubtitle]: "人生の美しい瞬間の記録です",
	[Key.albumsEmpty]: "コンテンツはありません",
	[Key.albumsEmptyDesc]:
		"アルバムがまだ作成されていません。美しい思い出を追加してください！",
	[Key.albumsBackToList]: "アルバムに戻る",
	[Key.albumsPhotoCount]: "件の写真",
	[Key.albumsPhotosCount]: "件の写真",
	[Key.albumsFilterAll]: "すべて",
	[Key.albumsNoResults]: "一致するアルバムはありません",

	// プロジェクトページ
	[Key.projects]: "プロジェクト",
	[Key.projectsSubtitle]: "私の開発プロジェクトポートフォリオ",
	[Key.projectsAll]: "すべて",
	[Key.projectsWeb]: "ウェブアプリケーション",
	[Key.projectsMobile]: "モバイルアプリケーション",
	[Key.projectsDesktop]: "デスクトップアプリケーション",
	[Key.projectsOther]: "その他",
	[Key.projectTechStack]: "技術スタック",
	[Key.projectLiveDemo]: "ライブデモ",
	[Key.projectSourceCode]: "ソースコード",
	[Key.projectDescription]: "プロジェクト説明",
	[Key.projectStatus]: "ステータス",
	[Key.projectStatusCompleted]: "完了",
	[Key.projectStatusInProgress]: "進行中",
	[Key.projectStatusPlanned]: "予定",
	[Key.projectsTotal]: "プロジェクト合計",
	[Key.projectsCompleted]: "完了",
	[Key.projectsInProgress]: "進行中",
	[Key.projectsTechStack]: "技術スタック統計",
	[Key.projectsFeatured]: "注目プロジェクト",
	[Key.projectsPlanned]: "予定",
	[Key.projectsDemo]: "ライブデモ",
	[Key.projectsSource]: "ソースコード",
	[Key.projectsVisit]: "プロジェクトへ",
	[Key.projectsGitHub]: "GitHub",
	// [Key.projectsGitee]: "Gitee",  // Giteeサポートを削除

	// RSSページ
	[Key.rss]: "RSSフィード",
	[Key.rssDescription]: "最新の更新を購読する",
	[Key.rssSubtitle]: "RSSで購読して、最新の記事と更新を第一时间で取得する",
	[Key.rssLink]: "RSSリンク",
	[Key.rssCopyToReader]: "RSSリンクをリーダーにコピー",
	[Key.rssCopyLink]: "リンクをコピー",
	[Key.rssLatestPosts]: "最新の投稿",
	[Key.rssWhatIsRSS]: "RSSとは？",
	[Key.rssWhatIsRSSDescription]:
		"RSS（Really Simple Syndication）は、頻繁に更新されるコンテンツを公開するための標準形式です。RSSを使用すると：",
	[Key.rssBenefit1]:
		"手動で訪問することなく、最新のウェブサイトコンテンツを及时に取得",
	[Key.rssBenefit2]: "1か所で複数のウェブサイトの購読を管理",
	[Key.rssBenefit3]: "重要な更新や記事を見逃すことを回避",
	[Key.rssBenefit4]: "広告なしのクリーンな読書体験を楽しむ",
	[Key.rssHowToUse]:
		"このサイトの購読はFeedly、Inoreaderまたはその他のRSSリーダーの使用をおすすめします。",
	[Key.rssCopied]: "RSSのリンクをクリップボードにコピーしました!",
	[Key.rssCopyFailed]: "コピーに失敗しました。リンクを手動で追加してください。",

	// Atomページ
	[Key.atom]: "Atomフィード",
	[Key.atomDescription]: "最新の更新を購読する",
	[Key.atomSubtitle]: "Atomで購読して、最新の記事と更新を第一时间で取得する",
	[Key.atomLink]: "Atomリンク",
	[Key.atomCopyToReader]: "Atomリンクをリーダーにコピー",
	[Key.atomCopyLink]: "リンクをコピー",
	[Key.atomLatestPosts]: "最新の投稿",
	[Key.atomWhatIsAtom]: "Atomとは？",
	[Key.atomWhatIsAtomDescription]:
		"Atom連合フォーマット（Atom Syndication Format）は、フィードとそのアイテムを記述するためのXMLベースの標準です。Atomを使用すると：",
	[Key.atomBenefit1]:
		"手動で訪問することなく、最新のウェブサイトコンテンツを及时に取得",
	[Key.atomBenefit2]: "1か所で複数のウェブサイトの購読を管理",
	[Key.atomBenefit3]: "重要な更新や記事を見逃すことを回避",
	[Key.atomBenefit4]: "広告なしのクリーンな読書体験を楽しむ",
	[Key.atomHowToUse]:
		"Feedly、Inoreaderまたは他のAtomリーダーを使用してこのサイトを購読することを推奨します。",
	[Key.atomCopied]: "Atomリンクがクリップボードにコピーされました！",
	[Key.atomCopyFailed]:
		"コピーに失敗しました。リンクを手動で追加してください。",

	// 壁紙モード
	[Key.wallpaperBanner]: "バナーモード",
	[Key.wallpaperFullscreen]: "フルスクリーンモード",
	[Key.wallpaperNone]: "壁紙を非表示",

	// スキルページ
	[Key.skills]: "スキル",
	[Key.skillsSubtitle]: "私の技術スキルと専門知識",
	[Key.skillsFrontend]: "フロントエンド開発",
	[Key.skillsBackend]: "バックエンド開発",
	[Key.skillsDatabase]: "データベース",
	[Key.skillsTools]: "開発ツール",
	[Key.skillsOther]: "その他のスキル",
	[Key.skillLevel]: "熟練度",
	[Key.skillLevelBeginner]: "初心者",
	[Key.skillLevelIntermediate]: "中級者",
	[Key.skillLevelAdvanced]: "上級者",
	[Key.skillLevelExpert]: "エキスパート",
	[Key.skillExperience]: "経験",
	[Key.skillYears]: "年",
	[Key.skillMonths]: "ヶ月",
	[Key.skillsTotal]: "スキル合計",
	[Key.skillsExpert]: "エキスパートレベル",
	[Key.skillsAdvanced]: "上級者",
	[Key.skillsIntermediate]: "中級者",
	[Key.skillsBeginner]: "初心者",
	[Key.skillsAdvancedTitle]: "専門スキル",
	[Key.skillsProjects]: "関連プロジェクト",
	[Key.skillsDistribution]: "スキル分布",
	[Key.skillsByLevel]: "レベル別分布",
	[Key.skillsByCategory]: "カテゴリ別分布",

	// タイムラインページ
	[Key.timeline]: "タイムライン",
	[Key.timelineSubtitle]: "私の成長の旅と重要なマイルストーン",
	[Key.timelineEducation]: "教育",
	[Key.timelineWork]: "職歴",
	[Key.timelineProject]: "プロジェクト経験",
	[Key.timelineAchievement]: "実績",
	[Key.timelinePresent]: "現在",
	[Key.timelineLocation]: "場所",
	[Key.timelineDescription]: "詳細説明",
	[Key.timelineMonths]: "ヶ月",
	[Key.timelineYears]: "年",
	[Key.timelineTotal]: "合計",
	[Key.timelineProjects]: "プロジェクト",
	[Key.timelineExperience]: "職歴",
	[Key.timelineCurrent]: "現在の状態",
	[Key.timelineHistory]: "履歴",
	[Key.timelineAchievements]: "実績",
	[Key.timelineStartDate]: "開始日",
	[Key.timelineDuration]: "期間",

	// その他
	[Key.noData]: "データなし",

	// パスワード保護
	[Key.passwordProtected]: "パスワードで保護されています",
	[Key.passwordProtectedTitle]: "このコンテンツはパスワードで保護されています",
	[Key.passwordProtectedDescription]:
		"保護されたコンテンツを表示するにはパスワードを入力してください。",
	[Key.postEncrypted]: "暗号化済み",
	[Key.postEncryptedMessage]: "この記事は暗号化されています",
	[Key.passwordPlaceholder]: "パスワードを入力",
	[Key.passwordUnlock]: "ロック解除",
	[Key.passwordUnlocking]: "ロック解除中...",
	[Key.passwordIncorrect]: "パスワードが間違っています。再試行してください",
	[Key.passwordDecryptError]:
		"復号化に失敗しました。パスワードが正しいか確認してください",
	[Key.passwordRequired]: "パスワードを入力してください",
	[Key.passwordVerifying]: "検証中...",
	[Key.passwordDecryptFailed]:
		"復号に失敗しました。パスワードを確認してください。",
	[Key.passwordDecryptRetry]: "復号に失敗しました。再度お試しください。",
	[Key.passwordUnlockButton]: "ロックを解除",
	[Key.copyFailed]: "コピーに失敗しました:",
	[Key.syntaxHighlightFailed]: "構文の強調表示が失敗しました:",
	[Key.autoSyntaxHighlightFailed]: "自動構文強調表示が失敗しました:",
	[Key.decryptionError]: "復号中にエラーが発生しました:",
	[Key.passwordHint]: "ヒント",

	// 最終更新時間カード
	[Key.lastModifiedPrefix]: "最終編集からの時間：",
	[Key.lastModifiedOutdated]: "一部の情報は古くなっている可能性があります",
	[Key.year]: "年",
	[Key.month]: "月",
	[Key.day]: "日",
	[Key.hour]: "時間",
	[Key.minute]: "分",
	[Key.second]: "秒",

	// 統計情報
	[Key.siteStats]: "統計情報",
	[Key.siteStatsPostCount]: "投稿",
	[Key.siteStatsCategoryCount]: "カテゴリー",
	[Key.siteStatsTagCount]: "タグ",
	[Key.siteStatsTotalWords]: "文字数の合計",
	[Key.siteStatsRunningDays]: "稼働日数",
	[Key.siteStatsLastUpdate]: "最終更新",
	[Key.siteStatsDaysAgo]: "{days}日前",
	[Key.siteStatsDays]: "{days}日",

	// カレンダーコンポーネント
	[Key.calendarSunday]: "日",
	[Key.calendarMonday]: "月",
	[Key.calendarTuesday]: "火",
	[Key.calendarWednesday]: "水",
	[Key.calendarThursday]: "木",
	[Key.calendarFriday]: "金",
	[Key.calendarSaturday]: "土",
	[Key.calendarJanuary]: "1月",
	[Key.calendarFebruary]: "2月",
	[Key.calendarMarch]: "3月",
	[Key.calendarApril]: "4月",
	[Key.calendarMay]: "5月",
	[Key.calendarJune]: "6月",
	[Key.calendarJuly]: "7月",
	[Key.calendarAugust]: "8月",
	[Key.calendarSeptember]: "9月",
	[Key.calendarOctober]: "10月",
	[Key.calendarNovember]: "11月",
	[Key.calendarDecember]: "12月",

	// シェア機能
	[Key.shareArticle]: "シェア",
	[Key.generatingPoster]: "ポスターを生成中...",
	[Key.copied]: "コピーしました",
	[Key.copyLink]: "リンクをコピー",
	[Key.savePoster]: "ポスターを保存",
	[Key.scanToRead]: "出典元",
	[Key.shareOnSocial]: "共有",
	[Key.shareOnSocialDescription]:
		"この記事が役に立った場合は、ぜひ他の人とシェアしてください！",

	// プロフィール統計
	[Key.profileStatsLoading]: "統計情報を読み込み中...",
	[Key.profileStatsPageViews]: "ページビュー",
	[Key.profileStatsVisits]: "アクセス数",
	[Key.profileStatsUnavailable]: "統計情報は利用できません",

	// ページ閲覧の統計
	[Key.pageViewsLoading]: "統計を読み込み中...",
	[Key.pageViewsUnavailable]: "統計は利用できません",

	// レイアウト切り替えボタン
	[Key.switchToGridMode]: "グリッド表示に切り替え",
	[Key.switchToListMode]: "リスト表示に切り替え",

	// 関連した投稿とランダムな投稿
	[Key.relatedPosts]: "関連した投稿",
	[Key.randomPosts]: "ランダムな投稿",
	[Key.smartRecommend]: "スマート",
	[Key.randomRecommend]: "ランダム",
};
