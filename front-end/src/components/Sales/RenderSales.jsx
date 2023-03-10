import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function RenderProducts(
  { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber },
) {
  const navigate = useNavigate();

  const sellerOrderDetails = () => {
    navigate(`/seller/orders/${id}`);
    // setInLocalStorage();
  };

  return (
    <div>
      <h3
        data-testid={ `seller_orders__element-order-${id}` }
      >
        { id }

      </h3>
      <h3
        data-testid={ `seller_orders__element-delivery-status-${id}` }
      >
        { status }

      </h3>
      <h3
        data-testid={ `seller_orders__element-order-date-${id}` }
      >
        { saleDate }

      </h3>
      <h3
        data-testid={ `seller_orders__element-card-price-${id}` }
      >
        { totalPrice.replace('.', ',') }

      </h3>
      <h3
        data-testid={ `seller_orders__element-card-address-${id}` }
      >
        { `${deliveryAddress}, ${deliveryNumber}` }
      </h3>
      <button
        data-testid={ `seller_orders__element-order-id-${id}` }
        onClick={ sellerOrderDetails }
        type="button"
      >
        VER DETALHES
      </button>
    </div>
  );
}

RenderProducts.propTypes = {
  saleDate: PropTypes.Date,
  status: PropTypes.bool,
  totalPrice: PropTypes.number,
  id: PropTypes.number,
  deliveryAddress: PropTypes.string,
  deliveryNumber: PropTypes.number,
}.isRequired;
