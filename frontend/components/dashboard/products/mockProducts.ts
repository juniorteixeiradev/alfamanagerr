interface Product {
    id: string;
    name: string;
    description: string;
    selling_price: number;
    image: string;
    category: string;
    size?: string;
  }
  
  const mockProducts: Product[] = [
    {
      id: "1",
      name: "Classic White T-Shirt",
      description: "Essential white t-shirt made from premium cotton",
      selling_price: 29.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      category: "masculino",
      size: "M",
    },
    {
      id: "2",
      name: "Slim Fit Jeans",
      description: "Modern slim fit jeans in dark wash",
      selling_price: 79.99,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop",
      category: "masculino",
      size: "32",
    },
    {
      id: "3",
      name: "Floral Summer Dress",
      description: "Light and breezy floral print dress",
      selling_price: 89.99,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop",
      category: "feminino",
      size: "S",
    },
    {
      id: "4",
      name: "Leather Jacket",
      description: "Classic leather jacket in black",
      selling_price: 199.99,
      image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
      category: "masculino",
      size: "L",
    },
    {
      id: "5",
      name: "High-Waisted Shorts",
      description: "Trendy high-waisted denim shorts",
      selling_price: 49.99,
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop",
      category: "feminino",
      size: "M",
    },
    {
      id: "6",
      name: "Striped Blouse",
      description: "Elegant striped blouse for any occasion",
      selling_price: 59.99,
      image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500&h=500&fit=crop",
      category: "feminino",
      size: "M",
    },
    {
      id: "7",
      name: "Oxford Button-Down Shirt",
      description: "Classic Oxford shirt perfect for any formal occasion",
      selling_price: 69.99,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop",
      category: "masculino",
      size: "L",
    },
    {
      id: "8",
      name: "Chino Pants",
      description: "Comfortable and stylish chino pants for everyday wear",
      selling_price: 89.99,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=500&fit=crop",
      category: "masculino",
      size: "34",
    },
    {
      id: "9",
      name: "Wool Blazer",
      description: "Premium wool blazer for a sophisticated look",
      selling_price: 249.99,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop",
      category: "masculino",
      size: "M",
    },
    {
      id: "10",
      name: "Casual Sneakers",
      description: "Versatile sneakers that complement any casual outfit",
      selling_price: 119.99,
      image: "https://images.unsplash.com/photo-1527010154944-f2241763d806?w=500&h=500&fit=crop",
      category: "Sapatos",
      size: "42",
    },
    {
      id: "11",
      name: "Polo Shirt",
      description: "Classic polo shirt for a smart casual look",
      selling_price: 45.99,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
      category: "masculino",
      size: "M",
    },
    {
      id: "12",
      name: "Denim Jacket",
      description: "Timeless denim jacket that never goes out of style",
      selling_price: 129.99,
      image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&h=500&fit=crop",
      category: "masculino",
      size: "L",
    },
    {
      id: "13",
      name: "Maxi Dress",
      description: "Elegant maxi dress perfect for summer occasions",
      selling_price: 129.99,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
      category: "feminino",
      size: "M",
    },
    {
      id: "14",
      name: "Silk Blouse",
      description: "Luxurious silk blouse for a sophisticated look",
      selling_price: 89.99,
      image: "https://images.unsplash.com/photo-1604336755604-65cacf28dc41?w=500&h=500&fit=crop",
      category: "feminino",
      size: "S",
    },
    {
      id: "15",
      name: "Pencil Skirt",
      description: "Classic pencil skirt for professional attire",
      selling_price: 69.99,
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&h=500&fit=crop",
      category: "feminino",
      size: "M",
    },
    {
      id: "16",
      name: "Cashmere Sweater",
      description: "Soft cashmere sweater for ultimate comfort",
      selling_price: 159.99,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop",
      category: "feminino",
      size: "M",
    },
    {
      id: "17",
      name: "Wide-Leg Pants",
      description: "Stylish wide-leg pants for a modern look",
      selling_price: 79.99,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
      category: "feminino",
      size: "M",
    },
    {
      id: "18",
      name: "Leather Tote Bag",
      description: "Spacious leather tote for everyday use",
      selling_price: 199.99,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop",
      category: "feminino",
      size: "One Size",
    },
     {
    id: "19",
    name: "Tênis Esportivo",
    description: "Tênis Esportivo for a modern look",
    selling_price: 129.99,
    category: "calcados",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "20",
    name: "Bolsa de Couro",
    description: "Bolsa de Couro for a modern look",
    selling_price: 149.99,
    category: "acessorios",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "21",
    name: "Óculos de Sol",
    description: "Óculos de Sol for a modern look",
    selling_price: 199.99,
    category: "acessorios",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  ];
  
  export default mockProducts;
  