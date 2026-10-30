import { formatKip } from "../data.js";

function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      {/* ຖ້າสินค้าหมด (!product.inStock) ໃຫ້ສະແດງປ้าย "ສິນຄ້າໝົດ" */}
      {!product.inStock && <span className="badge-out">ສິນຄ້າໝົດ</span>}
      <div className="thumb">{product.emoji}</div>
      <div className="cat">{product.category}</div>
      <div className="name">{product.name}</div>
      <div className="price">{formatKip(product.price)}</div>
      <div className="btn-row">
        {/* ປຸ່ມເພີ່ມ 1 (ປິດການໃຊ້ງານຖ້າສິນຄ້າໝົດ !product.inStock) */}
        <button
          className="btn add"
          onClick={() => onAdd(product, 1)}
          disabled={!product.inStock}
        >
          ເພີ່ມໃສ່ກະຕ່າ
        </button>

        {/* ປຸ່ມ +2 (ປິດການໃຊ້ງານຖ້າສິນຄ້າໝົດ !product.inStock) */}
        <button
          className="btn two"
          onClick={() => onAdd(product, 2)}
          disabled={!product.inStock}
        >
          +2
        </button>
      </div>
    </div>
  );
}

export default ProductCard;