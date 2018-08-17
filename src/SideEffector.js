// @flow

type SideEffect = {
    of: (any) => SideEffect,
    map: Function,
    run: Function,
    join: Function,
    chain: Function,
    ap: Function
}

/**
 * James Sinclair's Effect monad.
 * 
 * Link: https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/
 * 
 * @param {Function} f 
 */
const SideEffector = (f: (any) => any) => ({
    of: (x: any): SideEffect => SideEffector(() => x),
    map: (g: (any) => any): SideEffect => SideEffector(x => g(f(x))),
    run: (x: (any) => any) => f(x),
    join: (x: (any) => any) => f(x),
    chain: (g: (any) => any): SideEffect => SideEffector(f).map(g).join(),
    ap: (eff: SideEffect): SideEffect => eff.map(g => g(f()))
})

export default SideEffector