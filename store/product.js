const product = [
    {
        id: "00001",
        name: "Koon Tong Sofa L-Shape",
        description: "Koon Tong Sofa L-Shape สี Wheat - หนังแท้ทั้งตัว ฐานเป็นหนังเทียม - 210ซม",
        image: "../assets/images/00001.jpg",
        price: 30000,
        unit: "Each",
        soldAmount: 112,
        inStock: true,
        star: 4,
        favorite: false
    },
    {
        id: "00002",
        name: "Hatori Sofa",
        description: "โซฟาฐานไม้จริงพร้อมเบาะครบชุด - รุ่นฮาโตริ 2 ที่นั่ง ผ้า เบาะหลากสีและฐานไม้สีธรรมชาติเคล",
        image: "../assets/images/00002.jpg",
        price: 16000,
        unit: "Each",
        soldAmount: 18,
        inStock: true,
        star: 3,
        favorite: false 
    },
    {
        id: "00003",
        name: "Ar L Shape Sofa",
        description: "AR L SHAPE SOFA ตัวเบดยื่นตามรูป โอรสอ่อน",
        image: "../assets/images/00003.jpg",
        price: 23300,
        unit: "Each",
        soldAmount: 49,
        inStock: true,
        star: 5,
        favorite: false
    },
    {
        id: "00004",
        name: "Emu Armchair",
        description: "ฌ เฌอ อาร์มแชร์ อีมู (Emu Armchair) 1 ที่นั่ง ขนาด 90 ซม. เบาะหนังแท้ พนักพิงผ้าเลือกสีได้",
        image: "../assets/images/00004.png",
        price: 32000,
        unit: "Each",
        soldAmount: 32,
        inStock: true,
        star: 4,
        favorite: false
    },
    {
        id: "00005",
        name: "Dory Sofa",
        description: "โซฟา DORY SOFA เตียงโซฟา ผ้า สีไม้ยางพาราธรรมชาติ (160x77x79 Cm)",
        image: "../assets/images/00005.jpg",
        price: 19800,
        unit: "Each",
        soldAmount: 78,
        inStock: true,
        star: 5,
        favorite: false 
    },
    {
        id: "00006",
        name: "Richmond Stereo Sofa",
        description: "ริชมอนด์สเตอริโอ เตียงโซฟา ผ้า เทา",
        image: "../assets/images/00006.jpg",
        price: 36900,
        unit: "Each",
        soldAmount: 55,
        inStock: true,
        star: 4,
        favorite: false
    },
    {
        id: "00007",
        name: "Muki",
        description: "ชุด Muki เทา ผ้า ไม้เบญจพรรณ เทา",
        image: "../assets/images/00007.png",
        price: 12200,
        unit: "Each",
        soldAmount: 80,
        inStock: true,
        star: 4,
        favorite: false
    }
]

export const state = () => ({
    products: product
})

export const mutations = {
    favorite(state, id) {
        const index = state.products.findIndex(product => product.id === id);
        if (index !== -1) {
            state.products[index].favorite = !state.products[index].favorite
        }
    }
}