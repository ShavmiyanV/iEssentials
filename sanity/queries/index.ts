const getCategories = async (quantity?: number) => {
    try {
        const query = quantity 
        ? `*[_type == 'category'] | order (name asc) [0...$quantity]`
    } catch (error) {
        console.log("Error fetching categories:", error);
        return [];
    }
} 