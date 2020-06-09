const product = [
    {
        id: "00001",
        name: "Koon Tong Sofa L-Shape",
        description: "Koon Tong Sofa L-Shape สี Wheat - หนังแท้ทั้งตัว ฐานเป็นหนังเทียม - 210ซม",
        specification: [
            "โซฟาขายดีอันดับ 1 ที่ญี่ปุ่น",
            "โซฟาที่คิดมาแล้วว่าเหมาะสมกับสรีระของคนเอเซีย",
            "มี 2 ขนาด",
            "กว้าง 210 x ลึก 150cm x สูง 76cm"
        ],
        image: "../assets/products/00001.jpg",
        price: 30000,
        unit: "Each",
        soldNumber: 112,
        stockNumber: 0,
        star: 4,
        favorite: false
    },
    {
        id: "00002",
        name: "Hatori Sofa",
        description: "โซฟาฐานไม้จริงพร้อมเบาะครบชุด - รุ่นฮาโตริ 2 ที่นั่ง ผ้า เบาะหลากสีและฐานไม้สีธรรมชาติเคล",
        specification: [
            "ปรับเป็นเตียงนอนได้",
            "โครงไม้โอ๊คแท้"
        ], 
        image: "../assets/products/00002.jpg",
        price: 16000,
        unit: "Each",
        soldNumber: 18,
        stockNumber: 53,
        star: 3,
        favorite: false
    },
    {
        id: "00003",
        name: "Ar L Shape Sofa",
        description: "AR L SHAPE SOFA ตัวเบดยื่นตามรูป โอรสอ่อน",
        specification: [
            "วัสดุหุ้มบุ ด้วยผ้าลายหนัง",
            "ปุ่มปรับระดับแบบบีบปล่อยใช้ง่ายต่อการปรับ บีบและเอนหลัง",
            "ขาแบบสแตนเลส หมุนได้ 360 องศา",
            "รับน้ำหนักได้สูงสุด 120kgs"
        ], 
        image: "../assets/products/00003.jpg",
        price: 23300,
        unit: "Each",
        soldNumber: 49,
        stockNumber: 4,
        star: 5,
        favorite: false,
        specification: [] 
    },
    {
        id: "00004",
        name: "Emu Armchair",
        description: "ฌ เฌอ อาร์มแชร์ อีมู (Emu Armchair) 1 ที่นั่ง ขนาด 90 ซม. เบาะหนังแท้ พนักพิงผ้าเลือกสีได้",
        specification: [
            "ผลิตจาไม้โอ๊คแท้ 100% รับประกันความแข็งแรง",
            "เคลือบโพลียูรีเทนใสกึ่งด้าน กันน้ำ กันรา",
            "ผ้ากันไรฝุ่น ทำความสะอาดง่าย ถอดซักไม่ได้"
        ], 
        image: "../assets/products/00004.png",
        price: 32000,
        unit: "Each",
        soldNumber: 32,
        stockNumber: 9,
        star: 4,
        favorite: false,
        specification: [] 
    },
    {
        id: "00005",
        name: "Dory Sofa",
        description: "โซฟา DORY SOFA เตียงโซฟา ผ้า สีไม้ยางพาราธรรมชาติ (160x77x79 Cm)",
        specification: [
            "ผลิตจากไม้โอ๊คแท้ 100% รับประกันความแข็งแรง",
            "เคลือบโพลียูรีเทนใสกึ่งด้าน กันน้ำ กันรา",
            "เบาะผลิตจากฟองน้ำเกรดดีที่สุด"
        ], 
        image: "../assets/products/00005.jpg",
        price: 19800,
        unit: "Each",
        soldNumber: 78,
        stockNumber: 12,
        star: 5,
        favorite: false 
    },
    {
        id: "00006",
        name: "Richmond Stereo Sofa",
        description: "ริชมอนด์สเตอริโอ เตียงโซฟา ผ้า เทา",
        specification: [
            "ขนาด | กว้าง 50.5 cm. : ลึก 60 cm. : สูง 75.5 cm.",
            "1 Design 2 Countries | วางจำหน่ายทั้งในประเทศไทยและประเทศญี่ปุ่น",
            "สามารถใช้เป็นโซฟาเดี่ยว 1 ที่นั่ง หรือใช้เป็นเก้าอี้ทานข้าวในชุดอาหาร"
        ], 
        image: "../assets/products/00006.jpg",
        price: 36900,
        unit: "Each",
        soldNumber: 55,
        stockNumber: 45,
        star: 4,
        favorite: false
    },
    {
        id: "00007",
        name: "Muki",
        description: "ชุด Muki เทา ผ้า ไม้เบญจพรรณ เทา",
        specification: [
            "ที่นั่ง Pocket Spring เสริมความนุ่มเด้ง"
        ], 
        image: "../assets/products/00007.png",
        price: 12200,
        unit: "Each",
        soldNumber: 80,
        stockNumber: 28,
        star: 4,
        favorite: false
    },
    {
        id: "00008",
        name: "Muffin Sofa",
        description: "เก้าอี้ไม้แอชแท้ รุ่น Muffin Sofa สีเบาะเลือกได้",
        specification: [
            "โซฟา 3 ที่นั่ง ผลิตจากไม้ยางพาราและเคลือบแลคเกอร์ทั้งตัว",
            "พร้อมเบาะรองนั่งและหมอนอิงใหญ่ 3 ใบ ถอดซักได้ทุกชิ้น",
            "สีผ้าเบาะและหมอนอิงสามารถเลือกได้ 10 สี"
        ], 
        image: "../assets/products/00008.jpg",
        price: 5600,
        unit: "Each",
        soldNumber: 87,
        stockNumber: 3,
        star: 2,
        favorite: false 
    },
    {
        id: "00009",
        name: "Crepe Sofa",
        description: "โซฟาไม้โอ๊คแท้ รุ่น Crepe Sofa แถมฟรี หมอนอิง 1 ใบ สีเบาะหลากหลาย",
        specification: [
            "โครงไม้จริง",
            "ฟองน้ำเกรดเอ"
        ], 
        image: "../assets/products/00009.jpg",
        price: 8200,
        unit: "Each",
        soldNumber: 37,
        stockNumber: 21,
        star: 5,
        favorite: false 
    }
]

