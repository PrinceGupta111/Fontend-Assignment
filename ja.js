const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Our Products', id: 'product', child: [
      { name: 'Product 1', id: 'p1' },
      { name: 'Product 2', id: 'p2' },
      { name: 'Product 3', id: 'p3' },
      { name: 'Product 4', id: 'p4' },
    ] },
    { name: 'Contact Us', id: 'contact' },
  ];
  
  const products = [
    { id: 1, name: 'Product 1', category: 'Category 1' },
    { id: 2, name: 'Product 2', category: 'Category 2' },
    { id: 3, name: 'Product 3', category: 'Category 3' },
    { id: 4, name: 'Product 4', category: 'Category 4' },
  ];
  
  const filterProducts = (category) => {
    const filteredProducts = products.filter((product) => product.category === category);
    return filteredProducts;
  };
  
  const renderProducts = (products) => {
    const productList = products.map((product) => (
      <li key={product.id}>
        <a href="#">{product.name}</a>
      </li>
    ));
    return (
      <ul>
        {productList}
      </ul>
    );
  };
  
  const renderNavbar = (navbar) => {
    const navbarItems = navbar.map((item) => (
      <li key={item.id}>
        <a href="#">{item.name}</a>
      </li>
    ));
    return (
      <ul>
        {navbarItems}
      </ul>
    );
