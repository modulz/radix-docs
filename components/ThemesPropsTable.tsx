import React from 'react';
import { PropsTable } from './PropsTable';
import * as themes from '@radix-ui/themes';
import { Code, Link as DSLink } from '@radix-ui/themes';
import NextLink from 'next/link';

const Link = ({ href = '', ...props }) => {
  if (href.startsWith('http')) {
    return <DSLink {...props} href={href} target="_blank" rel="noopener" />;
  }
  return (
    <NextLink href={href} passHref legacyBehavior>
      <DSLink {...props} />
    </NextLink>
  );
};

const asChildProp = {
  asChild: {
    required: false,
    type: 'boolean',
    default: false,
  },
};

const definitions = {
  avatar: themes.avatarPropDefs,
  button: { ...asChildProp, ...themes.buttonPropDefs },
  checkbox: themes.checkboxPropDefs,
  iconButton: { ...asChildProp, ...themes.iconButtonPropDefs },
  radioGroup: themes.radioGroupPropDefs,
  slider: themes.sliderPropDefs,
  switch: themes.switchPropDefs,
  tooltip: themes.tooltipPropDefs,
  box: themes.boxPropDefs,
  flex: { ...asChildProp, ...themes.flexPropDefs },
  grid: { ...asChildProp, ...themes.gridPropDefs },
  container: themes.containerPropDefs,
  section: themes.sectionPropDefs,
  text: {
    ...asChildProp,
    as: { required: false, type: 'enum', values: ['p', 'div', 'span'], default: 'span' },
    ...themes.textPropDefs,
  },
  heading: {
    ...asChildProp,
    as: {
      required: false,
      type: 'enum',
      values: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      default: 'h1',
    },
    ...themes.headingPropDefs,
  },
  link: { ...asChildProp, ...themes.linkPropDefs },
  blockquote: themes.blockquotePropDefs,
  code: themes.codePropDefs,
  textField: themes.textFieldPropDefs,
  textFieldSlot: themes.textFieldSlotPropDefs,
  textArea: themes.textAreaPropDefs,
  separator: themes.separatorPropDefs,
  badge: themes.badgePropDefs,
  layout: themes.layoutPropDefs,
  margin: themes.marginPropDefs,
  selectRoot: themes.selectRootPropDefs,
  selectTrigger: { ...asChildProp, ...themes.selectTriggerPropDefs },
  selectContent: themes.selectContentPropDefs,
  scrollArea: themes.scrollAreaPropDefs,
  dropdownMenuContent: themes.dropdownMenuContentPropDefs,
  dropdownMenuItem: themes.dropdownMenuItemPropDefs,
  contextMenuContent: themes.contextMenuContentPropDefs,
  contextMenuItem: themes.contextMenuItemPropDefs,
  theme: { ...asChildProp, ...themes.themePropDefs },
  card: { ...asChildProp, ...themes.cardPropDefs },
  tableRoot: { ...asChildProp, ...themes.tableRootPropDefs },
  tableRow: { ...asChildProp, ...themes.tableRowPropDefs },
  tableCell: { ...asChildProp, ...themes.tableCellPropDefs },
  calloutRoot: { ...themes.calloutRootPropDefs },
  inset: { ...themes.insetPropDefs },
  tabsList: { ...themes.tabsListPropDefs },
  kbd: { ...themes.kbdPropDefs },
  hoverCardContent: { ...themes.hoverCardContentPropDefs },
  dialogContent: { ...themes.dialogContentPropDefs },
  alertDialogContent: { ...themes.alertDialogContentPropDefs },
  popoverContent: { ...themes.popoverContentPropDefs },
} as const;

type PropDefinitions = typeof definitions;
type ComponentName = keyof PropDefinitions;

type UniqueDescriptions = {
  [K in keyof Partial<PropDefinitions>]: {
    [K2 in keyof Partial<PropDefinitions[K]>]: React.ReactNode;
  };
};

type ExtractProps<T> = {
  [K in keyof T]: T[K] extends object ? keyof ExtractProps<T[K]> : React.ReactNode;
};
type ExtractedProps = ExtractProps<PropDefinitions>;
type CommonDescriptions = {
  [K in ExtractedProps[keyof ExtractProps<PropDefinitions>]]?: React.ReactNode;
};

