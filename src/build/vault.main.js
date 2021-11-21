// Automatically generated with Reach 0.1.7 (38e9cf03)
/* eslint-disable */
export const _version = '0.1.7';
export const _versionHash = '0.1.7 (38e9cf03)';
export const _backendVersion = 5;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    collateral: ctc1,
    collateralRatio: ctc1,
    collateralValue: ctc1,
    hf: ctc1,
    vaultDebt: ctc1
    });
  
  return {
    infos: {
      State: {
        read: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v1874] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [v1874, v1885, v1886, v1887] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1874, v1885, v1886, v1887, v1917, v1918, v1919, v1921, v1922, v1934] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v1874, v1885, v1886, v1887, v1917, v1918, v1919, v1921, v1922, v1934, v1949] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [v1874, v1885, v1886, v1887, v1917, v1918, v1919, v1921, v1922, v1934, v1949] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1885, v1886, v1887, v1917, v1919, v1922, v1949, v1970, v1985, v1993] = svs;
              return (await ((async () => {
                
                const v1998 = {
                  collateral: v1917,
                  collateralRatio: v1985,
                  collateralValue: v1919,
                  hf: v1993,
                  vaultDebt: v1970
                  };
                
                return v1998;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9))) {
              const [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100] = svs;
              return (await ((async () => {
                
                const v2098 = {
                  collateral: v2021,
                  collateralRatio: v2085,
                  collateralValue: v2078,
                  hf: v2092,
                  vaultDebt: v2014
                  };
                
                return v2098;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10))) {
              const [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2085, v2092, v3571, v3701, v3705, v3706] = svs;
              return (await ((async () => {
                
                const v2098 = {
                  collateral: v2021,
                  collateralRatio: v2085,
                  collateralValue: v2078,
                  hf: v2092,
                  vaultDebt: v2014
                  };
                
                return v2098;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc4
          }
        }
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc0, ctc1, ctc2],
      3: [ctc0, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1],
      4: [ctc0, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1, ctc0],
      5: [ctc0, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc0, ctc1, ctc0],
      6: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc0, ctc0, ctc1, ctc1, ctc1],
      9: [ctc0, ctc2, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc3, ctc1, ctc1, ctc1],
      10: [ctc0, ctc2, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function FeeCollector(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for FeeCollector expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for FeeCollector expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Data({
    Liquidator_liquidateVault0: ctc3,
    Oracle_updatePrice0: ctc3,
    RecoveryToggler_toggleRecoveryMode0: ctc5,
    VaultOwner_depositCollateral0: ctc3,
    VaultOwner_mintToken0: ctc3,
    VaultOwner_returnVaultDebt0: ctc3,
    VaultOwner_withdrawCollateral0: ctc3,
    VaultRedeemer_redeemVault0: ctc3
    });
  const ctc7 = stdlib.T_Object({
    collateral: ctc0,
    collateralRatio: ctc0,
    collateralValue: ctc0,
    hf: ctc0,
    vaultDebt: ctc0
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1876, time: v1875, didSend: v19, from: v1874 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v1886, v1887], secs: v1889, time: v1888, didSend: v35, from: v1885 } = txn2;
  ;
  ;
  const v1891 = stdlib.gt(v1886, stdlib.checkedBigNumberify('./src/vault.rsh:115:36:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1891, {
    at: './src/vault.rsh:115:10:application',
    fs: [],
    msg: null,
    who: 'FeeCollector'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 6,
    funcNum: 2,
    out_tys: [ctc0, ctc0, ctc0, ctc0, ctc0, ctc2],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v1917, v1918, v1919, v1920, v1921, v1922], secs: v1924, time: v1923, didSend: v79, from: v1916 } = txn3;
  ;
  const v1926 = stdlib.addressEq(v1874, v1916);
  stdlib.assert(v1926, {
    at: './src/vault.rsh:137:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FeeCollector'
    });
  const v1927 = stdlib.le(v1918, v1920);
  stdlib.assert(v1927, {
    at: './src/vault.rsh:145:10:application',
    fs: [],
    msg: 'initial debt <= initialMaximumMint',
    who: 'FeeCollector'
    });
  const v1928 = stdlib.gt(v1917, stdlib.checkedBigNumberify('./src/vault.rsh:147:31:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1928, {
    at: './src/vault.rsh:147:10:application',
    fs: [],
    msg: null,
    who: 'FeeCollector'
    });
  const v1929 = stdlib.gt(v1918, stdlib.checkedBigNumberify('./src/vault.rsh:148:30:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1929, {
    at: './src/vault.rsh:148:10:application',
    fs: [],
    msg: null,
    who: 'FeeCollector'
    });
  const v1930 = stdlib.mul(v1917, v1886);
  const v1931 = stdlib.div(v1930, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
  const v1932 = stdlib.eq(v1919, v1931);
  stdlib.assert(v1932, {
    at: './src/vault.rsh:149:10:application',
    fs: [],
    msg: null,
    who: 'FeeCollector'
    });
  const v1933 = stdlib.mul(v1919, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
  const v1934 = stdlib.div(v1933, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
  let v1935;
  const v1936 = stdlib.lt(v1934, stdlib.checkedBigNumberify('./src/vault.rsh:151:69:decimal', stdlib.UInt_max, 0));
  if (v1936) {
    v1935 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    v1935 = v1934;
    }
  const v1937 = stdlib.eq(v1920, v1935);
  stdlib.assert(v1937, {
    at: './src/vault.rsh:151:10:application',
    fs: [],
    msg: null,
    who: 'FeeCollector'
    });
  let v1938;
  const v1939 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v1918);
  const v1940 = stdlib.div(v1939, stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
  const v1941 = stdlib.eq(v1940, v1918);
  if (v1941) {
    v1938 = v1939;
    }
  else {
    v1938 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
    }
  let v1943;
  const v1944 = stdlib.eq(v1938, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  if (v1944) {
    v1943 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1946 = stdlib.div(v1938, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
    v1943 = v1946;
    }
  const v1947 = stdlib.eq(v1921, v1943);
  stdlib.assert(v1947, {
    at: './src/vault.rsh:152:10:application',
    fs: [],
    msg: null,
    who: 'FeeCollector'
    });
  const v1948 = stdlib.gt(v1921, stdlib.checkedBigNumberify('./src/vault.rsh:153:28:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1948, {
    at: './src/vault.rsh:153:10:application',
    fs: [],
    msg: null,
    who: 'FeeCollector'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v1874, v1885, v1886, v1887, v1917, v1918, v1919, v1921, v1922, v1934],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1923,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v1951, time: v1950, didSend: v112, from: v1949 } = txn4;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc2, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1951, time: v1950, didSend: v112, from: v1949 } = txn4;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1959, time: v1958, didSend: v123, from: v1957 } = txn5;
  ;
  const v1962 = stdlib.addressEq(v1874, v1957);
  stdlib.assert(v1962, {
    at: './src/vault.rsh:162:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FeeCollector'
    });
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1965, time: v1964, didSend: v131, from: v1963 } = txn6;
  ;
  ;
  const v1969 = stdlib.addressEq(v1885, v1963);
  stdlib.assert(v1969, {
    at: './src/vault.rsh:166:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FeeCollector'
    });
  const v1970 = stdlib.sub(v1918, v1921);
  ;
  ;
  let v1979;
  const v1980 = stdlib.eq(v1919, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
  if (v1980) {
    v1979 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1981 = stdlib.mul(v1919, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
    const v1982 = stdlib.div(v1981, v1919);
    const v1983 = stdlib.eq(v1982, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
    if (v1983) {
      v1979 = v1981;
      }
    else {
      v1979 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
      }
    }
  let v1985;
  const v1986 = stdlib.eq(v1979, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  const v1987 = stdlib.eq(v1970, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
  const v1988 = v1986 ? true : v1987;
  if (v1988) {
    v1985 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1989 = stdlib.div(v1979, v1970);
    v1985 = v1989;
    }
  let v1993;
  const v1994 = stdlib.eq(v1934, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  const v1996 = v1994 ? true : v1987;
  if (v1996) {
    v1993 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1997 = stdlib.div(v1934, v1970);
    v1993 = v1997;
    }
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2001, time: v2000, didSend: v171, from: v1999 } = txn7;
  ;
  const v2003 = stdlib.addressEq(v1885, v1999);
  stdlib.assert(v2003, {
    at: './src/vault.rsh:185:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FeeCollector'
    });
  let v2012 = v1886;
  let v2014 = v1970;
  let v2015 = v2000;
  let v2021 = v1917;
  
  while (await (async () => {
    const v2072 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
    const v2074 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
    const v2075 = v2072 ? true : v2074;
    
    return v2075;})()) {
    const v2077 = stdlib.mul(v2021, v2012);
    const v2078 = stdlib.div(v2077, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
    let v2079;
    const v2080 = stdlib.eq(v2078, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
    if (v2080) {
      v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2081 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
      const v2082 = stdlib.div(v2081, v2078);
      const v2083 = stdlib.eq(v2082, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
      if (v2083) {
        v2079 = v2081;
        }
      else {
        v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
        }
      }
    let v2085;
    const v2086 = stdlib.eq(v2079, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
    const v2087 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
    const v2088 = v2086 ? true : v2087;
    if (v2088) {
      v2085 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2089 = stdlib.div(v2079, v2014);
      v2085 = v2089;
      }
    const v2090 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
    const v2091 = stdlib.div(v2090, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
    let v2092;
    const v2093 = stdlib.eq(v2091, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
    const v2095 = v2093 ? true : v2087;
    if (v2095) {
      v2092 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2096 = stdlib.div(v2091, v2014);
      v2092 = v2096;
      }
    const v2100 = stdlib.add(v2015, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc6],
      timeoutAt: ['time', v2100],
      waitIfNotPresent: false
      }));
    if (txn8.didTimeout) {
      const txn9 = await (ctc.sendrecv({
        args: [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100],
        evt_cnt: 0,
        funcNum: 9,
        lct: v2015,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v4831, time: v4830, didSend: v1823, from: v4829 } = txn9;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv2012 = v2012;
          const cv2014 = v2014;
          const cv2015 = v4830;
          const cv2021 = v2021;
          
          await (async () => {
            const v2012 = cv2012;
            const v2014 = cv2014;
            const v2015 = cv2015;
            const v2021 = cv2021;
            
            if (await (async () => {
              const v2072 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
              const v2074 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
              const v2075 = v2072 ? true : v2074;
              
              return v2075;})()) {
              const v2077 = stdlib.mul(v2021, v2012);
              const v2078 = stdlib.div(v2077, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v2079;
              const v2080 = stdlib.eq(v2078, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v2080) {
                v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2081 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v2082 = stdlib.div(v2081, v2078);
                const v2083 = stdlib.eq(v2082, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v2083) {
                  v2079 = v2081;
                  }
                else {
                  v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v2085;
              const v2086 = stdlib.eq(v2079, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v2087 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v2088 = v2086 ? true : v2087;
              if (v2088) {
                v2085 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2089 = stdlib.div(v2079, v2014);
                v2085 = v2089;
                }
              const v2090 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v2091 = stdlib.div(v2090, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v2092;
              const v2093 = stdlib.eq(v2091, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v2095 = v2093 ? true : v2087;
              if (v2095) {
                v2092 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2096 = stdlib.div(v2091, v2014);
                v2092 = v2096;
                }
              const v2100 = stdlib.add(v2015, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1887
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc2, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v4831, time: v4830, didSend: v1823, from: v4829 } = txn9;
      ;
      const cv2012 = v2012;
      const cv2014 = v2014;
      const cv2015 = v4830;
      const cv2021 = v2021;
      
      v2012 = cv2012;
      v2014 = cv2014;
      v2015 = cv2015;
      v2021 = cv2021;
      
      continue;
      }
    else {
      const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn8;
      switch (v2301[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2304 = v2301[1];
          const v2305 = v2304[stdlib.checkedBigNumberify('./src/vault.rsh:372:9:spread', stdlib.UInt_max, 0)];
          let v2306;
          let v2307;
          const v2308 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:89:64:decimal', stdlib.UInt_max, 25), v2014);
          const v2309 = stdlib.div(v2308, stdlib.checkedBigNumberify('./src/utils.rsh:89:64:decimal', stdlib.UInt_max, 25));
          const v2310 = stdlib.eq(v2309, v2014);
          if (v2310) {
            v2307 = v2308;
            }
          else {
            v2307 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v2312;
          const v2313 = stdlib.eq(v2307, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v2313) {
            v2312 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2315 = stdlib.div(v2307, stdlib.checkedBigNumberify('./src/utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
            v2312 = v2315;
            }
          const v2316 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:380:23:decimal', stdlib.UInt_max, 0));
          const v2317 = stdlib.lt(v2092, stdlib.checkedBigNumberify('./src/utils.rsh:19:38:decimal', stdlib.UInt_max, 1));
          const v2318 = v2316 ? v2317 : false;
          const v2319 = stdlib.lt(v2085, stdlib.checkedBigNumberify('./src/utils.rsh:12:41:decimal', stdlib.UInt_max, 110));
          const v2320 = v2318 ? v2319 : false;
          const v2321 = stdlib.ge(v2305, v2014);
          const v2322 = v2320 ? v2321 : false;
          if (v2322) {
            const v2323 = stdlib.add(v2014, v2312);
            const v2324 = [v2323, v1887];
            const v2325 = [stdlib.checkedBigNumberify('./src/vault.rsh:386:19:decimal', stdlib.UInt_max, 0), v2324];
            v2306 = v2325;
            }
          else {
            const v2326 = [stdlib.checkedBigNumberify('./src/vault.rsh:388:23:decimal', stdlib.UInt_max, 0), v1887];
            const v2327 = [stdlib.checkedBigNumberify('./src/vault.rsh:388:19:decimal', stdlib.UInt_max, 0), v2326];
            v2306 = v2327;
            }
          const v2329 = v2306[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 0)];
          const v2330 = v2306[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 1)];
          const v2331 = v2330[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 0)];
          const v2337 = stdlib.add(v2021, v2329);
          ;
          ;
          undefined;
          stdlib.assert(v2321, {
            at: './src/vault.rsh:392:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:372:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          await txn8.getOutput('api', 'v2322', ctc4, v2322);
          if (v2322) {
            const v2359 = stdlib.sub(v2337, v2337);
            ;
            ;
            let v2364;
            if (v2310) {
              v2364 = v2308;
              }
            else {
              v2364 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v2369;
            const v2370 = stdlib.eq(v2364, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v2370) {
              v2369 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v2372 = stdlib.div(v2364, stdlib.checkedBigNumberify('./src/utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
              v2369 = v2372;
              }
            ;
            const cv2012 = v2012;
            const cv2014 = stdlib.checkedBigNumberify('./src/vault.rsh:405:19:decimal', stdlib.UInt_max, 0);
            const cv2015 = v2302;
            const cv2021 = v2359;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          else {
            const cv2012 = v2012;
            const cv2014 = v2014;
            const cv2015 = v2302;
            const cv2021 = v2337;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2634 = v2301[1];
          ;
          ;
          undefined;
          const v2699 = v2634[stdlib.checkedBigNumberify('./src/vault.rsh:412:9:spread', stdlib.UInt_max, 0)];
          const v2701 = stdlib.mul(v2021, v2699);
          let v2702;
          const v2703 = stdlib.eq(v2701, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v2703) {
            v2702 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2704 = stdlib.mul(v2701, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v2705 = stdlib.div(v2704, v2701);
            const v2706 = stdlib.eq(v2705, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v2706) {
              v2702 = v2704;
              }
            else {
              v2702 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v2708;
          const v2709 = stdlib.eq(v2702, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2711 = v2709 ? true : v2087;
          if (v2711) {
            v2708 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2712 = stdlib.div(v2702, v2014);
            v2708 = v2712;
            }
          const v2713 = stdlib.mul(v2701, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v2714 = stdlib.div(v2713, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v2715;
          const v2716 = stdlib.eq(v2714, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2718 = v2716 ? true : v2087;
          if (v2718) {
            v2715 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2719 = stdlib.div(v2714, v2014);
            v2715 = v2719;
            }
          const v2721 = {
            collateral: v2021,
            collateralRatio: v2708,
            collateralValue: v2701,
            hf: v2715,
            vaultDebt: v2014
            };
          await txn8.getOutput('api', 'v2721', ctc7, v2721);
          const cv2012 = v2699;
          const cv2014 = v2014;
          const cv2015 = v2302;
          const cv2021 = v2021;
          
          v2012 = cv2012;
          v2014 = cv2014;
          v2015 = cv2015;
          v2021 = cv2021;
          
          continue;
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2945 = v2301[1];
          ;
          ;
          undefined;
          const v3041 = true;
          await txn8.getOutput('api', 'v3041', ctc4, v3041);
          const cv2012 = v2012;
          const cv2014 = v2014;
          const cv2015 = v2302;
          const cv2021 = v2021;
          
          v2012 = cv2012;
          v2014 = cv2014;
          v2015 = cv2015;
          v2021 = cv2021;
          
          continue;
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3256 = v2301[1];
          const v3257 = v3256[stdlib.checkedBigNumberify('./src/vault.rsh:354:9:spread', stdlib.UInt_max, 0)];
          const v3273 = stdlib.add(v2021, v3257);
          ;
          ;
          undefined;
          const v3364 = stdlib.gt(v3257, stdlib.checkedBigNumberify('./src/vault.rsh:365:37:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3364, {
            at: './src/vault.rsh:365:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)'],
            msg: 'Cannot deposit 0 collateral tokens',
            who: 'FeeCollector'
            });
          const v3365 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v3365, {
            at: './src/vault.rsh:366:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'FeeCollector'
            });
          const v3366 = true;
          await txn8.getOutput('api', 'v3366', ctc4, v3366);
          const cv2012 = v2012;
          const cv2014 = v2014;
          const cv2015 = v2302;
          const cv2021 = v3273;
          
          v2012 = cv2012;
          v2014 = cv2014;
          v2015 = cv2015;
          v2021 = cv2021;
          
          continue;
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3570 = v2301[1];
          const v3571 = v3570[stdlib.checkedBigNumberify('./src/vault.rsh:217:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v3689 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v3689, {
            at: './src/vault.rsh:230:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'FeeCollector'
            });
          const v3690 = stdlib.gt(v3571, stdlib.checkedBigNumberify('./src/vault.rsh:231:32:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3690, {
            at: './src/vault.rsh:231:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
            msg: 'You must mint at least 1 token',
            who: 'FeeCollector'
            });
          let v3693;
          const v3694 = stdlib.lt(v2091, v2014);
          if (v3694) {
            v3693 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3695 = stdlib.sub(v2091, v2014);
            v3693 = v3695;
            }
          let v3696;
          const v3697 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v3571);
          const v3698 = stdlib.div(v3697, stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
          const v3699 = stdlib.eq(v3698, v3571);
          if (v3699) {
            v3696 = v3697;
            }
          else {
            v3696 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v3701;
          const v3702 = stdlib.eq(v3696, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v3702) {
            v3701 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3704 = stdlib.div(v3696, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
            v3701 = v3704;
            }
          const v3705 = stdlib.sub(v3571, v3701);
          const v3706 = stdlib.add(v2014, v3705);
          let v3707;
          if (v2080) {
            v3707 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3709 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v3710 = stdlib.div(v3709, v2078);
            const v3711 = stdlib.eq(v3710, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v3711) {
              v3707 = v3709;
              }
            else {
              v3707 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v3713;
          const v3714 = stdlib.eq(v3707, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v3715 = stdlib.eq(v3706, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v3716 = v3714 ? true : v3715;
          if (v3716) {
            v3713 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3717 = stdlib.div(v3707, v3706);
            v3713 = v3717;
            }
          const v3718 = stdlib.ge(v3713, stdlib.checkedBigNumberify('./src/utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v3719 = stdlib.gt(v3693, stdlib.checkedBigNumberify('./src/vault.rsh:248:32:decimal', stdlib.UInt_max, 0));
          const v3720 = v3718 ? v3719 : false;
          const v3722 = v3720 ? v3690 : false;
          const v3723 = stdlib.le(v3571, v3693);
          const v3724 = v3722 ? v3723 : false;
          await txn8.getOutput('api', 'v3724', ctc4, v3724);
          if (v3724) {
            stdlib.assert(v3723, {
              at: './src/vault.rsh:254:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: 'The request mint amount is more than the maximum allowed',
              who: 'FeeCollector'
              });
            let v3731;
            if (v3699) {
              v3731 = v3697;
              }
            else {
              v3731 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v3736;
            const v3737 = stdlib.eq(v3731, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v3737) {
              v3736 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v3739 = stdlib.div(v3731, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
              v3736 = v3739;
              }
            const v3740 = stdlib.eq(v3701, v3736);
            stdlib.assert(v3740, {
              at: './src/vault.rsh:256:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: null,
              who: 'FeeCollector'
              });
            const v3742 = stdlib.eq(v3705, v3705);
            stdlib.assert(v3742, {
              at: './src/vault.rsh:257:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: null,
              who: 'FeeCollector'
              });
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 10,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v3745, time: v3744, didSend: v1680, from: v3743 } = txn9;
            ;
            ;
            const v3749 = stdlib.addressEq(v1885, v3743);
            stdlib.assert(v3749, {
              at: './src/vault.rsh:259:19:dot',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: 'sender correct',
              who: 'FeeCollector'
              });
            ;
            ;
            const cv2012 = v2012;
            const cv2014 = v3706;
            const cv2015 = v3744;
            const cv2021 = v2021;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;
            
            }
          else {
            const cv2012 = v2012;
            const cv2014 = v2014;
            const cv2015 = v2302;
            const cv2021 = v2021;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3884 = v2301[1];
          const v3885 = v3884[stdlib.checkedBigNumberify('./src/vault.rsh:268:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v4085 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v4085, {
            at: './src/vault.rsh:285:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'FeeCollector'
            });
          const v4086 = stdlib.le(v3885, v2014);
          const v4087 = stdlib.gt(v3885, stdlib.checkedBigNumberify('./src/vault.rsh:287:28:decimal', stdlib.UInt_max, 0));
          const v4088 = v4086 ? v4087 : false;
          const v4089 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:288:23:decimal', stdlib.UInt_max, 0));
          const v4090 = v4088 ? v4089 : false;
          stdlib.assert(v4090, {
            at: './src/vault.rsh:286:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          ;
          const v4095 = stdlib.sub(v2014, v3885);
          const v4096 = stdlib.eq(v4095, stdlib.checkedBigNumberify('./src/vault.rsh:291:69:decimal', stdlib.UInt_max, 0));
          const v4097 = true;
          await txn8.getOutput('api', 'v4097', ctc4, v4097);
          if (v4096) {
            stdlib.assert(v4096, {
              at: './src/vault.rsh:294:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
              msg: null,
              who: 'FeeCollector'
              });
            const v4109 = stdlib.sub(v2021, v2021);
            ;
            const cv2012 = v2012;
            const cv2014 = stdlib.checkedBigNumberify('./src/vault.rsh:296:19:decimal', stdlib.UInt_max, 0);
            const cv2015 = v2302;
            const cv2021 = v4109;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          else {
            const cv2012 = v2012;
            const cv2014 = v4095;
            const cv2015 = v2302;
            const cv2021 = v2021;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4198 = v2301[1];
          const v4199 = v4198[stdlib.checkedBigNumberify('./src/vault.rsh:302:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v4437 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v4437, {
            at: './src/vault.rsh:325:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'FeeCollector'
            });
          const v4438 = stdlib.gt(v4199, stdlib.checkedBigNumberify('./src/vault.rsh:326:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4438, {
            at: './src/vault.rsh:326:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          const v4440 = stdlib.lt(v4199, v2021);
          stdlib.assert(v4440, {
            at: './src/vault.rsh:327:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'Cannot withdraw more than the balance of this contract',
            who: 'FeeCollector'
            });
          const v4441 = stdlib.gt(v2085, stdlib.checkedBigNumberify('./src/utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          stdlib.assert(v4441, {
            at: './src/vault.rsh:329:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'Vault collateral ratio is not healthy',
            who: 'FeeCollector'
            });
          const v4443 = stdlib.sub(v2021, v4199);
          const v4444 = stdlib.mul(v4443, v2012);
          const v4445 = stdlib.gt(v4444, stdlib.checkedBigNumberify('./src/vault.rsh:334:11:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4445, {
            at: './src/vault.rsh:333:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'Collateral value after withdrawal must not be 0',
            who: 'FeeCollector'
            });
          let v4446;
          const v4447 = stdlib.eq(v4444, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v4447) {
            v4446 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4448 = stdlib.mul(v4444, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v4449 = stdlib.div(v4448, v4444);
            const v4450 = stdlib.eq(v4449, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v4450) {
              v4446 = v4448;
              }
            else {
              v4446 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v4452;
          const v4453 = stdlib.eq(v4446, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v4455 = v4453 ? true : v2087;
          if (v4455) {
            v4452 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4456 = stdlib.div(v4446, v2014);
            v4452 = v4456;
            }
          const v4459 = v4438 ? v4441 : false;
          const v4460 = stdlib.gt(v4452, stdlib.checkedBigNumberify('./src/utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v4461 = v4459 ? v4460 : false;
          const v4464 = v4461 ? v4440 : false;
          await txn8.getOutput('api', 'v4464', ctc4, v4464);
          if (v4464) {
            ;
            const cv2012 = v2012;
            const cv2014 = v2014;
            const cv2015 = v2302;
            const cv2021 = v4443;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          else {
            const cv2012 = v2012;
            const cv2014 = v2014;
            const cv2015 = v2302;
            const cv2021 = v2021;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4512 = v2301[1];
          const v4513 = v4512[stdlib.checkedBigNumberify('./src/vault.rsh:429:9:spread', stdlib.UInt_max, 0)];
          const v4514 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:92:8:decimal', stdlib.UInt_max, 2), v4513);
          const v4515 = stdlib.div(v4514, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          const v4516 = stdlib.add(v4513, v4515);
          ;
          ;
          undefined;
          const v4797 = stdlib.div(v4513, v2012);
          const v4798 = stdlib.mul(v4797, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          const v4801 = stdlib.gt(v4513, stdlib.checkedBigNumberify('./src/vault.rsh:448:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4801, {
            at: './src/vault.rsh:448:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          const v4802 = stdlib.gt(v2012, stdlib.checkedBigNumberify('./src/vault.rsh:449:35:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4802, {
            at: './src/vault.rsh:449:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          const v4803 = stdlib.sub(v2014, v4513);
          const v4804 = stdlib.ge(v4803, stdlib.checkedBigNumberify('./src/vault.rsh:450:53:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4804, {
            at: './src/vault.rsh:450:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          stdlib.assert(v4804, {
            at: './src/vault.rsh:451:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          const v4808 = stdlib.ge(v2021, v4798);
          stdlib.assert(v4808, {
            at: './src/vault.rsh:452:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          ;
          const v4816 = stdlib.sub(v2021, v4798);
          ;
          ;
          const v4821 = true;
          await txn8.getOutput('api', 'v4821', ctc4, v4821);
          const cv2012 = v2012;
          const cv2014 = v4803;
          const cv2015 = v2302;
          const cv2021 = v4816;
          
          v2012 = cv2012;
          v2014 = cv2014;
          v2015 = cv2015;
          v2021 = cv2021;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Liquidator_liquidateVault(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Liquidator_liquidateVault expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Liquidator_liquidateVault expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Data({
    Liquidator_liquidateVault0: ctc4,
    Oracle_updatePrice0: ctc4,
    RecoveryToggler_toggleRecoveryMode0: ctc5,
    VaultOwner_depositCollateral0: ctc4,
    VaultOwner_mintToken0: ctc4,
    VaultOwner_returnVaultDebt0: ctc4,
    VaultOwner_withdrawCollateral0: ctc4,
    VaultRedeemer_redeemVault0: ctc4
    });
  const ctc7 = stdlib.T_Null;
  
  
  const [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2154 = stdlib.protect(ctc4, await interact.in(), {
    at: './src/vault.rsh:1:23:application',
    fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:372:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runLiquidator_liquidateVault0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'in',
    who: 'Liquidator_liquidateVault'
    });
  const v2155 = v2154[stdlib.checkedBigNumberify('./src/vault.rsh:372:9:spread', stdlib.UInt_max, 0)];
  const v2157 = stdlib.ge(v2155, v2014);
  stdlib.assert(v2157, {
    at: './src/vault.rsh:375:15:application',
    fs: ['at ./src/vault.rsh:372:9:application call to [unknown function] (defined at: ./src/vault.rsh:374:13:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:372:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runLiquidator_liquidateVault0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: null,
    who: 'Liquidator_liquidateVault'
    });
  
  const v2195 = ['Liquidator_liquidateVault0', v2154];
  let v2197;
  let v2198;
  const v2199 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:89:64:decimal', stdlib.UInt_max, 25), v2014);
  const v2200 = stdlib.div(v2199, stdlib.checkedBigNumberify('./src/utils.rsh:89:64:decimal', stdlib.UInt_max, 25));
  const v2201 = stdlib.eq(v2200, v2014);
  if (v2201) {
    v2198 = v2199;
    }
  else {
    v2198 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
    }
  let v2203;
  const v2204 = stdlib.eq(v2198, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  if (v2204) {
    v2203 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v2206 = stdlib.div(v2198, stdlib.checkedBigNumberify('./src/utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
    v2203 = v2206;
    }
  const v2207 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:380:23:decimal', stdlib.UInt_max, 0));
  const v2208 = stdlib.lt(v2092, stdlib.checkedBigNumberify('./src/utils.rsh:19:38:decimal', stdlib.UInt_max, 1));
  const v2209 = v2207 ? v2208 : false;
  const v2210 = stdlib.lt(v2085, stdlib.checkedBigNumberify('./src/utils.rsh:12:41:decimal', stdlib.UInt_max, 110));
  const v2211 = v2209 ? v2210 : false;
  const v2213 = v2211 ? v2157 : false;
  if (v2213) {
    const v2214 = stdlib.add(v2014, v2203);
    const v2215 = [v2214, v1887];
    const v2216 = [stdlib.checkedBigNumberify('./src/vault.rsh:386:19:decimal', stdlib.UInt_max, 0), v2215];
    v2197 = v2216;
    }
  else {
    const v2217 = [stdlib.checkedBigNumberify('./src/vault.rsh:388:23:decimal', stdlib.UInt_max, 0), v1887];
    const v2218 = [stdlib.checkedBigNumberify('./src/vault.rsh:388:19:decimal', stdlib.UInt_max, 0), v2217];
    v2197 = v2218;
    }
  const v2219 = v2197[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 0)];
  const v2220 = v2197[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 1)];
  const v2221 = v2220[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 0)];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100, v2195],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v2219, [[v2221, v1887]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
      
      switch (v2301[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2304 = v2301[1];
          const v2305 = v2304[stdlib.checkedBigNumberify('./src/vault.rsh:372:9:spread', stdlib.UInt_max, 0)];
          let v2306;
          let v2307;
          if (v2201) {
            v2307 = v2199;
            }
          else {
            v2307 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v2312;
          const v2313 = stdlib.eq(v2307, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v2313) {
            v2312 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2315 = stdlib.div(v2307, stdlib.checkedBigNumberify('./src/utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
            v2312 = v2315;
            }
          const v2321 = stdlib.ge(v2305, v2014);
          const v2322 = v2211 ? v2321 : false;
          if (v2322) {
            const v2323 = stdlib.add(v2014, v2312);
            const v2324 = [v2323, v1887];
            const v2325 = [stdlib.checkedBigNumberify('./src/vault.rsh:386:19:decimal', stdlib.UInt_max, 0), v2324];
            v2306 = v2325;
            }
          else {
            const v2326 = [stdlib.checkedBigNumberify('./src/vault.rsh:388:23:decimal', stdlib.UInt_max, 0), v1887];
            const v2327 = [stdlib.checkedBigNumberify('./src/vault.rsh:388:19:decimal', stdlib.UInt_max, 0), v2326];
            v2306 = v2327;
            }
          const v2329 = v2306[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 0)];
          const v2330 = v2306[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 1)];
          const v2331 = v2330[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 0)];
          const v2337 = stdlib.add(v2021, v2329);
          sim_r.txns.push({
            amt: v2329,
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: v2331,
            kind: 'to',
            tok: v1887
            });
          undefined;
          stdlib.assert(v2321, {
            at: './src/vault.rsh:392:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:372:9:function exp)'],
            msg: null,
            who: 'Liquidator_liquidateVault'
            });
          const v2350 = await txn1.getOutput('api', 'v2322', ctc3, v2322);
          
          if (v2322) {
            const v2359 = stdlib.sub(v2337, v2337);
            sim_r.txns.push({
              amt: v2337,
              kind: 'from',
              to: v2300,
              tok: undefined
              });
            sim_r.txns.push({
              amt: v2014,
              kind: 'from',
              to: v1885,
              tok: v1887
              });
            let v2364;
            if (v2201) {
              v2364 = v2199;
              }
            else {
              v2364 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v2369;
            const v2370 = stdlib.eq(v2364, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v2370) {
              v2369 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v2372 = stdlib.div(v2364, stdlib.checkedBigNumberify('./src/utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
              v2369 = v2372;
              }
            sim_r.txns.push({
              amt: v2369,
              kind: 'from',
              to: v1949,
              tok: v1887
              });
            const v63095 = v2012;
            const v63096 = stdlib.checkedBigNumberify('./src/vault.rsh:405:19:decimal', stdlib.UInt_max, 0);
            const v63098 = v2359;
            const v63099 = stdlib.gt(stdlib.checkedBigNumberify('./src/vault.rsh:405:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
            const v63100 = stdlib.gt(v2359, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
            const v63101 = v63099 ? true : v63100;
            if (v63101) {
              const v63102 = stdlib.mul(v2359, v2012);
              const v63103 = stdlib.div(v63102, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v63104;
              const v63105 = stdlib.eq(v63103, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v63105) {
                v63104 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63106 = stdlib.mul(v63103, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v63107 = stdlib.div(v63106, v63103);
                const v63108 = stdlib.eq(v63107, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v63108) {
                  v63104 = v63106;
                  }
                else {
                  v63104 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v63109;
              const v63110 = stdlib.eq(v63104, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63111 = stdlib.eq(stdlib.checkedBigNumberify('./src/vault.rsh:405:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v63112 = v63110 ? true : v63111;
              if (v63112) {
                v63109 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63113 = stdlib.div(v63104, stdlib.checkedBigNumberify('./src/vault.rsh:405:19:decimal', stdlib.UInt_max, 0));
                v63109 = v63113;
                }
              const v63114 = stdlib.mul(v63103, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v63115 = stdlib.div(v63114, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v63116;
              const v63117 = stdlib.eq(v63115, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63118 = v63117 ? true : v63111;
              if (v63118) {
                v63116 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63119 = stdlib.div(v63115, stdlib.checkedBigNumberify('./src/vault.rsh:405:19:decimal', stdlib.UInt_max, 0));
                v63116 = v63119;
                }
              const v63120 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1887
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }}
          else {
            const v63139 = v2012;
            const v63140 = v2014;
            const v63142 = v2337;
            const v63144 = stdlib.gt(v2337, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
            const v63145 = v2207 ? true : v63144;
            if (v63145) {
              const v63146 = stdlib.mul(v2337, v2012);
              const v63147 = stdlib.div(v63146, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v63148;
              const v63149 = stdlib.eq(v63147, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v63149) {
                v63148 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63150 = stdlib.mul(v63147, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v63151 = stdlib.div(v63150, v63147);
                const v63152 = stdlib.eq(v63151, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v63152) {
                  v63148 = v63150;
                  }
                else {
                  v63148 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v63153;
              const v63154 = stdlib.eq(v63148, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63155 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v63156 = v63154 ? true : v63155;
              if (v63156) {
                v63153 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63157 = stdlib.div(v63148, v2014);
                v63153 = v63157;
                }
              const v63158 = stdlib.mul(v63147, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v63159 = stdlib.div(v63158, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v63160;
              const v63161 = stdlib.eq(v63159, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63162 = v63161 ? true : v63155;
              if (v63162) {
                v63160 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63163 = stdlib.div(v63159, v2014);
                v63160 = v63163;
                }
              const v63164 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1887
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2634 = v2301[1];
          
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2945 = v2301[1];
          
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3256 = v2301[1];
          
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3570 = v2301[1];
          
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3884 = v2301[1];
          
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4198 = v2301[1];
          
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4512 = v2301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
  switch (v2301[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2304 = v2301[1];
      const v2305 = v2304[stdlib.checkedBigNumberify('./src/vault.rsh:372:9:spread', stdlib.UInt_max, 0)];
      let v2306;
      let v2307;
      if (v2201) {
        v2307 = v2199;
        }
      else {
        v2307 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
        }
      let v2312;
      const v2313 = stdlib.eq(v2307, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      if (v2313) {
        v2312 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2315 = stdlib.div(v2307, stdlib.checkedBigNumberify('./src/utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
        v2312 = v2315;
        }
      const v2321 = stdlib.ge(v2305, v2014);
      const v2322 = v2211 ? v2321 : false;
      if (v2322) {
        const v2323 = stdlib.add(v2014, v2312);
        const v2324 = [v2323, v1887];
        const v2325 = [stdlib.checkedBigNumberify('./src/vault.rsh:386:19:decimal', stdlib.UInt_max, 0), v2324];
        v2306 = v2325;
        }
      else {
        const v2326 = [stdlib.checkedBigNumberify('./src/vault.rsh:388:23:decimal', stdlib.UInt_max, 0), v1887];
        const v2327 = [stdlib.checkedBigNumberify('./src/vault.rsh:388:19:decimal', stdlib.UInt_max, 0), v2326];
        v2306 = v2327;
        }
      const v2329 = v2306[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 0)];
      const v2330 = v2306[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 1)];
      const v2331 = v2330[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 0)];
      const v2337 = stdlib.add(v2021, v2329);
      ;
      ;
      undefined;
      stdlib.assert(v2321, {
        at: './src/vault.rsh:392:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:372:9:function exp)'],
        msg: null,
        who: 'Liquidator_liquidateVault'
        });
      const v2350 = await txn1.getOutput('api', 'v2322', ctc3, v2322);
      if (v1498) {
        stdlib.protect(ctc7, await interact.out(v2304, v2350), {
          at: './src/vault.rsh:372:9:application',
          fs: ['at ./src/vault.rsh:372:9:application call to [unknown function] (defined at: ./src/vault.rsh:372:9:function exp)', 'at ./src/vault.rsh:399:18:application call to "apiReturn" (defined at: ./src/vault.rsh:372:9:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:372:9:function exp)'],
          msg: 'out',
          who: 'Liquidator_liquidateVault'
          });
        }
      else {
        }
      
      if (v2322) {
        const v2359 = stdlib.sub(v2337, v2337);
        ;
        ;
        let v2364;
        if (v2201) {
          v2364 = v2199;
          }
        else {
          v2364 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
          }
        let v2369;
        const v2370 = stdlib.eq(v2364, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        if (v2370) {
          v2369 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2372 = stdlib.div(v2364, stdlib.checkedBigNumberify('./src/utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
          v2369 = v2372;
          }
        ;
        const v63095 = v2012;
        const v63096 = stdlib.checkedBigNumberify('./src/vault.rsh:405:19:decimal', stdlib.UInt_max, 0);
        const v63098 = v2359;
        const v63099 = stdlib.gt(stdlib.checkedBigNumberify('./src/vault.rsh:405:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
        const v63100 = stdlib.gt(v2359, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
        const v63101 = v63099 ? true : v63100;
        if (v63101) {
          const v63102 = stdlib.mul(v2359, v2012);
          const v63103 = stdlib.div(v63102, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          let v63104;
          const v63105 = stdlib.eq(v63103, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v63105) {
            v63104 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63106 = stdlib.mul(v63103, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v63107 = stdlib.div(v63106, v63103);
            const v63108 = stdlib.eq(v63107, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v63108) {
              v63104 = v63106;
              }
            else {
              v63104 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v63109;
          const v63110 = stdlib.eq(v63104, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63111 = stdlib.eq(stdlib.checkedBigNumberify('./src/vault.rsh:405:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v63112 = v63110 ? true : v63111;
          if (v63112) {
            v63109 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63113 = stdlib.div(v63104, stdlib.checkedBigNumberify('./src/vault.rsh:405:19:decimal', stdlib.UInt_max, 0));
            v63109 = v63113;
            }
          const v63114 = stdlib.mul(v63103, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v63115 = stdlib.div(v63114, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v63116;
          const v63117 = stdlib.eq(v63115, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63118 = v63117 ? true : v63111;
          if (v63118) {
            v63116 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63119 = stdlib.div(v63115, stdlib.checkedBigNumberify('./src/vault.rsh:405:19:decimal', stdlib.UInt_max, 0));
            v63116 = v63119;
            }
          const v63120 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
          return;
          }
        else {
          return;
          }}
      else {
        const v63139 = v2012;
        const v63140 = v2014;
        const v63142 = v2337;
        const v63144 = stdlib.gt(v2337, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
        const v63145 = v2207 ? true : v63144;
        if (v63145) {
          const v63146 = stdlib.mul(v2337, v2012);
          const v63147 = stdlib.div(v63146, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          let v63148;
          const v63149 = stdlib.eq(v63147, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v63149) {
            v63148 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63150 = stdlib.mul(v63147, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v63151 = stdlib.div(v63150, v63147);
            const v63152 = stdlib.eq(v63151, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v63152) {
              v63148 = v63150;
              }
            else {
              v63148 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v63153;
          const v63154 = stdlib.eq(v63148, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63155 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v63156 = v63154 ? true : v63155;
          if (v63156) {
            v63153 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63157 = stdlib.div(v63148, v2014);
            v63153 = v63157;
            }
          const v63158 = stdlib.mul(v63147, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v63159 = stdlib.div(v63158, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v63160;
          const v63161 = stdlib.eq(v63159, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63162 = v63161 ? true : v63155;
          if (v63162) {
            v63160 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63163 = stdlib.div(v63159, v2014);
            v63160 = v63163;
            }
          const v63164 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
          return;
          }
        else {
          return;
          }}
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2634 = v2301[1];
      return;
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2945 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3256 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3570 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3884 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4198 = v2301[1];
      return;
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4512 = v2301[1];
      return;
      break;
      }
    }
  
  
  };
export async function Minter(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Minter expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Minter expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Data({
    Liquidator_liquidateVault0: ctc5,
    Oracle_updatePrice0: ctc5,
    RecoveryToggler_toggleRecoveryMode0: ctc7,
    VaultOwner_depositCollateral0: ctc5,
    VaultOwner_mintToken0: ctc5,
    VaultOwner_returnVaultDebt0: ctc5,
    VaultOwner_withdrawCollateral0: ctc5,
    VaultRedeemer_redeemVault0: ctc5
    });
  const ctc9 = stdlib.T_Object({
    collateral: ctc1,
    collateralRatio: ctc1,
    collateralValue: ctc1,
    hf: ctc1,
    vaultDebt: ctc1
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/vault.rsh:98:10:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v1876, time: v1875, didSend: v19, from: v1874 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1876, time: v1875, didSend: v19, from: v1874 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.signalDone(stdlib.checkedBigNumberify('./src/vault.rsh:makeEnum', stdlib.UInt_max, 0)), {
    at: './src/vault.rsh:102:24:application',
    fs: ['at ./src/vault.rsh:101:14:application call to [unknown function] (defined at: ./src/vault.rsh:101:18:function exp)'],
    msg: 'signalDone',
    who: 'Minter'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc2],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v1886, v1887], secs: v1889, time: v1888, didSend: v35, from: v1885 } = txn2;
  ;
  ;
  const v1891 = stdlib.gt(v1886, stdlib.checkedBigNumberify('./src/vault.rsh:115:36:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1891, {
    at: './src/vault.rsh:115:10:application',
    fs: [],
    msg: null,
    who: 'Minter'
    });
  const v1894 = stdlib.protect(ctc3, await interact.createVault(v1886), {
    at: './src/vault.rsh:120:27:application',
    fs: ['at ./src/vault.rsh:118:14:application call to [unknown function] (defined at: ./src/vault.rsh:118:18:function exp)'],
    msg: 'createVault',
    who: 'Minter'
    });
  const v1895 = v1894[stdlib.checkedBigNumberify('./src/vault.rsh:119:11:array', stdlib.UInt_max, 0)];
  const v1896 = v1894[stdlib.checkedBigNumberify('./src/vault.rsh:119:11:array', stdlib.UInt_max, 1)];
  const v1897 = stdlib.mul(v1895, v1886);
  const v1898 = stdlib.div(v1897, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
  const v1899 = stdlib.mul(v1898, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
  const v1900 = stdlib.div(v1899, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
  let v1901;
  const v1902 = stdlib.lt(v1900, stdlib.checkedBigNumberify('./src/vault.rsh:126:68:decimal', stdlib.UInt_max, 0));
  if (v1902) {
    v1901 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    v1901 = v1900;
    }
  let v1903;
  const v1904 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v1896);
  const v1905 = stdlib.div(v1904, stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
  const v1906 = stdlib.eq(v1905, v1896);
  if (v1906) {
    v1903 = v1904;
    }
  else {
    v1903 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
    }
  let v1908;
  const v1909 = stdlib.eq(v1903, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  if (v1909) {
    v1908 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1911 = stdlib.div(v1903, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
    v1908 = v1911;
    }
  const v1912 = stdlib.gt(v1896, stdlib.checkedBigNumberify('./src/vault.rsh:131:31:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1912, {
    at: './src/vault.rsh:131:11:application',
    fs: ['at ./src/vault.rsh:118:14:application call to [unknown function] (defined at: ./src/vault.rsh:118:18:function exp)'],
    msg: null,
    who: 'Minter'
    });
  const v1913 = stdlib.le(v1896, v1901);
  stdlib.assert(v1913, {
    at: './src/vault.rsh:132:11:application',
    fs: ['at ./src/vault.rsh:118:14:application call to [unknown function] (defined at: ./src/vault.rsh:118:18:function exp)'],
    msg: null,
    who: 'Minter'
    });
  const v1914 = stdlib.gt(v1895, stdlib.checkedBigNumberify('./src/vault.rsh:133:32:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1914, {
    at: './src/vault.rsh:133:11:application',
    fs: ['at ./src/vault.rsh:118:14:application call to [unknown function] (defined at: ./src/vault.rsh:118:18:function exp)'],
    msg: null,
    who: 'Minter'
    });
  const v1915 = stdlib.gt(v1908, stdlib.checkedBigNumberify('./src/vault.rsh:134:29:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1915, {
    at: './src/vault.rsh:134:11:application',
    fs: ['at ./src/vault.rsh:118:14:application call to [unknown function] (defined at: ./src/vault.rsh:118:18:function exp)'],
    msg: null,
    who: 'Minter'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1874, v1885, v1886, v1887, v1895, v1896, v1898, v1901, v1908, v1874],
    evt_cnt: 6,
    funcNum: 2,
    lct: v1888,
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc1, ctc1, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v1917, v1918, v1919, v1920, v1921, v1922], secs: v1924, time: v1923, didSend: v79, from: v1916 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v1926 = stdlib.addressEq(v1874, v1916);
      stdlib.assert(v1926, {
        at: './src/vault.rsh:137:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Minter'
        });
      const v1927 = stdlib.le(v1918, v1920);
      stdlib.assert(v1927, {
        at: './src/vault.rsh:145:10:application',
        fs: [],
        msg: 'initial debt <= initialMaximumMint',
        who: 'Minter'
        });
      const v1928 = stdlib.gt(v1917, stdlib.checkedBigNumberify('./src/vault.rsh:147:31:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v1928, {
        at: './src/vault.rsh:147:10:application',
        fs: [],
        msg: null,
        who: 'Minter'
        });
      const v1929 = stdlib.gt(v1918, stdlib.checkedBigNumberify('./src/vault.rsh:148:30:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v1929, {
        at: './src/vault.rsh:148:10:application',
        fs: [],
        msg: null,
        who: 'Minter'
        });
      const v1930 = stdlib.mul(v1917, v1886);
      const v1931 = stdlib.div(v1930, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
      const v1932 = stdlib.eq(v1919, v1931);
      stdlib.assert(v1932, {
        at: './src/vault.rsh:149:10:application',
        fs: [],
        msg: null,
        who: 'Minter'
        });
      const v1933 = stdlib.mul(v1919, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
      const v1934 = stdlib.div(v1933, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
      let v1935;
      const v1936 = stdlib.lt(v1934, stdlib.checkedBigNumberify('./src/vault.rsh:151:69:decimal', stdlib.UInt_max, 0));
      if (v1936) {
        v1935 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        v1935 = v1934;
        }
      const v1937 = stdlib.eq(v1920, v1935);
      stdlib.assert(v1937, {
        at: './src/vault.rsh:151:10:application',
        fs: [],
        msg: null,
        who: 'Minter'
        });
      let v1938;
      const v1939 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v1918);
      const v1940 = stdlib.div(v1939, stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
      const v1941 = stdlib.eq(v1940, v1918);
      if (v1941) {
        v1938 = v1939;
        }
      else {
        v1938 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
        }
      let v1943;
      const v1944 = stdlib.eq(v1938, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      if (v1944) {
        v1943 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1946 = stdlib.div(v1938, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
        v1943 = v1946;
        }
      const v1947 = stdlib.eq(v1921, v1943);
      stdlib.assert(v1947, {
        at: './src/vault.rsh:152:10:application',
        fs: [],
        msg: null,
        who: 'Minter'
        });
      const v1948 = stdlib.gt(v1921, stdlib.checkedBigNumberify('./src/vault.rsh:153:28:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v1948, {
        at: './src/vault.rsh:153:10:application',
        fs: [],
        msg: null,
        who: 'Minter'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc4, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v1917, v1918, v1919, v1920, v1921, v1922], secs: v1924, time: v1923, didSend: v79, from: v1916 } = txn3;
  ;
  const v1926 = stdlib.addressEq(v1874, v1916);
  stdlib.assert(v1926, {
    at: './src/vault.rsh:137:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Minter'
    });
  const v1927 = stdlib.le(v1918, v1920);
  stdlib.assert(v1927, {
    at: './src/vault.rsh:145:10:application',
    fs: [],
    msg: 'initial debt <= initialMaximumMint',
    who: 'Minter'
    });
  const v1928 = stdlib.gt(v1917, stdlib.checkedBigNumberify('./src/vault.rsh:147:31:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1928, {
    at: './src/vault.rsh:147:10:application',
    fs: [],
    msg: null,
    who: 'Minter'
    });
  const v1929 = stdlib.gt(v1918, stdlib.checkedBigNumberify('./src/vault.rsh:148:30:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1929, {
    at: './src/vault.rsh:148:10:application',
    fs: [],
    msg: null,
    who: 'Minter'
    });
  const v1930 = stdlib.mul(v1917, v1886);
  const v1931 = stdlib.div(v1930, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
  const v1932 = stdlib.eq(v1919, v1931);
  stdlib.assert(v1932, {
    at: './src/vault.rsh:149:10:application',
    fs: [],
    msg: null,
    who: 'Minter'
    });
  const v1933 = stdlib.mul(v1919, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
  const v1934 = stdlib.div(v1933, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
  let v1935;
  const v1936 = stdlib.lt(v1934, stdlib.checkedBigNumberify('./src/vault.rsh:151:69:decimal', stdlib.UInt_max, 0));
  if (v1936) {
    v1935 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    v1935 = v1934;
    }
  const v1937 = stdlib.eq(v1920, v1935);
  stdlib.assert(v1937, {
    at: './src/vault.rsh:151:10:application',
    fs: [],
    msg: null,
    who: 'Minter'
    });
  let v1938;
  const v1939 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v1918);
  const v1940 = stdlib.div(v1939, stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
  const v1941 = stdlib.eq(v1940, v1918);
  if (v1941) {
    v1938 = v1939;
    }
  else {
    v1938 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
    }
  let v1943;
  const v1944 = stdlib.eq(v1938, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  if (v1944) {
    v1943 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1946 = stdlib.div(v1938, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
    v1943 = v1946;
    }
  const v1947 = stdlib.eq(v1921, v1943);
  stdlib.assert(v1947, {
    at: './src/vault.rsh:152:10:application',
    fs: [],
    msg: null,
    who: 'Minter'
    });
  const v1948 = stdlib.gt(v1921, stdlib.checkedBigNumberify('./src/vault.rsh:153:28:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1948, {
    at: './src/vault.rsh:153:10:application',
    fs: [],
    msg: null,
    who: 'Minter'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1951, time: v1950, didSend: v112, from: v1949 } = txn4;
  ;
  const txn5 = await (ctc.sendrecv({
    args: [v1874, v1885, v1886, v1887, v1917, v1918, v1919, v1921, v1922, v1934, v1949],
    evt_cnt: 0,
    funcNum: 4,
    lct: v1950,
    onlyIf: true,
    out_tys: [],
    pay: [v1917, []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v1959, time: v1958, didSend: v123, from: v1957 } = txn5;
      
      sim_r.txns.push({
        amt: v1917,
        kind: 'to',
        tok: undefined
        });
      const v1962 = stdlib.addressEq(v1874, v1957);
      stdlib.assert(v1962, {
        at: './src/vault.rsh:162:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Minter'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc4, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc4, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1959, time: v1958, didSend: v123, from: v1957 } = txn5;
  ;
  const v1962 = stdlib.addressEq(v1874, v1957);
  stdlib.assert(v1962, {
    at: './src/vault.rsh:162:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Minter'
    });
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1965, time: v1964, didSend: v131, from: v1963 } = txn6;
  ;
  ;
  const v1969 = stdlib.addressEq(v1885, v1963);
  stdlib.assert(v1969, {
    at: './src/vault.rsh:166:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Minter'
    });
  const v1970 = stdlib.sub(v1918, v1921);
  ;
  ;
  let v1979;
  const v1980 = stdlib.eq(v1919, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
  if (v1980) {
    v1979 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1981 = stdlib.mul(v1919, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
    const v1982 = stdlib.div(v1981, v1919);
    const v1983 = stdlib.eq(v1982, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
    if (v1983) {
      v1979 = v1981;
      }
    else {
      v1979 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
      }
    }
  let v1985;
  const v1986 = stdlib.eq(v1979, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  const v1987 = stdlib.eq(v1970, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
  const v1988 = v1986 ? true : v1987;
  if (v1988) {
    v1985 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1989 = stdlib.div(v1979, v1970);
    v1985 = v1989;
    }
  let v1993;
  const v1994 = stdlib.eq(v1934, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  const v1996 = v1994 ? true : v1987;
  if (v1996) {
    v1993 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1997 = stdlib.div(v1934, v1970);
    v1993 = v1997;
    }
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2001, time: v2000, didSend: v171, from: v1999 } = txn7;
  ;
  const v2003 = stdlib.addressEq(v1885, v1999);
  stdlib.assert(v2003, {
    at: './src/vault.rsh:185:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Minter'
    });
  let v2012 = v1886;
  let v2014 = v1970;
  let v2015 = v2000;
  let v2021 = v1917;
  
  while (await (async () => {
    const v2072 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
    const v2074 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
    const v2075 = v2072 ? true : v2074;
    
    return v2075;})()) {
    const v2077 = stdlib.mul(v2021, v2012);
    const v2078 = stdlib.div(v2077, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
    let v2079;
    const v2080 = stdlib.eq(v2078, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
    if (v2080) {
      v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2081 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
      const v2082 = stdlib.div(v2081, v2078);
      const v2083 = stdlib.eq(v2082, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
      if (v2083) {
        v2079 = v2081;
        }
      else {
        v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
        }
      }
    let v2085;
    const v2086 = stdlib.eq(v2079, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
    const v2087 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
    const v2088 = v2086 ? true : v2087;
    if (v2088) {
      v2085 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2089 = stdlib.div(v2079, v2014);
      v2085 = v2089;
      }
    const v2090 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
    const v2091 = stdlib.div(v2090, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
    let v2092;
    const v2093 = stdlib.eq(v2091, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
    const v2095 = v2093 ? true : v2087;
    if (v2095) {
      v2092 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2096 = stdlib.div(v2091, v2014);
      v2092 = v2096;
      }
    const v2100 = stdlib.add(v2015, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc8],
      timeoutAt: ['time', v2100],
      waitIfNotPresent: false
      }));
    if (txn8.didTimeout) {
      const txn9 = await (ctc.sendrecv({
        args: [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100],
        evt_cnt: 0,
        funcNum: 9,
        lct: v2015,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v4831, time: v4830, didSend: v1823, from: v4829 } = txn9;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv2012 = v2012;
          const cv2014 = v2014;
          const cv2015 = v4830;
          const cv2021 = v2021;
          
          await (async () => {
            const v2012 = cv2012;
            const v2014 = cv2014;
            const v2015 = cv2015;
            const v2021 = cv2021;
            
            if (await (async () => {
              const v2072 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
              const v2074 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
              const v2075 = v2072 ? true : v2074;
              
              return v2075;})()) {
              const v2077 = stdlib.mul(v2021, v2012);
              const v2078 = stdlib.div(v2077, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v2079;
              const v2080 = stdlib.eq(v2078, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v2080) {
                v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2081 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v2082 = stdlib.div(v2081, v2078);
                const v2083 = stdlib.eq(v2082, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v2083) {
                  v2079 = v2081;
                  }
                else {
                  v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v2085;
              const v2086 = stdlib.eq(v2079, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v2087 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v2088 = v2086 ? true : v2087;
              if (v2088) {
                v2085 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2089 = stdlib.div(v2079, v2014);
                v2085 = v2089;
                }
              const v2090 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v2091 = stdlib.div(v2090, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v2092;
              const v2093 = stdlib.eq(v2091, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v2095 = v2093 ? true : v2087;
              if (v2095) {
                v2092 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2096 = stdlib.div(v2091, v2014);
                v2092 = v2096;
                }
              const v2100 = stdlib.add(v2015, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1887
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc4, ctc2, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc6, ctc1, ctc6, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v4831, time: v4830, didSend: v1823, from: v4829 } = txn9;
      ;
      const cv2012 = v2012;
      const cv2014 = v2014;
      const cv2015 = v4830;
      const cv2021 = v2021;
      
      v2012 = cv2012;
      v2014 = cv2014;
      v2015 = cv2015;
      v2021 = cv2021;
      
      continue;
      }
    else {
      const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn8;
      switch (v2301[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2304 = v2301[1];
          const v2305 = v2304[stdlib.checkedBigNumberify('./src/vault.rsh:372:9:spread', stdlib.UInt_max, 0)];
          let v2306;
          let v2307;
          const v2308 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:89:64:decimal', stdlib.UInt_max, 25), v2014);
          const v2309 = stdlib.div(v2308, stdlib.checkedBigNumberify('./src/utils.rsh:89:64:decimal', stdlib.UInt_max, 25));
          const v2310 = stdlib.eq(v2309, v2014);
          if (v2310) {
            v2307 = v2308;
            }
          else {
            v2307 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v2312;
          const v2313 = stdlib.eq(v2307, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v2313) {
            v2312 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2315 = stdlib.div(v2307, stdlib.checkedBigNumberify('./src/utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
            v2312 = v2315;
            }
          const v2316 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:380:23:decimal', stdlib.UInt_max, 0));
          const v2317 = stdlib.lt(v2092, stdlib.checkedBigNumberify('./src/utils.rsh:19:38:decimal', stdlib.UInt_max, 1));
          const v2318 = v2316 ? v2317 : false;
          const v2319 = stdlib.lt(v2085, stdlib.checkedBigNumberify('./src/utils.rsh:12:41:decimal', stdlib.UInt_max, 110));
          const v2320 = v2318 ? v2319 : false;
          const v2321 = stdlib.ge(v2305, v2014);
          const v2322 = v2320 ? v2321 : false;
          if (v2322) {
            const v2323 = stdlib.add(v2014, v2312);
            const v2324 = [v2323, v1887];
            const v2325 = [stdlib.checkedBigNumberify('./src/vault.rsh:386:19:decimal', stdlib.UInt_max, 0), v2324];
            v2306 = v2325;
            }
          else {
            const v2326 = [stdlib.checkedBigNumberify('./src/vault.rsh:388:23:decimal', stdlib.UInt_max, 0), v1887];
            const v2327 = [stdlib.checkedBigNumberify('./src/vault.rsh:388:19:decimal', stdlib.UInt_max, 0), v2326];
            v2306 = v2327;
            }
          const v2329 = v2306[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 0)];
          const v2330 = v2306[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 1)];
          const v2331 = v2330[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 0)];
          const v2337 = stdlib.add(v2021, v2329);
          ;
          ;
          undefined;
          stdlib.assert(v2321, {
            at: './src/vault.rsh:392:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:372:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          await txn8.getOutput('api', 'v2322', ctc6, v2322);
          if (v2322) {
            const v2359 = stdlib.sub(v2337, v2337);
            ;
            ;
            let v2364;
            if (v2310) {
              v2364 = v2308;
              }
            else {
              v2364 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v2369;
            const v2370 = stdlib.eq(v2364, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v2370) {
              v2369 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v2372 = stdlib.div(v2364, stdlib.checkedBigNumberify('./src/utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
              v2369 = v2372;
              }
            ;
            const cv2012 = v2012;
            const cv2014 = stdlib.checkedBigNumberify('./src/vault.rsh:405:19:decimal', stdlib.UInt_max, 0);
            const cv2015 = v2302;
            const cv2021 = v2359;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          else {
            const cv2012 = v2012;
            const cv2014 = v2014;
            const cv2015 = v2302;
            const cv2021 = v2337;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2634 = v2301[1];
          ;
          ;
          undefined;
          const v2699 = v2634[stdlib.checkedBigNumberify('./src/vault.rsh:412:9:spread', stdlib.UInt_max, 0)];
          const v2701 = stdlib.mul(v2021, v2699);
          let v2702;
          const v2703 = stdlib.eq(v2701, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v2703) {
            v2702 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2704 = stdlib.mul(v2701, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v2705 = stdlib.div(v2704, v2701);
            const v2706 = stdlib.eq(v2705, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v2706) {
              v2702 = v2704;
              }
            else {
              v2702 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v2708;
          const v2709 = stdlib.eq(v2702, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2711 = v2709 ? true : v2087;
          if (v2711) {
            v2708 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2712 = stdlib.div(v2702, v2014);
            v2708 = v2712;
            }
          const v2713 = stdlib.mul(v2701, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v2714 = stdlib.div(v2713, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v2715;
          const v2716 = stdlib.eq(v2714, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2718 = v2716 ? true : v2087;
          if (v2718) {
            v2715 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2719 = stdlib.div(v2714, v2014);
            v2715 = v2719;
            }
          const v2721 = {
            collateral: v2021,
            collateralRatio: v2708,
            collateralValue: v2701,
            hf: v2715,
            vaultDebt: v2014
            };
          await txn8.getOutput('api', 'v2721', ctc9, v2721);
          const cv2012 = v2699;
          const cv2014 = v2014;
          const cv2015 = v2302;
          const cv2021 = v2021;
          
          v2012 = cv2012;
          v2014 = cv2014;
          v2015 = cv2015;
          v2021 = cv2021;
          
          continue;
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2945 = v2301[1];
          ;
          ;
          undefined;
          const v3041 = true;
          await txn8.getOutput('api', 'v3041', ctc6, v3041);
          const cv2012 = v2012;
          const cv2014 = v2014;
          const cv2015 = v2302;
          const cv2021 = v2021;
          
          v2012 = cv2012;
          v2014 = cv2014;
          v2015 = cv2015;
          v2021 = cv2021;
          
          continue;
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3256 = v2301[1];
          const v3257 = v3256[stdlib.checkedBigNumberify('./src/vault.rsh:354:9:spread', stdlib.UInt_max, 0)];
          const v3273 = stdlib.add(v2021, v3257);
          ;
          ;
          undefined;
          const v3364 = stdlib.gt(v3257, stdlib.checkedBigNumberify('./src/vault.rsh:365:37:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3364, {
            at: './src/vault.rsh:365:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)'],
            msg: 'Cannot deposit 0 collateral tokens',
            who: 'Minter'
            });
          const v3365 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v3365, {
            at: './src/vault.rsh:366:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Minter'
            });
          const v3366 = true;
          await txn8.getOutput('api', 'v3366', ctc6, v3366);
          const cv2012 = v2012;
          const cv2014 = v2014;
          const cv2015 = v2302;
          const cv2021 = v3273;
          
          v2012 = cv2012;
          v2014 = cv2014;
          v2015 = cv2015;
          v2021 = cv2021;
          
          continue;
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3570 = v2301[1];
          const v3571 = v3570[stdlib.checkedBigNumberify('./src/vault.rsh:217:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v3689 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v3689, {
            at: './src/vault.rsh:230:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Minter'
            });
          const v3690 = stdlib.gt(v3571, stdlib.checkedBigNumberify('./src/vault.rsh:231:32:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3690, {
            at: './src/vault.rsh:231:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
            msg: 'You must mint at least 1 token',
            who: 'Minter'
            });
          let v3693;
          const v3694 = stdlib.lt(v2091, v2014);
          if (v3694) {
            v3693 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3695 = stdlib.sub(v2091, v2014);
            v3693 = v3695;
            }
          let v3696;
          const v3697 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v3571);
          const v3698 = stdlib.div(v3697, stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
          const v3699 = stdlib.eq(v3698, v3571);
          if (v3699) {
            v3696 = v3697;
            }
          else {
            v3696 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v3701;
          const v3702 = stdlib.eq(v3696, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v3702) {
            v3701 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3704 = stdlib.div(v3696, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
            v3701 = v3704;
            }
          const v3705 = stdlib.sub(v3571, v3701);
          const v3706 = stdlib.add(v2014, v3705);
          let v3707;
          if (v2080) {
            v3707 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3709 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v3710 = stdlib.div(v3709, v2078);
            const v3711 = stdlib.eq(v3710, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v3711) {
              v3707 = v3709;
              }
            else {
              v3707 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v3713;
          const v3714 = stdlib.eq(v3707, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v3715 = stdlib.eq(v3706, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v3716 = v3714 ? true : v3715;
          if (v3716) {
            v3713 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3717 = stdlib.div(v3707, v3706);
            v3713 = v3717;
            }
          const v3718 = stdlib.ge(v3713, stdlib.checkedBigNumberify('./src/utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v3719 = stdlib.gt(v3693, stdlib.checkedBigNumberify('./src/vault.rsh:248:32:decimal', stdlib.UInt_max, 0));
          const v3720 = v3718 ? v3719 : false;
          const v3722 = v3720 ? v3690 : false;
          const v3723 = stdlib.le(v3571, v3693);
          const v3724 = v3722 ? v3723 : false;
          await txn8.getOutput('api', 'v3724', ctc6, v3724);
          if (v3724) {
            stdlib.assert(v3723, {
              at: './src/vault.rsh:254:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: 'The request mint amount is more than the maximum allowed',
              who: 'Minter'
              });
            let v3731;
            if (v3699) {
              v3731 = v3697;
              }
            else {
              v3731 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v3736;
            const v3737 = stdlib.eq(v3731, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v3737) {
              v3736 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v3739 = stdlib.div(v3731, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
              v3736 = v3739;
              }
            const v3740 = stdlib.eq(v3701, v3736);
            stdlib.assert(v3740, {
              at: './src/vault.rsh:256:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: null,
              who: 'Minter'
              });
            const v3742 = stdlib.eq(v3705, v3705);
            stdlib.assert(v3742, {
              at: './src/vault.rsh:257:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: null,
              who: 'Minter'
              });
            const txn9 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 10,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v3745, time: v3744, didSend: v1680, from: v3743 } = txn9;
            ;
            ;
            const v3749 = stdlib.addressEq(v1885, v3743);
            stdlib.assert(v3749, {
              at: './src/vault.rsh:259:19:dot',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: 'sender correct',
              who: 'Minter'
              });
            ;
            ;
            const cv2012 = v2012;
            const cv2014 = v3706;
            const cv2015 = v3744;
            const cv2021 = v2021;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;
            
            }
          else {
            const cv2012 = v2012;
            const cv2014 = v2014;
            const cv2015 = v2302;
            const cv2021 = v2021;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3884 = v2301[1];
          const v3885 = v3884[stdlib.checkedBigNumberify('./src/vault.rsh:268:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v4085 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v4085, {
            at: './src/vault.rsh:285:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Minter'
            });
          const v4086 = stdlib.le(v3885, v2014);
          const v4087 = stdlib.gt(v3885, stdlib.checkedBigNumberify('./src/vault.rsh:287:28:decimal', stdlib.UInt_max, 0));
          const v4088 = v4086 ? v4087 : false;
          const v4089 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:288:23:decimal', stdlib.UInt_max, 0));
          const v4090 = v4088 ? v4089 : false;
          stdlib.assert(v4090, {
            at: './src/vault.rsh:286:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          ;
          const v4095 = stdlib.sub(v2014, v3885);
          const v4096 = stdlib.eq(v4095, stdlib.checkedBigNumberify('./src/vault.rsh:291:69:decimal', stdlib.UInt_max, 0));
          const v4097 = true;
          await txn8.getOutput('api', 'v4097', ctc6, v4097);
          if (v4096) {
            stdlib.assert(v4096, {
              at: './src/vault.rsh:294:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
              msg: null,
              who: 'Minter'
              });
            const v4109 = stdlib.sub(v2021, v2021);
            ;
            const cv2012 = v2012;
            const cv2014 = stdlib.checkedBigNumberify('./src/vault.rsh:296:19:decimal', stdlib.UInt_max, 0);
            const cv2015 = v2302;
            const cv2021 = v4109;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          else {
            const cv2012 = v2012;
            const cv2014 = v4095;
            const cv2015 = v2302;
            const cv2021 = v2021;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4198 = v2301[1];
          const v4199 = v4198[stdlib.checkedBigNumberify('./src/vault.rsh:302:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v4437 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v4437, {
            at: './src/vault.rsh:325:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Minter'
            });
          const v4438 = stdlib.gt(v4199, stdlib.checkedBigNumberify('./src/vault.rsh:326:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4438, {
            at: './src/vault.rsh:326:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          const v4440 = stdlib.lt(v4199, v2021);
          stdlib.assert(v4440, {
            at: './src/vault.rsh:327:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'Cannot withdraw more than the balance of this contract',
            who: 'Minter'
            });
          const v4441 = stdlib.gt(v2085, stdlib.checkedBigNumberify('./src/utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          stdlib.assert(v4441, {
            at: './src/vault.rsh:329:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'Vault collateral ratio is not healthy',
            who: 'Minter'
            });
          const v4443 = stdlib.sub(v2021, v4199);
          const v4444 = stdlib.mul(v4443, v2012);
          const v4445 = stdlib.gt(v4444, stdlib.checkedBigNumberify('./src/vault.rsh:334:11:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4445, {
            at: './src/vault.rsh:333:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'Collateral value after withdrawal must not be 0',
            who: 'Minter'
            });
          let v4446;
          const v4447 = stdlib.eq(v4444, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v4447) {
            v4446 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4448 = stdlib.mul(v4444, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v4449 = stdlib.div(v4448, v4444);
            const v4450 = stdlib.eq(v4449, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v4450) {
              v4446 = v4448;
              }
            else {
              v4446 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v4452;
          const v4453 = stdlib.eq(v4446, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v4455 = v4453 ? true : v2087;
          if (v4455) {
            v4452 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4456 = stdlib.div(v4446, v2014);
            v4452 = v4456;
            }
          const v4459 = v4438 ? v4441 : false;
          const v4460 = stdlib.gt(v4452, stdlib.checkedBigNumberify('./src/utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v4461 = v4459 ? v4460 : false;
          const v4464 = v4461 ? v4440 : false;
          await txn8.getOutput('api', 'v4464', ctc6, v4464);
          if (v4464) {
            ;
            const cv2012 = v2012;
            const cv2014 = v2014;
            const cv2015 = v2302;
            const cv2021 = v4443;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          else {
            const cv2012 = v2012;
            const cv2014 = v2014;
            const cv2015 = v2302;
            const cv2021 = v2021;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4512 = v2301[1];
          const v4513 = v4512[stdlib.checkedBigNumberify('./src/vault.rsh:429:9:spread', stdlib.UInt_max, 0)];
          const v4514 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:92:8:decimal', stdlib.UInt_max, 2), v4513);
          const v4515 = stdlib.div(v4514, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          const v4516 = stdlib.add(v4513, v4515);
          ;
          ;
          undefined;
          const v4797 = stdlib.div(v4513, v2012);
          const v4798 = stdlib.mul(v4797, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          const v4801 = stdlib.gt(v4513, stdlib.checkedBigNumberify('./src/vault.rsh:448:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4801, {
            at: './src/vault.rsh:448:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          const v4802 = stdlib.gt(v2012, stdlib.checkedBigNumberify('./src/vault.rsh:449:35:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4802, {
            at: './src/vault.rsh:449:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          const v4803 = stdlib.sub(v2014, v4513);
          const v4804 = stdlib.ge(v4803, stdlib.checkedBigNumberify('./src/vault.rsh:450:53:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4804, {
            at: './src/vault.rsh:450:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          stdlib.assert(v4804, {
            at: './src/vault.rsh:451:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          const v4808 = stdlib.ge(v2021, v4798);
          stdlib.assert(v4808, {
            at: './src/vault.rsh:452:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          ;
          const v4816 = stdlib.sub(v2021, v4798);
          ;
          ;
          const v4821 = true;
          await txn8.getOutput('api', 'v4821', ctc6, v4821);
          const cv2012 = v2012;
          const cv2014 = v4803;
          const cv2015 = v2302;
          const cv2021 = v4816;
          
          v2012 = cv2012;
          v2014 = cv2014;
          v2015 = cv2015;
          v2021 = cv2021;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Oracle_updatePrice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Oracle_updatePrice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle_updatePrice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Data({
    Liquidator_liquidateVault0: ctc4,
    Oracle_updatePrice0: ctc4,
    RecoveryToggler_toggleRecoveryMode0: ctc5,
    VaultOwner_depositCollateral0: ctc4,
    VaultOwner_mintToken0: ctc4,
    VaultOwner_returnVaultDebt0: ctc4,
    VaultOwner_withdrawCollateral0: ctc4,
    VaultRedeemer_redeemVault0: ctc4
    });
  const ctc7 = stdlib.T_Object({
    collateral: ctc2,
    collateralRatio: ctc2,
    collateralValue: ctc2,
    hf: ctc2,
    vaultDebt: ctc2
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2163 = stdlib.protect(ctc4, await interact.in(), {
    at: './src/vault.rsh:1:23:application',
    fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:412:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runOracle_updatePrice0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'in',
    who: 'Oracle_updatePrice'
    });
  
  const v2226 = ['Oracle_updatePrice0', v2163];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100, v2226],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/vault.rsh:412:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:decimal', stdlib.UInt_max, 0), v1887]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
      
      switch (v2301[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2304 = v2301[1];
          
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2634 = v2301[1];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/vault.rsh:412:9:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/vault.rsh:214:14:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v1887
            });
          undefined;
          const v2699 = v2634[stdlib.checkedBigNumberify('./src/vault.rsh:412:9:spread', stdlib.UInt_max, 0)];
          const v2701 = stdlib.mul(v2021, v2699);
          let v2702;
          const v2703 = stdlib.eq(v2701, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v2703) {
            v2702 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2704 = stdlib.mul(v2701, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v2705 = stdlib.div(v2704, v2701);
            const v2706 = stdlib.eq(v2705, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v2706) {
              v2702 = v2704;
              }
            else {
              v2702 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v2708;
          const v2709 = stdlib.eq(v2702, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2711 = v2709 ? true : v2087;
          if (v2711) {
            v2708 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2712 = stdlib.div(v2702, v2014);
            v2708 = v2712;
            }
          const v2713 = stdlib.mul(v2701, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v2714 = stdlib.div(v2713, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v2715;
          const v2716 = stdlib.eq(v2714, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2718 = v2716 ? true : v2087;
          if (v2718) {
            v2715 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2719 = stdlib.div(v2714, v2014);
            v2715 = v2719;
            }
          const v2721 = {
            collateral: v2021,
            collateralRatio: v2708,
            collateralValue: v2701,
            hf: v2715,
            vaultDebt: v2014
            };
          const v2722 = await txn1.getOutput('api', 'v2721', ctc7, v2721);
          
          const v63183 = v2699;
          const v63184 = v2014;
          const v63186 = v2021;
          const v63187 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
          const v63188 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
          const v63189 = v63187 ? true : v63188;
          if (v63189) {
            const v63191 = stdlib.div(v2701, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
            let v63192;
            const v63193 = stdlib.eq(v63191, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
            if (v63193) {
              v63192 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63194 = stdlib.mul(v63191, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              const v63195 = stdlib.div(v63194, v63191);
              const v63196 = stdlib.eq(v63195, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              if (v63196) {
                v63192 = v63194;
                }
              else {
                v63192 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                }
              }
            let v63197;
            const v63198 = stdlib.eq(v63192, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63199 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
            const v63200 = v63198 ? true : v63199;
            if (v63200) {
              v63197 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63201 = stdlib.div(v63192, v2014);
              v63197 = v63201;
              }
            const v63202 = stdlib.mul(v63191, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
            const v63203 = stdlib.div(v63202, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
            let v63204;
            const v63205 = stdlib.eq(v63203, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63206 = v63205 ? true : v63199;
            if (v63206) {
              v63204 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63207 = stdlib.div(v63203, v2014);
              v63204 = v63207;
              }
            const v63208 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1887
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2945 = v2301[1];
          
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3256 = v2301[1];
          
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3570 = v2301[1];
          
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3884 = v2301[1];
          
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4198 = v2301[1];
          
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4512 = v2301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
  switch (v2301[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2304 = v2301[1];
      return;
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2634 = v2301[1];
      ;
      ;
      undefined;
      const v2699 = v2634[stdlib.checkedBigNumberify('./src/vault.rsh:412:9:spread', stdlib.UInt_max, 0)];
      const v2701 = stdlib.mul(v2021, v2699);
      let v2702;
      const v2703 = stdlib.eq(v2701, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
      if (v2703) {
        v2702 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2704 = stdlib.mul(v2701, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        const v2705 = stdlib.div(v2704, v2701);
        const v2706 = stdlib.eq(v2705, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        if (v2706) {
          v2702 = v2704;
          }
        else {
          v2702 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
          }
        }
      let v2708;
      const v2709 = stdlib.eq(v2702, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      const v2711 = v2709 ? true : v2087;
      if (v2711) {
        v2708 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2712 = stdlib.div(v2702, v2014);
        v2708 = v2712;
        }
      const v2713 = stdlib.mul(v2701, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
      const v2714 = stdlib.div(v2713, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
      let v2715;
      const v2716 = stdlib.eq(v2714, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      const v2718 = v2716 ? true : v2087;
      if (v2718) {
        v2715 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2719 = stdlib.div(v2714, v2014);
        v2715 = v2719;
        }
      const v2721 = {
        collateral: v2021,
        collateralRatio: v2708,
        collateralValue: v2701,
        hf: v2715,
        vaultDebt: v2014
        };
      const v2722 = await txn1.getOutput('api', 'v2721', ctc7, v2721);
      if (v1498) {
        stdlib.protect(ctc8, await interact.out(v2634, v2722), {
          at: './src/vault.rsh:412:9:application',
          fs: ['at ./src/vault.rsh:412:9:application call to [unknown function] (defined at: ./src/vault.rsh:412:9:function exp)', 'at ./src/vault.rsh:419:16:application call to "apiReturn" (defined at: ./src/vault.rsh:412:9:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:412:9:function exp)'],
          msg: 'out',
          who: 'Oracle_updatePrice'
          });
        }
      else {
        }
      
      const v63183 = v2699;
      const v63184 = v2014;
      const v63186 = v2021;
      const v63187 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
      const v63188 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
      const v63189 = v63187 ? true : v63188;
      if (v63189) {
        const v63191 = stdlib.div(v2701, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
        let v63192;
        const v63193 = stdlib.eq(v63191, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
        if (v63193) {
          v63192 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63194 = stdlib.mul(v63191, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          const v63195 = stdlib.div(v63194, v63191);
          const v63196 = stdlib.eq(v63195, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          if (v63196) {
            v63192 = v63194;
            }
          else {
            v63192 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          }
        let v63197;
        const v63198 = stdlib.eq(v63192, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63199 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
        const v63200 = v63198 ? true : v63199;
        if (v63200) {
          v63197 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63201 = stdlib.div(v63192, v2014);
          v63197 = v63201;
          }
        const v63202 = stdlib.mul(v63191, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
        const v63203 = stdlib.div(v63202, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
        let v63204;
        const v63205 = stdlib.eq(v63203, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63206 = v63205 ? true : v63199;
        if (v63206) {
          v63204 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63207 = stdlib.div(v63203, v2014);
          v63204 = v63207;
          }
        const v63208 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2945 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3256 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3570 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3884 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4198 = v2301[1];
      return;
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4512 = v2301[1];
      return;
      break;
      }
    }
  
  
  };
export async function RecoveryToggler_toggleRecoveryMode(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for RecoveryToggler_toggleRecoveryMode expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for RecoveryToggler_toggleRecoveryMode expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Data({
    Liquidator_liquidateVault0: ctc5,
    Oracle_updatePrice0: ctc5,
    RecoveryToggler_toggleRecoveryMode0: ctc4,
    VaultOwner_depositCollateral0: ctc5,
    VaultOwner_mintToken0: ctc5,
    VaultOwner_returnVaultDebt0: ctc5,
    VaultOwner_withdrawCollateral0: ctc5,
    VaultRedeemer_redeemVault0: ctc5
    });
  const ctc7 = stdlib.T_Null;
  
  
  const [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2189 = stdlib.protect(ctc4, await interact.in(), {
    at: './src/vault.rsh:1:23:application',
    fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:465:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runRecoveryToggler_toggleRecoveryMode0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'in',
    who: 'RecoveryToggler_toggleRecoveryMode'
    });
  
  const v2234 = ['RecoveryToggler_toggleRecoveryMode0', v2189];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100, v2234],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/vault.rsh:465:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:decimal', stdlib.UInt_max, 0), v1887]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
      
      switch (v2301[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2304 = v2301[1];
          
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2634 = v2301[1];
          
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2945 = v2301[1];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/vault.rsh:465:9:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/vault.rsh:214:14:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v1887
            });
          undefined;
          const v3041 = true;
          const v3042 = await txn1.getOutput('api', 'v3041', ctc3, v3041);
          
          const v63227 = v2012;
          const v63228 = v2014;
          const v63230 = v2021;
          const v63231 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
          const v63232 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
          const v63233 = v63231 ? true : v63232;
          if (v63233) {
            const v63234 = stdlib.mul(v2021, v2012);
            const v63235 = stdlib.div(v63234, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
            let v63236;
            const v63237 = stdlib.eq(v63235, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
            if (v63237) {
              v63236 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63238 = stdlib.mul(v63235, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              const v63239 = stdlib.div(v63238, v63235);
              const v63240 = stdlib.eq(v63239, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              if (v63240) {
                v63236 = v63238;
                }
              else {
                v63236 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                }
              }
            let v63241;
            const v63242 = stdlib.eq(v63236, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63243 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
            const v63244 = v63242 ? true : v63243;
            if (v63244) {
              v63241 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63245 = stdlib.div(v63236, v2014);
              v63241 = v63245;
              }
            const v63246 = stdlib.mul(v63235, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
            const v63247 = stdlib.div(v63246, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
            let v63248;
            const v63249 = stdlib.eq(v63247, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63250 = v63249 ? true : v63243;
            if (v63250) {
              v63248 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63251 = stdlib.div(v63247, v2014);
              v63248 = v63251;
              }
            const v63252 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1887
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3256 = v2301[1];
          
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3570 = v2301[1];
          
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3884 = v2301[1];
          
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4198 = v2301[1];
          
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4512 = v2301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
  switch (v2301[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2304 = v2301[1];
      return;
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2634 = v2301[1];
      return;
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2945 = v2301[1];
      ;
      ;
      undefined;
      const v3041 = true;
      const v3042 = await txn1.getOutput('api', 'v3041', ctc3, v3041);
      if (v1498) {
        stdlib.protect(ctc7, await interact.out(v2945, v3042), {
          at: './src/vault.rsh:465:9:application',
          fs: ['at ./src/vault.rsh:465:9:application call to [unknown function] (defined at: ./src/vault.rsh:465:9:function exp)', 'at ./src/vault.rsh:466:16:application call to "apiReturn" (defined at: ./src/vault.rsh:465:9:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:465:9:function exp)'],
          msg: 'out',
          who: 'RecoveryToggler_toggleRecoveryMode'
          });
        }
      else {
        }
      
      const v63227 = v2012;
      const v63228 = v2014;
      const v63230 = v2021;
      const v63231 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
      const v63232 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
      const v63233 = v63231 ? true : v63232;
      if (v63233) {
        const v63234 = stdlib.mul(v2021, v2012);
        const v63235 = stdlib.div(v63234, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
        let v63236;
        const v63237 = stdlib.eq(v63235, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
        if (v63237) {
          v63236 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63238 = stdlib.mul(v63235, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          const v63239 = stdlib.div(v63238, v63235);
          const v63240 = stdlib.eq(v63239, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          if (v63240) {
            v63236 = v63238;
            }
          else {
            v63236 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          }
        let v63241;
        const v63242 = stdlib.eq(v63236, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63243 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
        const v63244 = v63242 ? true : v63243;
        if (v63244) {
          v63241 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63245 = stdlib.div(v63236, v2014);
          v63241 = v63245;
          }
        const v63246 = stdlib.mul(v63235, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
        const v63247 = stdlib.div(v63246, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
        let v63248;
        const v63249 = stdlib.eq(v63247, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63250 = v63249 ? true : v63243;
        if (v63250) {
          v63248 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63251 = stdlib.div(v63247, v2014);
          v63248 = v63251;
          }
        const v63252 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3256 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3570 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3884 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4198 = v2301[1];
      return;
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4512 = v2301[1];
      return;
      break;
      }
    }
  
  
  };
export async function Reserve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Reserve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Reserve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Data({
    Liquidator_liquidateVault0: ctc3,
    Oracle_updatePrice0: ctc3,
    RecoveryToggler_toggleRecoveryMode0: ctc5,
    VaultOwner_depositCollateral0: ctc3,
    VaultOwner_mintToken0: ctc3,
    VaultOwner_returnVaultDebt0: ctc3,
    VaultOwner_withdrawCollateral0: ctc3,
    VaultRedeemer_redeemVault0: ctc3
    });
  const ctc7 = stdlib.T_Object({
    collateral: ctc0,
    collateralRatio: ctc0,
    collateralValue: ctc0,
    hf: ctc0,
    vaultDebt: ctc0
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1876, time: v1875, didSend: v19, from: v1874 } = txn1;
  ;
  const v1882 = stdlib.protect(ctc0, await interact.getCollateralPrice(), {
    at: './src/vault.rsh:109:74:application',
    fs: ['at ./src/vault.rsh:108:15:application call to [unknown function] (defined at: ./src/vault.rsh:108:19:function exp)'],
    msg: 'getCollateralPrice',
    who: 'Reserve'
    });
  const v1883 = stdlib.protect(ctc1, await interact.getToken(), {
    at: './src/vault.rsh:110:52:application',
    fs: ['at ./src/vault.rsh:108:15:application call to [unknown function] (defined at: ./src/vault.rsh:108:19:function exp)'],
    msg: 'getToken',
    who: 'Reserve'
    });
  const v1884 = stdlib.gt(v1882, stdlib.checkedBigNumberify('./src/vault.rsh:111:37:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1884, {
    at: './src/vault.rsh:111:11:application',
    fs: ['at ./src/vault.rsh:108:15:application call to [unknown function] (defined at: ./src/vault.rsh:108:19:function exp)'],
    msg: null,
    who: 'Reserve'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v1874, v1882, v1883],
    evt_cnt: 2,
    funcNum: 1,
    lct: v1875,
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v1886, v1887], secs: v1889, time: v1888, didSend: v35, from: v1885 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1887
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v1891 = stdlib.gt(v1886, stdlib.checkedBigNumberify('./src/vault.rsh:115:36:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v1891, {
        at: './src/vault.rsh:115:10:application',
        fs: [],
        msg: null,
        who: 'Reserve'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1886, v1887], secs: v1889, time: v1888, didSend: v35, from: v1885 } = txn2;
  ;
  ;
  const v1891 = stdlib.gt(v1886, stdlib.checkedBigNumberify('./src/vault.rsh:115:36:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1891, {
    at: './src/vault.rsh:115:10:application',
    fs: [],
    msg: null,
    who: 'Reserve'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 6,
    funcNum: 2,
    out_tys: [ctc0, ctc0, ctc0, ctc0, ctc0, ctc2],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v1917, v1918, v1919, v1920, v1921, v1922], secs: v1924, time: v1923, didSend: v79, from: v1916 } = txn3;
  ;
  const v1926 = stdlib.addressEq(v1874, v1916);
  stdlib.assert(v1926, {
    at: './src/vault.rsh:137:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Reserve'
    });
  const v1927 = stdlib.le(v1918, v1920);
  stdlib.assert(v1927, {
    at: './src/vault.rsh:145:10:application',
    fs: [],
    msg: 'initial debt <= initialMaximumMint',
    who: 'Reserve'
    });
  const v1928 = stdlib.gt(v1917, stdlib.checkedBigNumberify('./src/vault.rsh:147:31:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1928, {
    at: './src/vault.rsh:147:10:application',
    fs: [],
    msg: null,
    who: 'Reserve'
    });
  const v1929 = stdlib.gt(v1918, stdlib.checkedBigNumberify('./src/vault.rsh:148:30:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1929, {
    at: './src/vault.rsh:148:10:application',
    fs: [],
    msg: null,
    who: 'Reserve'
    });
  const v1930 = stdlib.mul(v1917, v1886);
  const v1931 = stdlib.div(v1930, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
  const v1932 = stdlib.eq(v1919, v1931);
  stdlib.assert(v1932, {
    at: './src/vault.rsh:149:10:application',
    fs: [],
    msg: null,
    who: 'Reserve'
    });
  const v1933 = stdlib.mul(v1919, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
  const v1934 = stdlib.div(v1933, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
  let v1935;
  const v1936 = stdlib.lt(v1934, stdlib.checkedBigNumberify('./src/vault.rsh:151:69:decimal', stdlib.UInt_max, 0));
  if (v1936) {
    v1935 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    v1935 = v1934;
    }
  const v1937 = stdlib.eq(v1920, v1935);
  stdlib.assert(v1937, {
    at: './src/vault.rsh:151:10:application',
    fs: [],
    msg: null,
    who: 'Reserve'
    });
  let v1938;
  const v1939 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v1918);
  const v1940 = stdlib.div(v1939, stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
  const v1941 = stdlib.eq(v1940, v1918);
  if (v1941) {
    v1938 = v1939;
    }
  else {
    v1938 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
    }
  let v1943;
  const v1944 = stdlib.eq(v1938, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  if (v1944) {
    v1943 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1946 = stdlib.div(v1938, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
    v1943 = v1946;
    }
  const v1947 = stdlib.eq(v1921, v1943);
  stdlib.assert(v1947, {
    at: './src/vault.rsh:152:10:application',
    fs: [],
    msg: null,
    who: 'Reserve'
    });
  const v1948 = stdlib.gt(v1921, stdlib.checkedBigNumberify('./src/vault.rsh:153:28:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1948, {
    at: './src/vault.rsh:153:10:application',
    fs: [],
    msg: null,
    who: 'Reserve'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1951, time: v1950, didSend: v112, from: v1949 } = txn4;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1959, time: v1958, didSend: v123, from: v1957 } = txn5;
  ;
  const v1962 = stdlib.addressEq(v1874, v1957);
  stdlib.assert(v1962, {
    at: './src/vault.rsh:162:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Reserve'
    });
  const txn6 = await (ctc.sendrecv({
    args: [v1874, v1885, v1886, v1887, v1917, v1918, v1919, v1921, v1922, v1934, v1949],
    evt_cnt: 0,
    funcNum: 5,
    lct: v1958,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/vault.rsh:166:11:dot', stdlib.UInt_max, 0), [[v1918, v1887]]],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v1965, time: v1964, didSend: v131, from: v1963 } = txn6;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/vault.rsh:166:11:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: v1918,
        kind: 'to',
        tok: v1887
        });
      const v1969 = stdlib.addressEq(v1885, v1963);
      stdlib.assert(v1969, {
        at: './src/vault.rsh:166:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Reserve'
        });
      const v1970 = stdlib.sub(v1918, v1921);
      sim_r.txns.push({
        amt: v1970,
        kind: 'from',
        to: v1874,
        tok: v1887
        });
      sim_r.txns.push({
        amt: v1921,
        kind: 'from',
        to: v1949,
        tok: v1887
        });
      let v1979;
      const v1980 = stdlib.eq(v1919, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
      if (v1980) {
        v1979 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1981 = stdlib.mul(v1919, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        const v1982 = stdlib.div(v1981, v1919);
        const v1983 = stdlib.eq(v1982, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        if (v1983) {
          v1979 = v1981;
          }
        else {
          v1979 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
          }
        }
      let v1985;
      const v1986 = stdlib.eq(v1979, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      const v1987 = stdlib.eq(v1970, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
      const v1988 = v1986 ? true : v1987;
      if (v1988) {
        v1985 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1989 = stdlib.div(v1979, v1970);
        v1985 = v1989;
        }
      let v1993;
      const v1994 = stdlib.eq(v1934, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      const v1996 = v1994 ? true : v1987;
      if (v1996) {
        v1993 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1997 = stdlib.div(v1934, v1970);
        v1993 = v1997;
        }
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc2, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1965, time: v1964, didSend: v131, from: v1963 } = txn6;
  ;
  ;
  const v1969 = stdlib.addressEq(v1885, v1963);
  stdlib.assert(v1969, {
    at: './src/vault.rsh:166:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Reserve'
    });
  const v1970 = stdlib.sub(v1918, v1921);
  ;
  ;
  let v1979;
  const v1980 = stdlib.eq(v1919, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
  if (v1980) {
    v1979 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1981 = stdlib.mul(v1919, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
    const v1982 = stdlib.div(v1981, v1919);
    const v1983 = stdlib.eq(v1982, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
    if (v1983) {
      v1979 = v1981;
      }
    else {
      v1979 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
      }
    }
  let v1985;
  const v1986 = stdlib.eq(v1979, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  const v1987 = stdlib.eq(v1970, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
  const v1988 = v1986 ? true : v1987;
  if (v1988) {
    v1985 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1989 = stdlib.div(v1979, v1970);
    v1985 = v1989;
    }
  let v1993;
  const v1994 = stdlib.eq(v1934, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  const v1996 = v1994 ? true : v1987;
  if (v1996) {
    v1993 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1997 = stdlib.div(v1934, v1970);
    v1993 = v1997;
    }
  const txn7 = await (ctc.sendrecv({
    args: [v1885, v1886, v1887, v1917, v1919, v1922, v1949, v1970, v1985, v1993],
    evt_cnt: 0,
    funcNum: 6,
    lct: v1964,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn7) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v2001, time: v2000, didSend: v171, from: v1999 } = txn7;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v2003 = stdlib.addressEq(v1885, v1999);
      stdlib.assert(v2003, {
        at: './src/vault.rsh:185:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Reserve'
        });
      const v2012 = v1886;
      const v2014 = v1970;
      const v2015 = v2000;
      const v2021 = v1917;
      
      if (await (async () => {
        const v2072 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
        const v2074 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
        const v2075 = v2072 ? true : v2074;
        
        return v2075;})()) {
        const v2077 = stdlib.mul(v2021, v2012);
        const v2078 = stdlib.div(v2077, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
        let v2079;
        const v2080 = stdlib.eq(v2078, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
        if (v2080) {
          v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2081 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          const v2082 = stdlib.div(v2081, v2078);
          const v2083 = stdlib.eq(v2082, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          if (v2083) {
            v2079 = v2081;
            }
          else {
            v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          }
        let v2085;
        const v2086 = stdlib.eq(v2079, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v2087 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
        const v2088 = v2086 ? true : v2087;
        if (v2088) {
          v2085 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2089 = stdlib.div(v2079, v2014);
          v2085 = v2089;
          }
        const v2090 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
        const v2091 = stdlib.div(v2090, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
        let v2092;
        const v2093 = stdlib.eq(v2091, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v2095 = v2093 ? true : v2087;
        if (v2095) {
          v2092 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2096 = stdlib.div(v2091, v2014);
          v2092 = v2096;
          }
        const v2100 = stdlib.add(v2015, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1887
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2001, time: v2000, didSend: v171, from: v1999 } = txn7;
  ;
  const v2003 = stdlib.addressEq(v1885, v1999);
  stdlib.assert(v2003, {
    at: './src/vault.rsh:185:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Reserve'
    });
  let v2012 = v1886;
  let v2014 = v1970;
  let v2015 = v2000;
  let v2021 = v1917;
  
  while (await (async () => {
    const v2072 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
    const v2074 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
    const v2075 = v2072 ? true : v2074;
    
    return v2075;})()) {
    const v2077 = stdlib.mul(v2021, v2012);
    const v2078 = stdlib.div(v2077, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
    let v2079;
    const v2080 = stdlib.eq(v2078, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
    if (v2080) {
      v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2081 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
      const v2082 = stdlib.div(v2081, v2078);
      const v2083 = stdlib.eq(v2082, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
      if (v2083) {
        v2079 = v2081;
        }
      else {
        v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
        }
      }
    let v2085;
    const v2086 = stdlib.eq(v2079, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
    const v2087 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
    const v2088 = v2086 ? true : v2087;
    if (v2088) {
      v2085 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2089 = stdlib.div(v2079, v2014);
      v2085 = v2089;
      }
    const v2090 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
    const v2091 = stdlib.div(v2090, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
    let v2092;
    const v2093 = stdlib.eq(v2091, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
    const v2095 = v2093 ? true : v2087;
    if (v2095) {
      v2092 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2096 = stdlib.div(v2091, v2014);
      v2092 = v2096;
      }
    const v2100 = stdlib.add(v2015, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc6],
      timeoutAt: ['time', v2100],
      waitIfNotPresent: false
      }));
    if (txn8.didTimeout) {
      const txn9 = await (ctc.sendrecv({
        args: [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100],
        evt_cnt: 0,
        funcNum: 9,
        lct: v2015,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v4831, time: v4830, didSend: v1823, from: v4829 } = txn9;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/vault.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv2012 = v2012;
          const cv2014 = v2014;
          const cv2015 = v4830;
          const cv2021 = v2021;
          
          await (async () => {
            const v2012 = cv2012;
            const v2014 = cv2014;
            const v2015 = cv2015;
            const v2021 = cv2021;
            
            if (await (async () => {
              const v2072 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
              const v2074 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
              const v2075 = v2072 ? true : v2074;
              
              return v2075;})()) {
              const v2077 = stdlib.mul(v2021, v2012);
              const v2078 = stdlib.div(v2077, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v2079;
              const v2080 = stdlib.eq(v2078, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v2080) {
                v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2081 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v2082 = stdlib.div(v2081, v2078);
                const v2083 = stdlib.eq(v2082, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v2083) {
                  v2079 = v2081;
                  }
                else {
                  v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v2085;
              const v2086 = stdlib.eq(v2079, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v2087 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v2088 = v2086 ? true : v2087;
              if (v2088) {
                v2085 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2089 = stdlib.div(v2079, v2014);
                v2085 = v2089;
                }
              const v2090 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v2091 = stdlib.div(v2090, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v2092;
              const v2093 = stdlib.eq(v2091, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v2095 = v2093 ? true : v2087;
              if (v2095) {
                v2092 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2096 = stdlib.div(v2091, v2014);
                v2092 = v2096;
                }
              const v2100 = stdlib.add(v2015, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1887
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc2, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v4831, time: v4830, didSend: v1823, from: v4829 } = txn9;
      ;
      const cv2012 = v2012;
      const cv2014 = v2014;
      const cv2015 = v4830;
      const cv2021 = v2021;
      
      v2012 = cv2012;
      v2014 = cv2014;
      v2015 = cv2015;
      v2021 = cv2021;
      
      continue;
      }
    else {
      const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn8;
      switch (v2301[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2304 = v2301[1];
          const v2305 = v2304[stdlib.checkedBigNumberify('./src/vault.rsh:372:9:spread', stdlib.UInt_max, 0)];
          let v2306;
          let v2307;
          const v2308 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:89:64:decimal', stdlib.UInt_max, 25), v2014);
          const v2309 = stdlib.div(v2308, stdlib.checkedBigNumberify('./src/utils.rsh:89:64:decimal', stdlib.UInt_max, 25));
          const v2310 = stdlib.eq(v2309, v2014);
          if (v2310) {
            v2307 = v2308;
            }
          else {
            v2307 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v2312;
          const v2313 = stdlib.eq(v2307, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v2313) {
            v2312 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2315 = stdlib.div(v2307, stdlib.checkedBigNumberify('./src/utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
            v2312 = v2315;
            }
          const v2316 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:380:23:decimal', stdlib.UInt_max, 0));
          const v2317 = stdlib.lt(v2092, stdlib.checkedBigNumberify('./src/utils.rsh:19:38:decimal', stdlib.UInt_max, 1));
          const v2318 = v2316 ? v2317 : false;
          const v2319 = stdlib.lt(v2085, stdlib.checkedBigNumberify('./src/utils.rsh:12:41:decimal', stdlib.UInt_max, 110));
          const v2320 = v2318 ? v2319 : false;
          const v2321 = stdlib.ge(v2305, v2014);
          const v2322 = v2320 ? v2321 : false;
          if (v2322) {
            const v2323 = stdlib.add(v2014, v2312);
            const v2324 = [v2323, v1887];
            const v2325 = [stdlib.checkedBigNumberify('./src/vault.rsh:386:19:decimal', stdlib.UInt_max, 0), v2324];
            v2306 = v2325;
            }
          else {
            const v2326 = [stdlib.checkedBigNumberify('./src/vault.rsh:388:23:decimal', stdlib.UInt_max, 0), v1887];
            const v2327 = [stdlib.checkedBigNumberify('./src/vault.rsh:388:19:decimal', stdlib.UInt_max, 0), v2326];
            v2306 = v2327;
            }
          const v2329 = v2306[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 0)];
          const v2330 = v2306[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 1)];
          const v2331 = v2330[stdlib.checkedBigNumberify('./src/vault.rsh:214:14:array', stdlib.UInt_max, 0)];
          const v2337 = stdlib.add(v2021, v2329);
          ;
          ;
          undefined;
          stdlib.assert(v2321, {
            at: './src/vault.rsh:392:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:372:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          await txn8.getOutput('api', 'v2322', ctc4, v2322);
          if (v2322) {
            const v2359 = stdlib.sub(v2337, v2337);
            ;
            ;
            let v2364;
            if (v2310) {
              v2364 = v2308;
              }
            else {
              v2364 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v2369;
            const v2370 = stdlib.eq(v2364, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v2370) {
              v2369 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v2372 = stdlib.div(v2364, stdlib.checkedBigNumberify('./src/utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
              v2369 = v2372;
              }
            ;
            const cv2012 = v2012;
            const cv2014 = stdlib.checkedBigNumberify('./src/vault.rsh:405:19:decimal', stdlib.UInt_max, 0);
            const cv2015 = v2302;
            const cv2021 = v2359;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          else {
            const cv2012 = v2012;
            const cv2014 = v2014;
            const cv2015 = v2302;
            const cv2021 = v2337;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2634 = v2301[1];
          ;
          ;
          undefined;
          const v2699 = v2634[stdlib.checkedBigNumberify('./src/vault.rsh:412:9:spread', stdlib.UInt_max, 0)];
          const v2701 = stdlib.mul(v2021, v2699);
          let v2702;
          const v2703 = stdlib.eq(v2701, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v2703) {
            v2702 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2704 = stdlib.mul(v2701, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v2705 = stdlib.div(v2704, v2701);
            const v2706 = stdlib.eq(v2705, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v2706) {
              v2702 = v2704;
              }
            else {
              v2702 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v2708;
          const v2709 = stdlib.eq(v2702, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2711 = v2709 ? true : v2087;
          if (v2711) {
            v2708 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2712 = stdlib.div(v2702, v2014);
            v2708 = v2712;
            }
          const v2713 = stdlib.mul(v2701, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v2714 = stdlib.div(v2713, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v2715;
          const v2716 = stdlib.eq(v2714, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2718 = v2716 ? true : v2087;
          if (v2718) {
            v2715 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2719 = stdlib.div(v2714, v2014);
            v2715 = v2719;
            }
          const v2721 = {
            collateral: v2021,
            collateralRatio: v2708,
            collateralValue: v2701,
            hf: v2715,
            vaultDebt: v2014
            };
          await txn8.getOutput('api', 'v2721', ctc7, v2721);
          const cv2012 = v2699;
          const cv2014 = v2014;
          const cv2015 = v2302;
          const cv2021 = v2021;
          
          v2012 = cv2012;
          v2014 = cv2014;
          v2015 = cv2015;
          v2021 = cv2021;
          
          continue;
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2945 = v2301[1];
          ;
          ;
          undefined;
          const v3041 = true;
          await txn8.getOutput('api', 'v3041', ctc4, v3041);
          const cv2012 = v2012;
          const cv2014 = v2014;
          const cv2015 = v2302;
          const cv2021 = v2021;
          
          v2012 = cv2012;
          v2014 = cv2014;
          v2015 = cv2015;
          v2021 = cv2021;
          
          continue;
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3256 = v2301[1];
          const v3257 = v3256[stdlib.checkedBigNumberify('./src/vault.rsh:354:9:spread', stdlib.UInt_max, 0)];
          const v3273 = stdlib.add(v2021, v3257);
          ;
          ;
          undefined;
          const v3364 = stdlib.gt(v3257, stdlib.checkedBigNumberify('./src/vault.rsh:365:37:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3364, {
            at: './src/vault.rsh:365:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)'],
            msg: 'Cannot deposit 0 collateral tokens',
            who: 'Reserve'
            });
          const v3365 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v3365, {
            at: './src/vault.rsh:366:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Reserve'
            });
          const v3366 = true;
          await txn8.getOutput('api', 'v3366', ctc4, v3366);
          const cv2012 = v2012;
          const cv2014 = v2014;
          const cv2015 = v2302;
          const cv2021 = v3273;
          
          v2012 = cv2012;
          v2014 = cv2014;
          v2015 = cv2015;
          v2021 = cv2021;
          
          continue;
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3570 = v2301[1];
          const v3571 = v3570[stdlib.checkedBigNumberify('./src/vault.rsh:217:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v3689 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v3689, {
            at: './src/vault.rsh:230:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Reserve'
            });
          const v3690 = stdlib.gt(v3571, stdlib.checkedBigNumberify('./src/vault.rsh:231:32:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3690, {
            at: './src/vault.rsh:231:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
            msg: 'You must mint at least 1 token',
            who: 'Reserve'
            });
          let v3693;
          const v3694 = stdlib.lt(v2091, v2014);
          if (v3694) {
            v3693 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3695 = stdlib.sub(v2091, v2014);
            v3693 = v3695;
            }
          let v3696;
          const v3697 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v3571);
          const v3698 = stdlib.div(v3697, stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
          const v3699 = stdlib.eq(v3698, v3571);
          if (v3699) {
            v3696 = v3697;
            }
          else {
            v3696 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v3701;
          const v3702 = stdlib.eq(v3696, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v3702) {
            v3701 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3704 = stdlib.div(v3696, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
            v3701 = v3704;
            }
          const v3705 = stdlib.sub(v3571, v3701);
          const v3706 = stdlib.add(v2014, v3705);
          let v3707;
          if (v2080) {
            v3707 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3709 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v3710 = stdlib.div(v3709, v2078);
            const v3711 = stdlib.eq(v3710, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v3711) {
              v3707 = v3709;
              }
            else {
              v3707 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v3713;
          const v3714 = stdlib.eq(v3707, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v3715 = stdlib.eq(v3706, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v3716 = v3714 ? true : v3715;
          if (v3716) {
            v3713 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3717 = stdlib.div(v3707, v3706);
            v3713 = v3717;
            }
          const v3718 = stdlib.ge(v3713, stdlib.checkedBigNumberify('./src/utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v3719 = stdlib.gt(v3693, stdlib.checkedBigNumberify('./src/vault.rsh:248:32:decimal', stdlib.UInt_max, 0));
          const v3720 = v3718 ? v3719 : false;
          const v3722 = v3720 ? v3690 : false;
          const v3723 = stdlib.le(v3571, v3693);
          const v3724 = v3722 ? v3723 : false;
          await txn8.getOutput('api', 'v3724', ctc4, v3724);
          if (v3724) {
            stdlib.assert(v3723, {
              at: './src/vault.rsh:254:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: 'The request mint amount is more than the maximum allowed',
              who: 'Reserve'
              });
            let v3731;
            if (v3699) {
              v3731 = v3697;
              }
            else {
              v3731 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v3736;
            const v3737 = stdlib.eq(v3731, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v3737) {
              v3736 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v3739 = stdlib.div(v3731, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
              v3736 = v3739;
              }
            const v3740 = stdlib.eq(v3701, v3736);
            stdlib.assert(v3740, {
              at: './src/vault.rsh:256:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: null,
              who: 'Reserve'
              });
            const v3742 = stdlib.eq(v3705, v3705);
            stdlib.assert(v3742, {
              at: './src/vault.rsh:257:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: null,
              who: 'Reserve'
              });
            const txn9 = await (ctc.sendrecv({
              args: [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2085, v2092, v3571, v3701, v3705, v3706],
              evt_cnt: 0,
              funcNum: 10,
              lct: v2302,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./src/vault.rsh:259:19:dot', stdlib.UInt_max, 0), [[v3571, v1887]]],
              sim_p: (async (txn9) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v3745, time: v3744, didSend: v1680, from: v3743 } = txn9;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./src/vault.rsh:259:19:dot', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                sim_r.txns.push({
                  amt: v3571,
                  kind: 'to',
                  tok: v1887
                  });
                const v3749 = stdlib.addressEq(v1885, v3743);
                stdlib.assert(v3749, {
                  at: './src/vault.rsh:259:19:dot',
                  fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
                  msg: 'sender correct',
                  who: 'Reserve'
                  });
                sim_r.txns.push({
                  amt: v3705,
                  kind: 'from',
                  to: v1922,
                  tok: v1887
                  });
                sim_r.txns.push({
                  amt: v3701,
                  kind: 'from',
                  to: v1949,
                  tok: v1887
                  });
                const cv2012 = v2012;
                const cv2014 = v3706;
                const cv2015 = v3744;
                const cv2021 = v2021;
                
                await (async () => {
                  const v2012 = cv2012;
                  const v2014 = cv2014;
                  const v2015 = cv2015;
                  const v2021 = cv2021;
                  
                  if (await (async () => {
                    const v2072 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
                    const v2074 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
                    const v2075 = v2072 ? true : v2074;
                    
                    return v2075;})()) {
                    const v2077 = stdlib.mul(v2021, v2012);
                    const v2078 = stdlib.div(v2077, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
                    let v2079;
                    const v2080 = stdlib.eq(v2078, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
                    if (v2080) {
                      v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                      }
                    else {
                      const v2081 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                      const v2082 = stdlib.div(v2081, v2078);
                      const v2083 = stdlib.eq(v2082, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                      if (v2083) {
                        v2079 = v2081;
                        }
                      else {
                        v2079 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                        }
                      }
                    let v2085;
                    const v2086 = stdlib.eq(v2079, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
                    const v2087 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
                    const v2088 = v2086 ? true : v2087;
                    if (v2088) {
                      v2085 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                      }
                    else {
                      const v2089 = stdlib.div(v2079, v2014);
                      v2085 = v2089;
                      }
                    const v2090 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
                    const v2091 = stdlib.div(v2090, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
                    let v2092;
                    const v2093 = stdlib.eq(v2091, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
                    const v2095 = v2093 ? true : v2087;
                    if (v2095) {
                      v2092 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                      }
                    else {
                      const v2096 = stdlib.div(v2091, v2014);
                      v2092 = v2096;
                      }
                    const v2100 = stdlib.add(v2015, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v1887
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined,
              tys: [ctc2, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v3745, time: v3744, didSend: v1680, from: v3743 } = txn9;
            ;
            ;
            const v3749 = stdlib.addressEq(v1885, v3743);
            stdlib.assert(v3749, {
              at: './src/vault.rsh:259:19:dot',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: 'sender correct',
              who: 'Reserve'
              });
            ;
            ;
            const cv2012 = v2012;
            const cv2014 = v3706;
            const cv2015 = v3744;
            const cv2021 = v2021;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;
            
            }
          else {
            const cv2012 = v2012;
            const cv2014 = v2014;
            const cv2015 = v2302;
            const cv2021 = v2021;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3884 = v2301[1];
          const v3885 = v3884[stdlib.checkedBigNumberify('./src/vault.rsh:268:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v4085 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v4085, {
            at: './src/vault.rsh:285:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Reserve'
            });
          const v4086 = stdlib.le(v3885, v2014);
          const v4087 = stdlib.gt(v3885, stdlib.checkedBigNumberify('./src/vault.rsh:287:28:decimal', stdlib.UInt_max, 0));
          const v4088 = v4086 ? v4087 : false;
          const v4089 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:288:23:decimal', stdlib.UInt_max, 0));
          const v4090 = v4088 ? v4089 : false;
          stdlib.assert(v4090, {
            at: './src/vault.rsh:286:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          ;
          const v4095 = stdlib.sub(v2014, v3885);
          const v4096 = stdlib.eq(v4095, stdlib.checkedBigNumberify('./src/vault.rsh:291:69:decimal', stdlib.UInt_max, 0));
          const v4097 = true;
          await txn8.getOutput('api', 'v4097', ctc4, v4097);
          if (v4096) {
            stdlib.assert(v4096, {
              at: './src/vault.rsh:294:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
              msg: null,
              who: 'Reserve'
              });
            const v4109 = stdlib.sub(v2021, v2021);
            ;
            const cv2012 = v2012;
            const cv2014 = stdlib.checkedBigNumberify('./src/vault.rsh:296:19:decimal', stdlib.UInt_max, 0);
            const cv2015 = v2302;
            const cv2021 = v4109;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          else {
            const cv2012 = v2012;
            const cv2014 = v4095;
            const cv2015 = v2302;
            const cv2021 = v2021;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4198 = v2301[1];
          const v4199 = v4198[stdlib.checkedBigNumberify('./src/vault.rsh:302:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v4437 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v4437, {
            at: './src/vault.rsh:325:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Reserve'
            });
          const v4438 = stdlib.gt(v4199, stdlib.checkedBigNumberify('./src/vault.rsh:326:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4438, {
            at: './src/vault.rsh:326:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          const v4440 = stdlib.lt(v4199, v2021);
          stdlib.assert(v4440, {
            at: './src/vault.rsh:327:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'Cannot withdraw more than the balance of this contract',
            who: 'Reserve'
            });
          const v4441 = stdlib.gt(v2085, stdlib.checkedBigNumberify('./src/utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          stdlib.assert(v4441, {
            at: './src/vault.rsh:329:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'Vault collateral ratio is not healthy',
            who: 'Reserve'
            });
          const v4443 = stdlib.sub(v2021, v4199);
          const v4444 = stdlib.mul(v4443, v2012);
          const v4445 = stdlib.gt(v4444, stdlib.checkedBigNumberify('./src/vault.rsh:334:11:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4445, {
            at: './src/vault.rsh:333:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'Collateral value after withdrawal must not be 0',
            who: 'Reserve'
            });
          let v4446;
          const v4447 = stdlib.eq(v4444, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v4447) {
            v4446 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4448 = stdlib.mul(v4444, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v4449 = stdlib.div(v4448, v4444);
            const v4450 = stdlib.eq(v4449, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v4450) {
              v4446 = v4448;
              }
            else {
              v4446 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v4452;
          const v4453 = stdlib.eq(v4446, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v4455 = v4453 ? true : v2087;
          if (v4455) {
            v4452 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4456 = stdlib.div(v4446, v2014);
            v4452 = v4456;
            }
          const v4459 = v4438 ? v4441 : false;
          const v4460 = stdlib.gt(v4452, stdlib.checkedBigNumberify('./src/utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v4461 = v4459 ? v4460 : false;
          const v4464 = v4461 ? v4440 : false;
          await txn8.getOutput('api', 'v4464', ctc4, v4464);
          if (v4464) {
            ;
            const cv2012 = v2012;
            const cv2014 = v2014;
            const cv2015 = v2302;
            const cv2021 = v4443;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          else {
            const cv2012 = v2012;
            const cv2014 = v2014;
            const cv2015 = v2302;
            const cv2021 = v2021;
            
            v2012 = cv2012;
            v2014 = cv2014;
            v2015 = cv2015;
            v2021 = cv2021;
            
            continue;}
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4512 = v2301[1];
          const v4513 = v4512[stdlib.checkedBigNumberify('./src/vault.rsh:429:9:spread', stdlib.UInt_max, 0)];
          const v4514 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:92:8:decimal', stdlib.UInt_max, 2), v4513);
          const v4515 = stdlib.div(v4514, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          const v4516 = stdlib.add(v4513, v4515);
          ;
          ;
          undefined;
          const v4797 = stdlib.div(v4513, v2012);
          const v4798 = stdlib.mul(v4797, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          const v4801 = stdlib.gt(v4513, stdlib.checkedBigNumberify('./src/vault.rsh:448:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4801, {
            at: './src/vault.rsh:448:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          const v4802 = stdlib.gt(v2012, stdlib.checkedBigNumberify('./src/vault.rsh:449:35:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4802, {
            at: './src/vault.rsh:449:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          const v4803 = stdlib.sub(v2014, v4513);
          const v4804 = stdlib.ge(v4803, stdlib.checkedBigNumberify('./src/vault.rsh:450:53:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4804, {
            at: './src/vault.rsh:450:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          stdlib.assert(v4804, {
            at: './src/vault.rsh:451:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          const v4808 = stdlib.ge(v2021, v4798);
          stdlib.assert(v4808, {
            at: './src/vault.rsh:452:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          ;
          const v4816 = stdlib.sub(v2021, v4798);
          ;
          ;
          const v4821 = true;
          await txn8.getOutput('api', 'v4821', ctc4, v4821);
          const cv2012 = v2012;
          const cv2014 = v4803;
          const cv2015 = v2302;
          const cv2021 = v4816;
          
          v2012 = cv2012;
          v2014 = cv2014;
          v2015 = cv2015;
          v2021 = cv2021;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function VaultOwner_depositCollateral(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for VaultOwner_depositCollateral expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for VaultOwner_depositCollateral expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Data({
    Liquidator_liquidateVault0: ctc4,
    Oracle_updatePrice0: ctc4,
    RecoveryToggler_toggleRecoveryMode0: ctc5,
    VaultOwner_depositCollateral0: ctc4,
    VaultOwner_mintToken0: ctc4,
    VaultOwner_returnVaultDebt0: ctc4,
    VaultOwner_withdrawCollateral0: ctc4,
    VaultRedeemer_redeemVault0: ctc4
    });
  const ctc7 = stdlib.T_Null;
  
  
  const [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2142 = ctc.selfAddress();
  const v2144 = stdlib.protect(ctc4, await interact.in(), {
    at: './src/vault.rsh:1:23:application',
    fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_depositCollateral0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'in',
    who: 'VaultOwner_depositCollateral'
    });
  const v2145 = v2144[stdlib.checkedBigNumberify('./src/vault.rsh:354:9:spread', stdlib.UInt_max, 0)];
  const v2147 = stdlib.gt(v2145, stdlib.checkedBigNumberify('./src/vault.rsh:357:36:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2147, {
    at: './src/vault.rsh:357:15:application',
    fs: ['at ./src/vault.rsh:354:9:application call to [unknown function] (defined at: ./src/vault.rsh:356:27:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_depositCollateral0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'Cannot deposit 0 collateral tokens',
    who: 'VaultOwner_depositCollateral'
    });
  const v2148 = stdlib.addressEq(v2142, v1922);
  stdlib.assert(v2148, {
    at: './src/vault.rsh:358:15:application',
    fs: ['at ./src/vault.rsh:354:9:application call to [unknown function] (defined at: ./src/vault.rsh:356:27:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_depositCollateral0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'You are not the owner of this vault',
    who: 'VaultOwner_depositCollateral'
    });
  
  const v2242 = ['VaultOwner_depositCollateral0', v2144];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100, v2242],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v2145, [[stdlib.checkedBigNumberify('./src/vault.rsh:361:37:decimal', stdlib.UInt_max, 0), v1887]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
      
      switch (v2301[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2304 = v2301[1];
          
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2634 = v2301[1];
          
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2945 = v2301[1];
          
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3256 = v2301[1];
          const v3257 = v3256[stdlib.checkedBigNumberify('./src/vault.rsh:354:9:spread', stdlib.UInt_max, 0)];
          const v3273 = stdlib.add(v2021, v3257);
          sim_r.txns.push({
            amt: v3257,
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/vault.rsh:361:37:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v1887
            });
          undefined;
          const v3364 = stdlib.gt(v3257, stdlib.checkedBigNumberify('./src/vault.rsh:365:37:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3364, {
            at: './src/vault.rsh:365:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)'],
            msg: 'Cannot deposit 0 collateral tokens',
            who: 'VaultOwner_depositCollateral'
            });
          const v3365 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v3365, {
            at: './src/vault.rsh:366:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'VaultOwner_depositCollateral'
            });
          const v3366 = true;
          const v3367 = await txn1.getOutput('api', 'v3366', ctc3, v3366);
          
          const v63271 = v2012;
          const v63272 = v2014;
          const v63274 = v3273;
          const v63275 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
          const v63276 = stdlib.gt(v3273, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
          const v63277 = v63275 ? true : v63276;
          if (v63277) {
            const v63278 = stdlib.mul(v3273, v2012);
            const v63279 = stdlib.div(v63278, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
            let v63280;
            const v63281 = stdlib.eq(v63279, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
            if (v63281) {
              v63280 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63282 = stdlib.mul(v63279, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              const v63283 = stdlib.div(v63282, v63279);
              const v63284 = stdlib.eq(v63283, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              if (v63284) {
                v63280 = v63282;
                }
              else {
                v63280 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                }
              }
            let v63285;
            const v63286 = stdlib.eq(v63280, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63287 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
            const v63288 = v63286 ? true : v63287;
            if (v63288) {
              v63285 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63289 = stdlib.div(v63280, v2014);
              v63285 = v63289;
              }
            const v63290 = stdlib.mul(v63279, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
            const v63291 = stdlib.div(v63290, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
            let v63292;
            const v63293 = stdlib.eq(v63291, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63294 = v63293 ? true : v63287;
            if (v63294) {
              v63292 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63295 = stdlib.div(v63291, v2014);
              v63292 = v63295;
              }
            const v63296 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1887
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3570 = v2301[1];
          
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3884 = v2301[1];
          
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4198 = v2301[1];
          
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4512 = v2301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
  switch (v2301[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2304 = v2301[1];
      return;
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2634 = v2301[1];
      return;
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2945 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3256 = v2301[1];
      const v3257 = v3256[stdlib.checkedBigNumberify('./src/vault.rsh:354:9:spread', stdlib.UInt_max, 0)];
      const v3273 = stdlib.add(v2021, v3257);
      ;
      ;
      undefined;
      const v3364 = stdlib.gt(v3257, stdlib.checkedBigNumberify('./src/vault.rsh:365:37:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v3364, {
        at: './src/vault.rsh:365:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)'],
        msg: 'Cannot deposit 0 collateral tokens',
        who: 'VaultOwner_depositCollateral'
        });
      const v3365 = stdlib.addressEq(v2300, v1922);
      stdlib.assert(v3365, {
        at: './src/vault.rsh:366:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)'],
        msg: 'You are not the owner of this vault',
        who: 'VaultOwner_depositCollateral'
        });
      const v3366 = true;
      const v3367 = await txn1.getOutput('api', 'v3366', ctc3, v3366);
      if (v1498) {
        stdlib.protect(ctc7, await interact.out(v3256, v3367), {
          at: './src/vault.rsh:354:9:application',
          fs: ['at ./src/vault.rsh:354:9:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)', 'at ./src/vault.rsh:367:18:application call to "apiReturn" (defined at: ./src/vault.rsh:354:9:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)'],
          msg: 'out',
          who: 'VaultOwner_depositCollateral'
          });
        }
      else {
        }
      
      const v63271 = v2012;
      const v63272 = v2014;
      const v63274 = v3273;
      const v63275 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
      const v63276 = stdlib.gt(v3273, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
      const v63277 = v63275 ? true : v63276;
      if (v63277) {
        const v63278 = stdlib.mul(v3273, v2012);
        const v63279 = stdlib.div(v63278, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
        let v63280;
        const v63281 = stdlib.eq(v63279, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
        if (v63281) {
          v63280 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63282 = stdlib.mul(v63279, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          const v63283 = stdlib.div(v63282, v63279);
          const v63284 = stdlib.eq(v63283, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          if (v63284) {
            v63280 = v63282;
            }
          else {
            v63280 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          }
        let v63285;
        const v63286 = stdlib.eq(v63280, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63287 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
        const v63288 = v63286 ? true : v63287;
        if (v63288) {
          v63285 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63289 = stdlib.div(v63280, v2014);
          v63285 = v63289;
          }
        const v63290 = stdlib.mul(v63279, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
        const v63291 = stdlib.div(v63290, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
        let v63292;
        const v63293 = stdlib.eq(v63291, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63294 = v63293 ? true : v63287;
        if (v63294) {
          v63292 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63295 = stdlib.div(v63291, v2014);
          v63292 = v63295;
          }
        const v63296 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3570 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3884 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4198 = v2301[1];
      return;
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4512 = v2301[1];
      return;
      break;
      }
    }
  
  
  };
export async function VaultOwner_mintToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for VaultOwner_mintToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for VaultOwner_mintToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Data({
    Liquidator_liquidateVault0: ctc4,
    Oracle_updatePrice0: ctc4,
    RecoveryToggler_toggleRecoveryMode0: ctc5,
    VaultOwner_depositCollateral0: ctc4,
    VaultOwner_mintToken0: ctc4,
    VaultOwner_returnVaultDebt0: ctc4,
    VaultOwner_withdrawCollateral0: ctc4,
    VaultRedeemer_redeemVault0: ctc4
    });
  const ctc7 = stdlib.T_Null;
  
  
  const [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2102 = ctc.selfAddress();
  const v2104 = stdlib.protect(ctc4, await interact.in(), {
    at: './src/vault.rsh:1:23:application',
    fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_mintToken0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'in',
    who: 'VaultOwner_mintToken'
    });
  const v2105 = v2104[stdlib.checkedBigNumberify('./src/vault.rsh:217:9:spread', stdlib.UInt_max, 0)];
  const v2107 = stdlib.addressEq(v2102, v1922);
  stdlib.assert(v2107, {
    at: './src/vault.rsh:220:15:application',
    fs: ['at ./src/vault.rsh:217:9:application call to [unknown function] (defined at: ./src/vault.rsh:219:22:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_mintToken0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'You are not the owner of this vault',
    who: 'VaultOwner_mintToken'
    });
  const v2108 = stdlib.gt(v2105, stdlib.checkedBigNumberify('./src/vault.rsh:221:31:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2108, {
    at: './src/vault.rsh:221:15:application',
    fs: ['at ./src/vault.rsh:217:9:application call to [unknown function] (defined at: ./src/vault.rsh:219:22:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_mintToken0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'You cannot mint 0 tokens',
    who: 'VaultOwner_mintToken'
    });
  
  const v2253 = ['VaultOwner_mintToken0', v2104];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100, v2253],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/vault.rsh:226:17:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./src/vault.rsh:226:21:decimal', stdlib.UInt_max, 0), v1887]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
      
      switch (v2301[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2304 = v2301[1];
          
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2634 = v2301[1];
          
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2945 = v2301[1];
          
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3256 = v2301[1];
          
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3570 = v2301[1];
          const v3571 = v3570[stdlib.checkedBigNumberify('./src/vault.rsh:217:9:spread', stdlib.UInt_max, 0)];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/vault.rsh:226:17:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/vault.rsh:226:21:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v1887
            });
          undefined;
          const v3689 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v3689, {
            at: './src/vault.rsh:230:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'VaultOwner_mintToken'
            });
          const v3690 = stdlib.gt(v3571, stdlib.checkedBigNumberify('./src/vault.rsh:231:32:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3690, {
            at: './src/vault.rsh:231:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
            msg: 'You must mint at least 1 token',
            who: 'VaultOwner_mintToken'
            });
          let v3693;
          const v3694 = stdlib.lt(v2091, v2014);
          if (v3694) {
            v3693 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3695 = stdlib.sub(v2091, v2014);
            v3693 = v3695;
            }
          let v3696;
          const v3697 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v3571);
          const v3698 = stdlib.div(v3697, stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
          const v3699 = stdlib.eq(v3698, v3571);
          if (v3699) {
            v3696 = v3697;
            }
          else {
            v3696 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v3701;
          const v3702 = stdlib.eq(v3696, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v3702) {
            v3701 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3704 = stdlib.div(v3696, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
            v3701 = v3704;
            }
          const v3705 = stdlib.sub(v3571, v3701);
          const v3706 = stdlib.add(v2014, v3705);
          let v3707;
          if (v2080) {
            v3707 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3709 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v3710 = stdlib.div(v3709, v2078);
            const v3711 = stdlib.eq(v3710, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v3711) {
              v3707 = v3709;
              }
            else {
              v3707 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v3713;
          const v3714 = stdlib.eq(v3707, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v3715 = stdlib.eq(v3706, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v3716 = v3714 ? true : v3715;
          if (v3716) {
            v3713 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3717 = stdlib.div(v3707, v3706);
            v3713 = v3717;
            }
          const v3718 = stdlib.ge(v3713, stdlib.checkedBigNumberify('./src/utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v3719 = stdlib.gt(v3693, stdlib.checkedBigNumberify('./src/vault.rsh:248:32:decimal', stdlib.UInt_max, 0));
          const v3720 = v3718 ? v3719 : false;
          const v3722 = v3720 ? v3690 : false;
          const v3723 = stdlib.le(v3571, v3693);
          const v3724 = v3722 ? v3723 : false;
          const v3725 = await txn1.getOutput('api', 'v3724', ctc3, v3724);
          
          if (v3724) {
            stdlib.assert(v3723, {
              at: './src/vault.rsh:254:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: 'The request mint amount is more than the maximum allowed',
              who: 'VaultOwner_mintToken'
              });
            let v3731;
            if (v3699) {
              v3731 = v3697;
              }
            else {
              v3731 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v3736;
            const v3737 = stdlib.eq(v3731, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v3737) {
              v3736 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v3739 = stdlib.div(v3731, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
              v3736 = v3739;
              }
            const v3740 = stdlib.eq(v3701, v3736);
            stdlib.assert(v3740, {
              at: './src/vault.rsh:256:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: null,
              who: 'VaultOwner_mintToken'
              });
            const v3742 = stdlib.eq(v3705, v3705);
            stdlib.assert(v3742, {
              at: './src/vault.rsh:257:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
              msg: null,
              who: 'VaultOwner_mintToken'
              });
            sim_r.isHalt = false;
            }
          else {
            const v63315 = v2012;
            const v63316 = v2014;
            const v63318 = v2021;
            const v63319 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
            const v63320 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
            const v63321 = v63319 ? true : v63320;
            if (v63321) {
              const v63322 = stdlib.mul(v2021, v2012);
              const v63323 = stdlib.div(v63322, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v63324;
              const v63325 = stdlib.eq(v63323, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v63325) {
                v63324 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63326 = stdlib.mul(v63323, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v63327 = stdlib.div(v63326, v63323);
                const v63328 = stdlib.eq(v63327, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v63328) {
                  v63324 = v63326;
                  }
                else {
                  v63324 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v63329;
              const v63330 = stdlib.eq(v63324, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63331 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v63332 = v63330 ? true : v63331;
              if (v63332) {
                v63329 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63333 = stdlib.div(v63324, v2014);
                v63329 = v63333;
                }
              const v63334 = stdlib.mul(v63323, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v63335 = stdlib.div(v63334, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v63336;
              const v63337 = stdlib.eq(v63335, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63338 = v63337 ? true : v63331;
              if (v63338) {
                v63336 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63339 = stdlib.div(v63335, v2014);
                v63336 = v63339;
                }
              const v63340 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1887
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3884 = v2301[1];
          
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4198 = v2301[1];
          
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4512 = v2301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
  switch (v2301[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2304 = v2301[1];
      return;
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2634 = v2301[1];
      return;
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2945 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3256 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3570 = v2301[1];
      const v3571 = v3570[stdlib.checkedBigNumberify('./src/vault.rsh:217:9:spread', stdlib.UInt_max, 0)];
      ;
      ;
      undefined;
      const v3689 = stdlib.addressEq(v2300, v1922);
      stdlib.assert(v3689, {
        at: './src/vault.rsh:230:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
        msg: 'You are not the owner of this vault',
        who: 'VaultOwner_mintToken'
        });
      const v3690 = stdlib.gt(v3571, stdlib.checkedBigNumberify('./src/vault.rsh:231:32:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v3690, {
        at: './src/vault.rsh:231:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
        msg: 'You must mint at least 1 token',
        who: 'VaultOwner_mintToken'
        });
      let v3693;
      const v3694 = stdlib.lt(v2091, v2014);
      if (v3694) {
        v3693 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v3695 = stdlib.sub(v2091, v2014);
        v3693 = v3695;
        }
      let v3696;
      const v3697 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v3571);
      const v3698 = stdlib.div(v3697, stdlib.checkedBigNumberify('./src/utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
      const v3699 = stdlib.eq(v3698, v3571);
      if (v3699) {
        v3696 = v3697;
        }
      else {
        v3696 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
        }
      let v3701;
      const v3702 = stdlib.eq(v3696, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      if (v3702) {
        v3701 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v3704 = stdlib.div(v3696, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
        v3701 = v3704;
        }
      const v3705 = stdlib.sub(v3571, v3701);
      const v3706 = stdlib.add(v2014, v3705);
      let v3707;
      if (v2080) {
        v3707 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v3709 = stdlib.mul(v2078, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        const v3710 = stdlib.div(v3709, v2078);
        const v3711 = stdlib.eq(v3710, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        if (v3711) {
          v3707 = v3709;
          }
        else {
          v3707 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
          }
        }
      let v3713;
      const v3714 = stdlib.eq(v3707, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      const v3715 = stdlib.eq(v3706, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
      const v3716 = v3714 ? true : v3715;
      if (v3716) {
        v3713 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v3717 = stdlib.div(v3707, v3706);
        v3713 = v3717;
        }
      const v3718 = stdlib.ge(v3713, stdlib.checkedBigNumberify('./src/utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
      const v3719 = stdlib.gt(v3693, stdlib.checkedBigNumberify('./src/vault.rsh:248:32:decimal', stdlib.UInt_max, 0));
      const v3720 = v3718 ? v3719 : false;
      const v3722 = v3720 ? v3690 : false;
      const v3723 = stdlib.le(v3571, v3693);
      const v3724 = v3722 ? v3723 : false;
      const v3725 = await txn1.getOutput('api', 'v3724', ctc3, v3724);
      if (v1498) {
        stdlib.protect(ctc7, await interact.out(v3570, v3725), {
          at: './src/vault.rsh:217:9:application',
          fs: ['at ./src/vault.rsh:217:9:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)', 'at ./src/vault.rsh:251:18:application call to "apiReturn" (defined at: ./src/vault.rsh:217:9:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
          msg: 'out',
          who: 'VaultOwner_mintToken'
          });
        }
      else {
        }
      
      if (v3724) {
        stdlib.assert(v3723, {
          at: './src/vault.rsh:254:18:application',
          fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
          msg: 'The request mint amount is more than the maximum allowed',
          who: 'VaultOwner_mintToken'
          });
        let v3731;
        if (v3699) {
          v3731 = v3697;
          }
        else {
          v3731 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
          }
        let v3736;
        const v3737 = stdlib.eq(v3731, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        if (v3737) {
          v3736 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v3739 = stdlib.div(v3731, stdlib.checkedBigNumberify('./src/utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
          v3736 = v3739;
          }
        const v3740 = stdlib.eq(v3701, v3736);
        stdlib.assert(v3740, {
          at: './src/vault.rsh:256:18:application',
          fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
          msg: null,
          who: 'VaultOwner_mintToken'
          });
        const v3742 = stdlib.eq(v3705, v3705);
        stdlib.assert(v3742, {
          at: './src/vault.rsh:257:18:application',
          fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)'],
          msg: null,
          who: 'VaultOwner_mintToken'
          });
        return;
        }
      else {
        const v63315 = v2012;
        const v63316 = v2014;
        const v63318 = v2021;
        const v63319 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
        const v63320 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
        const v63321 = v63319 ? true : v63320;
        if (v63321) {
          const v63322 = stdlib.mul(v2021, v2012);
          const v63323 = stdlib.div(v63322, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          let v63324;
          const v63325 = stdlib.eq(v63323, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v63325) {
            v63324 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63326 = stdlib.mul(v63323, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v63327 = stdlib.div(v63326, v63323);
            const v63328 = stdlib.eq(v63327, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v63328) {
              v63324 = v63326;
              }
            else {
              v63324 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v63329;
          const v63330 = stdlib.eq(v63324, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63331 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v63332 = v63330 ? true : v63331;
          if (v63332) {
            v63329 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63333 = stdlib.div(v63324, v2014);
            v63329 = v63333;
            }
          const v63334 = stdlib.mul(v63323, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v63335 = stdlib.div(v63334, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v63336;
          const v63337 = stdlib.eq(v63335, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63338 = v63337 ? true : v63331;
          if (v63338) {
            v63336 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63339 = stdlib.div(v63335, v2014);
            v63336 = v63339;
            }
          const v63340 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
          return;
          }
        else {
          return;
          }}
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3884 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4198 = v2301[1];
      return;
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4512 = v2301[1];
      return;
      break;
      }
    }
  
  
  };
export async function VaultOwner_returnVaultDebt(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for VaultOwner_returnVaultDebt expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for VaultOwner_returnVaultDebt expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Data({
    Liquidator_liquidateVault0: ctc4,
    Oracle_updatePrice0: ctc4,
    RecoveryToggler_toggleRecoveryMode0: ctc5,
    VaultOwner_depositCollateral0: ctc4,
    VaultOwner_mintToken0: ctc4,
    VaultOwner_returnVaultDebt0: ctc4,
    VaultOwner_withdrawCollateral0: ctc4,
    VaultRedeemer_redeemVault0: ctc4
    });
  const ctc7 = stdlib.T_Null;
  
  
  const [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2112 = ctc.selfAddress();
  const v2114 = stdlib.protect(ctc4, await interact.in(), {
    at: './src/vault.rsh:1:23:application',
    fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_returnVaultDebt0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'in',
    who: 'VaultOwner_returnVaultDebt'
    });
  const v2115 = v2114[stdlib.checkedBigNumberify('./src/vault.rsh:268:9:spread', stdlib.UInt_max, 0)];
  const v2117 = stdlib.le(v2115, v2014);
  stdlib.assert(v2117, {
    at: './src/vault.rsh:271:15:application',
    fs: ['at ./src/vault.rsh:268:9:application call to [unknown function] (defined at: ./src/vault.rsh:270:24:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_returnVaultDebt0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'You canot return more tokens than the vault debt',
    who: 'VaultOwner_returnVaultDebt'
    });
  const v2118 = stdlib.gt(v2115, stdlib.checkedBigNumberify('./src/vault.rsh:275:33:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2118, {
    at: './src/vault.rsh:275:15:application',
    fs: ['at ./src/vault.rsh:268:9:application call to [unknown function] (defined at: ./src/vault.rsh:270:24:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_returnVaultDebt0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'Cannot return 0 tokens',
    who: 'VaultOwner_returnVaultDebt'
    });
  const v2119 = stdlib.addressEq(v2112, v1922);
  stdlib.assert(v2119, {
    at: './src/vault.rsh:276:15:application',
    fs: ['at ./src/vault.rsh:268:9:application call to [unknown function] (defined at: ./src/vault.rsh:270:24:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_returnVaultDebt0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'You are not the owner of this vault',
    who: 'VaultOwner_returnVaultDebt'
    });
  
  const v2264 = ['VaultOwner_returnVaultDebt0', v2114];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100, v2264],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/vault.rsh:281:17:decimal', stdlib.UInt_max, 0), [[v2115, v1887]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
      
      switch (v2301[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2304 = v2301[1];
          
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2634 = v2301[1];
          
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2945 = v2301[1];
          
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3256 = v2301[1];
          
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3570 = v2301[1];
          
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3884 = v2301[1];
          const v3885 = v3884[stdlib.checkedBigNumberify('./src/vault.rsh:268:9:spread', stdlib.UInt_max, 0)];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/vault.rsh:281:17:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: v3885,
            kind: 'to',
            tok: v1887
            });
          undefined;
          const v4085 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v4085, {
            at: './src/vault.rsh:285:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'VaultOwner_returnVaultDebt'
            });
          const v4086 = stdlib.le(v3885, v2014);
          const v4087 = stdlib.gt(v3885, stdlib.checkedBigNumberify('./src/vault.rsh:287:28:decimal', stdlib.UInt_max, 0));
          const v4088 = v4086 ? v4087 : false;
          const v4089 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:288:23:decimal', stdlib.UInt_max, 0));
          const v4090 = v4088 ? v4089 : false;
          stdlib.assert(v4090, {
            at: './src/vault.rsh:286:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
            msg: null,
            who: 'VaultOwner_returnVaultDebt'
            });
          sim_r.txns.push({
            amt: v3885,
            kind: 'from',
            to: v1885,
            tok: v1887
            });
          const v4095 = stdlib.sub(v2014, v3885);
          const v4096 = stdlib.eq(v4095, stdlib.checkedBigNumberify('./src/vault.rsh:291:69:decimal', stdlib.UInt_max, 0));
          const v4097 = true;
          const v4098 = await txn1.getOutput('api', 'v4097', ctc3, v4097);
          
          if (v4096) {
            stdlib.assert(v4096, {
              at: './src/vault.rsh:294:18:application',
              fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
              msg: null,
              who: 'VaultOwner_returnVaultDebt'
              });
            const v4109 = stdlib.sub(v2021, v2021);
            sim_r.txns.push({
              amt: v2021,
              kind: 'from',
              to: v1922,
              tok: undefined
              });
            const v63359 = v2012;
            const v63360 = stdlib.checkedBigNumberify('./src/vault.rsh:296:19:decimal', stdlib.UInt_max, 0);
            const v63362 = v4109;
            const v63363 = stdlib.gt(stdlib.checkedBigNumberify('./src/vault.rsh:296:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
            const v63364 = stdlib.gt(v4109, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
            const v63365 = v63363 ? true : v63364;
            if (v63365) {
              const v63366 = stdlib.mul(v4109, v2012);
              const v63367 = stdlib.div(v63366, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v63368;
              const v63369 = stdlib.eq(v63367, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v63369) {
                v63368 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63370 = stdlib.mul(v63367, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v63371 = stdlib.div(v63370, v63367);
                const v63372 = stdlib.eq(v63371, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v63372) {
                  v63368 = v63370;
                  }
                else {
                  v63368 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v63373;
              const v63374 = stdlib.eq(v63368, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63375 = stdlib.eq(stdlib.checkedBigNumberify('./src/vault.rsh:296:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v63376 = v63374 ? true : v63375;
              if (v63376) {
                v63373 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63377 = stdlib.div(v63368, stdlib.checkedBigNumberify('./src/vault.rsh:296:19:decimal', stdlib.UInt_max, 0));
                v63373 = v63377;
                }
              const v63378 = stdlib.mul(v63367, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v63379 = stdlib.div(v63378, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v63380;
              const v63381 = stdlib.eq(v63379, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63382 = v63381 ? true : v63375;
              if (v63382) {
                v63380 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63383 = stdlib.div(v63379, stdlib.checkedBigNumberify('./src/vault.rsh:296:19:decimal', stdlib.UInt_max, 0));
                v63380 = v63383;
                }
              const v63384 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1887
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }}
          else {
            const v63403 = v2012;
            const v63404 = v4095;
            const v63406 = v2021;
            const v63407 = stdlib.gt(v4095, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
            const v63408 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
            const v63409 = v63407 ? true : v63408;
            if (v63409) {
              const v63410 = stdlib.mul(v2021, v2012);
              const v63411 = stdlib.div(v63410, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v63412;
              const v63413 = stdlib.eq(v63411, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v63413) {
                v63412 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63414 = stdlib.mul(v63411, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v63415 = stdlib.div(v63414, v63411);
                const v63416 = stdlib.eq(v63415, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v63416) {
                  v63412 = v63414;
                  }
                else {
                  v63412 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v63417;
              const v63418 = stdlib.eq(v63412, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63420 = v63418 ? true : v4096;
              if (v63420) {
                v63417 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63421 = stdlib.div(v63412, v4095);
                v63417 = v63421;
                }
              const v63422 = stdlib.mul(v63411, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v63423 = stdlib.div(v63422, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v63424;
              const v63425 = stdlib.eq(v63423, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63426 = v63425 ? true : v4096;
              if (v63426) {
                v63424 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63427 = stdlib.div(v63423, v4095);
                v63424 = v63427;
                }
              const v63428 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1887
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4198 = v2301[1];
          
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4512 = v2301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
  switch (v2301[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2304 = v2301[1];
      return;
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2634 = v2301[1];
      return;
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2945 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3256 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3570 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3884 = v2301[1];
      const v3885 = v3884[stdlib.checkedBigNumberify('./src/vault.rsh:268:9:spread', stdlib.UInt_max, 0)];
      ;
      ;
      undefined;
      const v4085 = stdlib.addressEq(v2300, v1922);
      stdlib.assert(v4085, {
        at: './src/vault.rsh:285:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
        msg: 'You are not the owner of this vault',
        who: 'VaultOwner_returnVaultDebt'
        });
      const v4086 = stdlib.le(v3885, v2014);
      const v4087 = stdlib.gt(v3885, stdlib.checkedBigNumberify('./src/vault.rsh:287:28:decimal', stdlib.UInt_max, 0));
      const v4088 = v4086 ? v4087 : false;
      const v4089 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:288:23:decimal', stdlib.UInt_max, 0));
      const v4090 = v4088 ? v4089 : false;
      stdlib.assert(v4090, {
        at: './src/vault.rsh:286:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
        msg: null,
        who: 'VaultOwner_returnVaultDebt'
        });
      ;
      const v4095 = stdlib.sub(v2014, v3885);
      const v4096 = stdlib.eq(v4095, stdlib.checkedBigNumberify('./src/vault.rsh:291:69:decimal', stdlib.UInt_max, 0));
      const v4097 = true;
      const v4098 = await txn1.getOutput('api', 'v4097', ctc3, v4097);
      if (v1498) {
        stdlib.protect(ctc7, await interact.out(v3884, v4098), {
          at: './src/vault.rsh:268:9:application',
          fs: ['at ./src/vault.rsh:268:9:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)', 'at ./src/vault.rsh:292:18:application call to "apiReturn" (defined at: ./src/vault.rsh:268:9:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
          msg: 'out',
          who: 'VaultOwner_returnVaultDebt'
          });
        }
      else {
        }
      
      if (v4096) {
        stdlib.assert(v4096, {
          at: './src/vault.rsh:294:18:application',
          fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)'],
          msg: null,
          who: 'VaultOwner_returnVaultDebt'
          });
        const v4109 = stdlib.sub(v2021, v2021);
        ;
        const v63359 = v2012;
        const v63360 = stdlib.checkedBigNumberify('./src/vault.rsh:296:19:decimal', stdlib.UInt_max, 0);
        const v63362 = v4109;
        const v63363 = stdlib.gt(stdlib.checkedBigNumberify('./src/vault.rsh:296:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
        const v63364 = stdlib.gt(v4109, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
        const v63365 = v63363 ? true : v63364;
        if (v63365) {
          const v63366 = stdlib.mul(v4109, v2012);
          const v63367 = stdlib.div(v63366, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          let v63368;
          const v63369 = stdlib.eq(v63367, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v63369) {
            v63368 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63370 = stdlib.mul(v63367, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v63371 = stdlib.div(v63370, v63367);
            const v63372 = stdlib.eq(v63371, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v63372) {
              v63368 = v63370;
              }
            else {
              v63368 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v63373;
          const v63374 = stdlib.eq(v63368, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63375 = stdlib.eq(stdlib.checkedBigNumberify('./src/vault.rsh:296:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v63376 = v63374 ? true : v63375;
          if (v63376) {
            v63373 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63377 = stdlib.div(v63368, stdlib.checkedBigNumberify('./src/vault.rsh:296:19:decimal', stdlib.UInt_max, 0));
            v63373 = v63377;
            }
          const v63378 = stdlib.mul(v63367, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v63379 = stdlib.div(v63378, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v63380;
          const v63381 = stdlib.eq(v63379, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63382 = v63381 ? true : v63375;
          if (v63382) {
            v63380 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63383 = stdlib.div(v63379, stdlib.checkedBigNumberify('./src/vault.rsh:296:19:decimal', stdlib.UInt_max, 0));
            v63380 = v63383;
            }
          const v63384 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
          return;
          }
        else {
          return;
          }}
      else {
        const v63403 = v2012;
        const v63404 = v4095;
        const v63406 = v2021;
        const v63407 = stdlib.gt(v4095, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
        const v63408 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
        const v63409 = v63407 ? true : v63408;
        if (v63409) {
          const v63410 = stdlib.mul(v2021, v2012);
          const v63411 = stdlib.div(v63410, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          let v63412;
          const v63413 = stdlib.eq(v63411, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v63413) {
            v63412 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63414 = stdlib.mul(v63411, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v63415 = stdlib.div(v63414, v63411);
            const v63416 = stdlib.eq(v63415, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v63416) {
              v63412 = v63414;
              }
            else {
              v63412 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v63417;
          const v63418 = stdlib.eq(v63412, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63420 = v63418 ? true : v4096;
          if (v63420) {
            v63417 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63421 = stdlib.div(v63412, v4095);
            v63417 = v63421;
            }
          const v63422 = stdlib.mul(v63411, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v63423 = stdlib.div(v63422, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v63424;
          const v63425 = stdlib.eq(v63423, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63426 = v63425 ? true : v4096;
          if (v63426) {
            v63424 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63427 = stdlib.div(v63423, v4095);
            v63424 = v63427;
            }
          const v63428 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
          return;
          }
        else {
          return;
          }}
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4198 = v2301[1];
      return;
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4512 = v2301[1];
      return;
      break;
      }
    }
  
  
  };
export async function VaultOwner_withdrawCollateral(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for VaultOwner_withdrawCollateral expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for VaultOwner_withdrawCollateral expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Data({
    Liquidator_liquidateVault0: ctc4,
    Oracle_updatePrice0: ctc4,
    RecoveryToggler_toggleRecoveryMode0: ctc5,
    VaultOwner_depositCollateral0: ctc4,
    VaultOwner_mintToken0: ctc4,
    VaultOwner_returnVaultDebt0: ctc4,
    VaultOwner_withdrawCollateral0: ctc4,
    VaultRedeemer_redeemVault0: ctc4
    });
  const ctc7 = stdlib.T_Null;
  
  
  const [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2123 = ctc.selfAddress();
  const v2125 = stdlib.protect(ctc4, await interact.in(), {
    at: './src/vault.rsh:1:23:application',
    fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_withdrawCollateral0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'in',
    who: 'VaultOwner_withdrawCollateral'
    });
  const v2126 = v2125[stdlib.checkedBigNumberify('./src/vault.rsh:302:9:spread', stdlib.UInt_max, 0)];
  const v2129 = stdlib.sub(v2021, v2126);
  const v2130 = stdlib.mul(v2129, v2012);
  const v2131 = stdlib.addressEq(v2123, v1922);
  stdlib.assert(v2131, {
    at: './src/vault.rsh:307:15:application',
    fs: ['at ./src/vault.rsh:302:9:application call to [unknown function] (defined at: ./src/vault.rsh:304:30:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_withdrawCollateral0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'You are not the owner of this vault',
    who: 'VaultOwner_withdrawCollateral'
    });
  const v2133 = stdlib.gt(v2021, stdlib.checkedBigNumberify('./src/vault.rsh:308:28:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2133, {
    at: './src/vault.rsh:308:15:application',
    fs: ['at ./src/vault.rsh:302:9:application call to [unknown function] (defined at: ./src/vault.rsh:304:30:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_withdrawCollateral0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: null,
    who: 'VaultOwner_withdrawCollateral'
    });
  const v2134 = stdlib.gt(v2126, stdlib.checkedBigNumberify('./src/vault.rsh:309:39:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2134, {
    at: './src/vault.rsh:309:15:application',
    fs: ['at ./src/vault.rsh:302:9:application call to [unknown function] (defined at: ./src/vault.rsh:304:30:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_withdrawCollateral0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'Cannot withdraw 0 tokens',
    who: 'VaultOwner_withdrawCollateral'
    });
  const v2136 = stdlib.lt(v2126, v2021);
  stdlib.assert(v2136, {
    at: './src/vault.rsh:310:15:application',
    fs: ['at ./src/vault.rsh:302:9:application call to [unknown function] (defined at: ./src/vault.rsh:304:30:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_withdrawCollateral0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: null,
    who: 'VaultOwner_withdrawCollateral'
    });
  const v2137 = stdlib.gt(v2085, stdlib.checkedBigNumberify('./src/utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
  stdlib.assert(v2137, {
    at: './src/vault.rsh:311:15:application',
    fs: ['at ./src/vault.rsh:302:9:application call to [unknown function] (defined at: ./src/vault.rsh:304:30:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_withdrawCollateral0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'Vault collateral ratio is not healthy',
    who: 'VaultOwner_withdrawCollateral'
    });
  const v2138 = stdlib.gt(v2130, stdlib.checkedBigNumberify('./src/vault.rsh:316:44:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2138, {
    at: './src/vault.rsh:315:15:application',
    fs: ['at ./src/vault.rsh:302:9:application call to [unknown function] (defined at: ./src/vault.rsh:304:30:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultOwner_withdrawCollateral0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'Collateral value after withdrawal must not be 0',
    who: 'VaultOwner_withdrawCollateral'
    });
  
  const v2275 = ['VaultOwner_withdrawCollateral0', v2125];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100, v2275],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/vault.rsh:321:17:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./src/vault.rsh:321:21:decimal', stdlib.UInt_max, 0), v1887]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
      
      switch (v2301[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2304 = v2301[1];
          
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2634 = v2301[1];
          
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2945 = v2301[1];
          
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3256 = v2301[1];
          
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3570 = v2301[1];
          
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3884 = v2301[1];
          
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4198 = v2301[1];
          const v4199 = v4198[stdlib.checkedBigNumberify('./src/vault.rsh:302:9:spread', stdlib.UInt_max, 0)];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/vault.rsh:321:17:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/vault.rsh:321:21:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v1887
            });
          undefined;
          const v4437 = stdlib.addressEq(v2300, v1922);
          stdlib.assert(v4437, {
            at: './src/vault.rsh:325:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'VaultOwner_withdrawCollateral'
            });
          const v4438 = stdlib.gt(v4199, stdlib.checkedBigNumberify('./src/vault.rsh:326:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4438, {
            at: './src/vault.rsh:326:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: null,
            who: 'VaultOwner_withdrawCollateral'
            });
          const v4440 = stdlib.lt(v4199, v2021);
          stdlib.assert(v4440, {
            at: './src/vault.rsh:327:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'Cannot withdraw more than the balance of this contract',
            who: 'VaultOwner_withdrawCollateral'
            });
          stdlib.assert(v2137, {
            at: './src/vault.rsh:329:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'Vault collateral ratio is not healthy',
            who: 'VaultOwner_withdrawCollateral'
            });
          const v4443 = stdlib.sub(v2021, v4199);
          const v4444 = stdlib.mul(v4443, v2012);
          const v4445 = stdlib.gt(v4444, stdlib.checkedBigNumberify('./src/vault.rsh:334:11:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4445, {
            at: './src/vault.rsh:333:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
            msg: 'Collateral value after withdrawal must not be 0',
            who: 'VaultOwner_withdrawCollateral'
            });
          let v4446;
          const v4447 = stdlib.eq(v4444, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v4447) {
            v4446 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4448 = stdlib.mul(v4444, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v4449 = stdlib.div(v4448, v4444);
            const v4450 = stdlib.eq(v4449, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v4450) {
              v4446 = v4448;
              }
            else {
              v4446 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v4452;
          const v4453 = stdlib.eq(v4446, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v4455 = v4453 ? true : v2087;
          if (v4455) {
            v4452 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4456 = stdlib.div(v4446, v2014);
            v4452 = v4456;
            }
          const v4459 = v4438 ? v2137 : false;
          const v4460 = stdlib.gt(v4452, stdlib.checkedBigNumberify('./src/utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v4461 = v4459 ? v4460 : false;
          const v4464 = v4461 ? v4440 : false;
          const v4465 = await txn1.getOutput('api', 'v4464', ctc3, v4464);
          
          if (v4464) {
            sim_r.txns.push({
              amt: v4199,
              kind: 'from',
              to: v1922,
              tok: undefined
              });
            const v63447 = v2012;
            const v63448 = v2014;
            const v63450 = v4443;
            const v63451 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
            const v63452 = stdlib.gt(v4443, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
            const v63453 = v63451 ? true : v63452;
            if (v63453) {
              const v63455 = stdlib.div(v4444, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v63456;
              const v63457 = stdlib.eq(v63455, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v63457) {
                v63456 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63458 = stdlib.mul(v63455, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v63459 = stdlib.div(v63458, v63455);
                const v63460 = stdlib.eq(v63459, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v63460) {
                  v63456 = v63458;
                  }
                else {
                  v63456 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v63461;
              const v63462 = stdlib.eq(v63456, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63463 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v63464 = v63462 ? true : v63463;
              if (v63464) {
                v63461 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63465 = stdlib.div(v63456, v2014);
                v63461 = v63465;
                }
              const v63466 = stdlib.mul(v63455, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v63467 = stdlib.div(v63466, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v63468;
              const v63469 = stdlib.eq(v63467, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63470 = v63469 ? true : v63463;
              if (v63470) {
                v63468 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63471 = stdlib.div(v63467, v2014);
                v63468 = v63471;
                }
              const v63472 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1887
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }}
          else {
            const v63491 = v2012;
            const v63492 = v2014;
            const v63494 = v2021;
            const v63495 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
            const v63497 = v63495 ? true : v2133;
            if (v63497) {
              const v63498 = stdlib.mul(v2021, v2012);
              const v63499 = stdlib.div(v63498, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v63500;
              const v63501 = stdlib.eq(v63499, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v63501) {
                v63500 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63502 = stdlib.mul(v63499, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v63503 = stdlib.div(v63502, v63499);
                const v63504 = stdlib.eq(v63503, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v63504) {
                  v63500 = v63502;
                  }
                else {
                  v63500 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v63505;
              const v63506 = stdlib.eq(v63500, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63507 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v63508 = v63506 ? true : v63507;
              if (v63508) {
                v63505 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63509 = stdlib.div(v63500, v2014);
                v63505 = v63509;
                }
              const v63510 = stdlib.mul(v63499, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v63511 = stdlib.div(v63510, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v63512;
              const v63513 = stdlib.eq(v63511, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63514 = v63513 ? true : v63507;
              if (v63514) {
                v63512 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63515 = stdlib.div(v63511, v2014);
                v63512 = v63515;
                }
              const v63516 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1887
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4512 = v2301[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
  switch (v2301[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2304 = v2301[1];
      return;
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2634 = v2301[1];
      return;
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2945 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3256 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3570 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3884 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4198 = v2301[1];
      const v4199 = v4198[stdlib.checkedBigNumberify('./src/vault.rsh:302:9:spread', stdlib.UInt_max, 0)];
      ;
      ;
      undefined;
      const v4437 = stdlib.addressEq(v2300, v1922);
      stdlib.assert(v4437, {
        at: './src/vault.rsh:325:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
        msg: 'You are not the owner of this vault',
        who: 'VaultOwner_withdrawCollateral'
        });
      const v4438 = stdlib.gt(v4199, stdlib.checkedBigNumberify('./src/vault.rsh:326:40:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4438, {
        at: './src/vault.rsh:326:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
        msg: null,
        who: 'VaultOwner_withdrawCollateral'
        });
      const v4440 = stdlib.lt(v4199, v2021);
      stdlib.assert(v4440, {
        at: './src/vault.rsh:327:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
        msg: 'Cannot withdraw more than the balance of this contract',
        who: 'VaultOwner_withdrawCollateral'
        });
      stdlib.assert(v2137, {
        at: './src/vault.rsh:329:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
        msg: 'Vault collateral ratio is not healthy',
        who: 'VaultOwner_withdrawCollateral'
        });
      const v4443 = stdlib.sub(v2021, v4199);
      const v4444 = stdlib.mul(v4443, v2012);
      const v4445 = stdlib.gt(v4444, stdlib.checkedBigNumberify('./src/vault.rsh:334:11:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4445, {
        at: './src/vault.rsh:333:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
        msg: 'Collateral value after withdrawal must not be 0',
        who: 'VaultOwner_withdrawCollateral'
        });
      let v4446;
      const v4447 = stdlib.eq(v4444, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
      if (v4447) {
        v4446 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v4448 = stdlib.mul(v4444, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        const v4449 = stdlib.div(v4448, v4444);
        const v4450 = stdlib.eq(v4449, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        if (v4450) {
          v4446 = v4448;
          }
        else {
          v4446 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
          }
        }
      let v4452;
      const v4453 = stdlib.eq(v4446, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      const v4455 = v4453 ? true : v2087;
      if (v4455) {
        v4452 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v4456 = stdlib.div(v4446, v2014);
        v4452 = v4456;
        }
      const v4459 = v4438 ? v2137 : false;
      const v4460 = stdlib.gt(v4452, stdlib.checkedBigNumberify('./src/utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
      const v4461 = v4459 ? v4460 : false;
      const v4464 = v4461 ? v4440 : false;
      const v4465 = await txn1.getOutput('api', 'v4464', ctc3, v4464);
      if (v1498) {
        stdlib.protect(ctc7, await interact.out(v4198, v4465), {
          at: './src/vault.rsh:302:9:application',
          fs: ['at ./src/vault.rsh:302:9:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)', 'at ./src/vault.rsh:345:18:application call to "apiReturn" (defined at: ./src/vault.rsh:302:9:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)'],
          msg: 'out',
          who: 'VaultOwner_withdrawCollateral'
          });
        }
      else {
        }
      
      if (v4464) {
        ;
        const v63447 = v2012;
        const v63448 = v2014;
        const v63450 = v4443;
        const v63451 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
        const v63452 = stdlib.gt(v4443, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
        const v63453 = v63451 ? true : v63452;
        if (v63453) {
          const v63455 = stdlib.div(v4444, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          let v63456;
          const v63457 = stdlib.eq(v63455, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v63457) {
            v63456 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63458 = stdlib.mul(v63455, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v63459 = stdlib.div(v63458, v63455);
            const v63460 = stdlib.eq(v63459, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v63460) {
              v63456 = v63458;
              }
            else {
              v63456 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v63461;
          const v63462 = stdlib.eq(v63456, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63463 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v63464 = v63462 ? true : v63463;
          if (v63464) {
            v63461 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63465 = stdlib.div(v63456, v2014);
            v63461 = v63465;
            }
          const v63466 = stdlib.mul(v63455, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v63467 = stdlib.div(v63466, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v63468;
          const v63469 = stdlib.eq(v63467, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63470 = v63469 ? true : v63463;
          if (v63470) {
            v63468 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63471 = stdlib.div(v63467, v2014);
            v63468 = v63471;
            }
          const v63472 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
          return;
          }
        else {
          return;
          }}
      else {
        const v63491 = v2012;
        const v63492 = v2014;
        const v63494 = v2021;
        const v63495 = stdlib.gt(v2014, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
        const v63497 = v63495 ? true : v2133;
        if (v63497) {
          const v63498 = stdlib.mul(v2021, v2012);
          const v63499 = stdlib.div(v63498, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          let v63500;
          const v63501 = stdlib.eq(v63499, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v63501) {
            v63500 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63502 = stdlib.mul(v63499, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v63503 = stdlib.div(v63502, v63499);
            const v63504 = stdlib.eq(v63503, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v63504) {
              v63500 = v63502;
              }
            else {
              v63500 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v63505;
          const v63506 = stdlib.eq(v63500, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63507 = stdlib.eq(v2014, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v63508 = v63506 ? true : v63507;
          if (v63508) {
            v63505 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63509 = stdlib.div(v63500, v2014);
            v63505 = v63509;
            }
          const v63510 = stdlib.mul(v63499, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v63511 = stdlib.div(v63510, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v63512;
          const v63513 = stdlib.eq(v63511, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63514 = v63513 ? true : v63507;
          if (v63514) {
            v63512 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63515 = stdlib.div(v63511, v2014);
            v63512 = v63515;
            }
          const v63516 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
          return;
          }
        else {
          return;
          }}
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4512 = v2301[1];
      return;
      break;
      }
    }
  
  
  };
export async function VaultRedeemer_redeemVault(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for VaultRedeemer_redeemVault expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for VaultRedeemer_redeemVault expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Data({
    Liquidator_liquidateVault0: ctc4,
    Oracle_updatePrice0: ctc4,
    RecoveryToggler_toggleRecoveryMode0: ctc5,
    VaultOwner_depositCollateral0: ctc4,
    VaultOwner_mintToken0: ctc4,
    VaultOwner_returnVaultDebt0: ctc4,
    VaultOwner_withdrawCollateral0: ctc4,
    VaultRedeemer_redeemVault0: ctc4
    });
  const ctc7 = stdlib.T_Null;
  
  
  const [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2171 = stdlib.protect(ctc4, await interact.in(), {
    at: './src/vault.rsh:1:23:application',
    fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultRedeemer_redeemVault0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: 'in',
    who: 'VaultRedeemer_redeemVault'
    });
  const v2172 = v2171[stdlib.checkedBigNumberify('./src/vault.rsh:429:9:spread', stdlib.UInt_max, 0)];
  const v2174 = stdlib.div(v2172, v2012);
  const v2175 = stdlib.mul(v2174, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
  const v2176 = stdlib.gt(v2172, stdlib.checkedBigNumberify('./src/vault.rsh:434:39:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2176, {
    at: './src/vault.rsh:434:15:application',
    fs: ['at ./src/vault.rsh:429:9:application call to [unknown function] (defined at: ./src/vault.rsh:431:30:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultRedeemer_redeemVault0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: null,
    who: 'VaultRedeemer_redeemVault'
    });
  const v2177 = stdlib.gt(v2012, stdlib.checkedBigNumberify('./src/vault.rsh:435:34:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2177, {
    at: './src/vault.rsh:435:15:application',
    fs: ['at ./src/vault.rsh:429:9:application call to [unknown function] (defined at: ./src/vault.rsh:431:30:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultRedeemer_redeemVault0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: null,
    who: 'VaultRedeemer_redeemVault'
    });
  const v2178 = stdlib.sub(v2014, v2172);
  const v2179 = stdlib.ge(v2178, stdlib.checkedBigNumberify('./src/vault.rsh:436:52:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2179, {
    at: './src/vault.rsh:436:15:application',
    fs: ['at ./src/vault.rsh:429:9:application call to [unknown function] (defined at: ./src/vault.rsh:431:30:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultRedeemer_redeemVault0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: null,
    who: 'VaultRedeemer_redeemVault'
    });
  stdlib.assert(v2179, {
    at: './src/vault.rsh:437:15:application',
    fs: ['at ./src/vault.rsh:429:9:application call to [unknown function] (defined at: ./src/vault.rsh:431:30:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultRedeemer_redeemVault0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: null,
    who: 'VaultRedeemer_redeemVault'
    });
  const v2183 = stdlib.ge(v2021, v2175);
  stdlib.assert(v2183, {
    at: './src/vault.rsh:438:15:application',
    fs: ['at ./src/vault.rsh:429:9:application call to [unknown function] (defined at: ./src/vault.rsh:431:30:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)', 'at ./src/vault.rsh:190:68:application call to "runVaultRedeemer_redeemVault0" (defined at: ./src/vault.rsh:190:68:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:190:68:function exp)'],
    msg: null,
    who: 'VaultRedeemer_redeemVault'
    });
  
  const v2286 = ['VaultRedeemer_redeemVault0', v2171];
  const v2288 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:92:8:decimal', stdlib.UInt_max, 2), v2172);
  const v2289 = stdlib.div(v2288, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
  const v2290 = stdlib.add(v2172, v2289);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1885, v1887, v1922, v1949, v2012, v2014, v2021, v2078, v2080, v2085, v2087, v2091, v2092, v2100, v2286],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/vault.rsh:442:17:decimal', stdlib.UInt_max, 0), [[v2290, v1887]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
      
      switch (v2301[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2304 = v2301[1];
          
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2634 = v2301[1];
          
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2945 = v2301[1];
          
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3256 = v2301[1];
          
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3570 = v2301[1];
          
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3884 = v2301[1];
          
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4198 = v2301[1];
          
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4512 = v2301[1];
          const v4513 = v4512[stdlib.checkedBigNumberify('./src/vault.rsh:429:9:spread', stdlib.UInt_max, 0)];
          const v4514 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:92:8:decimal', stdlib.UInt_max, 2), v4513);
          const v4515 = stdlib.div(v4514, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          const v4516 = stdlib.add(v4513, v4515);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/vault.rsh:442:17:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: v4516,
            kind: 'to',
            tok: v1887
            });
          undefined;
          const v4797 = stdlib.div(v4513, v2012);
          const v4798 = stdlib.mul(v4797, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          const v4801 = stdlib.gt(v4513, stdlib.checkedBigNumberify('./src/vault.rsh:448:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4801, {
            at: './src/vault.rsh:448:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'VaultRedeemer_redeemVault'
            });
          stdlib.assert(v2177, {
            at: './src/vault.rsh:449:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'VaultRedeemer_redeemVault'
            });
          const v4803 = stdlib.sub(v2014, v4513);
          const v4804 = stdlib.ge(v4803, stdlib.checkedBigNumberify('./src/vault.rsh:450:53:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4804, {
            at: './src/vault.rsh:450:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'VaultRedeemer_redeemVault'
            });
          stdlib.assert(v4804, {
            at: './src/vault.rsh:451:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'VaultRedeemer_redeemVault'
            });
          const v4808 = stdlib.ge(v2021, v4798);
          stdlib.assert(v4808, {
            at: './src/vault.rsh:452:16:application',
            fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
            msg: null,
            who: 'VaultRedeemer_redeemVault'
            });
          sim_r.txns.push({
            amt: v4513,
            kind: 'from',
            to: v1885,
            tok: v1887
            });
          const v4816 = stdlib.sub(v2021, v4798);
          sim_r.txns.push({
            amt: v4798,
            kind: 'from',
            to: v2300,
            tok: undefined
            });
          sim_r.txns.push({
            amt: v4515,
            kind: 'from',
            to: v1949,
            tok: v1887
            });
          const v4821 = true;
          const v4822 = await txn1.getOutput('api', 'v4821', ctc3, v4821);
          
          const v63535 = v2012;
          const v63536 = v4803;
          const v63538 = v4816;
          const v63539 = stdlib.gt(v4803, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
          const v63540 = stdlib.gt(v4816, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
          const v63541 = v63539 ? true : v63540;
          if (v63541) {
            const v63542 = stdlib.mul(v4816, v2012);
            const v63543 = stdlib.div(v63542, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
            let v63544;
            const v63545 = stdlib.eq(v63543, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
            if (v63545) {
              v63544 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63546 = stdlib.mul(v63543, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              const v63547 = stdlib.div(v63546, v63543);
              const v63548 = stdlib.eq(v63547, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              if (v63548) {
                v63544 = v63546;
                }
              else {
                v63544 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                }
              }
            let v63549;
            const v63550 = stdlib.eq(v63544, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63551 = stdlib.eq(v4803, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
            const v63552 = v63550 ? true : v63551;
            if (v63552) {
              v63549 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63553 = stdlib.div(v63544, v4803);
              v63549 = v63553;
              }
            const v63554 = stdlib.mul(v63543, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
            const v63555 = stdlib.div(v63554, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
            let v63556;
            const v63557 = stdlib.eq(v63555, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63558 = v63557 ? true : v63551;
            if (v63558) {
              v63556 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63559 = stdlib.div(v63555, v4803);
              v63556 = v63559;
              }
            const v63560 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1887
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v2301], secs: v2303, time: v2302, didSend: v1498, from: v2300 } = txn1;
  switch (v2301[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2304 = v2301[1];
      return;
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2634 = v2301[1];
      return;
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2945 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3256 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3570 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3884 = v2301[1];
      return;
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4198 = v2301[1];
      return;
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4512 = v2301[1];
      const v4513 = v4512[stdlib.checkedBigNumberify('./src/vault.rsh:429:9:spread', stdlib.UInt_max, 0)];
      const v4514 = stdlib.mul(stdlib.checkedBigNumberify('./src/utils.rsh:92:8:decimal', stdlib.UInt_max, 2), v4513);
      const v4515 = stdlib.div(v4514, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
      const v4516 = stdlib.add(v4513, v4515);
      ;
      ;
      undefined;
      const v4797 = stdlib.div(v4513, v2012);
      const v4798 = stdlib.mul(v4797, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
      const v4801 = stdlib.gt(v4513, stdlib.checkedBigNumberify('./src/vault.rsh:448:40:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4801, {
        at: './src/vault.rsh:448:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
        msg: null,
        who: 'VaultRedeemer_redeemVault'
        });
      stdlib.assert(v2177, {
        at: './src/vault.rsh:449:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
        msg: null,
        who: 'VaultRedeemer_redeemVault'
        });
      const v4803 = stdlib.sub(v2014, v4513);
      const v4804 = stdlib.ge(v4803, stdlib.checkedBigNumberify('./src/vault.rsh:450:53:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4804, {
        at: './src/vault.rsh:450:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
        msg: null,
        who: 'VaultRedeemer_redeemVault'
        });
      stdlib.assert(v4804, {
        at: './src/vault.rsh:451:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
        msg: null,
        who: 'VaultRedeemer_redeemVault'
        });
      const v4808 = stdlib.ge(v2021, v4798);
      stdlib.assert(v4808, {
        at: './src/vault.rsh:452:16:application',
        fs: ['at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
        msg: null,
        who: 'VaultRedeemer_redeemVault'
        });
      ;
      const v4816 = stdlib.sub(v2021, v4798);
      ;
      ;
      const v4821 = true;
      const v4822 = await txn1.getOutput('api', 'v4821', ctc3, v4821);
      if (v1498) {
        stdlib.protect(ctc7, await interact.out(v4512, v4822), {
          at: './src/vault.rsh:429:9:application',
          fs: ['at ./src/vault.rsh:429:9:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)', 'at ./src/vault.rsh:456:18:application call to "apiReturn" (defined at: ./src/vault.rsh:429:9:function exp)', 'at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)'],
          msg: 'out',
          who: 'VaultRedeemer_redeemVault'
          });
        }
      else {
        }
      
      const v63535 = v2012;
      const v63536 = v4803;
      const v63538 = v4816;
      const v63539 = stdlib.gt(v4803, stdlib.checkedBigNumberify('./src/vault.rsh:216:24:decimal', stdlib.UInt_max, 0));
      const v63540 = stdlib.gt(v4816, stdlib.checkedBigNumberify('./src/vault.rsh:216:41:decimal', stdlib.UInt_max, 0));
      const v63541 = v63539 ? true : v63540;
      if (v63541) {
        const v63542 = stdlib.mul(v4816, v2012);
        const v63543 = stdlib.div(v63542, stdlib.checkedBigNumberify('./src/utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
        let v63544;
        const v63545 = stdlib.eq(v63543, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
        if (v63545) {
          v63544 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63546 = stdlib.mul(v63543, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          const v63547 = stdlib.div(v63546, v63543);
          const v63548 = stdlib.eq(v63547, stdlib.checkedBigNumberify('./src/utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          if (v63548) {
            v63544 = v63546;
            }
          else {
            v63544 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          }
        let v63549;
        const v63550 = stdlib.eq(v63544, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63551 = stdlib.eq(v4803, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
        const v63552 = v63550 ? true : v63551;
        if (v63552) {
          v63549 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63553 = stdlib.div(v63544, v4803);
          v63549 = v63553;
          }
        const v63554 = stdlib.mul(v63543, stdlib.checkedBigNumberify('./src/utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
        const v63555 = stdlib.div(v63554, stdlib.checkedBigNumberify('./src/utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
        let v63556;
        const v63557 = stdlib.eq(v63555, stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63558 = v63557 ? true : v63551;
        if (v63558) {
          v63556 = stdlib.checkedBigNumberify('./src/.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63559 = stdlib.div(v63555, v4803);
          v63556 = v63559;
          }
        const v63560 = stdlib.add(v2302, stdlib.checkedBigNumberify('./src/vault.rsh:469:27:decimal', stdlib.UInt_max, 10));
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
int 8
extract_uint64
store 2
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./src/vault.rsh:98:10:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./src/vault.rsh:98:10:dot"
// "[]"
txn Sender
int 1
bzero
dig 1
extract 0 32
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l2_afterHandler1
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
store 255
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
int 0
extract_uint64
store 254
dup
int 8
extract_uint64
store 253
pop
// Initializing token
int 100000
dup
bz l3_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l3_checkTxnK:
pop
int 0
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
global CurrentApplicationAddress
itxn_field AssetReceiver
load 253
itxn_field XferAsset
itxn_submit
int 0
l4_makeTxnK:
pop
// "CheckPay"
// "./src/vault.rsh:114:11:dot"
// "[]"
// Nothing
// "./src/vault.rsh:115:10:application"
// "[]"
load 254
int 0
>
assert
load 255
txn Sender
concat
load 254
itob
concat
load 253
itob
concat
int 1
bzero
dig 1
extract 0 80
app_global_put
pop
int 2
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l2_afterHandler1:
// Handler 2
dup
int 2
==
bz l5_afterHandler2
pop
// check step
int 2
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
pop
txna ApplicationArgs 2
dup
len
int 72
==
assert
dup
int 0
extract_uint64
store 251
dup
int 8
extract_uint64
store 250
dup
int 16
extract_uint64
store 249
dup
int 24
extract_uint64
store 248
dup
int 32
extract_uint64
store 247
dup
extract 40 32
store 246
pop
// "CheckPay"
// "./src/vault.rsh:137:10:dot"
// "[]"
// Just "sender correct"
// "./src/vault.rsh:137:10:dot"
// "[]"
load 255
txn Sender
==
assert
// Just "initial debt <= initialMaximumMint"
// "./src/vault.rsh:145:10:application"
// "[]"
load 250
load 248
<=
assert
// Nothing
// "./src/vault.rsh:147:10:application"
// "[]"
load 251
int 0
>
assert
// Nothing
// "./src/vault.rsh:148:10:application"
// "[]"
load 250
int 0
>
assert
// Nothing
// "./src/vault.rsh:149:10:application"
// "[]"
load 249
load 251
load 253
*
int 1000000
/
==
assert
load 249
int 80
*
int 100
/
dup
store 245
int 0
<
bz l6_localIfF
int 0
store 244
b l7_localIfK
l6_localIfF:
load 245
store 244
l7_localIfK:
// Nothing
// "./src/vault.rsh:151:10:application"
// "[]"
load 248
load 244
==
assert
int 5
load 250
*
dup
store 242
int 5
/
load 250
==
bz l8_localIfF
load 242
store 243
b l9_localIfK
l8_localIfF:
int 0
store 243
l9_localIfK:
load 243
int 0
==
bz l10_localIfF
int 0
store 241
b l11_localIfK
l10_localIfF:
load 243
int 1000
/
store 241
l11_localIfK:
// Nothing
// "./src/vault.rsh:152:10:application"
// "[]"
load 247
load 241
==
assert
// Nothing
// "./src/vault.rsh:153:10:application"
// "[]"
load 247
int 0
>
assert
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
load 247
itob
concat
load 246
concat
load 245
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 25
app_global_put
pop
int 3
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l5_afterHandler2:
// Handler 3
dup
int 3
==
bz l12_afterHandler3
pop
// check step
int 3
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
dup
int 96
extract_uint64
store 249
dup
int 104
extract_uint64
store 248
dup
extract 112 32
store 247
dup
int 144
extract_uint64
store 246
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./src/vault.rsh:156:16:dot"
// "[]"
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
load 247
concat
load 246
itob
concat
txn Sender
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 57
app_global_put
pop
int 4
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l12_afterHandler3:
// Handler 4
dup
int 4
==
bz l13_afterHandler4
pop
// check step
int 4
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
dup
int 96
extract_uint64
store 249
dup
int 104
extract_uint64
store 248
dup
extract 112 32
store 247
dup
int 144
extract_uint64
store 246
dup
extract 152 32
store 245
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./src/vault.rsh:162:10:dot"
// "[]"
load 251
dup
bz l14_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l14_checkTxnK:
pop
// Just "sender correct"
// "./src/vault.rsh:162:10:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
load 247
concat
load 246
itob
concat
load 245
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 57
app_global_put
pop
int 5
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l13_afterHandler4:
// Handler 5
dup
int 5
==
bz l15_afterHandler5
pop
// check step
int 5
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
dup
int 96
extract_uint64
store 249
dup
int 104
extract_uint64
store 248
dup
extract 112 32
store 247
dup
int 144
extract_uint64
store 246
dup
extract 152 32
store 245
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./src/vault.rsh:166:11:dot"
// "[]"
// "CheckPay"
// "./src/vault.rsh:166:11:dot"
// "[]"
load 250
dup
bz l16_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 252
dig 1
gtxns XferAsset
==
assert
int axfer
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns AssetReceiver
==
assert
l16_checkTxnK:
pop
// Just "sender correct"
// "./src/vault.rsh:166:11:dot"
// "[]"
load 254
txn Sender
==
assert
load 250
load 248
-
dup
store 244
dup
bz l17_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l17_makeTxnK:
pop
load 248
dup
bz l18_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 245
itxn_field AssetReceiver
load 252
itxn_field XferAsset
itxn_submit
int 0
l18_makeTxnK:
pop
load 249
int 0
==
bz l19_localIfF
int 0
store 243
b l20_localIfK
l19_localIfF:
load 249
int 100
*
dup
store 242
load 249
/
int 100
==
bz l21_localIfF
load 242
store 243
b l22_localIfK
l21_localIfF:
int 0
store 243
l22_localIfK:
l20_localIfK:
load 244
int 0
==
store 241
load 243
int 0
==
load 241
||
bz l23_localIfF
int 0
store 242
b l24_localIfK
l23_localIfF:
load 243
load 244
/
store 242
l24_localIfK:
load 246
int 0
==
load 241
||
bz l25_localIfF
int 0
store 240
b l26_localIfK
l25_localIfF:
load 246
load 244
/
store 240
l26_localIfK:
load 254
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
load 249
itob
concat
load 247
concat
load 245
concat
load 244
itob
concat
load 242
itob
concat
load 240
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 25
app_global_put
pop
int 6
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l15_afterHandler5:
// Handler 6
dup
int 6
==
bz l27_afterHandler6
pop
// check step
int 6
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
dup
int 48
extract_uint64
store 252
dup
int 56
extract_uint64
store 251
dup
extract 64 32
store 250
dup
extract 96 32
store 249
dup
int 128
extract_uint64
store 248
dup
int 136
extract_uint64
store 247
dup
int 144
extract_uint64
store 246
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./src/vault.rsh:185:11:dot"
// "[]"
// Just "sender correct"
// "./src/vault.rsh:185:11:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 253
itob
concat
load 250
concat
load 249
concat
load 254
itob
load 248
itob
concat
global Round
itob
concat
load 252
itob
concat
b loopBody7
l27_afterHandler6:
l28_afterHandler7:
// Handler 8
dup
int 8
==
bz l29_afterHandler8
pop
// check step
int 9
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
extract 72 32
store 252
dup
int 104
extract_uint64
store 251
dup
int 112
extract_uint64
store 250
dup
int 120
extract_uint64
store 249
dup
int 128
extract_uint64
store 248
dup
extract 136 1
btoi
store 247
dup
int 137
extract_uint64
store 246
dup
extract 145 1
btoi
store 245
dup
int 146
extract_uint64
store 244
dup
int 154
extract_uint64
store 243
dup
int 162
extract_uint64
store 242
pop
txna ApplicationArgs 2
dup
len
int 9
==
assert
dup
store 241
pop
global Round
load 242
<
assert
load 241
int 0
getbyte
int 0
==
bz l31_switchAfterLiquidator_liquidateVault0
load 241
extract 1 8
store 240
int 25
load 250
*
dup
store 237
int 25
/
load 250
==
dup
store 236
bz l32_localIfF
load 237
store 238
b l33_localIfK
l32_localIfF:
int 0
store 238
l33_localIfK:
load 238
int 0
==
bz l34_localIfF
int 0
store 235
b l35_localIfK
l34_localIfF:
load 238
int 1000
/
store 235
l35_localIfK:
load 240
btoi
load 250
>=
store 234
load 250
int 0
>
load 243
int 1
<
&&
load 246
int 110
<
&&
load 234
&&
dup
store 233
bz l36_localIfF
int 8
bzero
load 250
load 235
+
itob
load 254
itob
concat
concat
store 239
b l37_localIfK
l36_localIfF:
int 8
bzero
int 8
bzero
load 254
itob
concat
concat
store 239
l37_localIfK:
load 239
int 0
extract_uint64
store 232
load 249
load 232
+
store 231
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
load 232
dup
bz l38_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l38_checkTxnK:
pop
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
load 239
extract 8 16
int 0
extract_uint64
dup
bz l39_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 254
dig 1
gtxns XferAsset
==
assert
int axfer
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns AssetReceiver
==
assert
l39_checkTxnK:
pop
// Nothing
// "./src/vault.rsh:392:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:372:9:function exp)]"
load 234
assert
byte base64(AAAAAAAACRI=)
load 233
itob // bool
substring 7 8
concat
log // 9
load 233
dup
bz l40_ifF
load 231
dup
bz l41_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
txn Sender
itxn_field Receiver
itxn_submit
int 0
l41_makeTxnK:
pop
load 250
dup
bz l42_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 254
itxn_field XferAsset
itxn_submit
int 0
l42_makeTxnK:
pop
load 236
bz l43_localIfF
load 237
store 230
b l44_localIfK
l43_localIfF:
int 0
store 230
l44_localIfK:
load 230
int 0
==
bz l45_localIfF
int 0
store 229
b l46_localIfK
l45_localIfF:
load 230
int 1000
/
store 229
l46_localIfK:
load 229
dup
bz l47_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 252
itxn_field AssetReceiver
load 254
itxn_field XferAsset
itxn_submit
int 0
l47_makeTxnK:
pop
load 255
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
int 8
bzero
concat
global Round
itob
concat
load 231
dup
-
itob
concat
b loopBody7
l40_ifF:
load 255
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
load 250
itob
concat
global Round
itob
concat
load 231
itob
concat
b loopBody7
l31_switchAfterLiquidator_liquidateVault0:
load 241
int 0
getbyte
int 1
==
bz l48_switchAfterOracle_updatePrice0
load 241
extract 1 8
store 240
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
load 240
btoi
store 239
load 249
load 239
*
dup
store 238
int 0
==
bz l49_localIfF
int 0
store 237
b l50_localIfK
l49_localIfF:
load 238
int 100
*
dup
store 236
load 238
/
int 100
==
bz l51_localIfF
load 236
store 237
b l52_localIfK
l51_localIfF:
int 0
store 237
l52_localIfK:
l50_localIfK:
load 237
int 0
==
load 245
||
bz l53_localIfF
int 0
store 236
b l54_localIfK
l53_localIfF:
load 237
load 250
/
store 236
l54_localIfK:
load 238
int 80
*
int 100
/
dup
store 235
int 0
==
load 245
||
bz l55_localIfF
int 0
store 234
b l56_localIfK
l55_localIfF:
load 235
load 250
/
store 234
l56_localIfK:
byte base64(AAAAAAAACqE=)
load 249
itob
load 236
itob
concat
load 238
itob
concat
load 234
itob
concat
load 250
itob
concat
concat
log // 48
load 249
itob
load 236
itob
concat
load 238
itob
concat
load 234
itob
concat
load 250
itob
concat
load 255
load 254
itob
concat
load 253
concat
load 252
concat
load 239
itob
load 250
itob
concat
global Round
itob
concat
load 249
itob
concat
b loopBody7
l48_switchAfterOracle_updatePrice0:
load 241
int 0
getbyte
int 2
==
bz l57_switchAfterRecoveryToggler_toggleRecoveryMode0
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
byte base64(AAAAAAAAC+E=)
int 1
itob // bool
substring 7 8
concat
log // 9
int 1
load 255
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
load 250
itob
concat
global Round
itob
concat
load 249
itob
concat
b loopBody7
l57_switchAfterRecoveryToggler_toggleRecoveryMode0:
load 241
int 0
getbyte
int 3
==
bz l58_switchAfterVaultOwner_depositCollateral0
load 241
extract 1 8
dup
store 240
btoi
store 239
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
load 239
dup
bz l59_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l59_checkTxnK:
pop
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
// Just "Cannot deposit 0 collateral tokens"
// "./src/vault.rsh:365:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)]"
load 239
int 0
>
assert
// Just "You are not the owner of this vault"
// "./src/vault.rsh:366:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:354:9:function exp)]"
txn Sender
load 253
==
assert
byte base64(AAAAAAAADSY=)
int 1
itob // bool
substring 7 8
concat
log // 9
int 1
load 255
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
load 250
itob
concat
global Round
itob
concat
load 249
load 239
+
itob
concat
b loopBody7
l58_switchAfterVaultOwner_depositCollateral0:
load 241
int 0
getbyte
int 4
==
bz l60_switchAfterVaultOwner_mintToken0
load 241
extract 1 8
dup
store 240
btoi
store 239
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
// Just "You are not the owner of this vault"
// "./src/vault.rsh:230:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)]"
txn Sender
load 253
==
assert
load 239
int 0
>
store 238
// Just "You must mint at least 1 token"
// "./src/vault.rsh:231:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)]"
load 238
assert
load 244
load 250
<
bz l61_localIfF
int 0
store 237
b l62_localIfK
l61_localIfF:
load 244
load 250
-
store 237
l62_localIfK:
int 5
load 239
*
dup
store 235
int 5
/
load 239
==
dup
store 234
bz l63_localIfF
load 235
store 236
b l64_localIfK
l63_localIfF:
int 0
store 236
l64_localIfK:
load 236
int 0
==
bz l65_localIfF
int 0
store 233
b l66_localIfK
l65_localIfF:
load 236
int 1000
/
store 233
l66_localIfK:
load 239
load 233
-
store 232
load 250
load 232
+
store 231
load 247
bz l67_localIfF
int 0
store 230
b l68_localIfK
l67_localIfF:
load 248
int 100
*
dup
store 229
load 248
/
int 100
==
bz l69_localIfF
load 229
store 230
b l70_localIfK
l69_localIfF:
int 0
store 230
l70_localIfK:
l68_localIfK:
load 230
int 0
==
load 231
int 0
==
||
bz l71_localIfF
int 0
store 229
b l72_localIfK
l71_localIfF:
load 230
load 231
/
store 229
l72_localIfK:
load 239
load 237
<=
store 228
load 229
int 120
>=
load 237
int 0
>
&&
load 238
&&
load 228
&&
store 227
byte base64(AAAAAAAADow=)
load 227
itob // bool
substring 7 8
concat
log // 9
load 227
dup
bz l73_ifF
// Just "The request mint amount is more than the maximum allowed"
// "./src/vault.rsh:254:18:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)]"
load 228
assert
load 234
bz l74_localIfF
load 235
store 226
b l75_localIfK
l74_localIfF:
int 0
store 226
l75_localIfK:
load 226
int 0
==
bz l76_localIfF
int 0
store 225
b l77_localIfK
l76_localIfF:
load 226
int 1000
/
store 225
l77_localIfK:
// Nothing
// "./src/vault.rsh:256:18:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)]"
load 233
load 225
==
assert
// Nothing
// "./src/vault.rsh:257:18:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)]"
load 232
dup
==
assert
load 255
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
load 246
itob
concat
load 243
itob
concat
load 239
itob
concat
load 233
itob
concat
load 232
itob
concat
load 231
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 57
app_global_put
pop
int 10
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l73_ifF:
load 255
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
load 250
itob
concat
global Round
itob
concat
load 249
itob
concat
b loopBody7
l60_switchAfterVaultOwner_mintToken0:
load 241
int 0
getbyte
int 5
==
bz l78_switchAfterVaultOwner_returnVaultDebt0
load 241
extract 1 8
dup
store 240
btoi
store 239
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
load 239
dup
bz l79_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 254
dig 1
gtxns XferAsset
==
assert
int axfer
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns AssetReceiver
==
assert
l79_checkTxnK:
pop
// Just "You are not the owner of this vault"
// "./src/vault.rsh:285:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)]"
txn Sender
load 253
==
assert
// Nothing
// "./src/vault.rsh:286:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)]"
load 239
load 250
<=
load 239
int 0
>
&&
load 250
int 0
>
&&
assert
load 239
dup
bz l80_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 254
itxn_field XferAsset
itxn_submit
int 0
l80_makeTxnK:
pop
load 250
load 239
-
dup
store 238
int 0
==
store 237
byte base64(AAAAAAAAEAE=)
int 1
itob // bool
substring 7 8
concat
log // 9
int 1
load 237
bz l81_ifF
// Nothing
// "./src/vault.rsh:294:18:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:268:9:function exp)]"
load 237
assert
load 249
dup
bz l82_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
itxn_field Receiver
itxn_submit
int 0
l82_makeTxnK:
pop
load 255
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
int 8
bzero
concat
global Round
itob
concat
load 249
dup
-
itob
concat
b loopBody7
l81_ifF:
load 255
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
load 238
itob
concat
global Round
itob
concat
load 249
itob
concat
b loopBody7
l78_switchAfterVaultOwner_returnVaultDebt0:
load 241
int 0
getbyte
int 6
==
bz l83_switchAfterVaultOwner_withdrawCollateral0
load 241
extract 1 8
dup
store 240
btoi
store 239
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
// Just "You are not the owner of this vault"
// "./src/vault.rsh:325:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)]"
txn Sender
load 253
==
assert
load 239
int 0
>
store 238
// Nothing
// "./src/vault.rsh:326:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)]"
load 238
assert
load 239
load 249
<
store 237
// Just "Cannot withdraw more than the balance of this contract"
// "./src/vault.rsh:327:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)]"
load 237
assert
load 246
int 120
>
store 236
// Just "Vault collateral ratio is not healthy"
// "./src/vault.rsh:329:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)]"
load 236
assert
load 249
load 239
-
dup
store 235
load 251
*
store 234
// Just "Collateral value after withdrawal must not be 0"
// "./src/vault.rsh:333:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:302:9:function exp)]"
load 234
int 0
>
assert
load 234
int 0
==
bz l84_localIfF
int 0
store 233
b l85_localIfK
l84_localIfF:
load 234
int 100
*
dup
store 232
load 234
/
int 100
==
bz l86_localIfF
load 232
store 233
b l87_localIfK
l86_localIfF:
int 0
store 233
l87_localIfK:
l85_localIfK:
load 233
int 0
==
load 245
||
bz l88_localIfF
int 0
store 232
b l89_localIfK
l88_localIfF:
load 233
load 250
/
store 232
l89_localIfK:
load 238
load 236
&&
load 232
int 120
>
&&
load 237
&&
store 231
byte base64(AAAAAAAAEXA=)
load 231
itob // bool
substring 7 8
concat
log // 9
load 231
dup
bz l90_ifF
load 239
dup
bz l91_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
itxn_field Receiver
itxn_submit
int 0
l91_makeTxnK:
pop
load 255
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
load 250
itob
concat
global Round
itob
concat
load 235
itob
concat
b loopBody7
l90_ifF:
load 255
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
load 250
itob
concat
global Round
itob
concat
load 249
itob
concat
b loopBody7
l83_switchAfterVaultOwner_withdrawCollateral0:
load 241
int 0
getbyte
int 7
==
bz l92_switchAfterVaultRedeemer_redeemVault0
load 241
extract 1 8
dup
store 240
btoi
store 239
int 2
load 239
*
int 100
/
store 238
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
// "CheckPay"
// "./src/vault.rsh:190:68:dot"
// "[]"
load 239
load 238
+
dup
bz l93_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 254
dig 1
gtxns XferAsset
==
assert
int axfer
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns AssetReceiver
==
assert
l93_checkTxnK:
pop
load 239
load 251
/
int 1000000
*
store 237
// Nothing
// "./src/vault.rsh:448:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)]"
load 239
int 0
>
assert
// Nothing
// "./src/vault.rsh:449:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)]"
load 251
int 0
>
assert
load 250
load 239
-
dup
store 236
int 0
>=
store 235
// Nothing
// "./src/vault.rsh:450:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)]"
load 235
assert
// Nothing
// "./src/vault.rsh:451:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)]"
load 235
assert
// Nothing
// "./src/vault.rsh:452:16:application"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:429:9:function exp)]"
load 249
load 237
>=
assert
load 239
dup
bz l94_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 255
itxn_field AssetReceiver
load 254
itxn_field XferAsset
itxn_submit
int 0
l94_makeTxnK:
pop
load 237
dup
bz l95_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
txn Sender
itxn_field Receiver
itxn_submit
int 0
l95_makeTxnK:
pop
load 238
dup
bz l96_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 252
itxn_field AssetReceiver
load 254
itxn_field XferAsset
itxn_submit
int 0
l96_makeTxnK:
pop
byte base64(AAAAAAAAEtU=)
int 1
itob // bool
substring 7 8
concat
log // 9
int 1
load 255
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
load 236
itob
concat
global Round
itob
concat
load 249
load 237
-
itob
concat
b loopBody7
l92_switchAfterVaultRedeemer_redeemVault0:
l30_switchK:
l29_afterHandler8:
// Handler 9
dup
int 9
==
bz l97_afterHandler9
pop
// check step
int 9
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
extract 72 32
store 252
dup
int 104
extract_uint64
store 251
dup
int 112
extract_uint64
store 250
dup
int 120
extract_uint64
store 249
dup
int 128
extract_uint64
store 248
dup
extract 136 1
btoi
store 247
dup
int 137
extract_uint64
store 246
dup
extract 145 1
btoi
store 245
dup
int 146
extract_uint64
store 244
dup
int 154
extract_uint64
store 243
dup
int 162
extract_uint64
store 242
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 242
>=
assert
// "CheckPay"
// "./src/vault.rsh:470:15:dot"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:469:35:function exp)]"
load 255
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
load 250
itob
concat
global Round
itob
concat
load 249
itob
concat
b loopBody7
l97_afterHandler9:
// Handler 10
dup
int 10
==
bz l98_afterHandler10
pop
// check step
int 10
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
extract 72 32
store 252
dup
int 104
extract_uint64
store 251
dup
int 112
extract_uint64
store 250
dup
int 120
extract_uint64
store 249
dup
int 128
extract_uint64
store 248
dup
int 136
extract_uint64
store 247
dup
int 144
extract_uint64
store 246
dup
int 152
extract_uint64
store 245
dup
int 160
extract_uint64
store 244
dup
int 168
extract_uint64
store 243
dup
int 176
extract_uint64
store 242
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./src/vault.rsh:259:19:dot"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)]"
// "CheckPay"
// "./src/vault.rsh:259:19:dot"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)]"
load 245
dup
bz l99_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns AssetAmount
==
assert
load 254
dig 1
gtxns XferAsset
==
assert
int axfer
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns AssetReceiver
==
assert
l99_checkTxnK:
pop
// Just "sender correct"
// "./src/vault.rsh:259:19:dot"
// "[at ./src/vault.rsh:190:68:application call to [unknown function] (defined at: ./src/vault.rsh:217:9:function exp)]"
load 255
txn Sender
==
assert
load 243
dup
bz l100_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 253
itxn_field AssetReceiver
load 254
itxn_field XferAsset
itxn_submit
int 0
l100_makeTxnK:
pop
load 244
dup
bz l101_makeTxnK
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
load 252
itxn_field AssetReceiver
load 254
itxn_field XferAsset
itxn_submit
int 0
l101_makeTxnK:
pop
load 255
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
load 242
itob
concat
global Round
itob
concat
load 249
itob
concat
b loopBody7
l98_afterHandler10:
int 0
assert
loopBody7:
dup
int 0
extract_uint64
store 255
dup
int 8
extract_uint64
store 254
dup
int 16
extract_uint64
store 253
dup
int 24
extract_uint64
store 252
pop
dup
extract 0 32
store 251
dup
int 32
extract_uint64
store 250
dup
extract 40 32
store 249
dup
extract 72 32
store 248
pop
load 254
int 0
>
load 252
int 0
>
||
bz l102_ifF
load 252
load 255
*
int 1000000
/
dup
store 247
int 0
==
dup
store 245
bz l103_localIfF
int 0
store 246
b l104_localIfK
l103_localIfF:
load 247
int 100
*
dup
store 244
load 247
/
int 100
==
bz l105_localIfF
load 244
store 246
b l106_localIfK
l105_localIfF:
int 0
store 246
l106_localIfK:
l104_localIfK:
load 254
int 0
==
store 243
load 246
int 0
==
load 243
||
bz l107_localIfF
int 0
store 244
b l108_localIfK
l107_localIfF:
load 246
load 254
/
store 244
l108_localIfK:
load 247
int 80
*
int 100
/
dup
store 242
int 0
==
load 243
||
bz l109_localIfF
int 0
store 241
b l110_localIfK
l109_localIfF:
load 242
load 254
/
store 241
l110_localIfK:
load 253
int 10
+
store 240
load 251
load 250
itob
concat
load 249
concat
load 248
concat
load 255
itob
concat
load 254
itob
concat
load 252
itob
concat
load 247
itob
concat
load 245
itob // bool
substring 7 8
concat
load 244
itob
concat
load 243
itob // bool
substring 7 8
concat
load 242
itob
concat
load 241
itob
concat
load 240
itob
concat
int 1
bzero
dig 1
extract 0 127
app_global_put
byte base64(AQ==)
dig 1
extract 127 43
app_global_put
pop
int 9
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l102_ifF:
int 0
itxn_begin
itxn_field AssetAmount
int axfer
itxn_field TypeEnum
global CreatorAddress
itxn_field AssetCloseTo
global CurrentApplicationAddress
itxn_field AssetReceiver
load 250
itxn_field XferAsset
itxn_submit
int 0
l111_makeTxnK:
pop
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l112_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 184,
  unsupported: [],
  version: 6
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1886",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1887",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1917",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1918",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1919",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1920",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1921",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1922",
                "type": "address"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_Liquidator_liquidateVault0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_Oracle_updatePrice0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bool",
                        "name": "elem0",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_RecoveryToggler_toggleRecoveryMode0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_VaultOwner_depositCollateral0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_VaultOwner_mintToken0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_VaultOwner_returnVaultDebt0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_VaultOwner_withdrawCollateral0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_VaultRedeemer_redeemVault0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v2301",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v2322",
        "type": "bool"
      }
    ],
    "name": "oe_v2322",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_collateral",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_collateralRatio",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_collateralValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_hf",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_vaultDebt",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v2721",
        "type": "tuple"
      }
    ],
    "name": "oe_v2721",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v3041",
        "type": "bool"
      }
    ],
    "name": "oe_v3041",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v3366",
        "type": "bool"
      }
    ],
    "name": "oe_v3366",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v3724",
        "type": "bool"
      }
    ],
    "name": "oe_v3724",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v4097",
        "type": "bool"
      }
    ],
    "name": "oe_v4097",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v4464",
        "type": "bool"
      }
    ],
    "name": "oe_v4464",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v4821",
        "type": "bool"
      }
    ],
    "name": "oe_v4821",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "State_read",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_collateral",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_collateralRatio",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_collateralValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_hf",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_vaultDebt",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1886",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1887",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1917",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1918",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1919",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1920",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1921",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1922",
                "type": "address"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_Liquidator_liquidateVault0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_Oracle_updatePrice0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bool",
                        "name": "elem0",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_RecoveryToggler_toggleRecoveryMode0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_VaultOwner_depositCollateral0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_VaultOwner_mintToken0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_VaultOwner_returnVaultDebt0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_VaultOwner_withdrawCollateral0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_VaultRedeemer_redeemVault0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v2301",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162004caa38038062004caa83398101604081905262000026916200019c565b600080554360035560408051825181526020808401511515908201527fcd3784b2810428b9f2b2dd7f396bb870a5f4b96dbfb942b22303c2c03fab95e2910160405180910390a16200007b34156008620000cc565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000c3929190620000f6565b50505062000244565b81620000f25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001049062000207565b90600052602060002090601f01602090048101928262000128576000855562000173565b82601f106200014357805160ff191683800117855562000173565b8280016001018555821562000173579182015b828111156200017357825182559160200191906001019062000156565b506200018192915062000185565b5090565b5b8082111562000181576000815560010162000186565b600060408284031215620001af57600080fd5b604080519081016001600160401b0381118282101715620001e057634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620001fb57600080fd5b60208201529392505050565b600181811c908216806200021c57607f821691505b602082108114156200023e57634e487b7160e01b600052602260045260246000fd5b50919050565b614a5680620002546000396000f3fe6080604052600436106100bd5760003560e01c806358a40f2a1161007957806399de9a081161005657806399de9a08146101c8578063ab53f2c6146101db578063f147248d146101fe578063fb1b3f6e1461021157005b806358a40f2a1461014957806383230757146101a057806396ce2864146101b557005b80630d19a5fb146100c65780631e93b0f1146100d95780632db77e25146100fd578063306ab8141461011057806342082e10146101235780634ce4f2651461013657005b366100c457005b005b6100c46100d4366004613d59565b610224565b3480156100e557600080fd5b506003545b6040519081526020015b60405180910390f35b6100c461010b366004613d71565b61041e565b6100c461011e366004613d59565b6105ea565b6100c4610131366004613d83565b6107e6565b6100c4610144366004613d59565b610bc2565b34801561015557600080fd5b5061015e610d6a565b6040516100f49190600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b3480156101ac57600080fd5b506001546100ea565b6100c46101c3366004613d59565b6114b7565b6100c46101d6366004613d59565b61165a565b3480156101e757600080fd5b506101f0611a0d565b6040516100f4929190613dc1565b6100c461020c366004613d59565b611aaa565b6100c461021f366004613dfb565b611c57565b610234600460005414601d61336a565b61024e8135158061024757506001548235145b601e61336a565b60008080556002805461026090613e0e565b80601f016020809104026020016040519081016040528092919081815260200182805461028c90613e0e565b80156102d95780601f106102ae576101008083540402835291602001916102d9565b820191906000526020600020905b8154815290600101906020018083116102bc57829003601f168201915b50505050508060200190518101906102f19190613f35565b90507f64c05390f66d4c96d69b55a2d6f7bb5135997731e2b63f4a719a786bc0579627826040516103229190613ff3565b60405180910390a161033b81608001513414601b61336a565b8051610353906001600160a01b03163314601c61336a565b61035b6138c6565b81516001600160a01b039081168252602080840151821681840152604080850151818501526060808601518416908501526080808601519085015260a0808601519085015260c0808601519085015260e08086015190850152610100808601518416908501526101208086015190850152610140808601519093169284019290925260056000554360015590516103f491839101614018565b6040516020818303038152906040526002908051906020019061041892919061394d565b50505050565b61042e600160005414600b61336a565b6104488135158061044157506001548235145b600c61336a565b60008080556002805461045a90613e0e565b80601f016020809104026020016040519081016040528092919081815260200182805461048690613e0e565b80156104d35780601f106104a8576101008083540402835291602001916104d3565b820191906000526020600020905b8154815290600101906020018083116104b657829003601f168201915b50505050508060200190518101906104eb91906140d5565b90507f816ff795cc6685d0e03d6da4edbb142a7f154a624730a0f320279276078a30c88260405161051c9190614103565b60405180910390a16105303415600961336a565b61054160208301351515600a61336a565b604080516080810182526000808252602080830182815283850183815260608086019490945286516001600160a01b0316855233909152908601359052909161058e91850190850161413b565b6001600160a01b031660608201526002600055436001556040516103f490829060200181516001600160a01b03908116825260208084015182169083015260408084015190830152606092830151169181019190915260800190565b6105fa600a60005414605761336a565b6106148135158061060d57506001548235145b605861336a565b60008080556002805461062690613e0e565b80601f016020809104026020016040519081016040528092919081815260200182805461065290613e0e565b801561069f5780601f106106745761010080835404028352916020019161069f565b820191906000526020600020905b81548152906001019060200180831161068257829003601f168201915b50505050508060200190518101906106b79190614158565b90507fbc00bef455301cf914c30c8a9af2a81c4e58a53a327cc5726ef84b62ea9c1fc9826040516106e89190613ff3565b60405180910390a16106fc3415605461336a565b61071a610713338360200151846101400151613394565b605561336a565b8051610732906001600160a01b03163314605661336a565b61074a816020015182604001518361018001516133ac565b610762816020015182606001518361016001516133ac565b61076a6139d1565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845190841690820152606080860151855194169381019390935260808501518285018051919091526101a086015181519093019290925281514391015260c08401519051909101526107e1816133c0565b505050565b6107f6600260005414601661336a565b6108108135158061080957506001548235145b601761336a565b60008080556002805461082290613e0e565b80601f016020809104026020016040519081016040528092919081815260200182805461084e90613e0e565b801561089b5780601f106108705761010080835404028352916020019161089b565b820191906000526020600020905b81548152906001019060200180831161087e57829003601f168201915b50505050508060200190518101906108b39190614224565b90506108e76040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b7f77dbc87ef9bbc9106aea47a7b2b644f88b0ca3ce4d6c05e103d740a97779a8998360405161091691906142ae565b60405180910390a161092a3415600d61336a565b8151610942906001600160a01b03163314600e61336a565b610958608084013560408501351115600f61336a565b61096960208401351515601061336a565b61097a60408401351515601161336a565b60408201516109ad90620f424090610996906020870135614328565b6109a09190614347565b606085013514601261336a565b60646109be60506060860135614328565b6109c89190614347565b808252602082018190526109e390608085013514601361336a565b6109f260408401356005614328565b60608201819052604084013590610a0b90600590614347565b1415610a205760608101516040820152610a28565b600060408201525b6040810151610a3d5760006080820152610a55565b6103e88160400151610a4f9190614347565b60808201525b6080810151610a6b9060a085013514601461336a565b610a7c60a08401351515601561336a565b610af660405180610140016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b82516001600160a01b039081168252602080850151821681840152604080860151818501526060808701519093168385015290860135608084015285013560a0808401919091529085013560c0808401919091529085013560e080840191909152610b669190860190860161413b565b6001600160a01b03166101008201528151610120820152600360005543600155604051610b97908290602001614369565b60405160208183030381529060405260029080519060200190610bbb92919061394d565b5050505050565b610bd2600660005414602661336a565b610bec81351580610be557506001548235145b602761336a565b600080805560028054610bfe90613e0e565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2a90613e0e565b8015610c775780601f10610c4c57610100808354040283529160200191610c77565b820191906000526020600020905b815481529060010190602001808311610c5a57829003601f168201915b5050505050806020019051810190610c8f919061440f565b90507f2de542e04768f7d432d52df08943d2fab028221c30dba664ab546be3aae5e4a082604051610cc09190613ff3565b60405180910390a1610cd43415602461336a565b8051610cec906001600160a01b03163314602561336a565b610cf46139d1565b815181516001600160a01b039182169052604080840151835190831660209182015260a085015184519084169083015260c0850151845193166060938401528085015181850180519190915260e0860151815190920191909152805143920191909152818401519051909101526107e1816133c0565b610d9c6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b60016000541415610e5757600060028054610db690613e0e565b80601f0160208091040260200160405190810160405280929190818152602001828054610de290613e0e565b8015610e2f5780601f10610e0457610100808354040283529160200191610e2f565b820191906000526020600020905b815481529060010190602001808311610e1257829003601f168201915b5050505050806020019051810190610e4791906140d5565b9050610e556000600761336a565b505b60026000541415610f1257600060028054610e7190613e0e565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9d90613e0e565b8015610eea5780601f10610ebf57610100808354040283529160200191610eea565b820191906000526020600020905b815481529060010190602001808311610ecd57829003601f168201915b5050505050806020019051810190610f029190614224565b9050610f106000600761336a565b505b60036000541415610fcd57600060028054610f2c90613e0e565b80601f0160208091040260200160405190810160405280929190818152602001828054610f5890613e0e565b8015610fa55780601f10610f7a57610100808354040283529160200191610fa5565b820191906000526020600020905b815481529060010190602001808311610f8857829003601f168201915b5050505050806020019051810190610fbd91906144af565b9050610fcb6000600761336a565b505b6004600054141561108857600060028054610fe790613e0e565b80601f016020809104026020016040519081016040528092919081815260200182805461101390613e0e565b80156110605780601f1061103557610100808354040283529160200191611060565b820191906000526020600020905b81548152906001019060200180831161104357829003601f168201915b50505050508060200190518101906110789190613f35565b90506110866000600761336a565b505b60056000541415611143576000600280546110a290613e0e565b80601f01602080910402602001604051908101604052809291908181526020018280546110ce90613e0e565b801561111b5780601f106110f05761010080835404028352916020019161111b565b820191906000526020600020905b8154815290600101906020018083116110fe57829003601f168201915b50505050508060200190518101906111339190613f35565b90506111416000600761336a565b505b6006600054141561126a5760006002805461115d90613e0e565b80601f016020809104026020016040519081016040528092919081815260200182805461118990613e0e565b80156111d65780601f106111ab576101008083540402835291602001916111d6565b820191906000526020600020905b8154815290600101906020018083116111b957829003601f168201915b50505050508060200190518101906111ee919061440f565b90506112256040805160c081018252600060208201818152928201819052606082018190526080820181905260a082015290815290565b60608083015182515261010083015182516020015260808084015183516040015261012084015183519092019190915260e09092015181519092019190915251919050565b600960005414156113895760006002805461128490613e0e565b80601f01602080910402602001604051908101604052809291908181526020018280546112b090613e0e565b80156112fd5780601f106112d2576101008083540402835291602001916112fd565b820191906000526020600020905b8154815290600101906020018083116112e057829003601f168201915b5050505050806020019051810190611315919061455a565b905061134c6040805160c081018252600060208201818152928201819052606082018190526080820181905260a082015290815290565b60c082015181515261012082015181516020015260e082015181516040015261018082015181516060015260a09091015181516080015251919050565b600a60005414156114a8576000600280546113a390613e0e565b80601f01602080910402602001604051908101604052809291908181526020018280546113cf90613e0e565b801561141c5780601f106113f15761010080835404028352916020019161141c565b820191906000526020600020905b8154815290600101906020018083116113ff57829003601f168201915b50505050508060200190518101906114349190614158565b905061146b6040805160c081018252600060208201818152928201819052606082018190526080820181905260a082015290815290565b60c082015181515261010082015181516020015260e082015181516040015261012082015181516060015260a09091015181516080015251919050565b6114b46000600761336a565b90565b6114c7600960005414605161336a565b6114e1813515806114da57506001548235145b605261336a565b6000808055600280546114f390613e0e565b80601f016020809104026020016040519081016040528092919081815260200182805461151f90613e0e565b801561156c5780601f106115415761010080835404028352916020019161156c565b820191906000526020600020905b81548152906001019060200180831161154f57829003601f168201915b5050505050806020019051810190611584919061455a565b9050611599816101a00151431015605361336a565b7f20946629c27bb4ab46740868cd074b2845a9d6ffb97be0e379492342bc24d525826040516115c89190613ff3565b60405180910390a16115dc3415605061336a565b6115e46139d1565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518551941693810193909352608085015182850180519190915260a086015181519093019290925281514391015260c08401519051909101526107e1816133c0565b61166a600560005414602261336a565b6116848135158061167d57506001548235145b602361336a565b60008080556002805461169690613e0e565b80601f01602080910402602001604051908101604052809291908181526020018280546116c290613e0e565b801561170f5780601f106116e45761010080835404028352916020019161170f565b820191906000526020600020905b8154815290600101906020018083116116f257829003601f168201915b50505050508060200190518101906117279190613f35565b90506117646040518060c0016040528060008152602001600081526020016000815260200160008152602001600015158152602001600081525090565b7f689557114e2e52e056e03b61e6c9aefd10ce977ec8f4368fb29885f113b07d2e836040516117939190613ff3565b60405180910390a16117a73415601f61336a565b6117c46117bd3384606001518560a00151613394565b602061336a565b60208201516117df906001600160a01b03163314602161336a565b8160e001518260a001516117f39190614634565b80825260608301518351611806926133ac565b61181e82606001518361014001518460e001516133ac565b60c0820151611833576000602082015261187a565b60648260c001516118449190614328565b6040820181905260c083015160649161185d9190614347565b1415611872576040810151602082015261187a565b600060208201525b8051156080820152602081015115611896578060800151611899565b60015b156118aa57600060608201526118c1565b805160208201516118bb9190614347565b60608201525b610120820151156118d65780608001516118d9565b60015b156118ea57600060a0820152611902565b80516101208301516118fc9190614347565b60a08201525b61197c60405180610140016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6020808401516001600160a01b039081168352604080860151848401526060808701518316828601526080808801518287015260c0808901519187019190915261010080890151851660a0808901919091526101408a015190951691870191909152865160e087015290860151908501529084015161012084015260066000554360015551610b979183910161464b565b600060606000546002808054611a2290613e0e565b80601f0160208091040260200160405190810160405280929190818152602001828054611a4e90613e0e565b8015611a9b5780601f10611a7057610100808354040283529160200191611a9b565b820191906000526020600020905b815481529060010190602001808311611a7e57829003601f168201915b50505050509050915091509091565b611aba600360005414601961336a565b611ad481351580611acd57506001548235145b601a61336a565b600080805560028054611ae690613e0e565b80601f0160208091040260200160405190810160405280929190818152602001828054611b1290613e0e565b8015611b5f5780601f10611b3457610100808354040283529160200191611b5f565b820191906000526020600020905b815481529060010190602001808311611b4257829003601f168201915b5050505050806020019051810190611b7791906144af565b90507fe92d4e1229145c13e718fdc692a322df4a6700c6bebac0841f0e9f44c56a152982604051611ba89190613ff3565b60405180910390a1611bbc3415601861336a565b611bc46138c6565b81516001600160a01b039081168252602080840151821681840152604080850151818501526060808601518416908501526080808601519085015260a0808601519085015260c0808601519085015260e08086015190850152610100808601519093169284019290925261012080850151908401523361014084015260046000554360015590516103f491839101614018565b611c67600960005414604d61336a565b611c8181351580611c7a57506001548235145b604e61336a565b600080805560028054611c9390613e0e565b80601f0160208091040260200160405190810160405280929190818152602001828054611cbf90613e0e565b8015611d0c5780601f10611ce157610100808354040283529160200191611d0c565b820191906000526020600020905b815481529060010190602001808311611cef57829003601f168201915b5050505050806020019051810190611d24919061455a565b9050611d2e613a31565b611d40826101a001514310604f61336a565b7f8490d388c7dad1abf65f17b4784bd5cc9bf74eeee5d2eb52cc623ae7983a06e183604051611d6f919061472c565b60405180910390a16000611d8960408501602086016147db565b6007811115611d9a57611d9a614703565b141561217a57611db2368490038401604085016147f6565b815260a0820151611dc4906019614328565b6060820181905260a083015190611ddd90601990614347565b146080820181905215611df95760608101516040820152611e01565b600060408201525b6040810151611e1657600060a0820152611e2e565b6103e88160400151611e289190614347565b60a08201525b60a082018051825151101560c083015251611e4a576000611e54565b6001826101800151105b611e5f576000611e69565b606e826101200151105b611e74576000611e7a565b8060c001515b15801560e0830152611ed9578060a001518260a00151611e9a919061481a565b610100820180519190915260208084015182516001600160a01b0390911690820152610120830180516000905291518251820152905190820152611f15565b6101408101805160009081905260208085015183516001600160a01b039091169082015261016084018051929092529151815183015251908201525b60208101515160c0830151611f2a919061481a565b610180820152602081015151611f43903414602861336a565b611f68611f6133846020015184602001516020015160000151613394565b602961336a565b611f778160c00151602a61336a565b7f691be546845ebb2381ce0d0ca7c54ee194c6b67e1f4c61a04e2b473b11e973ac8160e00151604051611fae911515815260200190565b60405180910390a18060e00151156120fb57610180810151604051339180156108fc02916000818181858888f19350505050158015611ff1573d6000803e3d6000fd5b50612009826020015183600001518460a001516133ac565b8060800151156120235760608101516101a082015261202c565b60006101a08201525b6101a08101516120435760006101c082015261205d565b6103e8816101a001516120569190614347565b6101c08201525b61207582602001518360600151836101c001516133ac565b61207d6139d1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551941693019290925260808501518184018051919091528051600092019190915251439101526101808201516120e99080614634565b602082015160600152610418816133c0565b6121036139d1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551941693810193909352608086015182850180519190915260a0870151815190930192909252815143910152610180840151905190910152610418816133c0565b600161218c60408501602086016147db565b600781111561219d5761219d614703565b141561243b576121b5368490038401606085016147f6565b6101e08201526121c73415602b61336a565b6121e16121da3384602001516000613394565b602c61336a565b6101e08101515160c08301516121f79190614328565b610200820181905261221057600061022082015261225d565b60648161020001516122229190614328565b610240820181905261020082015160649161223d9190614347565b14156122545761024081015161022082015261225d565b60006102208201525b6102208101511561227357816101400151612276565b60015b156122885760006102608201526122a4565b8160a0015181610220015161229d9190614347565b6102608201525b606460508261020001516122b89190614328565b6122c29190614347565b6102808201819052156122da578161014001516122dd565b60015b156122ef5760006102a082015261230b565b8160a001518161028001516123049190614347565b6102a08201525b60c08201516102c0820180519190915261026082015181516020015261020082015181516040908101919091526102a083015182516060015260a0840151825160800152905190517f485871aef1103b0449a2fa2a9b7bdb2f6b9dfd849afee036a910fff8bb02fad7916123b391600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b60405180910390a16123c36139d1565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015185519416938101939093526101e08501515182850180519190915260a087015181519093019290925281514391015260c0850151905190910152610418816133c0565b600261244d60408501602086016147db565b600781111561245e5761245e614703565b141561253c576124703415602d61336a565b61248a6124833384602001516000613394565b602e61336a565b604051600181527fbd4b3018e92f6051093fb3e05ac3d4b4d9e1cc242b7b98d9c52c212f160327aa9060200160405180910390a16124c66139d1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551941693810193909352608086015182850180519190915260a087015181519093019290925281514391015260c0850151905190910152610418816133c0565b600361254e60408501602086016147db565b600781111561255f5761255f614703565b14156126905761257736849003840160a085016147f6565b6102e082018190525161258d903414602f61336a565b6125a76125a03384602001516000613394565b603061336a565b6102e0810151516125bb901515603161336a565b6125de82604001516001600160a01b0316336001600160a01b031614603261336a565b604051600181527fa80c71ec053cc72bcd047dbbb18b66e9ca5fd0582208525d5f70a17caf3e64fc9060200160405180910390a161261a6139d1565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015185519416930192909252608085015181840180519190915260a086015181519092019190915251439101526102e08201515160c08401516120e9919061481a565b60046126a260408501602086016147db565b60078111156126b3576126b3614703565b1415612b5e576126cb36849003840160c085016147f6565b6103008201526126dd3415603361336a565b6126f76126f03384602001516000613394565b603461336a565b61271a82604001516001600160a01b0316336001600160a01b031614603561336a565b610300810151511515610320820181905261273690603661336a565b8160a001518261016001511015612754576000610340820152612770565b8160a001518261016001516127699190614634565b6103408201525b61030081015151612782906005614328565b6103808201819052610300820151519061279e90600590614347565b146103a08201819052156127bd576103808101516103608201526127c6565b60006103608201525b6103608101516127dd5760006103c08201526127f7565b6103e88161036001516127f09190614347565b6103c08201525b6103c08101516103008201515161280e9190614634565b6103e0820181905260a0830151612825919061481a565b6104008201526101008201511561284357600061042082015261288e565b60648260e001516128549190614328565b610440820181905260e083015160649161286e9190614347565b14156128855761044081015161042082015261288e565b60006104208201525b610420810151156128a557610400810151156128a8565b60015b156128ba5760006104608201526128d7565b8061040001518161042001516128d09190614347565b6104608201525b6103408101516103008201515111156104808201526104608101516078111561290157600061290b565b6000816103400151115b61291657600061291d565b8061032001515b61292857600061292f565b8061048001515b15156104a082018190526040519081527f876e53a8321d1b63cdfde9504ccfaa7352a08a7375606ff972265280b1c1b22d9060200160405180910390a1806104a0015115612b5657612987816104800151603761336a565b806103a00151156129a3576103808101516104c08201526129ac565b60006104c08201525b6104c08101516129c35760006104e08201526129dd565b6103e8816104c001516129d69190614347565b6104e08201525b6129f4816104e00151826103c0015114603861336a565b612a006001603961336a565b612a96604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b039081168252602080850151821681840152604080860151831681850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152610120808601516101008501526101808087015191850191909152610300850151516101408501526103c08501516101608501526103e0850151908401526104008401516101a0840152600a600055436001559051610b9791839101614832565b6124c66139d1565b6005612b7060408501602086016147db565b6007811115612b8157612b81614703565b1415612df557612b9936849003840160e085016147f6565b610500820152612bab3415603a61336a565b612bcd612bc633846020015184610500015160000151613394565b603b61336a565b612bf082604001516001600160a01b0316336001600160a01b031614603c61336a565b612c348260a00151826105000151600001511115612c0f576000612c19565b6105008201515115155b612c24576000612c2d565b60008360a00151115b603d61336a565b6020820151825161050083015151612c4d9291906133ac565b6105008101515160a0830151612c639190614634565b610520820181905215610540820152604051600181527fbb62eee4b97752169a32cc3a4eedacfed86837e991867a1cb46dab00f3b90ffc9060200160405180910390a180610540015115612d7657612cc1816105400151603e61336a565b81604001516001600160a01b03166108fc8360c001519081150290604051600060405180830381858888f19350505050158015612d02573d6000803e3d6000fd5b50612d0b6139d1565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015185519416930192909252608085015181840180519190915280516000920191909152514391015260c08301516120e99080614634565b612d7e6139d1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551941693810193909352608086015182850180519190915261052086015181519093019290925281514391015260c0850151905190910152610418816133c0565b6006612e0760408501602086016147db565b6007811115612e1857612e18614703565b141561310c57612e3136849003840161010085016147f6565b610560820152612e433415603f61336a565b612e5d612e563384602001516000613394565b604061336a565b612e8082604001516001600160a01b0316336001600160a01b031614604161336a565b6105608101515115156105808201819052612e9c90604261336a565b60c082015161056082015151106105a08201819052612ebc90604361336a565b6101208201516078106105c08201819052612ed890604461336a565b6105608101515160c0830151612eee9190614634565b6105e082018190526080830151612f0491614328565b6106008201819052612f19901515604561336a565b610600810151612f30576000610620820152612f7d565b6064816106000151612f429190614328565b6106408201819052610600820151606491612f5d9190614347565b1415612f7457610640810151610620820152612f7d565b60006106208201525b61062081015115612f9357816101400151612f96565b60015b15612fa8576000610660820152612fc4565b8160a00151816106200151612fbd9190614347565b6106608201525b806105800151612fd5576000612fdc565b806105c001515b612fe7576000612ff1565b6078816106600151115b612ffc576000613003565b806105a001515b151561068082018190526040519081527fa009983daddec3a24b16f57900076390aaafb472cd35f8a425f62c2c08fae1ee9060200160405180910390a180610680015115612b56576040808301516105608301515191516001600160a01b039091169180156108fc02916000818181858888f1935050505015801561308c573d6000803e3d6000fd5b506130956139d1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551941693810193909352608086015182850180519190915260a08701518151909301929092528151439101526105e0840151905190910152610418816133c0565b600761311e60408501602086016147db565b600781111561312f5761312f614703565b14156107e15761314836849003840161012085016147f6565b6106a082018190525160649061315f906002614328565b6131699190614347565b6106c082015261317b3415604661336a565b6131ad6131a6338460200151846106c00151856106a00151600001516131a1919061481a565b613394565b604761336a565b60808201516106a082015151620f4240916131c791614347565b6131d19190614328565b6106e08201526106a0810151516131eb901515604861336a565b6131fd6000836080015111604961336a565b6106a08101515160a08301516132139190614634565b6107008201526001610720820181905261322e90604a61336a565b61323e816107200151604b61336a565b613255816106e001518360c001511015604c61336a565b602082015182516106a08301515161326e9291906133ac565b6106e0810151604051339180156108fc02916000818181858888f1935050505015801561329f573d6000803e3d6000fd5b506132b882602001518360600151836106c001516133ac565b604051600181527f425a91f438eb69efa2cf1e2e5ad1ef130bda10481cf8677aa1d4a70e167a5e309060200160405180910390a16132f46139d1565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015185519416930192909252608085015181840180519190915261070085015181519092019190915251439101526106e082015160c08401516120e99190614634565b816133905760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60006133a2838530856136e0565b90505b9392505050565b6133b78383836137ba565b6107e157600080fd5b613413604051806101200160405280600081526020016000815260200160001515815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081525090565b60008260200151602001511161343457600082602001516060015111613437565b60015b156136ca5760208201518051606090910151620f42409161345791614328565b6134619190614347565b80825215604082018190521561347d57600060208201526134be565b805161348b90606490614328565b6060820181905281516064916134a19190614347565b14156134b657606081015160208201526134be565b600060208201525b6020808301518101511560a0830152810151156134df578060a001516134e2565b60015b156134f35760006080820152613511565b816020015160200151816020015161350b9190614347565b60808201525b805160649061352290605090614328565b61352c9190614347565b60c0820181905215613542578060a00151613545565b60015b1561355657600060e0820152613574565b8160200151602001518160c0015161356e9190614347565b60e08201525b600a826020015160400151613589919061481a565b61010080830191909152604080516101c081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905291820181905261012082018190526101408201819052610160820181905261018082018190526101a08201528251516001600160a01b03908116825283516020908101518216818401528451604090810151831681850152855160609081015190931683850152818601805151608080870191909152815184015160a08088019190915291519094015160c080870191909152865160e0808801919091528784015115156101008089019190915295880151610120880152918701511515610140870152860151610160860152850151610180850152918401516101a084015260096000554360015590516103f491839101614906565b6000808055600181905561339090600290613cdb565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391613747916149e7565b60006040518083038185875af1925050503d8060008114613784576040519150601f19603f3d011682016040523d82523d6000602084013e613789565b606091505b509150915061379a8282600161388b565b50808060200190518101906137af9190614a03565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391613819916149e7565b60006040518083038185875af1925050503d8060008114613856576040519150601f19603f3d011682016040523d82523d6000602084013e61385b565b606091505b509150915061386c8282600261388b565b50808060200190518101906138819190614a03565b9695505050505050565b6060831561389a5750816133a5565b8251156138aa5782518084602001fd5b60405163100960cb60e01b815260048101839052602401613387565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681525090565b82805461395990613e0e565b90600052602060002090601f01602090048101928261397b57600085556139c1565b82601f1061399457805160ff19168380011785556139c1565b828001600101855582156139c1579182015b828111156139c15782518255916020019190600101906139a6565b506139cd929150613d18565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001613a2c6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60408051610760810190915260006107408201908152815260208101613a55613d2d565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c082015260e001613a9e604080518082019091526000808252602082015290565b8152602001613aab613d2d565b8152602001613aca604080518082019091526000808252602082015290565b8152602001613ad7613d2d565b8152602001600081526020016000815260200160008152602001613b076040518060200160405280600081525090565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001613b686040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b8152602001613b836040518060200160405280600081525090565b8152602001613b9e6040518060200160405280600081525090565b81526020016000151581526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581526020016000815260200160008152602001613c2a6040518060200160405280600081525090565b815260200160008152602001600015158152602001613c556040518060200160405280600081525090565b81526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600015158152602001613cb76040518060200160405280600081525090565b81526020016000815260200160008152602001600081526020016000151581525090565b508054613ce790613e0e565b6000825580601f10613cf7575050565b601f016020900490600052602060002090810190613d159190613d18565b50565b5b808211156139cd5760008155600101613d19565b604051806040016040528060008152602001613a2c604080518082019091526000808252602082015290565b600060408284031215613d6b57600080fd5b50919050565b600060608284031215613d6b57600080fd5b600060e08284031215613d6b57600080fd5b60005b83811015613db0578181015183820152602001613d98565b838111156104185750506000910152565b8281526040602082015260008251806040840152613de6816060850160208701613d95565b601f01601f1916919091016060019392505050565b60006101408284031215613d6b57600080fd5b600181811c90821680613e2257607f821691505b60208210811415613d6b57634e487b7160e01b600052602260045260246000fd5b604051610160810167ffffffffffffffff81118282101715613e7557634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715613e7557634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff81118282101715613e7557634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715613e7557634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114613d1557600080fd5b8051613f3081613f10565b919050565b60006101608284031215613f4857600080fd5b613f50613e43565b613f5983613f25565b8152613f6760208401613f25565b602082015260408301516040820152613f8260608401613f25565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100613fbd818501613f25565b908201526101208381015190820152610140613fda818501613f25565b908201529392505050565b8015158114613d1557600080fd5b8135815260408101602083013561400981613fe5565b80151560208401525092915050565b81516001600160a01b031681526101608101602083015161404460208401826001600160a01b03169052565b5060408301516040830152606083015161406960608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401516140ad828501826001600160a01b03169052565b50506101208381015190830152610140928301516001600160a01b0316929091019190915290565b6000602082840312156140e757600080fd5b6140ef613e7b565b82516140fa81613f10565b81529392505050565b813581526020808301359082015260608101604083013561412381613f10565b6001600160a01b031660409290920191909152919050565b60006020828403121561414d57600080fd5b81356133a581613f10565b60006101c0828403121561416b57600080fd5b614173613eac565b61417c83613f25565b815261418a60208401613f25565b602082015261419b60408401613f25565b60408201526141ac60608401613f25565b60608201526080838101519082015260a0808401519082015260c0808401519082015260e08084015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a0928301519281019290925250919050565b60006080828403121561423657600080fd5b6040516080810181811067ffffffffffffffff8211171561426757634e487b7160e01b600052604160045260246000fd5b604052825161427581613f10565b8152602083015161428581613f10565b60208201526040838101519082015260608301516142a281613f10565b60608201529392505050565b600060e082019050823582526020830135602083015260408301356040830152606083013560608301526080830135608083015260a083013560a083015260c08301356142fa81613f10565b6001600160a01b031660c09290920191909152919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561434257614342614312565b500290565b60008261436457634e487b7160e01b600052601260045260246000fd5b500490565b81516001600160a01b031681526101408101602083015161439560208401826001600160a01b03169052565b506040830151604083015260608301516143ba60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401516143fe828501826001600160a01b03169052565b505061012092830151919092015290565b6000610140828403121561442257600080fd5b61442a613ede565b61443383613f25565b81526020830151602082015261444b60408401613f25565b6040820152606083015160608201526080830151608082015261447060a08401613f25565b60a082015261448160c08401613f25565b60c082015260e083810151908201526101008084015190820152610120928301519281019290925250919050565b600061014082840312156144c257600080fd5b6144ca613ede565b6144d383613f25565b81526144e160208401613f25565b6020820152604083015160408201526144fc60608401613f25565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100614537818501613f25565b90820152610120928301519281019290925250919050565b8051613f3081613fe5565b60006101c0828403121561456d57600080fd5b614575613eac565b61457e83613f25565b815261458c60208401613f25565b602082015261459d60408401613f25565b60408201526145ae60608401613f25565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101006145e981850161454f565b90820152610120838101519082015261014061460681850161454f565b90820152610160838101519082015261018080840151908201526101a0928301519281019290925250919050565b60008282101561464657614646614312565b500390565b81516001600160a01b03168152610140810160208301516020830152604083015161468160408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a08301516146b060a08401826001600160a01b03169052565b5060c08301516146cb60c08401826001600160a01b03169052565b5060e083015160e083015261010080840151818401525061012080840151818401525092915050565b803560088110613f3057600080fd5b634e487b7160e01b600052602160045260246000fd5b803561472481613fe5565b151590915250565b813581526101408101614741602084016146f4565b6008811061475f57634e487b7160e01b600052602160045260246000fd5b60208301526040838101359083015261477e6060830160608501359052565b61478e6080830160808501614719565b61479e60a0830160a08501359052565b6147ae60c0830160c08501359052565b6147be60e0830160e08501359052565b610100838101359083015261012092830135929091019190915290565b6000602082840312156147ed57600080fd5b6133a5826146f4565b60006020828403121561480857600080fd5b614810613e7b565b9135825250919050565b6000821982111561482d5761482d614312565b500190565b81516001600160a01b031681526101c08101602083015161485e60208401826001600160a01b03169052565b50604083015161487960408401826001600160a01b03169052565b50606083015161489460608401826001600160a01b03169052565b506080838101519083015260a0808401519083015260c0808401519083015260e08084015190830152610100808401519083015261012080840151908301526101408084015190830152610160808401519083015261018080840151908301526101a092830151929091019190915290565b81516001600160a01b031681526101c08101602083015161493260208401826001600160a01b03169052565b50604083015161494d60408401826001600160a01b03169052565b50606083015161496860608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401516149a58285018215159052565b5050610120838101519083015261014080840151151590830152610160808401519083015261018080840151908301526101a092830151929091019190915290565b600082516149f9818460208701613d95565b9190910192915050565b600060208284031215614a1557600080fd5b81516133a581613fe556fea2646970667358221220df1989c33d4cd613c90cdb9dd318945dfedd1e5dfca51a47da1d4fb8d76b992964736f6c63430008090033`,
  BytecodeLen: 19626,
  Which: `oD`,
  version: 5,
  views: {
    State: {
      read: `State_read`
      }
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "FeeCollector": FeeCollector,
  "Liquidator_liquidateVault": Liquidator_liquidateVault,
  "Minter": Minter,
  "Oracle_updatePrice": Oracle_updatePrice,
  "RecoveryToggler_toggleRecoveryMode": RecoveryToggler_toggleRecoveryMode,
  "Reserve": Reserve,
  "VaultOwner_depositCollateral": VaultOwner_depositCollateral,
  "VaultOwner_mintToken": VaultOwner_mintToken,
  "VaultOwner_returnVaultDebt": VaultOwner_returnVaultDebt,
  "VaultOwner_withdrawCollateral": VaultOwner_withdrawCollateral,
  "VaultRedeemer_redeemVault": VaultRedeemer_redeemVault
  };
export const _APIs = {
  Liquidator: {
    liquidateVault: Liquidator_liquidateVault
    },
  Oracle: {
    updatePrice: Oracle_updatePrice
    },
  RecoveryToggler: {
    toggleRecoveryMode: RecoveryToggler_toggleRecoveryMode
    },
  VaultOwner: {
    depositCollateral: VaultOwner_depositCollateral,
    mintToken: VaultOwner_mintToken,
    returnVaultDebt: VaultOwner_returnVaultDebt,
    withdrawCollateral: VaultOwner_withdrawCollateral
    },
  VaultRedeemer: {
    redeemVault: VaultRedeemer_redeemVault
    }
  };
