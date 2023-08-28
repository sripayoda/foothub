using FootHub.Models;

namespace FootHub.Services.ProductCrud
{
    public interface ICrud
    {
       // Task<List<OcassionTable>> AddOcassion(OcassionTable ocassion);

        //Task<List<OcassionTable>> UpdateOcassion(int o_id, OcassionTable ocassion);

        Task<List<OcassionTable>> GetOcassions();

        //Task<List<OcassionTable>> RemoveOcassion(int o_id);
        
        //Task<List<BrandTable>> AddBrand(BrandTable brand);
        
        //Task<List<BrandTable>> UpdateBrand(int b_id, BrandTable brand);

        Task<List<BrandTable>> GetBrand();

        //Task<List<BrandTable>> RemoveBrand(int b_id);

        //Task<List<ProductTable>> AddProduct(ProductTable product);

        //Task<List<ProductTable>> UpdateProduct(int p_id, ProductTable product);

        Task<List<ProductTable>> GetProduct();

        //Task<List<ProductTable>> RemoveProduct(int p_id);

        //Task<List<ProductType>> AddProductType(ProductType productType);

        //Task<List<ProductType>> UpdateProductType(int p_id, ProductType productType);

        Task<List<ProductType>> GetProductType();

        //Task<List<ProductType>> RemoveProductType(int p_id);
    }
}
