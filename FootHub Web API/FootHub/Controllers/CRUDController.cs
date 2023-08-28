using FootHub.Models;
using FootHub.Services.ProductCrud;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FootHub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CRUDController : ControllerBase
    {
        public ICrud _icrud;

        public CRUDController(ICrud icrud)
        {
            _icrud = icrud;
        }
        /*
        [HttpPost("OcassionTable")]
        public async Task<ActionResult<List<OcassionTable>>> AddOcassion(OcassionTable ocassion)
        {
            var ocassions = await _icrud.AddOcassion(ocassion);
            if (ocassions == null)
            {
                return NotFound();
            }
            return Ok(ocassions);
        }
        */
        [HttpGet("OcassionTable")]
        public async Task<ActionResult<List<OcassionTable>>> GetOcassion()
        {
            var ocassions = await _icrud.GetOcassions();
            if (ocassions == null)
            {
                return NotFound();
            }
            return Ok(ocassions);
        }
        /*
        [HttpPut("OcassionTable")]
        public async Task<ActionResult<OcassionTable>> UpdateOcassion(int o_id, OcassionTable ocassion)
        {

            try
            {
                var ocassions = await _icrud.UpdateOcassion(o_id, ocassion);

                return Ok(ocassions);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }

        [HttpDelete("OcassionTable")]
        public async Task<ActionResult<List<OcassionTable>>> RemoveOcassion(int o_id)
        {

            try
            {
                var ocassions = await _icrud.RemoveOcassion(o_id);

                return Ok(ocassions);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }



        [HttpPost("BrandTable")]
        public async Task<ActionResult<List<OcassionTable>>> AddBrand(BrandTable brand)
        {
            var brands = await _icrud.AddBrand(brand);
            if (brands == null)
            {
                return NotFound();
            }
            return Ok(brands);
        }
        */
        [HttpGet("BrandTable")]
        public async Task<ActionResult<List<BrandTable>>> GetBrand()
        {
            var ocassions = await _icrud.GetBrand();
            if (ocassions == null)
            {
                return NotFound();
            }
            return Ok(ocassions);
        }
        /*
        [HttpPut("BrandTable")]
        public async Task<ActionResult<BrandTable>> UpdateBrand(int o_id, BrandTable brand)
        {

            try
            {
                var ocassions = await _icrud.UpdateBrand(o_id, brand);

                return Ok(ocassions);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }

        [HttpDelete("BrandTable")]
        public async Task<ActionResult<List<BrandTable>>> RemoveBrand(int o_id)
        {

            try
            {
                var ocassions = await _icrud.RemoveBrand(o_id);

                return Ok(ocassions);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }



        [HttpPost("ProductTable")]
        public async Task<ActionResult<List<OcassionTable>>> AddProduct(ProductTable product)
        {
            var ocassions = await _icrud.AddProduct(product);
            if (ocassions == null)
            {
                return NotFound();
            }
            return Ok(ocassions);
        }
        */
        [HttpGet("ProductTable")]
        public async Task<ActionResult<List<ProductTable>>> GetProduct()
        {
            var ocassions = await _icrud.GetProduct();
            if (ocassions == null)
            {
                return NotFound();
            }
            return Ok(ocassions);
        }
        /*
        [HttpPut("ProductTable")]
        public async Task<ActionResult<ProductTable>> UpdateProduct(int o_id, ProductTable product)
        {

            try
            {
                var ocassions = await _icrud.UpdateProduct(o_id, product);

                return Ok(ocassions);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }

        [HttpDelete("ProductTable")]
        public async Task<ActionResult<List<ProductTable>>> RemoveProduct(int o_id)
        {

            try
            {
                var ocassions = await _icrud.RemoveProduct(o_id);

                return Ok(ocassions);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }


        [HttpPost("ProductType")]
        public async Task<ActionResult<List<ProductType>>> AddProductType(ProductType ocassion)
        {
            var ocassions = await _icrud.AddProductType(ocassion);
            if (ocassions == null)
            {
                return NotFound();
            }
            return Ok(ocassions);
        }
        */
        [HttpGet("ProductType")]
        public async Task<ActionResult<List<ProductType>>> GetProductType()
        {
            var ocassions = await _icrud.GetProductType();
            if (ocassions == null)
            {
                return NotFound();
            }
            return Ok(ocassions);
        }
        /*
        [HttpPut("ProductType")]
        public async Task<ActionResult<ProductType>> UpdateProductType(int o_id, ProductType ocassion)
        {

            try
            {
                var ocassions = await _icrud.UpdateProductType(o_id, ocassion);

                return Ok(ocassions);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }

        [HttpDelete("ProductType")]
        public async Task<ActionResult<List<ProductType>>> RemoveProductType(int o_id)
        {

            try
            {
                var ocassions = await _icrud.RemoveProductType(o_id);

                return Ok(ocassions);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }
        */
    }
}
