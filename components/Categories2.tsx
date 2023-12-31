import Link from "next/link";
import { TCategory } from "@/app/types";
import { Typography, Paper } from "@mui/material";

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
    <Paper elevation={3} className="my-4 p-4">
      <div className="flex overflow-x-auto gap-2">
        {categories &&
          categories.map((category) => (
            <Link
              key={category.id}
              className="px-8 py-2 rounded-full category cardshadow cursor-pointer"
              href={`/categories/${category.catName}`}
            >
              <Typography>{category.catName}</Typography>
            </Link>
          ))}
      </div>
    </Paper>
  );
}
