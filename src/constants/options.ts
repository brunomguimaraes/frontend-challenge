export const GUEST_OPTIONS = Array.from({ length: 30 }, (_, i) => i + 1).map(
  (i: number) => ({
    value: i,
    name: `${i} guest${i > 1 ? `s` : ``}`,
  })
);

export const ORDER_BY_OPTIONS = [
  { value: "RELEVANCE", name: "Relevance (default)" },
  { value: "PRICE_ASC", name: "Price: lowest first" },
  { value: "PRICE_DESC", name: "Price: highest first" },
];
