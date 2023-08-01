const CartItem = ({ item, onRemove, onQuantityChange }) => {
    return (
      <li className="flex justify-between items-center mb-2 p-2 border-b-2">
        <div className="h-full flex items-center">
          <img
            src={item.thumbnail}
            alt=""
            className="w-2/5 object-contain mr-4"
          />
          <div className="flex flex-col">
            <span className="text-black text-sm text">{item.title}</span>
            <div className="flex items-center mt-2">
              <input
                type="number"
                name=""
                className="bg-zinc-200 h-8 w-14 mr-2 text-center"
                value={item.quantity}
                onChange={(e) => onQuantityChange(item, parseInt(e.target.value))}
                min="1"
              />
              <span className="text-black">${item.price}</span>
            </div>
            <span className="text-gray-500 text-sm">
              ${item.price} por unidade
            </span>
          </div>
        </div>
        <button
          className="text-red-600 hover:text-red-800"
          onClick={() => onRemove(item)}
        >
          X
        </button>
      </li>
    );
  };

  export default CartItem;