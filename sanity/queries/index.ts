const getCategories = async (quantity?: number) => {
  try {
    const query = quantity
      ? `*[_type == 'category'] | order (name asc) [0...$quantity] {
        ..., 
        "productCount" : count (*[_type == "product" && references (^._id)])}`
      : `*[_type == 'category'] | order(name asc) {
        ..., 
        "productCount": count(*[_type == "product" && references (^._id)])}`;
  } catch (error) {
    console.log("Error fetching categories:", error);
    return [];
  }
};
