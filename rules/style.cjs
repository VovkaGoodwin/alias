module.exports = {
  rules: {
    'react/function-component-definition': [
      2, {"namedComponents": ["arrow-function"]}
    ],
    'semi': ["error", "always"],
    'arrow-body-style': ["error", "as-needed"],
    quotes: ['error', 'single', { avoidEscape: true }],
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'object-curly-spacing': ['error', 'always'],
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false
    }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
  }
}
