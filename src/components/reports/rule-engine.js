export const runReportRule = (rule, ctx) => {
  switch (rule.kind) {
    case "rule1": return eval(rule.expr1);
    case "rule2": return eval(rule.expr2);
    case "rule3": return eval(rule.expr3);
    case "rule4": return eval(rule.expr4);
    case "rule5": return eval(rule.expr5);
    case "rule6": return eval(rule.expr6);
    case "rule7": return eval(rule.expr7);
    case "rule8": return eval(rule.expr8);
    default: return null;
  }
};
