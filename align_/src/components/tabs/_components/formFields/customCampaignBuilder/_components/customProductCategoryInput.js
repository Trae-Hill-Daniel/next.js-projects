"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function CustomProductCategoryInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addedProductCategory = searchParams.get("product_category") || "";

  const handleProductCategoryInput = (event) => {
    const sp = new URLSearchParams(searchParams);
    const product_category = event.target.value;

    if (product_category.trim() === "") {
      sp.delete("product_category");
    } else {
      sp.set("product_category", product_category);
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="productCategory" className="px-1 text-xs md:text-sm">
        Product Category
      </Label>
      <Input
        className="w-full text-xs md:text-sm"
        type="text"
        id="productCategory"
        name="productCategory"
        value={addedProductCategory}
        onChange={handleProductCategoryInput}
        placeholder="e.g., casino, sports, etc."
      />
    </div>
  );
}
