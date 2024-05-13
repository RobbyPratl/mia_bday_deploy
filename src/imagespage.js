import React from "react";
import ImageGrid from "./ImageGrid";
import Layout from "react-masonry-list";

// Import individual image files
import IMG_0769 from "./images_2/IMG_0769.jpg";
import IMG_7208 from "./images_2/IMG_7208.jpg";
import IMG_7295_2 from "./images_2/IMG_7295 2.jpg";
import IMG_7454 from "./images_2/IMG_7454.jpg";
import IMG_7836 from "./images_2/IMG_7836.jpg";
import IMG_0811 from "./images_2/IMG_0811.jpg";
import IMG_7227 from "./images_2/IMG_7227.jpg";
import IMG_7297 from "./images_2/IMG_7297.JPG";
import IMG_7467 from "./images_2/IMG_7467.jpg";
import lp_image_2 from "./images_2/lp_image 2.jpg";
import IMG_0816 from "./images_2/IMG_0816.jpg";
import IMG_7248_2 from "./images_2/IMG_7248 2.jpg";
import IMG_7307 from "./images_2/IMG_7307.JPG";
import IMG_7474 from "./images_2/IMG_7474.jpg";
import lp_image_3 from "./images_2/lp_image 3.jpg";
import IMG_7063_2 from "./images_2/IMG_7063 2.jpg";
import IMG_7249 from "./images_2/IMG_7249.jpg";
import IMG_7312 from "./images_2/IMG_7312.JPG";
import IMG_7479 from "./images_2/IMG_7479.jpg";
import lp_image from "./images_2/lp_image.jpg";
import IMG_7133 from "./images_2/IMG_7133.JPG";
import IMG_7250 from "./images_2/IMG_7250.jpg";
import IMG_7357 from "./images_2/IMG_7357.JPG";
import IMG_7572 from "./images_2/IMG_7572.jpg";
import IMG_7136 from "./images_2/IMG_7136.JPG";
import IMG_7251 from "./images_2/IMG_7251.jpg";
import IMG_7402 from "./images_2/IMG_7402.JPG";
import IMG_7584 from "./images_2/IMG_7584.jpg";
import IMG_7142_2 from "./images_2/IMG_7142 2.jpg";
import IMG_7254 from "./images_2/IMG_7254.jpg";
import IMG_7424 from "./images_2/IMG_7424.JPG";
import IMG_7595 from "./images_2/IMG_7595.jpg";
import IMG_7205_2 from "./images_2/IMG_7205 2.jpg";
import IMG_7289 from "./images_2/IMG_7289.jpg";
import IMG_7447 from "./images_2/IMG_7447.JPG";
import IMG_7762 from "./images_2/IMG_7762.jpg";

// second batch

import IMG_2023_10_22 from "./images_2/2023-10-22_3CCD35AE-3EBE-4655-B56A-D1E5E1EF744E-main.jpg";
import IMG_2024_01_15 from "./images_2/2024-01-15_CFE842EA-F1FE-4B9D-AA99-28E0A80424C6-main.jpg";
import IMG_2024_02_10 from "./images_2/2024-02-10_DDC72EAD-B3D3-4F22-AE78-553EE148E3D9-main.jpg";
import IMG_2024_02_12 from "./images_2/2024-02-12_BF6F0950-5DD7-4515-AE91-0E4E0895FC57-main.jpg";
import IMG_2024_02_13_1 from "./images_2/2024-02-13_49B1350D-FEE5-4AFF-BE8F-FD3A5E6FB93C-main.jpg";
import IMG_2024_02_13_2 from "./images_2/2024-02-13_C3E1423A-25CC-4DB7-9B97-51032EA5B698-main.jpg";
import IMG_2024_02_14 from "./images_2/2024-02-14_E7E594E5-A56A-4BB7-BBCF-16E8A9801F60-main.jpg";
import IMG_2024_02_17 from "./images_2/2024-02-17_F29A4DA3-6F3A-4E05-9BDA-EF1AA34AABAA-main.jpg";
import IMG_2024_02_23 from "./images_2/2024-02-23_EE84A6BD-F637-4CF4-B099-F51AC2BFEF8E-main.jpg";
import IMG_2024_02_26 from "./images_2/2024-02-26_CDB25E39-7F78-4158-B13F-B7F0BB8C1BD5-main.jpg";
import IMG_2024_03_01 from "./images_2/2024-03-01_338E5291-2831-4E39-9572-92D7A910B9C3-main.jpg";
import IMG_2024_03_02 from "./images_2/2024-03-02_875B6DF9-244F-4E3F-BCBC-63B57ECF57D8-main.jpg";
import IMG_2024_03_05 from "./images_2/2024-03-05_4F64F345-614A-4F08-8CCD-CED756EF553E-main.jpg";
import IMG_2024_03_07 from "./images_2/2024-03-07_E2342265-CF66-41FF-98FE-7BCFB9A32B31-main.jpg";
import IMG_2024_03_08_1 from "./images_2/2024-03-08_076AD1AE-66E7-49E5-AF13-899B586BA284-main.jpg";
import IMG_2024_03_08_2 from "./images_2/2024-03-08_5907ECD4-2EF8-41A5-9D05-403CA7687933-main.jpg";
import IMG_2024_03_08_3 from "./images_2/2024-03-08_F5B55541-CE0E-4F6D-BC8A-B37D8AE70442-main.jpg";
import IMG_2024_03_20 from "./images_2/2024-03-20_7E38213C-9896-46E7-8013-5C04BD58E103-main.jpg";

