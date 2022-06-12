import { getInitAttributes } from "./getInitAttributes";

export function generateProductId(product, selectedAttributes) {
    const initialAttributes = getInitAttributes(product.attributes);
    let productId;
    if (Object.keys(selectedAttributes).length === 0) {
        productId = productId =
            product.id + "-" + Object.values(initialAttributes).join("-");
    } else {
        productId =
            product.id +
            "-" +
            Object.values({ ...initialAttributes, ...selectedAttributes }).join(
                "-"
            );
    }
    return productId;
}
