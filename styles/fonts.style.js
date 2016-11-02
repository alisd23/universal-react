import { merge, fontFace, $ } from 'glamor';
import lightOS from 'assets/fonts/OpenSans-Light.ttf';
import regularOS from 'assets/fonts/OpenSans-Regular.ttf';
import semiboldOS from 'assets/fonts/OpenSans-Semibold.ttf';
import boldOS from 'assets/fonts/OpenSans-Bold.ttf';
import italicOS from 'assets/fonts/OpenSans-Italic.ttf';

const createFonts = (fonts) =>
  fonts.forEach(f => {
    f.types.forEach(t => {
      fontFace({
        fontFamily: f.name,
        fontStyle: t.style,
        fontWeight: t.weight,
        src: `local(${f.name}), url(${t.src})`
      })
    })
  });

const globalFonts = [
  {
    name: 'Open Sans',
    types: [
      { style: 'normal', weight: 300, src: lightOS },
      { style: 'normal', weight: 400, src: regularOS },
      { style: 'normal', weight: 500, src: semiboldOS },
      { style: 'normal', weight: 600, src: boldOS },
      { style: 'italic', weight: 400, src: italicOS }
    ]
  }
];

createFonts(globalFonts);

export default merge(
  {
    fontFamily: 'Open Sans',
    fontWeight: 400
  },
  $(' h1, h2, h3, h4, h5, h6', {
      fontFamily: 'Open Sans',
      fontWeight: 400
  })
)
