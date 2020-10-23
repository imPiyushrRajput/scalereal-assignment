
  const products = [
    {
      name: 'OnePlus 7',
      image: '/images/phoneOp.jpg',
      description:
        "OnePlus usually releases a fresh model when there's a new flagship-class Qualcomm Snapdragon chip to be used, or when it senses a big market shift in terms of design or features.",
      category: 'Mobile',
      price: 33000,
      countInStock: 7,
      rating: 2.1,
      id:1,
      brandId:1,
    },
    {
      name: 'OnePlus 7 Pro',
      image: '/images/phoneOp.jpg',
      description:
        "OnePlus usually releases a fresh model when there's a new flagship-class Qualcomm Snapdragon chip to be used, or when it senses a big market shift in terms of design or features.",
      category: 'Mobile',
      price: 35000,
      countInStock: 8,
      rating:3.5,
      id:2,
      brandId:1,
    },
    {
      name: 'OnePlus 7t',
      image: '/images/phoneOp.jpg',
      description:
        "OnePlus usually releases a fresh model when there's a new flagship-class Qualcomm Snapdragon chip to be used, or when it senses a big market shift in terms of design or features.",
      category: 'Mobile',
      price: 36000,
      countInStock: 9,
      rating: 4,
      id:3,
      brandId:1,
    },
    {
      name: 'OnePlus 7t Pro',
      image: '/images/phoneOp.jpg',
      description:
        "OnePlus usually releases a fresh model when there's a new flagship-class Qualcomm Snapdragon chip to be used, or when it senses a big market shift in terms of design or features.",
      category: 'Mobile',
      price: 37000,
      countInStock: 10,
      rating: 5,
      id:4,
      brandId:1,
    },
    {
      name: 'Samsung Galaxy M51',
      image: '/images/samsung.jpg',
      description:
        "Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters).",
      category: 'Mobile',
      price: 15000,
      countInStock: 5,
      rating: 2.2,
      id:5,
      brandId:2,
    },
    {
      name: 'Samsung Galaxy M31',
      image: '/images/samsung.jpg',
      description:
        "Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters).",
      category: 'Mobile',
      price: 16000,
      countInStock: 6,
      rating: 3.6,
      numReviews: 4,
      id:6,
      brandId:2,
    },
    {
      name: 'Samsung Galaxy M21',
      image: '/images/samsung.jpg',
      description:
        "Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters).",
      category: 'Mobile',
      price: 17000,
      countInStock: 4,
      rating: 4.5,
      id:7,
      brandId:2,
    },
    {
      name: 'Samsung Galaxy M11',
      image: '/images/samsung.jpg',
      description:
        "Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters).",
      category: 'Mobile',
      price: 18000,
      countInStock: 8,
      rating: 3,
      id:8,
      brandId:2,
    },
    {
      name: 'LG Q60',
      image: '/images/lg.jpg',
      description:
        "The LG is a dual SIM (GSM and GSM) smartphone that accepts Nano-SIM and Nano-SIM. Connectivity options include Wi-Fi, GPS, Bluetooth, NFC, USB Type-C, 3G and 4G (with support for Band 40 used by some LTE networks in India).",
      category: 'Mobile',
      price: 7000,
      countInStock: 3,
      rating: 3.2,
      id:9,
      brandId:3,
    },
    {
      name: 'LG G8X',
      image: '/images/lg.jpg',
      description:
        "The LG is a dual SIM (GSM and GSM) smartphone that accepts Nano-SIM and Nano-SIM. Connectivity options include Wi-Fi, GPS, Bluetooth, NFC, USB Type-C, 3G and 4G (with support for Band 40 used by some LTE networks in India).",
      category: 'Mobile',
      price: 70000,
      countInStock: 0,
      rating: 4.1,
      id:10,
      brandId:3,
    },
    {
      name: 'LG W10',
      image: '/images/lg.jpg',
      description:
        "The LG is a dual SIM (GSM and GSM) smartphone that accepts Nano-SIM and Nano-SIM. Connectivity options include Wi-Fi, GPS, Bluetooth, NFC, USB Type-C, 3G and 4G (with support for Band 40 used by some LTE networks in India).",
      category: 'Mobile',
      price: 10000,
      countInStock: 3,
      rating: 3.2,
      id:11,
      brandId:3,
    },
    {
      name: 'LG W30 PRO',
      image: '/images/lg.jpg',
      description:
        "The LG is a dual SIM (GSM and GSM) smartphone that accepts Nano-SIM and Nano-SIM. Connectivity options include Wi-Fi, GPS, Bluetooth, NFC, USB Type-C, 3G and 4G (with support for Band 40 used by some LTE networks in India).",
      category: 'Mobile',
      price: 21000,
      countInStock: 1,
      rating: 4.8,
      id:12,
      brandId:3,
    },
    {
      name: 'HP Pavilion 11',
      image: '/images/hp.jpg',
      description:
        "HP NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage.",
      category: 'Laptop',
      price: 55000,
      countInStock: 5,
      rating: 2,
      id:13,
      brandId:4
    },
    {
      name: 'HP Pavilion 12',
      image: '/images/hp.jpg',
      description:
                "HP NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage.",
      category: 'Laptop',
      price: 40000,
      countInStock: 10,
      rating: 3.6,
      id:14,
      brandId:4
    },
    {
      name: 'HP Pavilion 13',
      image: '/images/hp.jpg',
      description:
                "HP NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage.",
      category: 'Laptop',
      price: 35000,
      countInStock: 8,
      rating: 3.8,
      id:15,
      brandId:4
    },
    {
      name: 'HP Pavilion 14',
      image: '/images/hp.jpg',
      description:
                "HP NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage.",
      category: 'Laptop',
      price: 30000,
      countInStock: 11,
      rating: 4.1,
      id:16,
      brandId:4
    },
    {
      name: 'Lenovo IdeaPad 21',
      image: '/images/lenovo.jpg',
      description:
        "Lenovo ThinkPad is a Windows 10 laptop with a 14.00-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i7 processor and it comes with 12GB of RAM.",
      category: 'Laptop',
      price: 22000,
      countInStock: 6,
      rating: 4.2,
      id:17,
      brandId:5
    },
    {
      name: 'Lenovo IdeaPad 22',
      image: '/images/lenovo.jpg',
      description:
        "Lenovo ThinkPad is a Windows 10 laptop with a 14.00-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i7 processor and it comes with 12GB of RAM.",
      category: 'Laptop',
      price: 33000,
      countInStock: 11,
      rating: 3.7,
      id:18,
      brandId:5
    },
    {
      name: 'Lenovo IdeaPad 23',
      image: '/images/lenovo.jpg',
      description:
        "Lenovo ThinkPad is a Windows 10 laptop with a 14.00-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i7 processor and it comes with 12GB of RAM.",
      category: 'Laptop',
      price: 55001,
      countInStock: 15,
      rating: 4.3,
      id:19,
      brandId:5
    },
    {
      name: 'Lenovo IdeaPad 24',
      image: '/images/lenovo.jpg',
      description:
        "Lenovo ThinkPad is a Windows 10 laptop with a 14.00-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i7 processor and it comes with 12GB of RAM.",
      category: 'Laptop',
      price: 43000,
      countInStock: 6,
      rating: 2.6,
      id:20,
      brandId:5
    },
    {
      name: 'Dell Inspiron 31',
      image: '/images/dell.jpg',
      description:
        "Dell Inspiron 15 is a Windows 10 Home laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM.",
      category: 'Laptop',
      price: 30000,
      countInStock: 0,
      rating: 3.6,
      id:21,
      brandId:6
    },
    {
      name: 'Dell Inspiron 32',
      image: '/images/dell.jpg',
      description:
        "Dell Inspiron 15 is a Windows 10 Home laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM.",
      category: 'Laptop',
      price: 60000,
      countInStock: 1,
      rating: 4.5,
      id:22,
      brandId:6
    },
    {
      name: 'Dell Inspiron 33',
      image: '/images/dell.jpg',
      description:
        "Dell Inspiron 15 is a Windows 10 Home laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM.",
      category: 'Laptop',
      price: 39000,
      countInStock: 6,
      rating: 4.7,
      id:23,
      brandId:6
    },
    {
      name: 'Dell Inspiron 34',
      image: '/images/dell.jpg',
      description:
        "Dell Inspiron 15 is a Windows 10 Home laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM.",
      category: 'Laptop',
      price: 27000,
      countInStock: 5,
      rating: 1.2,
      id:24,
      brandId:6
    },
  ]

export const productListReducer = (state = { products: products}, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST' :

    let sortArr = products
    let catArr = []

    if(action.catKey === "All") {
      catArr = products
     }else {
      catArr = sortArr.filter((arr) => arr.category=== action.catKey)
     }

      if (action.sortKey === "low-rating") {
         sortArr = sortArr.sort((a,b) => b.rating -  a.rating )
      } else if (action.sortKey === "high-rating") {
         sortArr = sortArr.sort((a, b) => a.rating - b.rating)
      }
    
    return {
      ...state,
      products : catArr
    }
    default:
      return state
  }
}

export const productDetailsReducer = (state = { product: { } },action) => {
    switch (action.type) {
      case 'PRODUCT_DETAILS':
        return { product: action.payload }
      default:
        return state
    }
}

