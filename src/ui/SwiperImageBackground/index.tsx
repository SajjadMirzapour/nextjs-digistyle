import { fetchImageBackground, fetchMobileImageBackground } from "@/src/lib/data";
import BackgroundSlider from "./backgroundSlider";


async function ImageBackground() {

const imagesBackground = await fetchImageBackground()
const mobileImagesBackground = await fetchMobileImageBackground()

    return (
        <section>
            <BackgroundSlider data={imagesBackground} mobileDta={mobileImagesBackground} />
        </section>
    );
}

export default ImageBackground;