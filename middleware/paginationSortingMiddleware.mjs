export function paginationSortingMiddleware(getItems) {
  return async (req, res, next) => {
    const { limit = 10, offset = 0, sort, order = "asc" } = req.query;

    try {
      const items = await getItems();

      const parsedLimit = parseInt(limit);
      const parsedOffset = parseInt(offset);

      const sortedItems = sort
        ? items.sort((a, b) => {
            const compareResult =
              a[sort] < b[sort] ? -1 : a[sort] > b[sort] ? 1 : 0;
            return order === "asc" ? compareResult : -compareResult;
          })
        : items;

      const paginatedItems = sortedItems.slice(
        parsedOffset,
        parsedOffset + parsedLimit
      );
      res.paginatedSortedResults = paginatedItems;
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}
