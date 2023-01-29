// import axios from "axios";


export const state = () =>({
    categories: [],
    carouselData: []
})

export const mutations = {
    setCategories(state, categories) {
      state.categories = categories
    },
    setCarouselData(state, carouselData) {
        state.carouselData = carouselData
    }
}


export const actions = {
    async getCategories({ commit }) {
        // const {data: {link}} = await this.$axios.get('/someurl')
        const categories = [
            {
                id: 1,
                svg_path:'<path fill-rule="evenodd" d="M7 1h10a3 3 0 013 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V4a3 3 0 013-3zm0 2a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H7zm5 17a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>',
                img_url: 'https://dkstatics-public.digikala.com/digikala-categories/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1662362431.png',
                name: 'موبایل',
                products: [
                    {
                        title: 'برند های مختلف گوشی موبایل', subtitle: [
                            'گوشی اپل', 'گوشی سامسونگ', 'گوشی شیائومی', 'گوشی نوکیا', 'گوشی هواوی', 'گوشی آنر', 'گوشی موتورولا',
                            'گوشی جی پلاس', 'گوشی وان پلاس', 'گوشی جی ال ایکس', 'گوشی بلو', 'گوشی کاترپیلار', 'گوشی ویوو'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس قیمت', subtitle: [
                            'گوشی تا ۲ میلیون تومان', 'گوشی تا ۵ میلیون تومان', 'گوشی تا ۷ میلیون تومان', 'گوشی تا ۱۵ میلیون تومان', 'گوشی بالای ۱۵ میلیون تومان'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس حافظه داخلی', subtitle: [
                            'گوشی تا ۱۶ گیگابات', 'گوشی تا ۳۲ گیگابات', 'گوشی تا ۶۴ گیگابات', 'گوشی تا ۱۲۸ گیگابات', 'گوشی تا ۲۵۶ گیگابات', 'گوشی تا ۱ ترابایت'
                        ]
                    },
                    {
                        title: 'رزولوشن عکس', subtitle: [
                            'تا ۱۳ مگاپیکسل', 'تا ۱۶ مگاپیکسل', 'تا ۴۸ مگاپیکسل', 'تا ۶۴ مگاپیکسل', 'تا ۱۰۸ مگاپیکسل'
                        ]
                    },
                    {
                        title: 'گوشی براساس کاربری', subtitle: [
                            'گوشی اقتصادی', 'گوشی میان رده', 'گوشی دانش آموزی', 'گوشی گیمینگ', 'گوشی پرچمدار', 'گوشی ضدآب', 'گوشی مناسب عکاسی',
                            'گوشی 5G', 'دو سیم کارت', '(اندروید) Android', 'IOS', 'سایر سیستم عامل ها'
                        ]
                    },
                ]
            },
            {
                id: 2,
                svg_path:'<path fill-rule="evenodd" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v8.723l2.858 4.762A1 1 0 0122 20H2a1 1 0 01-.857-1.515L4 13.723V5zm2 8h12V6H6v7zm-.434 2l-1.8 3h16.468l-1.8-3H5.566z" clip-rule="evenodd"></path>',
                img_url: 'https://dkstatics-public.digikala.com/digikala-categories/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1662360265.png',
                name: 'کالای دیجیتال',
                products: [
                    {
                        title: 'برند های مختلف گوشی موبایل', subtitle: [
                            'گوشی اپل', 'گوشی سامسونگ', 'گوشی شیائومی', 'گوشی نوکیا', 'گوشی هواوی', 'گوشی آنر', 'گوشی موتورولا',
                            'گوشی جی پلاس', 'گوشی وان پلاس', 'گوشی جی ال ایکس', 'گوشی بلو', 'گوشی کاترپیلار', 'گوشی ویوو'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس قیمت', subtitle: [
                            'گوشی تا ۲ میلیون تومان', 'گوشی تا ۵ میلیون تومان', 'گوشی تا ۷ میلیون تومان', 'گوشی تا ۱۵ میلیون تومان', 'گوشی بالای ۱۵ میلیون تومان'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس حافظه داخلی', subtitle: [
                            'گوشی تا ۱۶ گیگابات', 'گوشی تا ۳۲ گیگابات', 'گوشی تا ۶۴ گیگابات', 'گوشی تا ۱۲۸ گیگابات', 'گوشی تا ۲۵۶ گیگابات', 'گوشی تا ۱ ترابایت'
                        ]
                    },
                    {
                        title: 'رزولوشن عکس', subtitle: [
                            'تا ۱۳ مگاپیکسل', 'تا ۱۶ مگاپیکسل', 'تا ۴۸ مگاپیکسل', 'تا ۶۴ مگاپیکسل', 'تا ۱۰۸ مگاپیکسل'
                        ]
                    },
                    {
                        title: 'گوشی براساس کاربری', subtitle: [
                            'گوشی اقتصادی', 'گوشی میان رده', 'گوشی دانش آموزی', 'گوشی گیمینگ', 'گوشی پرچمدار', 'گوشی ضدآب', 'گوشی مناسب عکاسی',
                            'گوشی 5G', 'دو سیم کارت', '(اندروید) Android', 'IOS', 'سایر سیستم عامل ها'
                        ]
                    },
                ]
            },
            {
                id: 3,
                svg_path:'<path fill-rule="evenodd" d="M21.207 16.793l-6.833-6.834A6.502 6.502 0 004.975 2.42 1 1 0 004.755 4l3.036 3.036a.5.5 0 11-.707.707L4.05 4.708a1 1 0 00-1.58.219 6.502 6.502 0 007.464 9.42l6.86 6.86a3.121 3.121 0 104.414-4.414zm-11.38-4.52A4.5 4.5 0 013.73 7.217l1.94 1.94a2.5 2.5 0 003.536-3.536l-1.94-1.94a4.503 4.503 0 015.032 6.152 1 1 0 00.215 1.093l7.28 7.28a1.121 1.121 0 01-1.586 1.586l-7.3-7.3a1 1 0 00-1.08-.22z" clip-rule="evenodd"></path>',
                img_url: 'https://dkstatics-public.digikala.com/digikala-categories/29dcb8556749524af521e23f63c13efe62a0db4a_1656160904.png',
                name: 'خودرو، ابزار و تجهیزات صنعتی',
                products: [
                    {
                        title: 'برند های مختلف گوشی موبایل', subtitle: [
                            'گوشی اپل', 'گوشی سامسونگ', 'گوشی شیائومی', 'گوشی نوکیا', 'گوشی هواوی', 'گوشی آنر', 'گوشی موتورولا',
                            'گوشی جی پلاس', 'گوشی وان پلاس', 'گوشی جی ال ایکس', 'گوشی بلو', 'گوشی کاترپیلار', 'گوشی ویوو'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس قیمت', subtitle: [
                            'گوشی تا ۲ میلیون تومان', 'گوشی تا ۵ میلیون تومان', 'گوشی تا ۷ میلیون تومان', 'گوشی تا ۱۵ میلیون تومان', 'گوشی بالای ۱۵ میلیون تومان'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس حافظه داخلی', subtitle: [
                            'گوشی تا ۱۶ گیگابات', 'گوشی تا ۳۲ گیگابات', 'گوشی تا ۶۴ گیگابات', 'گوشی تا ۱۲۸ گیگابات', 'گوشی تا ۲۵۶ گیگابات', 'گوشی تا ۱ ترابایت'
                        ]
                    },
                    {
                        title: 'رزولوشن عکس', subtitle: [
                            'تا ۱۳ مگاپیکسل', 'تا ۱۶ مگاپیکسل', 'تا ۴۸ مگاپیکسل', 'تا ۶۴ مگاپیکسل', 'تا ۱۰۸ مگاپیکسل'
                        ]
                    },
                    {
                        title: 'گوشی براساس کاربری', subtitle: [
                            'گوشی اقتصادی', 'گوشی میان رده', 'گوشی دانش آموزی', 'گوشی گیمینگ', 'گوشی پرچمدار', 'گوشی ضدآب', 'گوشی مناسب عکاسی',
                            'گوشی 5G', 'دو سیم کارت', '(اندروید) Android', 'IOS', 'سایر سیستم عامل ها'
                        ]
                    },
                ]
            },
            {
                id: 4,
                svg_path:'<path fill-rule="evenodd" d="M4.317 12.449L6 11.887V20a1 1 0 001 1h10a1 1 0 001-1v-8.113l1.684.562a1 1 0 001.23-.543l2-4.5a1 1 0 00-.542-1.334l-5-2A1 1 0 0017 4h-2a1 1 0 00-.993.883l-.011.273C13.93 6.234 13.196 7 12 7c-1.253 0-2-.84-2-2a1 1 0 00-1-1H7a1 1 0 00-.371.072l-5 2a1 1 0 00-.543 1.334l2 4.5a1 1 0 001.23.543zm-.981-4.906L7.193 6h.92l.05.19C8.622 7.821 10.038 9 12 9c2.037 0 3.485-1.271 3.887-3h.92l3.858 1.543-1.21 2.721-2.138-.713A1 1 0 0016 10.5V19H8v-8.5a1 1 0 00-1.316-.949l-2.139.713-1.21-2.721z" clip-rule="evenodd"></path>',
                img_url: 'https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png',
                name: 'مد و پوشاک',
                products: [
                    {
                        title: 'برند های مختلف گوشی موبایل', subtitle: [
                            'گوشی اپل', 'گوشی سامسونگ', 'گوشی شیائومی', 'گوشی نوکیا', 'گوشی هواوی', 'گوشی آنر', 'گوشی موتورولا',
                            'گوشی جی پلاس', 'گوشی وان پلاس', 'گوشی جی ال ایکس', 'گوشی بلو', 'گوشی کاترپیلار', 'گوشی ویوو'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس قیمت', subtitle: [
                            'گوشی تا ۲ میلیون تومان', 'گوشی تا ۵ میلیون تومان', 'گوشی تا ۷ میلیون تومان', 'گوشی تا ۱۵ میلیون تومان', 'گوشی بالای ۱۵ میلیون تومان'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس حافظه داخلی', subtitle: [
                            'گوشی تا ۱۶ گیگابات', 'گوشی تا ۳۲ گیگابات', 'گوشی تا ۶۴ گیگابات', 'گوشی تا ۱۲۸ گیگابات', 'گوشی تا ۲۵۶ گیگابات', 'گوشی تا ۱ ترابایت'
                        ]
                    },
                    {
                        title: 'رزولوشن عکس', subtitle: [
                            'تا ۱۳ مگاپیکسل', 'تا ۱۶ مگاپیکسل', 'تا ۴۸ مگاپیکسل', 'تا ۶۴ مگاپیکسل', 'تا ۱۰۸ مگاپیکسل'
                        ]
                    },
                    {
                        title: 'گوشی براساس کاربری', subtitle: [
                            'گوشی اقتصادی', 'گوشی میان رده', 'گوشی دانش آموزی', 'گوشی گیمینگ', 'گوشی پرچمدار', 'گوشی ضدآب', 'گوشی مناسب عکاسی',
                            'گوشی 5G', 'دو سیم کارت', '(اندروید) Android', 'IOS', 'سایر سیستم عامل ها'
                        ]
                    },
                ]
            },
            {
                id: 5,
                svg_path:'<path fill-rule="evenodd" d="M18 4a2 2 0 00-2-2h-3a2 2 0 00-2 2v1.535a4.007 4.007 0 00-1.874 2.467A5.108 5.108 0 009 8l-.217.005A5 5 0 004 13H3a1 1 0 00-.99 1.141l1 7A1 1 0 004 22h16a1 1 0 00.99-.859l1-7A1 1 0 0021 13h-1V9l-.007-.232a4 4 0 00-1.992-3.232L18 4zM4.867 20l-.714-5h15.694l-.714 5H4.867zM16 7h-3a2 2 0 00-1.924 1.45 5.003 5.003 0 012.919 4.318L14 13h4V9a2 2 0 00-1.85-1.995L16 7zm-9.995 5.824A3 3 0 0112 13H6l.005-.176zM16 4h-3v1h3V4zm-1 14v-2H9v2h6z" clip-rule="evenodd"></path>',
                img_url: 'https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png',
                name: 'کالاهای سوپرمارکتی',
                products: [
                    {
                        title: 'برند های مختلف گوشی موبایل', subtitle: [
                            'گوشی اپل', 'گوشی سامسونگ', 'گوشی شیائومی', 'گوشی نوکیا', 'گوشی هواوی', 'گوشی آنر', 'گوشی موتورولا',
                            'گوشی جی پلاس', 'گوشی وان پلاس', 'گوشی جی ال ایکس', 'گوشی بلو', 'گوشی کاترپیلار', 'گوشی ویوو'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس قیمت', subtitle: [
                            'گوشی تا ۲ میلیون تومان', 'گوشی تا ۵ میلیون تومان', 'گوشی تا ۷ میلیون تومان', 'گوشی تا ۱۵ میلیون تومان', 'گوشی بالای ۱۵ میلیون تومان'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس حافظه داخلی', subtitle: [
                            'گوشی تا ۱۶ گیگابات', 'گوشی تا ۳۲ گیگابات', 'گوشی تا ۶۴ گیگابات', 'گوشی تا ۱۲۸ گیگابات', 'گوشی تا ۲۵۶ گیگابات', 'گوشی تا ۱ ترابایت'
                        ]
                    },
                    {
                        title: 'رزولوشن عکس', subtitle: [
                            'تا ۱۳ مگاپیکسل', 'تا ۱۶ مگاپیکسل', 'تا ۴۸ مگاپیکسل', 'تا ۶۴ مگاپیکسل', 'تا ۱۰۸ مگاپیکسل'
                        ]
                    },
                    {
                        title: 'گوشی براساس کاربری', subtitle: [
                            'گوشی اقتصادی', 'گوشی میان رده', 'گوشی دانش آموزی', 'گوشی گیمینگ', 'گوشی پرچمدار', 'گوشی ضدآب', 'گوشی مناسب عکاسی',
                            'گوشی 5G', 'دو سیم کارت', '(اندروید) Android', 'IOS', 'سایر سیستم عامل ها'
                        ]
                    },
                ]
            },
            {
                id: 6,
                svg_path:'<path d="M15.5 1v3l-3 3V4l3-3zM11.5 9v2.984L8.5 9v3l3 3v8.005L7 23l-.5-1C8 22 9 21.395 9 20c0-1.6-1.12-2.72-2.464-4.064C4.52 13.92 2 11.4 2 6h6.5l3 3zM12.5 9v2.984L15.5 9v3l-3 3v8.005L17 23l.5-1C16 22 15 20.895 15 19.5c0-1.6 1.12-2.64 2.464-3.888C19.48 13.74 22 11.4 22 6h-6.5l-3 3zM8.5 4V1l3 3v3l-3-3z"></path>',
                img_url: 'https://dkstatics-public.digikala.com/digikala-categories/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png',
                name: 'محصولات بومی و محلی',
                products: [
                    {
                        title: 'برند های مختلف گوشی موبایل', subtitle: [
                            'گوشی اپل', 'گوشی سامسونگ', 'گوشی شیائومی', 'گوشی نوکیا', 'گوشی هواوی', 'گوشی آنر', 'گوشی موتورولا',
                            'گوشی جی پلاس', 'گوشی وان پلاس', 'گوشی جی ال ایکس', 'گوشی بلو', 'گوشی کاترپیلار', 'گوشی ویوو'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس قیمت', subtitle: [
                            'گوشی تا ۲ میلیون تومان', 'گوشی تا ۵ میلیون تومان', 'گوشی تا ۷ میلیون تومان', 'گوشی تا ۱۵ میلیون تومان', 'گوشی بالای ۱۵ میلیون تومان'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس حافظه داخلی', subtitle: [
                            'گوشی تا ۱۶ گیگابات', 'گوشی تا ۳۲ گیگابات', 'گوشی تا ۶۴ گیگابات', 'گوشی تا ۱۲۸ گیگابات', 'گوشی تا ۲۵۶ گیگابات', 'گوشی تا ۱ ترابایت'
                        ]
                    },
                    {
                        title: 'رزولوشن عکس', subtitle: [
                            'تا ۱۳ مگاپیکسل', 'تا ۱۶ مگاپیکسل', 'تا ۴۸ مگاپیکسل', 'تا ۶۴ مگاپیکسل', 'تا ۱۰۸ مگاپیکسل'
                        ]
                    },
                    {
                        title: 'گوشی براساس کاربری', subtitle: [
                            'گوشی اقتصادی', 'گوشی میان رده', 'گوشی دانش آموزی', 'گوشی گیمینگ', 'گوشی پرچمدار', 'گوشی ضدآب', 'گوشی مناسب عکاسی',
                            'گوشی 5G', 'دو سیم کارت', '(اندروید) Android', 'IOS', 'سایر سیستم عامل ها'
                        ]
                    },
                ]
            },
            {
                id: 7,
                svg_path:'<path fill-rule="evenodd" d="M11.817 4.5a3.5 3.5 0 103.5-3.5 1 1 0 100 2 1.5 1.5 0 11-1.5 1.5 1 1 0 10-2 0zM1 14.5A3.5 3.5 0 004.5 18h.015A8.993 8.993 0 0012 22a8.993 8.993 0 007.485-4h.015a3.5 3.5 0 001.332-6.738 8.954 8.954 0 00-1.4-3.339 1 1 0 10-1.65 1.13 6.955 6.955 0 011.168 3.105 1 1 0 00.817.866 1.5 1.5 0 11-.59 2.941 1 1 0 00-1.084.484A6.996 6.996 0 0112 20a6.996 6.996 0 01-6.093-3.551 1 1 0 00-1.084-.484 1.5 1.5 0 11-.59-2.942 1 1 0 00.817-.865A7.008 7.008 0 019.807 6.35a1 1 0 00-.626-1.9 9.012 9.012 0 00-6.013 6.812A3.502 3.502 0 001 14.5zm10-4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 18a4.997 4.997 0 01-4.307-2.459 1 1 0 011.722-1.017A2.997 2.997 0 0012 16a2.998 2.998 0 002.59-1.485 1 1 0 011.725 1.012A4.997 4.997 0 0112 18z" clip-rule="evenodd"></path>',
                img_url: 'https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png',
                name: 'اسباب بازی، کودک و نوزاد',
                products: [
                    {
                        title: 'برند های مختلف گوشی موبایل', subtitle: [
                            'گوشی اپل', 'گوشی سامسونگ', 'گوشی شیائومی', 'گوشی نوکیا', 'گوشی هواوی', 'گوشی آنر', 'گوشی موتورولا',
                            'گوشی جی پلاس', 'گوشی وان پلاس', 'گوشی جی ال ایکس', 'گوشی بلو', 'گوشی کاترپیلار', 'گوشی ویوو'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس قیمت', subtitle: [
                            'گوشی تا ۲ میلیون تومان', 'گوشی تا ۵ میلیون تومان', 'گوشی تا ۷ میلیون تومان', 'گوشی تا ۱۵ میلیون تومان', 'گوشی بالای ۱۵ میلیون تومان'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس حافظه داخلی', subtitle: [
                            'گوشی تا ۱۶ گیگابات', 'گوشی تا ۳۲ گیگابات', 'گوشی تا ۶۴ گیگابات', 'گوشی تا ۱۲۸ گیگابات', 'گوشی تا ۲۵۶ گیگابات', 'گوشی تا ۱ ترابایت'
                        ]
                    },
                    {
                        title: 'رزولوشن عکس', subtitle: [
                            'تا ۱۳ مگاپیکسل', 'تا ۱۶ مگاپیکسل', 'تا ۴۸ مگاپیکسل', 'تا ۶۴ مگاپیکسل', 'تا ۱۰۸ مگاپیکسل'
                        ]
                    },
                    {
                        title: 'گوشی براساس کاربری', subtitle: [
                            'گوشی اقتصادی', 'گوشی میان رده', 'گوشی دانش آموزی', 'گوشی گیمینگ', 'گوشی پرچمدار', 'گوشی ضدآب', 'گوشی مناسب عکاسی',
                            'گوشی 5G', 'دو سیم کارت', '(اندروید) Android', 'IOS', 'سایر سیستم عامل ها'
                        ]
                    },
                ]
            },
            {
                id: 8,
                svg_path:'<path fill-rule="evenodd" d="M16.05 3.25c3.277 0 5.95 2.568 5.95 5.757a5.622 5.622 0 01-1.32 3.616c-.63.755-3.262 3.505-7.964 8.325a1 1 0 01-1.434-.002c-4.639-4.784-7.247-7.506-7.87-8.215A5.627 5.627 0 012 9.007C2 5.818 4.673 3.25 7.95 3.25c1.53 0 2.967.564 4.05 1.539a6.048 6.048 0 014.05-1.539zm3.095 8.091c.552-.66.855-1.475.855-2.334 0-2.066-1.76-3.757-3.95-3.757-1.312 0-2.51.611-3.243 1.612a1 1 0 01-1.614 0C10.46 5.861 9.261 5.25 7.95 5.25 5.76 5.25 4 6.941 4 9.007c0 .891.326 1.733.916 2.405.557.635 2.932 3.117 7.086 7.403 4.194-4.304 6.594-6.817 7.143-7.474zm-10.352.452a1 1 0 011.414 0L12 13.586l4.793-4.793a1 1 0 111.414 1.414l-5.5 5.5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 010-1.414z" clip-rule="evenodd"></path>',
                img_url: 'https://dkstatics-public.digikala.com/digikala-categories/0cefa48f5c58adbbde8c5a76b22ee49de0e667f5_1656161101.png',
                name: 'زیبایی و سلامت',
                products: [
                    {
                        title: 'برند های مختلف گوشی موبایل', subtitle: [
                            'گوشی اپل', 'گوشی سامسونگ', 'گوشی شیائومی', 'گوشی نوکیا', 'گوشی هواوی', 'گوشی آنر', 'گوشی موتورولا',
                            'گوشی جی پلاس', 'گوشی وان پلاس', 'گوشی جی ال ایکس', 'گوشی بلو', 'گوشی کاترپیلار', 'گوشی ویوو'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس قیمت', subtitle: [
                            'گوشی تا ۲ میلیون تومان', 'گوشی تا ۵ میلیون تومان', 'گوشی تا ۷ میلیون تومان', 'گوشی تا ۱۵ میلیون تومان', 'گوشی بالای ۱۵ میلیون تومان'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس حافظه داخلی', subtitle: [
                            'گوشی تا ۱۶ گیگابات', 'گوشی تا ۳۲ گیگابات', 'گوشی تا ۶۴ گیگابات', 'گوشی تا ۱۲۸ گیگابات', 'گوشی تا ۲۵۶ گیگابات', 'گوشی تا ۱ ترابایت'
                        ]
                    },
                    {
                        title: 'رزولوشن عکس', subtitle: [
                            'تا ۱۳ مگاپیکسل', 'تا ۱۶ مگاپیکسل', 'تا ۴۸ مگاپیکسل', 'تا ۶۴ مگاپیکسل', 'تا ۱۰۸ مگاپیکسل'
                        ]
                    },
                    {
                        title: 'گوشی براساس کاربری', subtitle: [
                            'گوشی اقتصادی', 'گوشی میان رده', 'گوشی دانش آموزی', 'گوشی گیمینگ', 'گوشی پرچمدار', 'گوشی ضدآب', 'گوشی مناسب عکاسی',
                            'گوشی 5G', 'دو سیم کارت', '(اندروید) Android', 'IOS', 'سایر سیستم عامل ها'
                        ]
                    },
                ]
            },
            {
                id: 9,
                svg_path:'<path fill-rule="evenodd" d="M7 3h10c1.56 0 2.898 1.066 2.994 2.5l.006.167v2.869a3.5 3.5 0 011.001 6.627L21 18a2 2 0 01-2 2v1h-2v-1H7v1H5v-1a2 2 0 01-2-2v-2.837a3.5 3.5 0 011-6.628V5.667c0-1.461 1.28-2.581 2.821-2.662L7 3zm1 11h8v-2l.005-.192A3.501 3.501 0 0118 8.837v-3.17c0-.3-.35-.614-.867-.661L17 5H7c-.543 0-.936.292-.993.592L6 5.667l.001 3.17A3.5 3.5 0 018 12v2zm-5-2a1.5 1.5 0 013 0v3a1 1 0 001 1h10a1 1 0 001-1v-3l.007-.145A1.5 1.5 0 0121 12l-.007.145A1.5 1.5 0 0119.5 13.5H19V18H5v-4.5h-.5A1.5 1.5 0 013 12z" clip-rule="evenodd"></path>',
                img_url: 'https://dkstatics-public.digikala.com/digikala-categories/0c3cc1cb589df1c74c4ad95a742bb6df967956a8_1656161119.png',
                name: 'خانه و آشپزخانه',
                products: [
                    {
                        title: 'برند های مختلف گوشی موبایل', subtitle: [
                            'گوشی اپل', 'گوشی سامسونگ', 'گوشی شیائومی', 'گوشی نوکیا', 'گوشی هواوی', 'گوشی آنر', 'گوشی موتورولا',
                            'گوشی جی پلاس', 'گوشی وان پلاس', 'گوشی جی ال ایکس', 'گوشی بلو', 'گوشی کاترپیلار', 'گوشی ویوو'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس قیمت', subtitle: [
                            'گوشی تا ۲ میلیون تومان', 'گوشی تا ۵ میلیون تومان', 'گوشی تا ۷ میلیون تومان', 'گوشی تا ۱۵ میلیون تومان', 'گوشی بالای ۱۵ میلیون تومان'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس حافظه داخلی', subtitle: [
                            'گوشی تا ۱۶ گیگابات', 'گوشی تا ۳۲ گیگابات', 'گوشی تا ۶۴ گیگابات', 'گوشی تا ۱۲۸ گیگابات', 'گوشی تا ۲۵۶ گیگابات', 'گوشی تا ۱ ترابایت'
                        ]
                    },
                    {
                        title: 'رزولوشن عکس', subtitle: [
                            'تا ۱۳ مگاپیکسل', 'تا ۱۶ مگاپیکسل', 'تا ۴۸ مگاپیکسل', 'تا ۶۴ مگاپیکسل', 'تا ۱۰۸ مگاپیکسل'
                        ]
                    },
                    {
                        title: 'گوشی براساس کاربری', subtitle: [
                            'گوشی اقتصادی', 'گوشی میان رده', 'گوشی دانش آموزی', 'گوشی گیمینگ', 'گوشی پرچمدار', 'گوشی ضدآب', 'گوشی مناسب عکاسی',
                            'گوشی 5G', 'دو سیم کارت', '(اندروید) Android', 'IOS', 'سایر سیستم عامل ها'
                        ]
                    },
                ]
            },
            {
                id: 10,
                svg_path:'<path fill-rule="evenodd" d="M6.293 6.793L5 8.086 3.414 6.5 6.5 3.414 11.086 8 8 11.086 6.414 9.5l1.293-1.293a1 1 0 00-1.414-1.414zm-5 .414L6.586 12.5l-3.28 3.28a.994.994 0 00-.275.474l-1.496 5.483a1 1 0 001.228 1.228l5.483-1.496a.993.993 0 00.474-.274l3.28-3.28 5.293 5.292a1 1 0 001.414 0l4.5-4.5a1 1 0 000-1.414L17.914 12l3.879-3.879a3 3 0 000-4.242L20.62 2.707a3 3 0 00-4.242 0L12.5 6.586 7.207 1.293a1 1 0 00-1.414 0l-4.5 4.5a1 1 0 000 1.414zM6.074 19.99l-1.563-1.563-.586 2.149 2.15-.586zM15.5 6.414L18.086 9 8 19.086 5.414 16.5 15.5 6.414zm4 1.172L16.914 5l.879-.879a1 1 0 011.414 0l1.172 1.172a1 1 0 010 1.414l-.879.879zm-4.5 10.5L13.414 16.5l3.086-3.086L21.086 18 18 21.086 16.414 19.5l1.293-1.293a1 1 0 00-1.414-1.414L15 18.086z" clip-rule="evenodd"></path>',
                img_url: 'https://dkstatics-public.digikala.com/digikala-categories/3582bbed0a53318c2332d2c79b051b226f02a3bb_1656161134.png',
                name: 'کتاب، لوازم تحریر و هنر',
                products: [
                    {
                        title: 'برند های مختلف گوشی موبایل', subtitle: [
                            'گوشی اپل', 'گوشی سامسونگ', 'گوشی شیائومی', 'گوشی نوکیا', 'گوشی هواوی', 'گوشی آنر', 'گوشی موتورولا',
                            'گوشی جی پلاس', 'گوشی وان پلاس', 'گوشی جی ال ایکس', 'گوشی بلو', 'گوشی کاترپیلار', 'گوشی ویوو'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس قیمت', subtitle: [
                            'گوشی تا ۲ میلیون تومان', 'گوشی تا ۵ میلیون تومان', 'گوشی تا ۷ میلیون تومان', 'گوشی تا ۱۵ میلیون تومان', 'گوشی بالای ۱۵ میلیون تومان'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس حافظه داخلی', subtitle: [
                            'گوشی تا ۱۶ گیگابات', 'گوشی تا ۳۲ گیگابات', 'گوشی تا ۶۴ گیگابات', 'گوشی تا ۱۲۸ گیگابات', 'گوشی تا ۲۵۶ گیگابات', 'گوشی تا ۱ ترابایت'
                        ]
                    },
                    {
                        title: 'رزولوشن عکس', subtitle: [
                            'تا ۱۳ مگاپیکسل', 'تا ۱۶ مگاپیکسل', 'تا ۴۸ مگاپیکسل', 'تا ۶۴ مگاپیکسل', 'تا ۱۰۸ مگاپیکسل'
                        ]
                    },
                    {
                        title: 'گوشی براساس کاربری', subtitle: [
                            'گوشی اقتصادی', 'گوشی میان رده', 'گوشی دانش آموزی', 'گوشی گیمینگ', 'گوشی پرچمدار', 'گوشی ضدآب', 'گوشی مناسب عکاسی',
                            'گوشی 5G', 'دو سیم کارت', '(اندروید) Android', 'IOS', 'سایر سیستم عامل ها'
                        ]
                    },
                ]
            },
            {
                id: 11,
                svg_path:'<path fill-rule="evenodd" d="M12 5.197l1.168-1.752a1 1 0 111.664 1.11L13.202 7l7.63 11.445c.022.034.042.068.06.103.628.148 1.255.311 1.883.49a1 1 0 11-.55 1.924C18.814 19.986 15.406 19.5 12 19.5c-3.406 0-6.814.487-10.225 1.462a1 1 0 01-.55-1.924c.628-.179 1.255-.342 1.883-.49.018-.035.038-.07.06-.103L10.798 7l-1.63-2.445a1 1 0 111.664-1.11L12 5.197zm-6.13 12.8c.897-.145 1.794-.259 2.69-.34.024-.064.054-.127.092-.187l2.5-4a1 1 0 011.696 0l2.5 4c.038.06.068.123.091.187.898.081 1.794.195 2.691.34L12 8.804l-6.13 9.195zm7.147-.483L12 15.887l-1.017 1.627a37.471 37.471 0 012.034 0z" clip-rule="evenodd"></path>',
                img_url: 'https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png',
                name: 'ورزش و سفر',
                products: [
                    {
                        title: 'برند های مختلف گوشی موبایل', subtitle: [
                            'گوشی اپل', 'گوشی سامسونگ', 'گوشی شیائومی', 'گوشی نوکیا', 'گوشی هواوی', 'گوشی آنر', 'گوشی موتورولا',
                            'گوشی جی پلاس', 'گوشی وان پلاس', 'گوشی جی ال ایکس', 'گوشی بلو', 'گوشی کاترپیلار', 'گوشی ویوو'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس قیمت', subtitle: [
                            'گوشی تا ۲ میلیون تومان', 'گوشی تا ۵ میلیون تومان', 'گوشی تا ۷ میلیون تومان', 'گوشی تا ۱۵ میلیون تومان', 'گوشی بالای ۱۵ میلیون تومان'
                        ]
                    },
                    {
                        title: 'گوشی بر اساس حافظه داخلی', subtitle: [
                            'گوشی تا ۱۶ گیگابات', 'گوشی تا ۳۲ گیگابات', 'گوشی تا ۶۴ گیگابات', 'گوشی تا ۱۲۸ گیگابات', 'گوشی تا ۲۵۶ گیگابات', 'گوشی تا ۱ ترابایت'
                        ]
                    },
                    {
                        title: 'رزولوشن عکس', subtitle: [
                            'تا ۱۳ مگاپیکسل', 'تا ۱۶ مگاپیکسل', 'تا ۴۸ مگاپیکسل', 'تا ۶۴ مگاپیکسل', 'تا ۱۰۸ مگاپیکسل'
                        ]
                    },
                    {
                        title: 'گوشی براساس کاربری', subtitle: [
                            'گوشی اقتصادی', 'گوشی میان رده', 'گوشی دانش آموزی', 'گوشی گیمینگ', 'گوشی پرچمدار', 'گوشی ضدآب', 'گوشی مناسب عکاسی',
                            'گوشی 5G', 'دو سیم کارت', '(اندروید) Android', 'IOS', 'سایر سیستم عامل ها'
                        ]
                    },
                ]
            }
            
        ]
        commit('setCategories',categories)
        const carouselData = [
            {
                id : 9,
                img_url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/aba9343a3d3f58f84911bd41962ab36fdd50566b_1674896164.jpg?x-oss-process=image/quality,q_95'
            },
            {
                id: 1,
                img_url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/373d17aaed831fade693a91c51e015146f1748ff_1674843034.jpg?x-oss-process=image/quality,q_95'
            },
            {
                id: 2,
                img_url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/fc2203391992497462569f0f64b3e165e9faee33_1674851447.jpg?x-oss-process=image/quality,q_95'
            },
            {
                id: 4,
                img_url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/ccdbe89a141a0c2d5e0d480bd1e8a1ad5439e07b_1674851795.jpg?x-oss-process=image/quality,q_95'
            },
            {
                id: 8,
                img_url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/27e4190beeb21d60d911a17dc1014956176df902_1674853156.jpg?x-oss-process=image/quality,q_95'
            },
            {
                id: 5,
                img_url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/7a83dbcb7966aed6c4bba7e9f881a4101e9d6d63_1674657120.jpg?x-oss-process=image/quality,q_95'
            },
            {
                id: 3,
                img_url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/a376b92314e4f67700de7a38c79862820b1aa364_1674853442.jpg?x-oss-process=image/quality,q_95'
            },
            {
                id: 11,
                img_url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/328f61af8c1835396c572158fb3fd9bb5c40317d_1674853814.jpg?x-oss-process=image/quality,q_95'
            },
            {
                id: 10,
                img_url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/0b594d9d8c18f441c949348fc94597c3837a608b_1674852969.jpg?x-oss-process=image/quality,q_95'
            }
        ]
        commit('setCarouselData',carouselData)
    },
}  
