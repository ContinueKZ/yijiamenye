import bedroomDoorImage from "@/assets/images/bedroom-door.jpg";
import craftsmanshipDoorImage from "@/assets/images/craftsmanship-door.jpg";
import entryDoorImage from "@/assets/images/entry-door.jpg";
import heroDoorImage from "@/assets/images/hero-door.jpg";
import partitionDoorImage from "@/assets/images/partition-door.jpg";
import showroomImage from "@/assets/images/showroom.jpg";
import slidingDoorImage from "@/assets/images/sliding-door.jpg";
import storefrontImage from "@/assets/images/storefront.jpg";
import tracklessDoorImage from "@/assets/images/trackless-door.jpg";

export const SITE_INFO = {
  name: "益嘉门业",
  englishName: "YIJIA DOORS",
  slogan: "为每一个空间，选择更合适的门",
  description: "专注家装与工程门类展示、定制与安装服务。",
  heroTitle: "益嘉门业 - 为每一个空间，选择更合适的门",
  heroSubtitle: "以克制的设计、可靠的选品和细致的安装服务，为现代家庭打造更安静、更耐看的空间边界。"
};

export const CONTACT_INFO = {
  phone: "+86 400-XXX-XXXX",
  phoneHref: "tel:+86400XXXXXXX",
  wechat: "YIJIA_DOORS_OFFICIAL",
  address: "佛山市顺德区XX产业园一期",
  businessHours: "周一至周日 09:00 - 18:30"
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
  craftsmanship: craftsmanshipDoorImage,
  showroom: showroomImage,
  store: storefrontImage
};

export const PRODUCTS = [
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
  "modern-bedroom-door",
  "phantom-black-sliding-door",
  "trackless-minimal-sliding-door",
  "armored-entry-door"
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
