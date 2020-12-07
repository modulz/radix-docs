import * as React from 'react';
import NextLink from 'next/link';
import * as DS from '@modulz/design-system';
import { Link2Icon } from '@modulz/radix-icons';
import { CodeBlock } from './CodeBlock';
import { PropsTable } from './PropsTable';
import { KeyboardTable } from './KeyboardTable';

const LinkHeading = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <DS.Box>
    <DS.Box
      as="a"
      href={`#${id}`}
      css={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'inline-flex',
        alignItems: 'center',
        svg: {
          opacity: 0,
        },
        ':hover svg': {
          opacity: 1,
        },
      }}
    >
      {children}
      <DS.Box as="span" css={{ ml: '$2', color: '$gray900' }}>
        <Link2Icon />
      </DS.Box>
    </DS.Box>
  </DS.Box>
);

export const MDXComponents = {
  h1: (props) => <DS.Title {...props} css={{ mb: '$1', ...props.css }} />,
  h2: (props) => <DS.Subtitle {...props} css={{ mt: '$2', mb: '$6', ...props.css }} />,
  h3: ({ children, id, ...props }) => (
    <LinkHeading id={id}>
      <DS.Heading {...props} id={id} data-heading css={{ mt: '$7', ...props.css }}>
        {children}
      </DS.Heading>
    </LinkHeading>
  ),
  h4: ({ children, id, ...props }) => (
    <LinkHeading id={id}>
      <DS.Subheading {...props} id={id} data-heading css={{ mt: '$7', ...props.css }}>
        {children}
      </DS.Subheading>
    </LinkHeading>
  ),
  code: (props) => (
    <DS.Box css={{ my: '$5' }}>
      <CodeBlock {...props} />
    </DS.Box>
  ),
  p: (props) => <DS.Paragraph {...props} css={{ mb: '$3', ...props.css }} as="p" />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('/')) {
      return (
        <NextLink href={href} passHref>
          <DS.Link
            {...props}
            css={{
              color: 'inherit',
              fontSize: 'inherit',
              ...props.css,
            }}
          />
        </NextLink>
      );
    }
    if (href.startsWith('#')) {
      return (
        <DS.Link
          {...props}
          href={href}
          css={{
            color: 'inherit',
            fontSize: 'inherit',
            ...props.css,
          }}
        />
      );
    }
    return (
      <DS.Link
        variant="blue"
        href={href}
        {...props}
        css={{
          fontSize: 'inherit',
          ...props.css,
        }}
        target="_blank"
        rel="noopener"
      />
    );
  },
  hr: (props) => <DS.Separator size="2" {...props} css={{ my: '$6', mx: 'auto', ...props.css }} />,
  inlineCode: (props) => <DS.Code {...props} />,
  ul: (props) => (
    <DS.Box {...props} css={{ color: '$hiContrast', mb: '$3', ...props.css }} as="ul" />
  ),
  ol: (props) => (
    <DS.Box {...props} css={{ color: '$hiContrast', mb: '$3', ...props.css }} as="ol" />
  ),
  li: (props) => (
    <li>
      <DS.Paragraph {...props} css={{ ...props.css }} />
    </li>
  ),
  strong: (props) => (
    <DS.Text {...props} css={{ ...props.css, fontSize: 'inherit', fontWeight: 500 }} />
  ),
  img: ({ ...props }) => (
    <DS.Box css={{ my: '$6' }}>
      <DS.Box
        as="img"
        {...props}
        css={{ maxWidth: '100%', verticalAlign: 'middle', ...props.css }}
      />
    </DS.Box>
  ),
  blockquote: (props) => (
    <DS.Box
      css={{
        mt: '$6',
        mb: '$5',
        pl: '$4',
        borderLeft: `1px solid $gray400`,
        color: 'orange',
        '& p': {
          fontSize: '$3',
          color: '$gray900',
          lineHeight: '25px',
        },
      }}
      {...props}
    />
  ),
  PropsTable: (props) => (
    <DS.Box css={{ mb: '$5' }}>
      <PropsTable {...props} />
    </DS.Box>
  ),
  KeyboardTable: (props) => (
    <DS.Box css={{ mb: '$5' }}>
      <KeyboardTable {...props} />
    </DS.Box>
  ),
  Kbd: DS.Kbd,
};
