import { fetchAllProducts } from "@/src/lib/data";
import Product from "@/src/ui/product";

export default async function Accessory({ params }) {
  const allProducts = await fetchAllProducts();
  const paramsId = await params?.id;
  //   console.log("params", params?.id, params);
  return <Product id={paramsId} allProducts={allProducts} />;
}
