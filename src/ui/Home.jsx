import ImageSlider from './ImageSlider';

function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Image Slider */}
      <ImageSlider
        images={[
          'ImageSlider/md17osbbqewc2glbfwea',
          'ImageSlider/jjuvb2dlyp8ssmzbwgsp',
          'yxoczxv4qh4it7zdozxv',
          'a1afmn2pdnpkyc0j45ev',
        ]}
        desc={{
          titles: [
            'תכנון ועיצוב בנייה פרטית',
            'תכנון ועיצוב מלונות',
            'תכנון ועיצוב מתחמי מסחר',
            'תכנון ועיצוב שכונות מגורים',
          ],
          details: [
            'בית פרטי למשפחה במושבת כנרת',
            'מלון על שפת הכנרת',
            'שערי המושבה',
            'שכונת רימון',
          ],
        }}
        s
      />
    </div>
  );
}

export default Home;
