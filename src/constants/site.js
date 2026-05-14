import bedroomDoorImage from "@/assets/images/bedroom-door.jpg";
import bossLadyPortraitImage from "@/assets/images/boss-lady-portrait.png";
import bossPortraitImage from "@/assets/images/boss-portrait.png";
import craftsmanshipDoorImage from "@/assets/images/craftsmanship-door.jpg";
import contactMapImage from "@/assets/images/contact-map.png";
import entryDoorImage from "@/assets/images/entry-door.jpg";
import heroDoorImage from "@/assets/images/hero-door.jpg";
import partitionDoorImage from "@/assets/images/partition-door.jpg";
import showroomImage from "@/assets/images/showroom.jpg";
import slidingDoorImage from "@/assets/images/sliding-door.jpg";
import storefrontImage from "@/assets/images/storefront.jpg";
import tracklessDoorImage from "@/assets/images/trackless-door.jpg";
import trendBlackGlassSlidingDoorImage from "@/assets/images/trend-black-glass-sliding-door.png";
import trendFlutedGlassBathroomDoorImage from "@/assets/images/trend-fluted-glass-bathroom-door.png";
import trendHiddenFlushDoorImage from "@/assets/images/trend-hidden-flush-door.png";
import trendOakBedroomDoorImage from "@/assets/images/trend-oak-bedroom-door.png";
import trendSmartEntryDoorImage from "@/assets/images/trend-smart-entry-door.png";
import trendWarmWhiteDoorImage from "@/assets/images/trend-warm-white-door.png";
import wechatQrImage from "@/assets/images/wechat-qr.jpg";

export const SITE_INFO = {
  name: "益嘉门业",
  englishName: "YIJIA DOORS",
  slogan: "为每一个空间，选择更合适的门",
  description: "专注家装与工程门类展示、定制与安装服务。",
  heroTitle: "益嘉门业 - 为每一个空间，选择更合适的门",
  heroSubtitle: "以克制的设计、可靠的选品和细致的安装服务，为现代家庭打造更安静、更耐看的空间边界。"
};

export const CONTACT_INFO = {
  phone: "13387981151 / 13387988068",
  phoneHref: "tel:13387988068",
  phones: [
    { label: "13387981151", href: "tel:13387981151" },
    { label: "13387988068", href: "tel:13387988068" }
  ],
  wechat: "13387988068",
  address: "景德镇市乐平市大连路7号",
  businessHours: "周一至周日 08:00 - 21:00"
};

export const NAV_ITEMS = [
  { label: "首页", to: "/" },
  { label: "产品中心", to: "/products" },
  { label: "关于我们", to: "/about" },
  { label: "联系我们", to: "/contact" }
];

export const PRODUCT_CATEGORIES = [
  {
    id: "all",
    name: "全部",
    description: "查看益嘉门业精选产品。"
  },
  {
    id: "bedroom-door",
    name: "房门 / 卧室门",
    shortName: "房门",
    description: "适用于卧室、书房等室内空间，注重静音、质感与耐看度。"
  },
  {
    id: "hidden-door",
    name: "隐形门 / 门墙柜一体",
    shortName: "隐形门",
    description: "强调墙面整体感与空间秩序，适合极简、整装和高定家居场景。"
  },
  {
    id: "bathroom-door",
    name: "卫生间门",
    shortName: "卫生间门",
    description: "注重防潮、耐用与私密性，适配现代卫浴空间。"
  },
  {
    id: "kitchen-door",
    name: "厨房门",
    shortName: "厨房门",
    description: "兼顾采光与油烟隔离，让厨房保持通透和整洁。"
  },
  {
    id: "sliding-door",
    name: "推拉门",
    shortName: "推拉门",
    description: "节省空间，适合厨房、阳台、隔断等区域。"
  },
  {
    id: "trackless-sliding-door",
    name: "无轨推拉门",
    shortName: "无轨推拉门",
    description: "地面更简洁，适合现代极简空间和高频清洁场景。"
  },
  {
    id: "entry-door",
    name: "入户门 / 安全门",
    shortName: "入户门",
    description: "强调安全、稳定和第一眼的入户质感。"
  },
  {
    id: "partition-door",
    name: "阳台门 / 隔断门",
    shortName: "隔断门",
    description: "界定空间而不隔断光影，适合客餐厅、阳台和功能区。"
  }
];

