using FootHub.Models;

namespace FootHub.Services.CartServices
{
    public interface ICart
    {
        Task<List<ProductTable>> getCart(int userid);
        Task<String> AddProduct(CartTable product);

        Task<String> DeleteProductInCart(int userId,int productId);


    }
}
