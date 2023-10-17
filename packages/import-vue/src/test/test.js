const sourceCode = `

    const [VueRouter, routes, App] = await Promise.all([
    _.$importVue(
      "_s/libs/VueRouter.vue"
    ),
    _.$importVue("@/router/routes.vue"),
    _.$importVue("@/layout/AppLayout.vue")
]);`;
// const importDefaultDeclarationReg = /\$importVue\("([^"]*)"|'([^']*)'|`([^`]*)`\)$/g;
const importDefaultDeclarationReg = /"([^"]*)"|'([^']*)'|`([^`]*)`/g;
let regMatch, count = 0;
while ((regMatch = importDefaultDeclarationReg.exec(sourceCode))) {
  console.log(count);
  const [, localIdentifier] = regMatch;
  console.log(localIdentifier, count,/^_s\/(.*)/.test(localIdentifier));
  console.log(localIdentifier, count++,/^@\/(.*)/.test(localIdentifier));
  
}
