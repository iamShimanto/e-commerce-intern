"use client";

import InfoBlock from "./InfoBlock";
import { FiUser, FiShoppingBag, FiSend } from "react-icons/fi";

export default function OrderInfoGrid({ order }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/5 pt-6">
      <InfoBlock icon={FiUser} title="Customer" actionLabel="View Profile">
        <p>Full name: {order.customer.name}</p>
        <p>E-mail: {order.customer.email}</p>
        <p>Phone: {order.customer.phone}</p>
      </InfoBlock>

      <InfoBlock
        icon={FiShoppingBag}
        title="Order Info"
        actionLabel="Download info"
      >
        <p>Shipping: {order.orderInfo.shipping}</p>
        <p>Pay method: {order.orderInfo.payment}</p>
        <p>Status: {order.orderInfo.status}</p>
      </InfoBlock>

      <InfoBlock icon={FiSend} title="Deliver to" actionLabel="View profile">
        <p>Address: {order.deliverTo.address1}</p>
        <p>{order.deliverTo.address2}</p>
        <p>{order.deliverTo.block}</p>
      </InfoBlock>
    </div>
  );
}
