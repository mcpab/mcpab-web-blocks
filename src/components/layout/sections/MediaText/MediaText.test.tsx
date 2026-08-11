import { renderToStaticMarkup } from 'react-dom/server';

import { HtmlImage } from '../../../../core/image/imageExtensions';
import { MediaText } from './MediaText';

describe('MediaText caption', () => {
  it('renders caption content as caption typography in a semantic figure', () => {
    const markup = renderToStaticMarkup(
      <MediaText
        ImageComponent={HtmlImage}
        image="/example.jpg"
        message="Example message"
        caption={
          <>
            Figure 1. <em>Example caption.</em>
          </>
        }
      />,
    );

    expect(markup).toContain('<figure');
    expect(markup).toContain('<figcaption');
    expect(markup).toContain('MuiTypography-caption');
    expect(markup).toContain('Figure 1. <em>Example caption.</em>');
  });

  it('preserves the existing media markup when no caption is provided', () => {
    const markup = renderToStaticMarkup(
      <MediaText ImageComponent={HtmlImage} image="/example.jpg" message="Example message" />,
    );

    expect(markup).not.toContain('<figure');
    expect(markup).not.toContain('<figcaption');
  });
});
