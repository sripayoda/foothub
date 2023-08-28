using FootHub.Models;
using Microsoft.EntityFrameworkCore;

namespace FootHub.Services.ProductDetailsServices
{
    public class ProductServices : IProduct
    {
        private FootHub2Context _context;

        public ProductServices(FootHub2Context context)
        {
            _context = context;
        }

        public async Task<List<ProductTable>> GetProducts()
        {
            List<ProductTable> products = await _context.ProductTables.ToListAsync();
            return products;
        }
    }
}
