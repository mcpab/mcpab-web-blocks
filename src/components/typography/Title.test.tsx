import { describe, expect, it } from '@jest/globals';
import { renderToStaticMarkup } from 'react-dom/server';
import { Title } from './Title';

describe('Title', () => {
  it('uses readable text color by default', () => {
    const markup = renderToStaticMarkup(<Title sectionType="page">Page heading</Title>);

    expect(markup).toContain('Page heading');
    expect(markup).toContain('MuiTypography-h1');
    expect(markup).toContain('color:rgba(0, 0, 0, 0.87)');
    expect(markup).toContain('<h1 class="');
  });

  it('preserves explicit color overrides', () => {
    const markup = renderToStaticMarkup(
      <Title sectionType="section" color="primary">
        Accent heading
      </Title>,
    );

    expect(markup).toContain('Accent heading');
    expect(markup).toContain('MuiTypography-h2');
    expect(markup).toContain('color:#1976d2');
    expect(markup).toContain('<h2 class="');
  });
});