const uniqueDescriptions: UniqueDescriptions = {
  avatar: {
    fallback: 'The fallback element to render when an image is not available.',
  },
  scrollArea: { scrollbars: 'Controls the scrollable axes.' },
  theme: {
    appearance: (
      <>
        The color scheme of the theme (typcially referred to as light and dark mode). See the{' '}
        <Link href="/themes/docs/theme/dark-mode">dark mode guide</Link> for more details.
      </>
    ),
    accentColor: (
      <>
        The dominant color of the theme, see the{' '}
        <Link href="/themes/docs/theme/color">color guide</Link> for more details.
      </>
    ),
    grayColor: (
      <>
        The grayscale of the theme, see the <Link href="/themes/docs/theme/color">color guide</Link>{' '}
        for more details.
      </>
    ),
    hasBackground: 'Whether to apply the themes background color to the theme node.',
    scaling: (
      <>
        The linear scaling applied to the theme. See the{' '}
        <Link href="/themes/docs/theme/layout#scaling">layout guide</Link> for more details.
      </>
    ),
  },
  tooltip: {
    content: 'The content associated with the tooltip.',
    multiline: 'Used when you need to format the content across multiple lines.',
  },
  link: {
    underline: 'Sets the visibility of the underline affordance.',
  },
};

const commonDescriptions: CommonDescriptions = {
  variant: (
    <>
      The visual variant to apply, see{' '}
      <Link href="/themes/docs/theme/overview#variants">theme overview</Link> for more details.
    </>
  ),
  color: (
    <>
      Overrides the accent color inherited from the Theme. See the{' '}
      <Link href="/themes/docs/theme/color">color guide</Link> for more details.
    </>
  ),
  highContrast: 'Renders the component in higher contrast.',
  radius: (
    <>
      Overrides the radius inherited from the theme. See the{' '}
      <Link href="/themes/docs/theme/visual-style#radius">theme guide</Link> for more details.
    </>
  ),
  as: (
    <>
      Shorthand for changing the default rendered element into a semantically appropriate
      alternative. <br />
      <br />
      Cannot be used in combination with <Code>asChild</Code>.
    </>
  ),
  asChild: (
    <>
      Change the default rendered element for the one passed as a child, merging their props and
      behavior.
      <br />
      <br />
      Read our <Link href="/primitives/docs/guides/composition">Composition</Link> guide for more
      details.
    </>
  ),
  shortcut: 'Optional shortcut command displayed next to the item text.',
  trim: 'Removes the leading trim from the start or end of the rendered text node.',
};

function shouldBalanceArray(values?: readonly string[] | string) {
  return Array.isArray(values) && values.length > 5;
}

function formatValues(values?: readonly string[] | string) {
  if (Array.isArray(values)) {
    if (shouldBalanceArray(values)) {
      return formatToBalancedArray(values, 5);
    }

    return values
      .filter((item) => Boolean(item))
      .map((v) => `"${v}"`)
      .join(' | ');
  }

  if (values) {
    return `"${values}"`;
  }

  return undefined;
}

function formatToBalancedArray(input: string[], columns = 5) {
  const numberOfParts = Math.ceil(input.length / columns);

  const balancedArray = input
    .map((value) => `"${value}"`)
    .map((value, i, array) => {
      const matching = array.filter((v, j) => j % columns === i % columns);
      const longestPart = Math.max(...matching.map((el) => el.length)) + 1;
      return value.padEnd(longestPart, ' ');
    });

  const parts = [...Array(numberOfParts)].map((value, index) => {
    return balancedArray.slice(index * columns, (index + 1) * columns);
  });

  return parts.map((part) => part.join(' | ')).join('\n');
}

type ThemesPropsDef = Record<
  string,
  {
    type: string;
    values?: readonly string[];
    default?: boolean | string;
    required?: boolean;
    responsive?: boolean;
  }
>;

function applyResponsive(value: string | undefined, isResponsive) {
  if (value && isResponsive) {
    return `Responsive<${value
      // the empty spaces are so that we align nicely
      .replace(/\n/g, `\n${Array(12).join(' ')}`)
      .trim()}>`;
  }

  return value;
}

function formatDefinitions(definitions: Record<ComponentName, ThemesPropsDef>) {
  const formattedProps = {};

  Object.keys(definitions).forEach((componentName) => {
    const propsDef = definitions[componentName] as ThemesPropsDef;

    formattedProps[componentName] = Object.keys(propsDef).map((key) => {
      const item = propsDef[key];
      const propName = key;
      const description =
        uniqueDescriptions[componentName]?.[propName] || commonDescriptions[propName];

      const value = applyResponsive(formatValues(item.values), item.responsive);

      return {
        name: propName,
        required: item.required,
        typeSimple: item.values && !shouldBalanceArray(item.values) ? value : item.type,
        type: shouldBalanceArray(item.values) ? value : undefined,
        default:
          typeof item.default === 'boolean' ? String(item.default) : formatValues(item.default),
        description: description,
      };
    });
  });

  return formattedProps;
}

const props = formatDefinitions(definitions);

export function ThemesPropsTable({ name }: { name: string }) {
  return <PropsTable data={props[name]} propHeaderFixedWidth={false} />;
}
