import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Smartwatches' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      price: 836100,
      rating: 5.0,
      likes: 1022,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн.',
      price: 408447,
      rating: 5.0,
      likes: 4464,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },
    {
      id: 3,
      name: 'Смартфон Redmi 14C NFC 8 ГБ/256 ГБ черный',
      description: 'Смартфон Redmi 14C NFC 8 ГБ/256 ГБ — это мощное устройство с высокой производительностью и современными функциями, которое идеально подходит для активного использования в повседневной жизни.',
      price: 74893,
      rating: 4.5,
      likes: 643,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1b/p6b/7253918.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p37/p6b/7253919.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa3/p6d/7253920.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbf/p6d/7253921.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-14c-nfc-8-gb-256-gb-chernyi-123624586/?c=750000000'
    },
    {
      id: 4,
      name: 'Смартфон Redmi A3x 3 ГБ/64 ГБ черный',
      description: 'Смартфон Redmi A3x 3 ГБ/64 ГБ — это мощное устройство с высокой производительностью и стильным дизайном, которое идеально подходит для повседневного использования.',
      price: 52900,
      rating: 5.0,
      likes: 1037,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hac/h2e/86584697683998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h46/h73/86584697716766.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000'
    },
    {
      id: 5,
      name: 'Смартфон Samsung Galaxy A56 5G 8 ГБ/128 ГБ серый',
      description: 'Представляем Samsung Galaxy A56 5G — смартфон, который сочетает в себе высокую производительность, современные технологии и стильный дизайн.',
      price: 176990,
      rating: 5.0,
      likes: 717,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pde/p5c/30501454.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p75/p59/30501464.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa6/p5c/30501456.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7c/p56/30501470.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-128-gb-seryi-136422081/?c=750000000'
    },
    {
      id: 6,
      name: 'Ноутбук Oyan Lite X14 14.1" / 8 Гб / SSD 512 Гб / Win 11 Home / R1526',
      description: 'Внимание: ноутбук не для игр или работы с ресурсоемкими приложениями. Встроенная видеокарта Intel UHD Graphics 600 справляется только с базовыми задачами, такими как просмотр видео и работа в офисных программах.',
      price: 134500,
      rating: 5.0,
      likes: 366,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/p49/48619238.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe1/p49/48619239.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p75/p47/48619240.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p59/p47/48619241.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/oyan-lite-x14-14-1-8-gb-ssd-512-gb-win-11-home-r1526-115724796/?c=750000000'
    },
    {
      id: 7,
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      description: 'Маленький чип. Грандиозный прорыв',
      price: 439984,
      rating: 5.0,
      likes: 585,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    },
    {
      id: 8,
      name: 'Ноутбук PRYME N5095 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / FHK14BK25',
      description: 'Ноутбук PRYME N5095 15.6” — оптимальное решение для учёбы и работы',
      price: 189990,
      rating: 5.0,
      likes: 363,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/pfb/45122460.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pee/pfa/45122461.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd2/pfa/45122462.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/?c=750000000'
    },
    {
      id: 9,
      name: 'Ноутбук HYDRA Home H20 15.6" / 12 Гб / SSD 512 Гб / Win 11 / MKII',
      description: 'Ноутбуки HYDRA это Казахстанский бренд электроники и гаджетов для дома.',
      price: 135000,
      rating: 5.0,
      likes: 776,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p46/69607282.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p08/p47/69607283.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p51/36556289.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hydra-home-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=750000000'
    },
    {
      id: 10,
      name: 'Ноутбук Liman N95 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / Z14202401662191NYM',
      description: 'Ноутбук LIMAN : Ваш идеальный выбор для офиса и учёбы',
      price: 199000,
      rating: 5.0,
      likes: 578,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hec/h9d/86034443698206.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8b/h1f/86034443763742.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/h00/86034443829278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/h72/86034443894814.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/liman-n95-15-6-16-gb-ssd-512-gb-win-11-pro-z14202401662191nym-119401105/?c=750000000'
    },
    {
      id: 11,
      name: 'Наушники Xiaomi In-Ear Headphones Basic черный',
      description: 'Прекрасная песня – это сочетание красивых слов и звуков, которые вызывают сильные эмоции и воспоминания.',
      price: 2990,
      rating: 4.5,
      likes: 139,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6c/pa2/7469533.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p89/pa2/7469534.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc1/pa2/7469536.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/p47/7469537.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-in-ear-headphones-basic-chernyi-4803686/?c=750000000'
    },
    {
      id: 12,
      name: 'Наушники GERLAX GH-34 черный',
      description: 'С беспроводным подключением и современным дизайном, они станут вашим незаменимым спутником в любых задачах.',
      price: 2769,
      rating: 4.5,
      likes: 564,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h52/h6d/86037848129566.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h15/h72/86037848195102.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h15/h72/86037848195102.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-gerlax-gh-34-chernyi-119492193/?c=750000000'
    },
    {
      id: 13,
      name: 'Наушники Apple AirPods 4 белый',
      description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио',
      price: 59975,
      rating: 5.0,
      likes: 3266,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000'
    },
    {
      id: 14,
      name: 'Наушники WIWU Earbuds 303 белый',
      description: '🎧 **WIWU Earbuds 303** — это универсальные наушники для тех, кто ценит качественный звук и удобство использования в повседневной жизни.',
      price: 523,
      rating: 4.5,
      likes: 424,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p01/pf1/9210783.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p01/pf1/9210783.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/pf1/9210784.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p56/pf1/9210786.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-wiwu-earbuds-303-belyi-118287281/?c=750000000'
    },
    {
      id: 15,
      name: 'Наушники Xiaomi Redmi Buds 6 Play розовый',
      description: 'В комплекте не идут адаптер и шнур питания!!!',
      price: 6488,
      rating: 5.0,
      likes: 1663,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9a/p84/107073087.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/p84/107073088.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p62/p84/107073089.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/p81/107073095.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-6-play-rozovyi-129065160/?c=750000000'
    },
    {
      id: 16,
      name: 'Смарт-часы Huawei WATCH GT 6 41 мм золотистый-золотистый',
      description: 'HUAWEI WATCH GT 6 41 мм',
      price: 99479,
      rating: 5.0,
      likes: 34,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb7/p87/72527964.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p87/pfe/73833197.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6b/pfe/73833198.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p37/pb4/73833200.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-watch-gt-6-41-mm-zolotistyi-zolotistyi-147986879/?c=750000000'
    },
    {
      id: 17,
      name: 'Смарт-часы YUNTEKO DMi50 графитовый-черный',
      description: '🔆🕙 Смарт часы YUNTEKO DMi50 — умнее других "умных" часов, крепче твоих нервов, и работает дольше, чем ты на работе!🔥',
      price: 29888,
      rating: 5.0,
      likes: 602,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p48/p52/58332178.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd0/p54/58332180.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p54/58332181.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/yunteko-dmi50-grafitovyi-chernyi-112844424/?c=750000000'
    },
    {
      id: 18,
      name: 'Смарт-часы NOLIMIT REDLINE черный',
      description: '⌚ NOLIMIT REDLINE смарт сағаты – белсенді жандарға арналған сенімді аксессуар⁠',
      price: 29900,
      rating: 5.0,
      likes: 289,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6d/p33/88870604.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p44/p15/62729234.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p15/62729235.PNG?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p75/p8c/62729236.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/smart-chasy-nolimit-redline-chernyi-141361891/?c=750000000'
    },
    {
      id: 19,
      name: 'Смарт-часы Samsung Galaxy Watch Ultra 2025 47 мм синий-синий',
      description: 'Samsung Galaxy Watch Ultra 2025 47 мм — флагманские умные часы с широким функционалом и премиальным дизайном.',
      price: 188990,
      rating: 5.0,
      likes: 69,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf5/pcc/54616772.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p11/pcd/54616773.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2d/pcd/54616774.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p82/pcd/54616777.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-ultra-2025-47-mm-sinii-sinii-142950203/?c=750000000'
    },
    {
      id: 20,
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности.',
      price: 139898,
      rating: 5.0,
      likes: 675,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000'
    },





  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }

}