import Category from '../home/category/Category';
import Products from '../home/product/Products'
import Campaignsingle from '../home/campaignsingle/CampaignSingle';

function ShopPage() {
    return (
        <>
           <Category/>
            <Products/>
            <Campaignsingle/>
            <Products/>
        </>
    );
}

export default ShopPage;
