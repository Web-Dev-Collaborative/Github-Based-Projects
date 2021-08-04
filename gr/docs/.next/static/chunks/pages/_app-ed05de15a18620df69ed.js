;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    798: function (e) {
      e.exports = {
        theme: {
          animation: { easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)' },
          borderWidths: [0, '1px'],
          breakpoints: ['544px', '768px', '1012px', '1280px'],
          fonts: {
            normal:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
            mono: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
          },
          fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '40px', '48px'],
          fontWeights: { light: 300, normal: 400, semibold: 500, bold: 600 },
          lineHeights: { condensedUltra: 1, condensed: 1.25, default: 1.5 },
          radii: ['0', '3px', '6px', '100px'],
          sizes: { small: '544px', medium: '768px', large: '1012px', xlarge: '1280px' },
          space: [
            '0',
            '4px',
            '8px',
            '16px',
            '24px',
            '32px',
            '40px',
            '48px',
            '64px',
            '80px',
            '96px',
            '112px',
            '128px',
          ],
          colorSchemes: {
            light: {
              colors: {
                auto: {
                  black: '#1b1f23',
                  white: '#ffffff',
                  gray: [
                    '#fafbfc',
                    '#f6f8fa',
                    '#e1e4e8',
                    '#d1d5da',
                    '#959da5',
                    '#6a737d',
                    '#586069',
                    '#444d56',
                    '#2f363d',
                    '#24292e',
                  ],
                  blue: [
                    '#f1f8ff',
                    '#dbedff',
                    '#c8e1ff',
                    '#79b8ff',
                    '#2188ff',
                    '#0366d6',
                    '#005cc5',
                    '#044289',
                    '#032f62',
                    '#05264c',
                  ],
                  green: [
                    '#f0fff4',
                    '#dcffe4',
                    '#bef5cb',
                    '#85e89d',
                    '#34d058',
                    '#28a745',
                    '#22863a',
                    '#176f2c',
                    '#165c26',
                    '#144620',
                  ],
                  yellow: [
                    '#fffdef',
                    '#fffbdd',
                    '#fff5b1',
                    '#ffea7f',
                    '#ffdf5d',
                    '#ffd33d',
                    '#f9c513',
                    '#dbab09',
                    '#b08800',
                    '#735c0f',
                  ],
                  orange: [
                    '#fff8f2',
                    '#ffebda',
                    '#ffd1ac',
                    '#ffab70',
                    '#fb8532',
                    '#f66a0a',
                    '#e36209',
                    '#d15704',
                    '#c24e00',
                    '#a04100',
                  ],
                  red: [
                    '#ffeef0',
                    '#ffdce0',
                    '#fdaeb7',
                    '#f97583',
                    '#ea4a5a',
                    '#d73a49',
                    '#cb2431',
                    '#b31d28',
                    '#9e1c23',
                    '#86181d',
                  ],
                  purple: [
                    '#f5f0ff',
                    '#e6dcfd',
                    '#d1bcf9',
                    '#b392f0',
                    '#8a63d2',
                    '#6f42c1',
                    '#5a32a3',
                    '#4c2889',
                    '#3a1d6e',
                    '#29134e',
                  ],
                  pink: [
                    '#ffeef8',
                    '#fedbf0',
                    '#f9b3dd',
                    '#f692ce',
                    '#ec6cb9',
                    '#ea4aaa',
                    '#d03592',
                    '#b93a86',
                    '#99306f',
                    '#6d224f',
                  ],
                },
                text: {
                  primary: '#24292e',
                  secondary: '#586069',
                  tertiary: '#6a737d',
                  placeholder: '#6a737d',
                  disabled: '#959da5',
                  inverse: '#ffffff',
                  link: '#0366d6',
                  danger: '#cb2431',
                  success: '#22863a',
                  warning: '#b08800',
                  white: '#ffffff',
                },
                icon: {
                  primary: '#24292e',
                  secondary: '#586069',
                  tertiary: '#959da5',
                  info: '#0366d6',
                  danger: '#d73a49',
                  success: '#22863a',
                  warning: '#b08800',
                },
                border: {
                  primary: '#e1e4e8',
                  secondary: 'hsla(214,13%,93%,1)',
                  tertiary: '#d1d5da',
                  overlay: '#e1e4e8',
                  inverse: '#ffffff',
                  info: '#0366d6',
                  danger: '#d73a49',
                  success: '#34d058',
                  warning: '#f9c513',
                },
                bg: {
                  canvas: '#ffffff',
                  canvasMobile: '#ffffff',
                  canvasInverse: '#24292e',
                  canvasInset: '#f6f8fa',
                  primary: '#ffffff',
                  secondary: '#fafbfc',
                  tertiary: '#f6f8fa',
                  overlay: '#ffffff',
                  backdrop: 'rgba(27,31,35,0.5)',
                  info: '#f1f8ff',
                  infoInverse: '#0366d6',
                  danger: '#ffeef0',
                  dangerInverse: '#d73a49',
                  success: '#dcffe4',
                  successInverse: '#28a745',
                  warning: '#fff5b1',
                  warningInverse: '#ffd33d',
                },
                state: {
                  hover: {
                    primaryBg: '#0366d6',
                    primaryBorder: '#0366d6',
                    primaryText: '#ffffff',
                    primaryIcon: '#ffffff',
                    secondaryBg: '#f6f8fa',
                    secondaryBorder: '#f6f8fa',
                  },
                  selected: {
                    primaryBg: '#0366d6',
                    primaryBorder: '#0366d6',
                    primaryText: '#ffffff',
                    primaryIcon: '#ffffff',
                  },
                  focus: { border: '#0366d6' },
                },
                fade: {
                  fg10: 'rgba(27,31,35,0.1)',
                  fg15: 'rgba(27,31,35,0.15)',
                  fg30: 'rgba(27,31,35,0.3)',
                  fg50: 'rgba(27,31,35,0.5)',
                  fg70: 'rgba(27,31,35,0.7)',
                  fg85: 'rgba(27,31,35,0.85)',
                  black10: 'rgba(27,31,35,0.1)',
                  black15: 'rgba(27,31,35,0.15)',
                  black30: 'rgba(27,31,35,0.3)',
                  black50: 'rgba(27,31,35,0.5)',
                  black70: 'rgba(27,31,35,0.7)',
                  black85: 'rgba(27,31,35,0.85)',
                  white10: 'rgba(255,255,255,0.1)',
                  white15: 'rgba(255,255,255,0.15)',
                  white30: 'rgba(255,255,255,0.3)',
                  white50: 'rgba(255,255,255,0.5)',
                  white70: 'rgba(255,255,255,0.7)',
                  white85: 'rgba(255,255,255,0.85)',
                },
                alert: {
                  info: {
                    text: '#24292e',
                    icon: 'rgba(4,66,137,0.6)',
                    bg: '#dbedff',
                    border: 'rgba(4,66,137,0.2)',
                  },
                  warn: {
                    text: '#24292e',
                    icon: '#b08800',
                    bg: '#fffbdd',
                    border: 'rgba(176,136,0,0.2)',
                  },
                  error: {
                    text: '#24292e',
                    icon: 'rgba(158,28,35,0.6)',
                    bg: '#ffe3e6',
                    border: 'rgba(158,28,35,0.2)',
                  },
                  success: {
                    text: '#24292e',
                    icon: 'rgba(23,111,44,0.8)',
                    bg: '#dcffe4',
                    border: 'rgba(23,111,44,0.2)',
                  },
                },
                autocomplete: { rowBorder: 'hsla(214,13%,93%,1)' },
                blankslate: { icon: 'hsla(212,8%,50%,1)' },
                btn: {
                  text: '#24292e',
                  bg: '#fafbfc',
                  border: 'rgba(27,31,35,0.15)',
                  hoverBg: '#f3f4f6',
                  hoverBorder: 'rgba(27,31,35,0.15)',
                  activeBg: 'hsla(220,14%,93%,1)',
                  activeBorder: 'rgba(27,31,35,0.1)',
                  selectedBg: 'hsla(220,14%,94%,1)',
                  focusBg: '#fafbfc',
                  focusBorder: 'rgba(27,31,35,0.15)',
                  counterBg: 'rgba(27,31,35,0.08)',
                  primary: {
                    text: '#ffffff',
                    bg: '#2ea44f',
                    border: 'rgba(27,31,35,0.15)',
                    hoverBg: '#2c974b',
                    hoverBorder: 'rgba(27,31,35,0.15)',
                    selectedBg: 'hsla(137,55%,36%,1)',
                    disabledText: 'rgba(255,255,255,0.8)',
                    disabledBg: '#94d3a2',
                    disabledBorder: 'rgba(27,31,35,0.1)',
                    focusBg: '#2ea44f',
                    focusBorder: 'rgba(27,31,35,0.15)',
                    icon: 'rgba(255,255,255,0.8)',
                    counterBg: 'rgba(255,255,255,0.2)',
                  },
                  outline: {
                    text: '#0366d6',
                    hoverText: '#ffffff',
                    hoverBg: '#0366d6',
                    hoverBorder: 'rgba(27,31,35,0.15)',
                    hoverCounterBg: 'rgba(255,255,255,0.2)',
                    selectedText: '#ffffff',
                    selectedBg: 'hsla(212,97%,40%,1)',
                    selectedBorder: 'rgba(27,31,35,0.15)',
                    disabledText: 'rgba(3,102,214,0.5)',
                    disabledBg: '#fafbfc',
                    disabledCounterBg: 'rgba(3,102,214,0.05)',
                    focusBorder: 'rgba(27,31,35,0.15)',
                    counterBg: 'rgba(3,102,214,0.1)',
                  },
                  danger: {
                    text: '#d73a49',
                    hoverText: '#ffffff',
                    hoverBg: '#cb2431',
                    hoverBorder: 'rgba(27,31,35,0.15)',
                    hoverCounterBg: 'rgba(255,255,255,0.2)',
                    selectedText: '#ffffff',
                    selectedBg: 'hsla(354,66%,51%,1)',
                    selectedBorder: 'rgba(27,31,35,0.15)',
                    disabledText: 'rgba(215,58,73,0.5)',
                    disabledBg: '#fafbfc',
                    disabledCounterBg: 'rgba(215,58,73,0.05)',
                    focusBorder: 'rgba(27,31,35,0.15)',
                    counterBg: 'rgba(215,58,73,0.1)',
                    icon: '#d73a49',
                    hoverIcon: '#ffffff',
                  },
                },
                counter: {
                  text: '#24292e',
                  bg: 'rgba(209,213,218,0.5)',
                  primary: { text: '#ffffff', bg: '#6a737d' },
                  secondary: { text: '#6a737d', bg: 'rgba(209,213,218,0.5)' },
                },
                label: {
                  border: '#e1e4e8',
                  primary: { text: '#24292e', border: '#6a737d' },
                  secondary: { text: '#586069', border: '#e1e4e8' },
                  info: { text: '#0366d6', border: '#0366d6' },
                  success: { text: '#22863a', border: '#28a745' },
                  warning: { text: '#735c0f', border: '#b08800' },
                  danger: { text: '#d73a49', border: '#cb2431' },
                  orange: { text: '#c24e00', border: '#f66a0a' },
                },
                input: {
                  bg: '#ffffff',
                  contrastBg: '#fafbfc',
                  border: '#e1e4e8',
                  disabledBg: '#f6f8fa',
                  disabledBorder: '#e1e4e8',
                  warningBorder: '#f9c513',
                  errorBorder: '#cb2431',
                  tooltip: {
                    success: { text: '#144620', bg: '#dcffe4', border: '#34d058' },
                    warning: { text: '#735c0f', bg: '#fff5b1', border: '#f9c513' },
                    error: { text: '#86181d', bg: '#ffeef0', border: '#f97583' },
                  },
                },
                avatar: {
                  bg: '#ffffff',
                  border: 'rgba(0,0,0,0)',
                  stackFade: '#d1d5da',
                  stackFadeMore: '#e1e4e8',
                },
                toast: {
                  text: '#24292e',
                  bg: '#ffffff',
                  border: '#e1e4e8',
                  icon: '#ffffff',
                  iconBg: '#0366d6',
                  iconBorder: 'rgba(0,0,0,0)',
                  success: {
                    text: '#24292e',
                    border: '#e1e4e8',
                    icon: '#ffffff',
                    iconBg: '#28a745',
                    iconBorder: 'rgba(0,0,0,0)',
                  },
                  warning: {
                    text: '#24292e',
                    border: '#e1e4e8',
                    icon: '#24292e',
                    iconBg: '#ffd33d',
                    iconBorder: 'rgba(0,0,0,0)',
                  },
                  danger: {
                    text: '#24292e',
                    border: '#e1e4e8',
                    icon: '#ffffff',
                    iconBg: '#d73a49',
                    iconBorder: 'rgba(0,0,0,0)',
                  },
                  loading: {
                    text: '#24292e',
                    border: '#e1e4e8',
                    icon: '#ffffff',
                    iconBg: '#586069',
                    iconBorder: 'rgba(0,0,0,0)',
                  },
                },
                timeline: {
                  text: '#444d56',
                  badgeBg: '#e1e4e8',
                  badgeSuccessBorder: 'rgba(0,0,0,0)',
                  targetBadgeBorder: '#2188ff',
                  targetBadgeShadow: '#c8e1ff',
                },
                selectMenu: {
                  borderSecondary: 'hsla(214,13%,93%,1)',
                  backdropBg: 'rgba(27,31,35,0.5)',
                  backdropBorder: 'rgba(0,0,0,0)',
                  tapHighlight: 'rgba(209,213,218,0.5)',
                  tapFocusBg: '#dbedff',
                },
                box: {
                  blueBorder: '#c8e1ff',
                  rowYellowBg: '#fffbdd',
                  rowBlueBg: '#f1f8ff',
                  headerBlueBg: '#f1f8ff',
                  headerBlueBorder: '#c8e1ff',
                  borderInfo: 'rgba(3,102,214,0.2)',
                  bgInfo: '#f1f8ff',
                  borderWarning: 'rgba(255,211,61,0.4)',
                  bgWarning: '#fffdef',
                },
                branchName: {
                  text: '#586069',
                  icon: 'hsla(212,30%,74%,1)',
                  bg: 'hsla(210,100%,96%,1)',
                  link: {
                    text: '#0366d6',
                    icon: 'hsla(212,30%,74%,1)',
                    bg: 'hsla(210,100%,96%,1)',
                  },
                },
                markdown: {
                  codeBg: 'rgba(27,31,35,0.05)',
                  frameBorder: 'hsla(213,11%,89%,1)',
                  blockquoteBorder: 'hsla(213,11%,89%,1)',
                  tableBorder: 'hsla(213,11%,89%,1)',
                  tableTrBorder: 'hsla(213,11%,80%,1)',
                },
                menu: {
                  headingText: '#24292e',
                  borderActive: '#f9826c',
                  bgActive: 'rgba(0,0,0,0)',
                },
                sidenav: { selectedBg: '#ffffff', borderActive: '#f9826c' },
                header: { text: 'rgba(255,255,255,0.7)', bg: '#24292e', logo: '#ffffff' },
                filterItem: { barBg: 'hsla(210,29%,95%,1)' },
                hiddenTextExpander: { bg: 'hsla(213,11%,89%,1)', bgHover: 'hsla(213,11%,80%,1)' },
                dragAndDrop: { border: 'hsla(213,11%,79%,1)' },
                uploadEnabled: {
                  border: 'hsla(213,11%,89%,1)',
                  borderFocused: 'hsla(212,100%,64%,1)',
                },
                previewableCommentForm: { border: 'hsla(213,11%,79%,1)' },
                underlinenav: {
                  border: 'rgba(209,213,218,0)',
                  borderHover: '#d1d5da',
                  borderActive: '#f9826c',
                  text: '#24292e',
                  textHover: '#24292e',
                  textActive: '#24292e',
                  icon: '#959da5',
                  iconHover: '#959da5',
                  iconActive: '#24292e',
                  counterText: '#24292e',
                  counterBg: 'rgba(209,213,218,0.5)',
                },
                verifiedBadge: { text: '#22863a', bg: '#ffffff', border: '#e1e4e8' },
                socialCount: { bg: '#ffffff' },
                tooltip: { text: '#ffffff', bg: '#24292e' },
                headerSearch: { bg: '#24292e', border: '#444d56' },
                searchKeyword: { hl: '#fffbdd' },
                diffstat: {
                  neutralBg: '#d1d5da',
                  neutralBorder: '#d1d5da',
                  deletionBg: '#d73a49',
                  deletionBorder: '#d73a49',
                  additionBg: '#28a745',
                  additionBorder: '#28a745',
                },
                mktg: {
                  success: 'rgba(46,188,79,1)',
                  info: 'rgba(16,116,231,1)',
                  bgShadeGradient: { top: 'rgba(27,31,35,0.065)', bottom: 'rgba(27,31,35,0)' },
                  btn: {
                    bg: { top: 'hsla(228,82%,66%,1)', bottom: '#4969ed' },
                    bgOverlay: { top: 'hsla(228,74%,59%,1)', bottom: '#3355e0' },
                    text: '#ffffff',
                    primary: {
                      bg: { top: 'hsla(137,56%,46%,1)', bottom: '#2ea44f' },
                      bgOverlay: { top: 'hsla(134,60%,38%,1)', bottom: '#22863a' },
                      text: '#ffffff',
                    },
                    enterprise: {
                      bg: { top: 'hsla(249,100%,72%,1)', bottom: '#6f57ff' },
                      bgOverlay: { top: 'hsla(248,65%,63%,1)', bottom: '#614eda' },
                      text: '#ffffff',
                    },
                    outline: {
                      text: '#4969ed',
                      border: 'rgba(73,105,237,0.3)',
                      hover: { text: '#3355e0', border: 'rgba(51,85,224,0.5)' },
                      focus: { border: '#4969ed', borderInset: 'rgba(73,105,237,0.5)' },
                    },
                    dark: {
                      text: '#ffffff',
                      border: 'rgba(255,255,255,0.3)',
                      hover: { text: '#ffffff', border: 'rgba(255,255,255,0.5)' },
                      focus: { border: '#ffffff', borderInset: 'rgba(255,255,255,0.5)' },
                    },
                  },
                },
                filesExplorerIcon: '#79b8ff',
                hlAuthorBg: '#f1f8ff',
                hlAuthorBorder: '#c8e1ff',
                logoSubdued: '#d1d5da',
                discussionBorder: 'hsla(135,28%,72%,1)',
                discussionBgSuccess: '#28a745',
                actionsWorkflowTableStickyBg: 'rgba(255,255,255,0.95)',
                repoLanguageColorBorder: 'rgba(27,31,35,0.1)',
                codeSelectionBg: '#c8e1ff',
                highlight: { text: '#442c12', bg: '#fff0bb' },
                blob: { lineHighlightBg: '#fffbdd', lineHighlightBorder: 'rgba(0,0,0,0)' },
                diff: {
                  addition: { text: '#22863a', bg: 'hsla(136,100%,95%,1)', border: '#34d058' },
                  deletion: { text: '#cb2431', bg: '#ffeef0', border: '#d73a49' },
                  change: { text: '#b08800', bg: '#fff5b1', border: '#f9c513' },
                },
                diffBlob: {
                  numText: 'rgba(27,31,35,0.3)',
                  numHoverText: 'rgba(27,31,35,0.6)',
                  addition: {
                    numText: 'rgba(27,31,35,0.3)',
                    numHoverText: 'rgba(27,31,35,0.6)',
                    numBg: 'hsla(134,100%,90%,1)',
                    lineBg: 'hsla(136,100%,95%,1)',
                    wordBg: 'hsla(134,73%,81%,1)',
                  },
                  deletion: {
                    numText: 'rgba(27,31,35,0.3)',
                    numHoverText: 'rgba(27,31,35,0.6)',
                    numBg: '#ffdce0',
                    lineBg: '#ffeef0',
                    wordBg: 'hsla(353,95%,86%,1)',
                  },
                  hunk: { text: 'rgba(27,31,35,0.7)', numBg: '#dbedff', lineBg: '#f1f8ff' },
                  emptyBlockBg: '#fafbfc',
                  selectedLineHighlightBg: 'rgba(255,223,93,0.2)',
                  selectedLineHighlightBorder: '#ffd33d',
                  expander: { icon: '#586069', hoverIcon: '#ffffff', hoverBg: '#0366d6' },
                  commentButton: {
                    icon: '#ffffff',
                    bg: '#0366d6',
                    gradientBg: 'hsla(212,97%,48%,1)',
                  },
                },
                globalNav: {
                  logo: '#ffffff',
                  bg: '#24292e',
                  text: '#ffffff',
                  icon: '#ffffff',
                  inputBg: '#fafbfc',
                  inputBorder: '#fafbfc',
                  inputIcon: '#d1d5da',
                  inputPlaceholder: '#959da5',
                },
                footerInvertocat: { octicon: '#d1d5da', octiconHover: '#6a737d' },
                prState: {
                  draft: { text: '#ffffff', bg: '#6a737d', border: 'rgba(0,0,0,0)' },
                  open: { text: '#ffffff', bg: '#28a745', border: 'rgba(0,0,0,0)' },
                  merged: { text: '#ffffff', bg: '#6f42c1', border: 'rgba(0,0,0,0)' },
                  closed: { text: '#ffffff', bg: '#d73a49', border: 'rgba(0,0,0,0)' },
                },
                topicTag: {
                  text: '#0366d6',
                  bg: '#f1f8ff',
                  hoverBg: 'hsla(210,100%,93%,1)',
                  activeBg: 'hsla(210,100%,95%,1)',
                },
                mergeBox: {
                  successIconBg: '#28a745',
                  successIconText: '#ffffff',
                  successIconBorder: 'rgba(0,0,0,0)',
                  successIndicatorBg: '#28a745',
                  successIndicatorBorder: 'rgba(0,0,0,0)',
                  mergedIconBg: '#6f42c1',
                  mergedIconText: '#ffffff',
                  mergedIconBorder: 'rgba(0,0,0,0)',
                  mergedBoxBorder: '#6f42c1',
                  neutralIconBg: '#6a737d',
                  neutralIconText: '#ffffff',
                  neutralIconBorder: 'rgba(0,0,0,0)',
                  neutralIndicatorBg: '#6a737d',
                  neutralIndicatorBorder: 'rgba(0,0,0,0)',
                  warningIconBg: '#dbab09',
                  warningIconText: '#ffffff',
                  warningIconBorder: 'rgba(0,0,0,0)',
                  warningBoxBorder: '#ffd33d',
                  warningMergeHighlight: 'rgba(0,0,0,0)',
                  errorIconBg: '#d73a49',
                  errorIconText: '#ffffff',
                  errorIconBorder: 'rgba(0,0,0,0)',
                  errorIndicatorBg: '#d73a49',
                  errorIndicatorBorder: 'rgba(0,0,0,0)',
                },
                project: {
                  cardBg: '#ffffff',
                  headerBg: '#24292e',
                  sidebarBg: '#ffffff',
                  gradientIn: '#ffffff',
                  gradientOut: 'rgba(255,255,255,0)',
                },
                checks: {
                  bg: '#24292e',
                  textPrimary: '#fafbfc',
                  textSecondary: '#959da5',
                  textLink: '#79b8ff',
                  btnIcon: '#d1d5da',
                  btnHoverIcon: '#fafbfc',
                  btnHoverBg: 'rgba(255,255,255,0.125)',
                  inputText: '#f6f8fa',
                  inputPlaceholderText: '#959da5',
                  inputFocusText: '#959da5',
                  inputBg: '#2f363d',
                  dropdownText: '#d1d5da',
                  dropdownBg: '#2f363d',
                  dropdownBorder: '#444d56',
                  dropdownHoverText: '#fafbfc',
                  dropdownHoverBg: '#444d56',
                  dropdownBtnHoverText: '#fafbfc',
                  dropdownBtnHoverBg: '#2f363d',
                  scrollbarThumbBg: '#586069',
                  headerLabelText: '#e1e4e8',
                  headerLabelOpenText: '#fafbfc',
                  headerBorder: '#2f363d',
                  headerIcon: '#959da5',
                  lineText: '#e1e4e8',
                  lineNumText: 'rgba(149,157,165,0.75)',
                  lineTimestampText: '#959da5',
                  lineHoverBg: '#2f363d',
                  lineSelectedBg: 'rgba(33,136,255,0.15)',
                  lineSelectedNumText: '#79b8ff',
                  lineDtFmText: '#24292e',
                  lineDtFmBg: '#ffd33d',
                  gateBg: 'rgba(249,197,19,0.15)',
                  gateText: '#e1e4e8',
                  gateWaitingText: '#d1d5da',
                  stepHeaderOpenBg: '#2f363d',
                  stepErrorText: '#f97583',
                  stepWarningText: '#ffea7f',
                  loglineText: '#959da5',
                  loglineNumText: 'rgba(149,157,165,0.75)',
                  loglineDebugText: '#b392f0',
                  loglineErrorText: '#e1e4e8',
                  loglineErrorNumText: '#f97583',
                  loglineErrorBg: 'rgba(203,36,49,0.15)',
                  loglineWarningText: '#e1e4e8',
                  loglineWarningNumText: '#ffea7f',
                  loglineWarningBg: 'rgba(249,197,19,0.15)',
                  loglineCommandText: '#79b8ff',
                  loglineSectionText: '#85e89d',
                  ansi: {
                    black: '#24292e',
                    blackBright: '#2f363d',
                    white: '#e1e4e8',
                    whiteBright: '#e1e4e8',
                    gray: '#959da5',
                    red: '#f97583',
                    redBright: '#fdaeb7',
                    green: '#85e89d',
                    greenBright: '#bef5cb',
                    yellow: '#ffea7f',
                    yellowBright: '#fff5b1',
                    blue: '#79b8ff',
                    blueBright: '#c8e1ff',
                    magenta: '#b392f0',
                    magentaBright: '#d1bcf9',
                    cyan: '#76e3ea',
                    cyanBright: '#b3f0ff',
                  },
                },
                introShelf: {
                  gradientLeft: '#f1f8ff',
                  gradientRight: '#dcffe4',
                  gradientIn: '#ffffff',
                  gradientOut: 'rgba(255,255,255,0)',
                },
                marketingIcon: { primary: '#2188ff', secondary: '#79b8ff' },
                prettylights: {
                  syntax: {
                    comment: '#6a737d',
                    constant: '#005cc5',
                    entity: '#6f42c1',
                    storageModifierImport: '#24292e',
                    entityTag: '#22863a',
                    keyword: '#d73a49',
                    string: '#032f62',
                    variable: '#e36209',
                    brackethighlighterUnmatched: '#b31d28',
                    invalidIllegalText: '#fafbfc',
                    invalidIllegalBg: '#b31d28',
                    carriageReturnText: '#fafbfc',
                    carriageReturnBg: '#d73a49',
                    stringRegexp: '#22863a',
                    markupList: '#735c0f',
                    markupHeading: '#005cc5',
                    markupItalic: '#24292e',
                    markupBold: '#24292e',
                    markupDeletedText: '#b31d28',
                    markupDeletedBg: '#ffeef0',
                    markupInsertedText: '#22863a',
                    markupInsertedBg: '#f0fff4',
                    markupChangedText: '#e36209',
                    markupChangedBg: '#ffebda',
                    markupIgnoredText: '#f6f8fa',
                    markupIgnoredBg: '#005cc5',
                    metaDiffRange: '#6f42c1',
                    brackethighlighterAngle: '#586069',
                    sublimelinterGutterMark: '#959da5',
                    constantOtherReferenceLink: '#032f62',
                  },
                },
                codemirror: {
                  text: '#24292e',
                  bg: '#ffffff',
                  guttersBg: '#ffffff',
                  guttermarkerText: '#ffffff',
                  guttermarkerSubtleText: '#d1d5da',
                  linenumberText: '#959da5',
                  cursor: '#24292e',
                  selectionBg: '#c8e1ff',
                  activelineBg: '#fafbfc',
                  matchingbracketText: '#24292e',
                  linesBg: '#ffffff',
                  syntax: {
                    comment: '#6a737d',
                    constant: '#005cc5',
                    entity: '#6f42c1',
                    keyword: '#d73a49',
                    storage: '#d73a49',
                    string: '#032f62',
                    support: '#005cc5',
                    variable: '#e36209',
                  },
                },
                ansi: {
                  black: '#24292e',
                  blackBright: '#586069',
                  white: '#6a737d',
                  whiteBright: '#959da5',
                  gray: '#6a737d',
                  red: '#d73a49',
                  redBright: '#cb2431',
                  green: '#22863a',
                  greenBright: '#28a745',
                  yellow: '#b08800',
                  yellowBright: '#dbab09',
                  blue: '#0366d6',
                  blueBright: '#2188ff',
                  magenta: '#6f42c1',
                  magentaBright: '#8a63d2',
                  cyan: '#1b7c83',
                  cyanBright: '#3192aa',
                },
              },
              shadows: {
                shadow: {
                  small: '0 1px 0 rgba(27,31,35,0.04)',
                  medium: '0 3px 6px rgba(149,157,165,0.15)',
                  large: '0 8px 24px rgba(149,157,165,0.2)',
                  extraLarge: '0 12px 48px rgba(149,157,165,0.3)',
                  highlight: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                  inset: 'inset 0 1px 0 rgba(225,228,232,0.2)',
                },
                state: { focus: { shadow: '0 0 0 3px rgba(3,102,214,0.3)' } },
                autocomplete: { shadow: '0 3px 6px rgba(149,157,165,0.15)' },
                btn: {
                  shadow: '0 1px 0 rgba(27,31,35,0.04)',
                  insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                  focusShadow: '0 0 0 3px rgba(3,102,214,0.3)',
                  shadowActive: 'inset 0 0.15em 0.3em rgba(27,31,35,0.15)',
                  shadowInputFocus: '0 0 0 0.2em rgba(3,102,214,0.3)',
                  primary: {
                    shadow: '0 1px 0 rgba(27,31,35,0.1)',
                    insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                    selectedShadow: 'inset 0 1px 0 rgba(20,70,32,0.2)',
                    focusShadow: '0 0 0 3px rgba(46,164,79,0.4)',
                  },
                  outline: {
                    hoverShadow: '0 1px 0 rgba(27,31,35,0.1)',
                    hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                    selectedShadow: 'inset 0 1px 0 rgba(5,38,76,0.2)',
                    focusShadow: '0 0 0 3px rgba(0,92,197,0.4)',
                  },
                  danger: {
                    hoverShadow: '0 1px 0 rgba(27,31,35,0.1)',
                    hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                    selectedShadow: 'inset 0 1px 0 rgba(134,24,29,0.2)',
                    focusShadow: '0 0 0 3px rgba(203,36,49,0.4)',
                  },
                },
                dropdown: { shadow: '0 8px 24px rgba(149,157,165,0.2)' },
                overlay: {
                  shadow: '0 1px 3px rgba(27,31,35,0.12), 0 8px 24px rgba(68,77,86,0.12)',
                },
                input: { shadow: 'inset 0 1px 2px rgba(27,31,35,0.075)' },
                avatar: { childShadow: '-2px -2px 0 rgba(255,255,255,0.8)' },
                toast: { shadow: '0 8px 24px rgba(149,157,165,0.2)' },
                selectMenu: { shadow: '0 0 18px rgba(27,31,35,0.4)' },
              },
            },
            dark: {
              colors: {
                auto: {
                  black: '#f0f6fc',
                  white: '#010409',
                  gray: [
                    '#0d1117',
                    '#161b22',
                    '#21262d',
                    '#30363d',
                    '#484f58',
                    '#6e7681',
                    '#8b949e',
                    '#b1bac4',
                    '#c9d1d9',
                    '#f0f6fc',
                  ],
                  blue: [
                    '#051d4d',
                    '#0c2d6b',
                    '#0d419d',
                    '#1158c7',
                    '#1f6feb',
                    '#388bfd',
                    '#58a6ff',
                    '#79c0ff',
                    '#a5d6ff',
                    '#cae8ff',
                  ],
                  green: [
                    '#04260f',
                    '#033a16',
                    '#0f5323',
                    '#196c2e',
                    '#238636',
                    '#2ea043',
                    '#3fb950',
                    '#56d364',
                    '#7ee787',
                    '#aff5b4',
                  ],
                  yellow: [
                    '#341a00',
                    '#4b2900',
                    '#693e00',
                    '#845306',
                    '#9e6a03',
                    '#bb8009',
                    '#d29922',
                    '#e3b341',
                    '#f2cc60',
                    '#f8e3a1',
                  ],
                  orange: [
                    '#3d1300',
                    '#5a1e02',
                    '#762d0a',
                    '#9b4215',
                    '#bd561d',
                    '#db6d28',
                    '#f0883e',
                    '#ffa657',
                    '#ffc680',
                    '#ffdfb6',
                  ],
                  red: [
                    '#490202',
                    '#67060c',
                    '#8e1519',
                    '#b62324',
                    '#da3633',
                    '#f85149',
                    '#ff7b72',
                    '#ffa198',
                    '#ffc1ba',
                    '#ffdcd7',
                  ],
                  purple: [
                    '#271052',
                    '#3c1e70',
                    '#553098',
                    '#6e40c9',
                    '#8957e5',
                    '#a371f7',
                    '#bc8cff',
                    '#d2a8ff',
                    '#e2c5ff',
                    '#eddeff',
                  ],
                  pink: [
                    '#42062a',
                    '#5e103e',
                    '#7d2457',
                    '#9e3670',
                    '#bf4b8a',
                    '#db61a2',
                    '#f778ba',
                    '#ff9bce',
                    '#ffbedd',
                    '#ffdaec',
                  ],
                },
                text: {
                  primary: '#c9d1d9',
                  secondary: '#8b949e',
                  tertiary: '#8b949e',
                  placeholder: '#484f58',
                  disabled: '#484f58',
                  inverse: '#0d1117',
                  link: '#58a6ff',
                  danger: '#f85149',
                  success: '#56d364',
                  warning: '#e3b341',
                  white: '#f0f6fc',
                },
                icon: {
                  primary: '#c9d1d9',
                  secondary: '#6e7681',
                  tertiary: '#484f58',
                  info: '#58a6ff',
                  danger: '#f85149',
                  success: '#56d364',
                  warning: '#e3b341',
                },
                border: {
                  primary: '#30363d',
                  secondary: '#21262d',
                  tertiary: '#6e7681',
                  overlay: '#30363d',
                  inverse: '#f0f6fc',
                  info: 'rgba(56,139,253,0.4)',
                  danger: 'rgba(248,81,73,0.4)',
                  success: 'rgba(63,185,80,0.4)',
                  warning: 'rgba(187,128,9,0.4)',
                },
                bg: {
                  canvas: '#0d1117',
                  canvasMobile: '#010409',
                  canvasInverse: '#f0f6fc',
                  canvasInset: 'hsla(216,28%,5%,1)',
                  primary: '#0d1117',
                  secondary: '#0d1117',
                  tertiary: '#161b22',
                  overlay: 'rgba(28,33,40,1)',
                  backdrop: 'rgba(1,4,9,0.8)',
                  info: 'rgba(56,139,253,0.1)',
                  infoInverse: '#388bfd',
                  danger: 'rgba(248,81,73,0.1)',
                  dangerInverse: '#da3633',
                  success: 'rgba(46,160,67,0.1)',
                  successInverse: '#2ea043',
                  warning: 'rgba(187,128,9,0.1)',
                  warningInverse: '#bb8009',
                },
                state: {
                  hover: {
                    primaryBg: '#1f6feb',
                    primaryBorder: '#388bfd',
                    primaryText: '#f0f6fc',
                    primaryIcon: '#f0f6fc',
                    secondaryBg: '#161b22',
                    secondaryBorder: '#161b22',
                  },
                  selected: {
                    primaryBg: '#1f6feb',
                    primaryBorder: '#388bfd',
                    primaryText: '#f0f6fc',
                    primaryIcon: '#f0f6fc',
                  },
                  focus: { border: '#388bfd' },
                },
                fade: {
                  fg10: 'rgba(240,246,252,0.1)',
                  fg15: 'rgba(240,246,252,0.15)',
                  fg30: 'rgba(240,246,252,0.3)',
                  fg50: 'rgba(240,246,252,0.5)',
                  fg70: 'rgba(240,246,252,0.7)',
                  fg85: 'rgba(240,246,252,0.85)',
                  black10: 'rgba(1,4,9,0.1)',
                  black15: 'rgba(1,4,9,0.15)',
                  black30: 'rgba(1,4,9,0.3)',
                  black50: 'rgba(1,4,9,0.5)',
                  black70: 'rgba(1,4,9,0.7)',
                  black85: 'rgba(1,4,9,0.85)',
                  white10: 'rgba(240,246,252,0.1)',
                  white15: 'rgba(240,246,252,0.15)',
                  white30: 'rgba(240,246,252,0.3)',
                  white50: 'rgba(240,246,252,0.5)',
                  white70: 'rgba(240,246,252,0.7)',
                  white85: 'rgba(240,246,252,0.85)',
                },
                alert: {
                  info: {
                    text: '#79c0ff',
                    icon: '#79c0ff',
                    bg: 'rgba(56,139,253,0.1)',
                    border: 'rgba(56,139,253,0.4)',
                  },
                  warn: {
                    text: '#e3b341',
                    icon: '#e3b341',
                    bg: 'rgba(187,128,9,0.1)',
                    border: 'rgba(187,128,9,0.4)',
                  },
                  error: {
                    text: '#ff7b72',
                    icon: '#ff7b72',
                    bg: 'rgba(248,81,73,0.1)',
                    border: 'rgba(248,81,73,0.4)',
                  },
                  success: {
                    text: '#56d364',
                    icon: '#56d364',
                    bg: 'rgba(46,160,67,0.1)',
                    border: 'rgba(46,160,67,0.4)',
                  },
                },
                autocomplete: { rowBorder: '#30363d' },
                blankslate: { icon: 'hsla(214,10%,36%,1)' },
                btn: {
                  text: '#c9d1d9',
                  bg: '#21262d',
                  border: '#30363d',
                  hoverBg: '#30363d',
                  hoverBorder: '#8b949e',
                  activeBg: 'hsla(212,12%,18%,1)',
                  activeBorder: '#6e7681',
                  selectedBg: '#161b22',
                  focusBg: '#21262d',
                  focusBorder: '#8b949e',
                  primary: {
                    text: '#ffffff',
                    bg: '#238636',
                    border: '#2ea043',
                    hoverBg: '#2ea043',
                    hoverBorder: '#3fb950',
                    selectedBg: '#238636',
                    disabledText: 'rgba(240,246,252,0.5)',
                    disabledBg: 'rgba(35,134,54,0.6)',
                    disabledBorder: 'rgba(0,0,0,0)',
                    focusBg: '#238636',
                    focusBorder: '#3fb950',
                    icon: '#f0f6fc',
                    counterBg: 'rgba(240,246,252,0.2)',
                  },
                  outline: {
                    text: '#58a6ff',
                    hoverText: '#58a6ff',
                    hoverBg: '#30363d',
                    hoverBorder: '#58a6ff',
                    hoverCounterBg: 'rgba(240,246,252,0.2)',
                    selectedText: '#f0f6fc',
                    selectedBg: '#0d419d',
                    selectedBorder: 'rgba(240,246,252,0.1)',
                    disabledText: 'rgba(88,166,255,0.5)',
                    disabledBg: '#0d1117',
                    disabledCounterBg: 'rgba(31,111,235,0.05)',
                    focusBorder: '#58a6ff',
                    counterBg: 'rgba(31,111,235,0.1)',
                  },
                  danger: {
                    text: '#f85149',
                    hoverText: '#ffffff',
                    hoverBg: '#da3633',
                    hoverBorder: '#f85149',
                    hoverCounterBg: 'rgba(255,255,255,0.2)',
                    selectedText: '#ffffff',
                    selectedBg: '#b62324',
                    selectedBorder: 'rgba(240,246,252,0.1)',
                    disabledText: 'rgba(248,81,73,0.5)',
                    disabledBg: '#0d1117',
                    disabledCounterBg: 'rgba(218,54,51,0.05)',
                    focusBorder: '#f85149',
                    counterBg: 'rgba(218,54,51,0.1)',
                    icon: '#f85149',
                    hoverIcon: '#f0f6fc',
                  },
                  counterBg: '#30363d',
                },
                counter: {
                  text: '#c9d1d9',
                  bg: '#30363d',
                  primary: { text: '#c9d1d9', bg: '#6e7681' },
                  secondary: { text: '#8b949e', bg: 'rgba(139,148,158,0.2)' },
                },
                label: {
                  border: '#30363d',
                  primary: { text: '#b1bac4', border: '#6e7681' },
                  secondary: { text: '#8b949e', border: '#30363d' },
                  info: { text: '#388bfd', border: 'rgba(56,139,253,0.4)' },
                  success: { text: '#3fb950', border: 'rgba(46,160,67,0.4)' },
                  warning: { text: '#e3b341', border: 'rgba(242,211,91,0.4)' },
                  danger: { text: '#f85149', border: 'rgba(248,81,73,0.4)' },
                  orange: { text: '#db6d28', border: 'rgba(219,109,40,0.4)' },
                },
                input: {
                  bg: '#0d1117',
                  contrastBg: 'rgba(1,4,9,0.5)',
                  border: '#21262d',
                  disabledBg: '#161b22',
                  disabledBorder: '#30363d',
                  warningBorder: '#d29922',
                  errorBorder: '#f85149',
                  tooltip: {
                    success: {
                      text: '#56d364',
                      bg: 'rgba(16,31,27,1)',
                      border: 'rgba(28,83,43,1)',
                    },
                    warning: {
                      text: '#e3b341',
                      bg: 'rgba(30,28,22,1)',
                      border: 'rgba(93,68,17,1)',
                    },
                    error: { text: '#ff7b72', bg: 'rgba(37,23,28,1)', border: 'rgba(121,46,46,1)' },
                  },
                },
                avatar: {
                  bg: 'rgba(240,246,252,0.1)',
                  border: 'rgba(240,246,252,0.1)',
                  stackFade: '#30363d',
                  stackFadeMore: '#21262d',
                },
                toast: {
                  text: '#c9d1d9',
                  bg: '#30363d',
                  border: '#6e7681',
                  icon: '#f0f6fc',
                  iconBg: '#1f6feb',
                  iconBorder: '#388bfd',
                  success: {
                    text: '#c9d1d9',
                    border: '#6e7681',
                    icon: '#f0f6fc',
                    iconBg: '#2ea043',
                    iconBorder: '#3fb950',
                  },
                  warning: {
                    text: '#c9d1d9',
                    border: '#6e7681',
                    icon: '#f0f6fc',
                    iconBg: '#bb8009',
                    iconBorder: '#d29922',
                  },
                  danger: {
                    text: '#c9d1d9',
                    border: '#6e7681',
                    icon: '#f0f6fc',
                    iconBg: '#da3633',
                    iconBorder: '#f85149',
                  },
                  loading: {
                    text: '#c9d1d9',
                    border: '#6e7681',
                    icon: '#f0f6fc',
                    iconBg: '#6e7681',
                    iconBorder: '#8b949e',
                  },
                },
                timeline: {
                  text: '#b1bac4',
                  badgeBg: '#0d1117',
                  badgeSuccessBorder: '#2ea043',
                  targetBadgeBorder: '#1f6feb',
                  targetBadgeShadow: '#0d419d',
                },
                selectMenu: {
                  borderSecondary: '#30363d',
                  backdropBg: 'rgba(1,4,9,0.5)',
                  backdropBorder: '#484f58',
                  tapHighlight: 'rgba(48,54,61,0.5)',
                  tapFocusBg: '#0c2d6b',
                },
                box: {
                  blueBorder: '#0d419d',
                  rowYellowBg: 'rgba(235,196,64,0.1)',
                  rowBlueBg: 'rgba(121,192,255,0.1)',
                  headerBlueBg: '#0d1117',
                  headerBlueBorder: '#30363d',
                  borderInfo: 'rgba(56,139,253,0.4)',
                  bgInfo: 'rgba(56,139,253,0.1)',
                  borderWarning: 'rgba(187,128,9,0.4)',
                  bgWarning: 'rgba(187,128,9,0.1)',
                },
                branchName: {
                  text: '#c9d1d9',
                  icon: '#b1bac4',
                  bg: 'rgba(88,166,255,0.1)',
                  link: { text: '#58a6ff', icon: '#58a6ff', bg: 'rgba(88,166,255,0.1)' },
                },
                markdown: {
                  codeBg: 'rgba(240,246,252,0.15)',
                  frameBorder: 'hsla(212,12%,26%,1)',
                  blockquoteBorder: 'hsla(212,12%,26%,1)',
                  tableBorder: 'hsla(212,12%,26%,1)',
                  tableTrBorder: 'hsla(212,12%,17%,1)',
                },
                menu: { headingText: '#8b949e', borderActive: '#f78166', bgActive: '#161b22' },
                sidenav: { selectedBg: '#21262d', borderActive: '#f78166' },
                header: { text: 'rgba(240,246,252,0.7)', bg: '#161b22', logo: '#f0f6fc' },
                filterItem: { barBg: 'hsla(215,21%,9%,1)' },
                hiddenTextExpander: { bg: '#21262d', bgHover: '#30363d' },
                dragAndDrop: { border: 'hsla(212,12%,16%,1)' },
                uploadEnabled: {
                  border: 'hsla(212,12%,26%,1)',
                  borderFocused: 'hsla(216,84%,60%,1)',
                },
                previewableCommentForm: { border: 'hsla(212,12%,16%,1)' },
                underlinenav: {
                  border: 'rgba(48,54,61,0)',
                  borderHover: '#30363d',
                  borderActive: '#f78166',
                  text: '#8b949e',
                  textHover: '#c9d1d9',
                  textActive: '#c9d1d9',
                  icon: '#6e7681',
                  iconHover: '#c9d1d9',
                  iconActive: '#c9d1d9',
                  counterText: '#8b949e',
                  counterBg: 'rgba(139,148,158,0.2)',
                },
                verifiedBadge: {
                  text: '#3fb950',
                  bg: 'rgba(63,185,80,0.1)',
                  border: 'rgba(63,185,80,0.4)',
                },
                socialCount: { bg: '#21262d' },
                tooltip: { text: '#f0f6fc', bg: '#6e7681' },
                headerSearch: { bg: '#0d1117', border: '#21262d' },
                searchKeyword: { hl: 'rgba(187,128,9,0.4)' },
                diffstat: {
                  neutralBg: '#30363d',
                  neutralBorder: 'rgba(240,246,252,0.1)',
                  deletionBg: '#da3633',
                  deletionBorder: '#f85149',
                  additionBg: '#238636',
                  additionBorder: '#2ea043',
                },
                mktg: {
                  success: 'rgba(41,147,61,1)',
                  info: 'rgba(42,123,243,1)',
                  bgShadeGradient: { top: 'rgba(1,4,9,0.065)', bottom: 'rgba(1,4,9,0)' },
                  btn: {
                    bg: { top: 'hsla(228,82%,66%,1)', bottom: '#4969ed' },
                    bgOverlay: { top: 'hsla(228,74%,59%,1)', bottom: '#3355e0' },
                    text: '#f0f6fc',
                    primary: {
                      bg: { top: 'hsla(137,56%,46%,1)', bottom: '#2ea44f' },
                      bgOverlay: { top: 'hsla(134,60%,38%,1)', bottom: '#22863a' },
                      text: '#f0f6fc',
                    },
                    enterprise: {
                      bg: { top: 'hsla(249,100%,72%,1)', bottom: '#6f57ff' },
                      bgOverlay: { top: 'hsla(248,65%,63%,1)', bottom: '#614eda' },
                      text: '#f0f6fc',
                    },
                    outline: {
                      text: '#f0f6fc',
                      border: 'rgba(240,246,252,0.3)',
                      hover: { text: '#f0f6fc', border: 'rgba(240,246,252,0.5)' },
                      focus: { border: '#f0f6fc', borderInset: 'rgba(240,246,252,0.5)' },
                    },
                    dark: {
                      text: '#f0f6fc',
                      border: 'rgba(240,246,252,0.3)',
                      hover: { text: '#f0f6fc', border: 'rgba(240,246,252,0.5)' },
                      focus: { border: '#f0f6fc', borderInset: 'rgba(240,246,252,0.5)' },
                    },
                  },
                },
                filesExplorerIcon: '#6e7681',
                hlAuthorBg: '#051d4d',
                hlAuthorBorder: '#0d419d',
                logoSubdued: '#30363d',
                discussionBorder: 'hsla(135,22%,26%,1)',
                discussionBgSuccess: 'rgba(46,160,67,0.1)',
                actionsWorkflowTableStickyBg: 'rgba(13,17,23,0.95)',
                repoLanguageColorBorder: 'rgba(240,246,252,0.2)',
                codeSelectionBg: 'rgba(121,192,255,0.3)',
                highlight: { text: '#ffd467', bg: 'rgba(204,143,44,0.38)' },
                blob: { lineHighlightBg: 'rgba(210,153,34,0.15)', lineHighlightBorder: '#e3b341' },
                diff: {
                  addition: { text: '#56d364', bg: 'rgba(46,160,67,0.2)', border: '#196c2e' },
                  deletion: { text: '#f85149', bg: 'rgba(218,54,51,0.2)', border: '#b62324' },
                  change: { text: '#e3b341', bg: '#341a00', border: '#9e6a03' },
                },
                diffBlob: {
                  numText: 'rgba(240,246,252,0.3)',
                  numHoverText: 'rgba(240,246,252,0.6)',
                  addition: {
                    numText: '#3fb950',
                    numHoverText: '#7ee787',
                    numBg: 'rgba(46,160,67,0.1)',
                    lineBg: 'rgba(46,160,67,0.2)',
                    wordBg: 'rgba(46,160,67,0.55)',
                  },
                  deletion: {
                    numText: '#f85149',
                    numHoverText: '#ffa198',
                    numBg: 'rgba(218,54,51,0.1)',
                    lineBg: 'rgba(218,54,51,0.2)',
                    wordBg: 'rgba(218,54,51,0.5)',
                  },
                  hunk: {
                    text: '#8b949e',
                    numBg: 'rgba(88,166,255,0.15)',
                    lineBg: 'rgba(88,166,255,0.1)',
                  },
                  emptyBlockBg: '#161b22',
                  selectedLineHighlightBg: 'rgba(187,128,9,0.1)',
                  selectedLineHighlightBorder: '#bb8009',
                  expander: { icon: '#8b949e', hoverIcon: '#f0f6fc', hoverBg: '#1f6feb' },
                  commentButton: {
                    icon: '#f0f6fc',
                    bg: '#1f6feb',
                    gradientBg: 'hsla(216,84%,57%,1)',
                  },
                },
                globalNav: {
                  logo: '#f0f6fc',
                  bg: '#161b22',
                  text: '#c9d1d9',
                  icon: '#c9d1d9',
                  inputBg: '#0d1117',
                  inputBorder: '#21262d',
                  inputIcon: '#21262d',
                  inputPlaceholder: '#484f58',
                },
                footerInvertocat: { octicon: '#30363d', octiconHover: '#6e7681' },
                prState: {
                  draft: {
                    text: '#8b949e',
                    bg: 'rgba(139,148,158,0.1)',
                    border: 'rgba(139,148,158,0.4)',
                  },
                  open: {
                    text: '#3fb950',
                    bg: 'rgba(63,185,80,0.1)',
                    border: 'rgba(63,185,80,0.4)',
                  },
                  merged: {
                    text: '#a371f7',
                    bg: 'rgba(188,140,255,0.1)',
                    border: 'rgba(188,140,255,0.4)',
                  },
                  closed: {
                    text: '#f85149',
                    bg: 'rgba(218,54,51,0.1)',
                    border: 'rgba(218,54,51,0.4)',
                  },
                },
                topicTag: {
                  text: '#58a6ff',
                  bg: 'rgba(56,139,253,0.1)',
                  hoverBg: 'rgba(56,139,253,0.2)',
                  activeBg: 'rgba(56,139,253,0.15)',
                },
                mergeBox: {
                  successIconBg: 'rgba(46,160,67,0.1)',
                  successIconText: '#3fb950',
                  successIconBorder: 'rgba(46,160,67,0.4)',
                  successIndicatorBg: '#238636',
                  successIndicatorBorder: '#2ea043',
                  mergedIconBg: 'rgba(188,140,255,0.1)',
                  mergedIconText: '#a371f7',
                  mergedIconBorder: 'rgba(188,140,255,0.4)',
                  mergedBoxBorder: 'rgba(188,140,255,0.4)',
                  neutralIconBg: 'rgba(201,209,217,0.1)',
                  neutralIconText: '#8b949e',
                  neutralIconBorder: 'rgba(201,209,217,0.4)',
                  neutralIndicatorBg: '#484f58',
                  neutralIndicatorBorder: '#6e7681',
                  warningIconBg: 'rgba(187,128,9,0.1)',
                  warningIconText: '#e3b341',
                  warningIconBorder: 'rgba(187,128,9,0.4)',
                  warningBoxBorder: 'rgba(187,128,9,0.4)',
                  warningMergeHighlight: 'rgba(187,128,9,0.1)',
                  errorIconBg: 'rgba(248,81,73,0.1)',
                  errorIconText: '#f85149',
                  errorIconBorder: 'rgba(248,81,73,0.4)',
                  errorIndicatorBg: '#da3633',
                  errorIndicatorBorder: '#f85149',
                },
                project: {
                  cardBg: '#161b22',
                  headerBg: '#0d1117',
                  sidebarBg: '#161b22',
                  gradientIn: '#161b22',
                  gradientOut: 'rgba(22,27,34,0)',
                },
                checks: {
                  bg: 'hsla(216,28%,5%,1)',
                  textPrimary: '#c9d1d9',
                  textSecondary: '#8b949e',
                  textLink: '#58a6ff',
                  btnIcon: '#6e7681',
                  btnHoverIcon: '#c9d1d9',
                  btnHoverBg: '#30363d',
                  inputText: '#8b949e',
                  inputPlaceholderText: '#484f58',
                  inputFocusText: '#c9d1d9',
                  inputBg: '#0d1117',
                  dropdownText: '#c9d1d9',
                  dropdownBg: 'rgba(28,33,40,1)',
                  dropdownBorder: '#30363d',
                  dropdownHoverText: '#f0f6fc',
                  dropdownHoverBg: '#1f6feb',
                  dropdownBtnHoverText: '#f0f6fc',
                  dropdownBtnHoverBg: '#161b22',
                  scrollbarThumbBg: '#30363d',
                  headerLabelText: '#8b949e',
                  headerLabelOpenText: '#c9d1d9',
                  headerBorder: '#21262d',
                  headerIcon: '#6e7681',
                  lineText: '#8b949e',
                  lineNumText: '#8b949e',
                  lineTimestampText: '#8b949e',
                  lineHoverBg: '#161b22',
                  lineSelectedBg: 'rgba(56,139,253,0.1)',
                  lineSelectedNumText: '#58a6ff',
                  lineDtFmText: '#0d1117',
                  lineDtFmBg: '#d29922',
                  gateBg: 'rgba(132,83,6,0.15)',
                  gateText: '#8b949e',
                  gateWaitingText: '#e3b341',
                  stepHeaderOpenBg: '#161b22',
                  stepErrorText: '#f85149',
                  stepWarningText: '#e3b341',
                  loglineText: '#6e7681',
                  loglineNumText: '#8b949e',
                  loglineDebugText: '#bc8cff',
                  loglineErrorText: '#8b949e',
                  loglineErrorNumText: '#8b949e',
                  loglineErrorBg: 'rgba(248,81,73,0.1)',
                  loglineWarningText: '#8b949e',
                  loglineWarningNumText: '#e3b341',
                  loglineWarningBg: 'rgba(187,128,9,0.1)',
                  loglineCommandText: '#58a6ff',
                  loglineSectionText: '#56d364',
                  ansi: {
                    black: '#0d1117',
                    blackBright: '#161b22',
                    white: '#b1bac4',
                    whiteBright: '#b1bac4',
                    gray: '#6e7681',
                    red: '#ff7b72',
                    redBright: '#ffa198',
                    green: '#3fb950',
                    greenBright: '#56d364',
                    yellow: '#d29922',
                    yellowBright: '#e3b341',
                    blue: '#58a6ff',
                    blueBright: '#79c0ff',
                    magenta: '#bc8cff',
                    magentaBright: '#d2a8ff',
                    cyan: '#76e3ea',
                    cyanBright: '#b3f0ff',
                  },
                },
                introShelf: {
                  gradientLeft: 'rgba(56,139,253,0.1)',
                  gradientRight: 'rgba(46,160,67,0.1)',
                  gradientIn: '#0d1117',
                  gradientOut: 'rgba(13,17,23,0)',
                },
                marketingIcon: { primary: '#79c0ff', secondary: '#1f6feb' },
                prettylights: {
                  syntax: {
                    comment: '#8b949e',
                    constant: '#79c0ff',
                    entity: '#d2a8ff',
                    storageModifierImport: '#c9d1d9',
                    entityTag: '#7ee787',
                    keyword: '#ff7b72',
                    string: '#a5d6ff',
                    variable: '#ffa657',
                    brackethighlighterUnmatched: '#f85149',
                    invalidIllegalText: '#f0f6fc',
                    invalidIllegalBg: '#8e1519',
                    carriageReturnText: '#f0f6fc',
                    carriageReturnBg: '#b62324',
                    stringRegexp: '#7ee787',
                    markupList: '#f2cc60',
                    markupHeading: '#1f6feb',
                    markupItalic: '#c9d1d9',
                    markupBold: '#c9d1d9',
                    markupDeletedText: '#ffdcd7',
                    markupDeletedBg: '#67060c',
                    markupInsertedText: '#aff5b4',
                    markupInsertedBg: '#033a16',
                    markupChangedText: '#ffdfb6',
                    markupChangedBg: '#5a1e02',
                    markupIgnoredText: '#c9d1d9',
                    markupIgnoredBg: '#1158c7',
                    metaDiffRange: '#d2a8ff',
                    brackethighlighterAngle: '#8b949e',
                    sublimelinterGutterMark: '#484f58',
                    constantOtherReferenceLink: '#a5d6ff',
                  },
                },
                codemirror: {
                  text: '#c9d1d9',
                  bg: '#0d1117',
                  guttersBg: '#0d1117',
                  guttermarkerText: '#0d1117',
                  guttermarkerSubtleText: '#6e7681',
                  linenumberText: '#8b949e',
                  cursor: '#f0f6fc',
                  selectionBg: 'rgba(121,192,255,0.3)',
                  activelineBg: '#161b22',
                  matchingbracketText: '#c9d1d9',
                  linesBg: '#0d1117',
                  syntax: {
                    comment: '#8b949e',
                    constant: '#79c0ff',
                    entity: '#d2a8ff',
                    keyword: '#ff7b72',
                    storage: '#ff7b72',
                    string: '#a5d6ff',
                    support: '#79c0ff',
                    variable: '#ffa657',
                  },
                },
                ansi: {
                  black: '#484f58',
                  blackBright: '#6e7681',
                  white: '#b1bac4',
                  whiteBright: '#f0f6fc',
                  gray: '#6e7681',
                  red: '#ff7b72',
                  redBright: '#ffa198',
                  green: '#3fb950',
                  greenBright: '#56d364',
                  yellow: '#d29922',
                  yellowBright: '#e3b341',
                  blue: '#58a6ff',
                  blueBright: '#79c0ff',
                  magenta: '#bc8cff',
                  magentaBright: '#d2a8ff',
                  cyan: '#39c5cf',
                  cyanBright: '#56d4dd',
                },
              },
              shadows: {
                shadow: {
                  small: '0 0 transparent',
                  medium: '0 3px 6px #010409',
                  large: '0 8px 24px #010409',
                  extraLarge: '0 12px 48px #010409',
                  highlight: '0 0 transparent',
                  inset: '0 0 transparent',
                },
                state: { focus: { shadow: '0 0 0 3px #0c2d6b' } },
                autocomplete: { shadow: '0 16px 32px rgba(1,4,9,0.85)' },
                btn: {
                  shadow: '0 0 transparent',
                  insetShadow: '0 0 transparent',
                  focusShadow: '0 0 0 3px rgba(139,148,158,0.3)',
                  shadowActive: 'inset 0 0.15em 0.3em rgba(1,4,9,0.15)',
                  shadowInputFocus: '0 0 0 0.2em rgba(31,111,235,0.3)',
                  primary: {
                    shadow: '0 0 transparent',
                    insetShadow: '0 0 transparent',
                    selectedShadow: '0 0 transparent',
                    focusShadow: '0 0 0 3px rgba(46,164,79,0.4)',
                  },
                  outline: {
                    hoverShadow: '0 1px 0 rgba(1,4,9,0.1)',
                    hoverInsetShadow: 'inset 0 1px 0 rgba(240,246,252,0.03)',
                    selectedShadow: '0 0 transparent',
                    focusShadow: '0 0 0 3px rgba(17,88,199,0.4)',
                  },
                  danger: {
                    hoverShadow: '0 0 transparent',
                    hoverInsetShadow: '0 0 transparent',
                    selectedShadow: '0 0 transparent',
                    focusShadow: '0 0 0 3px rgba(182,35,36,0.4)',
                  },
                },
                dropdown: { shadow: '0 16px 32px rgba(1,4,9,0.85)' },
                overlay: {
                  shadow:
                    '0 0 0 1px #30363d, 0 1px 3px rgba(1,4,9,0.12), 0 16px 32px rgba(1,4,9,0.85)',
                },
                input: { shadow: '0 0 transparent' },
                avatar: { childShadow: '-2px -2px 0 #0d1117' },
                toast: { shadow: '0 8px 24px #010409' },
                selectMenu: { shadow: '0 0 18px rgba(1,4,9,0.4)' },
                checks: { inputShadow: '0 0 0 1px #21262d' },
              },
            },
            dark_dimmed: {
              colors: {
                auto: {
                  black: '#cdd9e5',
                  white: '#1c2128',
                  gray: [
                    '#22272e',
                    '#2d333b',
                    '#373e47',
                    '#444c56',
                    '#545d68',
                    '#636e7b',
                    '#768390',
                    '#909dab',
                    '#adbac7',
                    '#cdd9e5',
                  ],
                  blue: [
                    '#0f2d5c',
                    '#143d79',
                    '#1b4b91',
                    '#255ab2',
                    '#316dca',
                    '#4184e4',
                    '#539bf5',
                    '#6cb6ff',
                    '#96d0ff',
                    '#c6e6ff',
                  ],
                  green: [
                    '#113417',
                    '#1b4721',
                    '#245829',
                    '#2b6a30',
                    '#347d39',
                    '#46954a',
                    '#57ab5a',
                    '#6bc46d',
                    '#8ddb8c',
                    '#b4f1b4',
                  ],
                  yellow: [
                    '#452700',
                    '#593600',
                    '#6c4400',
                    '#805400',
                    '#966600',
                    '#ae7c14',
                    '#c69026',
                    '#daaa3f',
                    '#eac55f',
                    '#fbe090',
                  ],
                  orange: [
                    '#4d210c',
                    '#682d0f',
                    '#7f3913',
                    '#94471b',
                    '#ae5622',
                    '#cc6b2c',
                    '#e0823d',
                    '#f69d50',
                    '#ffbc6f',
                    '#ffddb0',
                  ],
                  red: [
                    '#78191b',
                    '#78191b',
                    '#922323',
                    '#ad2e2c',
                    '#c93c37',
                    '#e5534b',
                    '#f47067',
                    '#ff938a',
                    '#ffb8b0',
                    '#ffd8d3',
                  ],
                  purple: [
                    '#352160',
                    '#472c82',
                    '#5936a2',
                    '#6b44bc',
                    '#8256d0',
                    '#986ee2',
                    '#b083f0',
                    '#dcbdfb',
                    '#dcbdfb',
                    '#eedcff',
                  ],
                  pink: [
                    '#551639',
                    '#69264a',
                    '#7e325a',
                    '#983b6e',
                    '#ae4c82',
                    '#c96198',
                    '#e275ad',
                    '#fc8dc7',
                    '#ffb3d8',
                    '#ffd7eb',
                  ],
                },
                text: {
                  primary: '#adbac7',
                  secondary: '#768390',
                  tertiary: '#768390',
                  placeholder: '#545d68',
                  disabled: '#545d68',
                  inverse: '#22272e',
                  link: '#539bf5',
                  danger: '#e5534b',
                  success: '#6bc46d',
                  warning: '#daaa3f',
                  white: '#cdd9e5',
                },
                icon: {
                  primary: '#adbac7',
                  secondary: '#636e7b',
                  tertiary: '#545d68',
                  info: '#539bf5',
                  danger: '#e5534b',
                  success: '#6bc46d',
                  warning: '#daaa3f',
                },
                border: {
                  primary: '#444c56',
                  secondary: '#373e47',
                  tertiary: '#636e7b',
                  overlay: '#444c56',
                  inverse: '#cdd9e5',
                  info: 'rgba(65,132,228,0.4)',
                  danger: 'rgba(229,83,75,0.4)',
                  success: 'rgba(87,171,90,0.4)',
                  warning: 'rgba(174,124,20,0.4)',
                },
                bg: {
                  canvas: '#22272e',
                  canvasMobile: '#1c2128',
                  canvasInverse: '#cdd9e5',
                  canvasInset: 'hsla(215,15%,14%,1)',
                  primary: '#22272e',
                  secondary: '#22272e',
                  tertiary: '#2d333b',
                  overlay: 'rgba(50,57,65,1)',
                  backdrop: 'rgba(28,33,40,0.8)',
                  info: 'rgba(65,132,228,0.1)',
                  infoInverse: '#4184e4',
                  danger: 'rgba(229,83,75,0.1)',
                  dangerInverse: '#c93c37',
                  success: 'rgba(70,149,74,0.1)',
                  successInverse: '#46954a',
                  warning: 'rgba(174,124,20,0.1)',
                  warningInverse: '#ae7c14',
                },
                state: {
                  hover: {
                    primaryBg: '#316dca',
                    primaryBorder: '#4184e4',
                    primaryText: '#cdd9e5',
                    primaryIcon: '#cdd9e5',
                    secondaryBg: '#2d333b',
                    secondaryBorder: '#2d333b',
                  },
                  selected: {
                    primaryBg: '#316dca',
                    primaryBorder: '#4184e4',
                    primaryText: '#cdd9e5',
                    primaryIcon: '#cdd9e5',
                  },
                  focus: { border: '#4184e4' },
                },
                fade: {
                  fg10: 'rgba(205,217,229,0.1)',
                  fg15: 'rgba(205,217,229,0.15)',
                  fg30: 'rgba(205,217,229,0.3)',
                  fg50: 'rgba(205,217,229,0.5)',
                  fg70: 'rgba(205,217,229,0.7)',
                  fg85: 'rgba(205,217,229,0.85)',
                  black10: 'rgba(28,33,40,0.1)',
                  black15: 'rgba(28,33,40,0.15)',
                  black30: 'rgba(28,33,40,0.3)',
                  black50: 'rgba(28,33,40,0.5)',
                  black70: 'rgba(28,33,40,0.7)',
                  black85: 'rgba(28,33,40,0.85)',
                  white10: 'rgba(205,217,229,0.1)',
                  white15: 'rgba(205,217,229,0.15)',
                  white30: 'rgba(205,217,229,0.3)',
                  white50: 'rgba(205,217,229,0.5)',
                  white70: 'rgba(205,217,229,0.7)',
                  white85: 'rgba(205,217,229,0.85)',
                },
                alert: {
                  info: {
                    text: '#6cb6ff',
                    icon: '#6cb6ff',
                    bg: 'rgba(65,132,228,0.1)',
                    border: 'rgba(65,132,228,0.4)',
                  },
                  warn: {
                    text: '#daaa3f',
                    icon: '#daaa3f',
                    bg: 'rgba(174,124,20,0.1)',
                    border: 'rgba(174,124,20,0.4)',
                  },
                  error: {
                    text: '#f47067',
                    icon: '#f47067',
                    bg: 'rgba(229,83,75,0.1)',
                    border: 'rgba(229,83,75,0.4)',
                  },
                  success: {
                    text: '#6bc46d',
                    icon: '#6bc46d',
                    bg: 'rgba(70,149,74,0.1)',
                    border: 'rgba(70,149,74,0.4)',
                  },
                },
                autocomplete: { rowBorder: '#444c56' },
                blankslate: { icon: 'hsla(213,11%,42%,1)' },
                btn: {
                  text: '#adbac7',
                  bg: '#373e47',
                  border: '#444c56',
                  hoverBg: '#444c56',
                  hoverBorder: '#768390',
                  activeBg: 'hsla(213,12%,27%,1)',
                  activeBorder: '#636e7b',
                  selectedBg: '#2d333b',
                  focusBg: '#373e47',
                  focusBorder: '#768390',
                  primary: {
                    text: '#ffffff',
                    bg: '#347d39',
                    border: '#46954a',
                    hoverBg: '#46954a',
                    hoverBorder: '#57ab5a',
                    selectedBg: '#347d39',
                    disabledText: 'rgba(205,217,229,0.5)',
                    disabledBg: 'rgba(52,125,57,0.6)',
                    disabledBorder: 'rgba(0,0,0,0)',
                    focusBg: '#347d39',
                    focusBorder: '#57ab5a',
                    icon: '#cdd9e5',
                    counterBg: 'rgba(205,217,229,0.2)',
                  },
                  outline: {
                    text: '#539bf5',
                    hoverText: '#539bf5',
                    hoverBg: '#444c56',
                    hoverBorder: '#539bf5',
                    hoverCounterBg: 'rgba(205,217,229,0.2)',
                    selectedText: '#cdd9e5',
                    selectedBg: '#1b4b91',
                    selectedBorder: 'rgba(205,217,229,0.1)',
                    disabledText: 'rgba(83,155,245,0.5)',
                    disabledBg: '#22272e',
                    disabledCounterBg: 'rgba(49,109,202,0.05)',
                    focusBorder: '#539bf5',
                    counterBg: 'rgba(49,109,202,0.1)',
                  },
                  danger: {
                    text: '#e5534b',
                    hoverText: '#ffffff',
                    hoverBg: '#c93c37',
                    hoverBorder: '#e5534b',
                    hoverCounterBg: 'rgba(255,255,255,0.2)',
                    selectedText: '#ffffff',
                    selectedBg: '#ad2e2c',
                    selectedBorder: 'rgba(205,217,229,0.1)',
                    disabledText: 'rgba(229,83,75,0.5)',
                    disabledBg: '#22272e',
                    disabledCounterBg: 'rgba(201,60,55,0.05)',
                    focusBorder: '#e5534b',
                    counterBg: 'rgba(201,60,55,0.1)',
                    icon: '#e5534b',
                    hoverIcon: '#cdd9e5',
                  },
                  counterBg: '#444c56',
                },
                counter: {
                  text: '#adbac7',
                  bg: '#444c56',
                  primary: { text: '#adbac7', bg: '#636e7b' },
                  secondary: { text: '#768390', bg: 'rgba(118,131,144,0.2)' },
                },
                label: {
                  border: '#444c56',
                  primary: { text: '#909dab', border: '#636e7b' },
                  secondary: { text: '#768390', border: '#444c56' },
                  info: { text: '#4184e4', border: 'rgba(65,132,228,0.4)' },
                  success: { text: '#57ab5a', border: 'rgba(70,149,74,0.4)' },
                  warning: { text: '#daaa3f', border: 'rgba(242,211,91,0.4)' },
                  danger: { text: '#e5534b', border: 'rgba(229,83,75,0.4)' },
                  orange: { text: '#cc6b2c', border: 'rgba(204,107,44,0.4)' },
                },
                input: {
                  bg: '#22272e',
                  contrastBg: 'rgba(28,33,40,0.5)',
                  border: '#373e47',
                  disabledBg: '#2d333b',
                  disabledBorder: '#444c56',
                  warningBorder: '#c69026',
                  errorBorder: '#e5534b',
                  tooltip: {
                    success: {
                      text: '#6bc46d',
                      bg: 'rgba(38,50,49,1)',
                      border: 'rgba(51,90,59,1)',
                    },
                    warning: {
                      text: '#daaa3f',
                      bg: 'rgba(48,48,43,1)',
                      border: 'rgba(98,78,34,1)',
                    },
                    error: { text: '#f47067', bg: 'rgba(53,43,49,1)', border: 'rgba(124,59,59,1)' },
                  },
                },
                avatar: {
                  bg: 'rgba(205,217,229,0.1)',
                  border: 'rgba(205,217,229,0.1)',
                  stackFade: '#444c56',
                  stackFadeMore: '#373e47',
                },
                toast: {
                  text: '#adbac7',
                  bg: '#444c56',
                  border: '#636e7b',
                  icon: '#cdd9e5',
                  iconBg: '#316dca',
                  iconBorder: '#4184e4',
                  success: {
                    text: '#adbac7',
                    border: '#636e7b',
                    icon: '#cdd9e5',
                    iconBg: '#46954a',
                    iconBorder: '#57ab5a',
                  },
                  warning: {
                    text: '#adbac7',
                    border: '#636e7b',
                    icon: '#cdd9e5',
                    iconBg: '#ae7c14',
                    iconBorder: '#c69026',
                  },
                  danger: {
                    text: '#adbac7',
                    border: '#636e7b',
                    icon: '#cdd9e5',
                    iconBg: '#c93c37',
                    iconBorder: '#e5534b',
                  },
                  loading: {
                    text: '#adbac7',
                    border: '#636e7b',
                    icon: '#cdd9e5',
                    iconBg: '#636e7b',
                    iconBorder: '#768390',
                  },
                },
                timeline: {
                  text: '#909dab',
                  badgeBg: '#22272e',
                  badgeSuccessBorder: '#46954a',
                  targetBadgeBorder: '#316dca',
                  targetBadgeShadow: '#1b4b91',
                },
                selectMenu: {
                  borderSecondary: '#444c56',
                  backdropBg: 'rgba(28,33,40,0.5)',
                  backdropBorder: '#545d68',
                  tapHighlight: 'rgba(68,76,86,0.5)',
                  tapFocusBg: '#143d79',
                },
                box: {
                  blueBorder: '#1b4b91',
                  rowYellowBg: 'rgba(235,196,64,0.1)',
                  rowBlueBg: 'rgba(108,182,255,0.1)',
                  headerBlueBg: '#22272e',
                  headerBlueBorder: '#444c56',
                  borderInfo: 'rgba(65,132,228,0.4)',
                  bgInfo: 'rgba(65,132,228,0.1)',
                  borderWarning: 'rgba(174,124,20,0.4)',
                  bgWarning: 'rgba(174,124,20,0.1)',
                },
                branchName: {
                  text: '#adbac7',
                  icon: '#909dab',
                  bg: 'rgba(83,155,245,0.1)',
                  link: { text: '#539bf5', icon: '#539bf5', bg: 'rgba(83,155,245,0.1)' },
                },
                markdown: {
                  codeBg: 'rgba(205,217,229,0.15)',
                  frameBorder: 'hsla(213,12%,35%,1)',
                  blockquoteBorder: 'hsla(213,12%,35%,1)',
                  tableBorder: 'hsla(213,12%,35%,1)',
                  tableTrBorder: 'hsla(213,12%,26%,1)',
                },
                menu: { headingText: '#768390', borderActive: '#f78166', bgActive: '#2d333b' },
                sidenav: { selectedBg: '#373e47', borderActive: '#f78166' },
                header: { text: 'rgba(205,217,229,0.7)', bg: '#2d333b', logo: '#cdd9e5' },
                filterItem: { barBg: 'hsla(214,13%,18%,1)' },
                hiddenTextExpander: { bg: '#373e47', bgHover: '#444c56' },
                dragAndDrop: { border: 'hsla(213,12%,25%,1)' },
                uploadEnabled: {
                  border: 'hsla(213,12%,35%,1)',
                  borderFocused: 'hsla(216,61%,57%,1)',
                },
                previewableCommentForm: { border: 'hsla(213,12%,25%,1)' },
                underlinenav: {
                  border: 'rgba(68,76,86,0)',
                  borderHover: '#444c56',
                  borderActive: '#f78166',
                  text: '#768390',
                  textHover: '#adbac7',
                  textActive: '#adbac7',
                  icon: '#636e7b',
                  iconHover: '#adbac7',
                  iconActive: '#adbac7',
                  counterText: '#768390',
                  counterBg: 'rgba(118,131,144,0.2)',
                },
                verifiedBadge: {
                  text: '#57ab5a',
                  bg: 'rgba(87,171,90,0.1)',
                  border: 'rgba(87,171,90,0.4)',
                },
                socialCount: { bg: '#373e47' },
                tooltip: { text: '#cdd9e5', bg: '#636e7b' },
                headerSearch: { bg: '#22272e', border: '#373e47' },
                searchKeyword: { hl: 'rgba(174,124,20,0.4)' },
                diffstat: {
                  neutralBg: '#444c56',
                  neutralBorder: 'rgba(205,217,229,0.1)',
                  deletionBg: '#c93c37',
                  deletionBorder: '#e5534b',
                  additionBg: '#347d39',
                  additionBorder: '#46954a',
                },
                mktg: {
                  success: 'rgba(61,137,66,1)',
                  info: 'rgba(56,119,213,1)',
                  bgShadeGradient: { top: 'rgba(28,33,40,0.065)', bottom: 'rgba(28,33,40,0)' },
                  btn: {
                    bg: { top: 'hsla(228,82%,66%,1)', bottom: '#4969ed' },
                    bgOverlay: { top: 'hsla(228,74%,59%,1)', bottom: '#3355e0' },
                    text: '#cdd9e5',
                    primary: {
                      bg: { top: 'hsla(137,56%,46%,1)', bottom: '#2ea44f' },
                      bgOverlay: { top: 'hsla(134,60%,38%,1)', bottom: '#22863a' },
                      text: '#cdd9e5',
                    },
                    enterprise: {
                      bg: { top: 'hsla(249,100%,72%,1)', bottom: '#6f57ff' },
                      bgOverlay: { top: 'hsla(248,65%,63%,1)', bottom: '#614eda' },
                      text: '#cdd9e5',
                    },
                    outline: {
                      text: '#cdd9e5',
                      border: 'rgba(205,217,229,0.3)',
                      hover: { text: '#cdd9e5', border: 'rgba(205,217,229,0.5)' },
                      focus: { border: '#cdd9e5', borderInset: 'rgba(205,217,229,0.5)' },
                    },
                    dark: {
                      text: '#cdd9e5',
                      border: 'rgba(205,217,229,0.3)',
                      hover: { text: '#cdd9e5', border: 'rgba(205,217,229,0.5)' },
                      focus: { border: '#cdd9e5', borderInset: 'rgba(205,217,229,0.5)' },
                    },
                  },
                },
                filesExplorerIcon: '#636e7b',
                hlAuthorBg: '#0f2d5c',
                hlAuthorBorder: '#1b4b91',
                logoSubdued: '#444c56',
                discussionBorder: 'hsla(125,2%,29%,1)',
                discussionBgSuccess: 'rgba(70,149,74,0.1)',
                actionsWorkflowTableStickyBg: 'rgba(34,39,46,0.95)',
                repoLanguageColorBorder: 'rgba(205,217,229,0.2)',
                codeSelectionBg: 'rgba(108,182,255,0.3)',
                highlight: { text: '#ffd467', bg: 'rgba(204,143,44,0.38)' },
                blob: { lineHighlightBg: 'rgba(198,144,38,0.15)', lineHighlightBorder: '#daaa3f' },
                diff: {
                  addition: { text: '#6bc46d', bg: 'rgba(70,149,74,0.2)', border: '#2b6a30' },
                  deletion: { text: '#e5534b', bg: 'rgba(201,60,55,0.2)', border: '#ad2e2c' },
                  change: { text: '#daaa3f', bg: '#452700', border: '#966600' },
                },
                diffBlob: {
                  numText: 'rgba(205,217,229,0.3)',
                  numHoverText: 'rgba(205,217,229,0.6)',
                  addition: {
                    numText: '#57ab5a',
                    numHoverText: '#8ddb8c',
                    numBg: 'rgba(70,149,74,0.1)',
                    lineBg: 'rgba(70,149,74,0.2)',
                    wordBg: 'rgba(70,149,74,0.55)',
                  },
                  deletion: {
                    numText: '#e5534b',
                    numHoverText: '#ff938a',
                    numBg: 'rgba(201,60,55,0.1)',
                    lineBg: 'rgba(201,60,55,0.2)',
                    wordBg: 'rgba(201,60,55,0.5)',
                  },
                  hunk: {
                    text: '#768390',
                    numBg: 'rgba(83,155,245,0.15)',
                    lineBg: 'rgba(83,155,245,0.1)',
                  },
                  emptyBlockBg: '#2d333b',
                  selectedLineHighlightBg: 'rgba(174,124,20,0.1)',
                  selectedLineHighlightBorder: '#ae7c14',
                  expander: { icon: '#768390', hoverIcon: '#cdd9e5', hoverBg: '#316dca' },
                  commentButton: {
                    icon: '#cdd9e5',
                    bg: '#316dca',
                    gradientBg: 'hsla(216,61%,54%,1)',
                  },
                },
                globalNav: {
                  logo: '#cdd9e5',
                  bg: '#2d333b',
                  text: '#adbac7',
                  icon: '#adbac7',
                  inputBg: '#22272e',
                  inputBorder: '#373e47',
                  inputIcon: '#373e47',
                  inputPlaceholder: '#545d68',
                },
                footerInvertocat: { octicon: '#444c56', octiconHover: '#636e7b' },
                prState: {
                  draft: {
                    text: '#768390',
                    bg: 'rgba(118,131,144,0.1)',
                    border: 'rgba(118,131,144,0.4)',
                  },
                  open: {
                    text: '#57ab5a',
                    bg: 'rgba(87,171,90,0.1)',
                    border: 'rgba(87,171,90,0.4)',
                  },
                  merged: {
                    text: '#986ee2',
                    bg: 'rgba(176,131,240,0.1)',
                    border: 'rgba(176,131,240,0.4)',
                  },
                  closed: {
                    text: '#e5534b',
                    bg: 'rgba(201,60,55,0.1)',
                    border: 'rgba(201,60,55,0.4)',
                  },
                },
                topicTag: {
                  text: '#539bf5',
                  bg: 'rgba(65,132,228,0.1)',
                  hoverBg: 'rgba(65,132,228,0.2)',
                  activeBg: 'rgba(65,132,228,0.15)',
                },
                mergeBox: {
                  successIconBg: 'rgba(70,149,74,0.1)',
                  successIconText: '#57ab5a',
                  successIconBorder: 'rgba(70,149,74,0.4)',
                  successIndicatorBg: '#347d39',
                  successIndicatorBorder: '#46954a',
                  mergedIconBg: 'rgba(176,131,240,0.1)',
                  mergedIconText: '#986ee2',
                  mergedIconBorder: 'rgba(176,131,240,0.4)',
                  mergedBoxBorder: 'rgba(176,131,240,0.4)',
                  neutralIconBg: 'rgba(173,186,199,0.1)',
                  neutralIconText: '#768390',
                  neutralIconBorder: 'rgba(173,186,199,0.4)',
                  neutralIndicatorBg: '#545d68',
                  neutralIndicatorBorder: '#636e7b',
                  warningIconBg: 'rgba(174,124,20,0.1)',
                  warningIconText: '#daaa3f',
                  warningIconBorder: 'rgba(174,124,20,0.4)',
                  warningBoxBorder: 'rgba(174,124,20,0.4)',
                  warningMergeHighlight: 'rgba(174,124,20,0.1)',
                  errorIconBg: 'rgba(229,83,75,0.1)',
                  errorIconText: '#e5534b',
                  errorIconBorder: 'rgba(229,83,75,0.4)',
                  errorIndicatorBg: '#c93c37',
                  errorIndicatorBorder: '#e5534b',
                },
                project: {
                  cardBg: '#2d333b',
                  headerBg: '#22272e',
                  sidebarBg: '#2d333b',
                  gradientIn: '#2d333b',
                  gradientOut: 'rgba(45,51,59,0)',
                },
                checks: {
                  bg: 'hsla(215,15%,14%,1)',
                  textPrimary: '#adbac7',
                  textSecondary: '#768390',
                  textLink: '#539bf5',
                  btnIcon: '#636e7b',
                  btnHoverIcon: '#adbac7',
                  btnHoverBg: '#444c56',
                  inputText: '#768390',
                  inputPlaceholderText: '#545d68',
                  inputFocusText: '#adbac7',
                  inputBg: '#22272e',
                  dropdownText: '#adbac7',
                  dropdownBg: 'rgba(50,57,65,1)',
                  dropdownBorder: '#444c56',
                  dropdownHoverText: '#cdd9e5',
                  dropdownHoverBg: '#316dca',
                  dropdownBtnHoverText: '#cdd9e5',
                  dropdownBtnHoverBg: '#2d333b',
                  scrollbarThumbBg: '#444c56',
                  headerLabelText: '#768390',
                  headerLabelOpenText: '#adbac7',
                  headerBorder: '#373e47',
                  headerIcon: '#636e7b',
                  lineText: '#768390',
                  lineNumText: '#768390',
                  lineTimestampText: '#768390',
                  lineHoverBg: '#2d333b',
                  lineSelectedBg: 'rgba(65,132,228,0.1)',
                  lineSelectedNumText: '#539bf5',
                  lineDtFmText: '#22272e',
                  lineDtFmBg: '#c69026',
                  gateBg: 'rgba(128,84,0,0.15)',
                  gateText: '#768390',
                  gateWaitingText: '#daaa3f',
                  stepHeaderOpenBg: '#2d333b',
                  stepErrorText: '#e5534b',
                  stepWarningText: '#daaa3f',
                  loglineText: '#636e7b',
                  loglineNumText: '#768390',
                  loglineDebugText: '#b083f0',
                  loglineErrorText: '#768390',
                  loglineErrorNumText: '#768390',
                  loglineErrorBg: 'rgba(229,83,75,0.1)',
                  loglineWarningText: '#768390',
                  loglineWarningNumText: '#daaa3f',
                  loglineWarningBg: 'rgba(174,124,20,0.1)',
                  loglineCommandText: '#539bf5',
                  loglineSectionText: '#6bc46d',
                  ansi: {
                    black: '#22272e',
                    blackBright: '#2d333b',
                    white: '#909dab',
                    whiteBright: '#909dab',
                    gray: '#636e7b',
                    red: '#f47067',
                    redBright: '#ff938a',
                    green: '#57ab5a',
                    greenBright: '#6bc46d',
                    yellow: '#c69026',
                    yellowBright: '#daaa3f',
                    blue: '#539bf5',
                    blueBright: '#6cb6ff',
                    magenta: '#b083f0',
                    magentaBright: '#dcbdfb',
                    cyan: '#76e3ea',
                    cyanBright: '#b3f0ff',
                  },
                },
                introShelf: {
                  gradientLeft: 'rgba(65,132,228,0.1)',
                  gradientRight: 'rgba(70,149,74,0.1)',
                  gradientIn: '#22272e',
                  gradientOut: 'rgba(34,39,46,0)',
                },
                marketingIcon: { primary: '#6cb6ff', secondary: '#316dca' },
                prettylights: {
                  syntax: {
                    comment: '#768390',
                    constant: '#6cb6ff',
                    entity: '#dcbdfb',
                    storageModifierImport: '#adbac7',
                    entityTag: '#8ddb8c',
                    keyword: '#f47067',
                    string: '#96d0ff',
                    variable: '#f69d50',
                    brackethighlighterUnmatched: '#e5534b',
                    invalidIllegalText: '#cdd9e5',
                    invalidIllegalBg: '#922323',
                    carriageReturnText: '#cdd9e5',
                    carriageReturnBg: '#ad2e2c',
                    stringRegexp: '#8ddb8c',
                    markupList: '#eac55f',
                    markupHeading: '#316dca',
                    markupItalic: '#adbac7',
                    markupBold: '#adbac7',
                    markupDeletedText: '#ffd8d3',
                    markupDeletedBg: '#78191b',
                    markupInsertedText: '#b4f1b4',
                    markupInsertedBg: '#1b4721',
                    markupChangedText: '#ffddb0',
                    markupChangedBg: '#682d0f',
                    markupIgnoredText: '#adbac7',
                    markupIgnoredBg: '#255ab2',
                    metaDiffRange: '#dcbdfb',
                    brackethighlighterAngle: '#768390',
                    sublimelinterGutterMark: '#545d68',
                    constantOtherReferenceLink: '#96d0ff',
                  },
                },
                codemirror: {
                  text: '#adbac7',
                  bg: '#22272e',
                  guttersBg: '#22272e',
                  guttermarkerText: '#22272e',
                  guttermarkerSubtleText: '#636e7b',
                  linenumberText: '#768390',
                  cursor: '#cdd9e5',
                  selectionBg: 'rgba(108,182,255,0.3)',
                  activelineBg: '#2d333b',
                  matchingbracketText: '#adbac7',
                  linesBg: '#22272e',
                  syntax: {
                    comment: '#768390',
                    constant: '#6cb6ff',
                    entity: '#dcbdfb',
                    keyword: '#f47067',
                    storage: '#f47067',
                    string: '#96d0ff',
                    support: '#6cb6ff',
                    variable: '#f69d50',
                  },
                },
                ansi: {
                  black: '#545d68',
                  blackBright: '#636e7b',
                  white: '#909dab',
                  whiteBright: '#cdd9e5',
                  gray: '#636e7b',
                  red: '#f47067',
                  redBright: '#ff938a',
                  green: '#57ab5a',
                  greenBright: '#6bc46d',
                  yellow: '#c69026',
                  yellowBright: '#daaa3f',
                  blue: '#539bf5',
                  blueBright: '#6cb6ff',
                  magenta: '#b083f0',
                  magentaBright: '#dcbdfb',
                  cyan: '#39c5cf',
                  cyanBright: '#56d4dd',
                },
              },
              shadows: {
                shadow: {
                  small: '0 0 transparent',
                  medium: '0 3px 6px #1c2128',
                  large: '0 8px 24px #1c2128',
                  extraLarge: '0 12px 48px #1c2128',
                  highlight: '0 0 transparent',
                  inset: '0 0 transparent',
                },
                state: { focus: { shadow: '0 0 0 3px #143d79' } },
                autocomplete: { shadow: '0 16px 32px rgba(28,33,40,0.85)' },
                btn: {
                  shadow: '0 0 transparent',
                  insetShadow: '0 0 transparent',
                  focusShadow: '0 0 0 3px rgba(118,131,144,0.3)',
                  shadowActive: 'inset 0 0.15em 0.3em rgba(28,33,40,0.15)',
                  shadowInputFocus: '0 0 0 0.2em rgba(49,109,202,0.3)',
                  primary: {
                    shadow: '0 0 transparent',
                    insetShadow: '0 0 transparent',
                    selectedShadow: '0 0 transparent',
                    focusShadow: '0 0 0 3px rgba(46,164,79,0.4)',
                  },
                  outline: {
                    hoverShadow: '0 1px 0 rgba(28,33,40,0.1)',
                    hoverInsetShadow: 'inset 0 1px 0 rgba(205,217,229,0.03)',
                    selectedShadow: '0 0 transparent',
                    focusShadow: '0 0 0 3px rgba(37,90,178,0.4)',
                  },
                  danger: {
                    hoverShadow: '0 0 transparent',
                    hoverInsetShadow: '0 0 transparent',
                    selectedShadow: '0 0 transparent',
                    focusShadow: '0 0 0 3px rgba(173,46,44,0.4)',
                  },
                },
                dropdown: { shadow: '0 16px 32px rgba(28,33,40,0.85)' },
                overlay: {
                  shadow:
                    '0 0 0 1px #444c56, 0 1px 3px rgba(28,33,40,0.12), 0 16px 32px rgba(28,33,40,0.85)',
                },
                input: { shadow: '0 0 transparent' },
                avatar: { childShadow: '-2px -2px 0 #22272e' },
                toast: { shadow: '0 8px 24px #1c2128' },
                selectMenu: { shadow: '0 0 18px rgba(28,33,40,0.4)' },
                checks: { inputShadow: '0 0 0 1px #373e47' },
              },
            },
          },
        },
      }
    },
    3895: function (e, r, t) {
      'use strict'
      var a = t(798)
      r.Z = a.theme
    },
    9996: function (e) {
      'use strict'
      var r = function (e) {
        return (
          (function (e) {
            return !!e && 'object' === typeof e
          })(e) &&
          !(function (e) {
            var r = Object.prototype.toString.call(e)
            return (
              '[object RegExp]' === r ||
              '[object Date]' === r ||
              (function (e) {
                return e.$$typeof === t
              })(e)
            )
          })(e)
        )
      }
      var t = 'function' === typeof Symbol && Symbol.for ? Symbol.for('react.element') : 60103
      function a(e, r) {
        return !1 !== r.clone && r.isMergeableObject(e)
          ? d(((t = e), Array.isArray(t) ? [] : {}), e, r)
          : e
        var t
      }
      function n(e, r, t) {
        return e.concat(r).map(function (e) {
          return a(e, t)
        })
      }
      function o(e) {
        return Object.keys(e).concat(
          (function (e) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(e).filter(function (r) {
                  return e.propertyIsEnumerable(r)
                })
              : []
          })(e)
        )
      }
      function i(e, r) {
        try {
          return r in e
        } catch (t) {
          return !1
        }
      }
      function c(e, r, t) {
        var n = {}
        return (
          t.isMergeableObject(e) &&
            o(e).forEach(function (r) {
              n[r] = a(e[r], t)
            }),
          o(r).forEach(function (o) {
            ;(function (e, r) {
              return (
                i(e, r) &&
                !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r))
              )
            })(e, o) ||
              (i(e, o) && t.isMergeableObject(r[o])
                ? (n[o] = (function (e, r) {
                    if (!r.customMerge) return d
                    var t = r.customMerge(e)
                    return 'function' === typeof t ? t : d
                  })(o, t)(e[o], r[o], t))
                : (n[o] = a(r[o], t)))
          }),
          n
        )
      }
      function d(e, t, o) {
        ;((o = o || {}).arrayMerge = o.arrayMerge || n),
          (o.isMergeableObject = o.isMergeableObject || r),
          (o.cloneUnlessOtherwiseSpecified = a)
        var i = Array.isArray(t)
        return i === Array.isArray(e) ? (i ? o.arrayMerge(e, t, o) : c(e, t, o)) : a(t, o)
      }
      d.all = function (e, r) {
        if (!Array.isArray(e)) throw new Error('first argument should be an array')
        return e.reduce(function (e, t) {
          return d(e, t, r)
        }, {})
      }
      var f = d
      e.exports = f
    },
    8679: function (e, r, t) {
      'use strict'
      var a = t(1296),
        n = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        c = {}
      function d(e) {
        return a.isMemo(e) ? i : c[e.$$typeof] || n
      }
      ;(c[a.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (c[a.Memo] = i)
      var f = Object.defineProperty,
        s = Object.getOwnPropertyNames,
        l = Object.getOwnPropertySymbols,
        g = Object.getOwnPropertyDescriptor,
        b = Object.getPrototypeOf,
        u = Object.prototype
      e.exports = function e(r, t, a) {
        if ('string' !== typeof t) {
          if (u) {
            var n = b(t)
            n && n !== u && e(r, n, a)
          }
          var i = s(t)
          l && (i = i.concat(l(t)))
          for (var c = d(r), h = d(t), p = 0; p < i.length; ++p) {
            var m = i[p]
            if (!o[m] && (!a || !a[m]) && (!h || !h[m]) && (!c || !c[m])) {
              var v = g(t, m)
              try {
                f(r, m, v)
              } catch (y) {}
            }
          }
        }
        return r
      }
    },
    6103: function (e, r) {
      'use strict'
      var t = 'function' === typeof Symbol && Symbol.for,
        a = t ? Symbol.for('react.element') : 60103,
        n = t ? Symbol.for('react.portal') : 60106,
        o = t ? Symbol.for('react.fragment') : 60107,
        i = t ? Symbol.for('react.strict_mode') : 60108,
        c = t ? Symbol.for('react.profiler') : 60114,
        d = t ? Symbol.for('react.provider') : 60109,
        f = t ? Symbol.for('react.context') : 60110,
        s = t ? Symbol.for('react.async_mode') : 60111,
        l = t ? Symbol.for('react.concurrent_mode') : 60111,
        g = t ? Symbol.for('react.forward_ref') : 60112,
        b = t ? Symbol.for('react.suspense') : 60113,
        u = t ? Symbol.for('react.suspense_list') : 60120,
        h = t ? Symbol.for('react.memo') : 60115,
        p = t ? Symbol.for('react.lazy') : 60116,
        m = t ? Symbol.for('react.block') : 60121,
        v = t ? Symbol.for('react.fundamental') : 60117,
        y = t ? Symbol.for('react.responder') : 60118,
        x = t ? Symbol.for('react.scope') : 60119
      function B(e) {
        if ('object' === typeof e && null !== e) {
          var r = e.$$typeof
          switch (r) {
            case a:
              switch ((e = e.type)) {
                case s:
                case l:
                case o:
                case c:
                case i:
                case b:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case f:
                    case g:
                    case p:
                    case h:
                    case d:
                      return e
                    default:
                      return r
                  }
              }
            case n:
              return r
          }
        }
      }
      function w(e) {
        return B(e) === l
      }
      ;(r.AsyncMode = s),
        (r.ConcurrentMode = l),
        (r.ContextConsumer = f),
        (r.ContextProvider = d),
        (r.Element = a),
        (r.ForwardRef = g),
        (r.Fragment = o),
        (r.Lazy = p),
        (r.Memo = h),
        (r.Portal = n),
        (r.Profiler = c),
        (r.StrictMode = i),
        (r.Suspense = b),
        (r.isAsyncMode = function (e) {
          return w(e) || B(e) === s
        }),
        (r.isConcurrentMode = w),
        (r.isContextConsumer = function (e) {
          return B(e) === f
        }),
        (r.isContextProvider = function (e) {
          return B(e) === d
        }),
        (r.isElement = function (e) {
          return 'object' === typeof e && null !== e && e.$$typeof === a
        }),
        (r.isForwardRef = function (e) {
          return B(e) === g
        }),
        (r.isFragment = function (e) {
          return B(e) === o
        }),
        (r.isLazy = function (e) {
          return B(e) === p
        }),
        (r.isMemo = function (e) {
          return B(e) === h
        }),
        (r.isPortal = function (e) {
          return B(e) === n
        }),
        (r.isProfiler = function (e) {
          return B(e) === c
        }),
        (r.isStrictMode = function (e) {
          return B(e) === i
        }),
        (r.isSuspense = function (e) {
          return B(e) === b
        }),
        (r.isValidElementType = function (e) {
          return (
            'string' === typeof e ||
            'function' === typeof e ||
            e === o ||
            e === l ||
            e === c ||
            e === i ||
            e === b ||
            e === u ||
            ('object' === typeof e &&
              null !== e &&
              (e.$$typeof === p ||
                e.$$typeof === h ||
                e.$$typeof === d ||
                e.$$typeof === f ||
                e.$$typeof === g ||
                e.$$typeof === v ||
                e.$$typeof === y ||
                e.$$typeof === x ||
                e.$$typeof === m))
          )
        }),
        (r.typeOf = B)
    },
    1296: function (e, r, t) {
      'use strict'
      e.exports = t(6103)
    },
    4269: function (e) {
      !(function () {
        var r
        function t(e, a) {
          var n = this instanceof t ? this : r
          if ((n.reset(a), 'string' === typeof e && e.length > 0 && n.hash(e), n !== this)) return n
        }
        ;(t.prototype.hash = function (e) {
          var r, t, a, n, o
          switch (((o = e.length), (this.len += o), (t = this.k1), (a = 0), this.rem)) {
            case 0:
              t ^= o > a ? 65535 & e.charCodeAt(a++) : 0
            case 1:
              t ^= o > a ? (65535 & e.charCodeAt(a++)) << 8 : 0
            case 2:
              t ^= o > a ? (65535 & e.charCodeAt(a++)) << 16 : 0
            case 3:
              ;(t ^= o > a ? (255 & e.charCodeAt(a)) << 24 : 0),
                (t ^= o > a ? (65280 & e.charCodeAt(a++)) >> 8 : 0)
          }
          if (((this.rem = (o + this.rem) & 3), (o -= this.rem) > 0)) {
            for (
              r = this.h1;
              (r =
                (5 *
                  (r =
                    ((r ^= t =
                      (13715 *
                        (t =
                          ((t = (11601 * t + 3432906752 * (65535 & t)) & 4294967295) << 15) |
                          (t >>> 17)) +
                        461832192 * (65535 & t)) &
                      4294967295) <<
                      13) |
                    (r >>> 19)) +
                  3864292196) &
                4294967295),
                !(a >= o);

            )
              (t =
                (65535 & e.charCodeAt(a++)) ^
                ((65535 & e.charCodeAt(a++)) << 8) ^
                ((65535 & e.charCodeAt(a++)) << 16)),
                (t ^= ((255 & (n = e.charCodeAt(a++))) << 24) ^ ((65280 & n) >> 8))
            switch (((t = 0), this.rem)) {
              case 3:
                t ^= (65535 & e.charCodeAt(a + 2)) << 16
              case 2:
                t ^= (65535 & e.charCodeAt(a + 1)) << 8
              case 1:
                t ^= 65535 & e.charCodeAt(a)
            }
            this.h1 = r
          }
          return (this.k1 = t), this
        }),
          (t.prototype.result = function () {
            var e, r
            return (
              (e = this.k1),
              (r = this.h1),
              e > 0 &&
                (r ^= e =
                  (13715 *
                    (e =
                      ((e = (11601 * e + 3432906752 * (65535 & e)) & 4294967295) << 15) |
                      (e >>> 17)) +
                    461832192 * (65535 & e)) &
                  4294967295),
              (r ^= this.len),
              (r = (51819 * (r ^= r >>> 16) + 2246770688 * (65535 & r)) & 4294967295),
              (r = (44597 * (r ^= r >>> 13) + 3266445312 * (65535 & r)) & 4294967295),
              (r ^= r >>> 16) >>> 0
            )
          }),
          (t.prototype.reset = function (e) {
            return (
              (this.h1 = 'number' === typeof e ? e : 0), (this.rem = this.k1 = this.len = 0), this
            )
          }),
          (r = new t()),
          (e.exports = t)
      })()
    },
    6258: function (e, r) {
      'use strict'
      function t(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r]
          for (var a in t) e[a] = t[a]
        }
        return e
      }
      var a = {
        read: function (e) {
          return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function (e) {
          return encodeURIComponent(e).replace(
            /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
            decodeURIComponent
          )
        },
      }
      var n = (function e(r, n) {
        function o(e, a, o) {
          if ('undefined' !== typeof document) {
            'number' === typeof (o = t({}, n, o)).expires &&
              (o.expires = new Date(Date.now() + 864e5 * o.expires)),
              o.expires && (o.expires = o.expires.toUTCString()),
              (e = encodeURIComponent(e)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape)),
              (a = r.write(a, e))
            var i = ''
            for (var c in o)
              o[c] && ((i += '; ' + c), !0 !== o[c] && (i += '=' + o[c].split(';')[0]))
            return (document.cookie = e + '=' + a + i)
          }
        }
        return Object.create(
          {
            set: o,
            get: function (e) {
              if ('undefined' !== typeof document && (!arguments.length || e)) {
                for (
                  var t = document.cookie ? document.cookie.split('; ') : [], n = {}, o = 0;
                  o < t.length;
                  o++
                ) {
                  var i = t[o].split('='),
                    c = i.slice(1).join('=')
                  '"' === c[0] && (c = c.slice(1, -1))
                  try {
                    var d = a.read(i[0])
                    if (((n[d] = r.read(c, d)), e === d)) break
                  } catch (f) {}
                }
                return e ? n[e] : n
              }
            },
            remove: function (e, r) {
              o(e, '', t({}, r, { expires: -1 }))
            },
            withAttributes: function (r) {
              return e(this.converter, t({}, this.attributes, r))
            },
            withConverter: function (r) {
              return e(t({}, this.converter, r), this.attributes)
            },
          },
          { attributes: { value: Object.freeze(n) }, converter: { value: Object.freeze(r) } }
        )
      })(a, { path: '/' })
      r.Z = n
    },
    7544: function (e, r, t) {
      e.exports = t(3857)
    },
    2467: function (e, r, t) {
      'use strict'
      t.d(r, {
        m: function () {
          return n
        },
        u: function () {
          return o
        },
      })
      var a = t(7294),
        n = (0, a.createContext)(null),
        o = function () {
          var e = (0, a.useContext)(n)
          if (!e)
            throw new Error(
              '"useLanguagesContext" may only be used inside "LanguagesContext.Provider"'
            )
          return e
        }
    },
    3169: function (e, r, t) {
      'use strict'
      t.d(r, {
        tw: function () {
          return B
        },
        ZP: function () {
          return E
        },
        qP: function () {
          return C
        },
      })
      var a,
        n = t(6265),
        o = t(8347),
        i = new Uint8Array(16)
      function c() {
        if (
          !a &&
          !(a =
            ('undefined' !== typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ('undefined' !== typeof msCrypto &&
              'function' === typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
          )
        return a(i)
      }
      var d =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
      for (
        var f = function (e) {
            return 'string' === typeof e && d.test(e)
          },
          s = [],
          l = 0;
        l < 256;
        ++l
      )
        s.push((l + 256).toString(16).substr(1))
      var g = function (e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          t = (
            s[e[r + 0]] +
            s[e[r + 1]] +
            s[e[r + 2]] +
            s[e[r + 3]] +
            '-' +
            s[e[r + 4]] +
            s[e[r + 5]] +
            '-' +
            s[e[r + 6]] +
            s[e[r + 7]] +
            '-' +
            s[e[r + 8]] +
            s[e[r + 9]] +
            '-' +
            s[e[r + 10]] +
            s[e[r + 11]] +
            s[e[r + 12]] +
            s[e[r + 13]] +
            s[e[r + 14]] +
            s[e[r + 15]]
          ).toLowerCase()
        if (!f(t)) throw TypeError('Stringified UUID is invalid')
        return t
      }
      var b = function (e, r, t) {
          var a = (e = e || {}).random || (e.rng || c)()
          if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), r)) {
            t = t || 0
            for (var n = 0; n < 16; ++n) r[t + n] = a[n]
            return r
          }
          return g(a)
        },
        u = t(6258)
      function h() {
        var e = document.querySelector('meta[name="csrf-token"]')
        return e ? e.getAttribute('content') : ''
      }
      var p = t(7547)
      function m(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          r &&
            (a = a.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function v(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? m(Object(t), !0).forEach(function (r) {
                ;(0, n.Z)(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
              })
        }
        return e
      }
      var y,
        x,
        B,
        w = '_docs-events',
        k = Date.now(),
        S = 0,
        T = !1,
        I = !1
      function C(e) {
        var r,
          t = e.type,
          a = e.version,
          n = void 0 === a ? '1.0.0' : a,
          i = (0, o.Z)(e, ['type', 'version']),
          c = v(
            {
              _csrf: h(),
              type: t,
              context: v(
                v(
                  {
                    event_id: b(),
                    user:
                      y ||
                      ((y = u.Z.get(w)) ||
                        ((y = b()),
                        u.Z.set(w, y, { secure: !0, sameSite: 'strict', expires: 365 })),
                      y),
                    version: n,
                    created: new Date().toISOString(),
                    page_event_id: x,
                    path: location.pathname,
                    hostname: location.hostname,
                    referrer: document.referrer,
                    search: location.search,
                    href: location.href,
                    site_language: location.pathname.split('/')[1],
                  },
                  (0, p.Z)()
                ),
                {},
                {
                  viewport_width: document.documentElement.clientWidth,
                  viewport_height: document.documentElement.clientHeight,
                  timezone: new Date().getTimezoneOffset() / -60,
                  user_language: navigator.language,
                  application_preference: u.Z.get('toolPreferred'),
                  color_mode_preference: A(),
                }
              ),
            },
            i
          )
        if (null !== (r = navigator) && void 0 !== r && r.sendBeacon) {
          var d = new Blob([JSON.stringify(c)], { type: 'application/json' })
          navigator.sendBeacon('/events', d)
        }
        return c
      }
      function A() {
        var e,
          r =
            null === (e = document.querySelector('body')) || void 0 === e
              ? void 0
              : e.dataset.colorMode
        return (
          'auto' === r &&
            (window.matchMedia('(prefers-color-scheme: light)').matches
              ? (r += ':light')
              : window.matchMedia('(prefers-color-scheme: dark)').matches && (r += ':dark')),
          r
        )
      }
      function O() {
        if (!T) {
          ;(T = !0),
            setTimeout(function () {
              T = !1
            }, 200)
          var e = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight
          e > S && (S = e)
        }
      }
      function P() {
        if (!I && 'hidden' === document.visibilityState) {
          I = !0
          var e = (function () {
              var e,
                r,
                t,
                a,
                n =
                  null === (e = performance) ||
                  void 0 === e ||
                  null === (r = e.getEntriesByType('paint')) ||
                  void 0 === r
                    ? void 0
                    : r.find(function (e) {
                        return 'first-contentful-paint' === e.name
                      }),
                o =
                  null === (t = performance) ||
                  void 0 === t ||
                  null === (a = t.getEntriesByType('navigation')) ||
                  void 0 === a
                    ? void 0
                    : a[0]
              return {
                firstContentfulPaint: n ? n.startTime / 1e3 : void 0,
                domInteractive: o ? o.domInteractive / 1e3 : void 0,
                domComplete: o ? o.domComplete / 1e3 : void 0,
                render: o ? (o.responseEnd - o.requestStart) / 1e3 : void 0,
              }
            })(),
            r = e.render,
            t = e.firstContentfulPaint,
            a = e.domInteractive,
            n = e.domComplete
          return C({
            type: B.exit,
            exit_render_duration: r,
            exit_first_paint: t,
            exit_dom_interactive: a,
            exit_dom_complete: n,
            exit_visit_duration: (Date.now() - k) / 1e3,
            exit_scroll_length: S,
          })
        }
      }
      function E() {
        !(function () {
          var e,
            r = C({ type: B.page })
          x =
            null === r || void 0 === r || null === (e = r.context) || void 0 === e
              ? void 0
              : e.event_id
        })(),
          window.addEventListener('scroll', O),
          document.addEventListener('visibilitychange', P),
          document.documentElement.addEventListener('click', function (e) {
            var r = e.target.closest('a[href^="http"]')
            r && C({ type: B.link, link_url: r.href })
          }),
          ['copy', 'cut', 'paste'].forEach(function (e) {
            document.documentElement.addEventListener(e, function () {
              C({ type: B.clipboard, clipboard_operation: e })
            })
          }),
          (function () {
            var e
            document.querySelector('.sidebar-products') &&
              (Array.from(document.querySelectorAll('.sidebar-products details')).forEach(function (
                e
              ) {
                return e.addEventListener('toggle', function (e) {
                  var r,
                    t = e.target
                  C({
                    type: B.navigate,
                    navigate_label: 'details '
                      .concat(t.open ? 'open' : 'close', ': ')
                      .concat(
                        null === t ||
                          void 0 === t ||
                          null === (r = t.querySelector('summary')) ||
                          void 0 === r
                          ? void 0
                          : r.innerText
                      ),
                  })
                })
              }),
              null === (e = document.querySelector('.sidebar-products')) ||
                void 0 === e ||
                e.addEventListener('click', function (e) {
                  var r = e.target.closest('a')
                  r && C({ type: B.navigate, navigate_label: 'link: '.concat(r.href) })
                }))
          })()
      }
      !(function (e) {
        ;(e.page = 'page'),
          (e.exit = 'exit'),
          (e.link = 'link'),
          (e.search = 'search'),
          (e.navigate = 'navigate'),
          (e.survey = 'survey'),
          (e.experiment = 'experiment'),
          (e.preference = 'preference'),
          (e.clipboard = 'clipboard'),
          (e.print = 'print')
      })(B || (B = {}))
    },
    7547: function (e, r, t) {
      'use strict'
      t.d(r, {
        Z: function () {
          return i
        },
      })
      var a = t(9227),
        n = [
          /(iphone os|ipad os) ([^);]+)/i,
          /(mac) os x ([^);]+)/i,
          /(windows) ([^);]+)/i,
          /(android) ([^);]+)/i,
          /(cros) ([^);]+)/i,
          /(linux) ([^);]+)/i,
        ],
        o = [
          /(firefox)\/([^\s)]+)/i,
          /(edge)\/([^\s)]+)/i,
          /(chrome)\/([^\s)]+)/i,
          /(safari)\/([^\s)]+)/i,
          /ms(ie)\/([^\s)]+)/i,
        ]
      function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent
        e = e.toLowerCase()
        var r = n.find(function (r) {
            return r.test(e)
          }),
          t = (r && e.match(r)) || [],
          i = (0, a.Z)(t, 3),
          c = i[1],
          d = void 0 === c ? 'other' : c,
          f = i[2],
          s = void 0 === f ? '0' : f
        ;('iphone os' !== d && 'ipad os' !== d) || (d = 'ios')
        var l = o.find(function (r) {
            return r.test(e)
          }),
          g = (l && e.match(l)) || [],
          b = (0, a.Z)(g, 3),
          u = b[1],
          h = void 0 === u ? 'other' : u,
          p = b[2],
          m = void 0 === p ? '0' : p
        return { os: d, os_version: s, browser: h, browser_version: m }
      }
    },
    3398: function (e, r, t) {
      'use strict'
      var a
      ;(r.__esModule = !0), (r.AmpStateContext = void 0)
      var n = ((a = t(7294)) && a.__esModule ? a : { default: a }).default.createContext({})
      r.AmpStateContext = n
    },
    6393: function (e, r, t) {
      'use strict'
      ;(r.__esModule = !0),
        (r.isInAmpMode = i),
        (r.useAmp = function () {
          return i(n.default.useContext(o.AmpStateContext))
        })
      var a,
        n = (a = t(7294)) && a.__esModule ? a : { default: a },
        o = t(3398)
      function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = e.ampFirst,
          t = void 0 !== r && r,
          a = e.hybrid,
          n = void 0 !== a && a,
          o = e.hasQuery,
          i = void 0 !== o && o
        return t || (n && i)
      }
    },
    2775: function (e, r, t) {
      'use strict'
      var a = t(1682)
      function n(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          r &&
            (a = a.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      r.default = void 0
      var o,
        i = (function (e) {
          if (e && e.__esModule) return e
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e }
          var r = l()
          if (r && r.has(e)) return r.get(e)
          var t = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, n) : null
              o && (o.get || o.set) ? Object.defineProperty(t, n, o) : (t[n] = e[n])
            }
          ;(t.default = e), r && r.set(e, t)
          return t
        })(t(7294)),
        c = (o = t(3244)) && o.__esModule ? o : { default: o },
        d = t(3398),
        f = t(1165),
        s = t(6393)
      function l() {
        if ('function' !== typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (l = function () {
            return e
          }),
          e
        )
      }
      function g() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          r = [i.default.createElement('meta', { charSet: 'utf-8' })]
        return (
          e ||
            r.push(
              i.default.createElement('meta', { name: 'viewport', content: 'width=device-width' })
            ),
          r
        )
      }
      function b(e, r) {
        return 'string' === typeof r || 'number' === typeof r
          ? e
          : r.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(r.props.children).reduce(function (e, r) {
                return 'string' === typeof r || 'number' === typeof r ? e : e.concat(r)
              }, [])
            )
          : e.concat(r)
      }
      var u = ['name', 'httpEquiv', 'charSet', 'itemProp']
      function h(e, r) {
        return e
          .reduce(function (e, r) {
            var t = i.default.Children.toArray(r.props.children)
            return e.concat(t)
          }, [])
          .reduce(b, [])
          .reverse()
          .concat(g(r.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                r = new Set(),
                t = new Set(),
                a = {}
              return function (n) {
                var o = !0,
                  i = !1
                if (n.key && 'number' !== typeof n.key && n.key.indexOf('$') > 0) {
                  i = !0
                  var c = n.key.slice(n.key.indexOf('$') + 1)
                  e.has(c) ? (o = !1) : e.add(c)
                }
                switch (n.type) {
                  case 'title':
                  case 'base':
                    r.has(n.type) ? (o = !1) : r.add(n.type)
                    break
                  case 'meta':
                    for (var d = 0, f = u.length; d < f; d++) {
                      var s = u[d]
                      if (n.props.hasOwnProperty(s))
                        if ('charSet' === s) t.has(s) ? (o = !1) : t.add(s)
                        else {
                          var l = n.props[s],
                            g = a[s] || new Set()
                          ;('name' === s && i) || !g.has(l) ? (g.add(l), (a[s] = g)) : (o = !1)
                        }
                    }
                }
                return o
              }
            })()
          )
          .reverse()
          .map(function (e, t) {
            var o = e.key || t
            if (
              !r.inAmpMode &&
              'link' === e.type &&
              e.props.href &&
              ['https://fonts.googleapis.com/css', 'https://use.typekit.net/'].some(function (r) {
                return e.props.href.startsWith(r)
              })
            ) {
              var c = (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = null != arguments[r] ? arguments[r] : {}
                  r % 2
                    ? n(Object(t), !0).forEach(function (r) {
                        a(e, r, t[r])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : n(Object(t)).forEach(function (r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                      })
                }
                return e
              })({}, e.props || {})
              return (
                (c['data-href'] = c.href),
                (c.href = void 0),
                (c['data-optimized-fonts'] = !0),
                i.default.cloneElement(e, c)
              )
            }
            return i.default.cloneElement(e, { key: o })
          })
      }
      var p = function (e) {
        var r = e.children,
          t = (0, i.useContext)(d.AmpStateContext),
          a = (0, i.useContext)(f.HeadManagerContext)
        return i.default.createElement(
          c.default,
          { reduceComponentsToState: h, headManager: a, inAmpMode: (0, s.isInAmpMode)(t) },
          r
        )
      }
      r.default = p
    },
    3244: function (e, r, t) {
      'use strict'
      var a = t(3115),
        n = t(2553),
        o = t(2012),
        i = (t(450), t(9807)),
        c = t(7690),
        d = t(9828)
      function f(e) {
        var r = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var t,
            a = d(e)
          if (r) {
            var n = d(this).constructor
            t = Reflect.construct(a, arguments, n)
          } else t = a.apply(this, arguments)
          return c(this, t)
        }
      }
      ;(r.__esModule = !0), (r.default = void 0)
      var s = t(7294),
        l = (function (e) {
          i(t, e)
          var r = f(t)
          function t(e) {
            var o
            return (
              n(this, t),
              ((o = r.call(this, e))._hasHeadManager = void 0),
              (o.emitChange = function () {
                o._hasHeadManager &&
                  o.props.headManager.updateHead(
                    o.props.reduceComponentsToState(
                      a(o.props.headManager.mountedInstances),
                      o.props
                    )
                  )
              }),
              (o._hasHeadManager = o.props.headManager && o.props.headManager.mountedInstances),
              o
            )
          }
          return (
            o(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._hasHeadManager && this.props.headManager.mountedInstances.add(this),
                    this.emitChange()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.emitChange()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._hasHeadManager && this.props.headManager.mountedInstances.delete(this),
                    this.emitChange()
                },
              },
              {
                key: 'render',
                value: function () {
                  return null
                },
              },
            ]),
            t
          )
        })(s.Component)
      r.default = l
    },
    3857: function (e, r, t) {
      'use strict'
      var a = t(809),
        n = t(2553),
        o = t(2012),
        i = t(9807),
        c = t(7690),
        d = t(9828),
        f = t(8561)
      function s(e) {
        var r = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var t,
            a = d(e)
          if (r) {
            var n = d(this).constructor
            t = Reflect.construct(a, arguments, n)
          } else t = a.apply(this, arguments)
          return c(this, t)
        }
      }
      var l = t(2426)
      r.default = void 0
      var g = l(t(7294)),
        b = t(4755)
      function u(e) {
        return h.apply(this, arguments)
      }
      function h() {
        return (h = f(
          a.mark(function e(r) {
            var t, n, o
            return a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = r.Component), (n = r.ctx), (e.next = 3), (0, b.loadGetInitialProps)(t, n)
                    )
                  case 3:
                    return (o = e.sent), e.abrupt('return', { pageProps: o })
                  case 5:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      b.AppInitialProps, b.NextWebVitalsMetric
      var p = (function (e) {
        i(t, e)
        var r = s(t)
        function t() {
          return n(this, t), r.apply(this, arguments)
        }
        return (
          o(t, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  r = e.Component,
                  t = e.pageProps
                return g.default.createElement(r, t)
              },
            },
          ]),
          t
        )
      })(g.default.Component)
      ;(r.default = p), (p.origGetInitialProps = u), (p.getInitialProps = u)
    },
    452: function (e, r, t) {
      'use strict'
      t.r(r),
        t.d(r, {
          default: function () {
            return j
          },
        })
      var a = t(809),
        n = t.n(a),
        o = t(2447),
        i = t(5893),
        c = t(6265),
        d = t(7294),
        f = t(7544),
        s = t(9008),
        l = t(9163),
        g = t(3895),
        b = t(9996),
        u = t.n(b)
      const h = 'light',
        p = 'dark',
        m = d.createContext({
          setColorMode: () => null,
          setDayScheme: () => null,
          setNightScheme: () => null,
        }),
        v = ({ children: e, ...r }) => {
          var t, a, n, o, i, c, f, s
          const { theme: b, colorMode: v, dayScheme: B, nightScheme: w } = y(),
            k =
              null !== (t = null !== (a = r.theme) && void 0 !== a ? a : b) && void 0 !== t
                ? t
                : g.Z,
            [S, T] = d.useState(
              null !== (n = null !== (o = r.colorMode) && void 0 !== o ? o : v) && void 0 !== n
                ? n
                : 'day'
            ),
            [I, C] = d.useState(
              null !== (i = null !== (c = r.dayScheme) && void 0 !== c ? c : B) && void 0 !== i
                ? i
                : h
            ),
            [A, O] = d.useState(
              null !== (f = null !== (s = r.nightScheme) && void 0 !== s ? s : w) && void 0 !== f
                ? f
                : p
            ),
            P = (function (e, r) {
              switch (e) {
                case 'auto':
                  return r
                default:
                  return e
              }
            })(
              S,
              (function () {
                const [e, r] = d.useState(x)
                return (
                  d.useEffect(() => {
                    var e, t
                    const a =
                      null === (e = window) ||
                      void 0 === e ||
                      null === (t = e.matchMedia) ||
                      void 0 === t
                        ? void 0
                        : t.call(e, '(prefers-color-scheme: dark)')
                    function n(e) {
                      const t = e.matches
                      r(t ? 'night' : 'day')
                    }
                    return (
                      null === a || void 0 === a || a.addEventListener('change', n),
                      function () {
                        null === a || void 0 === a || a.removeEventListener('change', n)
                      }
                    )
                  }, []),
                  e
                )
              })()
            ),
            E = (function (e, r, t) {
              switch (e) {
                case 'day':
                  return r
                case 'night':
                  return t
              }
            })(P, I, A),
            j = d.useMemo(
              () =>
                (function (e, r) {
                  if (!e.colorSchemes) return e
                  if (!e.colorSchemes[r]) {
                    console.error(`\`${r}\` scheme not defined in \`theme.colorSchemes\``)
                    const t = Object.keys(e.colorSchemes)[0]
                    return u()(e, e.colorSchemes[t])
                  }
                  return u()(e, e.colorSchemes[r])
                })(k, E),
              [k, E]
            )
          return (
            d.useEffect(() => {
              var e, t
              T(
                null !== (e = null !== (t = r.colorMode) && void 0 !== t ? t : v) && void 0 !== e
                  ? e
                  : 'day'
              )
            }, [r.colorMode, v]),
            d.useEffect(() => {
              var e, t
              C(
                null !== (e = null !== (t = r.dayScheme) && void 0 !== t ? t : B) && void 0 !== e
                  ? e
                  : h
              )
            }, [r.dayScheme, B]),
            d.useEffect(() => {
              var e, t
              O(
                null !== (e = null !== (t = r.nightScheme) && void 0 !== t ? t : w) && void 0 !== e
                  ? e
                  : p
              )
            }, [r.nightScheme, w]),
            d.createElement(
              m.Provider,
              {
                value: {
                  theme: j,
                  colorScheme: E,
                  colorMode: S,
                  resolvedColorMode: P,
                  dayScheme: I,
                  nightScheme: A,
                  setColorMode: T,
                  setDayScheme: C,
                  setNightScheme: O,
                },
              },
              d.createElement(l.f6, { theme: j }, e)
            )
          )
        }
      function y() {
        return d.useContext(m)
      }
      function x() {
        var e, r, t
        return 'undefined' !== typeof window &&
          null !== (e = (r = window).matchMedia) &&
          void 0 !== e &&
          null !== (t = e.call(r, '(prefers-color-scheme: dark)')) &&
          void 0 !== t &&
          t.matches
          ? 'night'
          : 'day'
      }
      v.displayName = 'ThemeProvider'
      var B = v,
        w = { colorMode: 'auto', nightScheme: 'dark', dayScheme: 'light' },
        k = { colorMode: 'auto', nightScheme: 'dark', dayScheme: 'light' },
        S = { auto: 'auto', light: 'day', dark: 'night' },
        T = function (e, r) {
          var t,
            a,
            n,
            o = {},
            i = 'css' === r ? w : k
          if (null !== (t = e.cookies) && void 0 !== t && t.color_mode)
            try {
              o = JSON.parse(decodeURIComponent(e.cookies.color_mode))
            } catch (c) {}
          return {
            colorMode: ('css' === r ? o.color_mode : S[o.color_mode || '']) || i.colorMode,
            nightScheme:
              (null === (a = o.dark_theme) || void 0 === a ? void 0 : a.name) || i.nightScheme,
            dayScheme:
              (null === (n = o.light_theme) || void 0 === n ? void 0 : n.name) || i.dayScheme,
          }
        },
        I = (t(5454), t(3169))
      t(4269)
      var C = t(2467)
      function A(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          r &&
            (a = a.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function O(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? A(Object(t), !0).forEach(function (r) {
                ;(0, c.Z)(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
              })
        }
        return e
      }
      var P = function (e) {
        var r = e.Component,
          t = e.pageProps,
          a = e.csrfToken,
          n = e.themeProps,
          o = e.languagesContext
        return (
          (0, d.useEffect)(function () {
            ;(0, I.ZP)()
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(s.default, {
                children: [
                  (0, i.jsx)('meta', { charSet: 'utf-8' }),
                  (0, i.jsx)('title', { children: 'GitHub Documentation' }),
                  (0, i.jsx)('meta', {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                  }),
                  (0, i.jsx)('link', {
                    rel: 'alternate icon',
                    type: 'image/png',
                    href: '/assets/images/site/favicon.png',
                  }),
                  (0, i.jsx)('link', {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: '/assets/images/site/favicon.svg',
                  }),
                  (0, i.jsx)('meta', {
                    name: 'google-site-verification',
                    content: 'OgdQc0GZfjDI52wDv1bkMT-SLpBUo_h5nn9mI9L22xQ',
                  }),
                  (0, i.jsx)('meta', {
                    name: 'google-site-verification',
                    content: 'c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY',
                  }),
                  (0, i.jsx)('meta', { name: 'csrf-token', content: a }),
                ],
              }),
              (0, i.jsx)(B, {
                children: (0, i.jsxs)(C.m.Provider, {
                  value: o,
                  children: [(0, i.jsx)(E, { themeProps: n }), (0, i.jsx)(r, O({}, t))],
                }),
              }),
            ],
          })
        )
      }
      P.getInitialProps = (function () {
        var e = (0, o.Z)(
          n().mark(function e(r) {
            var t, a, o, i
            return n().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (a = r.ctx), (e.next = 3), f.default.getInitialProps(r)
                  case 3:
                    return (
                      (o = e.sent),
                      (i = a.req),
                      e.abrupt(
                        'return',
                        O(
                          O({}, o),
                          {},
                          {
                            themeProps: T(i),
                            csrfToken:
                              (null === i ||
                              void 0 === i ||
                              null === (t = i.csrfToken) ||
                              void 0 === t
                                ? void 0
                                : t.call(i)) || '',
                            languagesContext: { languages: i.context.languages },
                          }
                        )
                      )
                    )
                  case 6:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )
        return function (r) {
          return e.apply(this, arguments)
        }
      })()
      var E = function (e) {
          var r = e.themeProps,
            t = y().setColorMode
          return (
            (0, d.useEffect)(function () {
              setTimeout(function () {
                t(r.colorMode)
              })
            }, []),
            null
          )
        },
        j = P
    },
    6363: function (e, r, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return t(452)
        },
      ])
    },
    5454: function () {},
    9008: function (e, r, t) {
      e.exports = t(2775)
    },
    8164: function (e, r, t) {
      var a = t(4360)
      e.exports = function (e) {
        if (Array.isArray(e)) return a(e)
      }
    },
    2447: function (e, r, t) {
      'use strict'
      function a(e, r, t, a, n, o, i) {
        try {
          var c = e[o](i),
            d = c.value
        } catch (f) {
          return void t(f)
        }
        c.done ? r(d) : Promise.resolve(d).then(a, n)
      }
      function n(e) {
        return function () {
          var r = this,
            t = arguments
          return new Promise(function (n, o) {
            var i = e.apply(r, t)
            function c(e) {
              a(i, n, o, c, d, 'next', e)
            }
            function d(e) {
              a(i, n, o, c, d, 'throw', e)
            }
            c(void 0)
          })
        }
      }
      t.d(r, {
        Z: function () {
          return n
        },
      })
    },
    6265: function (e, r, t) {
      'use strict'
      function a(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        )
      }
      t.d(r, {
        Z: function () {
          return a
        },
      })
    },
    8347: function (e, r, t) {
      'use strict'
      function a(e, r) {
        if (null == e) return {}
        var t,
          a,
          n = (function (e, r) {
            if (null == e) return {}
            var t,
              a,
              n = {},
              o = Object.keys(e)
            for (a = 0; a < o.length; a++) (t = o[a]), r.indexOf(t) >= 0 || (n[t] = e[t])
            return n
          })(e, r)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (a = 0; a < o.length; a++)
            (t = o[a]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]))
        }
        return n
      }
      t.d(r, {
        Z: function () {
          return a
        },
      })
    },
    9227: function (e, r, t) {
      'use strict'
      function a(e, r) {
        ;(null == r || r > e.length) && (r = e.length)
        for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t]
        return a
      }
      function n(e, r) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, r) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
              var t = [],
                a = !0,
                n = !1,
                o = void 0
              try {
                for (
                  var i, c = e[Symbol.iterator]();
                  !(a = (i = c.next()).done) && (t.push(i.value), !r || t.length !== r);
                  a = !0
                );
              } catch (d) {
                ;(n = !0), (o = d)
              } finally {
                try {
                  a || null == c.return || c.return()
                } finally {
                  if (n) throw o
                }
              }
              return t
            }
          })(e, r) ||
          (function (e, r) {
            if (e) {
              if ('string' === typeof e) return a(e, r)
              var t = Object.prototype.toString.call(e).slice(8, -1)
              return (
                'Object' === t && e.constructor && (t = e.constructor.name),
                'Map' === t || 'Set' === t
                  ? Array.from(e)
                  : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? a(e, r)
                  : void 0
              )
            }
          })(e, r) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      t.d(r, {
        Z: function () {
          return n
        },
      })
    },
    5725: function (e) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
    },
    3115: function (e, r, t) {
      var a = t(8164),
        n = t(7381),
        o = t(3585),
        i = t(5725)
      e.exports = function (e) {
        return a(e) || n(e) || o(e) || i()
      }
    },
    4155: function (e) {
      var r,
        t,
        a = (e.exports = {})
      function n() {
        throw new Error('setTimeout has not been defined')
      }
      function o() {
        throw new Error('clearTimeout has not been defined')
      }
      function i(e) {
        if (r === setTimeout) return setTimeout(e, 0)
        if ((r === n || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0)
        try {
          return r(e, 0)
        } catch (t) {
          try {
            return r.call(null, e, 0)
          } catch (t) {
            return r.call(this, e, 0)
          }
        }
      }
      !(function () {
        try {
          r = 'function' === typeof setTimeout ? setTimeout : n
        } catch (e) {
          r = n
        }
        try {
          t = 'function' === typeof clearTimeout ? clearTimeout : o
        } catch (e) {
          t = o
        }
      })()
      var c,
        d = [],
        f = !1,
        s = -1
      function l() {
        f && c && ((f = !1), c.length ? (d = c.concat(d)) : (s = -1), d.length && g())
      }
      function g() {
        if (!f) {
          var e = i(l)
          f = !0
          for (var r = d.length; r; ) {
            for (c = d, d = []; ++s < r; ) c && c[s].run()
            ;(s = -1), (r = d.length)
          }
          ;(c = null),
            (f = !1),
            (function (e) {
              if (t === clearTimeout) return clearTimeout(e)
              if ((t === o || !t) && clearTimeout) return (t = clearTimeout), clearTimeout(e)
              try {
                t(e)
              } catch (r) {
                try {
                  return t.call(null, e)
                } catch (r) {
                  return t.call(this, e)
                }
              }
            })(e)
        }
      }
      function b(e, r) {
        ;(this.fun = e), (this.array = r)
      }
      function u() {}
      ;(a.nextTick = function (e) {
        var r = new Array(arguments.length - 1)
        if (arguments.length > 1) for (var t = 1; t < arguments.length; t++) r[t - 1] = arguments[t]
        d.push(new b(e, r)), 1 !== d.length || f || i(g)
      }),
        (b.prototype.run = function () {
          this.fun.apply(null, this.array)
        }),
        (a.title = 'browser'),
        (a.browser = !0),
        (a.env = {}),
        (a.argv = []),
        (a.version = ''),
        (a.versions = {}),
        (a.on = u),
        (a.addListener = u),
        (a.once = u),
        (a.off = u),
        (a.removeListener = u),
        (a.removeAllListeners = u),
        (a.emit = u),
        (a.prependListener = u),
        (a.prependOnceListener = u),
        (a.listeners = function (e) {
          return []
        }),
        (a.binding = function (e) {
          throw new Error('process.binding is not supported')
        }),
        (a.cwd = function () {
          return '/'
        }),
        (a.chdir = function (e) {
          throw new Error('process.chdir is not supported')
        }),
        (a.umask = function () {
          return 0
        })
    },
    9921: function (e, r) {
      'use strict'
      var t = 60103,
        a = 60106,
        n = 60107,
        o = 60108,
        i = 60114,
        c = 60109,
        d = 60110,
        f = 60112,
        s = 60113,
        l = 60120,
        g = 60115,
        b = 60116,
        u = 60121,
        h = 60122,
        p = 60117,
        m = 60129,
        v = 60131
      if ('function' === typeof Symbol && Symbol.for) {
        var y = Symbol.for
        ;(t = y('react.element')),
          (a = y('react.portal')),
          (n = y('react.fragment')),
          (o = y('react.strict_mode')),
          (i = y('react.profiler')),
          (c = y('react.provider')),
          (d = y('react.context')),
          (f = y('react.forward_ref')),
          (s = y('react.suspense')),
          (l = y('react.suspense_list')),
          (g = y('react.memo')),
          (b = y('react.lazy')),
          (u = y('react.block')),
          (h = y('react.server.block')),
          (p = y('react.fundamental')),
          (m = y('react.debug_trace_mode')),
          (v = y('react.legacy_hidden'))
      }
      function x(e) {
        if ('object' === typeof e && null !== e) {
          var r = e.$$typeof
          switch (r) {
            case t:
              switch ((e = e.type)) {
                case n:
                case i:
                case o:
                case s:
                case l:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case d:
                    case f:
                    case b:
                    case g:
                    case c:
                      return e
                    default:
                      return r
                  }
              }
            case a:
              return r
          }
        }
      }
      ;(r.isValidElementType = function (e) {
        return (
          'string' === typeof e ||
          'function' === typeof e ||
          e === n ||
          e === i ||
          e === m ||
          e === o ||
          e === s ||
          e === l ||
          e === v ||
          ('object' === typeof e &&
            null !== e &&
            (e.$$typeof === b ||
              e.$$typeof === g ||
              e.$$typeof === c ||
              e.$$typeof === d ||
              e.$$typeof === f ||
              e.$$typeof === p ||
              e.$$typeof === u ||
              e[0] === h))
        )
      }),
        (r.typeOf = x)
    },
    9864: function (e, r, t) {
      'use strict'
      e.exports = t(9921)
    },
    6774: function (e) {
      e.exports = function (e, r, t, a) {
        var n = t ? t.call(a, e, r) : void 0
        if (void 0 !== n) return !!n
        if (e === r) return !0
        if ('object' !== typeof e || !e || 'object' !== typeof r || !r) return !1
        var o = Object.keys(e),
          i = Object.keys(r)
        if (o.length !== i.length) return !1
        for (var c = Object.prototype.hasOwnProperty.bind(r), d = 0; d < o.length; d++) {
          var f = o[d]
          if (!c(f)) return !1
          var s = e[f],
            l = r[f]
          if (!1 === (n = t ? t.call(a, s, l, f) : void 0) || (void 0 === n && s !== l)) return !1
        }
        return !0
      }
    },
    9163: function (e, r, t) {
      'use strict'
      t.d(r, {
        f6: function () {
          return Oe
        },
        iv: function () {
          return me
        },
        ZP: function () {
          return _e
        },
      })
      var a = t(9864),
        n = t(7294),
        o = t(6774),
        i = t.n(o)
      var c = function (e) {
          function r(e, a, d, f, g) {
            for (
              var b,
                u,
                h,
                p,
                x,
                w = 0,
                k = 0,
                S = 0,
                T = 0,
                I = 0,
                j = 0,
                M = (h = b = 0),
                H = 0,
                D = 0,
                L = 0,
                $ = 0,
                N = d.length,
                F = N - 1,
                z = '',
                W = '',
                U = '',
                G = '';
              H < N;

            ) {
              if (
                ((u = d.charCodeAt(H)),
                H === F &&
                  0 !== k + T + S + w &&
                  (0 !== k && (u = 47 === k ? 10 : 47), (T = S = w = 0), N++, F++),
                0 === k + T + S + w)
              ) {
                if (H === F && (0 < D && (z = z.replace(l, '')), 0 < z.trim().length)) {
                  switch (u) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break
                    default:
                      z += d.charAt(H)
                  }
                  u = 59
                }
                switch (u) {
                  case 123:
                    for (b = (z = z.trim()).charCodeAt(0), h = 1, $ = ++H; H < N; ) {
                      switch ((u = d.charCodeAt(H))) {
                        case 123:
                          h++
                          break
                        case 125:
                          h--
                          break
                        case 47:
                          switch ((u = d.charCodeAt(H + 1))) {
                            case 42:
                            case 47:
                              e: {
                                for (M = H + 1; M < F; ++M)
                                  switch (d.charCodeAt(M)) {
                                    case 47:
                                      if (42 === u && 42 === d.charCodeAt(M - 1) && H + 2 !== M) {
                                        H = M + 1
                                        break e
                                      }
                                      break
                                    case 10:
                                      if (47 === u) {
                                        H = M + 1
                                        break e
                                      }
                                  }
                                H = M
                              }
                          }
                          break
                        case 91:
                          u++
                        case 40:
                          u++
                        case 34:
                        case 39:
                          for (; H++ < F && d.charCodeAt(H) !== u; );
                      }
                      if (0 === h) break
                      H++
                    }
                    switch (
                      ((h = d.substring($, H)),
                      0 === b && (b = (z = z.replace(s, '').trim()).charCodeAt(0)),
                      b)
                    ) {
                      case 64:
                        switch ((0 < D && (z = z.replace(l, '')), (u = z.charCodeAt(1)))) {
                          case 100:
                          case 109:
                          case 115:
                          case 45:
                            D = a
                            break
                          default:
                            D = E
                        }
                        if (
                          (($ = (h = r(a, D, h, u, g + 1)).length),
                          0 < _ &&
                            ((x = c(3, h, (D = t(E, z, L)), a, A, C, $, u, g, f)),
                            (z = D.join('')),
                            void 0 !== x &&
                              0 === ($ = (h = x.trim()).length) &&
                              ((u = 0), (h = ''))),
                          0 < $)
                        )
                          switch (u) {
                            case 115:
                              z = z.replace(B, i)
                            case 100:
                            case 109:
                            case 45:
                              h = z + '{' + h + '}'
                              break
                            case 107:
                              ;(h = (z = z.replace(m, '$1 $2')) + '{' + h + '}'),
                                (h =
                                  1 === P || (2 === P && o('@' + h, 3))
                                    ? '@-webkit-' + h + '@' + h
                                    : '@' + h)
                              break
                            default:
                              ;(h = z + h), 112 === f && ((W += h), (h = ''))
                          }
                        else h = ''
                        break
                      default:
                        h = r(a, t(a, z, L), h, f, g + 1)
                    }
                    ;(U += h), (h = L = D = M = b = 0), (z = ''), (u = d.charCodeAt(++H))
                    break
                  case 125:
                  case 59:
                    if (1 < ($ = (z = (0 < D ? z.replace(l, '') : z).trim()).length))
                      switch (
                        (0 === M &&
                          ((b = z.charCodeAt(0)), 45 === b || (96 < b && 123 > b)) &&
                          ($ = (z = z.replace(' ', ':')).length),
                        0 < _ &&
                          void 0 !== (x = c(1, z, a, e, A, C, W.length, f, g, f)) &&
                          0 === ($ = (z = x.trim()).length) &&
                          (z = '\0\0'),
                        (b = z.charCodeAt(0)),
                        (u = z.charCodeAt(1)),
                        b)
                      ) {
                        case 0:
                          break
                        case 64:
                          if (105 === u || 99 === u) {
                            G += z + d.charAt(H)
                            break
                          }
                        default:
                          58 !== z.charCodeAt($ - 1) && (W += n(z, b, u, z.charCodeAt(2)))
                      }
                    ;(L = D = M = b = 0), (z = ''), (u = d.charCodeAt(++H))
                }
              }
              switch (u) {
                case 13:
                case 10:
                  47 === k
                    ? (k = 0)
                    : 0 === 1 + b && 107 !== f && 0 < z.length && ((D = 1), (z += '\0')),
                    0 < _ * R && c(0, z, a, e, A, C, W.length, f, g, f),
                    (C = 1),
                    A++
                  break
                case 59:
                case 125:
                  if (0 === k + T + S + w) {
                    C++
                    break
                  }
                default:
                  switch ((C++, (p = d.charAt(H)), u)) {
                    case 9:
                    case 32:
                      if (0 === T + w + k)
                        switch (I) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            p = ''
                            break
                          default:
                            32 !== u && (p = ' ')
                        }
                      break
                    case 0:
                      p = '\\0'
                      break
                    case 12:
                      p = '\\f'
                      break
                    case 11:
                      p = '\\v'
                      break
                    case 38:
                      0 === T + k + w && ((D = L = 1), (p = '\f' + p))
                      break
                    case 108:
                      if (0 === T + k + w + O && 0 < M)
                        switch (H - M) {
                          case 2:
                            112 === I && 58 === d.charCodeAt(H - 3) && (O = I)
                          case 8:
                            111 === j && (O = j)
                        }
                      break
                    case 58:
                      0 === T + k + w && (M = H)
                      break
                    case 44:
                      0 === k + S + T + w && ((D = 1), (p += '\r'))
                      break
                    case 34:
                    case 39:
                      0 === k && (T = T === u ? 0 : 0 === T ? u : T)
                      break
                    case 91:
                      0 === T + k + S && w++
                      break
                    case 93:
                      0 === T + k + S && w--
                      break
                    case 41:
                      0 === T + k + w && S--
                      break
                    case 40:
                      if (0 === T + k + w) {
                        if (0 === b)
                          switch (2 * I + 3 * j) {
                            case 533:
                              break
                            default:
                              b = 1
                          }
                        S++
                      }
                      break
                    case 64:
                      0 === k + S + T + w + M + h && (h = 1)
                      break
                    case 42:
                    case 47:
                      if (!(0 < T + w + S))
                        switch (k) {
                          case 0:
                            switch (2 * u + 3 * d.charCodeAt(H + 1)) {
                              case 235:
                                k = 47
                                break
                              case 220:
                                ;($ = H), (k = 42)
                            }
                            break
                          case 42:
                            47 === u &&
                              42 === I &&
                              $ + 2 !== H &&
                              (33 === d.charCodeAt($ + 2) && (W += d.substring($, H + 1)),
                              (p = ''),
                              (k = 0))
                        }
                  }
                  0 === k && (z += p)
              }
              ;(j = I), (I = u), H++
            }
            if (0 < ($ = W.length)) {
              if (
                ((D = a),
                0 < _ && void 0 !== (x = c(2, W, D, e, A, C, $, f, g, f)) && 0 === (W = x).length)
              )
                return G + W + U
              if (((W = D.join(',') + '{' + W + '}'), 0 !== P * O)) {
                switch ((2 !== P || o(W, 2) || (O = 0), O)) {
                  case 111:
                    W = W.replace(y, ':-moz-$1') + W
                    break
                  case 112:
                    W =
                      W.replace(v, '::-webkit-input-$1') +
                      W.replace(v, '::-moz-$1') +
                      W.replace(v, ':-ms-input-$1') +
                      W
                }
                O = 0
              }
            }
            return G + W + U
          }
          function t(e, r, t) {
            var n = r.trim().split(h)
            r = n
            var o = n.length,
              i = e.length
            switch (i) {
              case 0:
              case 1:
                var c = 0
                for (e = 0 === i ? '' : e[0] + ' '; c < o; ++c) r[c] = a(e, r[c], t).trim()
                break
              default:
                var d = (c = 0)
                for (r = []; c < o; ++c)
                  for (var f = 0; f < i; ++f) r[d++] = a(e[f] + ' ', n[c], t).trim()
            }
            return r
          }
          function a(e, r, t) {
            var a = r.charCodeAt(0)
            switch ((33 > a && (a = (r = r.trim()).charCodeAt(0)), a)) {
              case 38:
                return r.replace(p, '$1' + e.trim())
              case 58:
                return e.trim() + r.replace(p, '$1' + e.trim())
              default:
                if (0 < 1 * t && 0 < r.indexOf('\f'))
                  return r.replace(p, (58 === e.charCodeAt(0) ? '' : '$1') + e.trim())
            }
            return e + r
          }
          function n(e, r, t, a) {
            var i = e + ';',
              c = 2 * r + 3 * t + 4 * a
            if (944 === c) {
              e = i.indexOf(':', 9) + 1
              var d = i.substring(e, i.length - 1).trim()
              return (
                (d = i.substring(0, e).trim() + d + ';'),
                1 === P || (2 === P && o(d, 1)) ? '-webkit-' + d + d : d
              )
            }
            if (0 === P || (2 === P && !o(i, 1))) return i
            switch (c) {
              case 1015:
                return 97 === i.charCodeAt(10) ? '-webkit-' + i + i : i
              case 951:
                return 116 === i.charCodeAt(3) ? '-webkit-' + i + i : i
              case 963:
                return 110 === i.charCodeAt(5) ? '-webkit-' + i + i : i
              case 1009:
                if (100 !== i.charCodeAt(4)) break
              case 969:
              case 942:
                return '-webkit-' + i + i
              case 978:
                return '-webkit-' + i + '-moz-' + i + i
              case 1019:
              case 983:
                return '-webkit-' + i + '-moz-' + i + '-ms-' + i + i
              case 883:
                if (45 === i.charCodeAt(8)) return '-webkit-' + i + i
                if (0 < i.indexOf('image-set(', 11)) return i.replace(I, '$1-webkit-$2') + i
                break
              case 932:
                if (45 === i.charCodeAt(4))
                  switch (i.charCodeAt(5)) {
                    case 103:
                      return (
                        '-webkit-box-' +
                        i.replace('-grow', '') +
                        '-webkit-' +
                        i +
                        '-ms-' +
                        i.replace('grow', 'positive') +
                        i
                      )
                    case 115:
                      return '-webkit-' + i + '-ms-' + i.replace('shrink', 'negative') + i
                    case 98:
                      return '-webkit-' + i + '-ms-' + i.replace('basis', 'preferred-size') + i
                  }
                return '-webkit-' + i + '-ms-' + i + i
              case 964:
                return '-webkit-' + i + '-ms-flex-' + i + i
              case 1023:
                if (99 !== i.charCodeAt(8)) break
                return (
                  '-webkit-box-pack' +
                  (d = i
                    .substring(i.indexOf(':', 15))
                    .replace('flex-', '')
                    .replace('space-between', 'justify')) +
                  '-webkit-' +
                  i +
                  '-ms-flex-pack' +
                  d +
                  i
                )
              case 1005:
                return b.test(i) ? i.replace(g, ':-webkit-') + i.replace(g, ':-moz-') + i : i
              case 1e3:
                switch (
                  ((r = (d = i.substring(13).trim()).indexOf('-') + 1),
                  d.charCodeAt(0) + d.charCodeAt(r))
                ) {
                  case 226:
                    d = i.replace(x, 'tb')
                    break
                  case 232:
                    d = i.replace(x, 'tb-rl')
                    break
                  case 220:
                    d = i.replace(x, 'lr')
                    break
                  default:
                    return i
                }
                return '-webkit-' + i + '-ms-' + d + i
              case 1017:
                if (-1 === i.indexOf('sticky', 9)) break
              case 975:
                switch (
                  ((r = (i = e).length - 10),
                  (c =
                    (d = (33 === i.charCodeAt(r) ? i.substring(0, r) : i)
                      .substring(e.indexOf(':', 7) + 1)
                      .trim()).charCodeAt(0) +
                    (0 | d.charCodeAt(7))))
                ) {
                  case 203:
                    if (111 > d.charCodeAt(8)) break
                  case 115:
                    i = i.replace(d, '-webkit-' + d) + ';' + i
                    break
                  case 207:
                  case 102:
                    i =
                      i.replace(d, '-webkit-' + (102 < c ? 'inline-' : '') + 'box') +
                      ';' +
                      i.replace(d, '-webkit-' + d) +
                      ';' +
                      i.replace(d, '-ms-' + d + 'box') +
                      ';' +
                      i
                }
                return i + ';'
              case 938:
                if (45 === i.charCodeAt(5))
                  switch (i.charCodeAt(6)) {
                    case 105:
                      return (
                        (d = i.replace('-items', '')),
                        '-webkit-' + i + '-webkit-box-' + d + '-ms-flex-' + d + i
                      )
                    case 115:
                      return '-webkit-' + i + '-ms-flex-item-' + i.replace(k, '') + i
                    default:
                      return (
                        '-webkit-' +
                        i +
                        '-ms-flex-line-pack' +
                        i.replace('align-content', '').replace(k, '') +
                        i
                      )
                  }
                break
              case 973:
              case 989:
                if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4)) break
              case 931:
              case 953:
                if (!0 === T.test(e))
                  return 115 === (d = e.substring(e.indexOf(':') + 1)).charCodeAt(0)
                    ? n(e.replace('stretch', 'fill-available'), r, t, a).replace(
                        ':fill-available',
                        ':stretch'
                      )
                    : i.replace(d, '-webkit-' + d) +
                        i.replace(d, '-moz-' + d.replace('fill-', '')) +
                        i
                break
              case 962:
                if (
                  ((i = '-webkit-' + i + (102 === i.charCodeAt(5) ? '-ms-' + i : '') + i),
                  211 === t + a && 105 === i.charCodeAt(13) && 0 < i.indexOf('transform', 10))
                )
                  return i.substring(0, i.indexOf(';', 27) + 1).replace(u, '$1-webkit-$2') + i
            }
            return i
          }
          function o(e, r) {
            var t = e.indexOf(1 === r ? ':' : '{'),
              a = e.substring(0, 3 !== r ? t : 10)
            return (t = e.substring(t + 1, e.length - 1)), M(2 !== r ? a : a.replace(S, '$1'), t, r)
          }
          function i(e, r) {
            var t = n(r, r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2))
            return t !== r + ';' ? t.replace(w, ' or ($1)').substring(4) : '(' + r + ')'
          }
          function c(e, r, t, a, n, o, i, c, d, s) {
            for (var l, g = 0, b = r; g < _; ++g)
              switch ((l = j[g].call(f, e, b, t, a, n, o, i, c, d, s))) {
                case void 0:
                case !1:
                case !0:
                case null:
                  break
                default:
                  b = l
              }
            if (b !== r) return b
          }
          function d(e) {
            return (
              void 0 !== (e = e.prefix) &&
                ((M = null),
                e ? ('function' !== typeof e ? (P = 1) : ((P = 2), (M = e))) : (P = 0)),
              d
            )
          }
          function f(e, t) {
            var a = e
            if ((33 > a.charCodeAt(0) && (a = a.trim()), (a = [a]), 0 < _)) {
              var n = c(-1, t, a, a, A, C, 0, 0, 0, 0)
              void 0 !== n && 'string' === typeof n && (t = n)
            }
            var o = r(E, a, t, 0, 0)
            return (
              0 < _ && void 0 !== (n = c(-2, o, a, a, A, C, o.length, 0, 0, 0)) && (o = n),
              '',
              (O = 0),
              (C = A = 1),
              o
            )
          }
          var s = /^\0+/g,
            l = /[\0\r\f]/g,
            g = /: */g,
            b = /zoo|gra/,
            u = /([,: ])(transform)/g,
            h = /,\r+?/g,
            p = /([\t\r\n ])*\f?&/g,
            m = /@(k\w+)\s*(\S*)\s*/,
            v = /::(place)/g,
            y = /:(read-only)/g,
            x = /[svh]\w+-[tblr]{2}/,
            B = /\(\s*(.*)\s*\)/g,
            w = /([\s\S]*?);/g,
            k = /-self|flex-/g,
            S = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            T = /stretch|:\s*\w+\-(?:conte|avail)/,
            I = /([^-])(image-set\()/,
            C = 1,
            A = 1,
            O = 0,
            P = 1,
            E = [],
            j = [],
            _ = 0,
            M = null,
            R = 0
          return (
            (f.use = function e(r) {
              switch (r) {
                case void 0:
                case null:
                  _ = j.length = 0
                  break
                default:
                  if ('function' === typeof r) j[_++] = r
                  else if ('object' === typeof r) for (var t = 0, a = r.length; t < a; ++t) e(r[t])
                  else R = 0 | !!r
              }
              return e
            }),
            (f.set = d),
            void 0 !== e && d(e),
            f
          )
        },
        d = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        }
      var f =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        s = (function (e) {
          var r = {}
          return function (t) {
            return void 0 === r[t] && (r[t] = e(t)), r[t]
          }
        })(function (e) {
          return (
            f.test(e) ||
            (111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91)
          )
        }),
        l = t(8679),
        g = t.n(l),
        b = t(4155)
      function u() {
        return (u =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r]
              for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
            }
            return e
          }).apply(this, arguments)
      }
      var h = function (e, r) {
          for (var t = [e[0]], a = 0, n = r.length; a < n; a += 1) t.push(r[a], e[a + 1])
          return t
        },
        p = function (e) {
          return (
            null !== e &&
            'object' == typeof e &&
            '[object Object]' === (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
            !(0, a.typeOf)(e)
          )
        },
        m = Object.freeze([]),
        v = Object.freeze({})
      function y(e) {
        return 'function' == typeof e
      }
      function x(e) {
        return e.displayName || e.name || 'Component'
      }
      function B(e) {
        return e && 'string' == typeof e.styledComponentId
      }
      var w =
          ('undefined' != typeof b && (b.env.REACT_APP_SC_ATTR || b.env.SC_ATTR)) || 'data-styled',
        k = 'undefined' != typeof window && 'HTMLElement' in window,
        S = Boolean(
          'boolean' == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : 'undefined' != typeof b &&
              void 0 !== b.env.REACT_APP_SC_DISABLE_SPEEDY &&
              '' !== b.env.REACT_APP_SC_DISABLE_SPEEDY
            ? 'false' !== b.env.REACT_APP_SC_DISABLE_SPEEDY && b.env.REACT_APP_SC_DISABLE_SPEEDY
            : 'undefined' != typeof b &&
              void 0 !== b.env.SC_DISABLE_SPEEDY &&
              '' !== b.env.SC_DISABLE_SPEEDY &&
              'false' !== b.env.SC_DISABLE_SPEEDY &&
              b.env.SC_DISABLE_SPEEDY
        )
      function T(e) {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a]
        throw new Error(
          'An error occurred. See https://git.io/JUIaE#' +
            e +
            ' for more information.' +
            (t.length > 0 ? ' Args: ' + t.join(', ') : '')
        )
      }
      var I = (function () {
          function e(e) {
            ;(this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = e)
          }
          var r = e.prototype
          return (
            (r.indexOfGroup = function (e) {
              for (var r = 0, t = 0; t < e; t++) r += this.groupSizes[t]
              return r
            }),
            (r.insertRules = function (e, r) {
              if (e >= this.groupSizes.length) {
                for (var t = this.groupSizes, a = t.length, n = a; e >= n; )
                  (n <<= 1) < 0 && T(16, '' + e)
                ;(this.groupSizes = new Uint32Array(n)), this.groupSizes.set(t), (this.length = n)
                for (var o = a; o < n; o++) this.groupSizes[o] = 0
              }
              for (var i = this.indexOfGroup(e + 1), c = 0, d = r.length; c < d; c++)
                this.tag.insertRule(i, r[c]) && (this.groupSizes[e]++, i++)
            }),
            (r.clearGroup = function (e) {
              if (e < this.length) {
                var r = this.groupSizes[e],
                  t = this.indexOfGroup(e),
                  a = t + r
                this.groupSizes[e] = 0
                for (var n = t; n < a; n++) this.tag.deleteRule(t)
              }
            }),
            (r.getGroup = function (e) {
              var r = ''
              if (e >= this.length || 0 === this.groupSizes[e]) return r
              for (
                var t = this.groupSizes[e], a = this.indexOfGroup(e), n = a + t, o = a;
                o < n;
                o++
              )
                r += this.tag.getRule(o) + '/*!sc*/\n'
              return r
            }),
            e
          )
        })(),
        C = new Map(),
        A = new Map(),
        O = 1,
        P = function (e) {
          if (C.has(e)) return C.get(e)
          for (; A.has(O); ) O++
          var r = O++
          return C.set(e, r), A.set(r, e), r
        },
        E = function (e) {
          return A.get(e)
        },
        j = function (e, r) {
          C.set(e, r), A.set(r, e)
        },
        _ = 'style[' + w + '][data-styled-version="5.3.0"]',
        M = new RegExp('^' + w + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
        R = function (e, r, t) {
          for (var a, n = t.split(','), o = 0, i = n.length; o < i; o++)
            (a = n[o]) && e.registerName(r, a)
        },
        H = function (e, r) {
          for (var t = r.innerHTML.split('/*!sc*/\n'), a = [], n = 0, o = t.length; n < o; n++) {
            var i = t[n].trim()
            if (i) {
              var c = i.match(M)
              if (c) {
                var d = 0 | parseInt(c[1], 10),
                  f = c[2]
                0 !== d && (j(f, d), R(e, f, c[3]), e.getTag().insertRules(d, a)), (a.length = 0)
              } else a.push(i)
            }
          }
        },
        D = function () {
          return 'undefined' != typeof window && void 0 !== window.__webpack_nonce__
            ? window.__webpack_nonce__
            : null
        },
        L = function (e) {
          var r = document.head,
            t = e || r,
            a = document.createElement('style'),
            n = (function (e) {
              for (var r = e.childNodes, t = r.length; t >= 0; t--) {
                var a = r[t]
                if (a && 1 === a.nodeType && a.hasAttribute(w)) return a
              }
            })(t),
            o = void 0 !== n ? n.nextSibling : null
          a.setAttribute(w, 'active'), a.setAttribute('data-styled-version', '5.3.0')
          var i = D()
          return i && a.setAttribute('nonce', i), t.insertBefore(a, o), a
        },
        $ = (function () {
          function e(e) {
            var r = (this.element = L(e))
            r.appendChild(document.createTextNode('')),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet
                for (var r = document.styleSheets, t = 0, a = r.length; t < a; t++) {
                  var n = r[t]
                  if (n.ownerNode === e) return n
                }
                T(17)
              })(r)),
              (this.length = 0)
          }
          var r = e.prototype
          return (
            (r.insertRule = function (e, r) {
              try {
                return this.sheet.insertRule(r, e), this.length++, !0
              } catch (e) {
                return !1
              }
            }),
            (r.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--
            }),
            (r.getRule = function (e) {
              var r = this.sheet.cssRules[e]
              return void 0 !== r && 'string' == typeof r.cssText ? r.cssText : ''
            }),
            e
          )
        })(),
        N = (function () {
          function e(e) {
            var r = (this.element = L(e))
            ;(this.nodes = r.childNodes), (this.length = 0)
          }
          var r = e.prototype
          return (
            (r.insertRule = function (e, r) {
              if (e <= this.length && e >= 0) {
                var t = document.createTextNode(r),
                  a = this.nodes[e]
                return this.element.insertBefore(t, a || null), this.length++, !0
              }
              return !1
            }),
            (r.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--
            }),
            (r.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : ''
            }),
            e
          )
        })(),
        F = (function () {
          function e(e) {
            ;(this.rules = []), (this.length = 0)
          }
          var r = e.prototype
          return (
            (r.insertRule = function (e, r) {
              return e <= this.length && (this.rules.splice(e, 0, r), this.length++, !0)
            }),
            (r.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--
            }),
            (r.getRule = function (e) {
              return e < this.length ? this.rules[e] : ''
            }),
            e
          )
        })(),
        z = k,
        W = { isServer: !k, useCSSOMInjection: !S },
        U = (function () {
          function e(e, r, t) {
            void 0 === e && (e = v),
              void 0 === r && (r = {}),
              (this.options = u({}, W, {}, e)),
              (this.gs = r),
              (this.names = new Map(t)),
              !this.options.isServer &&
                k &&
                z &&
                ((z = !1),
                (function (e) {
                  for (var r = document.querySelectorAll(_), t = 0, a = r.length; t < a; t++) {
                    var n = r[t]
                    n &&
                      'active' !== n.getAttribute(w) &&
                      (H(e, n), n.parentNode && n.parentNode.removeChild(n))
                  }
                })(this))
          }
          e.registerId = function (e) {
            return P(e)
          }
          var r = e.prototype
          return (
            (r.reconstructWithOptions = function (r, t) {
              return (
                void 0 === t && (t = !0),
                new e(u({}, this.options, {}, r), this.gs, (t && this.names) || void 0)
              )
            }),
            (r.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1)
            }),
            (r.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((t = (r = this.options).isServer),
                  (a = r.useCSSOMInjection),
                  (n = r.target),
                  (e = t ? new F(n) : a ? new $(n) : new N(n)),
                  new I(e)))
              )
              var e, r, t, a, n
            }),
            (r.hasNameForId = function (e, r) {
              return this.names.has(e) && this.names.get(e).has(r)
            }),
            (r.registerName = function (e, r) {
              if ((P(e), this.names.has(e))) this.names.get(e).add(r)
              else {
                var t = new Set()
                t.add(r), this.names.set(e, t)
              }
            }),
            (r.insertRules = function (e, r, t) {
              this.registerName(e, r), this.getTag().insertRules(P(e), t)
            }),
            (r.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear()
            }),
            (r.clearRules = function (e) {
              this.getTag().clearGroup(P(e)), this.clearNames(e)
            }),
            (r.clearTag = function () {
              this.tag = void 0
            }),
            (r.toString = function () {
              return (function (e) {
                for (var r = e.getTag(), t = r.length, a = '', n = 0; n < t; n++) {
                  var o = E(n)
                  if (void 0 !== o) {
                    var i = e.names.get(o),
                      c = r.getGroup(n)
                    if (void 0 !== i && 0 !== c.length) {
                      var d = w + '.g' + n + '[id="' + o + '"]',
                        f = ''
                      void 0 !== i &&
                        i.forEach(function (e) {
                          e.length > 0 && (f += e + ',')
                        }),
                        (a += '' + c + d + '{content:"' + f + '"}/*!sc*/\n')
                    }
                  }
                }
                return a
              })(this)
            }),
            e
          )
        })(),
        G = /(a)(d)/gi,
        Z = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97))
        }
      function q(e) {
        var r,
          t = ''
        for (r = Math.abs(e); r > 52; r = (r / 52) | 0) t = Z(r % 52) + t
        return (Z(r % 52) + t).replace(G, '$1-$2')
      }
      var Y = function (e, r) {
          for (var t = r.length; t; ) e = (33 * e) ^ r.charCodeAt(--t)
          return e
        },
        V = function (e) {
          return Y(5381, e)
        }
      function X(e) {
        for (var r = 0; r < e.length; r += 1) {
          var t = e[r]
          if (y(t) && !B(t)) return !1
        }
        return !0
      }
      var K = V('5.3.0'),
        J = (function () {
          function e(e, r, t) {
            ;(this.rules = e),
              (this.staticRulesId = ''),
              (this.isStatic = (void 0 === t || t.isStatic) && X(e)),
              (this.componentId = r),
              (this.baseHash = Y(K, r)),
              (this.baseStyle = t),
              U.registerId(r)
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, r, t) {
              var a = this.componentId,
                n = []
              if (
                (this.baseStyle && n.push(this.baseStyle.generateAndInjectStyles(e, r, t)),
                this.isStatic && !t.hash)
              )
                if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId))
                  n.push(this.staticRulesId)
                else {
                  var o = pe(this.rules, e, r, t).join(''),
                    i = q(Y(this.baseHash, o.length) >>> 0)
                  if (!r.hasNameForId(a, i)) {
                    var c = t(o, '.' + i, void 0, a)
                    r.insertRules(a, i, c)
                  }
                  n.push(i), (this.staticRulesId = i)
                }
              else {
                for (
                  var d = this.rules.length, f = Y(this.baseHash, t.hash), s = '', l = 0;
                  l < d;
                  l++
                ) {
                  var g = this.rules[l]
                  if ('string' == typeof g) s += g
                  else if (g) {
                    var b = pe(g, e, r, t),
                      u = Array.isArray(b) ? b.join('') : b
                    ;(f = Y(f, u + l)), (s += u)
                  }
                }
                if (s) {
                  var h = q(f >>> 0)
                  if (!r.hasNameForId(a, h)) {
                    var p = t(s, '.' + h, void 0, a)
                    r.insertRules(a, h, p)
                  }
                  n.push(h)
                }
              }
              return n.join(' ')
            }),
            e
          )
        })(),
        Q = /^\s*\/\/.*$/gm,
        ee = [':', '[', '.', '#']
      function re(e) {
        var r,
          t,
          a,
          n,
          o = void 0 === e ? v : e,
          i = o.options,
          d = void 0 === i ? v : i,
          f = o.plugins,
          s = void 0 === f ? m : f,
          l = new c(d),
          g = [],
          b = (function (e) {
            function r(r) {
              if (r)
                try {
                  e(r + '}')
                } catch (e) {}
            }
            return function (t, a, n, o, i, c, d, f, s, l) {
              switch (t) {
                case 1:
                  if (0 === s && 64 === a.charCodeAt(0)) return e(a + ';'), ''
                  break
                case 2:
                  if (0 === f) return a + '/*|*/'
                  break
                case 3:
                  switch (f) {
                    case 102:
                    case 112:
                      return e(n[0] + a), ''
                    default:
                      return a + (0 === l ? '/*|*/' : '')
                  }
                case -2:
                  a.split('/*|*/}').forEach(r)
              }
            }
          })(function (e) {
            g.push(e)
          }),
          u = function (e, a, o) {
            return (0 === a && -1 !== ee.indexOf(o[t.length])) || o.match(n) ? e : '.' + r
          }
        function h(e, o, i, c) {
          void 0 === c && (c = '&')
          var d = e.replace(Q, ''),
            f = o && i ? i + ' ' + o + ' { ' + d + ' }' : d
          return (
            (r = c),
            (t = o),
            (a = new RegExp('\\' + t + '\\b', 'g')),
            (n = new RegExp('(\\' + t + '\\b){2,}')),
            l(i || !o ? '' : o, f)
          )
        }
        return (
          l.use(
            [].concat(s, [
              function (e, r, n) {
                2 === e && n.length && n[0].lastIndexOf(t) > 0 && (n[0] = n[0].replace(a, u))
              },
              b,
              function (e) {
                if (-2 === e) {
                  var r = g
                  return (g = []), r
                }
              },
            ])
          ),
          (h.hash = s.length
            ? s
                .reduce(function (e, r) {
                  return r.name || T(15), Y(e, r.name)
                }, 5381)
                .toString()
            : ''),
          h
        )
      }
      var te = n.createContext(),
        ae = (te.Consumer, n.createContext()),
        ne = (ae.Consumer, new U()),
        oe = re()
      function ie() {
        return (0, n.useContext)(te) || ne
      }
      function ce() {
        return (0, n.useContext)(ae) || oe
      }
      function de(e) {
        var r = (0, n.useState)(e.stylisPlugins),
          t = r[0],
          a = r[1],
          o = ie(),
          c = (0, n.useMemo)(
            function () {
              var r = o
              return (
                e.sheet
                  ? (r = e.sheet)
                  : e.target && (r = r.reconstructWithOptions({ target: e.target }, !1)),
                e.disableCSSOMInjection &&
                  (r = r.reconstructWithOptions({ useCSSOMInjection: !1 })),
                r
              )
            },
            [e.disableCSSOMInjection, e.sheet, e.target]
          ),
          d = (0, n.useMemo)(
            function () {
              return re({ options: { prefix: !e.disableVendorPrefixes }, plugins: t })
            },
            [e.disableVendorPrefixes, t]
          )
        return (
          (0, n.useEffect)(
            function () {
              i()(t, e.stylisPlugins) || a(e.stylisPlugins)
            },
            [e.stylisPlugins]
          ),
          n.createElement(
            te.Provider,
            { value: c },
            n.createElement(ae.Provider, { value: d }, e.children)
          )
        )
      }
      var fe = (function () {
          function e(e, r) {
            var t = this
            ;(this.inject = function (e, r) {
              void 0 === r && (r = oe)
              var a = t.name + r.hash
              e.hasNameForId(t.id, a) || e.insertRules(t.id, a, r(t.rules, a, '@keyframes'))
            }),
              (this.toString = function () {
                return T(12, String(t.name))
              }),
              (this.name = e),
              (this.id = 'sc-keyframes-' + e),
              (this.rules = r)
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = oe), this.name + e.hash
            }),
            e
          )
        })(),
        se = /([A-Z])/,
        le = /([A-Z])/g,
        ge = /^ms-/,
        be = function (e) {
          return '-' + e.toLowerCase()
        }
      function ue(e) {
        return se.test(e) ? e.replace(le, be).replace(ge, '-ms-') : e
      }
      var he = function (e) {
        return null == e || !1 === e || '' === e
      }
      function pe(e, r, t, a) {
        if (Array.isArray(e)) {
          for (var n, o = [], i = 0, c = e.length; i < c; i += 1)
            '' !== (n = pe(e[i], r, t, a)) && (Array.isArray(n) ? o.push.apply(o, n) : o.push(n))
          return o
        }
        return he(e)
          ? ''
          : B(e)
          ? '.' + e.styledComponentId
          : y(e)
          ? 'function' != typeof (f = e) || (f.prototype && f.prototype.isReactComponent) || !r
            ? e
            : pe(e(r), r, t, a)
          : e instanceof fe
          ? t
            ? (e.inject(t, a), e.getName(a))
            : e
          : p(e)
          ? (function e(r, t) {
              var a,
                n,
                o = []
              for (var i in r)
                r.hasOwnProperty(i) &&
                  !he(r[i]) &&
                  (p(r[i])
                    ? o.push.apply(o, e(r[i], i))
                    : y(r[i])
                    ? o.push(ue(i) + ':', r[i], ';')
                    : o.push(
                        ue(i) +
                          ': ' +
                          ((a = i),
                          (null == (n = r[i]) || 'boolean' == typeof n || '' === n
                            ? ''
                            : 'number' != typeof n || 0 === n || a in d
                            ? String(n).trim()
                            : n + 'px') + ';')
                      ))
              return t ? [t + ' {'].concat(o, ['}']) : o
            })(e)
          : e.toString()
        var f
      }
      function me(e) {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a]
        return y(e) || p(e)
          ? pe(h(m, [e].concat(t)))
          : 0 === t.length && 1 === e.length && 'string' == typeof e[0]
          ? e
          : pe(h(e, t))
      }
      new Set()
      var ve = function (e, r, t) {
          return void 0 === t && (t = v), (e.theme !== t.theme && e.theme) || r || t.theme
        },
        ye = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        xe = /(^-|-$)/g
      function Be(e) {
        return e.replace(ye, '-').replace(xe, '')
      }
      var we = function (e) {
        return q(V(e) >>> 0)
      }
      function ke(e) {
        return 'string' == typeof e && !0
      }
      var Se = function (e) {
          return 'function' == typeof e || ('object' == typeof e && null !== e && !Array.isArray(e))
        },
        Te = function (e) {
          return '__proto__' !== e && 'constructor' !== e && 'prototype' !== e
        }
      function Ie(e, r, t) {
        var a = e[t]
        Se(r) && Se(a) ? Ce(a, r) : (e[t] = r)
      }
      function Ce(e) {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a]
        for (var n = 0, o = t; n < o.length; n++) {
          var i = o[n]
          if (Se(i)) for (var c in i) Te(c) && Ie(e, i[c], c)
        }
        return e
      }
      var Ae = n.createContext()
      Ae.Consumer
      function Oe(e) {
        var r = (0, n.useContext)(Ae),
          t = (0, n.useMemo)(
            function () {
              return (function (e, r) {
                return e
                  ? y(e)
                    ? e(r)
                    : Array.isArray(e) || 'object' != typeof e
                    ? T(8)
                    : r
                    ? u({}, r, {}, e)
                    : e
                  : T(14)
              })(e.theme, r)
            },
            [e.theme, r]
          )
        return e.children ? n.createElement(Ae.Provider, { value: t }, e.children) : null
      }
      var Pe = {}
      function Ee(e, r, t) {
        var a = B(e),
          o = !ke(e),
          i = r.attrs,
          c = void 0 === i ? m : i,
          d = r.componentId,
          f =
            void 0 === d
              ? (function (e, r) {
                  var t = 'string' != typeof e ? 'sc' : Be(e)
                  Pe[t] = (Pe[t] || 0) + 1
                  var a = t + '-' + we('5.3.0' + t + Pe[t])
                  return r ? r + '-' + a : a
                })(r.displayName, r.parentComponentId)
              : d,
          l = r.displayName,
          b =
            void 0 === l
              ? (function (e) {
                  return ke(e) ? 'styled.' + e : 'Styled(' + x(e) + ')'
                })(e)
              : l,
          h =
            r.displayName && r.componentId
              ? Be(r.displayName) + '-' + r.componentId
              : r.componentId || f,
          p = a && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
          w = r.shouldForwardProp
        a &&
          e.shouldForwardProp &&
          (w = r.shouldForwardProp
            ? function (t, a, n) {
                return e.shouldForwardProp(t, a, n) && r.shouldForwardProp(t, a, n)
              }
            : e.shouldForwardProp)
        var k,
          S = new J(t, h, a ? e.componentStyle : void 0),
          T = S.isStatic && 0 === c.length,
          I = function (e, r) {
            return (function (e, r, t, a) {
              var o = e.attrs,
                i = e.componentStyle,
                c = e.defaultProps,
                d = e.foldedComponentIds,
                f = e.shouldForwardProp,
                l = e.styledComponentId,
                g = e.target,
                b = (function (e, r, t) {
                  void 0 === e && (e = v)
                  var a = u({}, r, { theme: e }),
                    n = {}
                  return (
                    t.forEach(function (e) {
                      var r,
                        t,
                        o,
                        i = e
                      for (r in (y(i) && (i = i(a)), i))
                        a[r] = n[r] =
                          'className' === r
                            ? ((t = n[r]), (o = i[r]), t && o ? t + ' ' + o : t || o)
                            : i[r]
                    }),
                    [a, n]
                  )
                })(ve(r, (0, n.useContext)(Ae), c) || v, r, o),
                h = b[0],
                p = b[1],
                m = (function (e, r, t, a) {
                  var n = ie(),
                    o = ce()
                  return r ? e.generateAndInjectStyles(v, n, o) : e.generateAndInjectStyles(t, n, o)
                })(i, a, h),
                x = t,
                B = p.$as || r.$as || p.as || r.as || g,
                w = ke(B),
                k = p !== r ? u({}, r, {}, p) : r,
                S = {}
              for (var T in k)
                '$' !== T[0] &&
                  'as' !== T &&
                  ('forwardedAs' === T
                    ? (S.as = k[T])
                    : (f ? f(T, s, B) : !w || s(T)) && (S[T] = k[T]))
              return (
                r.style && p.style !== r.style && (S.style = u({}, r.style, {}, p.style)),
                (S.className = Array.prototype
                  .concat(d, l, m !== l ? m : null, r.className, p.className)
                  .filter(Boolean)
                  .join(' ')),
                (S.ref = x),
                (0, n.createElement)(B, S)
              )
            })(k, e, r, T)
          }
        return (
          (I.displayName = b),
          ((k = n.forwardRef(I)).attrs = p),
          (k.componentStyle = S),
          (k.displayName = b),
          (k.shouldForwardProp = w),
          (k.foldedComponentIds = a
            ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
            : m),
          (k.styledComponentId = h),
          (k.target = a ? e.target : e),
          (k.withComponent = function (e) {
            var a = r.componentId,
              n = (function (e, r) {
                if (null == e) return {}
                var t,
                  a,
                  n = {},
                  o = Object.keys(e)
                for (a = 0; a < o.length; a++) (t = o[a]), r.indexOf(t) >= 0 || (n[t] = e[t])
                return n
              })(r, ['componentId']),
              o = a && a + '-' + (ke(e) ? e : Be(x(e)))
            return Ee(e, u({}, n, { attrs: p, componentId: o }), t)
          }),
          Object.defineProperty(k, 'defaultProps', {
            get: function () {
              return this._foldedDefaultProps
            },
            set: function (r) {
              this._foldedDefaultProps = a ? Ce({}, e.defaultProps, r) : r
            },
          }),
          (k.toString = function () {
            return '.' + k.styledComponentId
          }),
          o &&
            g()(k, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
              withComponent: !0,
            }),
          k
        )
      }
      var je = function (e) {
        return (function e(r, t, n) {
          if ((void 0 === n && (n = v), !(0, a.isValidElementType)(t))) return T(1, String(t))
          var o = function () {
            return r(t, n, me.apply(void 0, arguments))
          }
          return (
            (o.withConfig = function (a) {
              return e(r, t, u({}, n, {}, a))
            }),
            (o.attrs = function (a) {
              return e(
                r,
                t,
                u({}, n, { attrs: Array.prototype.concat(n.attrs, a).filter(Boolean) })
              )
            }),
            o
          )
        })(Ee, e)
      }
      ;[
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'marker',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'textPath',
        'tspan',
      ].forEach(function (e) {
        je[e] = je(e)
      })
      !(function () {
        function e(e, r) {
          ;(this.rules = e),
            (this.componentId = r),
            (this.isStatic = X(e)),
            U.registerId(this.componentId + 1)
        }
        var r = e.prototype
        ;(r.createStyles = function (e, r, t, a) {
          var n = a(pe(this.rules, r, t, a).join(''), ''),
            o = this.componentId + e
          t.insertRules(o, o, n)
        }),
          (r.removeStyles = function (e, r) {
            r.clearRules(this.componentId + e)
          }),
          (r.renderStyles = function (e, r, t, a) {
            e > 2 && U.registerId(this.componentId + e),
              this.removeStyles(e, t),
              this.createStyles(e, r, t, a)
          })
      })()
      !(function () {
        function e() {
          var e = this
          ;(this._emitSheetCSS = function () {
            var r = e.instance.toString(),
              t = D()
            return (
              '<style ' +
              [t && 'nonce="' + t + '"', w + '="true"', 'data-styled-version="5.3.0"']
                .filter(Boolean)
                .join(' ') +
              '>' +
              r +
              '</style>'
            )
          }),
            (this.getStyleTags = function () {
              return e.sealed ? T(2) : e._emitSheetCSS()
            }),
            (this.getStyleElement = function () {
              var r
              if (e.sealed) return T(2)
              var t =
                  (((r = {})[w] = ''),
                  (r['data-styled-version'] = '5.3.0'),
                  (r.dangerouslySetInnerHTML = { __html: e.instance.toString() }),
                  r),
                a = D()
              return a && (t.nonce = a), [n.createElement('style', u({}, t, { key: 'sc-0-0' }))]
            }),
            (this.seal = function () {
              e.sealed = !0
            }),
            (this.instance = new U({ isServer: !0 })),
            (this.sealed = !1)
        }
        var r = e.prototype
        ;(r.collectStyles = function (e) {
          return this.sealed ? T(2) : n.createElement(de, { sheet: this.instance }, e)
        }),
          (r.interleaveWithNodeStream = function (e) {
            return T(3)
          })
      })()
      var _e = je
    },
  },
  function (e) {
    var r = function (r) {
      return e((e.s = r))
    }
    e.O(0, [774, 179], function () {
      return r(6363), r(4651)
    })
    var t = e.O()
    _N_E = t
  },
])
