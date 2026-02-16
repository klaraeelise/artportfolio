import { shopItems } from "@/data/shop/shopItems";
import ShopItemDetails from "@/components/ShopItemDetails";
import { notFound } from "next/navigation";

export default async function ShopItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = shopItems.find(item => item.id === id);

  if (!item) {
    notFound();
  }

  return <ShopItemDetails item={item} />;
}

export async function generateStaticParams() {
  return shopItems.map((item) => ({
    id: item.id,
  }));
}
