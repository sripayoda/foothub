using FootHub.Execptions;
using FootHub.Models;
using Microsoft.EntityFrameworkCore;

namespace FootHub.Services.CartServices
{
    public class CartService : ICart
    {

        private FootHub2Context _context;

        public CartService(FootHub2Context context)
        {
            _context = context;
        }

        public async Task<List<ProductTable>> getCart(int userid)
        {
            var cartDetails = await (from cart in _context.CartTables
                                     join product in _context.ProductTables on cart.PId equals product.PId
                                     where cart.UId == userid
                                     select product).ToListAsync();


            if (cartDetails == null)
            {
                throw new Exception(UserExecptions.ExceptionMessages["Cart Empty"]);
            }
            return cartDetails;
        }

        public async Task<String> AddProduct(CartTable product) 
        {
            var check = await _context.CartTables.FirstOrDefaultAsync(
                u => u.UId == product.UId && u.PId == product.PId);
            if(check != null)
            {
                throw new Exception(UserExecptions.ExceptionMessages["Cart"]);
            }
            await _context.CartTables.AddAsync(product);
            _context.SaveChanges();
            return "Added";
        }

        public async Task<String> DeleteProductInCart(int userId, int productId)
        {
            var delprod = await _context.CartTables.FirstOrDefaultAsync(
                u => u.PId == productId && u.UId == userId);
            _context.CartTables.Remove(delprod);
            _context.SaveChanges();
            return "deleted in cart";
        }
    }
}
