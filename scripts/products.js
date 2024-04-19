export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/Bamboo-straw.png",
    name: "Bamboo Straw with a Cleaner - 6 Pairs",
    priceCents: 340,
    type: "color",
    color: ["Teak", "Yellow", "Wheat"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/Beewax-wrapper.png",
    name: "Beewax Wrappers stack - 10 in stack",
    priceCents: 295,
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/Eco-soap.png",
    name: "Eco Soap - 3 fragrences",
    priceCents: 799,
    type: "fragrance",
    fragrance: ["Rose", "Lotus", "Orange"],
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/Straws.png",
    name: "Bamboo + Stainless steeel Straws - combo pack",
    priceCents: 899,
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/Bamboo-toothbrush.png",
    name: "Bamboo Toothbrush",
    priceCents: 599,
    type: "color",
    color: ["Teak", "Yellow", "Wheat"],
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/bat-boxes.png",
    name: "Bat box",
    priceCents: 1599,
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/bathroom-kit.png",
    name: "Bathroom combo pack",
    priceCents: 2400,
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/bee-house.png",
    name: "Bee House",
    priceCents: 3075,
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/compost-bin.png",
    name: "Compost bin",
    priceCents: 4099,
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/Eco-loofah.png",
    name: "Eco Loofah",
    priceCents: 599,
    type: "color",
    color: ["Teak", "Yellow", "Wheat"],
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/Natural-bathing-sponge.png",
    name: "Natural fiber sponge",
    priceCents: 2070,
    type: "color",
    color: ["Teak", "Yellow", "Wheat"],
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/nature-documet.png",
    name: "Nature Documentaries for Kids",
    priceCents: 3099,
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/seed-bomb.jpg",
    name: "Seed bomb",
    priceCents: 2499,
  },
];
