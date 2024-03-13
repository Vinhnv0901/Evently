import React, { useEffect } from "react";

import { IEvent } from "@/lib/database/models/event.model";
import { Button } from "../ui/button";
import { createOrder } from "@/lib/actions/order.actions";
import { useRouter } from "next/navigation";

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  const router = useRouter();

  const onCheckout = async () => {
    console.log("oncheckout!!!!!!!");
    const totalCost = event.isFree ? "0" : event.price;
    const order = {
      eventId: event._id,
      totalAmount: totalCost,
      buyerId: userId,
      createdAt: new Date(),
    };
    const newOrder = await createOrder(order);
    if (newOrder) {
      router.push(`/profile`);
    }
  };

  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? "Get Ticket" : "Buy Ticket"}
      </Button>
    </form>
  );
};

export default Checkout;
