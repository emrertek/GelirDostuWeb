var products = [
    {
        id: 0,
        img: 'images/BB_KREM_.jpg',
        name: 'BB krem',
        price: 200.0,
        href: 'https://www.cimri.com/fondotenler/en-ucuz-pure-beauty-spf50-pa-ivory-30-ml-bb-cream-fiyatlari,2088770791',
        quantity: 1
    },
    {
        id: 1,
        img: 'images/box2image.jpg',
        name: 'Laptop',
        price: 9999,
        href: 'https://www.cimri.com/dizustu-bilgisayar/en-ucuz-huawei-matebook-d15-i3-1115g4-8-gb-ram-256-gb-ssd-w11h-fhd-dizustu-bilgisayar-fiyatlari,2019887259',
        quantity: 1
    },
    {
        id: 2,
        img: 'images/box4.jpg',
        name: 'TABLET',
        price: 2199,
        href: 'https://www.cimri.com/tablet-pc/en-ucuz-samsung-galaxy-tab-a7-lite-t220-32gb-8-7-tablet-pc-gri-fiyatlari,884160691',
        quantity: 1
    }
    ,
    {
        id: 3,
        img: 'images/box5.jpg',
        name: 'NEW BALANCE',
        price: 2792,
        href: 'https://www.cimri.com/spor-ayakkabi/en-ucuz-new-balance-mr530sg-530-unisex-spor-ayakkabi-fiyatlari,1663295771',
        quantity: 1
    }
    ,
    {
        id: 4,
        img: 'images/box6.jpeg',
        name: 'MASA LAMBASI',
        price: 206.5,
        href: 'https://www.cimri.com/masa-lambasi/en-ucuz-cata-ct-8405-new-york-masa-lambasi-fiyatlari,743195232',
        quantity: 1
    }
    ,
    {
        id: 5,
        img: 'images/casper-via-e30-beyaz-13_op_tekno.jpg',
        name: 'CEP TELEFONU',
        price: 3200.5,
        href: 'https://www.akakce.com/cep-telefonu/en-ucuz-casper-via-e30-64-gb-fiyati,1364920356.html',
        quantity: 1
    }
    ,
    {
        id: 6,
        img: 'images/ev_yasam3.jpg',
        name: 'OFİS MASA ',
        price: 469.9,
        href: 'https://www.hepsiburada.com/tomar-metal-calisma-bilgisayar-masasi-ofis-masasi-ceviz-50x120-cm-pm-HB0000135XVM',
        quantity: 1
    }
    ,
    {
        id: 7,
        img: 'images/ev-yasam1.jpg',
        name: 'KİTAPLIK',
        price: 124.99,
        href: 'https://www.hepsiburada.com/bambeds-mobilya-dekor-cok-amacli-mini-rafli-masa-ve-tezgah-ustu-dolap-pm-HBC00002GWGS3',
        quantity: 1
    }
    ,
    {
        id: 8,
        img: 'images/ev-yasam2.jpg',
        name: 'OFİS KOLTUK',
        price: 575.0,
        href: 'https://www.hepsiburada.com/aym-ofis-kumas-doseme-siyah-sekreter-ofis-ev-ogrenci-calisma-sandalyesi-pm-HBC000030TDEL',
        quantity: 1
    }
    ,
    {
        id: 9,
        img: 'images/GD_bakim_yagi.jpg',
        name: 'SAÇ BAKIM YAĞI',
        price: 44.9,
        href: 'https://www.cimri.com/masa-lambasi/en-ucuz-cata-ct-8405-new-york-masa-lambasi-fiyatlari,743195232',
        quantity: 1
    }
    ,
    {
        id: 10,
        img: 'images/GD_saglik_bakim_4.jpg',
        name: 'TER ÖNLEYİCİ SPREY',
        price: 89.78,
        href: 'https://www.trendyol.com/tereson/el-ayak-ve-koltuk-alti-terleme-onleyici-sprey-50-ml-p-125379351?boutiqueId=61&merchantId=110964',
        quantity: 1
    },
    {
        id: 11,
        img: 'images/GITAR_.jpg',
        name: 'GİTAR',
        price: 427.50,
        href: 'https://www.cimri.com/klasik-gitarlar/en-ucuz-jwin-cg-2101-naturel-soprano-ukulele-gitar-fiyatlari,514884162',
        quantity: 1
    }
    ,
    {
        id: 12,
        img: 'images/HOBİ-1.jpg',
        name: 'KAYKAY',
        price: 211.99 ,
        href: 'https://www.trendyol.com/triathlon/t132-rip-curl-desenli-kaykay-p-104259696',
        quantity: 1
    }
    ,
    {
        id: 13,
        img: 'images/HOBİ-2.jpg',
        name: 'BİSİKLET',
        price: 1899 ,
        href: 'https://www.trendyol.com/serraro/20-jant-bisiklet-denge-tekerli-p-336317296?boutiqueId=61&merchantId=682855',
        quantity: 1
    }
    ,
    {
        id: 14,
        img: 'images/MODA-2.jpg',
        name: 'ERKEK TİŞÖRT',
        price: 179.99 ,
        href: 'https://www.hepsiburada.com/mavi-erkek-miav-baskili-beyaz-tisort-067153-620-p-HBCV000016AHOD',
        quantity: 1
    }
    ,
    {
        id: 15,
        img: 'images/hazir_sistem.jpg',
        name: 'HAZIR SİSTEM',
        price: 11399 ,
        href: 'https://www.gencergaming.com/pch-v3.1',
        quantity: 1
    }
];

var setProductItems = function () {
    products.forEach(function (product, index) {
        $(".products").append(
            '<li class="product">' +
                '<img src="' + product.img + '">' +
                '<h3>' + product.name + '</h3>' +
                '<p class="">Fiyat: ' + product.price + '₺</p>' +
                '<button id="' + product.id + '" class="btn sepete-ekle-buton">Sepete Ekle</button>' +
                '<a class="btn" href="' + product.href + '">Linke Git</a>' +
            '</li>'
        );
    });
}

var listenAddToCart = function () {
    $(".sepete-ekle-buton").on("click", function (event) {
        let storageValue = JSON.parse(localStorage.getItem("sepet-urunleri")) || [];
        let clickedProductId = Number($(event.target).attr('id'));

        var productExists = storageValue.some(function (product) {
            if (product.id === clickedProductId) {
                product.quantity++;

                return true;
            }
        });

        if (!productExists) {
            storageValue.push(products[clickedProductId]);  
        }

        localStorage.setItem("sepet-urunleri", JSON.stringify(storageValue));
      });
};

setTimeout(function () {
    setProductItems();
    listenAddToCart();
}, 500);