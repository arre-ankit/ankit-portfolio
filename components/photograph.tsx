import Image from "next/image"

export function GallerySection() {
    return (
        <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8 text-white">I'm a Photographer 📸</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    "/Snapinsta.app_410182474_687346926527200_8938040163781791891_n_1080.jpg",
                    "/Snapinsta.app_290820325_1176370299822775_6764515071044441757_n_1080.jpg",
                    "/Snapinsta.app_294341660_379393034326593_2508151274359147139_n_1080.jpg",
                    "/Snapinsta.app_296844413_2233027476855247_3188460287510999960_n_1080.jpg",
                    "/Snapinsta.app_325504276_893255471873814_6028355058264949706_n_1080.jpg",
                    "/Snapinsta.app_407628297_7536348289726642_8977312441066667666_n_1080.jpg",
                    "/Snapinsta.app_357815360_637959254934782_3510561118277758862_n_1080.jpg",
                    "/Snapinsta.app_357642360_221293527482356_2091727702726468684_n_1080.jpg",
                    "/Snapinsta.app_336838066_556890146267382_6500881823469425943_n_1080.jpg",
                    "/Snapinsta.app_336507901_164610759781868_517369430883916725_n_1080.jpg",
                    "/Snapinsta.app_407628297_7536348289726642_8977312441066667666_n_1080.jpg",
                    "/Snapinsta.app_325521447_679458577257309_8072339987959580328_n_1080.jpg"
                ].map((src, index) => (
                    <a href={src} key={index} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <Image 
                            src={src} 
                            alt={`Gallery image ${index + 1}`} 
                            width={500} 
                            height={500}
                            className="rounded-lg"
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}