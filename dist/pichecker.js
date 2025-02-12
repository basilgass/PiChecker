var Ti = Object.defineProperty;
var Xe = (a) => {
  throw TypeError(a);
};
var Oi = (a, e, t) => e in a ? Ti(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var C = (a, e, t) => Oi(a, typeof e != "symbol" ? e + "" : e, t), Ne = (a, e, t) => e.has(a) || Xe("Cannot " + t);
var Y = (a, e, t) => (Ne(a, e, "read from private field"), t ? t.call(a) : e.get(a)), vt = (a, e, t) => e.has(a) ? Xe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, t), bt = (a, e, t, i) => (Ne(a, e, "write to private field"), i ? i.call(a, t) : e.set(a, t), t), jt = (a, e, t) => (Ne(a, e, "access private method"), t);
var E = /* @__PURE__ */ ((a) => (a.CARTESIAN = "cartesian", a.COORDINATES = "coord", a.EQUATION = "equation", a.EXACT = "exact", a.EXPONENTIAL = "exp", a.FRACTION = "fraction", a.FUNCTION = "function", a.INPUT = "input", a.LOGARITHM = "log", a.NUMBER = "number", a.POLYNOMIAL = "polynom", a.PRIMITIVE = "primitive", a.RATIONAL = "rational", a.SCIENTIFIC = "scientific", a.SOLUTION = "solution", a.STRING = "string", a.VECTOR = "vector", a.ORDER = "order", a.QCM = "qcm", a.STUDY = "study", a.TABLE_OF_SIGNS = "tos", a.TYPE = "type", a))(E || {});
function qi(a) {
  switch (a) {
    case "exact":
      return "exact";
    case "polynom":
      return "polynom";
    case "rational":
      return "rational";
    case "equ":
    case "equation":
      return "equation";
    case "cart":
    case "cartesian":
      return "cartesian";
    case "fn":
    case "function":
      return "function";
    case "nb":
    case "number":
      return "number";
    case "fr":
    case "frac":
    case "fraction":
      return "fraction";
    case "scn":
      return "scientific";
    case "tos":
      return "tos";
    case "study":
      return "study";
    case "sol":
    case "solution":
      return "solution";
    case "coord":
      return "coord";
    case "vector":
      return "vector";
    case "log":
      return "log";
    case "exp":
      return "exp";
    case "primitive":
      return "primitive";
    default:
      return "string";
  }
}
var Ii = Object.defineProperty, oi = (a) => {
  throw TypeError(a);
}, Mi = (a, e, t) => e in a ? Ii(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, l = (a, e, t) => Mi(a, typeof e != "symbol" ? e + "" : e, t), Ue = (a, e, t) => e.has(a) || oi("Cannot " + t), n = (a, e, t) => (Ue(a, e, "read from private field"), t ? t.call(a) : e.get(a)), w = (a, e, t) => e.has(a) ? oi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, t), u = (a, e, t, i) => (Ue(a, e, "write to private field"), e.set(a, t), t), A = (a, e, t) => (Ue(a, e, "access private method"), t);
function Ai(a) {
  const e = hi(a), t = [];
  let i, s;
  for (; e.length > 0; )
    i = e.shift() ?? 1, s = (e.length > 0 ? e.pop() : +i) ?? 1, t.push([i, s]);
  return t;
}
function Si(...a) {
  const e = Be(...a);
  return a.map((t) => t / e);
}
function hi(a) {
  const e = Math.abs(a), t = Math.sqrt(e), i = [];
  for (let s = 1; s <= t; s++)
    a % s === 0 && (i.push(s), i.push(e / s));
  return i.sort(function(s, r) {
    return s - r;
  }), [...new Set(i)];
}
function Be(...a) {
  const e = function(s, r) {
    return r === 0 ? s : e(r, s % r);
  };
  let t = 1, i = 2;
  if (a.length === 0)
    return 1;
  if (a.length === 1)
    return a[0] === 0 ? 1 : a[0];
  if (t = e(a[0], a[1]), t === 1)
    return 1;
  for (i = 2; i < a.length && (t = e(t, a[i]), t !== 1); i++)
    ;
  return Math.abs(t);
}
function Ci(...a) {
  return a.reduce(function(e, t) {
    return Math.abs(e * t / Be(e, t));
  });
}
function Pi(a, e = 3) {
  return +a.toFixed(e);
}
function Ri(a) {
  if (Number.isSafeInteger(a) || a.toString().split(".")[0].length < 10)
    return 0;
  throw new Error("Periodic value: Not implemented yet");
}
function Li(a) {
  const e = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187, 1193, 1201, 1213, 1217, 1223, 1229, 1231, 1237, 1249, 1259, 1277, 1279, 1283, 1289, 1291, 1297, 1301, 1303, 1307, 1319, 1321, 1327, 1361, 1367, 1373, 1381, 1399, 1409, 1423, 1427, 1429, 1433, 1439, 1447, 1451, 1453, 1459, 1471, 1481, 1483, 1487, 1489, 1493, 1499, 1511, 1523, 1531, 1543, 1549, 1553, 1559, 1567, 1571, 1579, 1583, 1597, 1601, 1607, 1609, 1613, 1619, 1621, 1627, 1637, 1657, 1663, 1667, 1669, 1693, 1697, 1699, 1709, 1721, 1723, 1733, 1741, 1747, 1753, 1759, 1777, 1783, 1787, 1789, 1801, 1811, 1823, 1831, 1847, 1861, 1867, 1871, 1873, 1877, 1879, 1889, 1901, 1907, 1913, 1931, 1933, 1949, 1951, 1973, 1979, 1987, 1993, 1997, 1999, 2003, 2011, 2017, 2027, 2029, 2039, 2053, 2063, 2069, 2081, 2083, 2087, 2089, 2099, 2111, 2113, 2129, 2131, 2137, 2141, 2143, 2153, 2161, 2179, 2203, 2207, 2213, 2221, 2237, 2239, 2243, 2251, 2267, 2269, 2273, 2281, 2287, 2293, 2297, 2309, 2311, 2333, 2339, 2341, 2347, 2351, 2357, 2371, 2377, 2381, 2383, 2389, 2393, 2399, 2411, 2417, 2423, 2437, 2441, 2447, 2459, 2467, 2473, 2477, 2503, 2521, 2531, 2539, 2543, 2549, 2551, 2557, 2579, 2591, 2593, 2609, 2617, 2621, 2633, 2647, 2657, 2659, 2663, 2671, 2677, 2683, 2687, 2689, 2693, 2699, 2707, 2711, 2713, 2719, 2729, 2731, 2741, 2749, 2753, 2767, 2777, 2789, 2791, 2797, 2801, 2803, 2819, 2833, 2837, 2843, 2851, 2857, 2861, 2879, 2887, 2897, 2903, 2909, 2917, 2927, 2939, 2953, 2957, 2963, 2969, 2971, 2999, 3001, 3011, 3019, 3023, 3037, 3041, 3049, 3061, 3067, 3079, 3083, 3089, 3109, 3119, 3121, 3137, 3163, 3167, 3169, 3181, 3187, 3191, 3203, 3209, 3217, 3221, 3229, 3251, 3253, 3257, 3259, 3271, 3299, 3301, 3307, 3313, 3319, 3323, 3329, 3331, 3343, 3347, 3359, 3361, 3371, 3373, 3389, 3391, 3407, 3413, 3433, 3449, 3457, 3461, 3463, 3467, 3469, 3491, 3499, 3511, 3517, 3527, 3529, 3533, 3539, 3541, 3547, 3557, 3559, 3571, 3581, 3583, 3593, 3607, 3613, 3617, 3623, 3631, 3637, 3643, 3659, 3671, 3673, 3677, 3691, 3697, 3701, 3709, 3719, 3727, 3733, 3739, 3761, 3767, 3769, 3779, 3793, 3797, 3803, 3821, 3823, 3833, 3847, 3851, 3853, 3863, 3877, 3881, 3889, 3907, 3911, 3917, 3919, 3923, 3929, 3931, 3943, 3947, 3967, 3989, 4001, 4003, 4007, 4013, 4019, 4021, 4027, 4049, 4051, 4057, 4073, 4079, 4091, 4093, 4099, 4111, 4127, 4129, 4133, 4139, 4153, 4157, 4159, 4177, 4201, 4211, 4217, 4219, 4229, 4231, 4241, 4243, 4253, 4259, 4261, 4271, 4273, 4283, 4289, 4297, 4327, 4337, 4339, 4349, 4357, 4363, 4373, 4391, 4397, 4409, 4421, 4423, 4441, 4447, 4451, 4457, 4463, 4481, 4483, 4493, 4507, 4513, 4517, 4519, 4523, 4547, 4549, 4561, 4567, 4583, 4591, 4597, 4603, 4621, 4637, 4639, 4643, 4649, 4651, 4657, 4663, 4673, 4679, 4691, 4703, 4721, 4723, 4729, 4733, 4751, 4759, 4783, 4787, 4789, 4793, 4799, 4801, 4813, 4817, 4831, 4861, 4871, 4877, 4889, 4903, 4909, 4919, 4931, 4933, 4937, 4943, 4951, 4957, 4967, 4969, 4973, 4987, 4993, 4999, 5003, 5009, 5011, 5021, 5023, 5039, 5051, 5059, 5077, 5081, 5087, 5099, 5101, 5107, 5113, 5119, 5147, 5153, 5167, 5171, 5179, 5189, 5197, 5209, 5227, 5231, 5233, 5237, 5261, 5273, 5279, 5281, 5297, 5303, 5309, 5323, 5333, 5347, 5351, 5381, 5387, 5393, 5399, 5407, 5413, 5417, 5419, 5431, 5437, 5441, 5443, 5449, 5471, 5477, 5479, 5483, 5501, 5503, 5507, 5519, 5521, 5527, 5531, 5557, 5563, 5569, 5573, 5581, 5591, 5623, 5639, 5641, 5647, 5651, 5653, 5657, 5659, 5669, 5683, 5689, 5693, 5701, 5711, 5717, 5737, 5741, 5743, 5749, 5779, 5783, 5791, 5801, 5807, 5813, 5821, 5827, 5839, 5843, 5849, 5851, 5857, 5861, 5867, 5869, 5879, 5881, 5897, 5903, 5923, 5927, 5939, 5953, 5981, 5987, 6007, 6011, 6029, 6037, 6043, 6047, 6053, 6067, 6073, 6079, 6089, 6091, 6101, 6113, 6121, 6131, 6133, 6143, 6151, 6163, 6173, 6197, 6199, 6203, 6211, 6217, 6221, 6229, 6247, 6257, 6263, 6269, 6271, 6277, 6287, 6299, 6301, 6311, 6317, 6323, 6329, 6337, 6343, 6353, 6359, 6361, 6367, 6373, 6379, 6389, 6397, 6421, 6427, 6449, 6451, 6469, 6473, 6481, 6491, 6521, 6529, 6547, 6551, 6553, 6563, 6569, 6571, 6577, 6581, 6599, 6607, 6619, 6637, 6653, 6659, 6661, 6673, 6679, 6689, 6691, 6701, 6703, 6709, 6719, 6733, 6737, 6761, 6763, 6779, 6781, 6791, 6793, 6803, 6823, 6827, 6829, 6833, 6841, 6857, 6863, 6869, 6871, 6883, 6899, 6907, 6911, 6917, 6947, 6949, 6959, 6961, 6967, 6971, 6977, 6983, 6991, 6997, 7001, 7013, 7019, 7027, 7039, 7043, 7057, 7069, 7079, 7103, 7109, 7121, 7127, 7129, 7151, 7159, 7177, 7187, 7193, 7207, 7211, 7213, 7219, 7229, 7237, 7243, 7247, 7253, 7283, 7297, 7307, 7309, 7321, 7331, 7333, 7349, 7351, 7369, 7393, 7411, 7417, 7433, 7451, 7457, 7459, 7477, 7481, 7487, 7489, 7499, 7507, 7517, 7523, 7529, 7537, 7541, 7547, 7549, 7559, 7561, 7573, 7577, 7583, 7589, 7591, 7603, 7607, 7621, 7639, 7643, 7649, 7669, 7673, 7681, 7687, 7691, 7699, 7703, 7717, 7723, 7727, 7741, 7753, 7757, 7759, 7789, 7793, 7817, 7823, 7829, 7841, 7853, 7867, 7873, 7877, 7879, 7883, 7901, 7907, 7919, 7927, 7933, 7937, 7949, 7951, 7963, 7993, 8009, 8011, 8017, 8039, 8053, 8059, 8069, 8081, 8087, 8089, 8093, 8101, 8111, 8117, 8123, 8147, 8161, 8167, 8171, 8179, 8191, 8209, 8219, 8221, 8231, 8233, 8237, 8243, 8263, 8269, 8273, 8287, 8291, 8293, 8297, 8311, 8317, 8329, 8353, 8363, 8369, 8377, 8387, 8389, 8419, 8423, 8429, 8431, 8443, 8447, 8461, 8467, 8501, 8513, 8521, 8527, 8537, 8539, 8543, 8563, 8573, 8581, 8597, 8599, 8609, 8623, 8627, 8629, 8641, 8647, 8663, 8669, 8677, 8681, 8689, 8693, 8699, 8707, 8713, 8719, 8731, 8737, 8741, 8747, 8753, 8761, 8779, 8783, 8803, 8807, 8819, 8821, 8831, 8837, 8839, 8849, 8861, 8863, 8867, 8887, 8893, 8923, 8929, 8933, 8941, 8951, 8963, 8969, 8971, 8999, 9001, 9007, 9011, 9013, 9029, 9041, 9043, 9049, 9059, 9067, 9091, 9103, 9109, 9127, 9133, 9137, 9151, 9157, 9161, 9173, 9181, 9187, 9199, 9203, 9209, 9221, 9227, 9239, 9241, 9257, 9277, 9281, 9283, 9293, 9311, 9319, 9323, 9337, 9341, 9343, 9349, 9371, 9377, 9391, 9397, 9403, 9413, 9419, 9421, 9431, 9433, 9437, 9439, 9461, 9463, 9467, 9473, 9479, 9491, 9497, 9511, 9521, 9533, 9539, 9547, 9551, 9587, 9601, 9613, 9619, 9623, 9629, 9631, 9643, 9649, 9661, 9677, 9679, 9689, 9697, 9719, 9721, 9733, 9739, 9743, 9749, 9767, 9769, 9781, 9787, 9791, 9803, 9811, 9817, 9829, 9833, 9839, 9851, 9857, 9859, 9871, 9883, 9887, 9901, 9907, 9923, 9929, 9931, 9941, 9949, 9967, 9973];
  return a === void 0 ? e : e.slice(0, Math.min(e.length, a));
}
function _i(a, e) {
  const t = [], i = e === !0 ? +a : a ** 2;
  for (let s = 0; s <= a; s++)
    for (let r = 0; r <= a; r++)
      s ** 2 + r ** 2 === i && t.push([s, r, a]);
  return t;
}
function Vi(a, e = 2) {
  return +`${Math.round(+`${a}e${e}`)}e-${e}`;
}
const W = {
  decompose: Ai,
  dividers: hi,
  divideNumbersByGCD: Si,
  gcd: Be,
  lcm: Ci,
  numberCorrection: Pi,
  periodic: Ri,
  primes: Li,
  pythagoreanTripletsWithTarget: _i,
  round: Vi
};
var oe, v, y, Tt;
const J = class ct {
  constructor(e, t) {
    return w(this, oe, !1), w(this, v, 1), w(this, y, 1), w(this, Tt, "frac"), l(this, "parse", (i, s) => {
      let r;
      if (i === "")
        return u(this, y, 0), u(this, v, 1), this;
      switch (typeof i) {
        case "string":
          if (r = i.split("/"), r.length > 2)
            throw new Error(`The given value is not a valid fraction (${i})`);
          if (r.map((o) => o === "" || isNaN(Number(o))).includes(!0))
            throw new Error(`The given value is not a valid fraction (${i})`);
          if (r.length === 1)
            return this.parse(+r[0]);
          r.length === 2 ? r[1] === "0" ? (u(this, y, NaN), u(this, v, 1)) : (u(this, y, +r[0]), u(this, v, +r[1])) : (u(this, y, NaN), u(this, v, 1));
          break;
        case "number":
          if (Number.isSafeInteger(i))
            u(this, y, +i), s === void 0 || !Number.isSafeInteger(s) ? u(this, v, 1) : u(this, v, +s);
          else {
            const [, o] = i.toString().split("."), h = o ? o.length : 0;
            s === void 0 ? (u(this, y, i * Math.pow(10, h)), u(this, v, Math.pow(10, h))) : Number.isSafeInteger(s) && (u(this, y, i * Math.pow(10, h) - Math.floor(i * Math.pow(10, h - s))), this.denominator = Math.pow(10, h) - Math.pow(10, h - s)), this.reduce();
          }
          break;
        case "object":
          i instanceof ct && (u(this, y, +i.numerator), u(this, v, +i.denominator));
          break;
      }
      return this;
    }), l(this, "clone", () => {
      const i = new ct();
      return i.numerator = +n(this, y), i.denominator = +n(this, v), i;
    }), l(this, "abs", () => (u(this, y, Math.abs(n(this, y))), u(this, v, Math.abs(n(this, v))), this)), l(this, "add", (i) => {
      if (i instanceof ct) {
        const s = n(this, y), r = n(this, v);
        u(this, y, s * i.denominator + i.numerator * r), u(this, v, r * i.denominator);
      } else
        return this.add(new ct(i));
      return this.reduce();
    }), l(this, "amplify", (i) => (Number.isSafeInteger(i) && (u(this, y, n(this, y) * i), u(this, v, n(this, v) * i)), this)), l(this, "areEquals", (...i) => i.every((s) => s.isEqual(i[0]))), l(this, "compare", (i, s) => {
      s === void 0 && (s = "=");
      let r;
      switch (i instanceof ct ? r = i.clone() : r = new ct(i), s) {
        case ">":
          return this.value > r.value;
        case ">=":
        case "=>":
        case "geq":
          return this.value >= r.value;
        case "<":
          return this.value < r.value;
        case "<=":
        case "=<":
        case "leq":
          return this.value <= r.value;
        case "=":
          return this.value === r.value;
        case "<>":
          return this.value !== r.value;
        default:
          return !1;
      }
    }), l(this, "divide", (i) => {
      const s = new ct(i);
      if (s.numerator === 0)
        return new ct().infinite();
      const r = +n(this, y), o = +n(this, v);
      return u(this, y, r * s.denominator), u(this, v, o * s.numerator), this.reduce();
    }), l(this, "infinite", () => (u(this, y, 1 / 0), u(this, v, 1), this)), l(this, "invalid", () => (u(this, y, NaN), u(this, v, 1), this)), l(this, "inverse", () => {
      const i = +n(this, y);
      return u(this, y, +n(this, v)), u(this, v, i), this;
    }), l(this, "isApproximative", () => n(this, oe) || n(this, y).toString().length >= 15 && n(this, v).toString().length >= 15), l(this, "isEqual", (i) => this.compare(i, "=")), l(this, "isEven", () => this.isRelative() && this.value % 2 === 0), l(this, "isExact", () => !this.isApproximative()), l(this, "isFinite", () => !this.isInfinity() && !this.isNaN()), l(this, "isGeq", (i) => this.compare(i, ">=")), l(this, "isGreater", (i) => this.compare(i, ">")), l(this, "isInfinity", () => Math.abs(n(this, y)) === 1 / 0), l(this, "isInverted", (i) => this.isEqual(new ct().one().divide(i.clone()))), l(this, "isLeq", (i) => this.compare(i, "<=")), l(this, "isLesser", (i) => this.compare(i, "<")), l(this, "isNaN", () => isNaN(n(this, y))), l(this, "isNatural", () => this.isRelative() && this.isPositive()), l(this, "isNegative", () => this.sign() === -1), l(this, "isNegativeOne", () => n(this, y) === -1 && n(this, v) === 1), l(this, "isNotEqual", (i) => this.compare(i, "<>")), l(this, "isNotZero", () => n(this, y) !== 0), l(this, "isOdd", () => this.isRelative() && this.value % 2 === 1), l(this, "isOne", () => n(this, y) === 1 && n(this, v) === 1), l(this, "isOpposite", (i) => this.isEqual(i.clone().opposite())), l(this, "isPositive", () => this.sign() === 1), l(this, "isRational", () => !this.isRelative()), l(this, "isReduced", () => Math.abs(W.gcd(n(this, y), n(this, v))) === 1), l(this, "isRelative", () => this.clone().reduce().denominator === 1), l(this, "isSquare", () => Math.sqrt(n(this, y)) % 1 === 0 && Math.sqrt(n(this, v)) % 1 === 0), l(this, "isStrictlyNegative", () => this.value < 0), l(this, "isStrictlyPositive", () => this.value > 0), l(this, "isZero", () => n(this, y) === 0), l(this, "multiply", (i) => {
      const s = new ct(i);
      return u(this, y, n(this, y) * s.numerator), u(this, v, n(this, v) * s.denominator), this.reduce();
    }), l(this, "one", () => (u(this, y, 1), u(this, v, 1), this)), l(this, "opposite", () => (u(this, y, -n(this, y)), this)), l(this, "pow", (i) => {
      if (i instanceof ct)
        return this.pow(i.value);
      this.reduce(), i < 0 && this.inverse();
      const s = Math.floor(Math.pow(n(this, y), Math.abs(i))), r = Math.floor(Math.pow(n(this, v), Math.abs(i)));
      return s ** Math.abs(i) === n(this, y) && r ** Math.abs(i) === n(this, v) ? (u(this, y, n(this, y) ** Math.abs(i)), u(this, v, n(this, v) ** Math.abs(i))) : (u(this, y, n(this, y) ** Math.abs(i)), u(this, v, n(this, v) ** Math.abs(i))), this;
    }), l(this, "reduce", () => {
      const i = W.gcd(n(this, y), n(this, v));
      return u(this, y, n(this, y) / i), u(this, v, n(this, v) / i), n(this, v) < 0 && (u(this, v, -n(this, v)), u(this, y, -n(this, y))), this;
    }), l(this, "root", (i) => {
      if (i === 0)
        return this;
      if (i < 0 && this.inverse(), !Number.isSafeInteger(i))
        throw new Error("The root must be an integer.");
      if (this.isNegative() && i % 2 === 0)
        throw new Error("The root of a negative number must be odd.");
      const s = this.sign();
      this.abs(), this.reduce();
      const r = Math.floor(Math.pow(n(this, y), Math.abs(1 / i))), o = Math.floor(Math.pow(n(this, v), Math.abs(1 / i)));
      return u(this, y, Math.pow(n(this, y), Math.abs(1 / i))), u(this, v, Math.pow(n(this, v), Math.abs(1 / i))), (r !== n(this, y) || o !== n(this, v)) && (u(this, y, n(this, y) / n(this, v)), u(this, v, 1), u(this, oe, !0)), this.multiply(s), this;
    }), l(this, "sign", () => n(this, y) * n(this, v) >= 0 ? 1 : -1), l(this, "sqrt", () => this.root(2)), l(this, "subtract", (i) => i instanceof ct ? this.add(i.clone().opposite()) : this.add(-i)), l(this, "zero", () => (u(this, y, 0), u(this, v, 1), this)), e !== void 0 && this.parse(e, t), this;
  }
  get denominator() {
    return n(this, v);
  }
  set denominator(e) {
    u(this, v, e);
  }
  get dfrac() {
    return u(this, Tt, "dfrac"), this;
  }
  get display() {
    return this.isExact() ? n(this, v) === 1 ? `${n(this, y)}` : `${n(this, y)}/${n(this, v)}` : this.value.toFixed(3);
  }
  get frac() {
    return u(this, Tt, "frac"), this;
  }
  // ------------------------------------------
  get numerator() {
    return n(this, y);
  }
  set numerator(e) {
    u(this, y, e);
  }
  // Display getter
  get tex() {
    return this.isInfinity() ? `${this.sign() === 1 ? "+" : "-"}\\infty` : this.isExact() ? n(this, v) === 1 ? `${n(this, y)}` : n(this, y) < 0 ? `-\\${n(this, Tt)}{ ${-n(this, y)} }{ ${n(this, v)} }` : `\\${n(this, Tt)}{ ${n(this, y)} }{ ${n(this, v)} }` : this.value.toFixed(3);
  }
  get texWithSign() {
    return this.isPositive() ? `+${this.tex}` : this.tex;
  }
  get tfrac() {
    return u(this, Tt, "tfrac"), this;
  }
  get value() {
    const e = n(this, y) / n(this, v);
    return e === 0 ? 0 : e;
  }
};
oe = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), l(J, "average", (...a) => {
  const e = new J().zero();
  for (const t of a)
    e.add(t);
  return e.divide(a.length), e;
}), l(J, "max", (...a) => {
  let e = new J(a[0]);
  for (const t of a) {
    const i = new J(t);
    i.isGreater(e) && (e = i.clone());
  }
  return e;
}), l(J, "min", (...a) => {
  let e = new J(a[0]);
  for (const t of a) {
    const i = new J(t);
    i.isLesser(e) && (e = i.clone());
  }
  return e;
}), l(J, "sort", (a, e) => {
  const t = a.map((i) => i instanceof J ? i : new J(i)).sort((i, s) => i.value - s.value);
  return e && t.reverse(), t;
}), // ------------------------------------------
// Compare functions
l(J, "unique", (a) => {
  const e = {}, t = [];
  return a.forEach((i) => {
    i instanceof J || (i = new J(i)), e[i.clone().reduce().tex] || (t.push(i.clone()), e[i.tex] = !0);
  }), t;
}), l(J, "xMultiply", (...a) => {
  const e = new J();
  for (const t of a) {
    const i = new J(t);
    e.numerator = e.numerator * i.numerator, e.denominator = e.denominator * i.denominator;
  }
  return e;
});
let d = J;
var F, tt, et, Bt;
class Ee {
  constructor(...e) {
    w(this, F), w(this, tt), w(this, et), w(this, Bt), l(this, "parse", (t, i, s) => (u(this, et, s ?? 1), u(this, tt, i ?? 2), u(this, F, t), n(this, tt) % 2 === 0 && n(this, F) < 0 && u(this, Bt, !1), this)), l(this, "reduce", () => {
      let t = Math.floor(Math.pow(n(this, F), 1 / n(this, tt)));
      for (; t > 1; ) {
        if (n(this, F) % Math.pow(t, n(this, tt)) === 0) {
          u(this, et, n(this, et) * t), u(this, F, n(this, F) / Math.pow(t, n(this, tt))), t = Math.floor(Math.pow(n(this, F), 1 / n(this, tt)));
          continue;
        }
        t--;
      }
      return this;
    }), l(this, "multiply", (t) => (u(this, F, n(this, F) * t.radical), this.reduce())), l(this, "hasRadical", () => !(n(this, F) === 1 || n(this, F) === 0 || !n(this, Bt))), u(this, F, 1), u(this, et, 1), u(this, tt, 2), u(this, Bt, !0), e.length > 0 && this.parse(e[0], e[1], e[2]);
  }
  // ------------------------------------------
  // Getter and setter
  // ------------------------------------------
  get radical() {
    return n(this, F);
  }
  set radical(e) {
    u(this, F, e);
  }
  get nth() {
    return n(this, tt);
  }
  set nth(e) {
    Number.isSafeInteger(e) && e >= 2 ? u(this, tt, e) : (console.log("Error setting the nth root"), u(this, tt, 2));
  }
  get coefficient() {
    return n(this, et);
  }
  set coefficient(e) {
    u(this, et, e);
  }
  get tex() {
    let e;
    return n(this, et) === 1 ? e = "" : n(this, et) === -1 ? e = "-" : e = n(this, et).toString(), n(this, F) === 1 ? `${n(this, et)}` : n(this, tt) === 2 ? `${e}\\sqrt{${n(this, F)}}` : `${e}\\sqrt[${n(this, tt)}]{${n(this, F)}}`;
  }
  get display() {
    let e;
    return n(this, et) === 1 ? e = "" : n(this, et) === -1 ? e = "-" : e = n(this, et).toString(), n(this, F) === 1 ? `${n(this, et)}` : n(this, tt) === 2 ? `${e}sqrt{${n(this, F)}}` : `${e}root(${n(this, tt)}){${n(this, F)}}`;
  }
  get value() {
    return n(this, et) * Math.pow(n(this, F), 1 / n(this, tt));
  }
}
F = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap();
var K, Rt, L, At, ht, ci, Je, li, ui, fi, di, He;
const pi = class {
  constructor(e, t, i = "x") {
    if (w(this, L), w(this, K), w(this, Rt), u(this, Rt, i), Object.hasOwn(e, "moveLeft")) {
      const s = e;
      u(this, K, s.left.clone().subtract(s.right));
    } else
      u(this, K, e.clone().subtract(t ?? 0));
  }
  solve() {
    const e = n(this, K).degree().value;
    if (e === 0)
      return [];
    if (e === 1)
      return A(this, L, fi).call(this);
    if (e === 2)
      return A(this, L, di).call(this);
    const t = A(this, L, li).call(this);
    return t.length > 0 ? t : A(this, L, ci).call(this);
  }
  solveAsCardan() {
    if (n(this, K).degree().value !== 3)
      throw new Error("The equation is not cubic.");
    return A(this, L, ui).call(this);
  }
};
K = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakSet(), At = function(a, e) {
  return {
    variable: n(this, Rt),
    exact: !1,
    value: +a.toFixed(10),
    tex: (e == null ? void 0 : e.tex) ?? "",
    display: (e == null ? void 0 : e.display) ?? ""
  };
}, ht = function(a) {
  if (a instanceof d && a.isApproximative())
    return A(this, L, At).call(this, a.value);
  const e = new d(a);
  return {
    variable: n(this, Rt),
    exact: e,
    value: e.value,
    tex: e.tex,
    display: e.display
  };
}, ci = function() {
  const a = [];
  n(this, K).degree().value;
  const e = n(this, K).getCoefficients().map((c) => c.value), [t, ...i] = n(this, K).getCoefficients(), s = 1 + Math.max(...i.map((c) => c.value / t.value)), r = 2 * s / 100, o = [];
  for (let c = -s; c <= s; c += r) {
    const f = W.numberCorrection(c);
    o.push(
      {
        x: f,
        fx: n(this, K).evaluate(f, !0)
      }
    );
  }
  o.sort((c, f) => c.x - f.x);
  const h = [];
  return o.forEach((c, f) => {
    f > 0 && (c.fx === 0 ? h.push([c.x, c.x]) : o[f - 1].fx * c.fx < 0 && h.push([
      o[f - 1].x,
      c.x
    ]));
  }), h.forEach((c) => {
    const [f, p] = c;
    if (f === p)
      a.push(A(this, L, ht).call(this, f));
    else {
      const g = A(this, L, Je).call(this, e, f, p);
      g !== null && a.push(A(this, L, At).call(this, g));
    }
  }), a;
}, Je = function(a, e, t, i = 1e-10) {
  let s = n(this, K).evaluate(e, !0), r = n(this, K).evaluate(t, !0);
  if (s * r > 0)
    return console.log("Pas de racine dans l'intervalle donné"), null;
  let o;
  for (; (t - e) / 2 > i; ) {
    o = (e + t) / 2;
    const h = n(this, K).evaluate(o, !0);
    if (h === 0)
      return o;
    s * h < 0 ? (t = o, r = h) : (e = o, s = h);
  }
  return (e + t) / 2;
}, li = function() {
  let a = n(this, K).clone(), e = [];
  const t = a.lcmDenominator();
  t !== 1 && a.multiply(t);
  const i = a.monomByDegree().coefficient;
  let s = a.monomByDegree(0).coefficient;
  for (; s.isZero(); )
    e.length === 0 && e.push(A(this, L, ht).call(this, 0)), a = a.divide("x"), s = a.monomByDegree(0).coefficient;
  const r = W.dividers(i.value), o = W.dividers(s.value);
  for (const c of r)
    for (const f of o) {
      const p = new d(f, c);
      a.evaluate(p).isZero() && !e.find((g) => g.value === p.value) && e.push(A(this, L, ht).call(this, p)), p.opposite(), a.evaluate(p).isZero() && !e.find((g) => g.value === p.value) && e.push(A(this, L, ht).call(this, p));
    }
  for (const c of e) {
    if (c.exact !== !1 && c.exact.isZero())
      continue;
    const f = n(this, K).clone().parse("x", c.exact.denominator, -c.exact.numerator);
    for (; a.isDividableBy(f); )
      a = a.divide(f);
  }
  if (a.degree().isZero())
    return e.sort((c, f) => c.value - f.value);
  if (a.degree().value > 3)
    return [];
  const h = new pi(a, a.clone().parse("0"), n(this, Rt));
  return e = e.concat(h.solve()), e.sort((c, f) => c.value - f.value);
}, ui = function() {
  const a = n(this, K), e = a.monomByDegree(3).coefficient, t = a.monomByDegree(2).coefficient, i = a.monomByDegree(1).coefficient, s = a.monomByDegree(0).coefficient, r = t.clone().divide(e), o = i.clone().divide(e), h = s.clone().divide(e), c = o.clone().subtract(r.clone().pow(2).divide(3)), f = h.clone().subtract(r.clone().multiply(o).divide(3)).add(r.clone().pow(3).multiply(2).divide(27)), p = f.clone().opposite(), g = c.clone().opposite().pow(3).divide(27), N = p.clone().pow(2).subtract(g.clone().multiply(4)).opposite();
  if (N.isNegative()) {
    const I = f.clone().opposite().add(N.clone().opposite().sqrt()).divide(2).root(3), D = f.clone().opposite().subtract(N.clone().opposite().sqrt()).divide(2).root(3), ot = I.clone().add(D).subtract(r.clone().divide(3));
    return [A(this, L, ht).call(this, ot)];
  }
  if (N.isZero()) {
    const I = f.clone().opposite().divide(2).root(3), D = I.clone().opposite().subtract(r.clone().divide(3)), ot = I.clone().multiply(2).subtract(r.clone().divide(3));
    return D.isEqual(ot) ? [A(this, L, ht).call(this, D)] : [
      A(this, L, ht).call(this, ot),
      A(this, L, ht).call(this, D)
    ].sort((Q, B) => Q.value - B.value);
  }
  if (N.isPositive()) {
    const I = [], D = c.value, ot = f.value, Q = r.value;
    for (let B = 0; B < 3; B++)
      I.push(2 * Math.sqrt(-D / 3) * Math.cos(Math.acos(3 * ot / (2 * D) * Math.sqrt(-3 / D)) / 3 + 2 * Math.PI * B / 3) - Q / 3);
    return I.map((B) => A(this, L, At).call(this, B)).sort((B, wt) => B.value - wt.value);
  }
  return [];
}, fi = function() {
  const [a, e] = n(this, K).getCoefficients(), t = e.opposite().divide(a);
  return [
    A(this, L, ht).call(this, t)
  ];
}, di = function() {
  const a = n(this, K), [e, t, i] = a.getCoefficients(), s = t.clone().pow(2).subtract(e.clone().multiply(i).multiply(4));
  if (s.isNegative())
    return [];
  if (s.isSquare()) {
    const r = s.sqrt(), o = t.clone().opposite().add(r).divide(e.clone().multiply(2)), h = t.clone().opposite().subtract(r).divide(e.clone().multiply(2));
    return r.isZero() ? [A(this, L, ht).call(this, o)] : [
      A(this, L, ht).call(this, o),
      A(this, L, ht).call(this, h)
    ].sort((c, f) => c.value - f.value);
  }
  return A(this, L, He).call(this, e, t, s);
}, He = function(a, e, t) {
  const i = W.dividers(t.value).filter((Q) => Math.sqrt(Q) % 1 === 0).map((Q) => Math.sqrt(Q)).pop() ?? 1, s = W.gcd(2 * a.value, e.value, i) * (a.isNegative() ? -1 : 1), r = e.clone().divide(s).opposite(), o = a.clone().divide(s).multiply(2), h = t.clone().divide(i ** 2), c = Math.abs(i / s), f = i === 1 ? "-" : `-${c} `, p = i === 1 ? "+" : `+${c} `;
  function g(Q, B, wt, ke) {
    return `\\frac{ ${B} ${wt}\\sqrt{ ${ke} } }{ ${Q} }`;
  }
  function N(Q, B, wt, ke) {
    return `(${B}${wt}sqrt(${ke}))/${Q}`;
  }
  const I = t.value ** 0.5, D = (-e.value - I) / (2 * a.value), ot = (-e.value + I) / (2 * a.value);
  return [
    A(this, L, At).call(this, D, {
      tex: g(o.tex, r.tex, f.toString(), h.tex),
      display: N(o.display, r.display, f.toString(), h.display)
    }),
    A(this, L, At).call(this, ot, {
      tex: g(o.tex, r.tex, p.toString(), h.tex),
      display: N(o.display, r.display, p.toString(), h.display)
    })
  ].sort((Q, B) => Q.value - B.value);
};
let mi = pi;
var zi = Object.defineProperty, gi = (a) => {
  throw TypeError(a);
}, Fi = (a, e, t) => e in a ? zi(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, $e = (a, e, t) => Fi(a, typeof e != "symbol" ? e + "" : e, t), xi = (a, e, t) => e.has(a) || gi("Cannot " + t), X = (a, e, t) => (xi(a, e, "read from private field"), t ? t.call(a) : e.get(a)), Ut = (a, e, t) => e.has(a) ? gi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, t), lt = (a, e, t, i) => (xi(a, e, "write to private field"), e.set(a, t), t);
const Ge = {
  pi: Math.PI,
  e: Math.exp(1)
};
var m = /* @__PURE__ */ ((a) => (a.VARIABLE = "variable", a.COEFFICIENT = "coefficient", a.OPERATION = "operation", a.CONSTANT = "constant", a.FUNCTION = "function", a.FUNCTION_ARGUMENT = "function-argument", a.MONOM = "monom", a.LEFT_PARENTHESIS = "(", a.RIGHT_PARENTHESIS = ")", a))(m || {}), Lt = /* @__PURE__ */ ((a) => (a.EXPRESSION = "expression", a.POLYNOM = "polynom", a.SET = "set", a.NUMERIC = "numeric", a))(Lt || {});
function Di(a, e) {
  if (a.length <= 1)
    return a;
  const t = Object.keys(e).filter((g) => e[g].type === m.FUNCTION).map((g) => g);
  t.sort((g, N) => N.length - g.length);
  const i = new RegExp(`^(${t.join("|")})\\(`), s = Object.keys(Ge);
  s.sort((g, N) => N.length - g.length);
  const r = new RegExp(`^(${s.join("|")})`), o = /^(\d+(\.\d+)?)/;
  let h = "", c, f, p;
  for (; a.length > 0; ) {
    if (c = f, p = void 0, t.length > 0 && i.exec(a)) {
      const g = t.find((N) => a.startsWith(N));
      g && (p = g + "(", a = a.slice(g.length + 1), f = m.FUNCTION);
    } else if (s.length > 0 && r.exec(a)) {
      const g = s.find((N) => a.startsWith(N));
      g && (p = g, a = a.slice(g.length), f = m.CONSTANT);
    } else if (o.exec(a)) {
      const g = o.exec(a);
      g && (p = g[0], a = a.slice(g[0].length), f = m.COEFFICIENT);
    } else
      switch (p = a[0], a = a.slice(1), p) {
        case "(":
          f = m.LEFT_PARENTHESIS;
          break;
        case ")":
          f = m.RIGHT_PARENTHESIS;
          break;
        case ",":
          f = m.FUNCTION_ARGUMENT;
          break;
        case "+":
        case "-":
        case "*":
        case "/":
        case "^":
          f = m.OPERATION;
          break;
        default:
          f = m.VARIABLE;
      }
    if (p === void 0 || f === void 0)
      throw new Error("The token is undefined");
    h += Zi(c, f), h += p;
  }
  return h;
}
function Zi(a, e) {
  return a === void 0 || a === m.OPERATION || e === m.OPERATION || a === m.LEFT_PARENTHESIS || a === m.FUNCTION || a === m.FUNCTION_ARGUMENT || e === m.RIGHT_PARENTHESIS || e === m.FUNCTION_ARGUMENT ? "" : "*";
}
const Wi = {
  "^": { precedence: 4, associative: "right", type: m.OPERATION },
  "*": { precedence: 3, associative: "left", type: m.OPERATION },
  "/": { precedence: 3, associative: "left", type: m.OPERATION },
  "+": { precedence: 2, associative: "left", type: m.OPERATION },
  "-": { precedence: 2, associative: "left", type: m.OPERATION }
}, ji = {
  "^": { precedence: 4, associative: "right", type: m.OPERATION },
  "*": { precedence: 3, associative: "left", type: m.OPERATION },
  "/": { precedence: 3, associative: "left", type: m.OPERATION },
  "+": { precedence: 2, associative: "left", type: m.OPERATION },
  "-": { precedence: 2, associative: "left", type: m.OPERATION },
  "%": { precedence: 3, associative: "right", type: m.OPERATION },
  sin: { precedence: 4, associative: "right", type: m.FUNCTION },
  cos: { precedence: 4, associative: "right", type: m.FUNCTION },
  tan: { precedence: 4, associative: "right", type: m.FUNCTION },
  sqrt: { precedence: 4, associative: "right", type: m.FUNCTION },
  nthrt: { precedence: 4, associative: "right", type: m.FUNCTION },
  ",": { precedence: 2, associative: "left", type: m.FUNCTION_ARGUMENT }
}, Ui = {
  "^": { precedence: 4, associative: "right", type: m.OPERATION },
  "*": { precedence: 3, associative: "left", type: m.OPERATION },
  "/": { precedence: 3, associative: "left", type: m.OPERATION },
  "+": { precedence: 2, associative: "left", type: m.OPERATION },
  "-": { precedence: 2, associative: "left", type: m.OPERATION },
  "%": { precedence: 3, associative: "right", type: m.OPERATION },
  sin: { precedence: 4, associative: "right", type: m.FUNCTION },
  cos: { precedence: 4, associative: "right", type: m.FUNCTION },
  tan: { precedence: 4, associative: "right", type: m.FUNCTION },
  sqrt: { precedence: 4, associative: "right", type: m.FUNCTION },
  nthrt: { precedence: 4, associative: "right", type: m.FUNCTION },
  ln: { precedence: 4, associative: "right", type: m.FUNCTION },
  log: { precedence: 4, associative: "right", type: m.FUNCTION }
}, Bi = {
  "&": { precedence: 3, associative: "left", type: m.OPERATION },
  "|": { precedence: 3, associative: "left", type: m.OPERATION },
  "!": { precedence: 4, associative: "right", type: m.OPERATION },
  "-": { precedence: 2, associative: "left", type: m.OPERATION }
};
var St, Gt, it, he, Ot;
class Qe {
  constructor(e) {
    Ut(this, St), Ut(this, Gt, []), Ut(this, it, {}), Ut(this, he, []), Ut(this, Ot), lt(this, St, typeof e > "u" ? Lt.POLYNOM : e), this.tokenConfigInitialization();
  }
  // Getter
  get rpn() {
    return X(this, Gt);
  }
  get rpnToken() {
    return X(this, Gt).map((e) => e.token);
  }
  tokenConfigInitialization() {
    return X(this, St) === Lt.SET ? (lt(this, it, Bi), lt(this, Ot, !1)) : X(this, St) === Lt.NUMERIC ? (lt(this, it, Ui), lt(this, Ot, !0)) : X(this, St) === Lt.EXPRESSION ? (lt(this, it, ji), lt(this, Ot, !0)) : (lt(this, it, Wi), lt(this, Ot, !0)), lt(this, he, Object.keys(X(this, it)).sort((e, t) => t.length - e.length)), X(this, it);
  }
  /**
   * Get the next token to analyse.
   * @param expr (string) Expression to analyse
   * @param start (number) CUrrent position in the expr string.
   */
  NextToken(e, t) {
    let i, s;
    if (i = "", s = void 0, e[t] === "(")
      i = "(", s = m.LEFT_PARENTHESIS;
    else if (e[t] === ")")
      i = ")", s = m.RIGHT_PARENTHESIS;
    else if (e[t] === ",")
      i = ",", s = m.FUNCTION_ARGUMENT;
    else {
      for (const r of X(this, he))
        if (e.substring(t, t + r.length) === r) {
          i += r, s = X(this, it)[r].type;
          break;
        }
      for (const r in Ge)
        if (e.substring(t, t + r.length) === r) {
          i += r, s = m.CONSTANT;
          break;
        }
      if (i === "")
        if (/[0-9.]/.exec(e[t])) {
          const r = /^([0-9.]+)/.exec(e.substring(t));
          i = r ? r[0] : "", s = m.COEFFICIENT;
        } else if (/[a-zA-Z]/.exec(e[t])) {
          const r = /^([a-zA-Z])/.exec(e.substring(t));
          i = r ? r[0] : "", s = m.VARIABLE;
        } else
          console.log("Unidentified token", e[t], e, t), i = e[t], s = m.MONOM;
    }
    if (s === void 0)
      throw new Error(`Token type is undefined for token ${i}`);
    return [i, t + i.length, s];
  }
  /**
   * Parse an expression using the shutting yard tree algorithms
   * @param expr (string) Expression to analyse
   * Returns a RPN list of items.
   * @param uniformize
   */
  parse(e, t) {
    const i = [], s = [];
    let r = "", o = 0, h;
    (t ?? X(this, Ot)) && (e = Di(e, X(this, it)));
    let c = 50, f;
    for (; o < e.length; ) {
      if (c--, c === 0) {
        console.log("SECURITY LEVEL 1 EXIT");
        break;
      }
      switch ([r, o, h] = this.NextToken(e, o), h) {
        case m.MONOM:
        case m.COEFFICIENT:
        case m.VARIABLE:
        case m.CONSTANT:
          i.push({
            token: r,
            tokenType: h
          });
          break;
        case m.OPERATION:
          if (s.length > 0) {
            let p = s[s.length - 1];
            for (f = 50; p.token in X(this, it) && //either o1 is left-associative and its precedence is less than or equal to that of o2,
            (X(this, it)[r].associative === "left" && X(this, it)[r].precedence <= X(this, it)[p.token].precedence || //or o1 is right associative, and has precedence less than that of o2,
            X(this, it)[r].associative === "right" && X(this, it)[r].precedence < X(this, it)[p.token].precedence); ) {
              if (f--, f === 0) {
                console.log("SECURITY LEVEL 2 OPERATION EXIT");
                break;
              }
              if (i.push(s.pop() ?? { token: "", tokenType: m.OPERATION }), s.length === 0)
                break;
              p = s[s.length - 1];
            }
          }
          s.push({ token: r, tokenType: h });
          break;
        case m.FUNCTION_ARGUMENT:
          for (f = 50; s[s.length - 1].token !== "(" && s.length > 0; ) {
            if (f--, f === 0) {
              console.log("SECURITY LEVEL 2 FUNCTION ARGUMENT EXIT");
              break;
            }
            i.push(s.pop() ?? { token: r, tokenType: h });
          }
          break;
        case m.LEFT_PARENTHESIS:
          s.push({ token: r, tokenType: h }), e[o] === "-" && i.push({ token: "0", tokenType: m.COEFFICIENT });
          break;
        case m.RIGHT_PARENTHESIS:
          for (f = 50; s[s.length - 1].token !== "(" && s.length > 1; ) {
            if (f--, f === 0) {
              console.log("SECURITY LEVEL 2 CLOSING PARENTHESIS EXIT");
              break;
            }
            i.push(s.pop() ?? { token: r, tokenType: h });
          }
          s.pop();
          break;
        case m.FUNCTION:
          s.push({ token: r, tokenType: h });
          break;
        default:
          throw new Error(`Token type ${r} is not handled`);
      }
    }
    return lt(this, Gt, i.concat(s.reverse())), this;
  }
}
St = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), he = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap();
class _t {
  constructor(e, t) {
    $e(this, "_rpn"), $e(this, "_expression"), $e(this, "_isValid"), this._expression = e;
    try {
      this._rpn = new Qe(Lt.NUMERIC).parse(e, t).rpn;
    } catch {
      throw this._rpn = null, this._isValid = !1, new Error(`There was a problem parsing: ${e}`);
    }
  }
  get rpn() {
    return this._rpn ?? [];
  }
  get isValid() {
    if (this._isValid === void 0)
      try {
        this.evaluate({ x: 2 });
      } catch {
        this._isValid = !1;
      }
    return this._isValid ?? !1;
  }
  set isValid(e) {
    this._isValid = e;
  }
  get expression() {
    return this._expression;
  }
  evaluate(e) {
    const t = [];
    if (this._rpn === null)
      return this._isValid = !1, 0;
    this._isValid = !0;
    for (const i of this._rpn)
      if (i.tokenType === m.COEFFICIENT)
        if (!isNaN(+i.token))
          t.push(+i.token);
        else {
          const s = i.token.split("/");
          if (s.length !== 2)
            throw this._isValid = !1, new Error("This coefficient is not a fraction");
          t.push(+s[0] / +s[1]);
        }
      else if (i.tokenType === m.VARIABLE && e !== void 0)
        Object.hasOwn(e, i.token) && t.push(+e[i.token]);
      else if (i.tokenType === m.CONSTANT)
        t.push(Ge[i.token]);
      else if (i.tokenType === m.OPERATION) {
        if (i.token === "*") {
          const s = t.pop(), r = t.pop();
          if (r === void 0 || s === void 0)
            throw this._isValid = !1, new Error(`The multiplication factors ${r ?? "a"} or ${s ?? "b"} are not defined`);
          t.push(r * s);
        } else if (i.token === "/") {
          const s = t.pop(), r = t.pop();
          if (r === void 0 || s === void 0)
            throw this._isValid = !1, new Error(`The division values ${r ?? "a"} or ${s ?? "b"} are not defined`);
          t.push(r / s);
        } else if (i.token === "+") {
          const s = t.pop(), r = t.pop();
          if (r === void 0 || s === void 0)
            throw this._isValid = !1, new Error(`The addition values ${r ?? "a"} or ${s ?? "b"} are not defined`);
          t.push(+r + +s);
        } else if (i.token === "-") {
          const s = t.pop(), r = t.pop() ?? 0;
          if (s === void 0)
            throw this._isValid = !1, new Error("The subtraction value b is  not defined");
          t.push(r - s);
        } else if (i.token === "^") {
          const s = t.pop(), r = t.pop();
          if (r === void 0 || s === void 0)
            throw this._isValid = !1, new Error(`The base value ${r ?? "a"} or exponent ${s ?? "b"} are not defined`);
          t.push(Math.pow(r, s));
        }
      } else if (i.tokenType === m.FUNCTION) {
        const s = t.pop();
        if (s === void 0)
          throw this._isValid = !1, new Error(`The parameters for ${i.token} is not defined`);
        if (i.token === "sin")
          t.push(Math.sin(s));
        else if (i.token === "cos")
          t.push(Math.cos(s));
        else if (i.token === "tan")
          t.push(Math.tan(s));
        else if (i.token === "sqrt")
          t.push(Math.sqrt(s));
        else if (i.token === "nthrt") {
          const r = t.pop();
          if (r === void 0)
            throw this._isValid = !1, new Error("The nthrt function requires two parameters");
          s % 2 === 0 && r < 0 ? t.push(NaN) : t.push((r < 0 ? -1 : 1) * Math.pow(Math.abs(r), 1 / s));
        } else i.token === "ln" ? t.push(Math.log(s)) : i.token === "log" && t.push(Math.log10(s));
      }
    if (t.length === 1)
      return this._numberCorrection(t[0]);
    throw new Error(`There was a problem parsing: ${this._expression}`);
  }
  _numberCorrection(e, t = 8) {
    return +e.toFixed(t);
  }
}
var $, b, Qt, ce, qt, Oe, qe;
const Ct = class _ {
  constructor(e) {
    return w(this, Qt), w(this, $), w(this, b), l(this, "clone", () => {
      const t = new _();
      t.coefficient = n(this, $).clone();
      for (const i in n(this, b))
        t.setLetter(i, n(this, b)[i].clone());
      return t;
    }), l(this, "add", (...t) => {
      for (const i of t) {
        const s = i instanceof _ ? i : new _(i);
        this.isSameAs(s) ? (this.isZero() && A(this, Qt, ce).call(this, s), n(this, $).add(s.coefficient)) : console.log("Add monom: " + this.display + " is not similar with ", s.display);
      }
      return this;
    }), l(this, "containsRationalPower", () => Object.values(n(this, b)).some((t) => t.isRational())), l(this, "degree", (t) => this.variables.length === 0 ? new d().zero() : t === void 0 ? Object.values(n(this, b)).reduce((i, s) => i.clone().add(s)) : this.hasVariable(t) ? n(this, b)[t].clone() : new d().zero()), l(this, "derivative", (t) => {
      if (t === void 0 && (t = "x"), this.hasVariable(t)) {
        const i = n(this, b)[t].clone(), s = this.clone();
        return n(s, b)[t].subtract(1), n(s, $).multiply(new d(i.clone())), s;
      } else
        return new _().zero();
    }), l(this, "divide", (...t) => {
      for (const i of t) {
        const s = i instanceof _ ? i : new _(i);
        n(this, $).divide(s.coefficient);
        for (const r in s.literal)
          n(this, b)[r] = this.hasVariable(r) ? n(this, b)[r].subtract(s.literal[r]) : s.literal[r].clone().opposite(), n(this, b)[r].isZero() && this.removeVariable(r);
      }
      return this;
    }), l(this, "evaluate", (t, i) => {
      if (i === !0) {
        if (t instanceof d)
          return n(this, qt).call(this, t.value);
        if (t instanceof Ee)
          return new d().invalid();
        if (typeof t == "number")
          return n(this, qt).call(this, t);
        if (typeof t == "object") {
          const r = {};
          for (const o in t)
            r[o] = new d(t[o]).value;
          return n(this, qt).call(this, r);
        }
      }
      const s = this.coefficient.clone();
      if (typeof t == "number" || t instanceof d) {
        const r = {};
        return r[this.variables[0]] = new d(t), this.evaluate(r);
      }
      if (t instanceof Ee)
        return new d().invalid();
      if (typeof t == "object") {
        if (this.variables.length === 0)
          return this.coefficient;
        for (const r in n(this, b)) {
          const o = new d(t[r]);
          s.multiply(o.pow(n(this, b)[r]));
        }
      }
      return s;
    }), l(this, "hasVariable", (t) => Object.hasOwn(n(this, b), t ?? "x")), l(this, "inverse", () => {
      n(this, $).opposite();
      for (const t in n(this, b))
        n(this, b)[t].opposite();
      return this;
    }), l(this, "isDivisible", (t) => {
      if (t.degree().isStrictlyPositive()) {
        for (const i of t.variables)
          if (!this.degree(i).isGeq(t.degree(i)))
            return !1;
      }
      return this.coefficient.isRational() || t.coefficient.isRational() ? !0 : this.coefficient.clone().divide(t.coefficient).isRelative();
    }), l(this, "isEqual", (t) => this.isSameAs(t) && n(this, $).isEqual(t.coefficient)), l(this, "isLiteralSquare", () => {
      for (const t in this.literal)
        if (this.literal[t].isRational() || this.literal[t].isEven())
          return !1;
      return !0;
    }), l(this, "isOne", () => n(this, $).value === 1 && this.variables.length === 0), l(this, "isSameAs", (t) => {
      const i = this.variables, s = t.variables, r = i.concat(s.filter((o) => !i.includes(o)));
      if (this.isZero() || t.isZero() || i.length === 0 && s.length === 0)
        return !0;
      if (i.length !== s.length)
        return !1;
      if (!this.isZero() && !t.isZero()) {
        for (const o of r)
          if (!this.hasVariable(o) || !t.hasVariable(o) || !n(this, b)[o].isEqual(t.literal[o]))
            return !1;
      }
      return !0;
    }), l(this, "isSquare", () => this.coefficient.isSquare() ? this.isLiteralSquare() : !1), l(this, "isZero", () => n(this, $).value === 0), l(this, "multiply", (...t) => {
      for (const i of t) {
        const s = i instanceof _ ? i : new _(i);
        n(this, $).multiply(s.coefficient);
        for (const r in s.literal)
          this.hasVariable(r) ? n(this, b)[r].add(s.literal[r]) : n(this, b)[r] = s.literal[r].clone();
      }
      return this;
    }), l(this, "one", () => (u(this, $, new d().one()), u(this, b, {}), this)), l(this, "opposite", () => (n(this, $).opposite(), this)), l(this, "pow", (t) => {
      n(this, $).pow(t);
      for (const i in n(this, b))
        n(this, b)[i].multiply(t);
      return this;
    }), l(this, "primitive", (t) => {
      t === void 0 && (t = "x");
      const i = this.clone();
      let s;
      return i.hasVariable(t) ? (s = i.degree(t).clone().add(1), i.coefficient = i.coefficient.clone().divide(s), i.setLetter(t, s)) : (i.coefficient.isZero() && (i.coefficient = new d().one()), i.setLetter(t, 1)), i;
    }), l(this, "reduce", () => {
      this.coefficient.reduce();
      for (const t in n(this, b))
        n(this, b)[t].isZero() && this.removeVariable(t);
      return this;
    }), l(this, "root", () => {
      throw new Error("Method not implemented.");
    }), l(this, "setLetter", (t, i) => i instanceof d ? (this.hasVariable(t) && i.isZero() && this.removeVariable(t), n(this, b)[t] = i.clone(), this) : this.setLetter(t, new d(i))), l(this, "sqrt", () => {
      if (this.isSquare()) {
        n(this, $).sqrt();
        for (const t in n(this, b))
          n(this, b)[t].clone().divide(2);
      }
      return this;
    }), l(this, "subtract", (...t) => {
      for (const i of t) {
        const s = i instanceof _ ? i : new _(i);
        this.isSameAs(s) ? (this.isZero() && A(this, Qt, ce).call(this, s), n(this, $).add(s.clone().coefficient.opposite())) : console.log("Subtract: Is not similar: ", s.display);
      }
      return this;
    }), l(this, "zero", () => (u(this, $, new d().zero()), u(this, b, {}), this)), w(this, qt, (t) => {
      let i = this.coefficient.value;
      if (typeof t == "number") {
        const s = {}, r = this.variables[0];
        return s[r] = t, n(this, qt).call(this, s);
      }
      if (t instanceof d) {
        const s = {};
        return s[this.variables[0]] = new d(t).value, n(this, qt).call(this, s);
      }
      if (t instanceof Ee)
        return NaN;
      if (typeof t == "object") {
        if (this.variables.length === 0)
          return this.coefficient.value;
        for (const s in n(this, b)) {
          const r = t[s];
          r instanceof d ? i *= r.value ** n(this, b)[s].value : i *= r ** n(this, b)[s].value;
        }
      }
      return i;
    }), w(this, Oe, (t) => {
      const i = new Qe().parse(t).rpn, s = [];
      if (i.length === 0)
        return this.zero(), this;
      if (i.length === 1) {
        const r = i[0];
        return this.one(), r.tokenType === m.COEFFICIENT ? this.coefficient = new d(r.token) : r.tokenType === m.VARIABLE && this.setLetter(r.token, 1), this;
      } else
        for (const r of i)
          n(this, qe).call(this, s, r);
      return this.one(), this.multiply(s[0]), this;
    }), w(this, qe, (t, i) => {
      var s;
      let r, o, h, c, f;
      if (i.tokenType === m.COEFFICIENT)
        t.push(new _(new d(i.token)));
      else if (i.tokenType === m.VARIABLE) {
        const p = new _().one();
        p.setLetter(i.token, 1), t.push(p.clone());
      } else if (i.tokenType === m.OPERATION)
        switch (i.token) {
          case "-":
            o = t.pop() ?? new _().zero(), r = t.pop() ?? new _().zero(), t.push(r.subtract(o));
            break;
          case "*":
            o = t.pop() ?? new _().one(), r = t.pop() ?? new _().one(), t.push(r.multiply(o));
            break;
          case "/":
            o = t.pop() ?? new _().one(), r = t.pop() ?? new _().one(), t.push(r.divide(o));
            break;
          case "^": {
            f = ((s = t.pop()) == null ? void 0 : s.coefficient) ?? new d().one(), h = t.pop() ?? new _().one(), c = h.variables[0], c && h.setLetter(c, f), t.push(h);
            break;
          }
        }
    }), u(this, $, new d().zero()), u(this, b, {}), e !== void 0 && this.parse(e), this;
  }
  // -----------------------------------------
  /**
   * Parse a string to a monom. The string may include fraction.
   * @param inputStr
   */
  parse(e) {
    return u(this, $, new d()), u(this, b, {}), typeof e == "string" ? n(this, Oe).call(this, e) : typeof e == "number" ? u(this, $, new d(e)) : e instanceof d ? u(this, $, e.clone()) : e instanceof _ && (u(this, $, n(e, $).clone()), A(this, Qt, ce).call(this, e)), this;
  }
  /**
   * Get the coefficient \\(k\\) of the Monom \\(k\\cdot x^{n}\\)
   * @returns {Fraction}
   */
  get coefficient() {
    return n(this, $);
  }
  /**
   * Set the coefficient \\(k\\) value of the monom
   * @param {Fraction | number | string} F
   */
  set coefficient(e) {
    u(this, $, new d(e));
  }
  // Display getter
  /**
   * This display getter is to be used in the polynom display getter
   */
  get display() {
    let e = "";
    const t = Object.keys(n(this, b)).sort();
    for (const i of t)
      n(this, b)[i].isNotZero() && (e += i, n(this, b)[i].isNotEqual(1) && (e += `^(${n(this, b)[i].display})`));
    return e === "" ? n(this, $).value != 0 ? n(this, $).display : "" : n(this, $).value === 1 ? e : n(this, $).value === -1 ? `-${e}` : n(this, $).value === 0 ? "0" : `${n(this, $).display}${e}`;
  }
  get dividers() {
    if (!this.coefficient.isRelative())
      return [this.clone()];
    if (this.containsRationalPower())
      return [this.clone()];
    if (this.coefficient.numerator > 1e6)
      return [this.clone()];
    const e = W.dividers(Math.abs(this.coefficient.numerator));
    let t = [];
    for (const s in this.literal)
      t = this._getLiteralDividers(t, s);
    const i = [];
    if (t.length > 0 && e.length > 0)
      for (const s of e)
        for (const r of t) {
          const o = new _();
          o.coefficient = new d(s), o.literal = r, i.push(o);
        }
    else if (e.length === 0)
      for (const s of t) {
        const r = new _();
        r.coefficient = new d().one(), r.literal = s, i.push(r);
      }
    else
      for (const s of e) {
        const r = new _();
        r.coefficient = new d(s), i.push(r);
      }
    return i.length === 0 ? [new _().one()] : i;
  }
  integrate(e, t, i) {
    const s = this.primitive(i);
    return s.evaluate(t).subtract(s.evaluate(e));
  }
  /**
   * Get the literal part of \\(x^{n_1}y^{n_2}\\) as dictionary \\[\\begin{array}{ll}x&=n_1\\\\y&=n_2\\end{array}\\]
   * @returns {literalType}
   */
  get literal() {
    return n(this, b);
  }
  /**
   * Set the literal part of the monom. Must be a dictionary {x: Fraction, y: Fraction, ...}
   * @param {literalType<Fraction>} L
   */
  set literal(e) {
    u(this, b, e);
  }
  /**
   * Get the literal square roots of the Monom.
   * @returns {literalType<Fraction>}
   */
  get literalSqrt() {
    if (this.isLiteralSquare()) {
      const e = {};
      for (const t in n(this, b))
        e[t] = n(this, b)[t].clone().sqrt();
      return e;
    } else
      return n(this, b);
  }
  /**
   * Set the literal part of the monom from a string
   * @param inputStr  String like x^2y^3
   */
  set literalStr(e) {
    for (const t of [...e.matchAll(/([a-z])\^([+-]?[0-9]+)/g)])
      t[1] in n(this, b) || (n(this, b)[t[1]] = new d().zero()), n(this, b)[t[1]].add(+t[2]);
    for (const t of [...e.matchAll(/([a-z](?!\^))/g)])
      t[1] in n(this, b) || (n(this, b)[t[1]] = new d().zero()), n(this, b)[t[1]].add(1);
  }
  get plotFunction() {
    let e = "";
    const t = Object.keys(n(this, b)).sort();
    for (const i of t)
      n(this, b)[i].isNotZero() && (e += (e === "" ? "" : "*") + i, n(this, b)[i].isNotEqual(1) && (e += `^(${n(this, b)[i].display})`));
    return e === "" ? n(this, $).value != 0 ? n(this, $).display : "" : n(this, $).value === 1 ? e : n(this, $).value === -1 ? `-${e}` : n(this, $).value === 0 ? "0" : `${n(this, $).display}*${e}`;
  }
  removeVariable(e) {
    delete n(this, b)[e];
  }
  /**
   * Get the tex output of the monom
   */
  get tex() {
    let e = "";
    const t = Object.keys(n(this, b)).sort();
    for (const i of t)
      n(this, b)[i].isNotZero() && (e += i, n(this, b)[i].isNotEqual(1) && (e += `^{ ${n(this, b)[i].tfrac.tex} }`));
    return e === "" ? n(this, $).value != 0 ? n(this, $).frac.tex : "0" : n(this, $).value === 1 ? e : n(this, $).value === -1 ? `-${e}` : n(this, $).value === 0 ? "0" : `${n(this, $).frac.tex}${e}`;
  }
  // Getter helpers.
  /**
   * Get the variables letters
   */
  get variables() {
    const e = [];
    return Object.entries(this.literal).forEach(
      ([t, i]) => {
        i.isZero() || e.push(t);
      }
    ), e.sort(), e;
  }
  _getLiteralDividers(e, t) {
    const i = [];
    for (let s = 0; s <= this.literal[t].value; s++)
      if (e.length === 0) {
        const r = {};
        r[t] = new d(s), i.push(r);
      } else
        for (const r of e) {
          const o = {};
          for (const h in r)
            o[h] = r[h];
          o[t] = new d(s), i.push(o);
        }
    return i;
  }
};
$ = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakSet(), ce = function(a) {
  for (const e in a.literal)
    n(this, b)[e] = a.literal[e].clone();
}, qt = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), l(Ct, "gcd", (...a) => {
  for (const s of a)
    if (s.containsRationalPower())
      return new Ct().zero();
  const e = new Ct(), t = W.gcd(...a.map((s) => s.coefficient.numerator)), i = W.lcm(...a.map((s) => s.coefficient.denominator));
  e.coefficient = new d(t, i).reduce();
  for (const s of a) {
    for (const r in e.literal)
      r in s.literal || e.literal[r].zero();
    for (const r in s.literal)
      !e.hasVariable(r) && s.literal[r].isStrictlyPositive() ? e.literal[r] = s.literal[r].clone() : e.literal[r] = new d(Math.min(s.literal[r].value, e.literal[r].value));
  }
  return e;
}), /**
* Multiply two monoms and return a NEW monom.
* @param monoms
*/
l(Ct, "xMultiply", (...a) => {
  const e = new Ct().one();
  for (const t of a)
    e.multiply(t);
  return e;
});
let M = Ct;
function Ke(a, e = !0) {
  return e ? `\\left( ${a} \\right)` : `(${a})`;
}
function le(a, e, t, i, s) {
  return a.map((r, o) => r === e ? t : r);
}
var Pt, x, Yt, ue, Xt, fe, Ie, Me, Ae, Jt, Se, de, Ce, Pe, Re, Le, yi, _e, Ve;
const Gi = class S {
  constructor(e, ...t) {
    return w(this, Le), w(this, Pt), w(this, x), w(this, Yt), w(this, ue, !1), l(this, "parse", (i, ...s) => {
      if (u(this, x, []), u(this, Pt, []), typeof i == "string")
        return A(this, Le, yi).call(this, i, ...s);
      if ((typeof i == "number" || i instanceof d || i instanceof M) && s.length === 0)
        n(this, x).push(new M(i));
      else if (i instanceof M && s.length > 0)
        n(this, x).push(new M(i)), s.forEach((r) => {
          n(this, x).push(new M(r));
        });
      else if (i instanceof S)
        for (const r of i.monoms)
          n(this, x).push(r.clone());
      return this;
    }), l(this, "clone", () => {
      const i = new S(), s = [];
      for (const r of n(this, x))
        s.push(r.clone());
      return i.monoms = s, i;
    }), l(this, "add", (...i) => {
      for (const s of i)
        s instanceof S ? u(this, x, n(this, x).concat(s.monoms)) : s instanceof M ? n(this, x).push(s.clone()) : typeof s == "number" && Number.isSafeInteger(s) ? n(this, x).push(new M(s.toString())) : n(this, x).push(new M(s));
      return this.reduce();
    }), l(this, "commonMonom", () => {
      const i = new M().one(), s = this.gcdNumerator(), r = this.gcdDenominator(), o = this.degree();
      i.coefficient = new d(s, r);
      for (const h of this.variables) {
        i.setLetter(h, o);
        for (const c of n(this, x))
          if (i.setLetter(h, d.min(c.degree(h), i.degree(h))), i.degree(h).isZero())
            break;
      }
      return i;
    }), l(this, "degree", (i) => {
      let s = new d().zero();
      for (const r of n(this, x))
        s = d.max(r.degree(i).value, s);
      return s;
    }), l(this, "derivative", (i) => {
      const s = new S();
      for (const r of n(this, x))
        s.add(r.derivative(i));
      return s.reduce();
    }), l(this, "divide", (i) => {
      if (i instanceof d)
        return n(this, fe).call(this, i);
      if (typeof i == "number" && Number.isSafeInteger(i))
        return n(this, Ie).call(this, i);
      if (i instanceof M)
        return this.divide(new S(i));
      if (i instanceof S) {
        if (i.monoms.length === 1 && i.variables.length === 0)
          return n(this, fe).call(this, i.monoms[0].coefficient);
        {
          const { quotient: s, reminder: r } = this.euclidean(i);
          if (r.isZero())
            return u(this, x, s.monoms), this;
        }
      } else if (typeof i == "string")
        return this.divide(new S(i));
      throw new Error(`Cannot divide by ${i}`);
    }), l(this, "empty", () => (u(this, x, []), this)), l(this, "euclidean", (i) => {
      const s = i.variables[0], r = new S().zero(), o = this.clone().reorder(s);
      if (i.variables.length === 0)
        return {
          quotient: this.clone().divide(i).reduce(),
          reminder: new S().zero()
        };
      const h = i.monomByDegree(void 0, s), c = i.degree(s);
      let f, p = this.degree(s).value * 2;
      for (; o.degree(s).isGeq(c) && p > 0 && (p--, f = o.monomByDegree(void 0, s).clone().divide(h), !(!f.isZero() && (r.add(f), o.subtract(i.clone().multiply(f)).reduce(), f.degree(s).isZero()))); )
        ;
      return r.reduce(), o.reduce(), { quotient: r, reminder: o };
    }), l(this, "evaluate", (i, s) => {
      if (s)
        return n(this, Me).call(this, i);
      const r = new d().zero();
      return n(this, x).forEach((o) => {
        r.add(o.evaluate(i, s));
      }), r;
    }), l(this, "factorize", (i) => {
      let s = [], r = this.clone().reorder();
      const o = r.commonMonom();
      if (r.monomByDegree().coefficient.isStrictlyNegative() && o.coefficient.isStrictlyPositive() && !o.isOne() && o.opposite(), !o.isOne()) {
        const f = new S(o);
        s = [f.clone()], r = r.euclidean(f).quotient;
      }
      let h = r.degree().clone().multiply(2).value, c = 1;
      for (; h >= 0; )
        if (h--, r.monoms.length < 2) {
          r.isOne() || (s.push(r.clone()), r.one());
          break;
        } else if (r.degree(i).isOne()) {
          s.push(r.clone()), r.one();
          break;
        } else {
          let f = n(this, Se).call(this, r, c, i ?? "x");
          for (c = r.degree(i).value; f.length > 0; ) {
            const p = f[0];
            if (!r.isDividableBy(p))
              f.shift();
            else {
              const g = r.euclidean(p);
              s.push(p), r = g.quotient.clone(), f = f.filter((N) => {
                const I = r.monoms[0], D = r.monoms[r.monoms.length - 1], ot = N.monoms[0], Q = N.monoms[N.monoms.length - 1];
                return D.isDivisible(Q) ? I.isDivisible(ot) : !1;
              });
            }
          }
        }
      return r.isOne() || s.push(r.clone()), u(this, Pt, s), n(this, Pt);
    }), l(this, "gcdDenominator", () => W.gcd(...this.getDenominators())), l(this, "gcdNumerator", () => W.gcd(...this.getNumerators())), l(this, "getDenominators", () => {
      const i = [];
      for (const s of n(this, x))
        i.push(s.coefficient.denominator);
      return i;
    }), l(this, "getNumerators", () => {
      const i = [];
      for (const s of n(this, x))
        i.push(s.coefficient.numerator);
      return i;
    }), l(this, "getZeroes", () => this.degree().isZero() ? [] : (this.roots = new mi(this.clone()).solve(), this.roots)), l(this, "integrate", (i, s, r = "x") => {
      const o = this.primitive(r), h = {}, c = {};
      return h[r] = new d(i), c[r] = new d(s), o.evaluate(c).subtract(o.evaluate(h));
    }), l(this, "isDeveloped", (i) => {
      let s;
      const r = i.replaceAll(/\^\(([-0-9/]+)\)/g, "$1");
      if (r.includes("(") || r.includes(")"))
        return !1;
      try {
        s = new S(i);
      } catch {
        return !1;
      }
      return !!this.isEqual(s);
    }), l(this, "isDividableBy", (i) => {
      if (i.degree().isOne()) {
        const s = i.getZeroes()[0];
        return s.exact instanceof d ? this.evaluate(s.exact).isZero() : !1;
      } else {
        const { reminder: s } = this.euclidean(i);
        return s.isZero();
      }
    }), l(this, "isEqual", (i) => n(this, Xt).call(this, i, "=")), l(this, "isOppositeAt", (i) => n(this, Xt).call(this, i.clone().opposite(), "=")), l(this, "isReduced", (i) => {
      if (!this.isDeveloped(i))
        return !1;
      const s = new S(i);
      if (s.monoms.length > this.monoms.length)
        return !1;
      for (const r of s.monoms)
        if (!r.coefficient.isReduced())
          return !1;
      return !1;
    }), l(this, "isSameAs", (i) => n(this, Xt).call(this, i, "same")), l(this, "lcmDenominator", () => W.lcm(...this.getDenominators())), l(this, "lcmNumerator", () => W.lcm(...this.getNumerators())), l(this, "letters", () => {
      let i = /* @__PURE__ */ new Set();
      for (const s of n(this, x))
        i = /* @__PURE__ */ new Set([...i, ...s.variables]);
      return [...i];
    }), l(this, "limitToInfinity", (i) => {
      const s = this.monomByDegree(void 0, i), r = s.coefficient.sign(), o = s.degree(i);
      return o.isStrictlyPositive() ? r === 1 ? new d().infinite() : new d().infinite().opposite() : o.isZero() ? s.coefficient : new d().zero();
    }), l(this, "limitToNegativeInfinity", (i) => {
      const s = this.monomByDegree(void 0, i), r = s.coefficient.sign(), o = s.degree(i);
      return o.isStrictlyPositive() ? r === -1 ? new d().infinite() : new d().infinite().opposite() : o.isZero() ? s.coefficient : new d().zero();
    }), l(this, "monomByDegree", (i, s) => {
      if (i === void 0)
        return this.monomByDegree(this.degree(s), s);
      const r = this.clone().reduce();
      for (const o of n(r, x))
        if (o.degree(s).isEqual(i))
          return o.clone();
      return new M().zero();
    }), l(this, "monomByLetter", (i) => {
      const s = this.clone().reduce();
      for (const r of n(s, x))
        if (r.hasVariable(i))
          return r.clone();
      return new M().zero();
    }), l(this, "monomsByDegree", (i, s) => {
      if (i === void 0)
        return this.monomsByDegree(this.degree(s));
      const r = [], o = this.clone().reduce();
      for (const h of n(o, x))
        h.degree(s).isEqual(i) && r.push(h.clone());
      return r;
    }), l(this, "multiply", (i) => i instanceof S ? n(this, Re).call(this, i) : i instanceof d ? n(this, de).call(this, i) : i instanceof M ? n(this, Pe).call(this, i) : Number.isSafeInteger(i) && typeof i == "number" ? n(this, Ce).call(this, i) : this), l(this, "one", () => (u(this, x, []), n(this, x).push(new M().one()), this)), l(this, "opposite", () => (u(this, x, n(this, x).map((i) => i.opposite())), this)), l(this, "pow", (i) => {
      if (!Number.isSafeInteger(i))
        return this.zero();
      if (i < 0)
        return this.zero();
      if (i === 0)
        return new S();
      const s = this.clone();
      for (let r = 1; r < i; r++)
        this.multiply(s);
      return this.reduce();
    }), l(this, "primitive", (i) => {
      const s = new S();
      for (const r of n(this, x))
        s.add(r.primitive(i));
      return s;
    }), l(this, "reduce", () => {
      let i = 0;
      for (; i < n(this, x).length; ) {
        for (let s = i + 1; s < n(this, x).length; s++)
          n(this, x)[i].isSameAs(n(this, x)[s]) && (n(this, x)[i].add(n(this, x)[s]), n(this, x).splice(s, 1), n(this, x)[i].isZero() && (n(this, x)[i] = new M().zero()), s--);
        i++;
      }
      u(this, x, n(this, x).filter((s) => !s.coefficient.isZero()));
      for (const s of n(this, x))
        s.coefficient.reduce();
      return this.length === 0 ? new S().zero() : this.reorder();
    }), l(this, "reorder", (i = "x", s) => {
      s === void 0 && (s = !1);
      const r = this.variables.filter((o) => o !== i);
      return n(this, x).sort(function(o, h) {
        const c = o.degree(i).value, f = h.degree(i).value;
        if (c !== f)
          return s ? c - f : f - c;
        if (r.length > 0)
          for (const p of r) {
            const g = o.degree(p).value, N = h.degree(p).value;
            if (g !== N)
              return s ? g - N : N - g;
          }
        return 0;
      }), this;
    }), l(this, "replaceBy", (i, s) => {
      let r;
      const o = new S().zero();
      for (const h of this.monoms)
        !h.hasVariable(i) || h.literal[i].isZero() ? o.add(h.clone()) : (r = h.literal[i].clone(), h.removeVariable(i), o.add(s.clone().pow(Math.abs(r.numerator)).multiply(h)));
      return u(this, x, o.reduce().monoms), this;
    }), l(this, "subtract", (...i) => {
      for (const s of i)
        s instanceof S ? this.add(s.clone().opposite()) : s instanceof M ? n(this, x).push(s.clone().opposite()) : n(this, x).push(new M(s).opposite());
      return this.reduce();
    }), l(this, "zero", () => (u(this, x, []), n(this, x).push(new M().zero()), this)), w(this, Xt, (i, s) => {
      s === void 0 && (s = "=");
      const r = this.clone().reduce().reorder(), o = i.clone().reduce().reorder();
      switch (s) {
        case "=":
          return r.length !== o.length || !r.degree().isEqual(o.degree()) ? !1 : r.monoms.every((h, c) => h.isEqual(o.monoms[c]));
        case "same":
          return r.length !== o.length || !r.degree().isEqual(o.degree()) ? !1 : r.monoms.every((h, c) => h.isSameAs(o.monoms[c]));
        default:
          return !1;
      }
    }), w(this, fe, (i) => {
      for (const s of n(this, x))
        s.coefficient.divide(i);
      return this;
    }), w(this, Ie, (i) => {
      const s = new d(i);
      for (const r of n(this, x))
        r.coefficient.divide(s);
      return this;
    }), w(this, Me, (i) => {
      let s = 0;
      return n(this, x).forEach((r) => {
        s += r.evaluate(i, !0);
      }), s;
    }), w(this, Ae, (i) => {
      var s;
      let r, o, h, c, f, p, g, N, I;
      if (this.numberOfVars === 1)
        return h = this.monomByDegree(2, i).coefficient, c = this.monomByDegree(1, i).coefficient, f = this.monomByDegree(0, i).coefficient, p = c.clone().pow(2).subtract(h.clone().multiply(f).multiply(4)), p.isZero() ? (g = c.clone().opposite().divide(h.clone().multiply(2)), r = new S(i).subtract(g.display).multiply(g.denominator), o = new S(i).subtract(g.display).multiply(g.denominator), I = h.divide(g.denominator).divide(g.denominator), I.isOne() ? [r, o] : [new S(I.display), r, o]) : p.isPositive() && p.isSquare() ? (g = c.clone().opposite().add(p.clone().sqrt()).divide(h.clone().multiply(2)), N = c.clone().opposite().subtract(p.clone().sqrt()).divide(h.clone().multiply(2)), I = h.divide(g.denominator).divide(N.denominator), I.isOne() ? [
          new S(i).subtract(g.display).multiply(g.denominator),
          new S(i).subtract(N.display).multiply(N.denominator)
        ] : [
          new S(I.display),
          new S(i).subtract(g.display).multiply(g.denominator),
          new S(i).subtract(N.display).multiply(N.denominator)
        ]) : [this.clone()];
      if (h = this.monomByDegree(2, i), c = this.monomByDegree(1, i), f = this.monomByDegree(0, i), h.isLiteralSquare() && f.isLiteralSquare() && c.clone().pow(2).isSameAs(h.clone().multiply(f))) {
        const D = new S("x", h.coefficient, c.coefficient, f.coefficient), ot = n(s = D, Ae).call(s, "x"), Q = [];
        let B;
        if (ot.length >= 2) {
          for (const wt of ot)
            wt.degree().isZero() ? Q.push(wt.clone()) : (B = wt.clone(), B.monoms[0].literal = h.literalSqrt, B.monoms[1].literal = f.literalSqrt, Q.push(B.clone()));
          return Q;
        }
      }
      return [this.clone()];
    }), w(this, Jt, (i, s, r, o) => {
      let h = "";
      for (const c of n(this, x)) {
        if (c.coefficient.value === 0)
          continue;
        let f;
        o ? f = c.plotFunction : f = i === "tex" ? c.tex : c.display, h += `${c.coefficient.sign() === 1 && (h !== "" || s === !0) ? "+" : ""}${f}`;
      }
      return r === !0 && this.length > 1 && (i === "tex" ? h = `\\left( ${h} \\right)` : h = `(${h})`), h === "" && (h = "0"), h;
    }), w(this, Se, (i, s, r) => {
      const o = i.monoms[0].dividers, h = i.monoms[i.monoms.length - 1].dividers, c = [];
      return o.forEach((f) => {
        f.degree(r).isLeq(s) && h.forEach((p) => {
          f.degree(r).isNotEqual(p.degree(r)) && (c.push(new S(f, p)), c.push(new S(f, p.clone().opposite())));
        });
      }), c;
    }), w(this, de, (i) => {
      for (const s of n(this, x))
        s.coefficient.multiply(i);
      return this.reduce();
    }), w(this, Ce, (i) => n(this, de).call(this, new d(i))), w(this, Pe, (i) => {
      for (const s of n(this, x))
        s.multiply(i);
      return this.reduce();
    }), w(this, Re, (i) => {
      const s = [];
      for (const r of n(this, x))
        for (const o of i.monoms)
          s.push(M.xMultiply(r, o));
      return u(this, x, s), this.reduce();
    }), w(this, _e, (i) => {
      const s = new Qe().parse(i).rpn;
      this.zero();
      const r = [];
      for (const o of s)
        n(this, Ve).call(this, r, o);
      return r.length === 1 && this.add(r[0]), this.reorder();
    }), w(this, Ve, (i, s) => {
      switch (s.tokenType) {
        case m.COEFFICIENT:
          i.push(new S(s.token));
          break;
        case m.VARIABLE:
          i.push(new S().add(new M(s.token)));
          break;
        case m.CONSTANT:
          console.log("Actually, not supported - will be added later !");
          break;
        case m.OPERATION:
          if (i.length >= 2) {
            const r = i.pop(), o = i.pop();
            if (o === void 0 || r === void 0)
              break;
            if (s.token === "+")
              i.push(o.add(r));
            else if (s.token === "-")
              i.push(o.subtract(r));
            else if (s.token === "*")
              i.push(o.multiply(r));
            else if (s.token === "/")
              r.degree().isStrictlyPositive() ? console.log("divide by a polynom -> should create a rational polynom !") : i.push(o.divide(r.monoms[0].coefficient));
            else if (s.token === "^") {
              if (r.degree().isStrictlyPositive())
                throw new Error("Cannot elevate a polynom with another polynom !");
              if (r.monoms[0].coefficient.isRelative())
                i.push(o.pow(r.monoms[0].coefficient.value));
              else if (o.monoms.length === 1 && o.monoms[0].coefficient.isOne()) {
                for (const h in o.monoms[0].literal)
                  o.monoms[0].literal[h].multiply(r.monoms[0].coefficient);
                i.push(o);
              } else
                console.error("Cannot have power with fraction");
            }
          } else if (s.token === "-") {
            const r = i.pop();
            r && i.push(r.opposite());
          } else
            throw new Error("Error parsing the polynom");
          break;
        case m.MONOM:
          console.error("The monom token should not appear here");
          break;
        case m.FUNCTION:
          console.error("The function token should not appear here - might be introduced later.");
          break;
      }
    }), u(this, x, []), u(this, Pt, []), u(this, Yt, []), e !== void 0 && this.parse(e, ...t), this;
  }
  get tex() {
    return n(this, Jt).call(this, "tex");
  }
  get display() {
    return n(this, Jt).call(this);
  }
  fromCoefficients(...e) {
    u(this, x, []);
    const t = "x";
    return e.reverse().forEach((i, s) => {
      const r = new M();
      r.coefficient = new d(i), r.setLetter(t, s), n(this, x).push(r);
    }), this;
  }
  getCoefficients() {
    const e = this.clone().reorder(), t = this.degree().value + 1, i = new Array(t).fill(new d(0));
    return e.monoms.forEach((s) => {
      const r = t - s.degree().value - 1;
      i[r] = s.coefficient.clone();
    }), i;
  }
  hasVariable(e) {
    return this.variables.includes(e);
  }
  inverse() {
  }
  get isMultiVariable() {
    return n(this, x).some((e) => e.variables.length > 1);
  }
  isOne() {
    return n(this, x).length === 1 && n(this, x)[0].coefficient.isOne() && this.degree().isZero();
  }
  isZero() {
    return n(this, x).length === 1 && n(this, x)[0].coefficient.isZero() || n(this, x).length === 0;
  }
  get length() {
    return n(this, x).length;
  }
  // ------------------------------------------
  get monoms() {
    return n(this, x);
  }
  set monoms(e) {
    u(this, x, e);
  }
  get numberOfVars() {
    return this.variables.length;
  }
  get plotFunction() {
    return n(this, Jt).call(this, "tex", !1, !1, !0);
  }
  root() {
    throw new Error("Cannot take the root from a polynom");
  }
  get roots() {
    return n(this, ue) ? n(this, Yt) : this.getZeroes();
  }
  set roots(e) {
    u(this, ue, !0), u(this, Yt, e);
  }
  sqrt() {
    throw new Error("Cannot take the square root from a polynom");
  }
  tableOfSigns() {
    const e = this.roots;
    let t = new Array(2 * e.length + 1).fill("").map((i, s) => s % 2 === 0 ? "" : "z");
    if (t.length === 1) {
      const [i] = this.getCoefficients().map((s) => s.value);
      t = le(t, "", i > 0 ? "+" : "-");
    } else if (this.degree().isOne()) {
      const [i] = this.getCoefficients().map((s) => s.value);
      t[0] = i > 0 ? "-" : "+", t[1] = "z", t[2] = i > 0 ? "+" : "-";
    } else
      [
        e[0].value - 1,
        ...e.map((i, s) => s === e.length - 1 ? e[s].value + 1 : (e[s].value + e[s + 1].value) / 2)
      ].forEach((i, s) => {
        const r = this.evaluate({ x: i }, !0);
        t[s * 2] = r > 0 ? "+" : "-";
      });
    return { roots: e, signs: t };
  }
  get variables() {
    let e = [];
    for (const t of n(this, x))
      e = e.concat(t.variables);
    return e = [...new Set(e)], e.sort(), e;
  }
  get zeroes() {
    return this.getZeroes();
  }
};
Pt = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakMap(), ue = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ new WeakMap(), Ie = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ new WeakMap(), Pe = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), Le = /* @__PURE__ */ new WeakSet(), yi = function(a, ...e) {
  if (e.length === 0) {
    if (a = "" + a, a !== "" && !isNaN(Number(a))) {
      this.empty();
      const t = new M(a);
      return this.add(t), this;
    }
    return n(this, _e).call(this, a);
  } else if (/^[a-z]+/.test(a)) {
    this.empty();
    const t = e.map((i) => new d(i));
    if (a.length > 1) {
      const i = a.split("");
      if (i.length < e.length - 2)
        throw new Error("Too many factors for too few variables !");
      let s = 0;
      for (const r of t) {
        const o = new M();
        o.coefficient = r.clone(), o.literalStr = i[s] || "", this.add(o), s++;
      }
    } else {
      let i = t.length - 1;
      for (const s of t) {
        const r = new M();
        r.coefficient = s.clone(), r.literalStr = `${a}^${i}`, this.add(r), i--;
      }
    }
    return this;
  } else
    return this.zero();
}, _e = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap();
let O = Gi;
var T, q, st, ze, Ht, Fe;
const Qi = class gt {
  constructor(e, t, i) {
    if (w(this, T), w(this, q), w(this, st), l(this, "parse", (s) => {
      const r = n(this, ze).call(this, s);
      if (r === !1)
        throw new Error("The equation is not valid (no sign found)");
      const o = s.split(r);
      return this.create(new O(o[0]), new O(o[1]), n(this, Ht).call(this, r));
    }), l(this, "create", (s, r, o) => (u(this, T, s), u(this, q, r), u(this, st, n(this, Ht).call(this, o ?? "=")), this)), l(this, "clone", () => new gt(n(this, T).clone(), n(this, q).clone(), n(this, st))), l(this, "degree", (s) => d.max(n(this, T).degree(s), n(this, q).degree(s))), l(this, "divide", (s) => {
      const r = new d(s);
      return r.isZero() ? this : this.multiply(r.inverse());
    }), l(this, "hasVariable", (s) => this.variables.includes(s)), l(this, "isLinearTo", (s) => {
      const r = s.clone().moveLeft().simplify().left, o = this.clone().moveLeft().simplify().left;
      return r.isEqual(o) || r.isOppositeAt(o);
    }), l(this, "isMultiVariable", () => n(this, T).isMultiVariable || n(this, q).isMultiVariable), l(this, "isEqualTo", (s) => {
      const r = s.clone().moveLeft().left, o = this.clone().moveLeft().left;
      return r.isEqual(o) || r.isOppositeAt(o);
    }), l(this, "isolate", (s) => {
      if (!this.degree(s).isOne() || this.isMultiVariable())
        return !1;
      let r;
      n(this, T).subtract(n(this, q)), n(this, q).zero();
      const o = [...n(this, T).monoms];
      for (const c of o)
        c.hasVariable(s) || (r = c.clone(), n(this, T).subtract(r), n(this, q).subtract(r));
      if (n(this, T).length !== 1)
        return !1;
      const h = n(this, T).monoms[0].coefficient.clone();
      return n(this, T).divide(h), n(this, q).divide(h), this;
    }), l(this, "letters", () => [.../* @__PURE__ */ new Set([...n(this, T).letters(), ...n(this, q).letters()])]), l(this, "moveLeft", () => (n(this, T).subtract(n(this, q)), n(this, q).zero(), this)), l(this, "multiply", (s) => {
      const r = new d(s);
      return n(this, T).multiply(r), n(this, q).multiply(r), n(this, st) !== "=" && r.sign() === -1 && n(this, Fe).call(this), this;
    }), l(this, "opposite", () => (u(this, T, n(this, T).opposite()), u(this, q, n(this, q).opposite()), this)), l(this, "reorder", (s) => (n(this, T).subtract(n(this, q)), n(this, q).zero(), n(this, T).reorder(), s ? this : (n(this, T).monoms.filter((r) => r.degree().isZero()).forEach((r) => {
      const o = r.clone();
      n(this, T).subtract(o), n(this, q).subtract(o);
    }), n(this, T).reorder(), n(this, q).reorder(), this))), l(this, "replaceBy", (s, r) => (n(this, T).replaceBy(s, r), n(this, q).replaceBy(s, r), this)), l(this, "simplify", () => (this.multiply(W.lcm(...n(this, T).getDenominators(), ...n(this, q).getDenominators())), this.divide(W.gcd(...n(this, T).getNumerators(), ...n(this, q).getNumerators())), this)), l(this, "solve", () => new mi(this.clone()).solve()), l(this, "test", (s) => this.left.evaluate(s).isEqual(this.right.evaluate(s))), w(this, ze, (s) => {
      if (s.includes("geq"))
        return s.includes("\\geq") ? "\\geq" : "geq";
      if (s.includes("leq"))
        return s.includes("\\leq") ? "\\leq" : "leq";
      if (s.includes(">="))
        return ">=";
      if (s.includes("=>"))
        return "=>";
      if (s.includes(">"))
        return ">";
      if (s.includes("<="))
        return "<=";
      if (s.includes("=<"))
        return "=<";
      if (s.includes("<"))
        return "<";
      if (s.includes("="))
        return "=";
      throw new Error("The equation is not valid (no sign found)");
    }), w(this, Ht, (s) => s === void 0 ? "=" : s.includes("geq") || s.includes(">=") || s.includes("=>") ? ">=" : s.includes(">") ? ">" : s.includes("leq") || s.includes("<=") || s.includes("=<") ? "<=" : s.includes("<") ? "<" : "="), w(this, Fe, () => n(this, st) === "=" ? this : n(this, st).includes("<") ? (n(this, st).replace("<", ">"), this) : n(this, st).includes(">") ? (n(this, st).replace(">", "<"), this) : this), u(this, T, new O().zero()), u(this, q, new O().zero()), u(this, st, "="), e !== void 0 && t === void 0) {
      if (e instanceof gt)
        return e.clone();
      typeof e == "string" && this.parse(e);
    } else e !== void 0 && t !== void 0 && (this.left = new O(e), this.right = new O(t));
    return i !== void 0 && (this.sign = i), this;
  }
  /**
   * Add a value to the equation
   * if value is an equation, add the left part to the left part of the equation
   * and the right part to the right part of the equation
   * if value is a string, try to create an equation
   * if it fails, create a polynom and add it to the left and right part of the equation
   * @param value | Polynom | Monom | Fraction | string | monom
   */
  add(e) {
    if (e instanceof gt)
      return n(this, T).add(e.left), n(this, q).add(e.right), this;
    if (typeof e == "string" && !gt.isEquationString(e))
      return this.add(new gt(e));
    const t = new O(e);
    return n(this, T).add(t), n(this, q).add(t), this;
  }
  /**
   * Create an Equation using two polynoms.
   * Markdown *support* is cool
   * @param values
   * @param asNumeric
   */
  evaluate(e, t) {
    const i = n(this, T).evaluate(e, t), s = n(this, q).evaluate(e, t);
    return t ? i === s : i.isEqual(s);
  }
  isEqual(e) {
    const t = new gt(e);
    return t.left.isEqual(n(this, T)) && t.right.isEqual(n(this, q));
  }
  pow(e) {
    return n(this, T).pow(e), n(this, q).pow(e), this;
  }
  reduce() {
    return this.moveLeft(), n(this, T).reduce(), this.simplify(), n(this, T).monoms[0].coefficient.isNegative() && this.multiply(-1), this;
  }
  split() {
    return [n(this, T).clone(), n(this, q).clone()];
  }
  subtract(e) {
    if (e instanceof gt)
      return n(this, T).subtract(e.left), n(this, q).subtract(e.right), this;
    if (typeof e == "string" && !gt.isEquationString(e))
      return this.subtract(new gt(e));
    const t = new O(e);
    return n(this, T).subtract(t), n(this, q).subtract(t), this;
  }
  static isEquationString(e) {
    return e.includes("=") || e.includes("<") || e.includes(">") || e.includes("<=") || e.includes(">=");
  }
  static makeSolutionsUnique(e, t) {
    const i = [], s = e.filter((r) => i.includes(r.tex) ? !1 : (i.push(r.tex), !0));
    return t === !0 && s.sort((r, o) => r.value - o.value), s;
  }
  get display() {
    return `${n(this, T).display}${this.signAsTex}${n(this, q).display}`;
  }
  // Getter and setter
  get left() {
    return n(this, T);
  }
  set left(e) {
    u(this, T, e);
  }
  get numberOfVars() {
    return this.variables.length;
  }
  get right() {
    return n(this, q);
  }
  set right(e) {
    u(this, q, e);
  }
  // ------------------------------------------
  get sign() {
    return n(this, st);
  }
  set sign(e) {
    u(this, st, n(this, Ht).call(this, e));
  }
  get signAsTex() {
    return n(this, st) === ">=" ? "\\geq" : n(this, st) === "<=" ? "\\leq" : n(this, st);
  }
  get tex() {
    return `${n(this, T).tex}${this.signAsTex}${n(this, q).tex}`;
  }
  get variables() {
    return [...new Set(n(this, q).variables.concat(n(this, T).variables))];
  }
};
T = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ new WeakMap();
let mt = Qi;
var kt, xt, ut, Kt;
const Yi = class ft {
  constructor(e, t) {
    return w(this, kt), w(this, xt), w(this, ut), w(this, Kt, !1), e instanceof ft ? (u(this, xt, e.polynom.clone()), u(this, ut, e.power.clone()), t !== void 0 && n(this, ut).multiply(new d(t))) : e !== void 0 ? (u(this, xt, new O(e)), u(this, ut, new d(t ?? 1))) : (u(this, xt, new O()), u(this, ut, new d(1))), u(this, kt, 1), this;
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  clone() {
    return new ft(this);
  }
  fromPolynom(e) {
    return u(this, xt, new O(e)), u(this, ut, new d(1)), this;
  }
  get tex() {
    const e = this.power.numerator, t = this.power.denominator;
    let i, s;
    return n(this, kt) === 0 && t > 1 ? (i = `\\sqrt${t === 2 ? "" : `[ ${t} ]`}{ ${this.polynom.tex} }`, s = e === 1 ? "" : `^{ ${e} }`) : (i = n(this, Kt) && this.power.isOne() ? this.polynom.tex : Ke(this.polynom.tex), s = t === 1 && e === 1 ? "" : `^{ ${this.power.tex} }`), i = `${i}${s}`, n(this, kt) === 0 && e < 0 && (i = `\\frac{ 1 }{ ${i} }`), i;
  }
  get display() {
    const e = this.power.numerator, t = this.power.denominator;
    let i, s;
    return n(this, kt) === 0 && t > 1 ? (i = `${t === 2 ? "sqrt" : `root(${t})`}(${this.polynom.display})`, s = e === 1 ? "" : `^(${e})`) : (i = n(this, Kt) && this.power.isOne() ? this.polynom.display : Ke(this.polynom.display, !1), s = t === 1 && e === 1 ? "" : `^(${this.power.display})`), i = `${i}${s}`, n(this, kt) === 0 && e < 0 && (i = `1/(${i})`), i;
  }
  add() {
    throw new Error("Adding two factors is not possible");
  }
  get asSingle() {
    return u(this, Kt, !0), this;
  }
  degree(e) {
    return this.polynom.degree(e).multiply(this.power);
  }
  derivative() {
    return this.power.isZero() ? [new ft("0")] : this.power.isOne() ? [new ft(this.polynom.clone().derivative())] : [
      new ft(this.power.clone()),
      new ft(this.polynom.clone().derivative()),
      new ft(this.polynom.clone(), this.power.clone().subtract(1))
    ];
  }
  develop() {
    if (this.power.isNatural())
      return this.polynom.clone().pow(this.power.value);
    throw new Error("The power must be a natural number");
  }
  divide(e) {
    if (e instanceof ft && this.isSameAs(e))
      return this.power.subtract(e.power), this;
    const t = new O(e);
    if (this.isSameAs(t))
      return this.power.subtract(1), this;
    throw new Error("The two factors must be the same");
  }
  evaluate(e, t) {
    return t ? this.polynom.evaluate(e, !0) ** this.power.value : this.polynom.evaluate(e).pow(this.power);
  }
  hasVariable(e) {
    return this.polynom.hasVariable(e);
  }
  inverse() {
    return this.power.opposite(), this;
  }
  isEqual(e) {
    return this.isSameAs(e) && this.power.isEqual(e.power);
  }
  isOne() {
    return this.polynom.isOne() || this.power.isZero();
  }
  isSameAs(e) {
    let t;
    return e instanceof ft ? t = e.polynom : e instanceof O ? t = e : t = new O(e), this.polynom.isEqual(t);
  }
  isZero() {
    return this.polynom.isZero();
  }
  multiply(e) {
    if (e instanceof ft && this.isSameAs(e))
      return this.power.add(e.power), this;
    const t = new O(e);
    if (this.isSameAs(t))
      return this.power.add(1), this;
    throw new Error("The two factors must be the same");
  }
  one() {
    return n(this, xt).one(), n(this, ut).one(), this;
  }
  opposite() {
    throw new Error("Method not implemented.");
  }
  get polynom() {
    return n(this, xt);
  }
  set polynom(e) {
    u(this, xt, e);
  }
  pow(e) {
    return this.power.multiply(e), this;
  }
  get power() {
    return n(this, ut);
  }
  set power(e) {
    u(this, ut, new d(e));
  }
  primitive() {
    throw new Error("Method not implemented.");
  }
  reduce() {
    throw new Error("Method not implemented.");
  }
  root(e) {
    return this.power.divide(e), this;
  }
  sqrt() {
    return this.root(2);
  }
  subtract() {
    throw new Error("Subtracting two factors is not possible");
  }
  tableOfSigns() {
    const e = this.power.clone().reduce(), t = this.polynom.tableOfSigns();
    return e.isStrictlyNegative() && (t.signs = le(t.signs, "z", "d")), e.denominator % 2 === 0 ? t.signs = le(t.signs, "-", "h") : e.numerator % 2 === 0 && (t.signs = le(t.signs, "-", "+")), { roots: t.roots, signs: t.signs };
  }
  get variables() {
    return this.polynom.variables;
  }
  get withPower() {
    return u(this, kt, 1), this;
  }
  get withRoot() {
    return u(this, kt, 0), this;
  }
  zero() {
    return n(this, xt).zero(), n(this, ut).one(), this;
  }
};
kt = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap();
let at = Yi;
var ee = /* @__PURE__ */ ((a) => (a[a.ROOT = 0] = "ROOT", a[a.POWER = 1] = "POWER", a))(ee || {}), ie, k, se, De, wi, pe, Ze;
const me = class rt {
  constructor(...e) {
    return w(this, pe), w(this, ie, ee.POWER), w(this, k, []), this.parse(...e), this;
  }
  parse(...e) {
    return u(this, k, []), e.length === 0 ? this : (e.forEach((t) => {
      t instanceof rt ? n(this, k).push(...t.factors.map((i) => i.clone())) : n(this, k).push(new at(t));
    }), this);
  }
  clone() {
    return new rt(...n(this, k).map((e) => e.clone()));
  }
  get tex() {
    const { num: e, den: t } = A(this, pe, Ze).call(this);
    if (t.length === 0)
      return e.length === 1 ? e[0].asSingle.tex : e.map((r) => r.tex).join("");
    const i = e.length === 1 ? e[0].asSingle.tex : e.map((r) => r.tex).join(""), s = t.length === 1 ? t[0].asSingle.tex : t.map((r) => r.tex).join("");
    return `\\frac{ ${i} }{ ${s} }`;
  }
  get display() {
    const { num: e, den: t } = A(this, pe, Ze).call(this);
    if (t.length === 0)
      return e.length === 1 ? e[0].asSingle.display : e.map(
        (r, o) => o === 0 && r.polynom.monoms.length === 1 ? r.asSingle.display : r.display
      ).join("");
    const i = e.length === 1 ? e[0].asSingle.display : e.map((r) => r.display).join(""), s = t.length === 1 ? t[0].asSingle.display : t.map((r) => r.display).join("");
    return `(${i})/(${s})`;
  }
  static gcd(...e) {
    var t;
    if (e.length === 0)
      return new rt().one();
    if (e.length === 1)
      return e[0];
    if (e.length === 2)
      return A(t = rt, se, De).call(t, e[0], e[1]);
    let i = e[0];
    return e.shift(), e.forEach((s) => {
      var r;
      return i = A(r = rt, se, De).call(r, i, s);
    }), i;
  }
  static lcm(...e) {
    if (e.length === 0)
      return new rt().one();
    if (e.length === 1)
      return e[0];
    let t = e[0];
    return e.shift(), e.forEach((i) => {
      var s;
      return t = A(s = rt, se, wi).call(s, t, i);
    }), t;
  }
  add(...e) {
    const t = [this.numerator, ...e.map((h) => h.numerator)], i = [this.denominator, ...e.map((h) => h.denominator)];
    let s;
    if (i.some((h) => h.factors.length > 0)) {
      const h = rt.lcm(...i);
      t.forEach((c, f) => {
        c.multiply(h.clone().divide(i[f]));
      }), s = h;
    }
    const r = rt.gcd(...t), o = new O(0).add(
      ...t.map((h) => h.divide(r).reduce().develop().factors[0].polynom)
    ).reduce();
    return u(this, k, [
      ...r.factors,
      new at(o)
    ]), s && this.divide(s), u(this, k, n(this, k).filter((h) => !h.power.isZero())), this;
  }
  get asPower() {
    return u(this, ie, ee.POWER), this;
  }
  get asRoot() {
    return u(this, ie, ee.ROOT), this;
  }
  degree(e) {
    return n(this, k).reduce((t, i) => t.add(i.degree(e)), new d("0"));
  }
  get denominator() {
    return new rt(
      ...n(this, k).filter((e) => e.power.isNegative()).map((e) => e.clone().inverse())
    );
  }
  derivative() {
    const e = [], t = n(this, k).length;
    for (let s = 0; s < t; s++) {
      const r = n(this, k).slice(), o = r.splice(s, 1)[0].derivative();
      e.push(
        new rt(...r, ...o)
      );
    }
    e.forEach((s) => s.reduce());
    const i = e.shift();
    return i !== void 0 && u(this, k, i.factors), this.add(...e);
  }
  develop() {
    const e = new O("1"), t = new O("1");
    return this.numerator.factors.forEach((i) => {
      e.multiply(i.develop());
    }), this.denominator.factors.forEach((i) => {
      t.multiply(i.develop());
    }), new rt().fromPolynom(e, t);
  }
  divide(e) {
    return u(this, k, n(this, k).concat(e.clone().factors.map((t) => t.inverse()))), this;
  }
  evaluate(e, t) {
    return t ? n(this, k).reduce((i, s) => i * s.evaluate(e, t), 1) : n(this, k).reduce((i, s) => i.multiply(s.evaluate(e)), new d("1"));
  }
  factorize(e) {
    const t = [];
    n(this, k).forEach((o) => {
      const h = o.polynom.factorize(e);
      if (h.length > 1) {
        const c = o.power.clone();
        t.push(...h.map((f) => new at(f, c)));
      } else
        t.push(o.clone());
    });
    const i = new rt(...t), s = i.numerator.reduce(), r = i.denominator.reduce();
    return s.divide(r);
  }
  get factors() {
    return n(this, k);
  }
  set factors(e) {
    u(this, k, e);
  }
  fromPolynom(e, t) {
    if (u(this, k, [new at(new O(e))]), t) {
      const i = new O(t);
      if (i.isOne())
        return this;
      if (i.isZero())
        throw new Error("Cannot divide by zero");
      n(this, k).push(new at(i, -1));
    }
    return this;
  }
  getZeroes() {
    const e = [].concat(...n(this, k).map((t) => t.polynom.getZeroes()));
    return e.sort((t, i) => t.value - i.value), e.filter(
      (t, i, s) => i === s.findIndex(
        (r) => r.value === t.value
      )
    );
  }
  hasVariable(e) {
    return n(this, k).some((t) => t.hasVariable(e));
  }
  inverse() {
    return u(this, k, n(this, k).map((e) => e.inverse())), this;
  }
  isEqual(e) {
    const t = rt.gcd(this, e), i = this.clone().divide(t).reduce(), s = e.clone().divide(t).reduce();
    return i.isOne() && s.isOne();
  }
  isOne() {
    return n(this, k).every((e) => e.isOne());
  }
  isZero() {
    return n(this, k).every((e) => e.isZero());
  }
  multiply(...e) {
    return e.forEach((t) => {
      u(this, k, n(this, k).concat(t.clone().factors));
    }), this;
  }
  get numerator() {
    return new rt(...n(this, k).filter((e) => e.power.isPositive()));
  }
  one() {
    return u(this, k, [new at("1", "1")]), this;
  }
  opposite() {
    const e = n(this, k).findIndex((t) => t.display === "(-1)");
    return e >= 0 ? n(this, k).splice(e, 1) : n(this, k).push(new at("-1", "1")), this;
  }
  pow(e) {
    return u(this, k, n(this, k).map((t) => t.pow(e))), this;
  }
  primitive() {
    throw new Error("Method not implemented.");
  }
  reduce() {
    const e = te(this);
    return u(this, k, Object.values(e).map((t) => {
      const i = t[0].polynom, s = t.reduce((r, o) => r.add(o.power), new d("0"));
      return new at(i, s.reduce());
    }).filter((t) => !t.power.isZero())), this;
  }
  root(e) {
    return u(this, k, n(this, k).map((t) => t.root(e))), this;
  }
  /**
   * Reoarder the factors using :
   * 1. number of monoms
   * 2. degree of polynom
   * 3. power of polyfactor
   */
  sort(e) {
    return n(this, k).sort((t, i) => {
      const s = t.power.value, r = i.power.value;
      if (s * r < 0)
        return -s;
      const o = t.polynom.monoms.length, h = i.polynom.monoms.length;
      if (o !== h)
        return o - h;
      const c = t.polynom.degree(e).value, f = i.polynom.degree(e).value;
      return c !== f ? c - f : s !== r ? s - r : t.degree().isLeq(i.degree()) ? -1 : 1;
    }), this;
  }
  sqrt() {
    return u(this, k, n(this, k).map((e) => e.sqrt())), this;
  }
  subtract(...e) {
    return this.add(...e.map((t) => t.opposite()));
  }
  tableOfSigns() {
    const e = this.getZeroes(), t = e.map((s) => s.value), i = this.factors.map((s) => ({ factor: new at(s), ...s.tableOfSigns() }));
    return i.forEach((s) => {
      const r = new Array(2 * e.length + 1).fill("");
      let o = s.signs.shift(), h = s.roots.shift();
      const c = r.map((f, p) => {
        if (p % 2 === 0)
          return o;
        if (h === void 0 || h.value !== t[(p - 1) / 2])
          return "t";
        const g = s.signs.shift();
        return o = s.signs.shift(), h = s.roots.shift(), g;
      });
      s.roots = e, s.signs = c;
    }), { signs: i.map((s) => s.signs).reduce((s, r) => s.length === 0 ? r : (r.forEach((o, h) => {
      switch (o) {
        case "d":
          s[h] = "d";
          break;
        case "z":
          s[h] = s[h] === "d" ? "d" : "z";
          break;
        case "h":
          s[h] = "h";
          break;
        case "-":
          s[h] = s[h] === "h" ? "h" : s[h] === "-" ? "+" : "-";
          break;
      }
    }), s), []), roots: e, factors: i };
  }
  get variables() {
    return n(this, k).reduce((e, t) => e.concat(t.variables), []);
  }
  zero() {
    return u(this, k, [new at("0", "1")]), this;
  }
};
ie = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), se = /* @__PURE__ */ new WeakSet(), De = function(a, e) {
  const t = te(a), i = te(e), s = Object.keys(t).filter((r) => Object.hasOwn(i, r)).map((r) => {
    const o = t[r].reduce((c, f) => c.add(f.power), new d("0")), h = i[r].reduce((c, f) => c.add(f.power), new d("0"));
    return new at(r, d.min(o, h));
  });
  return new me(...s);
}, wi = function(a, e) {
  const t = te(a), i = te(e), s = [.../* @__PURE__ */ new Set([...Object.keys(t), ...Object.keys(i)])].map((r) => {
    const o = Object.hasOwn(t, r) ? t[r].reduce((c, f) => c.add(f.power), new d("0")) : new d(0), h = Object.hasOwn(i, r) ? i[r].reduce((c, f) => c.add(f.power), new d("0")) : new d(0);
    return new at(r, d.max(o, h));
  });
  return new me(...s);
}, pe = /* @__PURE__ */ new WeakSet(), Ze = function() {
  let a, e = [];
  return n(this, ie) === ee.ROOT ? (a = this.numerator.factors, e = this.denominator.factors) : a = n(this, k), a.length === 0 && (a = [new at("1")]), { num: a, den: e };
}, w(me, se);
let Te = me;
function te(a) {
  const e = new d().one(), t = new d().one(), i = a.factors.reduce((o, h) => {
    if (h.polynom.degree().isZero())
      return h.power.isPositive() ? e.multiply(h.polynom.monoms[0].coefficient) : t.multiply(h.polynom.monoms[0].coefficient), o;
    const c = h.polynom.display;
    return Object.hasOwn(o, c) ? o[c].push(h) : o[c] = [h], o;
  }, {}), { numerator: s, denominator: r } = e.divide(t).reduce();
  return s !== 1 && (i[s.toString()] = [new at(s, 1)]), r !== 1 && (i[r.toString()] = [new at(r, -1)]), i;
}
function Xi(a, e) {
  return a.dimension === e.dimension && a.array.every(
    (t, i) => e.array[i].isEqual(t)
  );
}
function Ji(a, e) {
  if (a.dimension !== e.dimension)
    return !1;
  const t = e.array[0].value / a.array[0].value;
  return a.array.every(
    (i, s) => e.array[s].value === i.value * t
  );
}
function Hi(a, e) {
  return a.dimension !== e.dimension ? new d().invalid() : a.array.reduce(
    (t, i, s) => t.add(i.clone().multiply(e.array[s])),
    new d(0)
  );
}
var Z, It;
const Ki = class Mt {
  constructor(...e) {
    w(this, Z, []), w(this, It, !1), l(this, "zero", () => (n(this, Z).forEach((t) => t.zero()), this)), l(this, "one", () => (this.zero(), this.x.one(), this)), l(this, "opposite", () => (n(this, Z).forEach((t) => t.opposite()), this)), l(this, "add", (t) => (n(this, Z).forEach((i, s) => i.add(t.array[s])), this)), l(this, "subtract", (t) => this.add(t.clone().opposite())), l(this, "unit", () => {
      const t = this.norm;
      return t === 0 ? this : this.divideByScalar(t);
    }), l(this, "dot", (t) => Hi(this, t)), l(this, "normal", () => {
      if (this.dimension >= 3)
        throw new Error("Normal vector can only be determined in 2D");
      const t = this.x.clone().opposite(), i = this.y.clone();
      return n(this, Z)[0] = i, n(this, Z)[1] = t, this;
    }), l(this, "isEqual", (t) => Xi(this, t)), l(this, "isColinearTo", (t) => Ji(this, t)), l(this, "isNormalTo", (t) => this.dot(t).isZero()), l(this, "multiplyByScalar", (t) => {
      const i = new d(t);
      return this.array.forEach((s) => s.multiply(i)), this;
    }), l(this, "divideByScalar", (t) => this.multiplyByScalar(new d(t).inverse())), l(this, "simplify", () => this.multiplyByScalar(
      W.lcm(...this.array.map((t) => t.denominator))
    ).divideByScalar(
      W.gcd(...this.array.map((t) => t.numerator))
    ).multiplyByScalar(
      this.x.isNegative() ? -1 : 1
    )), l(this, "angle", (t, i, s) => {
      let r = this.dot(t).value;
      return i && (r = Math.abs(r)), (s ? 1 : 180 / Math.PI) * Math.acos(r / (this.norm * t.norm));
    }), l(this, "fromString", (t) => {
      t.startsWith("(") && (t = t.substring(1)), t.endsWith(")") && (t = t.substring(0, t.length - 1));
      const i = t.split(/[,;\s]/g).filter((s) => s.trim() !== "");
      return i.length < 2 ? this : (u(this, Z, i.map((s) => new d(s))), this);
    }), e.length > 0 && this.parse(...e);
  }
  // ------------------------------------------
  // Getter and setter
  // ------------------------------------------
  get array() {
    return n(this, Z);
  }
  set array(e) {
    u(this, Z, e);
  }
  get x() {
    return n(this, Z)[0];
  }
  set x(e) {
    n(this, Z)[0] = new d(e);
  }
  get y() {
    return n(this, Z)[1];
  }
  set y(e) {
    n(this, Z)[1] = new d(e);
  }
  get z() {
    if (this.dimension < 3)
      throw new Error("Vector is not 3D");
    return n(this, Z)[2];
  }
  set z(e) {
    if (this.dimension < 3)
      throw new Error("Vector is not 3D");
    n(this, Z)[2] = new d(e);
  }
  get asPoint() {
    return n(this, It);
  }
  set asPoint(e) {
    u(this, It, e);
  }
  get normSquare() {
    return this.array.reduce((e, t) => e.add(t.clone().pow(2)), new d(0));
  }
  get norm() {
    return Math.sqrt(this.normSquare.value);
  }
  get tex() {
    return n(this, It) ? `\\left(${this.array.map((e) => e.tex).join(";")}\\right)` : `\\begin{pmatrix} ${this.array.map((e) => e.tex).join(" \\\\ ")} \\end{pmatrix}`;
  }
  get display() {
    return n(this, It) ? `(${this.array.map((e) => e.display).join(";")})` : `((${this.array.map((e) => e.display).join(",")}))`;
  }
  setDimension(e = 2) {
    if (e < 2)
      throw new Error("Dimension must be at least 2");
    if (e < this.dimension)
      u(this, Z, n(this, Z).slice(0, e));
    else if (e > this.dimension)
      for (let t = this.dimension; t < e; t++)
        n(this, Z).push(new d(0));
    return this;
  }
  get dimension() {
    return this.array.length;
  }
  // ------------------------------------------
  // Creation / parsing functions
  // ------------------------------------------
  get isNull() {
    return this.array.every((e) => e.isZero());
  }
  static asTex(...e) {
    return `\\begin{pmatrix} ${e.join(" \\\\ ")} \\end{pmatrix}`;
  }
  static asDisplay(...e) {
    return `((${e.join(",")}))`;
  }
  defineAsPoint(e) {
    return u(this, It, e !== !1), this;
  }
  parse(...e) {
    if (e.length === 0)
      throw new Error("Invalid value");
    if (e.length === 1) {
      if (e[0] instanceof Mt)
        return e[0].clone();
      if (typeof e[0] == "string")
        return this.fromString(e[0]);
      throw new Error("Invalid value");
    }
    if (e.length === 2) {
      const [t, i] = e;
      if (t instanceof Mt && i instanceof Mt) {
        if (t.dimension !== i.dimension)
          throw new Error("Vectors must have the same dimension");
        return u(this, Z, i.array.map((s, r) => s.clone().subtract(t.array[r]))), this;
      }
    }
    return u(this, Z, e.map((t) => new d(t))), this;
  }
  clone() {
    const e = new Mt();
    return e.array = this.copy(), e.asPoint = this.asPoint, e;
  }
  copy() {
    return n(this, Z).map((e) => e.clone());
  }
  middleOf(e, t) {
    if (e.dimension !== t.dimension)
      throw new Error("Vectors must be the same dimension");
    return this.array = [], e.array.forEach((i, s) => {
      this.array.push(i.clone().add(t.array[s]).divide(2));
    }), this;
  }
  translate(...e) {
    return this.array.forEach((t, i) => t.add(e[i])), this;
  }
  cross(e) {
    if (this.dimension !== 3 || e.dimension !== 3)
      throw new Error("Cross product can only be determined in 3D");
    return new Mt(
      this.y.clone().multiply(e.z).subtract(this.z.clone().multiply(e.y)),
      this.z.clone().multiply(e.x).subtract(this.x.clone().multiply(e.z)),
      this.x.clone().multiply(e.y).subtract(this.y.clone().multiply(e.x))
    );
  }
  isZero() {
    return this.array.every((e) => e.isZero());
  }
  isOne() {
    return this.array.every((e, t) => t === 0 ? e.isOne() : e.isZero());
  }
  distanceTo(e) {
    const t = new Mt(this, e);
    return {
      value: t.norm,
      fraction: t.normSquare,
      tex: t.tex
    };
  }
};
Z = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap();
let P = Ki;
var pt = /* @__PURE__ */ ((a) => (a.None = "none", a.Parallel = "parallel", a.Perpendicular = "perpendicular", a.Tangent = "tangent", a))(pt || {}), We = /* @__PURE__ */ ((a) => (a.None = "none", a.Parallel = "parallel", a.Perpendicular = "perpendicular", a.Tangent = "tangent", a))(We || {});
function ts(a = 0.5) {
  return Math.random() < a;
}
function re(a, e, t) {
  return e === void 0 ? a >= 0 ? re(0, a) : re(a, 0) : a === e ? a : Math.floor(Math.random() * (e - a + 1) + a);
}
function ge(a, e) {
  return e === !1 ? ts() ? re(1, a) : -re(1, a) : re(-a, a);
}
class ne extends P {
  constructor(...e) {
    super(), e.length > 0 && this.parse(...e);
  }
  parse(...e) {
    if (this.asPoint = !0, e.length === 1) {
      if (e[0] instanceof P)
        return this.array = e[0].copy(), this;
      if (typeof e[0] == "string")
        return this.fromString(e[0]), this;
    }
    if (e.length > 1) {
      if (e.some((i) => i instanceof P))
        throw new Error("Creating a point with  multiple argument requires an input fraction");
      const t = e.map((i) => new d(i));
      if (t.some((i) => i.isNaN()))
        throw new Error("The value is not a valid point sting (a,b): " + e.join(","));
      this.array = t;
    }
    return this;
  }
  clone() {
    const e = new ne();
    return e.array = this.copy(), e.asPoint = !0, e;
  }
}
var Et, R, V, U, nt, H, $t, dt;
const ti = class xe {
  /**
   * Value can be a mix of:
   *
   * @param values
   */
  constructor(...e) {
    return w(this, Et), w(this, R), w(this, V), w(this, U), w(this, nt), w(this, H), w(this, $t), w(this, dt, "canonical"), l(this, "randomPoint", (t) => {
      const i = n(this, H).clone().multiplyByScalar(ge(t === void 0 || t <= 1 ? 3 : t, !1)).add(n(this, nt));
      return i.asPoint = !0, i;
    }), l(this, "randomNearPoint", (t) => {
      const i = this.randomPoint(t);
      let s = 10;
      for (; this.isOnLine(i) && s > 0; )
        i.x.add(ge(1, !1)), i.y.add(ge(1, !1)), s--;
      return i;
    }), l(this, "parse", (...t) => {
      if (t.length === 0)
        return this;
      if (t.length === 1) {
        if (t[0] instanceof xe)
          return this.fromCoefficient(t[0].a, t[0].b, t[0].c);
        if (t[0] instanceof mt)
          return this.fromEquation(t[0]);
        if (typeof t[0] == "string")
          try {
            const i = new mt(t[0]);
            return this.parse(i);
          } catch {
            return this;
          }
      }
      if (t.length === 2 && t.every((i) => i instanceof P)) {
        const i = t;
        if (i[0].asPoint && i[1].asPoint)
          return this.fromPointAndDirection(i[0], new P(i[0], i[1]));
        if (i[0].asPoint && !i[1].asPoint)
          return this.fromPointAndDirection(i[0], i[1]);
      }
      if (t.length === 3) {
        if (t[0] instanceof P && t[1] instanceof P) {
          if (t[2] === pt.Perpendicular)
            return this.fromPointAndNormal(t[0], t[1]);
          if (t[2] === pt.Parallel)
            return this.fromPointAndDirection(t[0], t[1]);
        }
        return t[0] instanceof P && t[1] instanceof xe ? t[2] === pt.Parallel || t[2] === null ? this.fromPointAndLine(t[0], t[1], pt.Parallel) : this.fromPointAndLine(t[0], t[1], pt.Perpendicular) : this.fromCoefficient(
          t[0],
          t[1],
          t[2]
        );
      }
      return console.log("Something wrong happened while creating the line"), console.log(t), this;
    }), l(this, "fromEquation", (t) => {
      t.reorder(!0);
      const i = new Set(t.letters());
      if (!(i.has("x") || i.has("y")))
        return this;
      for (const s of ["x", "y"])
        i.has(s) && i.delete(s);
      return i.size > 0 ? this : this.fromCoefficient(
        t.left.monomByLetter("x").coefficient,
        t.left.monomByLetter("y").coefficient,
        t.left.monomByDegree(0).coefficient
      );
    }), l(this, "fromCoefficient", (t, i, s) => (u(this, R, new d(t)), u(this, V, new d(i)), u(this, U, new d(s)), u(this, H, new P(n(this, V).clone(), n(this, R).clone().opposite())), u(this, nt, new P(new d().zero(), n(this, U).clone())), u(this, $t, n(this, H).clone().normal()), this)), l(this, "fromPointAndDirection", (t, i) => (this.fromCoefficient(
      i.y,
      i.x.clone().opposite(),
      t.x.clone().multiply(i.y).subtract(t.y.clone().multiply(i.x)).opposite()
    ), u(this, nt, t.clone()), u(this, H, i.clone()), u(this, $t, n(this, H).clone().normal()), this)), l(this, "fromPointAndNormal", (t, i) => this.fromCoefficient(
      i.x,
      i.y,
      t.x.clone().multiply(i.x).add(t.y.clone().multiply(i.y)).opposite()
    )), l(this, "fromPointAndLine", (t, i, s) => (s === void 0 && (s = pt.Parallel), s === pt.Parallel ? this.fromPointAndNormal(t, i.normal) : s === pt.Perpendicular ? this.fromPointAndNormal(t, i.director) : this)), l(this, "clone", () => (u(this, R, n(this, R).clone()), u(this, V, n(this, V).clone()), u(this, U, n(this, U).clone()), u(this, H, n(this, H).clone()), u(this, nt, n(this, nt).clone()), u(this, $t, n(this, $t).clone()), this)), l(this, "isOnLine", (t) => n(this, R).clone().multiply(t.x).add(
      n(this, V).clone().multiply(t.y)
    ).add(n(this, U)).isZero()), l(this, "isParallelTo", (t) => this.slope.isEqual(t.slope) && this.height.isNotEqual(t.height)), l(this, "isSameAs", (t) => this.slope.isEqual(t.slope) && this.height.isEqual(t.height)), l(this, "isPerpendicularTo", (t) => this.d.isNormalTo(t.d)), l(this, "isVertical", () => this.slope.isInfinity()), l(this, "simplify", () => {
      const t = W.lcm(n(this, R).denominator, n(this, V).denominator, n(this, U).denominator), i = W.gcd(n(this, R).numerator, n(this, V).numerator, n(this, U).numerator);
      return this.fromCoefficient(
        n(this, R).clone().multiply(t).divide(i),
        n(this, V).clone().multiply(t).divide(i),
        n(this, U).clone().multiply(t).divide(i)
      ), this;
    }), l(this, "simplifyDirection", () => (n(this, H).simplify(), this)), l(this, "intersection", (t) => {
      const i = new ne();
      let s = !1, r = !1;
      return n(this, V).isZero() || t.b.isZero(), this.isParallelTo(t) ? (i.x = new d().invalid(), i.y = new d().invalid(), s = !0) : this.isSameAs(t) ? (i.x = new d().invalid(), i.y = new d().invalid(), r = !0) : (i.x = n(this, V).clone().multiply(t.c).subtract(n(this, U).clone().multiply(t.b)).divide(n(this, R).clone().multiply(t.b).subtract(n(this, V).clone().multiply(t.a))), i.y = n(this, R).clone().multiply(t.c).subtract(n(this, U).clone().multiply(t.a)).divide(n(this, V).clone().multiply(t.a).subtract(n(this, R).clone().multiply(t.b)))), {
        point: i,
        hasIntersection: !(s || r),
        isParallel: s,
        isSame: r
      };
    }), l(this, "getValueAtX", (t) => {
      const i = this.getEquation().isolate("y"), s = new d(t);
      return i instanceof mt ? i.right.evaluate({ x: s }) : new d().invalid();
    }), l(this, "getValueAtY", (t) => {
      const i = this.getEquation().isolate("x"), s = new d(t);
      return i instanceof mt ? i.right.evaluate({ y: s }) : new d().invalid();
    }), u(this, R, new d().zero()), u(this, V, new d().zero()), u(this, U, new d().zero()), u(this, nt, new P()), u(this, H, new P()), u(this, $t, new P()), u(this, Et, !0), e.length > 0 && this.parse(...e), this;
  }
  get a() {
    return n(this, R);
  }
  // ------------------------------------------
  // Getter and setter
  set a(e) {
    u(this, R, e);
  }
  get b() {
    return n(this, V);
  }
  set b(e) {
    u(this, V, e);
  }
  get c() {
    return n(this, U);
  }
  set c(e) {
    u(this, U, e);
  }
  get OA() {
    return n(this, nt);
  }
  set OA(e) {
    u(this, nt, e);
  }
  get d() {
    return n(this, H);
  }
  set d(e) {
    u(this, H, e);
  }
  get n() {
    return n(this, $t);
  }
  // ------------------------------------------
  getEquation() {
    const e = new mt(new O().parse("xy", n(this, R), n(this, V), n(this, U)), new O("0"));
    return n(this, Et) ? e.simplify() : e;
  }
  // get system(): { x: Equation, y: Equation } {
  //     const e1 = new Equation(
  //         new Polynom('x'),
  //         new Polynom(this.#OA.x)
  //             .add(new Monom('k').multiply(this.#d.x))
  //     ),
  //         e2 = new Equation(
  //             new Polynom('y'),
  //             new Polynom(this.#OA.y)
  //                 .add(new Monom('k').multiply(this.#d.y))
  //         )
  //     return { x: e1, y: e2 }
  // }
  get canonical() {
    return u(this, dt, "canonical"), this;
  }
  get equation() {
    return u(this, dt, "equation"), this;
  }
  get mxh() {
    return u(this, dt, "mxh"), this;
  }
  get parametric() {
    return u(this, dt, "parametric"), this;
  }
  get system() {
    return u(this, dt, "system"), this;
  }
  get tex() {
    const e = n(this, dt);
    switch (u(this, dt, "canonical"), e) {
      case "equation":
        return this.getEquation().reorder().tex;
      case "mxh":
        return this.slope.isInfinity() ? "x=" + this.OA.x.tex : "y=" + new O().parse("x", this.slope, this.height).tex;
      case "parametric":
      case "system": {
        const t = n(this, H).clone();
        return n(this, Et) && t.simplify(), e === "parametric" ? `${P.asTex("x", "y")} = ${P.asTex(n(this, nt).x.tex, n(this, nt).y.tex)} + k\\cdot ${P.asTex(t.x.tex, t.y.tex)}` : `\\left\\{\\begin{aligned}
            x &= ${new O(n(this, nt).x).add(new M(n(this, H).x).multiply(new M("k"))).reorder("k", !0).tex}\\\\ 
            y &= ${new O(n(this, nt).y).add(new M(n(this, H).y).multiply(new M("k"))).reorder("k", !0).tex}
            \\end{aligned}\\right.`;
      }
      default: {
        const t = this.getEquation();
        return n(this, R).isNegative() && t.multiply(-1), t.tex;
      }
    }
  }
  get reduceBeforeDisplay() {
    return n(this, Et);
  }
  set reduceBeforeDisplay(e) {
    u(this, Et, e);
  }
  get display() {
    const e = n(this, dt);
    switch (u(this, dt, "canonical"), e) {
      case "equation":
        return this.getEquation().reorder().display;
      case "mxh":
        return this.slope.isInfinity() ? "x=" + this.OA.x.display : "y=" + new O().parse("x", this.slope, this.height).display;
      case "parametric": {
        const t = n(this, H).clone();
        return n(this, Et) && t.simplify(), `((x,y))=((${n(this, nt).x.display},${n(this, nt).y.display}))+k((${t.x.display},${t.y.display}))`;
      }
      default: {
        const t = this.getEquation();
        return n(this, R).isNegative() && t.multiply(-1), t.display;
      }
    }
  }
  get normal() {
    return new P(n(this, R), n(this, V));
  }
  get director() {
    return n(this, H).clone();
  }
  get slope() {
    return n(this, R).clone().opposite().divide(n(this, V));
  }
  get height() {
    return n(this, U).clone().opposite().divide(n(this, V));
  }
  fromPoints(e, t) {
    return this.fromPointAndDirection(e, new P(e, t));
  }
  distanceTo(e) {
    const t = e.x.clone().multiply(n(this, R)).add(e.y.clone().multiply(n(this, V))).add(n(this, U)).abs(), i = this.normal.normSquare;
    if (i.isZero())
      return {
        value: NaN,
        tex: "Not a line",
        fraction: new d().infinite()
      };
    const s = t.value / Math.sqrt(i.value), r = t.clone().divide(i.clone().sqrt());
    return i.isSquare() ? {
      value: s,
      tex: r.tex,
      fraction: r
    } : {
      value: s,
      tex: `\\frac{${t.tex}}{\\sqrt{${i.tex}}}`,
      fraction: r
    };
  }
  hitSegment(e, t) {
    const i = this.intersection(
      new xe().fromPoints(e, t)
    );
    return i.hasIntersection ? i.point.x.value >= Math.min(e.x.value, t.x.value) && i.point.x.value <= Math.max(e.x.value, t.x.value) && i.point.y.value >= Math.min(e.y.value, t.y.value) && i.point.y.value <= Math.max(e.y.value, t.y.value) : !1;
  }
  // ------------------------------------------
  // Special functions
  // ------------------------------------------
  canonicalAsFloatCoefficient(e) {
    e === void 0 && (e = 2);
    let t = "";
    return n(this, R).isZero() || (n(this, R).isOne() ? t = "x" : n(this, R).clone().opposite().isOne() ? t = "-x" : t = n(this, R).value.toFixed(e) + "x"), n(this, V).isZero() || (n(this, V).isPositive() && (t += "+"), t += n(this, V).value.toFixed(e) + "y"), n(this, U).isZero() || (n(this, U).isPositive() && (t += "+"), t += n(this, U).value.toFixed(e)), t + "=0";
  }
};
Et = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), // A line is defined as the canonical form
l(ti, "PERPENDICULAR", pt.Perpendicular), l(ti, "PARALLEL", pt.Parallel);
var z, G;
const ei = class vi {
  constructor(e, t) {
    return w(this, z, new ne()), w(this, G, new P()), l(this, "clone", () => (u(this, G, n(this, G).clone()), u(this, z, n(this, z).clone()), this)), l(this, "isOnLine", (i) => !1), l(this, "isParallelTo", (i) => {
      throw new Error("Method not implemented.");
    }), l(this, "isSameAs", (i) => {
      throw new Error("Method not implemented.");
    }), l(this, "isPerpendicularTo", (i) => {
      throw new Error("Method not implemented.");
    }), l(this, "isVertical", () => {
      throw new Error("Method not implemented.");
    }), l(this, "simplify", () => {
      throw new Error("Method not implemented.");
    }), l(this, "intersection", (i) => {
      throw new Error("Method not implemented.");
    }), l(this, "randomPoint", (i = 5) => {
      const s = n(this, z).clone(), r = new d(ge(i, !1));
      return new ne(
        s.x.clone().add(n(this, G).x.clone().multiply(r)),
        s.y.clone().add(n(this, G).y.clone().multiply(r)),
        s.z.clone().add(n(this, G).z.clone().multiply(r))
      );
    }), u(this, z, e.clone()), u(this, G, t.asPoint ? new P(e, t) : t.clone()), this;
  }
  get OA() {
    return n(this, z);
  }
  set OA(e) {
    u(this, z, e);
  }
  get point() {
    return n(this, z).clone();
  }
  get d() {
    return n(this, G);
  }
  set d(e) {
    u(this, G, e);
  }
  get tex() {
    return {
      parametric: `${P.asTex("x", "y", "z")} = ${P.asTex(n(this, z).x.tex, n(this, z).y.tex, n(this, z).z.tex)} + k\\cdot ${P.asTex(n(this, G).x.tex, n(this, G).y.tex, n(this, G).z.tex)}`,
      system: `\\left\\{\\begin{aligned}
    x &= ${new O(n(this, z).x).add(new M(n(this, G).x).multiply(new M("k"))).reorder("k", !0).tex}\\\\ 
    y &= ${new O(n(this, z).y).add(new M(n(this, G).y).multiply(new M("k"))).reorder("k", !0).tex}\\\\
    z &= ${new O(n(this, z).z).add(new M(n(this, G).z).multiply(new M("k"))).reorder("k", !0).tex}
\\end{aligned}\\right.`,
      cartesian: `\\frac{ ${new O("x", 1, n(this, z).x.clone().opposite()).tex} }{ ${this.direction.x.tex} } = \\frac{ ${new O("y", 1, n(this, z).y.clone().opposite()).tex} }{ ${this.direction.y.tex} } = \\frac{ ${new O("z", 1, n(this, z).z.clone().opposite()).tex} }{ ${this.direction.z.tex} }`
    };
  }
  get display() {
    const e = n(this, z).x.display, t = n(this, z).y.display, i = n(this, z).z.display, s = this.direction.simplify(), r = s.x.display, o = s.y.display, h = s.z.display;
    return {
      parametric: `${P.asDisplay("x", "y", "z")} = ${P.asDisplay(n(this, z).x.display, n(this, z).y.display, n(this, z).z.display)} + k\\cdot ${P.asDisplay(n(this, G).x.display, n(this, G).y.display, n(this, G).z.display)}`,
      system: "",
      cartesian: `(x-${e})/${r} = (y-${t})/${o} = (z-${i})/${h}`
    };
  }
  get direction() {
    return n(this, G).clone();
  }
  distanceTo(e) {
    const t = new P(n(this, z), e), i = this.direction, s = this.direction.normSquare, r = t.cross(i).normSquare, o = r.clone().divide(s), h = o.clone().sqrt();
    return console.log("CROSS", t.cross(i).display), {
      value: Math.sqrt(o.value),
      fraction: o.clone().sqrt(),
      tex: h.isExact() ? h.tex : `\\sqrt{${o.tex}}`
    };
  }
  hitSegment(e, t) {
    const i = this.intersection(
      new vi(e, t)
    );
    return i.hasIntersection ? i.point.x.value >= Math.min(e.x.value, t.x.value) && i.point.x.value <= Math.max(e.x.value, t.x.value) && i.point.y.value >= Math.min(e.y.value, t.y.value) && i.point.y.value <= Math.max(e.y.value, t.y.value) && i.point.z.value >= Math.min(e.z.value, t.z.value) && i.point.z.value <= Math.max(e.z.value, t.z.value) : !1;
  }
};
z = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), // A line is defined as the canonical form
l(ei, "PERPENDICULAR", We.Perpendicular), l(ei, "PARALLEL", We.Parallel);
class j {
  constructor(e) {
    C(this, "_secondaryChecker");
    C(this, "_config");
    C(this, "_type");
    C(this, "_description");
    C(this, "_answer");
    this._description = "", this._answer = "", e === void 0 ? this._config = [] : typeof e == "string" ? this._config = e.split(",") : this._config = [...e], this._secondaryChecker = null;
  }
  get secondaryChecker() {
    return this._secondaryChecker;
  }
  set secondaryChecker(e) {
    this._secondaryChecker = e;
  }
  get config() {
    return this._config;
  }
  set config(e) {
    this._config = e;
  }
  get type() {
    return this._type;
  }
  set type(e) {
    this._type = e;
  }
  get description() {
    return this._description;
  }
  set description(e) {
    this._description = e;
  }
  get answer() {
    return this._answer;
  }
  set answer(e) {
    this._answer = e;
  }
  check(e, t) {
    if (this.answer = e, t === "")
      return {
        result: !1,
        message: "Veuillez entrer une valeur"
      };
    let i = "";
    return e === t ? {
      result: !0,
      message: i
    } : (i = this.checkFormat(t), i !== "" ? {
      result: !1,
      message: i
    } : (i = this.checkValue(t), i !== "" ? {
      result: !1,
      message: i
    } : {
      result: !0,
      message: ""
    }));
  }
  checkFormat(e) {
    return e ? "" : "Veuillez entrer une réponse";
  }
  checkValue(e) {
    return "La réponse n'est pas correcte";
  }
}
const es = `polynom,[paramètres]

**paramètres**
- f=factorisé
- F=entièrement factorisé \\((2x+4)(x-3)\\) ne passe pas.
- d=développé
- s=forme du sommet \\(a(x-b)^2+c\\)
`;
class Ye extends j {
  constructor(e) {
    super(e), this.type = E.POLYNOMIAL, this.description = es;
  }
  get format() {
    const e = [];
    return this.config.includes("f") || this.config.includes("factors") ? e.push("factorisé") : this.config.includes("F") || this.config.includes("FACTORS") ? e.push("entièrement factorisé") : (this.config.includes("d") || this.config.includes("develop")) && e.push("développé"), `polynôme ${e.join(", ")}`;
  }
  checkFormat(e) {
    try {
      return new O(e), "";
    } catch {
      return "Le polynôme n'est pas formé correctement.";
    }
  }
  checkValue(e) {
    const t = new O(e);
    if (!new O(this.answer).isEqual(t))
      return "Le polynôme n'est pas le même.";
    if (this.config.includes("f") || this.config.includes("factor") || this.config.includes("F") || this.config.includes("FACTORS"))
      try {
        return "";
      } catch {
        return "Le polynôme n'est pas (entièrement) factorisé.";
      }
    return (this.config.includes("d") || this.config.includes("develop")) && !t.isDeveloped(e) ? "Le polynôme n'est pas (entièrement) développé." : this.config.includes("s") || this.config.includes("sommet") ? e.match(
      /(-?[\d]+(\/\d+)?)?\(x([+-](\d+(\/\d+)?)?)?\)\^2([+-]\d+(\/\d+)?)?/
    ) || e.match(/(-?[\d]+(\/\d+)?)?x\^2([+-]\d+(\/\d+)?)?/) ? "" : "L'équation n'est pas dans le bon format." : "";
  }
}
const is = `equation,[paramètres]

**paramètres**
- r=réduit
- circle=forme centre rayon
- 2d=équation de la droite en 2D (ax+by+c=0)
- mx+h=droite du plan, sous la forme y=mx+h
- sommet=forme du sommet
- 3d=équation du plan en 3D (ax+by+cz+d=0)
`;
var Vt, zt, Ft, Dt, Zt, Wt;
class ss extends j {
  constructor(t) {
    super(t);
    vt(this, Vt, !1);
    vt(this, zt, !1);
    vt(this, Ft, !1);
    vt(this, Dt, !1);
    vt(this, Zt, !1);
    vt(this, Wt, !1);
    this.type = E.CARTESIAN, this.description = is, bt(this, Vt, this.config.includes("r") || this.config.includes("reduced") || this.config.includes("re")), bt(this, zt, this.config.includes("circle")), bt(this, Ft, this.config.includes("2d")), bt(this, Dt, this.config.includes("mx+h")), bt(this, Zt, this.config.includes("minmax")), bt(this, Wt, this.config.includes("3d")), this.secondaryChecker = new Ye(["s"]);
  }
  get format() {
    const t = [];
    return Y(this, zt) && t.push("du cercle, forme centre - rayon"), Y(this, Ft) && t.push("de la droite du plan, forme ax+by+c=0"), Y(this, Dt) && t.push("de la droite du plan, forme y=mx+h"), Y(this, Zt) && t.push("de la droite du plan, forme du sommet"), Y(this, Wt) && t.push("de l'équation du plan, forme ax+by+cz+d=0"), Y(this, Vt) && t.push("réduite"), `équation ${t.join(", ")}`;
  }
  checkFormat(t) {
    if (!t.includes("="))
      return "il manque un signe d'égalité.";
    try {
      new mt(t);
    } catch {
      return "l'équation n'est pas correctement formée.";
    }
    return "";
  }
  checkValue(t) {
    var h;
    const i = new mt(t), s = new mt(this.answer), r = i.clone().moveLeft(), o = s.clone().moveLeft();
    if (r.simplify(), o.simplify(), !r.isLinearTo(o))
      return "l'équation n'est pas juste.";
    if (Y(this, Ft) || Y(this, Wt)) {
      if (i.right.variables.length > 0)
        return "Toutes les variables doivent être à gauche.";
      if (i.left.variables.length >= 2 && !i.right.isZero())
        return "l'équation n'est pas correctement formée.";
    }
    if (Y(this, Dt) && (i.left.variables.length === 2 || i.left.variables.length === 1 && !i.left.monoms[0].coefficient.isOne()))
      return "Il faut isoler la variable y à gauche.";
    if (Y(this, Zt)) {
      const [c, f] = t.split("="), [p, g] = this.answer.split("="), N = c === "y" ? c : f, I = c === "y" ? f : c, D = p === "y" ? g : p;
      return N !== "y" ? "Un côté de l'équation doit juste être (y)" : ((h = this.secondaryChecker) == null ? void 0 : h.check(D, I).message) ?? "";
    }
    if (Y(this, zt)) {
      if (i.degree("x").value !== 2 || i.degree("y").value !== 2)
        return "L'équation n'a pas les bons degrés.";
      let c = "";
      if (i.left.degree("x").value === 2 && i.right.degree("x").isZero() && i.left.degree("y").value === 2 && i.right.degree("y").isZero())
        c = t.split("=")[0];
      else if (i.right.degree("x").value === 2 && i.left.degree("x").isZero() && i.right.degree("y").value === 2 && i.left.degree("y").isZero())
        c = t.split("=")[1];
      else
        return "L'équation n'est pas correctement formée pour la forme centre - rayon.";
      return c = c.replaceAll("^(2)", "^2"), c.match(/\(x[+-][0-9/]+\)\^2\+\(y[+-][0-9/]+\)\^2/) || c.match(/x\^2\+\(y[+-][0-9/]+\)\^2/) || c.match(/\(x[+-][0-9/]+\)\^2\+y\^2/) || c === "x^2+y^2" || c === "y^2+x^2" ? "" : "L'équation n'est pas dans le bon format.";
    }
    if (Y(this, Vt)) {
      const c = i.left.commonMonom().coefficient.value, f = i.right.commonMonom().coefficient.value;
      if (W.lcm(c, f) !== 1)
        return "l'équation n'est pas réduite.";
    }
    return "";
  }
}
Vt = new WeakMap(), zt = new WeakMap(), Ft = new WeakMap(), Dt = new WeakMap(), Zt = new WeakMap(), Wt = new WeakMap();
function ye(a, e) {
  let t = 0, i = 0;
  const s = [];
  for (let r = 0; r < a.length; r++)
    a[r] === "(" && t++, a[r] === ")" && t--, a[r] === e && t === 0 && (s.push(a.substring(i, r)), i = r + 1);
  return s.push(a.substring(i)), s;
}
function ii(a) {
  return ye(a, "-").map((e, t) => t > 0 ? "-" + e : e).map((e) => ye(e, "+")).flat().map((e) => e.trim()).filter((e) => e !== "");
}
function si(a) {
  return a.split("{")[0] + "{" + a.split("{")[1].split("}")[0].split(";").sort().join(";") + "}" + (a.split("}")[1] ?? "");
}
function we(a) {
  return a.substring(1);
}
function ve(a) {
  return a.substring(0, a.length - 1);
}
const rs = `exact

**paramètres**
soft = valeur numérique juste, mais pas sous la forme attendue
`;
class be extends j {
  constructor(t) {
    super(t);
    C(this, "isSoft");
    C(this, "format", "réponse sous forme exacte, réduite");
    this.type = E.EXACT, this.description = rs, this.isSoft = this.config.includes("soft");
  }
  checkValue(t) {
    const i = t.toString(), s = i.startsWith("#") ? i.substring(1) : i, r = this.answer.replace(/sqrt([0-9]+)/g, "sqrt($1)"), o = s.replace(/sqrt([0-9]+)/g, "sqrt($1)");
    if (r === o)
      return "";
    const h = new _t(r), c = new _t(o);
    if (h.isValid && c.isValid && h.evaluate().toFixed(10) === c.evaluate().toFixed(10)) {
      if (this.isSoft)
        return "";
      const f = [
        "La réponse donnée est juste, mais pas sous la forme attendue."
      ];
      return t.includes("/sqrt") && f.push("Il y a encore une racine au dénominateur"), f.join("<br/>");
    }
    return "La réponse donnée n'est pas juste.";
  }
}
const ns = `coord,[paramètres]

**paramètres**
- nb= les coordonnées sont des nombres
- frac= les coordonnées sont des fractions
`;
class as extends j {
  constructor(t) {
    super(t);
    C(this, "format", "Coordonnées d'un point sous la forme \\((a;b)\\)");
    this.type = E.COORDINATES, this.description = ns, this.secondaryChecker = new be();
  }
  checkFormat(t) {
    return t[0] !== "(" || t[t.length - 1] !== ")" ? "des coordonnées commencent et se terminent par des parenthèses" : "";
  }
  checkValue(t) {
    var r;
    const i = t.split(";"), s = this.answer.split(";");
    if (i.length === 1)
      return "des coordonnées ont au moins deux valeurs, séparées par un \\(;\\)";
    if (i.length !== s.length)
      return "la dimension de la coordonnées ne correspond pas";
    i[0] = we(i[0]), i[i.length - 1] = ve(i[i.length - 1]), s[0].startsWith("(") && (s[0] = we(s[0])), s[s.length - 1].endsWith(")") && (s[s.length - 1] = ve(s[s.length - 1]));
    for (let o = 0; o < i.length; o++) {
      const h = ((r = this.secondaryChecker) == null ? void 0 : r.check(s[o], i[o])) ?? { result: !1, message: "" };
      if (!h.result)
        return `la ${o === 0 ? "1ère" : o + 1 + "ème"} coordonnée n'est pas juste.<br>${h.message}`;
    }
    return "";
  }
}
const os = `equation,[paramètres]

**paramètres**
- r=réduit
- c=canonique
- sommet=forme du sommet
- circle=forme centre rayon
`;
class hs extends j {
  constructor(t) {
    super(t);
    C(this, "isCentreRayon");
    C(this, "isReduced");
    C(this, "isCanonical");
    C(this, "isSommet");
    this.type = E.EQUATION, this.description = os, this.isReduced = this.config.includes("r") || this.config.includes("reduced") || this.config.includes("re"), this.isCanonical = this.config.includes("c") || this.config.includes("canonical") || this.config.includes("ca"), this.isSommet = this.config.includes("s") || this.config.includes("sommet"), this.isCentreRayon = this.config.includes("cercle") || this.config.includes("circle");
  }
  get format() {
    const t = [];
    return this.isCanonical ? t.push("canonique") : this.isCentreRayon ? t.push(" (forme centre - rayon)") : this.isSommet && t.push(" (forme du sommet)"), this.isReduced && t.push("réduite"), `équation ${t.join(", ")}`;
  }
  checkFormat(t) {
    if (!t.includes("="))
      return "il manque un signe d'égalité.";
    try {
      return new mt(t), "";
    } catch {
      return "l'équation n'est pas correctement formée.";
    }
  }
  checkValue(t) {
    var h;
    const i = new mt(t), s = new mt(this.answer), r = i.clone().moveLeft(), o = s.clone().moveLeft();
    if (r.simplify(), o.simplify(), !r.isLinearTo(o))
      return "l'équation n'est pas juste.";
    if (this.isCanonical && !i.right.isZero() && !i.left.isZero())
      return "l'équation n'est pas sous sa forme canonique.";
    if (this.isCentreRayon) {
      if (i.degree("x").value !== 2 || i.degree("y").value !== 2)
        return "L'équation n'a pas les bons degrés.";
      let c = "";
      if (i.left.degree("x").value === 2 && i.right.degree("x").isZero() && i.left.degree("y").value === 2 && i.right.degree("y").isZero())
        c = t.split("=")[0];
      else if (i.right.degree("x").value === 2 && i.left.degree("x").isZero() && i.right.degree("y").value === 2 && i.left.degree("y").isZero())
        c = t.split("=")[1];
      else
        return "L'équation n'est pas correctement formée pour la forme centre - rayon.";
      return c = c.replaceAll("^(2)", "^2"), c.match(/\(x[+-][0-9/]+\)\^2\+\(y[+-][0-9/]+\)\^2/) || c.match(/x\^2\+\(y[+-][0-9/]+\)\^2/) || c.match(/\(x[+-][0-9/]+\)\^2\+y\^2/) || c === "x^2+y^2" || c === "y^2+x^2" ? "" : "L'équation n'est pas dans le bon format.";
    }
    if (this.isSommet) {
      const [c, f] = t.split("="), [p, g] = this.answer.split("="), N = c === "y" ? c : f, I = c === "y" ? f : c, D = p === "y" ? g : p;
      return N !== "y" ? "Un côté de l'équation doit juste être (y)" : ((h = this.secondaryChecker) == null ? void 0 : h.check(D, I).message) ?? "";
    }
    if (this.isReduced) {
      const c = i.left.commonMonom().coefficient.value, f = i.right.commonMonom().coefficient.value;
      if (W.lcm(c, f) !== 1)
        return "l'équation n'est pas réduite.";
    }
    return "";
  }
}
const cs = `exp,[paramètres]

**paramètres**
aucun
`;
class bi extends j {
  constructor(t) {
    super(t);
    C(this, "format", "polynôme avec des exponentielles <br/>\\((x-3)e^{x^2-3}\\)");
    this.type = E.EXPONENTIAL, this.description = cs;
  }
  checkValue(t) {
    const [i, s] = ye(t, "/"), [r, o] = ye(this.answer, "/");
    if (s === void 0 && o !== void 0)
      return "Un dénominateur est attendu...";
    if (s !== void 0 && o === void 0)
      return "Aucun dénominateur n'est prévu dans cette réponse.";
    const h = ri(r, i);
    return h !== "" ? h : s !== void 0 && o !== void 0 ? ri(o, s) : "";
  }
}
function ri(a, e) {
  if (a === e)
    return "";
  const t = ii(e), i = ii(a);
  if (i.length !== t.length)
    return "Il n'y a pas le bon nombre d'éléments au numérateur";
  const s = t.map((h) => ni(h)).sort((h, c) => h.sort < c.sort ? 1 : -1), r = i.map((h) => ni(h)).sort((h, c) => h.sort < c.sort ? 1 : -1);
  let o = 0;
  for (let h = 0; h < r.length; h++)
    r[h].sort !== s[h].sort && o++;
  return o > 0 ? `Il y a ${o} élément${o === 1 ? "" : "s"} qui ${o === 1 ? "est" : "sont"} faux.` : "";
}
function ni(a) {
  const e = a.match(/^(\S+)?(e\^(\S+))$/);
  let t, i;
  if (e) {
    try {
      t = new O(e[1]).reorder().display;
    } catch {
      t = e[1] ? e[1] : "";
    }
    try {
      i = new O(e[3]).reorder().display;
    } catch {
      i = e[3] ? e[3] : "";
    }
    return {
      polynom: e[1],
      exponent: e[3],
      sort: t + i
    };
  }
  let s;
  try {
    s = new O(a).reorder().display;
  } catch {
    s = a;
  }
  return {
    polynom: a,
    exponent: "",
    sort: s
  };
}
const ls = `fraction,[paramètres]

**paramètres**
- r=réduit
`;
class us extends j {
  constructor(t) {
    super(t);
    C(this, "expectReduced");
    this.type = E.FRACTION, this.description = ls, this.expectReduced = this.config.includes("r") || this.config.includes("reduced");
  }
  get format() {
    const t = [];
    return this.expectReduced && t.push("réduite"), `réponse sous forme de fraction ${t.join(",")}`;
  }
  checkFormat(t) {
    try {
      return new d(t), "";
    } catch {
      return "La fraction n'est pas formatée correctement.";
    }
  }
  checkValue(t) {
    const i = new d(t), s = new d(this.answer);
    return i.isNotEqual(s) ? "La réponse donnée n'est pas juste." : i.denominator < 0 ? "Le dénominateur doit être positif." : !i.isReduced() && this.expectReduced ? "La fraction n'est pas réduite." : "";
  }
}
const fs = `function|fn,[paramètres]

**paramètres**
- d=développé
`;
class ds extends j {
  constructor(t) {
    super(t);
    C(this, "isDevelopped");
    this.type = E.FUNCTION, this.description = fs, this.isDevelopped = this.config.includes("d") || this.config.includes("developped") || this.config.includes("dev");
  }
  get format() {
    const t = [];
    return this.isDevelopped && t.push("développée"), `fonction ${t.join(", ")}`;
  }
  checkValue(t) {
    const i = new O(t), s = new O(this.answer);
    return i.isEqual(s) ? "" : "la fonction n'est pas juste.";
  }
}
const ps = `input,[paramètres]

**paramètres**
- checker
`;
class ms extends j {
  constructor(t) {
    super(t);
    C(this, "format", "Réponse textuelle");
    this.type = E.INPUT, this.description = ps;
  }
}
const gs = `log,[paramètres]

**paramètres**
`;
class ki extends j {
  constructor(t) {
    super(t);
    C(this, "format", "réponse sous la forme \\(\\log(a)-3/5\\)");
    this.type = E.LOGARITHM, this.description = gs;
  }
  checkFormat(t) {
    return t.includes(".") ? "La réponse n'est pas sous forme exact (nombres entiers)" : t.split("/").length > 2 ? "La réponse ne peut contenir qu'une seule barre de fraction." : "";
  }
  checkValue(t) {
    const i = t.split("/");
    let s, r;
    try {
      s = new _t(i[0]).evaluate();
    } catch {
      return `${i.length === 1 ? "La réponse" : "Le numérateur"} n'est pas correctement formé.`;
    }
    if (i.length === 2)
      try {
        r = new _t(i[1]).evaluate();
      } catch {
        return "Le dénominateur n'est pas correctement formé.";
      }
    else
      r = 1;
    const [o, h] = this.answer.split("/");
    let c, f;
    try {
      c = new _t(o).evaluate();
    } catch {
      c = 1;
    }
    if (h === void 0)
      f = 1;
    else
      try {
        f = new _t(h).evaluate();
      } catch {
        f = 1;
      }
    const p = s / r, g = c / f;
    return p.toFixed(8) !== g.toFixed(8) ? "La réponse sous forme exacte ne donne pas la bonne valeur." : "";
  }
}
const xs = `number|nb,[paramètres]

**paramètres**
- [1,2,3,4,...]: nombre de chiffres après la virgule
- s (strict): significatif (donc 2.3 ne passe pas pour 2.30)
`;
class Ni extends j {
  constructor(t) {
    super(t);
    C(this, "_isStrict");
    this.type = E.NUMBER, this.description = xs, isNaN(+this.config[0]) && (this.config = ["0", ...this.config]), this._isStrict = this.config.includes("s");
  }
  get format() {
    return +this.config[0] == 0 ? "réponse numérique" : `réponse avec ${this.config[0]} chiffre(s) après la virgule`;
  }
  checkFormat(t) {
    return isNaN(+t) ? "Veuillez entrer un nombre" : "";
  }
  checkValue(t) {
    const i = +this.config[0];
    if ((this.answer.split(".")[1] || []).length !== i && this._isStrict)
      return "Problème dans la configuration du checker ou de la réponse";
    if (!this._isStrict && +t == +this.answer)
      return "";
    const r = t.split(".")[1] || "";
    if (r.length !== i)
      return `Il faut ${i} chiffre(s) après la virgule.`;
    const o = +r[r.length - 1], h = +this.answer[this.answer.length - 1];
    return Math.abs(o - h) === 1 ? "Peut être un problème d'arrondi ?" : "La réponse n'est pas juste.";
  }
}
const ys = `primitive,[paramètres]

**paramètres**
aucun
`;
class ws extends j {
  constructor(t) {
    super(t);
    C(this, "format", "primitive d'une fonction");
    this.type = E.PRIMITIVE, this.description = ys;
  }
  checkValue(t) {
    let i;
    t.includes("e") ? i = new bi(this._config) : t.includes("ln") ? i = new ki(this._config) : i = new Ye(this._config);
    const s = i.check(
      this.answer.replaceAll("+c", ""),
      t.replaceAll("+c", "")
    );
    if (!s.result)
      return s.message;
    const r = t.split("+c").length;
    return r !== 2 ? r === 1 ? "il manque la constante." : `il y a ${r - 1} constantes...` : s.message;
  }
}
const vs = `rational,[paramètres]

**paramètres**
- f=factorisée
- d=développée
- r=réduite
`;
class bs extends j {
  constructor(e) {
    super(e), this.type = E.RATIONAL, this.description = vs;
  }
  get format() {
    const e = [];
    return this.config.includes("f") || this.config.includes("factors") ? e.push("factorisée") : (this.config.includes("d") || this.config.includes("develop")) && e.push("développée"), (this.config.includes("r") || this.config.includes("reduced")) && e.push("réduite"), `fraction rationnelle ${e.join(", ")}`;
  }
  checkValue(e) {
    if (this.answer === "!!" || e === "!!")
      return "Il semble qu'il y ait une erreur quelque part...";
    let [t, i] = e.split("/");
    i === void 0 && (i = "1");
    let [s, r] = this.answer.split("/");
    r === void 0 && (r = "1");
    const o = new Te().fromPolynom(t, i), h = new Te().fromPolynom(t, i).reduce(), c = new Te().fromPolynom(s, r).reduce();
    if (!h.numerator.isEqual(c.numerator))
      return "le numérateur ne correspond pas à la réponse";
    if (!h.denominator.isEqual(c.denominator))
      return "le dénominateur ne correspond pas à la réponse";
    if (this.config.includes("d") || this.config.includes("develop")) {
      const f = o.numerator;
      if (f.factors.length > 1 || !f.factors[1].power.isOne())
        return "le numérateur n'est pas développé";
      const p = o.denominator;
      if (p.factors.length > 1 || !p.factors[1].power.isOne())
        return "le dénominateur n'est pas développé";
    }
    return (this.config.includes("r") || this.config.includes("reduced")) && !o.numerator.isEqual(h.numerator) ? "la fraction rationnelle n'est pas réduite !" : "";
  }
}
const ks = `scientific|scn,[paramètres]

//TODO: scn: mode stricte
**paramètres**
- [1,2,3,4,...]: nombre de chiffre après la virgule
- s: strict (1.2 ne passe pas pour 1.20)
`;
class Ns extends j {
  constructor(t) {
    super(t);
    C(this, "digits");
    this.type = E.SCIENTIFIC, this.description = ks, this.digits = isNaN(+this.config[0]) ? 0 : +this.config[0], this.secondaryChecker = new Ni([this.digits.toString()]);
  }
  get format() {
    return this.digits ? "réponse en notation scientifique" : `réponse en notation scientifique à ${this.digits} chiffre(s) significatif(s)`;
  }
  checkValue(t) {
    var h;
    const i = +t.split("*")[0], s = +(t.split("10^")[1] || 0), r = +this.answer.split("*")[0], o = +(this.answer.split("10^")[1] || 0);
    return Math.abs(i) < 1 || Math.abs(i) >= 10 ? "la partie significative n'est pas entre 1 et 10 (non compris)" : i !== r ? "erreur dans la partie significative: " + ((h = this.secondaryChecker) == null ? void 0 : h.check(r.toString(), i.toString()).message) : t.includes("*10^") ? s !== o ? "l'ordre de grandeur n'est pas juste..." : "" : "le format de réponse n'est pas une notation scientifique.";
  }
}
class Es {
  constructor() {
    this.decimalsign = "\\.", this.setup_symbols(), this.sort_symbols();
  }
  setup_symbols() {
    this.greek_letters = ["alpha", "beta", "gamma", "Gamma", "delta", "Delta", "epsilon", "varepsilon", "zeta", "eta", "theta", "Theta", "vartheta", "iota", "kappa", "lambda", "Lambda", "mu", "nu", "xi", "Xi", "pi", "Pi", "rho", "sigma", "Sigma", "tau", "upsilon", "phi", "Phi", "varphi", "chi", "psi", "Psi", "omega", "Omega"], this.relations = [
      { asciimath: ":=", tex: ":=" },
      { asciimath: ":|:", tex: "\\mid" },
      { asciimath: "=>", tex: "\\Rightarrow" },
      { asciimath: "approx", tex: "\\approx" },
      { asciimath: "~~", tex: "\\approx" },
      { asciimath: "cong", tex: "\\cong" },
      { asciimath: "~=", tex: "\\cong" },
      { asciimath: "equiv", tex: "\\equiv" },
      { asciimath: "-=", tex: "\\equiv" },
      { asciimath: "exists", tex: "\\exists" },
      { asciimath: "EE", tex: "\\exists" },
      { asciimath: "forall", tex: "\\forall" },
      { asciimath: "AA", tex: "\\forall" },
      { asciimath: ">=", tex: "\\ge" },
      { asciimath: "ge", tex: "\\ge" },
      { asciimath: "gt=", tex: "\\geq" },
      { asciimath: "geq", tex: "\\geq" },
      { asciimath: "gt", tex: "\\gt" },
      { asciimath: "in", tex: "\\in" },
      { asciimath: "<=", tex: "\\le" },
      { asciimath: "le", tex: "\\le" },
      { asciimath: "lt=", tex: "\\leq" },
      { asciimath: "leq", tex: "\\leq" },
      { asciimath: "lt", tex: "\\lt" },
      { asciimath: "models", tex: "\\models" },
      { asciimath: "|==", tex: "\\models" },
      { asciimath: "!=", tex: "\\ne" },
      { asciimath: "ne", tex: "\\ne" },
      { asciimath: "notin", tex: "\\notin" },
      { asciimath: "!in", tex: "\\notin" },
      { asciimath: "prec", tex: "\\prec" },
      { asciimath: "-lt", tex: "\\prec" },
      { asciimath: "-<", tex: "\\prec" },
      { asciimath: "preceq", tex: "\\preceq" },
      { asciimath: "-<=", tex: "\\preceq" },
      { asciimath: "propto", tex: "\\propto" },
      { asciimath: "prop", tex: "\\propto" },
      { asciimath: "subset", tex: "\\subset" },
      { asciimath: "sub", tex: "\\subset" },
      { asciimath: "subseteq", tex: "\\subseteq" },
      { asciimath: "sube", tex: "\\subseteq" },
      { asciimath: "succ", tex: "\\succ" },
      { asciimath: ">-", tex: "\\succ" },
      { asciimath: "succeq", tex: "\\succeq" },
      { asciimath: ">-=", tex: "\\succeq" },
      { asciimath: "supset", tex: "\\supset" },
      { asciimath: "sup", tex: "\\supset" },
      { asciimath: "supseteq", tex: "\\supseteq" },
      { asciimath: "supe", tex: "\\supseteq" },
      { asciimath: "vdash", tex: "\\vdash" },
      { asciimath: "|--", tex: "\\vdash" }
    ], this.constants = [
      { asciimath: "dt", tex: "dt" },
      { asciimath: "dx", tex: "dx" },
      { asciimath: "dy", tex: "dy" },
      { asciimath: "dz", tex: "dz" },
      { asciimath: "prime", tex: "'" },
      { asciimath: "implies", tex: "\\implies" },
      { asciimath: "epsi", tex: "\\epsilon" },
      { asciimath: "leftrightarrow", tex: "\\leftrightarrow" },
      { asciimath: "Leftrightarrow", tex: "\\Leftrightarrow" },
      { asciimath: "rightarrow", tex: "\\rightarrow" },
      { asciimath: "Rightarrow", tex: "\\Rightarrow" },
      { asciimath: "backslash", tex: "\\backslash" },
      { asciimath: "leftarrow", tex: "\\leftarrow" },
      { asciimath: "Leftarrow", tex: "\\Leftarrow" },
      { asciimath: "setminus", tex: "\\setminus" },
      { asciimath: "bigwedge", tex: "\\bigwedge" },
      { asciimath: "diamond", tex: "\\diamond" },
      { asciimath: "bowtie", tex: "\\bowtie" },
      { asciimath: "bigvee", tex: "\\bigvee" },
      { asciimath: "bigcap", tex: "\\bigcap" },
      { asciimath: "bigcup", tex: "\\bigcup" },
      { asciimath: "square", tex: "\\square" },
      { asciimath: "lamda", tex: "\\lambda" },
      { asciimath: "Lamda", tex: "\\Lambda" },
      { asciimath: "aleph", tex: "\\aleph" },
      { asciimath: "angle", tex: "\\angle" },
      { asciimath: "frown", tex: "\\frown" },
      { asciimath: "qquad", tex: "\\qquad" },
      { asciimath: "cdots", tex: "\\cdots" },
      { asciimath: "vdots", tex: "\\vdots" },
      { asciimath: "ddots", tex: "\\ddots" },
      { asciimath: "cdot", tex: "\\cdot" },
      { asciimath: "star", tex: "\\star" },
      { asciimath: "|><|", tex: "\\bowtie" },
      { asciimath: "circ", tex: "\\circ" },
      { asciimath: "oint", tex: "\\oint" },
      { asciimath: "grad", tex: "\\nabla" },
      { asciimath: "quad", tex: "\\quad" },
      { asciimath: "uarr", tex: "\\uparrow" },
      { asciimath: "darr", tex: "\\downarrow" },
      { asciimath: "downarrow", tex: "\\downarrow" },
      { asciimath: "rarr", tex: "\\rightarrow" },
      { asciimath: ">->>", tex: "\\twoheadrightarrowtail" },
      { asciimath: "larr", tex: "\\leftarrow" },
      { asciimath: "harr", tex: "\\leftrightarrow" },
      { asciimath: "rArr", tex: "\\Rightarrow" },
      { asciimath: "lArr", tex: "\\Leftarrow" },
      { asciimath: "hArr", tex: "\\Leftrightarrow" },
      { asciimath: "ast", tex: "\\ast" },
      { asciimath: "***", tex: "\\star" },
      { asciimath: "|><", tex: "\\ltimes" },
      { asciimath: "><|", tex: "\\rtimes" },
      { asciimath: "^^^", tex: "\\bigwedge" },
      { asciimath: "vvv", tex: "\\bigvee" },
      { asciimath: "cap", tex: "\\cap" },
      { asciimath: "nnn", tex: "\\bigcap" },
      { asciimath: "cup", tex: "\\cup" },
      { asciimath: "uuu", tex: "\\bigcup" },
      { asciimath: "not", tex: "\\neg" },
      { asciimath: "<=>", tex: "\\Leftrightarrow" },
      { asciimath: "_|_", tex: "\\bot" },
      { asciimath: "bot", tex: "\\bot" },
      { asciimath: "int", tex: "\\int" },
      { asciimath: "del", tex: "\\partial" },
      { asciimath: "...", tex: "\\ldots" },
      { asciimath: "/_\\", tex: "\\triangle" },
      { asciimath: "|__", tex: "\\lfloor" },
      { asciimath: "__|", tex: "\\rfloor" },
      { asciimath: "dim", tex: "\\dim" },
      { asciimath: "mod", tex: "\\operatorname{mod}" },
      { asciimath: "lub", tex: "\\operatorname{lub}" },
      { asciimath: "glb", tex: "\\operatorname{glb}" },
      { asciimath: ">->", tex: "\\rightarrowtail" },
      { asciimath: "->>", tex: "\\twoheadrightarrow" },
      { asciimath: "|->", tex: "\\mapsto" },
      { asciimath: "lim", tex: "\\lim" },
      { asciimath: "Lim", tex: "\\operatorname{Lim}" },
      { asciimath: "and", tex: "\\quad\\text{and}\\quad" },
      { asciimath: "**", tex: "\\ast" },
      { asciimath: "//", tex: "/" },
      { asciimath: "\\", tex: "\\," },
      { asciimath: "\\\\", tex: "\\backslash" },
      { asciimath: "xx", tex: "\\times" },
      { asciimath: "-:", tex: "\\div" },
      { asciimath: "o+", tex: "\\oplus" },
      { asciimath: "ox", tex: "\\otimes" },
      { asciimath: "o.", tex: "\\odot" },
      { asciimath: "^", tex: "\\hat{}" },
      { asciimath: "_", tex: "\\_" },
      { asciimath: "^^", tex: "\\wedge" },
      { asciimath: "vv", tex: "\\vee" },
      { asciimath: "nn", tex: "\\cap" },
      { asciimath: "uu", tex: "\\cup" },
      { asciimath: "TT", tex: "\\top" },
      { asciimath: "+-", tex: "\\pm" },
      { asciimath: "O/", tex: "\\emptyset" },
      { asciimath: "oo", tex: "\\infty" },
      { asciimath: ":.", tex: "\\therefore" },
      { asciimath: ":'", tex: "\\because" },
      { asciimath: "/_", tex: "\\angle" },
      { asciimath: "|~", tex: "\\lceil" },
      { asciimath: "~|", tex: "\\rceil" },
      { asciimath: "CC", tex: "\\mathbb{C}" },
      { asciimath: "NN", tex: "\\mathbb{N}" },
      { asciimath: "QQ", tex: "\\mathbb{Q}" },
      { asciimath: "RR", tex: "\\mathbb{R}" },
      { asciimath: "ZZ", tex: "\\mathbb{Z}" },
      { asciimath: "->", tex: "\\to" },
      { asciimath: "or", tex: "\\quad\\text{or}\\quad" },
      { asciimath: "if", tex: "\\quad\\text{if}\\quad" },
      { asciimath: "iff", tex: "\\iff" },
      { asciimath: "*", tex: "\\cdot" },
      { asciimath: "@", tex: "\\circ" },
      { asciimath: "%", tex: "\\%" },
      { asciimath: "boxempty", tex: "\\square" },
      { asciimath: "lambda", tex: "\\lambda" },
      { asciimath: "Lambda", tex: "\\Lambda" },
      { asciimath: "nabla", tex: "\\nabla" },
      { asciimath: "uparrow", tex: "\\uparrow" },
      { asciimath: "downarrow", tex: "\\downarrow" },
      { asciimath: "twoheadrightarrowtail", tex: "\\twoheadrightarrowtail" },
      { asciimath: "ltimes", tex: "\\ltimes" },
      { asciimath: "rtimes", tex: "\\rtimes" },
      { asciimath: "neg", tex: "\\neg" },
      { asciimath: "partial", tex: "\\partial" },
      { asciimath: "ldots", tex: "\\ldots" },
      { asciimath: "triangle", tex: "\\triangle" },
      { asciimath: "lfloor", tex: "\\lfloor" },
      { asciimath: "rfloor", tex: "\\rfloor" },
      { asciimath: "rightarrowtail", tex: "\\rightarrowtail" },
      { asciimath: "twoheadrightarrow", tex: "\\twoheadrightarrow" },
      { asciimath: "mapsto", tex: "\\mapsto" },
      { asciimath: "times", tex: "\\times" },
      { asciimath: "div", tex: "\\div" },
      { asciimath: "divide", tex: "\\div" },
      { asciimath: "oplus", tex: "\\oplus" },
      { asciimath: "otimes", tex: "\\otimes" },
      { asciimath: "odot", tex: "\\odot" },
      { asciimath: "wedge", tex: "\\wedge" },
      { asciimath: "vee", tex: "\\vee" },
      { asciimath: "top", tex: "\\top" },
      { asciimath: "pm", tex: "\\pm" },
      { asciimath: "emptyset", tex: "\\emptyset" },
      { asciimath: "infty", tex: "\\infty" },
      { asciimath: "therefore", tex: "\\therefore" },
      { asciimath: "because", tex: "\\because" },
      { asciimath: "lceil", tex: "\\lceil" },
      { asciimath: "rceil", tex: "\\rceil" },
      { asciimath: "to", tex: "\\to" },
      { asciimath: "langle", tex: "\\langle" },
      { asciimath: "lceiling", tex: "\\lceil" },
      { asciimath: "rceiling", tex: "\\rceil" },
      { asciimath: "max", tex: "\\max" },
      { asciimath: "min", tex: "\\min" },
      { asciimath: "prod", tex: "\\prod" },
      { asciimath: "sum", tex: "\\sum" }
    ], this.constants = this.constants.concat(this.relations), this.left_brackets = [
      { asciimath: "langle", tex: "\\langle" },
      { asciimath: "(:", tex: "\\langle" },
      { asciimath: "<<", tex: "\\langle" },
      { asciimath: "{:", tex: "." },
      { asciimath: "(", tex: "(" },
      { asciimath: "[", tex: "[" },
      { asciimath: "|:", tex: "\\lvert" },
      { asciimath: "{", tex: "\\lbrace" },
      { asciimath: "lbrace", tex: "\\lbrace" }
    ], this.right_brackets = [
      { asciimath: "rangle", tex: "\\rangle" },
      { asciimath: ":)", tex: "\\rangle" },
      { asciimath: ">>", tex: "\\rangle" },
      { asciimath: ":}", tex: ".", free_tex: ":\\}" },
      { asciimath: ")", tex: ")" },
      { asciimath: "]", tex: "]" },
      { asciimath: ":|", tex: "\\rvert" },
      { asciimath: "}", tex: "\\rbrace" },
      { asciimath: "rbrace", tex: "\\rbrace" }
    ], this.leftright_brackets = [
      { asciimath: "|", left_tex: "\\lvert", right_tex: "\\rvert", free_tex: "|", mid_tex: "\\mid" }
    ], this.unary_symbols = [
      { asciimath: "sqrt", tex: "\\sqrt" },
      { asciimath: "f", tex: "f", func: !0 },
      { asciimath: "g", tex: "g", func: !0 },
      { asciimath: "sin", tex: "\\sin", func: !0 },
      { asciimath: "cos", tex: "\\cos", func: !0 },
      { asciimath: "tan", tex: "\\tan", func: !0 },
      { asciimath: "arcsin", tex: "\\arcsin", func: !0 },
      { asciimath: "arccos", tex: "\\arccos", func: !0 },
      { asciimath: "arctan", tex: "\\arctan", func: !0 },
      { asciimath: "sinh", tex: "\\sinh", func: !0 },
      { asciimath: "cosh", tex: "\\cosh", func: !0 },
      { asciimath: "tanh", tex: "\\tanh", func: !0 },
      { asciimath: "cot", tex: "\\cot", func: !0 },
      { asciimath: "coth", tex: "\\coth", func: !0 },
      { asciimath: "sech", tex: "\\operatorname{sech}", func: !0 },
      { asciimath: "csch", tex: "\\operatorname{csch}", func: !0 },
      { asciimath: "sec", tex: "\\sec", func: !0 },
      { asciimath: "csc", tex: "\\csc", func: !0 },
      { asciimath: "log", tex: "\\log", func: !0 },
      { asciimath: "ln", tex: "\\ln", func: !0 },
      { asciimath: "abs", rewriteleftright: ["|", "|"] },
      { asciimath: "norm", rewriteleftright: ["\\|", "\\|"] },
      { asciimath: "floor", rewriteleftright: ["\\lfloor", "\\rfloor"] },
      { asciimath: "ceil", rewriteleftright: ["\\lceil", "\\rceil"] },
      { asciimath: "Sin", tex: "\\Sin", func: !0 },
      { asciimath: "Cos", tex: "\\Cos", func: !0 },
      { asciimath: "Tan", tex: "\\Tan", func: !0 },
      { asciimath: "Arcsin", tex: "\\Arcsin", func: !0 },
      { asciimath: "Arccos", tex: "\\Arccos", func: !0 },
      { asciimath: "Arctan", tex: "\\Arctan", func: !0 },
      { asciimath: "Sinh", tex: "\\Sinh", func: !0 },
      { asciimath: "Cosh", tex: "\\Cosh", func: !0 },
      { asciimath: "Tanh", tex: "\\Tanh", func: !0 },
      { asciimath: "Cot", tex: "\\Cot", func: !0 },
      { asciimath: "Sec", tex: "\\Sec", func: !0 },
      { asciimath: "Csc", tex: "\\Csc", func: !0 },
      { asciimath: "Log", tex: "\\Log", func: !0 },
      { asciimath: "Ln", tex: "\\Ln", func: !0 },
      { asciimath: "Abs", tex: "\\Abs", rewriteleftright: ["|", "|"] },
      { asciimath: "det", tex: "\\det", func: !0 },
      { asciimath: "exp", tex: "\\exp", func: !0 },
      { asciimath: "gcd", tex: "\\gcd", func: !0 },
      { asciimath: "lcm", tex: "\\operatorname{lcm}", func: !0 },
      { asciimath: "cancel", tex: "\\cancel" },
      { asciimath: "Sqrt", tex: "\\Sqrt" },
      { asciimath: "hat", tex: "\\hat", acc: !0 },
      { asciimath: "bar", tex: "\\overline", acc: !0 },
      { asciimath: "overline", tex: "\\overline", acc: !0 },
      { asciimath: "vec", tex: "\\vec", acc: !0 },
      { asciimath: "tilde", tex: "\\tilde", acc: !0 },
      { asciimath: "dot", tex: "\\dot", acc: !0 },
      { asciimath: "ddot", tex: "\\ddot", acc: !0 },
      { asciimath: "ul", tex: "\\underline", acc: !0 },
      { asciimath: "underline", tex: "\\underline", acc: !0 },
      { asciimath: "ubrace", tex: "\\underbrace", acc: !0 },
      { asciimath: "underbrace", tex: "\\underbrace", acc: !0 },
      { asciimath: "obrace", tex: "\\overbrace", acc: !0 },
      { asciimath: "overbrace", tex: "\\overbrace", acc: !0 },
      { asciimath: "bb", atname: "mathvariant", atval: "bold", tex: "\\mathbf" },
      { asciimath: "mathbf", atname: "mathvariant", atval: "bold", tex: "mathbf" },
      { asciimath: "sf", atname: "mathvariant", atval: "sans-serif", tex: "\\mathsf" },
      { asciimath: "mathsf", atname: "mathvariant", atval: "sans-serif", tex: "mathsf" },
      { asciimath: "bbb", atname: "mathvariant", atval: "double-struck", tex: "\\mathbb" },
      { asciimath: "mathbb", atname: "mathvariant", atval: "double-struck", tex: "\\mathbb" },
      { asciimath: "cc", atname: "mathvariant", atval: "script", tex: "\\mathcal" },
      { asciimath: "mathcal", atname: "mathvariant", atval: "script", tex: "\\mathcal" },
      { asciimath: "tt", atname: "mathvariant", atval: "monospace", tex: "\\mathtt" },
      { asciimath: "mathtt", atname: "mathvariant", atval: "monospace", tex: "\\mathtt" },
      { asciimath: "fr", atname: "mathvariant", atval: "fraktur", tex: "\\mathfrak" },
      { asciimath: "mathfrak", atname: "mathvariant", atval: "fraktur", tex: "\\mathfrak" }
    ], this.binary_symbols = [
      { asciimath: "root", tex: "\\sqrt", option: !0 },
      { asciimath: "frac", tex: "\\frac" },
      { asciimath: "stackrel", tex: "\\stackrel" },
      { asciimath: "overset", tex: "\\overset" },
      { asciimath: "underset", tex: "\\underset" },
      { asciimath: "color", tex: "\\color", rawfirst: !0 }
    ], this.non_constant_symbols = ["_", "^", "/"];
  }
  sort_symbols() {
    const e = (t, i) => (t = t.asciimath.length, i = i.asciimath.length, t > i ? -1 : t < i ? 1 : 0);
    this.constants.sort(e), this.relations.sort(e), this.left_brackets.sort(e), this.right_brackets.sort(e), this.leftright_brackets.sort(e), this.unary_symbols.sort(e), this.binary_symbols.sort(e);
  }
  error(e, t) {
    const i = this.source(t).slice(0, 5);
    throw new Error(`Error at character ${t} near "${i}": ${e}`);
  }
  literal(e) {
    if (e)
      return { tex: e.token, pos: e.pos, end: e.end, ttype: "literal" };
  }
  longest(e) {
    return e = e.filter((t) => !!t), e.sort((t, i) => (t = t.end, i = i.end, t > i ? -1 : t < i ? 1 : 0)), e[0];
  }
  escape_text(e) {
    return e.replace(/\{/g, "\\{").replace(/\}/g, "\\}");
  }
  input(e) {
    this._source = e, this.brackets = [];
  }
  source(e = 0, t) {
    return arguments.length > 1 ? this._source.slice(e, t) : this._source.slice(e);
  }
  eof(e = 0) {
    return e = this.strip_space(e), e == this._source.length;
  }
  unbracket(e) {
    if (!e)
      return;
    if (!e.bracket)
      return e;
    const t = ["(", ")", "[", "]", "{", "}"], i = t.includes(e.left.asciimath), s = t.includes(e.right.asciimath), r = i ? e.left.end : e.pos, o = s ? e.right.pos : e.end;
    let h = i ? "" : e.left.tex, c = s ? "" : e.right.tex;
    const f = e.middle ? e.middle.tex : "";
    return h || c ? (h = h || ".", c = c || ".", { tex: `\\left ${h} ${f} \\right ${c}`, pos: e.pos, end: e.end }) : { tex: f, pos: e.pos, end: e.end, middle_asciimath: this.source(r, o) };
  }
  parse(e) {
    return this.input(e), this.consume().tex;
  }
  consume(e = 0) {
    let t = "";
    const i = [];
    for (; !this.eof(e); ) {
      let s = this.expression_list(e);
      if (!s) {
        const r = this.right_bracket(e);
        r && (r.def.free_tex && (r.tex = r.def.free_tex), s = r);
        const o = this.leftright_bracket(e);
        if (o) {
          s = o;
          const h = this.subsup(o.end);
          h && (s = { tex: `${s.tex}${h.tex}`, pos: e, end: h.end, ttype: "expression" });
        }
      }
      if (s)
        t && (t += " "), t += s.tex, e = s.end, i.push(s);
      else if (!this.eof(e)) {
        const r = this.source(e, e + 1);
        i.push({ tex: r, pos: e, ttype: "character" }), t += r, e += 1;
      }
    }
    return { tex: t, exprs: i };
  }
  strip_space(e = 0) {
    const t = this.source(e), i = t.replace(/^(\s|\\(?![\\ ]))*/, "");
    return e + t.length - i.length;
  }
  /* Does the given regex match next?
   */
  match(e, t) {
    t = this.strip_space(t);
    const i = e.exec(this.source(t));
    if (i) {
      const s = i[0];
      return { token: s, pos: t, match: i, end: t + s.length, ttype: "regex" };
    }
  }
  /* Does the exact given string occur next?
   */
  exact(e, t) {
    if (t = this.strip_space(t), this.source(t).slice(0, e.length) == e)
      return { token: e, pos: t, end: t + e.length, ttype: "exact" };
  }
  expression_list(e = 0) {
    let t = this.expression(e);
    if (!t)
      return;
    let i = t.end, s = t.tex;
    const r = [t];
    for (; !this.eof(i); ) {
      const o = this.exact(",", i);
      if (!o || (s += " ,", i = o.end, t = this.expression(i), !t))
        break;
      s += " " + t.tex, r.push(t), i = t.end;
    }
    return { tex: s, pos: e, end: i, exprs: r, ttype: "expression_list" };
  }
  // E ::= IE | I/I                       Expression
  expression(e = 0) {
    const t = this.negative_expression(e);
    if (t)
      return t;
    const i = this.intermediate_or_fraction(e);
    if (!i) {
      for (const r of this.non_constant_symbols) {
        const o = this.exact(r, e);
        if (o)
          return { tex: r, pos: e, end: o.end, ttype: "constant" };
      }
      return;
    }
    if (this.eof(i.end))
      return i;
    const s = this.expression(i.end);
    return s ? { tex: i.tex + " " + s.tex, pos: i.pos, end: s.end, ttype: "expression", exprs: [i, s] } : i;
  }
  negative_expression(e = 0) {
    const t = this.exact("-", e);
    if (t && !this.other_constant(e)) {
      const i = this.expression(t.end);
      return i ? { tex: `- ${i.tex}`, pos: e, end: i.end, ttype: "negative_expression", dash: t, expression: i } : { tex: "-", pos: e, end: t.end, ttype: "constant" };
    }
  }
  intermediate_or_fraction(e = 0) {
    const t = this.intermediate(e);
    if (!t)
      return;
    const i = this.match(/^\/(?!\/)/, t.end);
    if (i) {
      const s = this.intermediate(i.end);
      if (s) {
        const r = this.unbracket(t), o = this.unbracket(s);
        return { tex: `\\frac{${r.tex}}{${o.tex}}`, pos: t.pos, end: s.end, ttype: "fraction", numerator: r, denominator: o, raw_numerator: t, raw_denominator: s };
      } else {
        const r = this.unbracket(t);
        return { tex: `\\frac{${r.tex}}{}`, pos: t.pos, end: i.end, ttype: "fraction", numerator: r, denominator: null, raw_numerator: t, raw_denominator: null };
      }
    } else
      return t;
  }
  // I ::= S_S | S^S | S_S^S | S          Intermediate expression
  intermediate(e = 0) {
    const t = this.simple(e);
    if (!t)
      return;
    const i = this.subsup(t.end);
    return i ? { tex: `${t.tex}${i.tex}`, pos: e, end: i.end, ttype: "intermediate", expression: t, subsup: i } : t;
  }
  subsup(e = 0) {
    let t = "", i = e;
    const s = this.exact("_", e);
    let r, o;
    s && (r = this.unbracket(this.simple(s.end)), r ? (t = `${t}_{${r.tex}}`, i = r.end) : (t = `${t}_{}`, i = s.end));
    const h = this.match(/^\^(?!\^)/, i);
    if (h && (o = this.unbracket(this.simple(h.end)), o ? (t = `${t}^{${o.tex}}`, i = o.end) : (t = `${t}^{}`, i = h.end)), s || h)
      return { tex: t, pos: e, end: i, ttype: "subsup", sub: r, sup: o };
  }
  // S ::= v | lEr | uS | bSS             Simple expression
  simple(e = 0) {
    return this.longest([this.matrix(e), this.bracketed_expression(e), this.binary(e), this.constant(e), this.text(e), this.unary(e), this.negative_simple(e)]);
  }
  negative_simple(e = 0) {
    const t = this.exact("-", e);
    if (t && !this.other_constant(e)) {
      const i = this.simple(t.end);
      return i ? { tex: `- ${i.tex}`, pos: e, end: i.end, ttype: "negative_simple", dash: t, expr: i } : { tex: "-", pos: e, end: t.end, ttype: "constant" };
    }
  }
  // matrix: leftbracket "(" expr ")" ("," "(" expr ")")* rightbracket
  // each row must have the same number of elements
  matrix(e = 0) {
    let t = this.left_bracket(e), i = !1;
    if (!t) {
      if (t = this.leftright_bracket(e, "left"), !t)
        return;
      i = !0;
    }
    const s = this.matrix_contents(t.end, i);
    if (!s)
      return;
    const r = i ? this.leftright_bracket(s.end, "right") : this.right_bracket(s.end);
    if (!r)
      return;
    const o = s.rows.map((c) => c.tex).join(" \\\\ "), h = s.is_array ? `\\begin{array}{${s.column_desc}} ${o} \\end{array}` : `\\begin{matrix} ${o} \\end{matrix}`;
    return { tex: `\\left ${t.tex} ${h} \\right ${r.tex}`, pos: e, end: r.end, ttype: "matrix", rows: s.rows, left: t, right: r };
  }
  matrix_contents(e = 0, t = !1) {
    const i = [];
    let s = e, r, o, h = !1;
    for (; !this.eof(s) && !(t ? this.leftright_bracket(s) : this.right_bracket(s)); ) {
      if (i.length) {
        const I = this.exact(",", s);
        if (!I)
          return;
        s = I.end;
      }
      const c = this.match(/^[(\[]/, s);
      if (!c)
        return;
      const f = [], p = [];
      for (s = c.end; !this.eof(s); ) {
        if (f.length) {
          const D = this.exact(",", s);
          if (!D)
            break;
          s = D.end;
        }
        const I = this.matrix_cell(s);
        if (!I)
          break;
        I.ttype == "column" ? (p.push("|"), h = !0, I.expr !== null && (p.push("r"), f.push(I.expr))) : (p.push("r"), f.push(I)), s = I.end;
      }
      if (!f.length)
        return;
      if (r === void 0)
        r = f.length;
      else if (f.length != r)
        return;
      const g = this.match(/^[)\]]/, s);
      if (!g)
        return;
      const N = p.join("");
      if (o === void 0)
        o = N;
      else if (N != o)
        return;
      i.push({ ttype: "row", tex: f.map((I) => I.tex).join(" & "), pos: c.end, end: s, cells: f }), s = g.end;
    }
    if (!(r === void 0 || r <= 1 && i.length <= 1))
      return { rows: i, end: s, column_desc: o, is_array: h };
  }
  matrix_cell(e = 0) {
    const t = this.exact("|", e);
    if (t) {
      const i = this.expression(t.end);
      if (i) {
        const s = this.exact("|", i.end);
        if (s) {
          const r = this.expression(s.end);
          if (r)
            return { tex: `\\left \\lvert ${i.tex} \\right \\rvert ${r.text}`, pos: t.pos, end: r.end, ttype: "expression", exprs: [i, r] };
        } else
          return { ttype: "column", expr: i, pos: t.pos, end: i.end };
      } else
        return { ttype: "column", expr: null, pos: t.pos, end: t.end };
    }
    return this.expression(e);
  }
  bracketed_expression(e = 0) {
    const t = this.left_bracket(e);
    if (t) {
      const s = this.expression_list(t.end);
      if (s) {
        const r = this.mid_expression(t, s, e);
        if (r)
          return r;
        const o = this.right_bracket(s.end) || this.leftright_bracket(s.end, "right");
        return o ? { tex: `\\left ${t.tex} ${s.tex} \\right ${o.tex}`, pos: e, end: o.end, bracket: !0, left: t, right: o, middle: s, ttype: "bracket" } : this.eof(s.end) ? { tex: `\\left ${t.tex} ${s.tex} \\right.`, pos: e, end: s.end, ttype: "bracket", left: t, right: null, middle: s } : { tex: `${t.tex} ${s.tex}`, pos: e, end: s.end, ttype: "expression", exprs: [t, s] };
      } else {
        const r = this.right_bracket(t.end) || this.leftright_bracket(t.end, "right");
        return r ? { tex: `\\left ${t.tex} \\right ${r.tex}`, pos: e, end: r.end, bracket: !0, left: t, right: r, middle: null, ttype: "bracket" } : { tex: t.tex, pos: e, end: t.end, ttype: "constant" };
      }
    }
    if (this.other_constant(e))
      return;
    const i = this.leftright_bracket(e, "left");
    if (i) {
      const s = this.expression_list(i.end);
      if (s) {
        const r = this.mid_expression(i, s, e);
        if (r)
          return r;
        const o = this.leftright_bracket(s.end, "right") || this.right_bracket(s.end);
        if (o)
          return { tex: `\\left ${i.tex} ${s.tex} \\right ${o.tex}`, pos: e, end: o.end, bracket: !0, left: i, right: o, middle: s, ttype: "bracket" };
      }
    }
  }
  // Detect the case where the "middle" part of a bracketed expression ends in another bracketed expression whose left delimiter is a left/right symbol, e.g. `|`.
  // In these cases, interpret this as a bracketed expression where the left/right symbol is a 'mid' delimiter.
  mid_expression(e, t, i) {
    function s(r) {
      return r.ttype == "bracket" && r.left.ttype == "leftright_bracket";
    }
    if (t.exprs.length == 1 && t.exprs[0].ttype == "expression") {
      const r = [t.exprs[0].exprs[0]];
      let o = t.exprs[0].exprs[1], h = t.end;
      for (; o.ttype == "expression"; ) {
        const N = o.exprs[0];
        if (s(N)) {
          o = N, h = N.end;
          break;
        }
        r.push(o.exprs[0]), o = o.exprs[1];
      }
      if (o.ttype == "fraction" && (o = o.raw_numerator, h = o.end), !(o.ttype == "bracket" && o.left.ttype == "leftright_bracket"))
        return;
      const c = r.map((N) => N.tex).join(" "), f = o.left, p = o.middle.exprs.map((N) => N.tex).join(" "), g = o.right;
      return { tex: `\\left ${e.tex} ${c} ${f.def.mid_tex} ${p} \\right ${g.tex}`, pos: i, end: h, left: e, right: g, middle: { tex: `${c} ${f.def.mid_tex} ${p}`, exprs: r.concat([f, o.middle]), pos: t.pos, end: o.middle.end, ttype: "expression_list" } };
    }
  }
  // r ::= ) | ] | } | :) | :} | other right brackets
  right_bracket(e = 0) {
    for (const t of this.right_brackets) {
      const i = this.exact(t.asciimath, e);
      if (i)
        return { tex: t.tex, pos: e, end: i.end, asciimath: t.asciimath, def: t, ttype: "right_bracket" };
    }
  }
  // l ::= ( | [ | { | (: | {: | other left brackets
  left_bracket(e = 0) {
    for (const t of this.left_brackets) {
      const i = this.exact(t.asciimath, e);
      if (i)
        return { tex: t.tex, pos: e, end: i.end, asciimath: t.asciimath, ttype: "left_bracket" };
    }
  }
  leftright_bracket(e = 0, t) {
    for (const i of this.leftright_brackets) {
      const s = this.exact(i.asciimath, e);
      if (s)
        return this.exact(",", s.end) ? { tex: i.free_tex, pos: e, end: s.end, ttype: "binary" } : { tex: t == "left" ? i.left_tex : t == "right" ? i.right_tex : i.free_tex, pos: e, end: s.end, ttype: "leftright_bracket", def: i };
    }
  }
  text(e = 0) {
    const t = this.match(/^"([^"]*)"/, e);
    if (t) {
      const s = this.escape_text(t.match[1]);
      return { tex: `\\text{${s}}`, pos: e, end: t.end, ttype: "text", text: s };
    }
    const i = this.match(/^(?:mbox|text)\s*(\([^)]*\)?|\{[^}]*\}?|\[[^\]]*\]?)/, e);
    if (i) {
      const s = this.escape_text(i.match[1].slice(1, i.match[1].length - 1));
      return { tex: `\\text{${s}}`, pos: e, end: i.end, ttype: "text", text: s };
    }
  }
  // b ::= frac | root | stackrel | other binary symbols
  binary(e = 0) {
    for (const t of this.binary_symbols) {
      const i = this.exact(t.asciimath, e), [s, r] = t.option ? ["[", "]"] : ["{", "}"];
      if (i) {
        const o = this.unbracket(this.simple(i.end));
        if (o) {
          const h = t.rawfirst ? o.middle_asciimath : o.tex, c = this.unbracket(this.simple(o.end));
          return c ? { tex: `${t.tex}${s}${h}${r}{${c.tex}}`, pos: e, end: c.end, ttype: "binary", op: t, arg1: o, arg2: c } : { tex: `${t.tex}${s}${h}${r}{}`, pos: e, end: o.end, ttype: "binary", op: t, arg1: o, arg2: null };
        } else
          return { tex: `${t.tex}${s}${r}{}`, pos: e, end: i.end, ttype: "binary", op: t, arg1: null, arg2: null };
      }
    }
  }
  // u ::= sqrt | text | bb | other unary symbols for font commands
  unary(e = 0) {
    for (const t of this.unary_symbols) {
      const i = this.exact(t.asciimath, e);
      if (i) {
        const s = this.subsup(i.end), r = s ? s.tex : "", o = s ? s.end : i.end, h = this.simple(o), c = t.func ? h : this.unbracket(h), f = c && (t.raw ? c.middle_asciimath : c.tex);
        if (t.rewriteleftright) {
          const [p, g] = t.rewriteleftright;
          return c ? { tex: `\\left ${p} ${f} \\right ${g} ${r}`, pos: e, end: c.end, ttype: "unary", op: i, subsup: s, arg: c } : { tex: `\\left ${p} \\right ${g} ${r}`, pos: e, end: i.end, ttype: "unary", op: i, subsup: s, arg: null };
        } else
          return c ? { tex: `${t.tex}${r}{${f}}`, pos: e, end: c.end, ttype: "unary", op: i, subsup: s, arg: c } : { tex: `${t.tex}${r}{}`, pos: e, end: i.end, ttype: "unary", op: i, subsup: s, arg: null };
      }
    }
  }
  // v ::= [A-Za-z] | greek letters | numbers | other constant symbols
  constant(e = 0) {
    if (!this.right_bracket(e))
      return this.longest([this.other_constant(e), this.greek(e), this.name(e), this.number(e), this.arbitrary_constant(e)]);
  }
  name(e = 0) {
    return this.literal(this.match(/^[A-Za-z]/, e));
  }
  greek(e = 0) {
    const t = new RegExp("^(" + this.greek_letters.join("|") + ")"), i = this.match(t, e);
    if (i)
      return { tex: "\\" + i.token, pos: e, end: i.end, ttype: "greek" };
  }
  number(e = 0) {
    const t = new RegExp("^\\d+(" + this.decimalsign + "\\d+)?");
    return this.literal(this.match(t, e));
  }
  other_constant(e = 0) {
    for (const t of this.constants) {
      const i = this.exact(t.asciimath, e);
      if (i)
        return { tex: `${t.tex}`, pos: i.pos, end: i.end, ttype: "other_constant" };
    }
    for (const t of this.relations)
      if (!t.asciimath.match(/^!/)) {
        const i = this.exact("!" + t.asciimath, e);
        if (i)
          return { tex: `\\not ${t.tex}`, pos: i.pos, end: i.end, ttype: "other_constant" };
      }
  }
  arbitrary_constant(e = 0) {
    if (!this.eof(e)) {
      if (this.exact(",", e))
        return;
      for (const s of this.non_constant_symbols.concat(this.left_brackets.map((r) => r.asciimath), this.right_brackets.map((r) => r.asciimath), this.leftright_brackets.map((r) => r.asciimath)))
        if (this.exact(s, e))
          return;
      const t = this.strip_space(e);
      return { tex: this.source(t).slice(0, 1), pos: e, end: t + 1, ttype: "arbitrary_constant" };
    }
  }
}
const $s = `solution|sol,[paramètres]

**paramètres**
checker = par défaut, c'est le "exact"
`;
class Ts extends j {
  constructor(e) {
    super(e), this.type = E.SOLUTION, this.description = $s;
  }
  get format() {
    var e;
    return `Solution de la forme \\(\\mathcal{S}=\\{3;5\\}\\)<br/>${(e = this.secondaryChecker) == null ? void 0 : e.format}`;
  }
  checkValue(e) {
    if (ai(e))
      return e === `{${this.answer}} ` ? `${new Es().parse(
        this.answer
      )} est déjà un ensemble.` : "Ce n'est pas le bon ensemble de solution.";
    if (ai(this.answer))
      return "Ce n'est pas le bon ensemble de solution.";
    if (this.answer.startsWith("{")) {
      if (!e.startsWith("{"))
        return "L'ensemble des solutions doit avoir des \\(\\{ \\}\\).";
      if (e.split("{").length !== e.split("}").length)
        return "Le nombre d'accolades ouvrantes est différent des fermantes.";
    }
    if (ae(this.answer) && !ae(e))
      return ae(this.answer) ? "La solution contient un intervalle." : "La solution ne contient pas d'intervalle.";
    if (!ae(this.answer)) {
      const t = this.answer.substring(1, this.answer.length - 1).split(";");
      let i = 0;
      return t.forEach((s) => {
        var o;
        const r = e.substring(1, e.length - 1).split(";");
        for (let h = 0; h < r.length; h++)
          if (((o = this.secondaryChecker) == null ? void 0 : o.check(s, r[h]).result) ?? !1) {
            r.splice(h, 1)[0], i++;
            break;
          }
      }), i !== t.length ? `Il y a ${i} réponse(s) juste sur ${t.length}` : "";
    }
    if (!this.answer.includes("]") && !this.answer.includes("[")) {
      const t = si(this.answer);
      return si(e) === t ? "" : "Une ou plusieurs valeurs sont fausses.";
    }
    return "";
  }
}
function ae(a) {
  return a.includes("[") || a.includes("]");
}
function ai(a) {
  return a === "!!" || a === "RR" || a === "RR^**" || a === "RR_+" || a === "RR_+^**" || a === "RR_-" || a === "RR_-^**";
}
const Os = "string";
class qs extends j {
  constructor(t) {
    super(t);
    C(this, "format", "réponse textuelle");
    this.type = E.STRING, this.description = Os;
  }
}
const Is = `vector,[paramètres]

**paramètres**
- co=accepte un vecteur colinéaire
- nb= les composantes sont des nombres
- frac= les composantes sont des fractions
`;
class Ms extends j {
  constructor(t) {
    super(t);
    C(this, "_colinear", !1);
    this.type = E.VECTOR, this.description = Is, this.config.includes("co") && (this._colinear = !0), this.secondaryChecker = new be();
  }
  get format() {
    var t;
    return `Vecteur ${this._colinear ? "colinéaire " : ""}sous la forme \\(\\begin{pmatrix}a\\\\b\\end{pmatrix}\\)<br>${(t = this.secondaryChecker) == null ? void 0 : t.format}`;
  }
  checkFormat(t) {
    return t[0] !== "(" || t[t.length - 1] !== ")" ? "des vecteurs commencent et se terminent par des parenthèses" : "";
  }
  checkValue(t) {
    var r;
    const i = t.split(";"), s = this.answer.split(";");
    if (i.length === 1)
      return "des vecteurs ont au moins deux valeurs";
    if (i.length !== s.length)
      return "la dimension du vecteur ne correspond pas";
    if (i[0] = we(i[0]), i[i.length - 1] = ve(i[i.length - 1]), s[0].startsWith("(") && (s[0] = we(s[0])), s[s.length - 1].endsWith(")") && (s[s.length - 1] = ve(s[s.length - 1])), this.config.includes("co")) {
      let o, h, c;
      for (let f = 0; f < i.length; f++) {
        if (o = new d(i[f]), h = new d(s[f]), o.isZero() && h.isNotZero() || o.isNotZero() && h.isZero())
          return `la ${f + 1}e composante est fausse.`;
        if (o.isNotZero() && h.isNotZero()) {
          if (c === void 0)
            c = new d(o.clone().divide(h));
          else if (o.isNotEqual(h.clone().multiply(c)))
            return `la ${f + 1}e composante n'est pas proportionnelle`;
        }
      }
    } else
      for (let o = 0; o < i.length; o++) {
        const h = ((r = this.secondaryChecker) == null ? void 0 : r.check(s[o], i[o])) ?? { result: !1, message: "" };
        if (!h.result)
          return `la ${o === 0 ? "1ère" : o + 1 + "ème"} composante n'est pas juste.<br>${h.message}`;
      }
    return "";
  }
}
const As = `order,[paramètres]

**paramètres**
aucun
`;
class Ss extends j {
  constructor(t) {
    super(t);
    C(this, "format", "");
    this.type = E.ORDER, this.description = As;
  }
}
const Cs = "qcm,[paramètres]";
class Ps extends j {
  constructor(t) {
    super(t);
    C(this, "format", "");
    this.type = E.QCM, this.description = Cs;
  }
}
const Rs = `study

**paramètres**
aucun
`;
class Ls extends j {
  constructor(t) {
    super(t);
    C(this, "format", "Tracer le graphe");
    this.type = E.STUDY, this.description = Rs;
  }
  checkValue(t) {
    const i = t.split(",").sort(), s = this.answer.split(",").sort(), r = s.length - i.length;
    if (r > 0)
      return `il manque ${r} élément${r > 1 ? "s" : ""}`;
    if (r < 0)
      return `il y a ${-r} élément${-r > 1 ? "s" : ""} en trop`;
    const o = [], h = [];
    for (let c = 0; c <= i.length; c++)
      i[c] !== s[c] && (s[c].split("&")[0] === i[c].split("&")[0] ? h.push(c + 1) : o.push(c + 1));
    return o.length > 0 ? `il y a ${o.length} erreur${o.length > 1 ? "s" : ""}` : h.length > 0 ? `il y a ${h.length} erreur${h.length > 1 ? "s" : ""} dans le tracé` : "";
  }
}
const _s = `tos,[paramètres]

**paramètres**
aucun
`;
class Vs extends j {
  constructor(t) {
    super(t);
    C(this, "grows");
    C(this, "coords");
    this.type = E.TABLE_OF_SIGNS, this.description = _s, this.grows = this.config.includes("g") || this.config.includes("grows"), this.coords = this.config.includes("c") || this.config.includes("coords"), this.secondaryChecker = new be();
  }
  get format() {
    var t;
    return this.coords ? `Tableau de croissance avec min / max<br/>Coordonnées au format ${(t = this.secondaryChecker) == null ? void 0 : t.format}` : this.grows ? "Tableau de croissance" : "Tableau de signes";
  }
  checkValue(t) {
    var i;
    if (this.answer !== t) {
      const s = {
        expected: this.answer.split("@")[0],
        provided: t.split("@")[0]
      }, r = {
        expected: this.answer.split("@")[1],
        provided: t.split("@")[1] ?? ""
      }, o = {
        expected: this.answer.split("@")[2] ?? "",
        provided: t.split("@")[2] ?? ""
      }, h = {
        expected: this.answer.split("@")[3] ?? "",
        provided: t.split("@")[3] ?? ""
      };
      if (s.expected !== s.provided)
        return "les zéros ne sont pas justes";
      if (r.expected !== r.provided)
        return "les signes ne sont pas justes";
      if (o.expected !== o.provided)
        return "la croissance n'est pas juste";
      if (h.expected.length > 0) {
        const c = h.expected.split(","), f = h.provided.split(",");
        if (c.length !== f.length)
          return "toutes les valeurs des extrêmes n'ont pas été données...";
        for (let p = 0; p < c.length; p++)
          if (!(((i = this.secondaryChecker) == null ? void 0 : i.check(c[p], f[p])) ?? { result: !1 }).result)
            return `il y a une erreur avec ${p === 0 ? "la 1ère" : "la " + (p + 1) + "ème"} coordonnée`;
      }
      return "Il y a une erreur dans le tableau de signes.";
    }
    return "";
  }
}
const zs = "type";
class Fs extends j {
  constructor(t) {
    super(t);
    C(this, "format", "Cliquer sur les bonnes lettres.");
    this.type = E.TYPE, this.description = zs;
  }
}
function Ds() {
  let a = {};
  return a[E.CARTESIAN] = ss, a[E.COORDINATES] = as, a[E.EQUATION] = hs, a[E.EXACT] = be, a[E.EXPONENTIAL] = bi, a[E.FRACTION] = us, a[E.FUNCTION] = ds, a[E.INPUT] = ms, a[E.LOGARITHM] = ki, a[E.NUMBER] = Ni, a[E.POLYNOMIAL] = Ye, a[E.PRIMITIVE] = ws, a[E.RATIONAL] = bs, a[E.SCIENTIFIC] = Ns, a[E.SOLUTION] = Ts, a[E.STRING] = qs, a[E.VECTOR] = Ms, a[E.ORDER] = Ss, a[E.QCM] = Ps, a[E.STUDY] = Ls, a[E.TABLE_OF_SIGNS] = Vs, a[E.TYPE] = Fs, a;
}
var yt, Nt, Ei, je, $i;
class js {
  constructor(e) {
    vt(this, Nt);
    vt(this, yt);
    const [t, i] = (e == null ? void 0 : e.split("checker:")) ?? [];
    return bt(this, yt, jt(this, Nt, je).call(this, t ?? "")), i !== void 0 && (Y(this, yt).secondaryChecker = jt(this, Nt, je).call(this, i)), this;
  }
  get checker() {
    return Y(this, yt);
  }
  set checker(e) {
    bt(this, yt, e);
  }
  get secondaryChecker() {
    return Y(this, yt).secondaryChecker;
  }
  set secondaryChecker(e) {
    Y(this, yt).secondaryChecker = e;
  }
  check(e, t) {
    return Y(this, yt).check(e, t);
  }
}
yt = new WeakMap(), Nt = new WeakSet(), Ei = function(e) {
  const [t, ...i] = e.split(",");
  return { checker: qi(t), options: i.filter((s) => s !== "") };
}, je = function(e) {
  const { checker: t, options: i } = jt(this, Nt, Ei).call(this, e), s = jt(this, Nt, $i).call(this, t);
  if (s === null)
    throw new Error(`Checker ${t} not found`);
  return new s(i);
}, $i = function(e) {
  return Ds()[e] ?? null;
};
export {
  E as CHECKERS,
  ss as CartesianChecker,
  as as CoordChecker,
  hs as EquationChecker,
  be as ExactChecker,
  bi as ExpChecker,
  us as FractionChecker,
  ds as FunctionChecker,
  ms as InputChecker,
  ki as LogChecker,
  Ni as NumberChecker,
  Ss as OrderChecker,
  js as PiChecker,
  Ye as PolynomChecker,
  ws as PrimitiveChecker,
  Ps as QcmChecker,
  bs as RationalChecker,
  Ns as ScientificChecker,
  Ts as SolutionChecker,
  qs as StringChecker,
  Ls as StudyChecker,
  Vs as TableofsignChecker,
  Fs as TypeChecker,
  Ms as VectorChecker,
  qi as checkerNameToEnum,
  Ds as checkersList
};
//# sourceMappingURL=pichecker.js.map
