// @flow

type SideEffect = {
    map: ((any) => any) => SideEffect,
    run: (any) => any,
    join: (any) => any,
    chain: ((any) => any) => SideEffect,
    ap: (SideEffect) => SideEffect
}

/**
 * James Sinclair's Effect monad.
 * 
 * Link: https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/
 * 
 * @param {Function} f 
 */
const SideEffector = (f: (any) => any): SideEffect => ({
    map: (g: (any) => any): SideEffect => SideEffector((x: any): any => g(f(x))),
    run: (x: any): any => f(x),
    join: (x: any): any => f(x),
    chain: (g: (any) => any): SideEffect => SideEffector(f).map(g).join(),
    ap: (eff: SideEffect): SideEffect => eff.map((g: (any) => any): any => g(f()))
})

export default SideEffector