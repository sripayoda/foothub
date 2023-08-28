
using FootHub.Models;
using Microsoft.EntityFrameworkCore;

namespace FootHub.Services.ProductCrud
{
    public class CRUDServiceClass : ICrud
    {
        public FootHub2Context _context;

        public CRUDServiceClass(FootHub2Context context)
        {
            _context = context;
        }
        /*
        public async Task<List<OcassionTable>> AddOcassion(OcassionTable ocassion)
        {
            _context.OcassionTables.Add(ocassion);
            await _context.SaveChangesAsync();
            return await _context.OcassionTables.ToListAsync();
        }
        */
        public async Task<List<OcassionTable>> GetOcassions()
        {
            var response = await _context.OcassionTables.Where(o => o.IsAvailable == 1).ToListAsync();
            return response;
        }
        /*
        public async Task<List<OcassionTable>> UpdateOcassion(int o_id, OcassionTable ocassion)
        {
            var response = await _context.OcassionTables.FindAsync(o_id);
            response.OName = ocassion.OName;
            await _context.SaveChangesAsync();
            return await _context.OcassionTables.ToListAsync();
        }


        public async Task<List<OcassionTable>> RemoveOcassion(int o_id)
        {
            var response = await _context.OcassionTables.FindAsync(o_id);
            response.IsAvailable = 0;
            await _context.SaveChangesAsync();
            return await _context.OcassionTables.ToListAsync();
            
        }

        public async Task<List<BrandTable>> AddBrand(BrandTable brand)
        {
            _context.BrandTables.Add(brand);
            await _context.SaveChangesAsync();
            return await _context.BrandTables.ToListAsync();
        }
        */
        public async Task<List<BrandTable>> GetBrand()
        {
            return await _context.BrandTables.ToListAsync();
        }
        /*
        public async Task<List<BrandTable>> UpdateBrand(int b_id, BrandTable brand)
        {
            var response = await _context.BrandTables.FindAsync(b_id);
            response.BName = brand.BName;
            await _context.SaveChangesAsync();
            return await _context.BrandTables.ToListAsync();
        }


        public async Task<List<BrandTable>> RemoveBrand(int b_id)
        {
            var response = await _context.BrandTables.FindAsync(b_id);
            _context.Remove(response);
            await _context.SaveChangesAsync();
            return await _context.BrandTables.ToListAsync();

        }

        public async Task<List<ProductTable>> AddProduct(ProductTable product)
        {
            _context.ProductTables.Add(product);
            await _context.SaveChangesAsync();
            return await _context.ProductTables.ToListAsync();
        }
        */
        public async Task<List<ProductTable>> GetProduct()
        {
            return await _context.ProductTables.ToListAsync();
        }
        /*
        public async Task<List<ProductTable>> UpdateProduct(int p_id, ProductTable product)
        {
            var response = await _context.ProductTables.FindAsync(p_id);
            response.PName = product.PName;
            await _context.SaveChangesAsync();
            return await _context.ProductTables.ToListAsync();
        }


        public async Task<List<ProductTable>> RemoveProduct(int p_id)
        {
            var response = await _context.ProductTables.FindAsync(p_id);
            _context.Remove(response);
            await _context.SaveChangesAsync();
            return await _context.ProductTables.ToListAsync();

        }


        public async Task<List<ProductType>> AddProductType(ProductType productType)
        {
            _context.ProductTypes.Add(productType);
            await _context.SaveChangesAsync();
            return await _context.ProductTypes.ToListAsync();
        }
        */
        public async Task<List<ProductType>> GetProductType()
        {
            return await _context.ProductTypes.ToListAsync();
        }
        /*
        public async Task<List<ProductType>> UpdateProductType(int p_id, ProductType productType)
        {
            var response = await _context.ProductTypes.FindAsync(p_id);
            response.TName = productType.TName;
            await _context.SaveChangesAsync();
            return await _context.ProductTypes.ToListAsync();
        }


        public async Task<List<ProductType>> RemoveProductType(int b_id)
        {
            var response = await _context.ProductTypes.FindAsync(b_id);
            _context.Remove(response);
            await _context.SaveChangesAsync();
            return await _context.ProductTypes.ToListAsync();

        }
        */
        

    }
}
