// import CommentProduct from "./comment-product";
import { auth } from "@/auth";
import DetailProduct from "./detail-product";
import FeatureProduct from "./feature-product";

export default async function Product({ allProducts, id }) {
  const session = await auth();
  const username = session?.user?.name;
  const basketItems = session?.user?.basket?.split("-");
  const userProduct = allProducts.find((el) => el.id === id);

  return (
    <section className="xl:w-[88%] w-[92%] mx-auto md:pt-40 pt-16 mb-8">
      <DetailProduct
        userProduct={userProduct}
        username={username}
        basketItems={basketItems}
      />
      <FeatureProduct userProduct={userProduct} />
      {/* <CommentProduct /> */}
    </section>
  );
}
