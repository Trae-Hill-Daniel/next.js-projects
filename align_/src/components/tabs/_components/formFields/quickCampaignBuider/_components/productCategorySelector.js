"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { productCategories } from "../_elements/options";

export function ProductCategorySelector() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedProductCategory = searchParams.get("product_category") || "";

  const handleProductCategoryChange = (product_category) => {
    const sp = new URLSearchParams(searchParams);

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

      <Select
        name="productCategory"
        value={selectedProductCategory}
        onValueChange={handleProductCategoryChange}
      >
        <SelectTrigger
          id="productCategory"
          className="w-full text-xs md:text-sm"
        >
          <SelectValue placeholder="Select a Product Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Product Categories</SelectLabel>

            {productCategories.map((category) => (
              <SelectItem key={category.key} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
