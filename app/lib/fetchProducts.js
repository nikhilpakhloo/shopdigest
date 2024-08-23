export const getData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products`
    );
   
    if (!response.ok) {
      throw new Error("Failed to Api Data");
    }
    const data = await response.json();
    
    return {
      products: data || [], 
      
    };;
  };
  export const getDataById = async (id ) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to Api Data");
    }
    return response.json();
  };
  