function Imagespage() {
  const items = [
    { src: IMG_0769, alt: "IMG_0769" },
    { src: IMG_7208, alt: "IMG_7208" },
    { src: IMG_7295_2, alt: "IMG_7295 2" },
    { src: IMG_7454, alt: "IMG_7454" },
    { src: IMG_7836, alt: "IMG_7836" },
    { src: IMG_0811, alt: "IMG_0811" },
    { src: IMG_7227, alt: "IMG_7227" },
    { src: IMG_7297, alt: "IMG_7297" },
    { src: IMG_7467, alt: "IMG_7467" },
    { src: lp_image_2, alt: "lp_image 2" },
    { src: IMG_0816, alt: "IMG_0816" },
    { src: IMG_7248_2, alt: "IMG_7248 2" },
    { src: IMG_7307, alt: "IMG_7307" },
    { src: IMG_7474, alt: "IMG_7474" },
    { src: lp_image_3, alt: "lp_image 3" },
    { src: IMG_7063_2, alt: "IMG_7063 2" },
    { src: IMG_7249, alt: "IMG_7249" },
    { src: IMG_7312, alt: "IMG_7312" },
    { src: IMG_7479, alt: "IMG_7479" },
    { src: lp_image, alt: "lp_image" },
    { src: IMG_7133, alt: "IMG_7133" },
    { src: IMG_7250, alt: "IMG_7250" },
    { src: IMG_7357, alt: "IMG_7357" },
    { src: IMG_7572, alt: "IMG_7572" },
    { src: IMG_7136, alt: "IMG_7136" },
    { src: IMG_7251, alt: "IMG_7251" },
    { src: IMG_7402, alt: "IMG_7402" },
    { src: IMG_7584, alt: "IMG_7584" },
    { src: IMG_7142_2, alt: "IMG_7142 2" },
    { src: IMG_7254, alt: "IMG_7254" },
    { src: IMG_7424, alt: "IMG_7424" },
    { src: IMG_7595, alt: "IMG_7595" },
    { src: IMG_7205_2, alt: "IMG_7205 2" },
    { src: IMG_7289, alt: "IMG_7289" },
    { src: IMG_7447, alt: "IMG_7447" },
    { src: IMG_7762, alt: "IMG_7762" },
    {
      src: IMG_2023_10_22,
      alt: "2023-10-22_3CCD35AE-3EBE-4655-B56A-D1E5E1EF744E-main",
    },
    {
      src: IMG_2024_01_15,
      alt: "2024-01-15_CFE842EA-F1FE-4B9D-AA99-28E0A80424C6-main",
    },
    {
      src: IMG_2024_02_10,
      alt: "2024-02-10_DDC72EAD-B3D3-4F22-AE78-553EE148E3D9-main",
    },
    {
      src: IMG_2024_02_12,
      alt: "2024-02-12_BF6F0950-5DD7-4515-AE91-0E4E0895FC57-main",
    },
    {
      src: IMG_2024_02_13_1,
      alt: "2024-02-13_49B1350D-FEE5-4AFF-BE8F-FD3A5E6FB93C-main",
    },
    {
      src: IMG_2024_02_13_2,
      alt: "2024-02-13_C3E1423A-25CC-4DB7-9B97-51032EA5B698-main",
    },
    {
      src: IMG_2024_02_14,
      alt: "2024-02-14_E7E594E5-A56A-4BB7-BBCF-16E8A9801F60-main",
    },
    {
      src: IMG_2024_02_17,
      alt: "2024-02-17_F29A4DA3-6F3A-4E05-9BDA-EF1AA34AABAA-main",
    },
    {
      src: IMG_2024_02_23,
      alt: "2024-02-23_EE84A6BD-F637-4CF4-B099-F51AC2BFEF8E-main",
    },
    {
      src: IMG_2024_02_26,
      alt: "2024-02-26_CDB25E39-7F78-4158-B13F-B7F0BB8C1BD5-main",
    },
    {
      src: IMG_2024_03_01,
      alt: "2024-03-01_338E5291-2831-4E39-9572-92D7A910B9C3-main",
    },
    {
      src: IMG_2024_03_02,
      alt: "2024-03-02_875B6DF9-244F-4E3F-BCBC-63B57ECF57D8-main",
    },
    {
      src: IMG_2024_03_05,
      alt: "2024-03-05_4F64F345-614A-4F08-8CCD-CED756EF553E-main",
    },
    {
      src: IMG_2024_03_07,
      alt: "2024-03-07_E2342265-CF66-41FF-98FE-7BCFB9A32B31-main",
    },
    {
      src: IMG_2024_03_08_1,
      alt: "2024-03-08_076AD1AE-66E7-49E5-AF13-899B586BA284-main",
    },
    {
      src: IMG_2024_03_08_2,
      alt: "2024-03-08_5907ECD4-2EF8-41A5-9D05-403CA7687933-main",
    },
    {
      src: IMG_2024_03_08_3,
      alt: "2024-03-08_F5B55541-CE0E-4F6D-BC8A-B37D8AE70442-main",
    },
    {
      src: IMG_2024_03_20,
      alt: "2024-03-20_7E38213C-9896-46E7-8013-5C04BD58E103-main",
    },
  ];
  return (
    <Layout
      minWidth={60}
      colCount={5}
      items={items.map((item) => (
        <div key={item.alt}>
          <img
            src={item.src}
            alt={item.alt}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>
      ))}
    ></Layout>
  );
}

export default Imagespage;
