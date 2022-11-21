import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [actualCategory, setActualCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);

  const getCategories = async () => {
    const { data } = await axios.get("/api/categories");
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setActualCategory(categories[0]);
  }, [categories]);

  /**
   * When the user clicks on a category, the category is filtered by id and the actual category is set
   * to the filtered category.
   */
  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id);
    setActualCategory(category[0]);
  };

  /**
   * Takes a product as an argument and sets the product state to the
   * product argument.
   */
  const handleSetProduct = (product) => {
    setProduct(product);
  };

  /**
   * When the modal is open, the modal is closed, and when the modal is closed, the modal is opened.
   */
  const handleChangeModal = () => {
    setModal(!modal);
  };

  /**
   * If the product is already in the order, update the quantity, otherwise add it to the order.
   */
  const handleAddOrder = ({ categoryId, image, ...product }) => {
    if (order.some((productState) => productState.id === product.id)) {
      /* Updating the quantity of the product in the order. */
      const orderUpdated = order.map((productState) =>
        productState.id === product.id ? product : productState
      );
      setOrder(orderUpdated);
      toast.success("Guardado correctamente");
    } else {
      setOrder([...order, product]);
      toast.success("Agregado al pedido");
    }
    setModal(false);
  };

  return (
    <QuioscoContext.Provider
      value={{
        categories,
        actualCategory,
        handleClickCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        order,
        handleAddOrder,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
