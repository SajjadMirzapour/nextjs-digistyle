export default function FeatureProduct({ userProduct }) {
  return (
    <div className="flex">
      <div className="w-60 ml-4">
        <h2 className="font-bold text-base mb-4">ویژگی ها</h2>
        <h3 className="text-[rgb(123,123,123)]">{userProduct.name}</h3>
      </div>
      <div>
        <h2 className="font-bold text-base mb-4">مشخصات</h2>
        <ul>
          <li>
            <span className="text-[rgb(123,123,123)] ml-20 mb-4">
              شماره مجوز
            </span>
            <span className="font-bold text-base">11/245</span>
          </li>
          <li>
            <span className="text-[rgb(123,123,123)] ml-20 mb-4">
              صادر کننده مجوز
            </span>
            <span className="font-bold text-base">سازمان غذا و دارو</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
