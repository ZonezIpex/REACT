import { useState } from 'react';

export default function App() {
  return (
    <>
    <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}/>
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function SearchBar({
  filterText,             // 검색어 상태값
  inStockOnly,            // 재고 있는 것만 보기 상태값
  onFilterTextChange,     // 검색어가 바뀔 때 실행할 함수
  onInStockOnlyChange     // 체크박스가 바뀔 때 실행할 함수
}) {
  return (
    <form>
  
      <input
        type="text"
        value={filterText}                                    // 현재 검색어 상태를 입력창에 표시
        placeholder="Search..."                               // 아무것도 안 썼을 때 보여줄 힌트 텍스트
        onChange={(e) => onFilterTextChange(e.target.value)}  // 입력값이 바뀌면 함수 실행
      />

      <label>
        <input
          type="checkbox"
          checked={inStockOnly}             // 현재 체크된 상태를 반영
          onChange={(e) => onInStockOnlyChange(e.target.checked)} // 체크 상태가 바뀌면 함수 실행
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  // 보여줄 줄들을 담을 배열
  const rows = [];
  // 마지막으로 본 카테고리를 저장할 변수
  let lastCategory = null;

  // 반복시행을 통해 모든 상품을 하나씩 확인함
  products.forEach((product) => {
    // 상품 이름에 검색어가 없으면 건너뜀
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }

    // '재고 있는 것만 보기'가 켜져 있고, 이 상품이 품절이면 건너뜀
    if (inStockOnly && !product.stocked) {
      return;
    }

    // 카테고리가 바뀌었으면 카테고리 줄을 먼저 추가
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }

    // 상품 줄 추가
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );

    // 지금 카테고리를 저장해서 다음 상품과 비교할 수 있도록 함
    lastCategory = product.category;
  });

  // 실제로 화면에 보여줄 테이블을 리턴
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];