export const state = () =>({
    products: [],
    // surprisingOffer: []
})

export const mutations = {
    setProducts(state, products) {
      state.products = products
    },
    setOffer(state) {
        state.products.filter((product) => {
            return product.discounted_price === ''
        })
    }
}


export const actions = {
    async getProducts({ commit }) {
        // const {data: {link}} = await this.$axios.get('/someurl')
        const products = [
            {
                id: 1,
                category_name : 'موبایل',
                name: 'گوشی موبایل اپل مدل iPhone 13 CH',
                price: 36650000,
                colors: ['آبی','مشکی', 'سفید', 'صورتی','سبز'],
                qty: 2,
                stars: 4.4,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
                ],
                special_delivery: true,
                most_popular: false,
                best_selling: false,
                tag: 'اپل'
            },
            {
                id: 2,
                category_name : 'موبایل',
                name: 'گوشی موبایل اپل مدل iPhone 13 Pro A2639',
                price: 82000000,
                colors: ['آبی','خاکستری', 'سفید', 'زرد'],
                qty: 1,
                stars: 4.5,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'اپل'
            },
            {
                id: 3,
                category_name : 'موبایل',
                name: 'گوشی موبایل شیائومی مدل Redmi Note 10 Pro',
                price: 82000000,
                colors: ['آبی','خاکستری', 'سفید', 'زرد'],
                qty: 1,
                stars: 4.5,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/4fd57505f8871f90ba2165c78410caad711ecd8c_1668508568.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: true,
                best_selling: true,
                brand_name: 'شیائومی',
                brand_logo: 'https://dkstatics-public.digikala.com/digikala-brands/2994.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80',
                tag: 'شیائومی'
            },
            {
                id: 4,
                category_name : 'موبایل',
                name: 'گوشی موبایل سامسونگ مدل Galaxy A13',
                price: 5029000,
                colors: ['آبی','خاکستری', 'نقره ای', 'قرمز'],
                qty: 1,
                stars: 4.5,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/06aaa82b2af4b71992683701769b0afa4fa169bf_1666160815.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: true,
                best_selling: true,
                brand_name: 'سامسونگ',
                brand_logo: 'https://dkstatics-public.digikala.com/digikala-brands/3960.jpg?x-oss-process=image/resize,m_lfit,h_120,w_120/quality,q_80',
                tag: 'سامسونگ'
            },
            {
                id: 5,
                category_name : 'موبایل',
                name: 'گوشی موبایل اپل مدل iPhone 12 pro max',
                price: 92000000,
                colors: ['آبی','خاکستری', 'نقره ای', 'قرمز'],
                qty: 2,
                stars: 4.5,
                discounted_price: 88000000,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'اپل'
            },
            {
                id: 6,
                category_name : 'موبایل',
                name: 'گوشی موبایل اپل مدل iPhone 14',
                price: 25300000,
                colors: ['آبی','خاکستری', 'نقره ای', 'قرمز'],
                qty: 0,
                stars: 4.5,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'اپل'
            },
            {
                id: 7,
                category_name : 'کالای دیجیتال',
                name: 'هارد اکسترنال سیلیکون پاور مدل Armor A85',
                price: 2680000,
                colors: ['مشکی'],
                qty: 1,
                stars: 4,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/478417.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: true,
                best_selling: true,
                brand_name: 'سیلیکون پاور',
                brand_logo: 'https://dkstatics-public.digikala.com/digikala-brands/3518.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80',
                tag: 'کامپیوتر و تجهیزات جانبی'
            },
            {
                id: 8,
                category_name : 'کالای دیجیتال',
                name: 'دوربین دیجیتال آکسون',
                price: 520000,
                colors: ['سفید'],
                qty: 1,
                stars: 4,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/3532470.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'دوربین عکاسی دیجیتال'
            },
            {
                id: 9,
                category_name : 'کالای دیجیتال',
                name: 'محافظ صفحه نمایش مات شهر گلس مدل CMT',
                price: 17700,
                colors: ['مشکی'],
                qty: 0,
                stars: 3,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/56a5df8446414ac769f483e6ad3ade65ad2c7584_1651735792.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: true,
                best_selling: true,
                brand_name: 'شهر گلس',
                brand_logo: 'https://dkstatics-public.digikala.com/digikala-brands/c672197e1b856916470b6b0f755063b10516fdfb_1642246341.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80',
                tag: 'لوازم جانبی گوشی موبایل'
            },
            {
                id: 10,
                category_name : 'خودرو، ابزار و تجهیزات صنعتی',
                name: 'نردبان 5 پله ماندگار مدل سما',
                price: 980000,
                colors: ['قرمز'],
                qty: 1,
                stars: 4.3,
                discounted_price: 940000,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/7ae504c43a6e21cbd6d5e948eb6218ad0af6f88f_1614405423.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'نردبان'
            },
            {
                id: 11,
                category_name : 'خودرو، ابزار و تجهیزات صنعتی',
                name: 'نردبان 5 پله کاراسان',
                price: 599000,
                colors: ['مشکی'],
                qty: 2,
                stars: 4.3,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/7ae504c43a6e21cbd6d5e948eb6218ad0af6f88f_1614405423.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: false,
                best_selling: false,
                tag: 'نردبان'
            },
            {
                id: 12,
                category_name : 'خودرو، ابزار و تجهیزات صنعتی',
                name: 'نردبان 5 پله آسانکار',
                price: 2000000,
                colors: ['قرمز'],
                qty: 0,
                stars: 4.3,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/7ae504c43a6e21cbd6d5e948eb6218ad0af6f88f_1614405423.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'نردبان'
            },
            {
                id: 13,
                category_name : 'مد و پوشاک',
                name: 'ساعت مچی دیجیتال اسکمی',
                price: 540000,
                colors: ['مشکی'],
                qty: 2,
                stars: 4,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/28540f0c8113a60b3f4118d9fdbf7a513c8ff3d1_1601024552.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
                ],
                special_delivery: true,
                most_popular: false,
                best_selling: false,
                tag: 'ساعت'
            },
            {
                id: 14,
                category_name : 'مد و پوشاک',
                name: 'ساعت مچی عقربه ای',
                price: 237000,
                colors: ['مشکی'],
                qty: 0,
                stars: 4.4,
                discounted_price: 190000,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/28540f0c8113a60b3f4118d9fdbf7a513c8ff3d1_1601024552.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'ساعت'
            },
            {
                id: 15,
                category_name : 'کالاهای سوپرمارکتی',
                name: 'فیله سوخاری مرغ مارین',
                price: 290000,
                colors: '',
                qty: 2,
                stars: 4.3,
                discounted_price: 183990,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/2a2edb2d78e6b23be50dd6b32c4fd7f4349b1326_1633872685.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: false,
                best_selling: false,
                tag: 'فرآورده های منجمد'
            },
            {
                id: 16,
                category_name : 'کالاهای سوپرمارکتی',
                name: 'کنسرو خوراک بادمجان طبیعت',
                price: 22340,
                colors: '',
                qty: 2,
                stars: 4.5,
                discounted_price: 15900,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/7b51aa3eef474ccb7caab58a18af6d115e99a84f_1639458278.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: false,
                best_selling: false,
                tag: 'فرآورده های منجمد'
            },
            {
                id: 17,
                category_name : 'کالاهای سوپرمارکتی',
                name: 'پنیر لاکتیکی کاله',
                price: 180000,
                colors: '',
                qty: 2,
                stars: 4.5,
                discounted_price: 151500,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/68d956c2cfd9e82da1ea32805e3d527e19744db1_1652876603.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: true,
                best_selling: true,
                brand_name: 'کاله',
                brand_logo: 'https://dkstatics-public.digikala.com/digikala-brands/311.png?x-oss-process=image/resize,m_lfit,h_120,w_120/quality,q_80',
                tag: 'لبنیات'
            },
            {
                id: 18,
                category_name : 'کالاهای سوپرمارکتی',
                name: 'مايع ظرفشويی پريل لوندر',
                price: 183098,
                colors: '',
                qty: 2,
                stars: 4.5,
                discounted_price: 148900,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/956d01a7da8711b3b24ad3580b6aa7f5992c72e6_1672748644.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: true,
                best_selling: true,
                brand_name: 'پريل',
                brand_logo: 'https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_120,w_120/quality,q_80',
                tag: 'مواد شوینده'
            },
            {
                id: 43,
                category_name : 'کالاهای سوپرمارکتی',
                name: 'شامپو مخصوص موهای چرب مای',
                price: 49700,
                colors: '',
                qty: 2,
                stars: 4.5,
                discounted_price: 36900,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/949319.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: true,
                best_selling: true,
                brand_name: 'مای',
                brand_logo: 'https://dkstatics-public.digikala.com/digikala-brands/3972.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80',
                tag: 'لوازم بهداشتی'
            },
            {
                id: 44,
                category_name : 'کالاهای سوپرمارکتی',
                name: 'شامپو کودک گلرنگ',
                price: 18290,
                colors: '',
                qty: 2,
                stars: 4.5,
                discounted_price: 14900,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/2075925.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: false,
                best_selling: false,
                tag: 'فرآورده های منجمد'
            },
            {
                id: 19,
                category_name : 'محصولات بومی و محلی',
                name: 'گلدان سرامیکی آرانیک',
                price: 187500,
                colors: ['خاکستری', 'سفید'],
                qty: 1,
                stars: 4.5,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/9da309d90997a53fe43f7c880522f724f161ab67_1638607332.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'گلدان سنتی'
            },
            {
                id: 20,
                category_name : 'محصولات بومی و محلی',
                name: 'گلدان میناکاری آرا هنر ',
                price: 187500,
                colors: ['سفید'],
                qty: 2,
                stars: 4.2,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/9da309d90997a53fe43f7c880522f724f161ab67_1638607332.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'گلدان سنتی'
            },
            {
                id: 21,
                category_name : 'محصولات بومی و محلی',
                name: 'گلدان میناکاری آرا هنر ',
                price: 187500,
                colors: ['سفید'],
                qty: 2,
                stars: 4.2,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/9da309d90997a53fe43f7c880522f724f161ab67_1638607332.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'گلدان سنتی'
            },
            {
                id: 22,
                category_name : 'محصولات بومی و محلی',
                name: 'گلدان میناکاری آرا هنر ',
                price: 187500,
                colors: ['سفید'],
                qty: 0,
                stars: 4.2,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/9da309d90997a53fe43f7c880522f724f161ab67_1638607332.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'گلدان سنتی'
            },
            {
                id: 23,
                category_name : 'اسباب بازی، کودک و نوزاد',
                name: 'ست 19 تکه لباس نوزادی ',
                price: 450000,
                colors: ['آبی','خاکستری', 'نقره ای', 'قرمز'],
                qty: 2,
                stars: 4.6,
                discounted_price: 300000,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/df147ae1f0031130756f76e024a5bf9b94b0c4bb_1633290207.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'لباس کودک و لباس نوزادی'
            },
            {
                id: 24,
                category_name : 'اسباب بازی، کودک و نوزاد',
                name: 'ست 19 تکه لباس نوزادی ',
                price: 420000,
                colors: ['آبی'],
                qty: 1,
                stars: 4.7,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/df147ae1f0031130756f76e024a5bf9b94b0c4bb_1633290207.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'لباس کودک و لباس نوزادی'
            },
            {
                id: 25,
                category_name : 'اسباب بازی، کودک و نوزاد',
                name: 'ست 19 تکه لباس نوزادی ',
                price: 530000,
                colors: ['آبی'],
                qty: 2,
                stars: 4.7,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/df147ae1f0031130756f76e024a5bf9b94b0c4bb_1633290207.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: false,
                best_selling: false,
                tag: 'لباس کودک و لباس نوزادی'
            },
            {
                id: 26,
                category_name : 'اسباب بازی، کودک و نوزاد',
                name: 'ست 19 تکه لباس نوزادی ',
                price: 300000,
                colors: ['آبی'],
                qty: 0,
                stars: 4.7,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/df147ae1f0031130756f76e024a5bf9b94b0c4bb_1633290207.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'لباس کودک و لباس نوزادی'
            },
            {
                id: 27,
                category_name : 'زیبایی و سلامت',
                name: 'ریمل بل ',
                price: 320000,
                colors: ['مشکی'],
                qty: 2,
                stars: 4.8,
                discounted_price: 200000,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/fd290d2b246205e4b6f4a0a34d39c0b5ebeccf28_1614104742.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: false,
                best_selling: false,
                tag: 'آرایش چشم'
            },
            {
                id: 28,
                category_name : 'زیبایی و سلامت',
                name: 'اسکراب لایه بردار شون مدل عصاره گردو ',
                price: 200000,
                colors: ['مشکی'],
                qty: 1,
                stars: 4.3,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/0c9face588185e62cf8b296a4f350a5395502ac1_1631507851.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: true,
                best_selling: true,
                brand_name: 'شون',
                brand_logo: 'https://dkstatics-public.digikala.com/digikala-brands/bff03daf9cf71a71b7e41b31255ba9e747d1a01f_1644133724.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80',
                tag: 'مراقبت پوست'
            },
            {
                id: 29,
                category_name : 'زیبایی و سلامت',
                name: 'سرم پوست بایو آکوا مدل ویتامین C ',
                price: 53000,
                colors: ['مشکی'],
                qty: 2,
                stars: 4.6,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/e07373cfb9fa30f67a70dfb74a79a61b24f2babb_1627684507.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: true,
                best_selling: true,
                brand_name: 'بایو آکوا',
                brand_logo: 'https://dkstatics-public.digikala.com/digikala-brands/627f3a8485f2884e7ae2951adf0761fc3792495e_1627386509.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80',
                tag: 'مراقبت پوست'
            },
            {
                id: 30,
                category_name : 'زیبایی و سلامت',
                name: 'تونر پاک کننده صورت لافارر مدل آبرسان ',
                price: 118000,
                colors: ['مشکی'],
                qty: 0,
                stars: 4.6,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/f1b388080ed990aacd759594b8a92017eddb7bf9_1668511681.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: true,
                best_selling: true,
                brand_name: 'لافارر',
                brand_logo: 'https://dkstatics-public.digikala.com/digikala-brands/1313.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80',
                tag: 'مراقبت پوست'
            },
            {
                id: 31,
                category_name : 'خانه و آشپزخانه',
                name: 'مبل راحتی 8 نفره مدل کارن ',
                price: 43000000,
                colors: ['آبی','خاکستری', 'نقره ای', 'قرمز'],
                qty: 2,
                stars: 4.3,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/06de51dfd84a099ed3f8ae19b5abad601c119272_1653201178.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: false,
                best_selling: false,
                tag: 'مبل'
            },
            {
                id: 32,
                category_name : 'خانه و آشپزخانه',
                name: 'مبل راحتی 6 نفره مدل شاهان ',
                price: 16000000,
                colors: ['خاکستری'],
                qty: 1,
                stars: 4.3,
                discounted_price: 15200000,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/06de51dfd84a099ed3f8ae19b5abad601c119272_1653201178.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'مبل'
            },
            {
                id: 33,
                category_name : 'خانه و آشپزخانه',
                name: 'مبل تخت خواب شو دو نفره چشمه نور ',
                price: 15000000,
                colors: ['آبی','خاکستری', 'نقره ای', 'قرمز'],
                qty: 2,
                stars: 4.3,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/4e386443ee53ac386a69efc3189fd9b29812f533_1605680684.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: true,
                best_selling: true,
                brand_name: 'چشمه نور',
                brand_logo: 'https://dkstatics-public.digikala.com/digikala-brands/9f74161dd136485ac79f5ca5e829b2340419b084_1666776495.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80',
                tag: 'مبل'
            },
            {
                id: 34,
                category_name : 'خانه و آشپزخانه',
                name: 'مبل راحتی 7 نفره مدل ال ',
                price: 13950000,
                colors: ['آبی','خاکستری', 'نقره ای', 'قرمز'],
                qty: 0,
                stars: 4.3,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/06de51dfd84a099ed3f8ae19b5abad601c119272_1653201178.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'مبل'
            },
            {
                id: 35,
                category_name : 'کتاب، لوازم تحریر و هنر',
                name: 'گیتار یاماهاُ ',
                price: 2100000,
                colors: ['قهوه ای','خاکستری'],
                qty: 2,
                stars: 4.3,
                discounted_price: 1540000,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/eedbe631d5ef4699c0ccc1f1d2e6842a354b6b91_1641310678.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'سازهای زهی'
            },
            {
                id: 36,
                category_name : 'کتاب، لوازم تحریر و هنر',
                name: 'سنتور قشلاقی ',
                price: 5290000,
                colors: ['قهوه ای'],
                qty: 1,
                stars: 4.3,
                discounted_price: 2960000,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/18aff49804e472e375d4178c45434683ac522df7_1670632755.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'سازهای زهی'
            },
            {
                id: 37,
                category_name : 'کتاب، لوازم تحریر و هنر',
                name: 'دفتر برنامه ریزی مستر راد طرح کهکشان ',
                price: 5290000,
                colors: ['بنفش'],
                qty: 2,
                stars: 4.3,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/433d5dbaf1e5a06b6801b1071cef69665e3ee568_1668025023.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: true,
                best_selling: true,
                brand_name: 'مستر راد',
                brand_logo: 'https://dkstatics-public-2.digikala.com/digikala-brands/100009092.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80',
                tag: 'کتاب، لوازم تحریر و هنر'
            },
            {
                id: 38,
                category_name : 'کتاب، لوازم تحریر و هنر',
                name: 'گیتار یاماهاُ ',
                price: 2100000,
                colors: ['خاکستری'],
                qty: 0,
                stars: 4.3,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/eedbe631d5ef4699c0ccc1f1d2e6842a354b6b91_1641310678.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'سازهای زهی'
            },
            {
                id: 39,
                category_name : 'ورزش و سفر',
                name: 'چادر مسافرتی 4 نفره ',
                price: 30878000,
                colors: ['آبی','خاکستری'],
                qty: 2,
                stars: 4.3,
                discounted_price: 29860000,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/77bd89868cc85ce55541676c97776c71d389f395_1658838879.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: false,
                best_selling: false,
                tag: 'چادر'
            },
            {
                id: 40,
                category_name : 'ورزش و سفر',
                name: 'چادر مسافرتی 8 نفره ',
                price: 30000000,
                colors: ['خاکستری'],
                qty: 1,
                stars: 4.8,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/77bd89868cc85ce55541676c97776c71d389f395_1658838879.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'چادر'
            },
            {
                id: 41,
                category_name : 'ورزش و سفر',
                name: 'چادر مسافرتی 6 نفره ',
                price: 10000000,
                colors: ['آبی','خاکستری'],
                qty: 2,
                stars: 4.8,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/77bd89868cc85ce55541676c97776c71d389f395_1658838879.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                most_popular: false,
                best_selling: false,
                tag: 'چادر'
            },
            {
                id: 42,
                category_name : 'ورزش و سفر',
                name: 'چادر مسافرتی 8 نفره ',
                price: 800000,
                colors: ['آبی','خاکستری'],
                qty: 0,
                stars: 4.8,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/77bd89868cc85ce55541676c97776c71d389f395_1658838879.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                most_popular: false,
                best_selling: false,
                tag: 'چادر'
            },
        ]
        commit('setProducts',products)
    }
}