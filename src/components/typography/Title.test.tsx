import { Title } from './Title';

describe('Title', () => {
  it('uses readable text color by default', () => {
    const element = Title({ sectionType: 'page', children: 'Page heading' });

    expect(element).toMatchObject({
      props: {
        color: 'text.primary',
        variant: 'h1',
      },
    });
  });

  it('preserves explicit color overrides', () => {
    const element = Title({
      sectionType: 'section',
      color: 'primary',
      children: 'Accent heading',
    });

    expect(element).toMatchObject({
      props: {
        color: 'primary',
        variant: 'h2',
      },
    });
  });
});