const recommendedProducts = [
    {
        id: "00002",
        name: "Hatori Sofa",
        description: "โซฟาฐานไม้จริงพร้อมเบาะครบชุด - รุ่นฮาโตริ 2 ที่นั่ง ผ้า เบาะหลากสีและฐานไม้สีธรรมชาติเคล",
        specification: [
            "ปรับเป็นเตียงนอนได้",
            "โครงไม้โอ๊คแท้"
        ], 
        image: "../assets/products/00002.jpg",
        price: 16000,
        unit: "Each",
        soldNumber: 18,
        stockNumber: 53,
        star: 3,
        favorite: false 
    },
    {
        id: "00005",
        name: "Dory Sofa",
        description: "โซฟา DORY SOFA เตียงโซฟา ผ้า สีไม้ยางพาราธรรมชาติ (160x77x79 Cm)",
        specification: [
            "ผลิตจากไม้โอ๊คแท้ 100% รับประกันความแข็งแรง",
            "เคลือบโพลียูรีเทนใสกึ่งด้าน กันน้ำ กันรา",
            "เบาะผลิตจากฟองน้ำเกรดดีที่สุด"
        ], 
        image: "../assets/products/00005.jpg",
        price: 19800,
        unit: "Each",
        soldNumber: 78,
        stockNumber: 12,
        star: 5,
        favorite: false 
    },
    {
        id: "00008",
        name: "Muffin Sofa",
        description: "เก้าอี้ไม้แอชแท้ รุ่น Muffin Sofa สีเบาะเลือกได้",
        specification: [
            "โซฟา 3 ที่นั่ง ผลิตจากไม้ยางพาราและเคลือบแลคเกอร์ทั้งตัว",
            "พร้อมเบาะรองนั่งและหมอนอิงใหญ่ 3 ใบ ถอดซักได้ทุกชิ้น",
            "สีผ้าเบาะและหมอนอิงสามารถเลือกได้ 10 สี"
        ], 
        image: "../assets/products/00008.jpg",
        price: 5600,
        unit: "Each",
        soldNumber: 87,
        stockNumber: 3,
        star: 2,
        favorite: false 
    }
]

export const state = () => ({
    products: product,
    recommendedProducts: recommendedProducts
})

export const mutations = {
    favorite(state, id) {
        const indexProd = state.products.findIndex(product => product.id === id);
        const indexRecProd = state.recommendedProducts.findIndex(product => product.id === id);

        if (indexProd !== -1) state.products[indexProd].favorite = !state.products[indexProd].favorite
        if (indexRecProd !== -1) state.recommendedProducts[indexRecProd].favorite = !state.recommendedProducts[indexRecProd].favorite
    }
}