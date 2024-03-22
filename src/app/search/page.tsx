import { db } from "@/db";
import { productsTable } from "@/db/schema";
import { sql } from "drizzle-orm";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const page = async ({ searchParams }: PageProps) => {
  const query = searchParams.query;

  if (Array.isArray(query) || !query) {
    return redirect("/");
  }

  let products = await db
    .select()
    .from(productsTable)
    .where(
      sql`to_tsvector('simple', lower(${productsTable.name} || ' ' || ${
        productsTable.description
      })) @@ to_tsquery('smple', lower(${query.trim().split(" ").join(" & ")}))`
    )
    .limit(3);

  return <pre>{JSON.stringify(products)}</pre>;
};

export default page;