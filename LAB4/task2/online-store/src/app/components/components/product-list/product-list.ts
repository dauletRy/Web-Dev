import { Component } from '@angular/core';
import { Product } from 'C:/Users/daule/Desktop/WebDev/lab4/task2/online-store/src/app/models/product.model';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Монитор 24.5" MSI MAG255XF черный',
      description: 'Игровой монитор MSI MAG255XF — высококачественное решение для геймеров, обеспечивающее потрясающую четкость и мгновенный отклик в любых игровых ситуациях.',
      price: 94093,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p46/p08/14795526.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p23/p0b/14795531.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3f/p0b/14795532.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5b/p0b/14795533.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/24-5-msi-mag255xf-chernyi-131894370/?c=750000000'
    },
    {
      id: 2,
      name: 'Проектор HY 300',
      description: 'Мини-проектор HY300 — домашний кинотеатр в любом месте',
      price: 12800,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p4e/85340560.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p73/p4b/85340561.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p09/p48/85340562.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/p44/85340563.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/proektor-hy-300-134649896/?c=750000000'
    },
    {
      id: 3,
      name: 'Тостер SOKANY SK-016S черный, серебристый',
      description: 'Превратите свой завтрак в настоящее удовольствие с нашим потрясающим тостером!',
      price: 5700,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pd4/61309256.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/pd4/61309257.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd9/pd4/61309258.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4e/p36/61309259.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sokany-sk-016s-chernyi-serebristyi-105247699/?c=750000000'
    },
    {
      id: 4,
      name: 'Тумба Mebellion 02, 40x48x35 см, белый',
      description: 'Тумба Mebellion 02 — стильное и функциональное решение для вашего интерьера. С её помощью вы сможете организовать пространство и добавить уют в вашу спальню или гостиную.',
      price: 14988,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h1d/86214517325854.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/p7f/84452282.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9a/p7f/84452283.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd2/p7f/84452285.bin?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/tumba-mebellion-02-40x48x35-sm-belyi-106296334/?c=750000000'
    },
    {
      id: 5,
      name: 'Пазл 4 тематики, животные, предметы, продукты, транспорт',
      description: 'Развивающие пазлы для малышей — это увлекательный и полезный способ развивать навыки вашего ребёнка, сочетая игру и обучение.',
      price: 1295,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9d/p8c/1901796.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p06/p90/1901797.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p70/p93/1901798.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pda/p96/1901799.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/pazl-4-tematiki-zhivotnye-predmety-produkty-transport-karton-128219574/?c=750000000'
    },
    {
      id: 6,
      name: 'Книга Клир Д.: Атомные привычки',
      description: 'Лучшая деловая книга 2018 года по версии Fast Company.',
      price: 3477,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/86244289347614.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha0/h3e/86244289380382.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h52/h63/86244289413150.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000'
    },
    {
      id: 7,
      name: 'Салфетка 790934 1 шт',
      description: 'Ультравпитывающая салфетка для авто — незаменимый помощник в уходе за вашим автомобилем, обеспечивающий высокую эффективность и долговечность.',
      price: 740,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/h5a/84399151972382.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hde/h8d/84399152037918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h48/h9e/84399152103454.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h82/h41/84399152168990.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/salfetka-790934-1-sht-114197164/?c=750000000'
    },
    {
      id: 8,
      name: 'Маска для лица Gegemoon тканевая New Year Essence 10 шт',
      description: 'Маска для лица Gegemoon тканевая — это набор из 10 масок, который обеспечивает глубокое увлажнение и питание вашей кожи.',
      price: 1333,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5f/pf4/89938405.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/paf/p43/60281446.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p45/p40/60281447.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p72/p39/60281449.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/maska-dlja-litsa-gegemoon-tkanevaja-new-year-essence-10-sht-143756363/?c=750000000'
    },
    {
      id: 9,
      name: 'Караоке-система Pro-karaoke S11 черный',
      description: 'Pro-Karaoke S11 — компактное караоке и домашняя акустика по доступной цене!',
      price: 203000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p90/p8b/74090674.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h22/85559372513310.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd7/h6c/85559372644382.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h83/85559372840990.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/pro-karaoke-s11-chernyi-109003001/?c=750000000'
    },
    {
      id: 10,
      name: 'Фитнес-браслет Xiaomi Smart Band 9 черный',
      description: 'Фитнес-браслет Xiaomi Smart Band 9 — ваш идеальный помощник в отслеживании здоровья и физической активности, предлагающий инновационные функции и долговечную работу.',
      price: 50468,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p38/p15/59176240.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h16/86607711633438.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/hc9/86607711698974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h17/86607656714270.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-9-chernyi-121749494/?c=750000000'
    },

    


  ];
}
