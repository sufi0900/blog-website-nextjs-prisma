import Link from "next/link";
import { TCategory } from "@/app/types";
import { Typography } from "@mui/material";

const getCategories = async (): Promise<TCategory[] | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);

    if (res.ok) {
      const categories = await res.json();
      return categories;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

export default async function CategoriesList() {
  const categories = await getCategories();
  return (
    <div className="flex gap-2 text-sm flex-wrap ">
      {categories &&
        categories.map((category) => (
          <Link
            key={category.id}
            className="px-4 py-2 rounded-full category cardshadow2  cursor-pointer"
            href={`/categories/${category.catName}`}
          >
            <Typography>{category.catName}</Typography>
          </Link>
        ))}
    </div>
  );
}