export const IMAGE_ASSETS = {
  hero: heroDoorImage,
  bedroom: bedroomDoorImage,
  whiteDoor: bedroomDoorImage,
  sliding: slidingDoorImage,
  entry: entryDoorImage,
  partition: partitionDoorImage,
  trackless: tracklessDoorImage,
  contactMap: contactMapImage,
  craftsmanship: craftsmanshipDoorImage,
  showroom: showroomImage,
  store: storefrontImage,
  trendOakBedroom: trendOakBedroomDoorImage,
  trendWarmWhite: trendWarmWhiteDoorImage,
  trendBlackGlassSliding: trendBlackGlassSlidingDoorImage,
  trendFlutedBathroom: trendFlutedGlassBathroomDoorImage,
  trendHiddenFlush: trendHiddenFlushDoorImage,
  trendSmartEntry: trendSmartEntryDoorImage,
  bossPortrait: bossPortraitImage,
  bossLadyPortrait: bossLadyPortraitImage,
  wechatQr: wechatQrImage
};

export const OWNER_PROFILES = [
  {
    role: "主理人 / 老板",
    name: "益嘉门业负责人",
    phone: "13387981151",
    phoneHref: "tel:13387981151",
    image: IMAGE_ASSETS.bossPortrait,
    description: "负责门店产品选型、测量安装和售后跟进，把每一扇门落到真实空间里。"
  },
  {
    role: "门店顾问 / 老板娘",
    name: "益嘉门业顾问",
    phone: "13387988068",
    phoneHref: "tel:13387988068",
    image: IMAGE_ASSETS.bossLadyPortrait,
    description: "负责客户沟通、风格搭配和到店接待，让选门过程更清楚、更省心。"
  }
];

