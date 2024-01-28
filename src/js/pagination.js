export function renderPagination(totalPages, currentPage) {
  return Array.from({ length: totalPages }).reduce((html, _, index) => {
    const pageNumber = index + 1;
    const isActive = pageNumber === currentPage ? 'active_pag_item' : '';
    return (
      html +
      `<li class="pagination-element ${isActive}" value="${pageNumber}">${pageNumber}</li>`
    );
  }, '');
}
