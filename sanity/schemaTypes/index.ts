import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { orderType } from "./orderType";
import { productType } from "./productType";
import { blockContentType } from "./blockContentType";
import { brandType } from "./brandType";
import { blogType } from "./blogType";
import { blogCategoryType } from "./blogCategoryType";
import { authorType } from "./authorType";
import { addressType } from "./addressType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    productType,
    orderType,
    blockContentType,
    brandType,
    blogType,
    blogCategoryType,
    authorType,
    addressType,
  ],
};
