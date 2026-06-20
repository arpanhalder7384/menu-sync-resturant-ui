import React from "react";
import { Metadata } from "next";
import { HASH_MAPPINGS, MOCK_RESTAURANTS } from "@/lib/mockData";
import ConfirmPageClient from "@/components/ConfirmPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hashCode: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const hashCode = resolvedParams.hashCode;
  const mapping = HASH_MAPPINGS[hashCode];
  
  if (!mapping) {
    return {
      title: "Confirm Order | MenuSync",
    };
  }

  const restaurant = MOCK_RESTAURANTS[mapping.restaurantId];
  if (!restaurant) {
    return {
      title: "Confirm Order | MenuSync",
    };
  }

  const name = restaurant.nameEn;
  return {
    title: `Confirm Order - ${name} - Table ${mapping.tableNumber} | MenuSync`,
    description: `Confirm your selected items, enter special preparation notes, and submit your order via WhatsApp for ${name} (Table ${mapping.tableNumber}).`,
  };
}

export default async function ConfirmPage() {
  return <ConfirmPageClient />;
}
