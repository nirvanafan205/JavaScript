// examples of toNumber

"" ---- 0

"0" --- 0

"-0" --- 0

" 009" --- 9

"3.14" ---- 3.14

"0." --- 0

".0" --- 0


"." --- NaN

"0xaf" --- 175


false --- 0

true ---- 1

null --- 0

undefined --- NaN


// using toNumber(object);

// aka: valueOf() / toString()


(for [] and {} by default):

valueOf() { return this;} 