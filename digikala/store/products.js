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
                tag: 'اپل'
            },
            {
                id: 3,
                category_name : 'موبایل',
                name: 'گوشی موبایل اپل مدل iPhone 12',
                price: 82000000,
                colors: ['آبی','خاکستری', 'سفید', 'زرد'],
                qty: 1,
                stars: 4.5,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                tag: 'اپل'
            },
            {
                id: 4,
                category_name : 'موبایل',
                name: 'گوشی موبایل اپل مدل iPhone 11',
                price: 25300000,
                colors: ['آبی','خاکستری', 'نقره ای', 'قرمز'],
                qty: 1,
                stars: 4.5,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
                ],
                special_delivery: false,
                tag: 'اپل'
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
                tag: 'اپل'
            },
            {
                id: 7,
                category_name : 'کالای دیجیتال',
                name: 'دوربین دیجیتال کانن',
                price: 12320000,
                colors: ['مشکی'],
                qty: 1,
                stars: 4,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/3532470.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
                ],
                special_delivery: true,
                tag: 'دوربین عکاسی دیجیتال'
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
                tag: 'دوربین عکاسی دیجیتال'
            },
            {
                id: 9,
                category_name : 'کالای دیجیتال',
                name: 'دوربین دیجیتال کانن بدون آینه',
                price: 11000000,
                colors: ['مشکی'],
                qty: 0,
                stars: 3,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/3532470.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
                ],
                special_delivery: false,
                tag: 'دوربین عکاسی دیجیتال'
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
                tag: 'فرآورده های منجمد'
            },
            {
                id: 17,
                category_name : 'کالاهای سوپرمارکتی',
                name: 'تک تک مینو',
                price: 180000,
                colors: '',
                qty: 2,
                stars: 4.5,
                discounted_price: 151500,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/111094089.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                tag: 'فرآورده های منجمد'
            },
            {
                id: 18,
                category_name : 'کالاهای سوپرمارکتی',
                name: 'ژل ماشين ظرفشويی پريل',
                price: 183098,
                colors: '',
                qty: 2,
                stars: 4.5,
                discounted_price: 148900,
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/0f756bdeb01b1cb864c7e0937a74fc7e968b3188_1652251677.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                tag: 'فرآورده های منجمد'
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
                tag: 'فرآورده های منجمد'
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
                tag: 'آرایش چشم'
            },
            {
                id: 28,
                category_name : 'زیبایی و سلامت',
                name: 'ریمل لندن ',
                price: 200000,
                colors: ['مشکی'],
                qty: 1,
                stars: 4.3,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/fd290d2b246205e4b6f4a0a34d39c0b5ebeccf28_1614104742.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                tag: 'آرایش چشم'
            },
            {
                id: 29,
                category_name : 'زیبایی و سلامت',
                name: 'ریمل کالیستا ',
                price: 350000,
                colors: ['مشکی'],
                qty: 2,
                stars: 4.6,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/fd290d2b246205e4b6f4a0a34d39c0b5ebeccf28_1614104742.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                tag: 'آرایش چشم'
            },
            {
                id: 30,
                category_name : 'زیبایی و سلامت',
                name: 'ریمل اسنس ',
                price: 250000,
                colors: ['مشکی'],
                qty: 0,
                stars: 4.6,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/fd290d2b246205e4b6f4a0a34d39c0b5ebeccf28_1614104742.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
                tag: 'آرایش چشم'
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
                tag: 'مبل'
            },
            {
                id: 33,
                category_name : 'خانه و آشپزخانه',
                name: 'مبل راحتی 7 نفره مدل آرتان ',
                price: 15000000,
                colors: ['آبی','خاکستری', 'نقره ای', 'قرمز'],
                qty: 2,
                stars: 4.3,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/06de51dfd84a099ed3f8ae19b5abad601c119272_1653201178.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: false,
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
                tag: 'سازهای زهی'
            },
            {
                id: 37,
                category_name : 'کتاب، لوازم تحریر و هنر',
                name: 'سنتور قشلاقی ',
                price: 5290000,
                colors: ['قهوه ای'],
                qty: 2,
                stars: 4.3,
                discounted_price: '',
                gallery: [
                    'https://dkstatics-public.digikala.com/digikala-products/18aff49804e472e375d4178c45434683ac522df7_1670632755.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90'
                ],
                special_delivery: true,
                tag: 'سازهای زهی'
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
                tag: 'چادر'
            },
        ]
        commit('setProducts',products)
    }
}