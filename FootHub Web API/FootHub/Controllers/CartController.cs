using FootHub.Models;
using FootHub.Services.CartServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FootHub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private ICart _service;

        public CartController(ICart service)
        {
            _service = service;
        }

        [HttpGet("{userid}")]
        public async Task<ActionResult<List<CartTable>>> getCart(int userid)
        {
            List<ProductTable> cart;
            try
            {
                cart = await _service.getCart(userid);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
            return Ok(cart);
        }

        [HttpPost]
        public async Task<ActionResult<String>> AddProduct(CartTable product)
        {
            string Message;
            try
            {
                Message = await _service.AddProduct(product);
            }
            catch (Exception ex)
            {
                Message = ex.Message;
                //return NotFound(ex.Message);
            }
            return Ok(Message);
        }

        [HttpDelete("{userId},{productId}")]
        public async Task<ActionResult<string>> DeleteProductInCart(int userId,int productId)
        {
            return Ok(await _service.DeleteProductInCart(userId,productId));
        }
    }
}