export const PRODUCTS = [
  {
    id: "trend-oak-minimal-bedroom-door",
    name: "原木极简平板门",
    categoryIds: ["bedroom-door"],
    categoryLabel: "房门 / 卧室门",
    images: [IMAGE_ASSETS.trendOakBedroom, IMAGE_ASSETS.bedroom, IMAGE_ASSETS.craftsmanship],
    summary: "自然木色、平板造型和黑色细把手，是当下年轻家庭偏爱的耐看型卧室门。",
    description:
      "顺应原木风、现代简约和整屋统一的装修趋势，以清爽木纹弱化装饰感，适合卧室、书房和儿童房等日常高频空间。",
    specs: [
      { label: "适用空间", value: "卧室 / 书房 / 儿童房" },
      { label: "流行方向", value: "原木风 / 现代极简 / 全屋统一" },
      { label: "功能特点", value: "耐看百搭 / 视觉温润 / 可搭静音结构" }
    ],
    tags: ["原木", "极简", "平板", "卧室"]
  },
  {
    id: "trend-warm-white-silent-door",
    name: "奶油白静音门",
    categoryIds: ["bedroom-door"],
    categoryLabel: "房门 / 卧室门",
    images: [IMAGE_ASSETS.trendWarmWhite, IMAGE_ASSETS.whiteDoor, IMAGE_ASSETS.craftsmanship],
    summary: "暖白饰面搭配轻法式线条，适合奶油风、现代轻奢和明亮型家装。",
    description:
      "暖白门款近年在家装中接受度高，能让空间更明亮柔和；搭配金属把手和细腻线条，兼顾质感与日常耐看。",
    specs: [
      { label: "适用空间", value: "卧室 / 客房 / 书房" },
      { label: "流行方向", value: "奶油风 / 轻法式 / 现代轻奢" },
      { label: "功能特点", value: "明亮柔和 / 易搭配 / 可做静音升级" }
    ],
    tags: ["奶油白", "静音", "轻法式", "百搭"]
  },
  {
    id: "trend-black-slim-glass-sliding-door",
    name: "黑框极窄玻璃推拉门",
    categoryIds: ["kitchen-door", "sliding-door"],
    categoryLabel: "厨房门 / 推拉门",
    images: [IMAGE_ASSETS.trendBlackGlassSliding, IMAGE_ASSETS.sliding, IMAGE_ASSETS.partition],
    summary: "黑色极窄边框和通透玻璃，是厨房、餐厅隔断里很受欢迎的现代款式。",
    description:
      "玻璃推拉门兼顾采光和油烟隔离，黑色窄边框视觉利落，适合开放式厨房、餐厨连接和小户型空间。",
    specs: [
      { label: "适用空间", value: "厨房 / 餐厅 / 阳台隔断" },
      { label: "流行方向", value: "极窄边框 / 黑框玻璃 / 通透隔断" },
      { label: "功能特点", value: "采光好 / 隔油烟 / 节省空间" }
    ],
    tags: ["黑框", "玻璃", "推拉", "厨房"]
  },
  {
    id: "trend-changhong-glass-bathroom-door",
    name: "长虹玻璃卫浴门",
    categoryIds: ["bathroom-door", "partition-door"],
    categoryLabel: "卫生间门 / 隔断门",
    images: [IMAGE_ASSETS.trendFlutedBathroom, IMAGE_ASSETS.partition, IMAGE_ASSETS.trackless],
    summary: "竖纹长虹玻璃既保留采光，又兼顾私密感，是卫浴和干湿分离的热门选择。",
    description:
      "长虹玻璃利用竖向纹理弱化视线穿透，让小空间更通透。香槟或暖灰边框能提升质感，适合卫生间、干区和玄关隔断。",
    specs: [
      { label: "适用空间", value: "卫生间 / 干湿分离 / 玄关" },
      { label: "流行方向", value: "长虹玻璃 / 透光不透影 / 轻奢金属" },
      { label: "功能特点", value: "防潮耐用 / 保留采光 / 私密友好" }
    ],
    tags: ["长虹玻璃", "卫浴", "防潮", "透光"]
  },
  {
    id: "trend-hidden-flush-wall-door",
    name: "门墙一体隐形门",
    categoryIds: ["hidden-door", "bedroom-door"],
    categoryLabel: "隐形门 / 门墙柜一体",
    images: [IMAGE_ASSETS.trendHiddenFlush, IMAGE_ASSETS.craftsmanship, IMAGE_ASSETS.showroom],
    summary: "让门和墙面融为一体，适合追求极简、整装和空间完整感的家庭。",
    description:
      "隐形门和门墙柜一体化是高定整装里的热门方向，能够弱化门洞存在感，保持背景墙、走廊和客厅立面的完整统一。",
    specs: [
      { label: "适用空间", value: "客厅背景墙 / 走廊 / 主卧套间" },
      { label: "流行方向", value: "隐形门 / 门墙柜一体 / 高定整装" },
      { label: "功能特点", value: "整体感强 / 极简立面 / 可定制饰面" }
    ],
    tags: ["隐形门", "门墙一体", "极简", "高定"]
  },
  {
    id: "trend-smart-armored-entry-door",
    name: "智能装甲入户门",
    categoryIds: ["entry-door"],
    categoryLabel: "入户门 / 安全门",
    images: [IMAGE_ASSETS.trendSmartEntry, IMAGE_ASSETS.entry, IMAGE_ASSETS.showroom],
    summary: "装甲门体搭配智能锁，兼顾安全感、入户质感和现代家庭的便利需求。",
    description:
      "智能锁、稳定门体和深色金属质感是改善型住宅入户门的常见选择，适合重视安全、防护和第一眼质感的家庭。",
    specs: [
      { label: "适用空间", value: "住宅入户 / 改善型装修 / 别墅入户" },
      { label: "流行方向", value: "智能锁 / 装甲安全 / 深色金属质感" },
      { label: "功能特点", value: "安全防护 / 指纹密码 / 质感入户" }
    ],
    tags: ["智能", "装甲", "入户", "安全"]
  },
  {
    id: "modern-bedroom-door",
    name: "现代极简实木门",
    categoryIds: ["bedroom-door"],
    categoryLabel: "房门 / 卧室门",
    images: [IMAGE_ASSETS.bedroom, IMAGE_ASSETS.whiteDoor, IMAGE_ASSETS.craftsmanship],
    summary: "意式极简设计，原木质感与现代工艺融合，适合卧室、书房等安静空间。",
    description:
      "精选稳定木作结构，搭配克制线条与细腻饰面，让门体融入现代家装空间。适合追求静音、耐看和整屋统一感的家庭。",
    specs: [
      { label: "适用空间", value: "卧室 / 书房 / 儿童房" },
      { label: "设计风格", value: "现代极简 / 原木风 / 奶油风" },
      { label: "功能特点", value: "静音闭合 / 稳定耐用 / 可定制饰面" }
    ],
    tags: ["现代", "极简", "静音", "卧室"]
  },
  {
    id: "white-silent-door",
    name: "雅致白系列静音门",
    categoryIds: ["bedroom-door"],
    categoryLabel: "房门 / 卧室门",
    images: [IMAGE_ASSETS.whiteDoor, IMAGE_ASSETS.bedroom, IMAGE_ASSETS.craftsmanship],
    summary: "清爽白色饰面搭配静音结构，为卧室空间带来安静、干净的视觉感受。",
    description:
      "以浅色饰面和简洁线条为核心，适配现代、奶油、轻法式等家装风格。适合希望空间更明亮、更安静的用户。",
    specs: [
      { label: "适用空间", value: "卧室 / 客房 / 书房" },
      { label: "设计风格", value: "奶油风 / 现代简约 / 轻法式" },
      { label: "功能特点", value: "静音结构 / 柔和饰面 / 易搭配" }
    ],
    tags: ["白色", "静音", "卧室", "耐看"]
  },
  {
    id: "phantom-black-sliding-door",
    name: "幻影黑窄边框玻璃门",
    categoryIds: ["kitchen-door", "sliding-door"],
    categoryLabel: "厨房门 / 推拉门",
    images: [IMAGE_ASSETS.sliding, IMAGE_ASSETS.partition, IMAGE_ASSETS.trackless],
    summary: "极窄黑色边框搭配通透玻璃，适合厨房与餐厅之间的采光隔断。",
    description:
      "通过极窄边框和玻璃材质保留空间通透感，同时帮助厨房区域形成清晰边界。适合现代、极简、轻奢等空间。",
    specs: [
      { label: "适用空间", value: "厨房 / 餐厅 / 书房隔断" },
      { label: "设计风格", value: "现代极简 / 黑框玻璃 / 轻奢" },
      { label: "功能特点", value: "通透采光 / 油烟隔离 / 节省空间" }
    ],
    tags: ["玻璃", "推拉", "厨房", "通透"]
  },
  {
    id: "trackless-minimal-sliding-door",
    name: "无轨极简推拉门",
    categoryIds: ["trackless-sliding-door", "sliding-door"],
    categoryLabel: "无轨推拉门",
    images: [IMAGE_ASSETS.trackless, IMAGE_ASSETS.sliding, IMAGE_ASSETS.partition],
    summary: "地面无轨设计，视觉更完整，适合对清洁和极简感要求更高的空间。",
    description:
      "隐藏式轨道让地面保持干净完整，减少清洁死角。适合客餐厅、阳台、厨房等需要高频通行的空间。",
    specs: [
      { label: "适用空间", value: "厨房 / 阳台 / 客餐厅隔断" },
      { label: "设计风格", value: "无轨极简 / 现代通透" },
      { label: "功能特点", value: "地面无轨 / 清洁友好 / 顺滑开启" }
    ],
    tags: ["无轨", "推拉", "极简", "易清洁"]
  },
  {
    id: "armored-entry-door",
    name: "装甲安全入户门",
    categoryIds: ["entry-door"],
    categoryLabel: "入户门 / 安全门",
    images: [IMAGE_ASSETS.entry, IMAGE_ASSETS.showroom, IMAGE_ASSETS.craftsmanship],
    summary: "强调安全性能和入户质感，为家庭第一道空间界面提供稳定守护。",
    description:
      "厚重结构结合现代饰面，让安全门不只可靠，也能成为入户空间的视觉重点。适合住宅、别墅及改善型装修。",
    specs: [
      { label: "适用空间", value: "住宅入户 / 别墅入户" },
      { label: "设计风格", value: "现代稳重 / 金属质感 / 安全门" },
      { label: "功能特点", value: "稳定结构 / 安全防护 / 支持定制" }
    ],
    tags: ["安全", "入户", "稳重", "装甲"]
  },
  {
    id: "fluted-glass-partition",
    name: "极简长虹玻璃隔断",
    categoryIds: ["partition-door", "bathroom-door"],
    categoryLabel: "阳台门 / 隔断门",
    images: [IMAGE_ASSETS.partition, IMAGE_ASSETS.sliding, IMAGE_ASSETS.trackless],
    summary: "长虹玻璃带来朦胧光影，适合需要采光与私密兼顾的隔断空间。",
    description:
      "通过竖向纹理玻璃弱化视线穿透，同时保留自然光。适合卫生间干区、玄关、阳台和功能隔断。",
    specs: [
      { label: "适用空间", value: "卫生间干区 / 玄关 / 阳台" },
      { label: "设计风格", value: "长虹玻璃 / 现代轻奢 / 通透隔断" },
      { label: "功能特点", value: "透光不透影 / 空间分隔 / 装饰性强" }
    ],
    tags: ["长虹玻璃", "隔断", "透光", "私密"]
  }
];

export const FEATURED_PRODUCT_IDS = [
  "trend-oak-minimal-bedroom-door",
  "trend-black-slim-glass-sliding-door",
  "trend-changhong-glass-bathroom-door",
  "trend-hidden-flush-wall-door",
  "trend-smart-armored-entry-door",
  "trend-warm-white-silent-door"
];

export const BRAND_ADVANTAGES = [
  {
    title: "严选产品体系",
    description: "围绕家装高频场景筛选门类，优先考虑稳定、耐用、好搭配。"
  },
  {
    title: "专业测量安装",
    description: "从尺寸确认到安装细节统一把关，减少后期使用中的缝隙和异响。"
  },
  {
    title: "真实展厅体验",
    description: "建议客户到店看材质、摸手感、比颜色，避免只看图片产生偏差。"
  }
];

export const getCategoryById = (id) =>
  PRODUCT_CATEGORIES.find((category) => category.id === id);

export const getProductById = (id) =>
  PRODUCTS.find((product) => product.id === id);
