
import { ItemLine } from "../../common/product/ItemLine"
import { ProductItem } from "../../common/product/ProductItem"
import { Destination } from "../../components/Destination"
import { Hero } from "../../components/Hero"
import Navbar from "../../components/Navbar"
import UncontrolledExample from '../../common/silnderSlow/SinderSlow'
import { Footer } from "../../common/footer/Footer"
import { OmiCare } from "../../common/OmiCare/OmiCare"

export const Home = () => {
    return(
        <>
            <Navbar />
            <UncontrolledExample />
            <Destination />
            <ProductItem />
            <OmiCare />
            <Footer />           
        </>
    )
}