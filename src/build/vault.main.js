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
              const [v1871] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [v1871, v1880, v1881, v1882] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v1871, v1880, v1881, v1882, v1912, v1913, v1914, v1916, v1917, v1929] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v1871, v1880, v1881, v1882, v1912, v1913, v1914, v1916, v1917, v1929, v1944] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [v1871, v1880, v1881, v1882, v1912, v1913, v1914, v1916, v1917, v1929, v1944] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v1880, v1881, v1882, v1912, v1914, v1917, v1944, v1965, v1980, v1988] = svs;
              return (await ((async () => {
                
                const v1993 = {
                  collateral: v1912,
                  collateralRatio: v1980,
                  collateralValue: v1914,
                  hf: v1988,
                  vaultDebt: v1965
                  };
                
                return v1993;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9))) {
              const [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095] = svs;
              return (await ((async () => {
                
                const v2093 = {
                  collateral: v2016,
                  collateralRatio: v2080,
                  collateralValue: v2073,
                  hf: v2087,
                  vaultDebt: v2009
                  };
                
                return v2093;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10))) {
              const [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2080, v2087, v3566, v3696, v3700, v3701] = svs;
              return (await ((async () => {
                
                const v2093 = {
                  collateral: v2016,
                  collateralRatio: v2080,
                  collateralValue: v2073,
                  hf: v2087,
                  vaultDebt: v2009
                  };
                
                return v2093;}))(...args));
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
  const {data: [], secs: v1873, time: v1872, didSend: v19, from: v1871 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v1881, v1882], secs: v1884, time: v1883, didSend: v32, from: v1880 } = txn2;
  ;
  ;
  const v1886 = stdlib.gt(v1881, stdlib.checkedBigNumberify('./vault.rsh:106:36:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1886, {
    at: './vault.rsh:106:10:application',
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
  const {data: [v1912, v1913, v1914, v1915, v1916, v1917], secs: v1919, time: v1918, didSend: v76, from: v1911 } = txn3;
  ;
  const v1921 = stdlib.addressEq(v1871, v1911);
  stdlib.assert(v1921, {
    at: './vault.rsh:128:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FeeCollector'
    });
  const v1922 = stdlib.le(v1913, v1915);
  stdlib.assert(v1922, {
    at: './vault.rsh:136:10:application',
    fs: [],
    msg: 'initial debt <= initialMaximumMint',
    who: 'FeeCollector'
    });
  const v1923 = stdlib.gt(v1912, stdlib.checkedBigNumberify('./vault.rsh:138:31:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1923, {
    at: './vault.rsh:138:10:application',
    fs: [],
    msg: null,
    who: 'FeeCollector'
    });
  const v1924 = stdlib.gt(v1913, stdlib.checkedBigNumberify('./vault.rsh:139:30:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1924, {
    at: './vault.rsh:139:10:application',
    fs: [],
    msg: null,
    who: 'FeeCollector'
    });
  const v1925 = stdlib.mul(v1912, v1881);
  const v1926 = stdlib.div(v1925, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
  const v1927 = stdlib.eq(v1914, v1926);
  stdlib.assert(v1927, {
    at: './vault.rsh:140:10:application',
    fs: [],
    msg: null,
    who: 'FeeCollector'
    });
  const v1928 = stdlib.mul(v1914, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
  const v1929 = stdlib.div(v1928, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
  let v1930;
  const v1931 = stdlib.lt(v1929, stdlib.checkedBigNumberify('./vault.rsh:142:69:decimal', stdlib.UInt_max, 0));
  if (v1931) {
    v1930 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    v1930 = v1929;
    }
  const v1932 = stdlib.eq(v1915, v1930);
  stdlib.assert(v1932, {
    at: './vault.rsh:142:10:application',
    fs: [],
    msg: null,
    who: 'FeeCollector'
    });
  let v1933;
  const v1934 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v1913);
  const v1935 = stdlib.div(v1934, stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
  const v1936 = stdlib.eq(v1935, v1913);
  if (v1936) {
    v1933 = v1934;
    }
  else {
    v1933 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
    }
  let v1938;
  const v1939 = stdlib.eq(v1933, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  if (v1939) {
    v1938 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1941 = stdlib.div(v1933, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
    v1938 = v1941;
    }
  const v1942 = stdlib.eq(v1916, v1938);
  stdlib.assert(v1942, {
    at: './vault.rsh:143:10:application',
    fs: [],
    msg: null,
    who: 'FeeCollector'
    });
  const v1943 = stdlib.gt(v1916, stdlib.checkedBigNumberify('./vault.rsh:144:28:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1943, {
    at: './vault.rsh:144:10:application',
    fs: [],
    msg: null,
    who: 'FeeCollector'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v1871, v1880, v1881, v1882, v1912, v1913, v1914, v1916, v1917, v1929],
    evt_cnt: 0,
    funcNum: 3,
    lct: v1918,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v1946, time: v1945, didSend: v109, from: v1944 } = txn4;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0),
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
  const {data: [], secs: v1946, time: v1945, didSend: v109, from: v1944 } = txn4;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1954, time: v1953, didSend: v120, from: v1952 } = txn5;
  ;
  const v1957 = stdlib.addressEq(v1871, v1952);
  stdlib.assert(v1957, {
    at: './vault.rsh:153:10:dot',
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
  const {data: [], secs: v1960, time: v1959, didSend: v128, from: v1958 } = txn6;
  ;
  ;
  const v1964 = stdlib.addressEq(v1880, v1958);
  stdlib.assert(v1964, {
    at: './vault.rsh:157:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FeeCollector'
    });
  const v1965 = stdlib.sub(v1913, v1916);
  ;
  ;
  let v1974;
  const v1975 = stdlib.eq(v1914, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
  if (v1975) {
    v1974 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1976 = stdlib.mul(v1914, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
    const v1977 = stdlib.div(v1976, v1914);
    const v1978 = stdlib.eq(v1977, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
    if (v1978) {
      v1974 = v1976;
      }
    else {
      v1974 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
      }
    }
  let v1980;
  const v1981 = stdlib.eq(v1974, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  const v1982 = stdlib.eq(v1965, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
  const v1983 = v1981 ? true : v1982;
  if (v1983) {
    v1980 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1984 = stdlib.div(v1974, v1965);
    v1980 = v1984;
    }
  let v1988;
  const v1989 = stdlib.eq(v1929, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  const v1991 = v1989 ? true : v1982;
  if (v1991) {
    v1988 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1992 = stdlib.div(v1929, v1965);
    v1988 = v1992;
    }
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1996, time: v1995, didSend: v168, from: v1994 } = txn7;
  ;
  const v1998 = stdlib.addressEq(v1880, v1994);
  stdlib.assert(v1998, {
    at: './vault.rsh:176:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FeeCollector'
    });
  let v2007 = v1881;
  let v2009 = v1965;
  let v2010 = v1995;
  let v2016 = v1912;
  
  while (await (async () => {
    const v2067 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
    const v2069 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
    const v2070 = v2067 ? true : v2069;
    
    return v2070;})()) {
    const v2072 = stdlib.mul(v2016, v2007);
    const v2073 = stdlib.div(v2072, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
    let v2074;
    const v2075 = stdlib.eq(v2073, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
    if (v2075) {
      v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2076 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
      const v2077 = stdlib.div(v2076, v2073);
      const v2078 = stdlib.eq(v2077, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
      if (v2078) {
        v2074 = v2076;
        }
      else {
        v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
        }
      }
    let v2080;
    const v2081 = stdlib.eq(v2074, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
    const v2082 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
    const v2083 = v2081 ? true : v2082;
    if (v2083) {
      v2080 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2084 = stdlib.div(v2074, v2009);
      v2080 = v2084;
      }
    const v2085 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
    const v2086 = stdlib.div(v2085, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
    let v2087;
    const v2088 = stdlib.eq(v2086, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
    const v2090 = v2088 ? true : v2082;
    if (v2090) {
      v2087 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2091 = stdlib.div(v2086, v2009);
      v2087 = v2091;
      }
    const v2095 = stdlib.add(v2010, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc6],
      timeoutAt: ['time', v2095],
      waitIfNotPresent: false
      }));
    if (txn8.didTimeout) {
      const txn9 = await (ctc.sendrecv({
        args: [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095],
        evt_cnt: 0,
        funcNum: 9,
        lct: v2010,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v4826, time: v4825, didSend: v1820, from: v4824 } = txn9;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv2007 = v2007;
          const cv2009 = v2009;
          const cv2010 = v4825;
          const cv2016 = v2016;
          
          await (async () => {
            const v2007 = cv2007;
            const v2009 = cv2009;
            const v2010 = cv2010;
            const v2016 = cv2016;
            
            if (await (async () => {
              const v2067 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
              const v2069 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
              const v2070 = v2067 ? true : v2069;
              
              return v2070;})()) {
              const v2072 = stdlib.mul(v2016, v2007);
              const v2073 = stdlib.div(v2072, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v2074;
              const v2075 = stdlib.eq(v2073, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v2075) {
                v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2076 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v2077 = stdlib.div(v2076, v2073);
                const v2078 = stdlib.eq(v2077, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v2078) {
                  v2074 = v2076;
                  }
                else {
                  v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v2080;
              const v2081 = stdlib.eq(v2074, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v2082 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v2083 = v2081 ? true : v2082;
              if (v2083) {
                v2080 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2084 = stdlib.div(v2074, v2009);
                v2080 = v2084;
                }
              const v2085 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v2086 = stdlib.div(v2085, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v2087;
              const v2088 = stdlib.eq(v2086, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v2090 = v2088 ? true : v2082;
              if (v2090) {
                v2087 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2091 = stdlib.div(v2086, v2009);
                v2087 = v2091;
                }
              const v2095 = stdlib.add(v2010, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1882
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
      const {data: [], secs: v4826, time: v4825, didSend: v1820, from: v4824 } = txn9;
      ;
      const cv2007 = v2007;
      const cv2009 = v2009;
      const cv2010 = v4825;
      const cv2016 = v2016;
      
      v2007 = cv2007;
      v2009 = cv2009;
      v2010 = cv2010;
      v2016 = cv2016;
      
      continue;
      }
    else {
      const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn8;
      switch (v2296[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2299 = v2296[1];
          const v2300 = v2299[stdlib.checkedBigNumberify('./vault.rsh:364:9:spread', stdlib.UInt_max, 0)];
          let v2301;
          let v2302;
          const v2303 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:89:64:decimal', stdlib.UInt_max, 25), v2009);
          const v2304 = stdlib.div(v2303, stdlib.checkedBigNumberify('./utils.rsh:89:64:decimal', stdlib.UInt_max, 25));
          const v2305 = stdlib.eq(v2304, v2009);
          if (v2305) {
            v2302 = v2303;
            }
          else {
            v2302 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v2307;
          const v2308 = stdlib.eq(v2302, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v2308) {
            v2307 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2310 = stdlib.div(v2302, stdlib.checkedBigNumberify('./utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
            v2307 = v2310;
            }
          const v2311 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:372:23:decimal', stdlib.UInt_max, 0));
          const v2312 = stdlib.lt(v2087, stdlib.checkedBigNumberify('./utils.rsh:19:38:decimal', stdlib.UInt_max, 1));
          const v2313 = v2311 ? v2312 : false;
          const v2314 = stdlib.lt(v2080, stdlib.checkedBigNumberify('./utils.rsh:12:41:decimal', stdlib.UInt_max, 110));
          const v2315 = v2313 ? v2314 : false;
          const v2316 = stdlib.ge(v2300, v2009);
          const v2317 = v2315 ? v2316 : false;
          if (v2317) {
            const v2318 = stdlib.add(v2009, v2307);
            const v2319 = [v2318, v1882];
            const v2320 = [stdlib.checkedBigNumberify('./vault.rsh:378:19:decimal', stdlib.UInt_max, 0), v2319];
            v2301 = v2320;
            }
          else {
            const v2321 = [stdlib.checkedBigNumberify('./vault.rsh:380:23:decimal', stdlib.UInt_max, 0), v1882];
            const v2322 = [stdlib.checkedBigNumberify('./vault.rsh:380:19:decimal', stdlib.UInt_max, 0), v2321];
            v2301 = v2322;
            }
          const v2324 = v2301[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 0)];
          const v2325 = v2301[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 1)];
          const v2326 = v2325[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 0)];
          const v2332 = stdlib.add(v2016, v2324);
          ;
          ;
          undefined;
          stdlib.assert(v2316, {
            at: './vault.rsh:384:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:364:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          await txn8.getOutput('api', 'v2317', ctc4, v2317);
          if (v2317) {
            const v2354 = stdlib.sub(v2332, v2332);
            ;
            ;
            let v2359;
            if (v2305) {
              v2359 = v2303;
              }
            else {
              v2359 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v2364;
            const v2365 = stdlib.eq(v2359, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v2365) {
              v2364 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v2367 = stdlib.div(v2359, stdlib.checkedBigNumberify('./utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
              v2364 = v2367;
              }
            ;
            const cv2007 = v2007;
            const cv2009 = stdlib.checkedBigNumberify('./vault.rsh:397:19:decimal', stdlib.UInt_max, 0);
            const cv2010 = v2297;
            const cv2016 = v2354;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          else {
            const cv2007 = v2007;
            const cv2009 = v2009;
            const cv2010 = v2297;
            const cv2016 = v2332;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2629 = v2296[1];
          ;
          ;
          undefined;
          const v2694 = v2629[stdlib.checkedBigNumberify('./vault.rsh:404:9:spread', stdlib.UInt_max, 0)];
          const v2696 = stdlib.mul(v2016, v2694);
          let v2697;
          const v2698 = stdlib.eq(v2696, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v2698) {
            v2697 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2699 = stdlib.mul(v2696, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v2700 = stdlib.div(v2699, v2696);
            const v2701 = stdlib.eq(v2700, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v2701) {
              v2697 = v2699;
              }
            else {
              v2697 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v2703;
          const v2704 = stdlib.eq(v2697, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2706 = v2704 ? true : v2082;
          if (v2706) {
            v2703 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2707 = stdlib.div(v2697, v2009);
            v2703 = v2707;
            }
          const v2708 = stdlib.mul(v2696, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v2709 = stdlib.div(v2708, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v2710;
          const v2711 = stdlib.eq(v2709, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2713 = v2711 ? true : v2082;
          if (v2713) {
            v2710 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2714 = stdlib.div(v2709, v2009);
            v2710 = v2714;
            }
          const v2716 = {
            collateral: v2016,
            collateralRatio: v2703,
            collateralValue: v2696,
            hf: v2710,
            vaultDebt: v2009
            };
          await txn8.getOutput('api', 'v2716', ctc7, v2716);
          const cv2007 = v2694;
          const cv2009 = v2009;
          const cv2010 = v2297;
          const cv2016 = v2016;
          
          v2007 = cv2007;
          v2009 = cv2009;
          v2010 = cv2010;
          v2016 = cv2016;
          
          continue;
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2940 = v2296[1];
          ;
          ;
          undefined;
          const v3036 = true;
          await txn8.getOutput('api', 'v3036', ctc4, v3036);
          const cv2007 = v2007;
          const cv2009 = v2009;
          const cv2010 = v2297;
          const cv2016 = v2016;
          
          v2007 = cv2007;
          v2009 = cv2009;
          v2010 = cv2010;
          v2016 = cv2016;
          
          continue;
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3251 = v2296[1];
          const v3252 = v3251[stdlib.checkedBigNumberify('./vault.rsh:346:9:spread', stdlib.UInt_max, 0)];
          const v3268 = stdlib.add(v2016, v3252);
          ;
          ;
          undefined;
          const v3359 = stdlib.gt(v3252, stdlib.checkedBigNumberify('./vault.rsh:357:37:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3359, {
            at: './vault.rsh:357:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)'],
            msg: 'Cannot deposit 0 collateral tokens',
            who: 'FeeCollector'
            });
          const v3360 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v3360, {
            at: './vault.rsh:358:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'FeeCollector'
            });
          const v3361 = true;
          await txn8.getOutput('api', 'v3361', ctc4, v3361);
          const cv2007 = v2007;
          const cv2009 = v2009;
          const cv2010 = v2297;
          const cv2016 = v3268;
          
          v2007 = cv2007;
          v2009 = cv2009;
          v2010 = cv2010;
          v2016 = cv2016;
          
          continue;
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3565 = v2296[1];
          const v3566 = v3565[stdlib.checkedBigNumberify('./vault.rsh:208:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v3684 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v3684, {
            at: './vault.rsh:221:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'FeeCollector'
            });
          const v3685 = stdlib.gt(v3566, stdlib.checkedBigNumberify('./vault.rsh:222:32:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3685, {
            at: './vault.rsh:222:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
            msg: 'You must mint at least 1 token',
            who: 'FeeCollector'
            });
          let v3688;
          const v3689 = stdlib.lt(v2086, v2009);
          if (v3689) {
            v3688 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3690 = stdlib.sub(v2086, v2009);
            v3688 = v3690;
            }
          let v3691;
          const v3692 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v3566);
          const v3693 = stdlib.div(v3692, stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
          const v3694 = stdlib.eq(v3693, v3566);
          if (v3694) {
            v3691 = v3692;
            }
          else {
            v3691 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v3696;
          const v3697 = stdlib.eq(v3691, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v3697) {
            v3696 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3699 = stdlib.div(v3691, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
            v3696 = v3699;
            }
          const v3700 = stdlib.sub(v3566, v3696);
          const v3701 = stdlib.add(v2009, v3700);
          let v3702;
          if (v2075) {
            v3702 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3704 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v3705 = stdlib.div(v3704, v2073);
            const v3706 = stdlib.eq(v3705, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v3706) {
              v3702 = v3704;
              }
            else {
              v3702 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v3708;
          const v3709 = stdlib.eq(v3702, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v3710 = stdlib.eq(v3701, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v3711 = v3709 ? true : v3710;
          if (v3711) {
            v3708 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3712 = stdlib.div(v3702, v3701);
            v3708 = v3712;
            }
          const v3713 = stdlib.ge(v3708, stdlib.checkedBigNumberify('./utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v3714 = stdlib.gt(v3688, stdlib.checkedBigNumberify('./vault.rsh:239:32:decimal', stdlib.UInt_max, 0));
          const v3715 = v3713 ? v3714 : false;
          const v3717 = v3715 ? v3685 : false;
          const v3718 = stdlib.le(v3566, v3688);
          const v3719 = v3717 ? v3718 : false;
          await txn8.getOutput('api', 'v3719', ctc4, v3719);
          if (v3719) {
            stdlib.assert(v3718, {
              at: './vault.rsh:245:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
              msg: 'The request mint amount is more than the maximum allowed',
              who: 'FeeCollector'
              });
            let v3726;
            if (v3694) {
              v3726 = v3692;
              }
            else {
              v3726 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v3731;
            const v3732 = stdlib.eq(v3726, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v3732) {
              v3731 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v3734 = stdlib.div(v3726, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
              v3731 = v3734;
              }
            const v3735 = stdlib.eq(v3696, v3731);
            stdlib.assert(v3735, {
              at: './vault.rsh:247:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
              msg: null,
              who: 'FeeCollector'
              });
            const v3737 = stdlib.eq(v3700, v3700);
            stdlib.assert(v3737, {
              at: './vault.rsh:248:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
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
            const {data: [], secs: v3740, time: v3739, didSend: v1677, from: v3738 } = txn9;
            ;
            ;
            const v3744 = stdlib.addressEq(v1880, v3738);
            stdlib.assert(v3744, {
              at: './vault.rsh:250:19:dot',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
              msg: 'sender correct',
              who: 'FeeCollector'
              });
            ;
            ;
            const cv2007 = v2007;
            const cv2009 = v3701;
            const cv2010 = v3739;
            const cv2016 = v2016;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;
            
            }
          else {
            const cv2007 = v2007;
            const cv2009 = v2009;
            const cv2010 = v2297;
            const cv2016 = v2016;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3879 = v2296[1];
          const v3880 = v3879[stdlib.checkedBigNumberify('./vault.rsh:260:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v4080 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v4080, {
            at: './vault.rsh:277:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'FeeCollector'
            });
          const v4081 = stdlib.le(v3880, v2009);
          const v4082 = stdlib.gt(v3880, stdlib.checkedBigNumberify('./vault.rsh:279:28:decimal', stdlib.UInt_max, 0));
          const v4083 = v4081 ? v4082 : false;
          const v4084 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:280:23:decimal', stdlib.UInt_max, 0));
          const v4085 = v4083 ? v4084 : false;
          stdlib.assert(v4085, {
            at: './vault.rsh:278:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          ;
          const v4090 = stdlib.sub(v2009, v3880);
          const v4091 = stdlib.eq(v4090, stdlib.checkedBigNumberify('./vault.rsh:283:69:decimal', stdlib.UInt_max, 0));
          const v4092 = true;
          await txn8.getOutput('api', 'v4092', ctc4, v4092);
          if (v4091) {
            stdlib.assert(v4091, {
              at: './vault.rsh:286:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
              msg: null,
              who: 'FeeCollector'
              });
            const v4104 = stdlib.sub(v2016, v2016);
            ;
            const cv2007 = v2007;
            const cv2009 = stdlib.checkedBigNumberify('./vault.rsh:288:19:decimal', stdlib.UInt_max, 0);
            const cv2010 = v2297;
            const cv2016 = v4104;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          else {
            const cv2007 = v2007;
            const cv2009 = v4090;
            const cv2010 = v2297;
            const cv2016 = v2016;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4193 = v2296[1];
          const v4194 = v4193[stdlib.checkedBigNumberify('./vault.rsh:294:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v4432 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v4432, {
            at: './vault.rsh:317:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'FeeCollector'
            });
          const v4433 = stdlib.gt(v4194, stdlib.checkedBigNumberify('./vault.rsh:318:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4433, {
            at: './vault.rsh:318:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          const v4435 = stdlib.lt(v4194, v2016);
          stdlib.assert(v4435, {
            at: './vault.rsh:319:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'Cannot withdraw more than the balance of this contract',
            who: 'FeeCollector'
            });
          const v4436 = stdlib.gt(v2080, stdlib.checkedBigNumberify('./utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          stdlib.assert(v4436, {
            at: './vault.rsh:321:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'Vault collateral ratio is not healthy',
            who: 'FeeCollector'
            });
          const v4438 = stdlib.sub(v2016, v4194);
          const v4439 = stdlib.mul(v4438, v2007);
          const v4440 = stdlib.gt(v4439, stdlib.checkedBigNumberify('./vault.rsh:326:11:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4440, {
            at: './vault.rsh:325:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'Collateral value after withdrawal must not be 0',
            who: 'FeeCollector'
            });
          let v4441;
          const v4442 = stdlib.eq(v4439, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v4442) {
            v4441 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4443 = stdlib.mul(v4439, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v4444 = stdlib.div(v4443, v4439);
            const v4445 = stdlib.eq(v4444, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v4445) {
              v4441 = v4443;
              }
            else {
              v4441 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v4447;
          const v4448 = stdlib.eq(v4441, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v4450 = v4448 ? true : v2082;
          if (v4450) {
            v4447 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4451 = stdlib.div(v4441, v2009);
            v4447 = v4451;
            }
          const v4454 = v4433 ? v4436 : false;
          const v4455 = stdlib.gt(v4447, stdlib.checkedBigNumberify('./utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v4456 = v4454 ? v4455 : false;
          const v4459 = v4456 ? v4435 : false;
          await txn8.getOutput('api', 'v4459', ctc4, v4459);
          if (v4459) {
            ;
            const cv2007 = v2007;
            const cv2009 = v2009;
            const cv2010 = v2297;
            const cv2016 = v4438;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          else {
            const cv2007 = v2007;
            const cv2009 = v2009;
            const cv2010 = v2297;
            const cv2016 = v2016;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4507 = v2296[1];
          const v4508 = v4507[stdlib.checkedBigNumberify('./vault.rsh:421:9:spread', stdlib.UInt_max, 0)];
          const v4509 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:92:8:decimal', stdlib.UInt_max, 2), v4508);
          const v4510 = stdlib.div(v4509, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          const v4511 = stdlib.add(v4508, v4510);
          ;
          ;
          undefined;
          const v4792 = stdlib.div(v4508, v2007);
          const v4793 = stdlib.mul(v4792, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          const v4796 = stdlib.gt(v4508, stdlib.checkedBigNumberify('./vault.rsh:440:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4796, {
            at: './vault.rsh:440:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          const v4797 = stdlib.gt(v2007, stdlib.checkedBigNumberify('./vault.rsh:441:35:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4797, {
            at: './vault.rsh:441:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          const v4798 = stdlib.sub(v2009, v4508);
          const v4799 = stdlib.ge(v4798, stdlib.checkedBigNumberify('./vault.rsh:442:53:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4799, {
            at: './vault.rsh:442:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          stdlib.assert(v4799, {
            at: './vault.rsh:443:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          const v4803 = stdlib.ge(v2016, v4793);
          stdlib.assert(v4803, {
            at: './vault.rsh:444:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'FeeCollector'
            });
          ;
          const v4811 = stdlib.sub(v2016, v4793);
          ;
          ;
          const v4816 = true;
          await txn8.getOutput('api', 'v4816', ctc4, v4816);
          const cv2007 = v2007;
          const cv2009 = v4798;
          const cv2010 = v2297;
          const cv2016 = v4811;
          
          v2007 = cv2007;
          v2009 = cv2009;
          v2010 = cv2010;
          v2016 = cv2016;
          
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
  
  
  const [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2149 = stdlib.protect(ctc4, await interact.in(), {
    at: './vault.rsh:1:23:application',
    fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:364:9:function exp)', 'at ./vault.rsh:181:68:application call to "runLiquidator_liquidateVault0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'in',
    who: 'Liquidator_liquidateVault'
    });
  const v2150 = v2149[stdlib.checkedBigNumberify('./vault.rsh:364:9:spread', stdlib.UInt_max, 0)];
  const v2152 = stdlib.ge(v2150, v2009);
  stdlib.assert(v2152, {
    at: './vault.rsh:367:15:application',
    fs: ['at ./vault.rsh:364:9:application call to [unknown function] (defined at: ./vault.rsh:366:13:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:364:9:function exp)', 'at ./vault.rsh:181:68:application call to "runLiquidator_liquidateVault0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: null,
    who: 'Liquidator_liquidateVault'
    });
  
  const v2190 = ['Liquidator_liquidateVault0', v2149];
  let v2192;
  let v2193;
  const v2194 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:89:64:decimal', stdlib.UInt_max, 25), v2009);
  const v2195 = stdlib.div(v2194, stdlib.checkedBigNumberify('./utils.rsh:89:64:decimal', stdlib.UInt_max, 25));
  const v2196 = stdlib.eq(v2195, v2009);
  if (v2196) {
    v2193 = v2194;
    }
  else {
    v2193 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
    }
  let v2198;
  const v2199 = stdlib.eq(v2193, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  if (v2199) {
    v2198 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v2201 = stdlib.div(v2193, stdlib.checkedBigNumberify('./utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
    v2198 = v2201;
    }
  const v2202 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:372:23:decimal', stdlib.UInt_max, 0));
  const v2203 = stdlib.lt(v2087, stdlib.checkedBigNumberify('./utils.rsh:19:38:decimal', stdlib.UInt_max, 1));
  const v2204 = v2202 ? v2203 : false;
  const v2205 = stdlib.lt(v2080, stdlib.checkedBigNumberify('./utils.rsh:12:41:decimal', stdlib.UInt_max, 110));
  const v2206 = v2204 ? v2205 : false;
  const v2208 = v2206 ? v2152 : false;
  if (v2208) {
    const v2209 = stdlib.add(v2009, v2198);
    const v2210 = [v2209, v1882];
    const v2211 = [stdlib.checkedBigNumberify('./vault.rsh:378:19:decimal', stdlib.UInt_max, 0), v2210];
    v2192 = v2211;
    }
  else {
    const v2212 = [stdlib.checkedBigNumberify('./vault.rsh:380:23:decimal', stdlib.UInt_max, 0), v1882];
    const v2213 = [stdlib.checkedBigNumberify('./vault.rsh:380:19:decimal', stdlib.UInt_max, 0), v2212];
    v2192 = v2213;
    }
  const v2214 = v2192[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 0)];
  const v2215 = v2192[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 1)];
  const v2216 = v2215[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 0)];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095, v2190],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v2214, [[v2216, v1882]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
      
      switch (v2296[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2299 = v2296[1];
          const v2300 = v2299[stdlib.checkedBigNumberify('./vault.rsh:364:9:spread', stdlib.UInt_max, 0)];
          let v2301;
          let v2302;
          if (v2196) {
            v2302 = v2194;
            }
          else {
            v2302 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v2307;
          const v2308 = stdlib.eq(v2302, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v2308) {
            v2307 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2310 = stdlib.div(v2302, stdlib.checkedBigNumberify('./utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
            v2307 = v2310;
            }
          const v2316 = stdlib.ge(v2300, v2009);
          const v2317 = v2206 ? v2316 : false;
          if (v2317) {
            const v2318 = stdlib.add(v2009, v2307);
            const v2319 = [v2318, v1882];
            const v2320 = [stdlib.checkedBigNumberify('./vault.rsh:378:19:decimal', stdlib.UInt_max, 0), v2319];
            v2301 = v2320;
            }
          else {
            const v2321 = [stdlib.checkedBigNumberify('./vault.rsh:380:23:decimal', stdlib.UInt_max, 0), v1882];
            const v2322 = [stdlib.checkedBigNumberify('./vault.rsh:380:19:decimal', stdlib.UInt_max, 0), v2321];
            v2301 = v2322;
            }
          const v2324 = v2301[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 0)];
          const v2325 = v2301[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 1)];
          const v2326 = v2325[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 0)];
          const v2332 = stdlib.add(v2016, v2324);
          sim_r.txns.push({
            amt: v2324,
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: v2326,
            kind: 'to',
            tok: v1882
            });
          undefined;
          stdlib.assert(v2316, {
            at: './vault.rsh:384:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:364:9:function exp)'],
            msg: null,
            who: 'Liquidator_liquidateVault'
            });
          const v2345 = await txn1.getOutput('api', 'v2317', ctc3, v2317);
          
          if (v2317) {
            const v2354 = stdlib.sub(v2332, v2332);
            sim_r.txns.push({
              amt: v2332,
              kind: 'from',
              to: v2295,
              tok: undefined
              });
            sim_r.txns.push({
              amt: v2009,
              kind: 'from',
              to: v1880,
              tok: v1882
              });
            let v2359;
            if (v2196) {
              v2359 = v2194;
              }
            else {
              v2359 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v2364;
            const v2365 = stdlib.eq(v2359, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v2365) {
              v2364 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v2367 = stdlib.div(v2359, stdlib.checkedBigNumberify('./utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
              v2364 = v2367;
              }
            sim_r.txns.push({
              amt: v2364,
              kind: 'from',
              to: v1944,
              tok: v1882
              });
            const v63090 = v2007;
            const v63091 = stdlib.checkedBigNumberify('./vault.rsh:397:19:decimal', stdlib.UInt_max, 0);
            const v63093 = v2354;
            const v63094 = stdlib.gt(stdlib.checkedBigNumberify('./vault.rsh:397:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
            const v63095 = stdlib.gt(v2354, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
            const v63096 = v63094 ? true : v63095;
            if (v63096) {
              const v63097 = stdlib.mul(v2354, v2007);
              const v63098 = stdlib.div(v63097, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v63099;
              const v63100 = stdlib.eq(v63098, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v63100) {
                v63099 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63101 = stdlib.mul(v63098, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v63102 = stdlib.div(v63101, v63098);
                const v63103 = stdlib.eq(v63102, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v63103) {
                  v63099 = v63101;
                  }
                else {
                  v63099 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v63104;
              const v63105 = stdlib.eq(v63099, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63106 = stdlib.eq(stdlib.checkedBigNumberify('./vault.rsh:397:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v63107 = v63105 ? true : v63106;
              if (v63107) {
                v63104 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63108 = stdlib.div(v63099, stdlib.checkedBigNumberify('./vault.rsh:397:19:decimal', stdlib.UInt_max, 0));
                v63104 = v63108;
                }
              const v63109 = stdlib.mul(v63098, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v63110 = stdlib.div(v63109, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v63111;
              const v63112 = stdlib.eq(v63110, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63113 = v63112 ? true : v63106;
              if (v63113) {
                v63111 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63114 = stdlib.div(v63110, stdlib.checkedBigNumberify('./vault.rsh:397:19:decimal', stdlib.UInt_max, 0));
                v63111 = v63114;
                }
              const v63115 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1882
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }}
          else {
            const v63134 = v2007;
            const v63135 = v2009;
            const v63137 = v2332;
            const v63139 = stdlib.gt(v2332, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
            const v63140 = v2202 ? true : v63139;
            if (v63140) {
              const v63141 = stdlib.mul(v2332, v2007);
              const v63142 = stdlib.div(v63141, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v63143;
              const v63144 = stdlib.eq(v63142, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v63144) {
                v63143 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63145 = stdlib.mul(v63142, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v63146 = stdlib.div(v63145, v63142);
                const v63147 = stdlib.eq(v63146, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v63147) {
                  v63143 = v63145;
                  }
                else {
                  v63143 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v63148;
              const v63149 = stdlib.eq(v63143, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63150 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v63151 = v63149 ? true : v63150;
              if (v63151) {
                v63148 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63152 = stdlib.div(v63143, v2009);
                v63148 = v63152;
                }
              const v63153 = stdlib.mul(v63142, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v63154 = stdlib.div(v63153, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v63155;
              const v63156 = stdlib.eq(v63154, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63157 = v63156 ? true : v63150;
              if (v63157) {
                v63155 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63158 = stdlib.div(v63154, v2009);
                v63155 = v63158;
                }
              const v63159 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1882
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
          const v2629 = v2296[1];
          
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2940 = v2296[1];
          
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3251 = v2296[1];
          
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3565 = v2296[1];
          
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3879 = v2296[1];
          
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4193 = v2296[1];
          
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4507 = v2296[1];
          
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
  const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
  switch (v2296[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2299 = v2296[1];
      const v2300 = v2299[stdlib.checkedBigNumberify('./vault.rsh:364:9:spread', stdlib.UInt_max, 0)];
      let v2301;
      let v2302;
      if (v2196) {
        v2302 = v2194;
        }
      else {
        v2302 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
        }
      let v2307;
      const v2308 = stdlib.eq(v2302, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      if (v2308) {
        v2307 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2310 = stdlib.div(v2302, stdlib.checkedBigNumberify('./utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
        v2307 = v2310;
        }
      const v2316 = stdlib.ge(v2300, v2009);
      const v2317 = v2206 ? v2316 : false;
      if (v2317) {
        const v2318 = stdlib.add(v2009, v2307);
        const v2319 = [v2318, v1882];
        const v2320 = [stdlib.checkedBigNumberify('./vault.rsh:378:19:decimal', stdlib.UInt_max, 0), v2319];
        v2301 = v2320;
        }
      else {
        const v2321 = [stdlib.checkedBigNumberify('./vault.rsh:380:23:decimal', stdlib.UInt_max, 0), v1882];
        const v2322 = [stdlib.checkedBigNumberify('./vault.rsh:380:19:decimal', stdlib.UInt_max, 0), v2321];
        v2301 = v2322;
        }
      const v2324 = v2301[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 0)];
      const v2325 = v2301[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 1)];
      const v2326 = v2325[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 0)];
      const v2332 = stdlib.add(v2016, v2324);
      ;
      ;
      undefined;
      stdlib.assert(v2316, {
        at: './vault.rsh:384:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:364:9:function exp)'],
        msg: null,
        who: 'Liquidator_liquidateVault'
        });
      const v2345 = await txn1.getOutput('api', 'v2317', ctc3, v2317);
      if (v1495) {
        stdlib.protect(ctc7, await interact.out(v2299, v2345), {
          at: './vault.rsh:364:9:application',
          fs: ['at ./vault.rsh:364:9:application call to [unknown function] (defined at: ./vault.rsh:364:9:function exp)', 'at ./vault.rsh:391:18:application call to "apiReturn" (defined at: ./vault.rsh:364:9:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:364:9:function exp)'],
          msg: 'out',
          who: 'Liquidator_liquidateVault'
          });
        }
      else {
        }
      
      if (v2317) {
        const v2354 = stdlib.sub(v2332, v2332);
        ;
        ;
        let v2359;
        if (v2196) {
          v2359 = v2194;
          }
        else {
          v2359 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
          }
        let v2364;
        const v2365 = stdlib.eq(v2359, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        if (v2365) {
          v2364 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2367 = stdlib.div(v2359, stdlib.checkedBigNumberify('./utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
          v2364 = v2367;
          }
        ;
        const v63090 = v2007;
        const v63091 = stdlib.checkedBigNumberify('./vault.rsh:397:19:decimal', stdlib.UInt_max, 0);
        const v63093 = v2354;
        const v63094 = stdlib.gt(stdlib.checkedBigNumberify('./vault.rsh:397:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
        const v63095 = stdlib.gt(v2354, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
        const v63096 = v63094 ? true : v63095;
        if (v63096) {
          const v63097 = stdlib.mul(v2354, v2007);
          const v63098 = stdlib.div(v63097, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          let v63099;
          const v63100 = stdlib.eq(v63098, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v63100) {
            v63099 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63101 = stdlib.mul(v63098, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v63102 = stdlib.div(v63101, v63098);
            const v63103 = stdlib.eq(v63102, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v63103) {
              v63099 = v63101;
              }
            else {
              v63099 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v63104;
          const v63105 = stdlib.eq(v63099, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63106 = stdlib.eq(stdlib.checkedBigNumberify('./vault.rsh:397:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v63107 = v63105 ? true : v63106;
          if (v63107) {
            v63104 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63108 = stdlib.div(v63099, stdlib.checkedBigNumberify('./vault.rsh:397:19:decimal', stdlib.UInt_max, 0));
            v63104 = v63108;
            }
          const v63109 = stdlib.mul(v63098, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v63110 = stdlib.div(v63109, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v63111;
          const v63112 = stdlib.eq(v63110, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63113 = v63112 ? true : v63106;
          if (v63113) {
            v63111 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63114 = stdlib.div(v63110, stdlib.checkedBigNumberify('./vault.rsh:397:19:decimal', stdlib.UInt_max, 0));
            v63111 = v63114;
            }
          const v63115 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
          return;
          }
        else {
          return;
          }}
      else {
        const v63134 = v2007;
        const v63135 = v2009;
        const v63137 = v2332;
        const v63139 = stdlib.gt(v2332, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
        const v63140 = v2202 ? true : v63139;
        if (v63140) {
          const v63141 = stdlib.mul(v2332, v2007);
          const v63142 = stdlib.div(v63141, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          let v63143;
          const v63144 = stdlib.eq(v63142, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v63144) {
            v63143 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63145 = stdlib.mul(v63142, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v63146 = stdlib.div(v63145, v63142);
            const v63147 = stdlib.eq(v63146, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v63147) {
              v63143 = v63145;
              }
            else {
              v63143 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v63148;
          const v63149 = stdlib.eq(v63143, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63150 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v63151 = v63149 ? true : v63150;
          if (v63151) {
            v63148 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63152 = stdlib.div(v63143, v2009);
            v63148 = v63152;
            }
          const v63153 = stdlib.mul(v63142, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v63154 = stdlib.div(v63153, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v63155;
          const v63156 = stdlib.eq(v63154, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63157 = v63156 ? true : v63150;
          if (v63157) {
            v63155 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63158 = stdlib.div(v63154, v2009);
            v63155 = v63158;
            }
          const v63159 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
          return;
          }
        else {
          return;
          }}
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2629 = v2296[1];
      return;
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2940 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3251 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3565 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3879 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4193 = v2296[1];
      return;
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4507 = v2296[1];
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Data({
    Liquidator_liquidateVault0: ctc4,
    Oracle_updatePrice0: ctc4,
    RecoveryToggler_toggleRecoveryMode0: ctc6,
    VaultOwner_depositCollateral0: ctc4,
    VaultOwner_mintToken0: ctc4,
    VaultOwner_returnVaultDebt0: ctc4,
    VaultOwner_withdrawCollateral0: ctc4,
    VaultRedeemer_redeemVault0: ctc4
    });
  const ctc8 = stdlib.T_Object({
    collateral: ctc0,
    collateralRatio: ctc0,
    collateralValue: ctc0,
    hf: ctc0,
    vaultDebt: ctc0
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./vault.rsh:93:10:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v1873, time: v1872, didSend: v19, from: v1871 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0),
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
  const {data: [], secs: v1873, time: v1872, didSend: v19, from: v1871 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v1881, v1882], secs: v1884, time: v1883, didSend: v32, from: v1880 } = txn2;
  ;
  ;
  const v1886 = stdlib.gt(v1881, stdlib.checkedBigNumberify('./vault.rsh:106:36:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1886, {
    at: './vault.rsh:106:10:application',
    fs: [],
    msg: null,
    who: 'Minter'
    });
  const v1889 = stdlib.protect(ctc2, await interact.createVault(v1881), {
    at: './vault.rsh:111:27:application',
    fs: ['at ./vault.rsh:109:14:application call to [unknown function] (defined at: ./vault.rsh:109:18:function exp)'],
    msg: 'createVault',
    who: 'Minter'
    });
  const v1890 = v1889[stdlib.checkedBigNumberify('./vault.rsh:110:11:array', stdlib.UInt_max, 0)];
  const v1891 = v1889[stdlib.checkedBigNumberify('./vault.rsh:110:11:array', stdlib.UInt_max, 1)];
  const v1892 = stdlib.mul(v1890, v1881);
  const v1893 = stdlib.div(v1892, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
  const v1894 = stdlib.mul(v1893, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
  const v1895 = stdlib.div(v1894, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
  let v1896;
  const v1897 = stdlib.lt(v1895, stdlib.checkedBigNumberify('./vault.rsh:117:68:decimal', stdlib.UInt_max, 0));
  if (v1897) {
    v1896 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    v1896 = v1895;
    }
  let v1898;
  const v1899 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v1891);
  const v1900 = stdlib.div(v1899, stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
  const v1901 = stdlib.eq(v1900, v1891);
  if (v1901) {
    v1898 = v1899;
    }
  else {
    v1898 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
    }
  let v1903;
  const v1904 = stdlib.eq(v1898, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  if (v1904) {
    v1903 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1906 = stdlib.div(v1898, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
    v1903 = v1906;
    }
  const v1907 = stdlib.gt(v1891, stdlib.checkedBigNumberify('./vault.rsh:122:31:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1907, {
    at: './vault.rsh:122:11:application',
    fs: ['at ./vault.rsh:109:14:application call to [unknown function] (defined at: ./vault.rsh:109:18:function exp)'],
    msg: null,
    who: 'Minter'
    });
  const v1908 = stdlib.le(v1891, v1896);
  stdlib.assert(v1908, {
    at: './vault.rsh:123:11:application',
    fs: ['at ./vault.rsh:109:14:application call to [unknown function] (defined at: ./vault.rsh:109:18:function exp)'],
    msg: null,
    who: 'Minter'
    });
  const v1909 = stdlib.gt(v1890, stdlib.checkedBigNumberify('./vault.rsh:124:32:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1909, {
    at: './vault.rsh:124:11:application',
    fs: ['at ./vault.rsh:109:14:application call to [unknown function] (defined at: ./vault.rsh:109:18:function exp)'],
    msg: null,
    who: 'Minter'
    });
  const v1910 = stdlib.gt(v1903, stdlib.checkedBigNumberify('./vault.rsh:125:29:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1910, {
    at: './vault.rsh:125:11:application',
    fs: ['at ./vault.rsh:109:14:application call to [unknown function] (defined at: ./vault.rsh:109:18:function exp)'],
    msg: null,
    who: 'Minter'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1871, v1880, v1881, v1882, v1890, v1891, v1893, v1896, v1903, v1871],
    evt_cnt: 6,
    funcNum: 2,
    lct: v1883,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0, ctc0, ctc0, ctc3],
    pay: [stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v1912, v1913, v1914, v1915, v1916, v1917], secs: v1919, time: v1918, didSend: v76, from: v1911 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v1921 = stdlib.addressEq(v1871, v1911);
      stdlib.assert(v1921, {
        at: './vault.rsh:128:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Minter'
        });
      const v1922 = stdlib.le(v1913, v1915);
      stdlib.assert(v1922, {
        at: './vault.rsh:136:10:application',
        fs: [],
        msg: 'initial debt <= initialMaximumMint',
        who: 'Minter'
        });
      const v1923 = stdlib.gt(v1912, stdlib.checkedBigNumberify('./vault.rsh:138:31:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v1923, {
        at: './vault.rsh:138:10:application',
        fs: [],
        msg: null,
        who: 'Minter'
        });
      const v1924 = stdlib.gt(v1913, stdlib.checkedBigNumberify('./vault.rsh:139:30:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v1924, {
        at: './vault.rsh:139:10:application',
        fs: [],
        msg: null,
        who: 'Minter'
        });
      const v1925 = stdlib.mul(v1912, v1881);
      const v1926 = stdlib.div(v1925, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
      const v1927 = stdlib.eq(v1914, v1926);
      stdlib.assert(v1927, {
        at: './vault.rsh:140:10:application',
        fs: [],
        msg: null,
        who: 'Minter'
        });
      const v1928 = stdlib.mul(v1914, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
      const v1929 = stdlib.div(v1928, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
      let v1930;
      const v1931 = stdlib.lt(v1929, stdlib.checkedBigNumberify('./vault.rsh:142:69:decimal', stdlib.UInt_max, 0));
      if (v1931) {
        v1930 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        v1930 = v1929;
        }
      const v1932 = stdlib.eq(v1915, v1930);
      stdlib.assert(v1932, {
        at: './vault.rsh:142:10:application',
        fs: [],
        msg: null,
        who: 'Minter'
        });
      let v1933;
      const v1934 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v1913);
      const v1935 = stdlib.div(v1934, stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
      const v1936 = stdlib.eq(v1935, v1913);
      if (v1936) {
        v1933 = v1934;
        }
      else {
        v1933 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
        }
      let v1938;
      const v1939 = stdlib.eq(v1933, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      if (v1939) {
        v1938 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1941 = stdlib.div(v1933, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
        v1938 = v1941;
        }
      const v1942 = stdlib.eq(v1916, v1938);
      stdlib.assert(v1942, {
        at: './vault.rsh:143:10:application',
        fs: [],
        msg: null,
        who: 'Minter'
        });
      const v1943 = stdlib.gt(v1916, stdlib.checkedBigNumberify('./vault.rsh:144:28:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v1943, {
        at: './vault.rsh:144:10:application',
        fs: [],
        msg: null,
        who: 'Minter'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc3, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v1912, v1913, v1914, v1915, v1916, v1917], secs: v1919, time: v1918, didSend: v76, from: v1911 } = txn3;
  ;
  const v1921 = stdlib.addressEq(v1871, v1911);
  stdlib.assert(v1921, {
    at: './vault.rsh:128:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Minter'
    });
  const v1922 = stdlib.le(v1913, v1915);
  stdlib.assert(v1922, {
    at: './vault.rsh:136:10:application',
    fs: [],
    msg: 'initial debt <= initialMaximumMint',
    who: 'Minter'
    });
  const v1923 = stdlib.gt(v1912, stdlib.checkedBigNumberify('./vault.rsh:138:31:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1923, {
    at: './vault.rsh:138:10:application',
    fs: [],
    msg: null,
    who: 'Minter'
    });
  const v1924 = stdlib.gt(v1913, stdlib.checkedBigNumberify('./vault.rsh:139:30:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1924, {
    at: './vault.rsh:139:10:application',
    fs: [],
    msg: null,
    who: 'Minter'
    });
  const v1925 = stdlib.mul(v1912, v1881);
  const v1926 = stdlib.div(v1925, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
  const v1927 = stdlib.eq(v1914, v1926);
  stdlib.assert(v1927, {
    at: './vault.rsh:140:10:application',
    fs: [],
    msg: null,
    who: 'Minter'
    });
  const v1928 = stdlib.mul(v1914, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
  const v1929 = stdlib.div(v1928, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
  let v1930;
  const v1931 = stdlib.lt(v1929, stdlib.checkedBigNumberify('./vault.rsh:142:69:decimal', stdlib.UInt_max, 0));
  if (v1931) {
    v1930 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    v1930 = v1929;
    }
  const v1932 = stdlib.eq(v1915, v1930);
  stdlib.assert(v1932, {
    at: './vault.rsh:142:10:application',
    fs: [],
    msg: null,
    who: 'Minter'
    });
  let v1933;
  const v1934 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v1913);
  const v1935 = stdlib.div(v1934, stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
  const v1936 = stdlib.eq(v1935, v1913);
  if (v1936) {
    v1933 = v1934;
    }
  else {
    v1933 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
    }
  let v1938;
  const v1939 = stdlib.eq(v1933, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  if (v1939) {
    v1938 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1941 = stdlib.div(v1933, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
    v1938 = v1941;
    }
  const v1942 = stdlib.eq(v1916, v1938);
  stdlib.assert(v1942, {
    at: './vault.rsh:143:10:application',
    fs: [],
    msg: null,
    who: 'Minter'
    });
  const v1943 = stdlib.gt(v1916, stdlib.checkedBigNumberify('./vault.rsh:144:28:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1943, {
    at: './vault.rsh:144:10:application',
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
  const {data: [], secs: v1946, time: v1945, didSend: v109, from: v1944 } = txn4;
  ;
  const txn5 = await (ctc.sendrecv({
    args: [v1871, v1880, v1881, v1882, v1912, v1913, v1914, v1916, v1917, v1929, v1944],
    evt_cnt: 0,
    funcNum: 4,
    lct: v1945,
    onlyIf: true,
    out_tys: [],
    pay: [v1912, []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v1954, time: v1953, didSend: v120, from: v1952 } = txn5;
      
      sim_r.txns.push({
        amt: v1912,
        kind: 'to',
        tok: undefined
        });
      const v1957 = stdlib.addressEq(v1871, v1952);
      stdlib.assert(v1957, {
        at: './vault.rsh:153:10:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Minter'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc3, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc3, ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1954, time: v1953, didSend: v120, from: v1952 } = txn5;
  ;
  const v1957 = stdlib.addressEq(v1871, v1952);
  stdlib.assert(v1957, {
    at: './vault.rsh:153:10:dot',
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
  const {data: [], secs: v1960, time: v1959, didSend: v128, from: v1958 } = txn6;
  ;
  ;
  const v1964 = stdlib.addressEq(v1880, v1958);
  stdlib.assert(v1964, {
    at: './vault.rsh:157:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Minter'
    });
  const v1965 = stdlib.sub(v1913, v1916);
  ;
  ;
  let v1974;
  const v1975 = stdlib.eq(v1914, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
  if (v1975) {
    v1974 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1976 = stdlib.mul(v1914, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
    const v1977 = stdlib.div(v1976, v1914);
    const v1978 = stdlib.eq(v1977, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
    if (v1978) {
      v1974 = v1976;
      }
    else {
      v1974 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
      }
    }
  let v1980;
  const v1981 = stdlib.eq(v1974, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  const v1982 = stdlib.eq(v1965, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
  const v1983 = v1981 ? true : v1982;
  if (v1983) {
    v1980 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1984 = stdlib.div(v1974, v1965);
    v1980 = v1984;
    }
  let v1988;
  const v1989 = stdlib.eq(v1929, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  const v1991 = v1989 ? true : v1982;
  if (v1991) {
    v1988 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1992 = stdlib.div(v1929, v1965);
    v1988 = v1992;
    }
  const txn7 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1996, time: v1995, didSend: v168, from: v1994 } = txn7;
  ;
  const v1998 = stdlib.addressEq(v1880, v1994);
  stdlib.assert(v1998, {
    at: './vault.rsh:176:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Minter'
    });
  let v2007 = v1881;
  let v2009 = v1965;
  let v2010 = v1995;
  let v2016 = v1912;
  
  while (await (async () => {
    const v2067 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
    const v2069 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
    const v2070 = v2067 ? true : v2069;
    
    return v2070;})()) {
    const v2072 = stdlib.mul(v2016, v2007);
    const v2073 = stdlib.div(v2072, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
    let v2074;
    const v2075 = stdlib.eq(v2073, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
    if (v2075) {
      v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2076 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
      const v2077 = stdlib.div(v2076, v2073);
      const v2078 = stdlib.eq(v2077, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
      if (v2078) {
        v2074 = v2076;
        }
      else {
        v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
        }
      }
    let v2080;
    const v2081 = stdlib.eq(v2074, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
    const v2082 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
    const v2083 = v2081 ? true : v2082;
    if (v2083) {
      v2080 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2084 = stdlib.div(v2074, v2009);
      v2080 = v2084;
      }
    const v2085 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
    const v2086 = stdlib.div(v2085, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
    let v2087;
    const v2088 = stdlib.eq(v2086, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
    const v2090 = v2088 ? true : v2082;
    if (v2090) {
      v2087 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2091 = stdlib.div(v2086, v2009);
      v2087 = v2091;
      }
    const v2095 = stdlib.add(v2010, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc7],
      timeoutAt: ['time', v2095],
      waitIfNotPresent: false
      }));
    if (txn8.didTimeout) {
      const txn9 = await (ctc.sendrecv({
        args: [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095],
        evt_cnt: 0,
        funcNum: 9,
        lct: v2010,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v4826, time: v4825, didSend: v1820, from: v4824 } = txn9;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv2007 = v2007;
          const cv2009 = v2009;
          const cv2010 = v4825;
          const cv2016 = v2016;
          
          await (async () => {
            const v2007 = cv2007;
            const v2009 = cv2009;
            const v2010 = cv2010;
            const v2016 = cv2016;
            
            if (await (async () => {
              const v2067 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
              const v2069 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
              const v2070 = v2067 ? true : v2069;
              
              return v2070;})()) {
              const v2072 = stdlib.mul(v2016, v2007);
              const v2073 = stdlib.div(v2072, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v2074;
              const v2075 = stdlib.eq(v2073, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v2075) {
                v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2076 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v2077 = stdlib.div(v2076, v2073);
                const v2078 = stdlib.eq(v2077, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v2078) {
                  v2074 = v2076;
                  }
                else {
                  v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v2080;
              const v2081 = stdlib.eq(v2074, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v2082 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v2083 = v2081 ? true : v2082;
              if (v2083) {
                v2080 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2084 = stdlib.div(v2074, v2009);
                v2080 = v2084;
                }
              const v2085 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v2086 = stdlib.div(v2085, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v2087;
              const v2088 = stdlib.eq(v2086, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v2090 = v2088 ? true : v2082;
              if (v2090) {
                v2087 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2091 = stdlib.div(v2086, v2009);
                v2087 = v2091;
                }
              const v2095 = stdlib.add(v2010, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1882
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
        tys: [ctc3, ctc1, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc5, ctc0, ctc5, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v4826, time: v4825, didSend: v1820, from: v4824 } = txn9;
      ;
      const cv2007 = v2007;
      const cv2009 = v2009;
      const cv2010 = v4825;
      const cv2016 = v2016;
      
      v2007 = cv2007;
      v2009 = cv2009;
      v2010 = cv2010;
      v2016 = cv2016;
      
      continue;
      }
    else {
      const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn8;
      switch (v2296[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2299 = v2296[1];
          const v2300 = v2299[stdlib.checkedBigNumberify('./vault.rsh:364:9:spread', stdlib.UInt_max, 0)];
          let v2301;
          let v2302;
          const v2303 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:89:64:decimal', stdlib.UInt_max, 25), v2009);
          const v2304 = stdlib.div(v2303, stdlib.checkedBigNumberify('./utils.rsh:89:64:decimal', stdlib.UInt_max, 25));
          const v2305 = stdlib.eq(v2304, v2009);
          if (v2305) {
            v2302 = v2303;
            }
          else {
            v2302 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v2307;
          const v2308 = stdlib.eq(v2302, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v2308) {
            v2307 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2310 = stdlib.div(v2302, stdlib.checkedBigNumberify('./utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
            v2307 = v2310;
            }
          const v2311 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:372:23:decimal', stdlib.UInt_max, 0));
          const v2312 = stdlib.lt(v2087, stdlib.checkedBigNumberify('./utils.rsh:19:38:decimal', stdlib.UInt_max, 1));
          const v2313 = v2311 ? v2312 : false;
          const v2314 = stdlib.lt(v2080, stdlib.checkedBigNumberify('./utils.rsh:12:41:decimal', stdlib.UInt_max, 110));
          const v2315 = v2313 ? v2314 : false;
          const v2316 = stdlib.ge(v2300, v2009);
          const v2317 = v2315 ? v2316 : false;
          if (v2317) {
            const v2318 = stdlib.add(v2009, v2307);
            const v2319 = [v2318, v1882];
            const v2320 = [stdlib.checkedBigNumberify('./vault.rsh:378:19:decimal', stdlib.UInt_max, 0), v2319];
            v2301 = v2320;
            }
          else {
            const v2321 = [stdlib.checkedBigNumberify('./vault.rsh:380:23:decimal', stdlib.UInt_max, 0), v1882];
            const v2322 = [stdlib.checkedBigNumberify('./vault.rsh:380:19:decimal', stdlib.UInt_max, 0), v2321];
            v2301 = v2322;
            }
          const v2324 = v2301[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 0)];
          const v2325 = v2301[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 1)];
          const v2326 = v2325[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 0)];
          const v2332 = stdlib.add(v2016, v2324);
          ;
          ;
          undefined;
          stdlib.assert(v2316, {
            at: './vault.rsh:384:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:364:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          await txn8.getOutput('api', 'v2317', ctc5, v2317);
          if (v2317) {
            const v2354 = stdlib.sub(v2332, v2332);
            ;
            ;
            let v2359;
            if (v2305) {
              v2359 = v2303;
              }
            else {
              v2359 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v2364;
            const v2365 = stdlib.eq(v2359, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v2365) {
              v2364 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v2367 = stdlib.div(v2359, stdlib.checkedBigNumberify('./utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
              v2364 = v2367;
              }
            ;
            const cv2007 = v2007;
            const cv2009 = stdlib.checkedBigNumberify('./vault.rsh:397:19:decimal', stdlib.UInt_max, 0);
            const cv2010 = v2297;
            const cv2016 = v2354;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          else {
            const cv2007 = v2007;
            const cv2009 = v2009;
            const cv2010 = v2297;
            const cv2016 = v2332;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2629 = v2296[1];
          ;
          ;
          undefined;
          const v2694 = v2629[stdlib.checkedBigNumberify('./vault.rsh:404:9:spread', stdlib.UInt_max, 0)];
          const v2696 = stdlib.mul(v2016, v2694);
          let v2697;
          const v2698 = stdlib.eq(v2696, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v2698) {
            v2697 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2699 = stdlib.mul(v2696, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v2700 = stdlib.div(v2699, v2696);
            const v2701 = stdlib.eq(v2700, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v2701) {
              v2697 = v2699;
              }
            else {
              v2697 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v2703;
          const v2704 = stdlib.eq(v2697, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2706 = v2704 ? true : v2082;
          if (v2706) {
            v2703 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2707 = stdlib.div(v2697, v2009);
            v2703 = v2707;
            }
          const v2708 = stdlib.mul(v2696, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v2709 = stdlib.div(v2708, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v2710;
          const v2711 = stdlib.eq(v2709, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2713 = v2711 ? true : v2082;
          if (v2713) {
            v2710 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2714 = stdlib.div(v2709, v2009);
            v2710 = v2714;
            }
          const v2716 = {
            collateral: v2016,
            collateralRatio: v2703,
            collateralValue: v2696,
            hf: v2710,
            vaultDebt: v2009
            };
          await txn8.getOutput('api', 'v2716', ctc8, v2716);
          const cv2007 = v2694;
          const cv2009 = v2009;
          const cv2010 = v2297;
          const cv2016 = v2016;
          
          v2007 = cv2007;
          v2009 = cv2009;
          v2010 = cv2010;
          v2016 = cv2016;
          
          continue;
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2940 = v2296[1];
          ;
          ;
          undefined;
          const v3036 = true;
          await txn8.getOutput('api', 'v3036', ctc5, v3036);
          const cv2007 = v2007;
          const cv2009 = v2009;
          const cv2010 = v2297;
          const cv2016 = v2016;
          
          v2007 = cv2007;
          v2009 = cv2009;
          v2010 = cv2010;
          v2016 = cv2016;
          
          continue;
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3251 = v2296[1];
          const v3252 = v3251[stdlib.checkedBigNumberify('./vault.rsh:346:9:spread', stdlib.UInt_max, 0)];
          const v3268 = stdlib.add(v2016, v3252);
          ;
          ;
          undefined;
          const v3359 = stdlib.gt(v3252, stdlib.checkedBigNumberify('./vault.rsh:357:37:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3359, {
            at: './vault.rsh:357:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)'],
            msg: 'Cannot deposit 0 collateral tokens',
            who: 'Minter'
            });
          const v3360 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v3360, {
            at: './vault.rsh:358:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Minter'
            });
          const v3361 = true;
          await txn8.getOutput('api', 'v3361', ctc5, v3361);
          const cv2007 = v2007;
          const cv2009 = v2009;
          const cv2010 = v2297;
          const cv2016 = v3268;
          
          v2007 = cv2007;
          v2009 = cv2009;
          v2010 = cv2010;
          v2016 = cv2016;
          
          continue;
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3565 = v2296[1];
          const v3566 = v3565[stdlib.checkedBigNumberify('./vault.rsh:208:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v3684 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v3684, {
            at: './vault.rsh:221:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Minter'
            });
          const v3685 = stdlib.gt(v3566, stdlib.checkedBigNumberify('./vault.rsh:222:32:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3685, {
            at: './vault.rsh:222:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
            msg: 'You must mint at least 1 token',
            who: 'Minter'
            });
          let v3688;
          const v3689 = stdlib.lt(v2086, v2009);
          if (v3689) {
            v3688 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3690 = stdlib.sub(v2086, v2009);
            v3688 = v3690;
            }
          let v3691;
          const v3692 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v3566);
          const v3693 = stdlib.div(v3692, stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
          const v3694 = stdlib.eq(v3693, v3566);
          if (v3694) {
            v3691 = v3692;
            }
          else {
            v3691 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v3696;
          const v3697 = stdlib.eq(v3691, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v3697) {
            v3696 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3699 = stdlib.div(v3691, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
            v3696 = v3699;
            }
          const v3700 = stdlib.sub(v3566, v3696);
          const v3701 = stdlib.add(v2009, v3700);
          let v3702;
          if (v2075) {
            v3702 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3704 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v3705 = stdlib.div(v3704, v2073);
            const v3706 = stdlib.eq(v3705, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v3706) {
              v3702 = v3704;
              }
            else {
              v3702 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v3708;
          const v3709 = stdlib.eq(v3702, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v3710 = stdlib.eq(v3701, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v3711 = v3709 ? true : v3710;
          if (v3711) {
            v3708 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3712 = stdlib.div(v3702, v3701);
            v3708 = v3712;
            }
          const v3713 = stdlib.ge(v3708, stdlib.checkedBigNumberify('./utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v3714 = stdlib.gt(v3688, stdlib.checkedBigNumberify('./vault.rsh:239:32:decimal', stdlib.UInt_max, 0));
          const v3715 = v3713 ? v3714 : false;
          const v3717 = v3715 ? v3685 : false;
          const v3718 = stdlib.le(v3566, v3688);
          const v3719 = v3717 ? v3718 : false;
          await txn8.getOutput('api', 'v3719', ctc5, v3719);
          if (v3719) {
            stdlib.assert(v3718, {
              at: './vault.rsh:245:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
              msg: 'The request mint amount is more than the maximum allowed',
              who: 'Minter'
              });
            let v3726;
            if (v3694) {
              v3726 = v3692;
              }
            else {
              v3726 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v3731;
            const v3732 = stdlib.eq(v3726, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v3732) {
              v3731 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v3734 = stdlib.div(v3726, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
              v3731 = v3734;
              }
            const v3735 = stdlib.eq(v3696, v3731);
            stdlib.assert(v3735, {
              at: './vault.rsh:247:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
              msg: null,
              who: 'Minter'
              });
            const v3737 = stdlib.eq(v3700, v3700);
            stdlib.assert(v3737, {
              at: './vault.rsh:248:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
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
            const {data: [], secs: v3740, time: v3739, didSend: v1677, from: v3738 } = txn9;
            ;
            ;
            const v3744 = stdlib.addressEq(v1880, v3738);
            stdlib.assert(v3744, {
              at: './vault.rsh:250:19:dot',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
              msg: 'sender correct',
              who: 'Minter'
              });
            ;
            ;
            const cv2007 = v2007;
            const cv2009 = v3701;
            const cv2010 = v3739;
            const cv2016 = v2016;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;
            
            }
          else {
            const cv2007 = v2007;
            const cv2009 = v2009;
            const cv2010 = v2297;
            const cv2016 = v2016;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3879 = v2296[1];
          const v3880 = v3879[stdlib.checkedBigNumberify('./vault.rsh:260:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v4080 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v4080, {
            at: './vault.rsh:277:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Minter'
            });
          const v4081 = stdlib.le(v3880, v2009);
          const v4082 = stdlib.gt(v3880, stdlib.checkedBigNumberify('./vault.rsh:279:28:decimal', stdlib.UInt_max, 0));
          const v4083 = v4081 ? v4082 : false;
          const v4084 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:280:23:decimal', stdlib.UInt_max, 0));
          const v4085 = v4083 ? v4084 : false;
          stdlib.assert(v4085, {
            at: './vault.rsh:278:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          ;
          const v4090 = stdlib.sub(v2009, v3880);
          const v4091 = stdlib.eq(v4090, stdlib.checkedBigNumberify('./vault.rsh:283:69:decimal', stdlib.UInt_max, 0));
          const v4092 = true;
          await txn8.getOutput('api', 'v4092', ctc5, v4092);
          if (v4091) {
            stdlib.assert(v4091, {
              at: './vault.rsh:286:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
              msg: null,
              who: 'Minter'
              });
            const v4104 = stdlib.sub(v2016, v2016);
            ;
            const cv2007 = v2007;
            const cv2009 = stdlib.checkedBigNumberify('./vault.rsh:288:19:decimal', stdlib.UInt_max, 0);
            const cv2010 = v2297;
            const cv2016 = v4104;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          else {
            const cv2007 = v2007;
            const cv2009 = v4090;
            const cv2010 = v2297;
            const cv2016 = v2016;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4193 = v2296[1];
          const v4194 = v4193[stdlib.checkedBigNumberify('./vault.rsh:294:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v4432 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v4432, {
            at: './vault.rsh:317:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Minter'
            });
          const v4433 = stdlib.gt(v4194, stdlib.checkedBigNumberify('./vault.rsh:318:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4433, {
            at: './vault.rsh:318:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          const v4435 = stdlib.lt(v4194, v2016);
          stdlib.assert(v4435, {
            at: './vault.rsh:319:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'Cannot withdraw more than the balance of this contract',
            who: 'Minter'
            });
          const v4436 = stdlib.gt(v2080, stdlib.checkedBigNumberify('./utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          stdlib.assert(v4436, {
            at: './vault.rsh:321:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'Vault collateral ratio is not healthy',
            who: 'Minter'
            });
          const v4438 = stdlib.sub(v2016, v4194);
          const v4439 = stdlib.mul(v4438, v2007);
          const v4440 = stdlib.gt(v4439, stdlib.checkedBigNumberify('./vault.rsh:326:11:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4440, {
            at: './vault.rsh:325:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'Collateral value after withdrawal must not be 0',
            who: 'Minter'
            });
          let v4441;
          const v4442 = stdlib.eq(v4439, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v4442) {
            v4441 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4443 = stdlib.mul(v4439, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v4444 = stdlib.div(v4443, v4439);
            const v4445 = stdlib.eq(v4444, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v4445) {
              v4441 = v4443;
              }
            else {
              v4441 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v4447;
          const v4448 = stdlib.eq(v4441, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v4450 = v4448 ? true : v2082;
          if (v4450) {
            v4447 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4451 = stdlib.div(v4441, v2009);
            v4447 = v4451;
            }
          const v4454 = v4433 ? v4436 : false;
          const v4455 = stdlib.gt(v4447, stdlib.checkedBigNumberify('./utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v4456 = v4454 ? v4455 : false;
          const v4459 = v4456 ? v4435 : false;
          await txn8.getOutput('api', 'v4459', ctc5, v4459);
          if (v4459) {
            ;
            const cv2007 = v2007;
            const cv2009 = v2009;
            const cv2010 = v2297;
            const cv2016 = v4438;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          else {
            const cv2007 = v2007;
            const cv2009 = v2009;
            const cv2010 = v2297;
            const cv2016 = v2016;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4507 = v2296[1];
          const v4508 = v4507[stdlib.checkedBigNumberify('./vault.rsh:421:9:spread', stdlib.UInt_max, 0)];
          const v4509 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:92:8:decimal', stdlib.UInt_max, 2), v4508);
          const v4510 = stdlib.div(v4509, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          const v4511 = stdlib.add(v4508, v4510);
          ;
          ;
          undefined;
          const v4792 = stdlib.div(v4508, v2007);
          const v4793 = stdlib.mul(v4792, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          const v4796 = stdlib.gt(v4508, stdlib.checkedBigNumberify('./vault.rsh:440:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4796, {
            at: './vault.rsh:440:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          const v4797 = stdlib.gt(v2007, stdlib.checkedBigNumberify('./vault.rsh:441:35:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4797, {
            at: './vault.rsh:441:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          const v4798 = stdlib.sub(v2009, v4508);
          const v4799 = stdlib.ge(v4798, stdlib.checkedBigNumberify('./vault.rsh:442:53:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4799, {
            at: './vault.rsh:442:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          stdlib.assert(v4799, {
            at: './vault.rsh:443:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          const v4803 = stdlib.ge(v2016, v4793);
          stdlib.assert(v4803, {
            at: './vault.rsh:444:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'Minter'
            });
          ;
          const v4811 = stdlib.sub(v2016, v4793);
          ;
          ;
          const v4816 = true;
          await txn8.getOutput('api', 'v4816', ctc5, v4816);
          const cv2007 = v2007;
          const cv2009 = v4798;
          const cv2010 = v2297;
          const cv2016 = v4811;
          
          v2007 = cv2007;
          v2009 = cv2009;
          v2010 = cv2010;
          v2016 = cv2016;
          
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
  
  
  const [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2158 = stdlib.protect(ctc4, await interact.in(), {
    at: './vault.rsh:1:23:application',
    fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:404:9:function exp)', 'at ./vault.rsh:181:68:application call to "runOracle_updatePrice0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'in',
    who: 'Oracle_updatePrice'
    });
  
  const v2221 = ['Oracle_updatePrice0', v2158];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095, v2221],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./vault.rsh:404:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./vault.rsh:205:14:decimal', stdlib.UInt_max, 0), v1882]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
      
      switch (v2296[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2299 = v2296[1];
          
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2629 = v2296[1];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./vault.rsh:404:9:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./vault.rsh:205:14:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v1882
            });
          undefined;
          const v2694 = v2629[stdlib.checkedBigNumberify('./vault.rsh:404:9:spread', stdlib.UInt_max, 0)];
          const v2696 = stdlib.mul(v2016, v2694);
          let v2697;
          const v2698 = stdlib.eq(v2696, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v2698) {
            v2697 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2699 = stdlib.mul(v2696, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v2700 = stdlib.div(v2699, v2696);
            const v2701 = stdlib.eq(v2700, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v2701) {
              v2697 = v2699;
              }
            else {
              v2697 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v2703;
          const v2704 = stdlib.eq(v2697, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2706 = v2704 ? true : v2082;
          if (v2706) {
            v2703 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2707 = stdlib.div(v2697, v2009);
            v2703 = v2707;
            }
          const v2708 = stdlib.mul(v2696, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v2709 = stdlib.div(v2708, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v2710;
          const v2711 = stdlib.eq(v2709, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2713 = v2711 ? true : v2082;
          if (v2713) {
            v2710 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2714 = stdlib.div(v2709, v2009);
            v2710 = v2714;
            }
          const v2716 = {
            collateral: v2016,
            collateralRatio: v2703,
            collateralValue: v2696,
            hf: v2710,
            vaultDebt: v2009
            };
          const v2717 = await txn1.getOutput('api', 'v2716', ctc7, v2716);
          
          const v63178 = v2694;
          const v63179 = v2009;
          const v63181 = v2016;
          const v63182 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
          const v63183 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
          const v63184 = v63182 ? true : v63183;
          if (v63184) {
            const v63186 = stdlib.div(v2696, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
            let v63187;
            const v63188 = stdlib.eq(v63186, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
            if (v63188) {
              v63187 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63189 = stdlib.mul(v63186, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              const v63190 = stdlib.div(v63189, v63186);
              const v63191 = stdlib.eq(v63190, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              if (v63191) {
                v63187 = v63189;
                }
              else {
                v63187 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                }
              }
            let v63192;
            const v63193 = stdlib.eq(v63187, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63194 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
            const v63195 = v63193 ? true : v63194;
            if (v63195) {
              v63192 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63196 = stdlib.div(v63187, v2009);
              v63192 = v63196;
              }
            const v63197 = stdlib.mul(v63186, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
            const v63198 = stdlib.div(v63197, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
            let v63199;
            const v63200 = stdlib.eq(v63198, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63201 = v63200 ? true : v63194;
            if (v63201) {
              v63199 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63202 = stdlib.div(v63198, v2009);
              v63199 = v63202;
              }
            const v63203 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1882
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
          const v2940 = v2296[1];
          
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3251 = v2296[1];
          
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3565 = v2296[1];
          
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3879 = v2296[1];
          
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4193 = v2296[1];
          
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4507 = v2296[1];
          
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
  const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
  switch (v2296[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2299 = v2296[1];
      return;
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2629 = v2296[1];
      ;
      ;
      undefined;
      const v2694 = v2629[stdlib.checkedBigNumberify('./vault.rsh:404:9:spread', stdlib.UInt_max, 0)];
      const v2696 = stdlib.mul(v2016, v2694);
      let v2697;
      const v2698 = stdlib.eq(v2696, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
      if (v2698) {
        v2697 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2699 = stdlib.mul(v2696, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        const v2700 = stdlib.div(v2699, v2696);
        const v2701 = stdlib.eq(v2700, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        if (v2701) {
          v2697 = v2699;
          }
        else {
          v2697 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
          }
        }
      let v2703;
      const v2704 = stdlib.eq(v2697, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      const v2706 = v2704 ? true : v2082;
      if (v2706) {
        v2703 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2707 = stdlib.div(v2697, v2009);
        v2703 = v2707;
        }
      const v2708 = stdlib.mul(v2696, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
      const v2709 = stdlib.div(v2708, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
      let v2710;
      const v2711 = stdlib.eq(v2709, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      const v2713 = v2711 ? true : v2082;
      if (v2713) {
        v2710 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2714 = stdlib.div(v2709, v2009);
        v2710 = v2714;
        }
      const v2716 = {
        collateral: v2016,
        collateralRatio: v2703,
        collateralValue: v2696,
        hf: v2710,
        vaultDebt: v2009
        };
      const v2717 = await txn1.getOutput('api', 'v2716', ctc7, v2716);
      if (v1495) {
        stdlib.protect(ctc8, await interact.out(v2629, v2717), {
          at: './vault.rsh:404:9:application',
          fs: ['at ./vault.rsh:404:9:application call to [unknown function] (defined at: ./vault.rsh:404:9:function exp)', 'at ./vault.rsh:411:16:application call to "apiReturn" (defined at: ./vault.rsh:404:9:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:404:9:function exp)'],
          msg: 'out',
          who: 'Oracle_updatePrice'
          });
        }
      else {
        }
      
      const v63178 = v2694;
      const v63179 = v2009;
      const v63181 = v2016;
      const v63182 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
      const v63183 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
      const v63184 = v63182 ? true : v63183;
      if (v63184) {
        const v63186 = stdlib.div(v2696, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
        let v63187;
        const v63188 = stdlib.eq(v63186, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
        if (v63188) {
          v63187 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63189 = stdlib.mul(v63186, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          const v63190 = stdlib.div(v63189, v63186);
          const v63191 = stdlib.eq(v63190, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          if (v63191) {
            v63187 = v63189;
            }
          else {
            v63187 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          }
        let v63192;
        const v63193 = stdlib.eq(v63187, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63194 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
        const v63195 = v63193 ? true : v63194;
        if (v63195) {
          v63192 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63196 = stdlib.div(v63187, v2009);
          v63192 = v63196;
          }
        const v63197 = stdlib.mul(v63186, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
        const v63198 = stdlib.div(v63197, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
        let v63199;
        const v63200 = stdlib.eq(v63198, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63201 = v63200 ? true : v63194;
        if (v63201) {
          v63199 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63202 = stdlib.div(v63198, v2009);
          v63199 = v63202;
          }
        const v63203 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2940 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3251 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3565 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3879 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4193 = v2296[1];
      return;
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4507 = v2296[1];
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
  
  
  const [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2184 = stdlib.protect(ctc4, await interact.in(), {
    at: './vault.rsh:1:23:application',
    fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:457:9:function exp)', 'at ./vault.rsh:181:68:application call to "runRecoveryToggler_toggleRecoveryMode0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'in',
    who: 'RecoveryToggler_toggleRecoveryMode'
    });
  
  const v2229 = ['RecoveryToggler_toggleRecoveryMode0', v2184];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095, v2229],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./vault.rsh:457:9:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./vault.rsh:205:14:decimal', stdlib.UInt_max, 0), v1882]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
      
      switch (v2296[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2299 = v2296[1];
          
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2629 = v2296[1];
          
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2940 = v2296[1];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./vault.rsh:457:9:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./vault.rsh:205:14:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v1882
            });
          undefined;
          const v3036 = true;
          const v3037 = await txn1.getOutput('api', 'v3036', ctc3, v3036);
          
          const v63222 = v2007;
          const v63223 = v2009;
          const v63225 = v2016;
          const v63226 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
          const v63227 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
          const v63228 = v63226 ? true : v63227;
          if (v63228) {
            const v63229 = stdlib.mul(v2016, v2007);
            const v63230 = stdlib.div(v63229, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
            let v63231;
            const v63232 = stdlib.eq(v63230, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
            if (v63232) {
              v63231 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63233 = stdlib.mul(v63230, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              const v63234 = stdlib.div(v63233, v63230);
              const v63235 = stdlib.eq(v63234, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              if (v63235) {
                v63231 = v63233;
                }
              else {
                v63231 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                }
              }
            let v63236;
            const v63237 = stdlib.eq(v63231, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63238 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
            const v63239 = v63237 ? true : v63238;
            if (v63239) {
              v63236 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63240 = stdlib.div(v63231, v2009);
              v63236 = v63240;
              }
            const v63241 = stdlib.mul(v63230, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
            const v63242 = stdlib.div(v63241, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
            let v63243;
            const v63244 = stdlib.eq(v63242, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63245 = v63244 ? true : v63238;
            if (v63245) {
              v63243 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63246 = stdlib.div(v63242, v2009);
              v63243 = v63246;
              }
            const v63247 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1882
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
          const v3251 = v2296[1];
          
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3565 = v2296[1];
          
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3879 = v2296[1];
          
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4193 = v2296[1];
          
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4507 = v2296[1];
          
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
  const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
  switch (v2296[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2299 = v2296[1];
      return;
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2629 = v2296[1];
      return;
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2940 = v2296[1];
      ;
      ;
      undefined;
      const v3036 = true;
      const v3037 = await txn1.getOutput('api', 'v3036', ctc3, v3036);
      if (v1495) {
        stdlib.protect(ctc7, await interact.out(v2940, v3037), {
          at: './vault.rsh:457:9:application',
          fs: ['at ./vault.rsh:457:9:application call to [unknown function] (defined at: ./vault.rsh:457:9:function exp)', 'at ./vault.rsh:458:16:application call to "apiReturn" (defined at: ./vault.rsh:457:9:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:457:9:function exp)'],
          msg: 'out',
          who: 'RecoveryToggler_toggleRecoveryMode'
          });
        }
      else {
        }
      
      const v63222 = v2007;
      const v63223 = v2009;
      const v63225 = v2016;
      const v63226 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
      const v63227 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
      const v63228 = v63226 ? true : v63227;
      if (v63228) {
        const v63229 = stdlib.mul(v2016, v2007);
        const v63230 = stdlib.div(v63229, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
        let v63231;
        const v63232 = stdlib.eq(v63230, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
        if (v63232) {
          v63231 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63233 = stdlib.mul(v63230, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          const v63234 = stdlib.div(v63233, v63230);
          const v63235 = stdlib.eq(v63234, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          if (v63235) {
            v63231 = v63233;
            }
          else {
            v63231 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          }
        let v63236;
        const v63237 = stdlib.eq(v63231, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63238 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
        const v63239 = v63237 ? true : v63238;
        if (v63239) {
          v63236 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63240 = stdlib.div(v63231, v2009);
          v63236 = v63240;
          }
        const v63241 = stdlib.mul(v63230, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
        const v63242 = stdlib.div(v63241, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
        let v63243;
        const v63244 = stdlib.eq(v63242, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63245 = v63244 ? true : v63238;
        if (v63245) {
          v63243 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63246 = stdlib.div(v63242, v2009);
          v63243 = v63246;
          }
        const v63247 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3251 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3565 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3879 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4193 = v2296[1];
      return;
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4507 = v2296[1];
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
  const {data: [], secs: v1873, time: v1872, didSend: v19, from: v1871 } = txn1;
  ;
  const v1877 = stdlib.protect(ctc0, await interact.getCollateralPrice(), {
    at: './vault.rsh:100:74:application',
    fs: ['at ./vault.rsh:99:15:application call to [unknown function] (defined at: ./vault.rsh:99:19:function exp)'],
    msg: 'getCollateralPrice',
    who: 'Reserve'
    });
  const v1878 = stdlib.protect(ctc1, await interact.getToken(), {
    at: './vault.rsh:101:52:application',
    fs: ['at ./vault.rsh:99:15:application call to [unknown function] (defined at: ./vault.rsh:99:19:function exp)'],
    msg: 'getToken',
    who: 'Reserve'
    });
  const v1879 = stdlib.gt(v1877, stdlib.checkedBigNumberify('./vault.rsh:102:37:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1879, {
    at: './vault.rsh:102:11:application',
    fs: ['at ./vault.rsh:99:15:application call to [unknown function] (defined at: ./vault.rsh:99:19:function exp)'],
    msg: null,
    who: 'Reserve'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v1871, v1877, v1878],
    evt_cnt: 2,
    funcNum: 1,
    lct: v1872,
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v1881, v1882], secs: v1884, time: v1883, didSend: v32, from: v1880 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1882
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v1886 = stdlib.gt(v1881, stdlib.checkedBigNumberify('./vault.rsh:106:36:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v1886, {
        at: './vault.rsh:106:10:application',
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
  const {data: [v1881, v1882], secs: v1884, time: v1883, didSend: v32, from: v1880 } = txn2;
  ;
  ;
  const v1886 = stdlib.gt(v1881, stdlib.checkedBigNumberify('./vault.rsh:106:36:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1886, {
    at: './vault.rsh:106:10:application',
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
  const {data: [v1912, v1913, v1914, v1915, v1916, v1917], secs: v1919, time: v1918, didSend: v76, from: v1911 } = txn3;
  ;
  const v1921 = stdlib.addressEq(v1871, v1911);
  stdlib.assert(v1921, {
    at: './vault.rsh:128:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Reserve'
    });
  const v1922 = stdlib.le(v1913, v1915);
  stdlib.assert(v1922, {
    at: './vault.rsh:136:10:application',
    fs: [],
    msg: 'initial debt <= initialMaximumMint',
    who: 'Reserve'
    });
  const v1923 = stdlib.gt(v1912, stdlib.checkedBigNumberify('./vault.rsh:138:31:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1923, {
    at: './vault.rsh:138:10:application',
    fs: [],
    msg: null,
    who: 'Reserve'
    });
  const v1924 = stdlib.gt(v1913, stdlib.checkedBigNumberify('./vault.rsh:139:30:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1924, {
    at: './vault.rsh:139:10:application',
    fs: [],
    msg: null,
    who: 'Reserve'
    });
  const v1925 = stdlib.mul(v1912, v1881);
  const v1926 = stdlib.div(v1925, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
  const v1927 = stdlib.eq(v1914, v1926);
  stdlib.assert(v1927, {
    at: './vault.rsh:140:10:application',
    fs: [],
    msg: null,
    who: 'Reserve'
    });
  const v1928 = stdlib.mul(v1914, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
  const v1929 = stdlib.div(v1928, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
  let v1930;
  const v1931 = stdlib.lt(v1929, stdlib.checkedBigNumberify('./vault.rsh:142:69:decimal', stdlib.UInt_max, 0));
  if (v1931) {
    v1930 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    v1930 = v1929;
    }
  const v1932 = stdlib.eq(v1915, v1930);
  stdlib.assert(v1932, {
    at: './vault.rsh:142:10:application',
    fs: [],
    msg: null,
    who: 'Reserve'
    });
  let v1933;
  const v1934 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v1913);
  const v1935 = stdlib.div(v1934, stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
  const v1936 = stdlib.eq(v1935, v1913);
  if (v1936) {
    v1933 = v1934;
    }
  else {
    v1933 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
    }
  let v1938;
  const v1939 = stdlib.eq(v1933, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  if (v1939) {
    v1938 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1941 = stdlib.div(v1933, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
    v1938 = v1941;
    }
  const v1942 = stdlib.eq(v1916, v1938);
  stdlib.assert(v1942, {
    at: './vault.rsh:143:10:application',
    fs: [],
    msg: null,
    who: 'Reserve'
    });
  const v1943 = stdlib.gt(v1916, stdlib.checkedBigNumberify('./vault.rsh:144:28:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v1943, {
    at: './vault.rsh:144:10:application',
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
  const {data: [], secs: v1946, time: v1945, didSend: v109, from: v1944 } = txn4;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1954, time: v1953, didSend: v120, from: v1952 } = txn5;
  ;
  const v1957 = stdlib.addressEq(v1871, v1952);
  stdlib.assert(v1957, {
    at: './vault.rsh:153:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Reserve'
    });
  const txn6 = await (ctc.sendrecv({
    args: [v1871, v1880, v1881, v1882, v1912, v1913, v1914, v1916, v1917, v1929, v1944],
    evt_cnt: 0,
    funcNum: 5,
    lct: v1953,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./vault.rsh:157:11:dot', stdlib.UInt_max, 0), [[v1913, v1882]]],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v1960, time: v1959, didSend: v128, from: v1958 } = txn6;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./vault.rsh:157:11:dot', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: v1913,
        kind: 'to',
        tok: v1882
        });
      const v1964 = stdlib.addressEq(v1880, v1958);
      stdlib.assert(v1964, {
        at: './vault.rsh:157:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Reserve'
        });
      const v1965 = stdlib.sub(v1913, v1916);
      sim_r.txns.push({
        amt: v1965,
        kind: 'from',
        to: v1871,
        tok: v1882
        });
      sim_r.txns.push({
        amt: v1916,
        kind: 'from',
        to: v1944,
        tok: v1882
        });
      let v1974;
      const v1975 = stdlib.eq(v1914, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
      if (v1975) {
        v1974 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1976 = stdlib.mul(v1914, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        const v1977 = stdlib.div(v1976, v1914);
        const v1978 = stdlib.eq(v1977, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        if (v1978) {
          v1974 = v1976;
          }
        else {
          v1974 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
          }
        }
      let v1980;
      const v1981 = stdlib.eq(v1974, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      const v1982 = stdlib.eq(v1965, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
      const v1983 = v1981 ? true : v1982;
      if (v1983) {
        v1980 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1984 = stdlib.div(v1974, v1965);
        v1980 = v1984;
        }
      let v1988;
      const v1989 = stdlib.eq(v1929, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      const v1991 = v1989 ? true : v1982;
      if (v1991) {
        v1988 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1992 = stdlib.div(v1929, v1965);
        v1988 = v1992;
        }
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc2, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1960, time: v1959, didSend: v128, from: v1958 } = txn6;
  ;
  ;
  const v1964 = stdlib.addressEq(v1880, v1958);
  stdlib.assert(v1964, {
    at: './vault.rsh:157:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Reserve'
    });
  const v1965 = stdlib.sub(v1913, v1916);
  ;
  ;
  let v1974;
  const v1975 = stdlib.eq(v1914, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
  if (v1975) {
    v1974 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1976 = stdlib.mul(v1914, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
    const v1977 = stdlib.div(v1976, v1914);
    const v1978 = stdlib.eq(v1977, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
    if (v1978) {
      v1974 = v1976;
      }
    else {
      v1974 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
      }
    }
  let v1980;
  const v1981 = stdlib.eq(v1974, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  const v1982 = stdlib.eq(v1965, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
  const v1983 = v1981 ? true : v1982;
  if (v1983) {
    v1980 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1984 = stdlib.div(v1974, v1965);
    v1980 = v1984;
    }
  let v1988;
  const v1989 = stdlib.eq(v1929, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
  const v1991 = v1989 ? true : v1982;
  if (v1991) {
    v1988 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v1992 = stdlib.div(v1929, v1965);
    v1988 = v1992;
    }
  const txn7 = await (ctc.sendrecv({
    args: [v1880, v1881, v1882, v1912, v1914, v1917, v1944, v1965, v1980, v1988],
    evt_cnt: 0,
    funcNum: 6,
    lct: v1959,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn7) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v1996, time: v1995, didSend: v168, from: v1994 } = txn7;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v1998 = stdlib.addressEq(v1880, v1994);
      stdlib.assert(v1998, {
        at: './vault.rsh:176:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Reserve'
        });
      const v2007 = v1881;
      const v2009 = v1965;
      const v2010 = v1995;
      const v2016 = v1912;
      
      if (await (async () => {
        const v2067 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
        const v2069 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
        const v2070 = v2067 ? true : v2069;
        
        return v2070;})()) {
        const v2072 = stdlib.mul(v2016, v2007);
        const v2073 = stdlib.div(v2072, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
        let v2074;
        const v2075 = stdlib.eq(v2073, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
        if (v2075) {
          v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2076 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          const v2077 = stdlib.div(v2076, v2073);
          const v2078 = stdlib.eq(v2077, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          if (v2078) {
            v2074 = v2076;
            }
          else {
            v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          }
        let v2080;
        const v2081 = stdlib.eq(v2074, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v2082 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
        const v2083 = v2081 ? true : v2082;
        if (v2083) {
          v2080 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2084 = stdlib.div(v2074, v2009);
          v2080 = v2084;
          }
        const v2085 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
        const v2086 = stdlib.div(v2085, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
        let v2087;
        const v2088 = stdlib.eq(v2086, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v2090 = v2088 ? true : v2082;
        if (v2090) {
          v2087 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2091 = stdlib.div(v2086, v2009);
          v2087 = v2091;
          }
        const v2095 = stdlib.add(v2010, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v1882
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
  const {data: [], secs: v1996, time: v1995, didSend: v168, from: v1994 } = txn7;
  ;
  const v1998 = stdlib.addressEq(v1880, v1994);
  stdlib.assert(v1998, {
    at: './vault.rsh:176:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Reserve'
    });
  let v2007 = v1881;
  let v2009 = v1965;
  let v2010 = v1995;
  let v2016 = v1912;
  
  while (await (async () => {
    const v2067 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
    const v2069 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
    const v2070 = v2067 ? true : v2069;
    
    return v2070;})()) {
    const v2072 = stdlib.mul(v2016, v2007);
    const v2073 = stdlib.div(v2072, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
    let v2074;
    const v2075 = stdlib.eq(v2073, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
    if (v2075) {
      v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2076 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
      const v2077 = stdlib.div(v2076, v2073);
      const v2078 = stdlib.eq(v2077, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
      if (v2078) {
        v2074 = v2076;
        }
      else {
        v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
        }
      }
    let v2080;
    const v2081 = stdlib.eq(v2074, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
    const v2082 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
    const v2083 = v2081 ? true : v2082;
    if (v2083) {
      v2080 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2084 = stdlib.div(v2074, v2009);
      v2080 = v2084;
      }
    const v2085 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
    const v2086 = stdlib.div(v2085, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
    let v2087;
    const v2088 = stdlib.eq(v2086, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
    const v2090 = v2088 ? true : v2082;
    if (v2090) {
      v2087 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v2091 = stdlib.div(v2086, v2009);
      v2087 = v2091;
      }
    const v2095 = stdlib.add(v2010, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc6],
      timeoutAt: ['time', v2095],
      waitIfNotPresent: false
      }));
    if (txn8.didTimeout) {
      const txn9 = await (ctc.sendrecv({
        args: [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095],
        evt_cnt: 0,
        funcNum: 9,
        lct: v2010,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v4826, time: v4825, didSend: v1820, from: v4824 } = txn9;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./vault.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv2007 = v2007;
          const cv2009 = v2009;
          const cv2010 = v4825;
          const cv2016 = v2016;
          
          await (async () => {
            const v2007 = cv2007;
            const v2009 = cv2009;
            const v2010 = cv2010;
            const v2016 = cv2016;
            
            if (await (async () => {
              const v2067 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
              const v2069 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
              const v2070 = v2067 ? true : v2069;
              
              return v2070;})()) {
              const v2072 = stdlib.mul(v2016, v2007);
              const v2073 = stdlib.div(v2072, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v2074;
              const v2075 = stdlib.eq(v2073, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v2075) {
                v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2076 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v2077 = stdlib.div(v2076, v2073);
                const v2078 = stdlib.eq(v2077, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v2078) {
                  v2074 = v2076;
                  }
                else {
                  v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v2080;
              const v2081 = stdlib.eq(v2074, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v2082 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v2083 = v2081 ? true : v2082;
              if (v2083) {
                v2080 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2084 = stdlib.div(v2074, v2009);
                v2080 = v2084;
                }
              const v2085 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v2086 = stdlib.div(v2085, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v2087;
              const v2088 = stdlib.eq(v2086, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v2090 = v2088 ? true : v2082;
              if (v2090) {
                v2087 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2091 = stdlib.div(v2086, v2009);
                v2087 = v2091;
                }
              const v2095 = stdlib.add(v2010, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1882
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
      const {data: [], secs: v4826, time: v4825, didSend: v1820, from: v4824 } = txn9;
      ;
      const cv2007 = v2007;
      const cv2009 = v2009;
      const cv2010 = v4825;
      const cv2016 = v2016;
      
      v2007 = cv2007;
      v2009 = cv2009;
      v2010 = cv2010;
      v2016 = cv2016;
      
      continue;
      }
    else {
      const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn8;
      switch (v2296[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2299 = v2296[1];
          const v2300 = v2299[stdlib.checkedBigNumberify('./vault.rsh:364:9:spread', stdlib.UInt_max, 0)];
          let v2301;
          let v2302;
          const v2303 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:89:64:decimal', stdlib.UInt_max, 25), v2009);
          const v2304 = stdlib.div(v2303, stdlib.checkedBigNumberify('./utils.rsh:89:64:decimal', stdlib.UInt_max, 25));
          const v2305 = stdlib.eq(v2304, v2009);
          if (v2305) {
            v2302 = v2303;
            }
          else {
            v2302 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v2307;
          const v2308 = stdlib.eq(v2302, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v2308) {
            v2307 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2310 = stdlib.div(v2302, stdlib.checkedBigNumberify('./utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
            v2307 = v2310;
            }
          const v2311 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:372:23:decimal', stdlib.UInt_max, 0));
          const v2312 = stdlib.lt(v2087, stdlib.checkedBigNumberify('./utils.rsh:19:38:decimal', stdlib.UInt_max, 1));
          const v2313 = v2311 ? v2312 : false;
          const v2314 = stdlib.lt(v2080, stdlib.checkedBigNumberify('./utils.rsh:12:41:decimal', stdlib.UInt_max, 110));
          const v2315 = v2313 ? v2314 : false;
          const v2316 = stdlib.ge(v2300, v2009);
          const v2317 = v2315 ? v2316 : false;
          if (v2317) {
            const v2318 = stdlib.add(v2009, v2307);
            const v2319 = [v2318, v1882];
            const v2320 = [stdlib.checkedBigNumberify('./vault.rsh:378:19:decimal', stdlib.UInt_max, 0), v2319];
            v2301 = v2320;
            }
          else {
            const v2321 = [stdlib.checkedBigNumberify('./vault.rsh:380:23:decimal', stdlib.UInt_max, 0), v1882];
            const v2322 = [stdlib.checkedBigNumberify('./vault.rsh:380:19:decimal', stdlib.UInt_max, 0), v2321];
            v2301 = v2322;
            }
          const v2324 = v2301[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 0)];
          const v2325 = v2301[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 1)];
          const v2326 = v2325[stdlib.checkedBigNumberify('./vault.rsh:205:14:array', stdlib.UInt_max, 0)];
          const v2332 = stdlib.add(v2016, v2324);
          ;
          ;
          undefined;
          stdlib.assert(v2316, {
            at: './vault.rsh:384:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:364:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          await txn8.getOutput('api', 'v2317', ctc4, v2317);
          if (v2317) {
            const v2354 = stdlib.sub(v2332, v2332);
            ;
            ;
            let v2359;
            if (v2305) {
              v2359 = v2303;
              }
            else {
              v2359 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v2364;
            const v2365 = stdlib.eq(v2359, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v2365) {
              v2364 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v2367 = stdlib.div(v2359, stdlib.checkedBigNumberify('./utils.rsh:89:75:decimal', stdlib.UInt_max, 1000));
              v2364 = v2367;
              }
            ;
            const cv2007 = v2007;
            const cv2009 = stdlib.checkedBigNumberify('./vault.rsh:397:19:decimal', stdlib.UInt_max, 0);
            const cv2010 = v2297;
            const cv2016 = v2354;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          else {
            const cv2007 = v2007;
            const cv2009 = v2009;
            const cv2010 = v2297;
            const cv2016 = v2332;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2629 = v2296[1];
          ;
          ;
          undefined;
          const v2694 = v2629[stdlib.checkedBigNumberify('./vault.rsh:404:9:spread', stdlib.UInt_max, 0)];
          const v2696 = stdlib.mul(v2016, v2694);
          let v2697;
          const v2698 = stdlib.eq(v2696, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v2698) {
            v2697 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2699 = stdlib.mul(v2696, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v2700 = stdlib.div(v2699, v2696);
            const v2701 = stdlib.eq(v2700, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v2701) {
              v2697 = v2699;
              }
            else {
              v2697 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v2703;
          const v2704 = stdlib.eq(v2697, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2706 = v2704 ? true : v2082;
          if (v2706) {
            v2703 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2707 = stdlib.div(v2697, v2009);
            v2703 = v2707;
            }
          const v2708 = stdlib.mul(v2696, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v2709 = stdlib.div(v2708, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v2710;
          const v2711 = stdlib.eq(v2709, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v2713 = v2711 ? true : v2082;
          if (v2713) {
            v2710 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2714 = stdlib.div(v2709, v2009);
            v2710 = v2714;
            }
          const v2716 = {
            collateral: v2016,
            collateralRatio: v2703,
            collateralValue: v2696,
            hf: v2710,
            vaultDebt: v2009
            };
          await txn8.getOutput('api', 'v2716', ctc7, v2716);
          const cv2007 = v2694;
          const cv2009 = v2009;
          const cv2010 = v2297;
          const cv2016 = v2016;
          
          v2007 = cv2007;
          v2009 = cv2009;
          v2010 = cv2010;
          v2016 = cv2016;
          
          continue;
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2940 = v2296[1];
          ;
          ;
          undefined;
          const v3036 = true;
          await txn8.getOutput('api', 'v3036', ctc4, v3036);
          const cv2007 = v2007;
          const cv2009 = v2009;
          const cv2010 = v2297;
          const cv2016 = v2016;
          
          v2007 = cv2007;
          v2009 = cv2009;
          v2010 = cv2010;
          v2016 = cv2016;
          
          continue;
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3251 = v2296[1];
          const v3252 = v3251[stdlib.checkedBigNumberify('./vault.rsh:346:9:spread', stdlib.UInt_max, 0)];
          const v3268 = stdlib.add(v2016, v3252);
          ;
          ;
          undefined;
          const v3359 = stdlib.gt(v3252, stdlib.checkedBigNumberify('./vault.rsh:357:37:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3359, {
            at: './vault.rsh:357:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)'],
            msg: 'Cannot deposit 0 collateral tokens',
            who: 'Reserve'
            });
          const v3360 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v3360, {
            at: './vault.rsh:358:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Reserve'
            });
          const v3361 = true;
          await txn8.getOutput('api', 'v3361', ctc4, v3361);
          const cv2007 = v2007;
          const cv2009 = v2009;
          const cv2010 = v2297;
          const cv2016 = v3268;
          
          v2007 = cv2007;
          v2009 = cv2009;
          v2010 = cv2010;
          v2016 = cv2016;
          
          continue;
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3565 = v2296[1];
          const v3566 = v3565[stdlib.checkedBigNumberify('./vault.rsh:208:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v3684 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v3684, {
            at: './vault.rsh:221:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Reserve'
            });
          const v3685 = stdlib.gt(v3566, stdlib.checkedBigNumberify('./vault.rsh:222:32:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3685, {
            at: './vault.rsh:222:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
            msg: 'You must mint at least 1 token',
            who: 'Reserve'
            });
          let v3688;
          const v3689 = stdlib.lt(v2086, v2009);
          if (v3689) {
            v3688 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3690 = stdlib.sub(v2086, v2009);
            v3688 = v3690;
            }
          let v3691;
          const v3692 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v3566);
          const v3693 = stdlib.div(v3692, stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
          const v3694 = stdlib.eq(v3693, v3566);
          if (v3694) {
            v3691 = v3692;
            }
          else {
            v3691 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v3696;
          const v3697 = stdlib.eq(v3691, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v3697) {
            v3696 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3699 = stdlib.div(v3691, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
            v3696 = v3699;
            }
          const v3700 = stdlib.sub(v3566, v3696);
          const v3701 = stdlib.add(v2009, v3700);
          let v3702;
          if (v2075) {
            v3702 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3704 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v3705 = stdlib.div(v3704, v2073);
            const v3706 = stdlib.eq(v3705, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v3706) {
              v3702 = v3704;
              }
            else {
              v3702 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v3708;
          const v3709 = stdlib.eq(v3702, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v3710 = stdlib.eq(v3701, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v3711 = v3709 ? true : v3710;
          if (v3711) {
            v3708 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3712 = stdlib.div(v3702, v3701);
            v3708 = v3712;
            }
          const v3713 = stdlib.ge(v3708, stdlib.checkedBigNumberify('./utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v3714 = stdlib.gt(v3688, stdlib.checkedBigNumberify('./vault.rsh:239:32:decimal', stdlib.UInt_max, 0));
          const v3715 = v3713 ? v3714 : false;
          const v3717 = v3715 ? v3685 : false;
          const v3718 = stdlib.le(v3566, v3688);
          const v3719 = v3717 ? v3718 : false;
          await txn8.getOutput('api', 'v3719', ctc4, v3719);
          if (v3719) {
            stdlib.assert(v3718, {
              at: './vault.rsh:245:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
              msg: 'The request mint amount is more than the maximum allowed',
              who: 'Reserve'
              });
            let v3726;
            if (v3694) {
              v3726 = v3692;
              }
            else {
              v3726 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v3731;
            const v3732 = stdlib.eq(v3726, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v3732) {
              v3731 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v3734 = stdlib.div(v3726, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
              v3731 = v3734;
              }
            const v3735 = stdlib.eq(v3696, v3731);
            stdlib.assert(v3735, {
              at: './vault.rsh:247:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
              msg: null,
              who: 'Reserve'
              });
            const v3737 = stdlib.eq(v3700, v3700);
            stdlib.assert(v3737, {
              at: './vault.rsh:248:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
              msg: null,
              who: 'Reserve'
              });
            const txn9 = await (ctc.sendrecv({
              args: [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2080, v2087, v3566, v3696, v3700, v3701],
              evt_cnt: 0,
              funcNum: 10,
              lct: v2297,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./vault.rsh:250:19:dot', stdlib.UInt_max, 0), [[v3566, v1882]]],
              sim_p: (async (txn9) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v3740, time: v3739, didSend: v1677, from: v3738 } = txn9;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./vault.rsh:250:19:dot', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                sim_r.txns.push({
                  amt: v3566,
                  kind: 'to',
                  tok: v1882
                  });
                const v3744 = stdlib.addressEq(v1880, v3738);
                stdlib.assert(v3744, {
                  at: './vault.rsh:250:19:dot',
                  fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
                  msg: 'sender correct',
                  who: 'Reserve'
                  });
                sim_r.txns.push({
                  amt: v3700,
                  kind: 'from',
                  to: v1917,
                  tok: v1882
                  });
                sim_r.txns.push({
                  amt: v3696,
                  kind: 'from',
                  to: v1944,
                  tok: v1882
                  });
                const cv2007 = v2007;
                const cv2009 = v3701;
                const cv2010 = v3739;
                const cv2016 = v2016;
                
                await (async () => {
                  const v2007 = cv2007;
                  const v2009 = cv2009;
                  const v2010 = cv2010;
                  const v2016 = cv2016;
                  
                  if (await (async () => {
                    const v2067 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
                    const v2069 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
                    const v2070 = v2067 ? true : v2069;
                    
                    return v2070;})()) {
                    const v2072 = stdlib.mul(v2016, v2007);
                    const v2073 = stdlib.div(v2072, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
                    let v2074;
                    const v2075 = stdlib.eq(v2073, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
                    if (v2075) {
                      v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                      }
                    else {
                      const v2076 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                      const v2077 = stdlib.div(v2076, v2073);
                      const v2078 = stdlib.eq(v2077, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                      if (v2078) {
                        v2074 = v2076;
                        }
                      else {
                        v2074 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                        }
                      }
                    let v2080;
                    const v2081 = stdlib.eq(v2074, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
                    const v2082 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
                    const v2083 = v2081 ? true : v2082;
                    if (v2083) {
                      v2080 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                      }
                    else {
                      const v2084 = stdlib.div(v2074, v2009);
                      v2080 = v2084;
                      }
                    const v2085 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
                    const v2086 = stdlib.div(v2085, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
                    let v2087;
                    const v2088 = stdlib.eq(v2086, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
                    const v2090 = v2088 ? true : v2082;
                    if (v2090) {
                      v2087 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                      }
                    else {
                      const v2091 = stdlib.div(v2086, v2009);
                      v2087 = v2091;
                      }
                    const v2095 = stdlib.add(v2010, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v1882
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
            const {data: [], secs: v3740, time: v3739, didSend: v1677, from: v3738 } = txn9;
            ;
            ;
            const v3744 = stdlib.addressEq(v1880, v3738);
            stdlib.assert(v3744, {
              at: './vault.rsh:250:19:dot',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
              msg: 'sender correct',
              who: 'Reserve'
              });
            ;
            ;
            const cv2007 = v2007;
            const cv2009 = v3701;
            const cv2010 = v3739;
            const cv2016 = v2016;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;
            
            }
          else {
            const cv2007 = v2007;
            const cv2009 = v2009;
            const cv2010 = v2297;
            const cv2016 = v2016;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3879 = v2296[1];
          const v3880 = v3879[stdlib.checkedBigNumberify('./vault.rsh:260:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v4080 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v4080, {
            at: './vault.rsh:277:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Reserve'
            });
          const v4081 = stdlib.le(v3880, v2009);
          const v4082 = stdlib.gt(v3880, stdlib.checkedBigNumberify('./vault.rsh:279:28:decimal', stdlib.UInt_max, 0));
          const v4083 = v4081 ? v4082 : false;
          const v4084 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:280:23:decimal', stdlib.UInt_max, 0));
          const v4085 = v4083 ? v4084 : false;
          stdlib.assert(v4085, {
            at: './vault.rsh:278:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          ;
          const v4090 = stdlib.sub(v2009, v3880);
          const v4091 = stdlib.eq(v4090, stdlib.checkedBigNumberify('./vault.rsh:283:69:decimal', stdlib.UInt_max, 0));
          const v4092 = true;
          await txn8.getOutput('api', 'v4092', ctc4, v4092);
          if (v4091) {
            stdlib.assert(v4091, {
              at: './vault.rsh:286:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
              msg: null,
              who: 'Reserve'
              });
            const v4104 = stdlib.sub(v2016, v2016);
            ;
            const cv2007 = v2007;
            const cv2009 = stdlib.checkedBigNumberify('./vault.rsh:288:19:decimal', stdlib.UInt_max, 0);
            const cv2010 = v2297;
            const cv2016 = v4104;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          else {
            const cv2007 = v2007;
            const cv2009 = v4090;
            const cv2010 = v2297;
            const cv2016 = v2016;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4193 = v2296[1];
          const v4194 = v4193[stdlib.checkedBigNumberify('./vault.rsh:294:9:spread', stdlib.UInt_max, 0)];
          ;
          ;
          undefined;
          const v4432 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v4432, {
            at: './vault.rsh:317:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'Reserve'
            });
          const v4433 = stdlib.gt(v4194, stdlib.checkedBigNumberify('./vault.rsh:318:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4433, {
            at: './vault.rsh:318:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          const v4435 = stdlib.lt(v4194, v2016);
          stdlib.assert(v4435, {
            at: './vault.rsh:319:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'Cannot withdraw more than the balance of this contract',
            who: 'Reserve'
            });
          const v4436 = stdlib.gt(v2080, stdlib.checkedBigNumberify('./utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          stdlib.assert(v4436, {
            at: './vault.rsh:321:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'Vault collateral ratio is not healthy',
            who: 'Reserve'
            });
          const v4438 = stdlib.sub(v2016, v4194);
          const v4439 = stdlib.mul(v4438, v2007);
          const v4440 = stdlib.gt(v4439, stdlib.checkedBigNumberify('./vault.rsh:326:11:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4440, {
            at: './vault.rsh:325:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'Collateral value after withdrawal must not be 0',
            who: 'Reserve'
            });
          let v4441;
          const v4442 = stdlib.eq(v4439, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v4442) {
            v4441 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4443 = stdlib.mul(v4439, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v4444 = stdlib.div(v4443, v4439);
            const v4445 = stdlib.eq(v4444, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v4445) {
              v4441 = v4443;
              }
            else {
              v4441 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v4447;
          const v4448 = stdlib.eq(v4441, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v4450 = v4448 ? true : v2082;
          if (v4450) {
            v4447 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4451 = stdlib.div(v4441, v2009);
            v4447 = v4451;
            }
          const v4454 = v4433 ? v4436 : false;
          const v4455 = stdlib.gt(v4447, stdlib.checkedBigNumberify('./utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v4456 = v4454 ? v4455 : false;
          const v4459 = v4456 ? v4435 : false;
          await txn8.getOutput('api', 'v4459', ctc4, v4459);
          if (v4459) {
            ;
            const cv2007 = v2007;
            const cv2009 = v2009;
            const cv2010 = v2297;
            const cv2016 = v4438;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          else {
            const cv2007 = v2007;
            const cv2009 = v2009;
            const cv2010 = v2297;
            const cv2016 = v2016;
            
            v2007 = cv2007;
            v2009 = cv2009;
            v2010 = cv2010;
            v2016 = cv2016;
            
            continue;}
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4507 = v2296[1];
          const v4508 = v4507[stdlib.checkedBigNumberify('./vault.rsh:421:9:spread', stdlib.UInt_max, 0)];
          const v4509 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:92:8:decimal', stdlib.UInt_max, 2), v4508);
          const v4510 = stdlib.div(v4509, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          const v4511 = stdlib.add(v4508, v4510);
          ;
          ;
          undefined;
          const v4792 = stdlib.div(v4508, v2007);
          const v4793 = stdlib.mul(v4792, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          const v4796 = stdlib.gt(v4508, stdlib.checkedBigNumberify('./vault.rsh:440:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4796, {
            at: './vault.rsh:440:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          const v4797 = stdlib.gt(v2007, stdlib.checkedBigNumberify('./vault.rsh:441:35:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4797, {
            at: './vault.rsh:441:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          const v4798 = stdlib.sub(v2009, v4508);
          const v4799 = stdlib.ge(v4798, stdlib.checkedBigNumberify('./vault.rsh:442:53:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4799, {
            at: './vault.rsh:442:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          stdlib.assert(v4799, {
            at: './vault.rsh:443:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          const v4803 = stdlib.ge(v2016, v4793);
          stdlib.assert(v4803, {
            at: './vault.rsh:444:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'Reserve'
            });
          ;
          const v4811 = stdlib.sub(v2016, v4793);
          ;
          ;
          const v4816 = true;
          await txn8.getOutput('api', 'v4816', ctc4, v4816);
          const cv2007 = v2007;
          const cv2009 = v4798;
          const cv2010 = v2297;
          const cv2016 = v4811;
          
          v2007 = cv2007;
          v2009 = cv2009;
          v2010 = cv2010;
          v2016 = cv2016;
          
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
  
  
  const [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2137 = ctc.selfAddress();
  const v2139 = stdlib.protect(ctc4, await interact.in(), {
    at: './vault.rsh:1:23:application',
    fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_depositCollateral0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'in',
    who: 'VaultOwner_depositCollateral'
    });
  const v2140 = v2139[stdlib.checkedBigNumberify('./vault.rsh:346:9:spread', stdlib.UInt_max, 0)];
  const v2142 = stdlib.gt(v2140, stdlib.checkedBigNumberify('./vault.rsh:349:36:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2142, {
    at: './vault.rsh:349:15:application',
    fs: ['at ./vault.rsh:346:9:application call to [unknown function] (defined at: ./vault.rsh:348:27:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_depositCollateral0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'Cannot deposit 0 collateral tokens',
    who: 'VaultOwner_depositCollateral'
    });
  const v2143 = stdlib.addressEq(v2137, v1917);
  stdlib.assert(v2143, {
    at: './vault.rsh:350:15:application',
    fs: ['at ./vault.rsh:346:9:application call to [unknown function] (defined at: ./vault.rsh:348:27:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_depositCollateral0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'You are not the owner of this vault',
    who: 'VaultOwner_depositCollateral'
    });
  
  const v2237 = ['VaultOwner_depositCollateral0', v2139];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095, v2237],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v2140, [[stdlib.checkedBigNumberify('./vault.rsh:353:37:decimal', stdlib.UInt_max, 0), v1882]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
      
      switch (v2296[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2299 = v2296[1];
          
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2629 = v2296[1];
          
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2940 = v2296[1];
          
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3251 = v2296[1];
          const v3252 = v3251[stdlib.checkedBigNumberify('./vault.rsh:346:9:spread', stdlib.UInt_max, 0)];
          const v3268 = stdlib.add(v2016, v3252);
          sim_r.txns.push({
            amt: v3252,
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./vault.rsh:353:37:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v1882
            });
          undefined;
          const v3359 = stdlib.gt(v3252, stdlib.checkedBigNumberify('./vault.rsh:357:37:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3359, {
            at: './vault.rsh:357:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)'],
            msg: 'Cannot deposit 0 collateral tokens',
            who: 'VaultOwner_depositCollateral'
            });
          const v3360 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v3360, {
            at: './vault.rsh:358:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'VaultOwner_depositCollateral'
            });
          const v3361 = true;
          const v3362 = await txn1.getOutput('api', 'v3361', ctc3, v3361);
          
          const v63266 = v2007;
          const v63267 = v2009;
          const v63269 = v3268;
          const v63270 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
          const v63271 = stdlib.gt(v3268, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
          const v63272 = v63270 ? true : v63271;
          if (v63272) {
            const v63273 = stdlib.mul(v3268, v2007);
            const v63274 = stdlib.div(v63273, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
            let v63275;
            const v63276 = stdlib.eq(v63274, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
            if (v63276) {
              v63275 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63277 = stdlib.mul(v63274, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              const v63278 = stdlib.div(v63277, v63274);
              const v63279 = stdlib.eq(v63278, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              if (v63279) {
                v63275 = v63277;
                }
              else {
                v63275 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                }
              }
            let v63280;
            const v63281 = stdlib.eq(v63275, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63282 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
            const v63283 = v63281 ? true : v63282;
            if (v63283) {
              v63280 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63284 = stdlib.div(v63275, v2009);
              v63280 = v63284;
              }
            const v63285 = stdlib.mul(v63274, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
            const v63286 = stdlib.div(v63285, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
            let v63287;
            const v63288 = stdlib.eq(v63286, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63289 = v63288 ? true : v63282;
            if (v63289) {
              v63287 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63290 = stdlib.div(v63286, v2009);
              v63287 = v63290;
              }
            const v63291 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1882
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
          const v3565 = v2296[1];
          
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3879 = v2296[1];
          
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4193 = v2296[1];
          
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4507 = v2296[1];
          
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
  const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
  switch (v2296[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2299 = v2296[1];
      return;
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2629 = v2296[1];
      return;
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2940 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3251 = v2296[1];
      const v3252 = v3251[stdlib.checkedBigNumberify('./vault.rsh:346:9:spread', stdlib.UInt_max, 0)];
      const v3268 = stdlib.add(v2016, v3252);
      ;
      ;
      undefined;
      const v3359 = stdlib.gt(v3252, stdlib.checkedBigNumberify('./vault.rsh:357:37:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v3359, {
        at: './vault.rsh:357:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)'],
        msg: 'Cannot deposit 0 collateral tokens',
        who: 'VaultOwner_depositCollateral'
        });
      const v3360 = stdlib.addressEq(v2295, v1917);
      stdlib.assert(v3360, {
        at: './vault.rsh:358:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)'],
        msg: 'You are not the owner of this vault',
        who: 'VaultOwner_depositCollateral'
        });
      const v3361 = true;
      const v3362 = await txn1.getOutput('api', 'v3361', ctc3, v3361);
      if (v1495) {
        stdlib.protect(ctc7, await interact.out(v3251, v3362), {
          at: './vault.rsh:346:9:application',
          fs: ['at ./vault.rsh:346:9:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)', 'at ./vault.rsh:359:18:application call to "apiReturn" (defined at: ./vault.rsh:346:9:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)'],
          msg: 'out',
          who: 'VaultOwner_depositCollateral'
          });
        }
      else {
        }
      
      const v63266 = v2007;
      const v63267 = v2009;
      const v63269 = v3268;
      const v63270 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
      const v63271 = stdlib.gt(v3268, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
      const v63272 = v63270 ? true : v63271;
      if (v63272) {
        const v63273 = stdlib.mul(v3268, v2007);
        const v63274 = stdlib.div(v63273, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
        let v63275;
        const v63276 = stdlib.eq(v63274, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
        if (v63276) {
          v63275 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63277 = stdlib.mul(v63274, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          const v63278 = stdlib.div(v63277, v63274);
          const v63279 = stdlib.eq(v63278, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          if (v63279) {
            v63275 = v63277;
            }
          else {
            v63275 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          }
        let v63280;
        const v63281 = stdlib.eq(v63275, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63282 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
        const v63283 = v63281 ? true : v63282;
        if (v63283) {
          v63280 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63284 = stdlib.div(v63275, v2009);
          v63280 = v63284;
          }
        const v63285 = stdlib.mul(v63274, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
        const v63286 = stdlib.div(v63285, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
        let v63287;
        const v63288 = stdlib.eq(v63286, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63289 = v63288 ? true : v63282;
        if (v63289) {
          v63287 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63290 = stdlib.div(v63286, v2009);
          v63287 = v63290;
          }
        const v63291 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3565 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3879 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4193 = v2296[1];
      return;
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4507 = v2296[1];
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
  
  
  const [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2097 = ctc.selfAddress();
  const v2099 = stdlib.protect(ctc4, await interact.in(), {
    at: './vault.rsh:1:23:application',
    fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_mintToken0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'in',
    who: 'VaultOwner_mintToken'
    });
  const v2100 = v2099[stdlib.checkedBigNumberify('./vault.rsh:208:9:spread', stdlib.UInt_max, 0)];
  const v2102 = stdlib.addressEq(v2097, v1917);
  stdlib.assert(v2102, {
    at: './vault.rsh:211:15:application',
    fs: ['at ./vault.rsh:208:9:application call to [unknown function] (defined at: ./vault.rsh:210:22:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_mintToken0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'You are not the owner of this vault',
    who: 'VaultOwner_mintToken'
    });
  const v2103 = stdlib.gt(v2100, stdlib.checkedBigNumberify('./vault.rsh:212:31:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2103, {
    at: './vault.rsh:212:15:application',
    fs: ['at ./vault.rsh:208:9:application call to [unknown function] (defined at: ./vault.rsh:210:22:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_mintToken0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'You cannot mint 0 tokens',
    who: 'VaultOwner_mintToken'
    });
  
  const v2248 = ['VaultOwner_mintToken0', v2099];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095, v2248],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./vault.rsh:217:17:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./vault.rsh:217:21:decimal', stdlib.UInt_max, 0), v1882]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
      
      switch (v2296[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2299 = v2296[1];
          
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2629 = v2296[1];
          
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2940 = v2296[1];
          
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3251 = v2296[1];
          
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3565 = v2296[1];
          const v3566 = v3565[stdlib.checkedBigNumberify('./vault.rsh:208:9:spread', stdlib.UInt_max, 0)];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./vault.rsh:217:17:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./vault.rsh:217:21:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v1882
            });
          undefined;
          const v3684 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v3684, {
            at: './vault.rsh:221:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'VaultOwner_mintToken'
            });
          const v3685 = stdlib.gt(v3566, stdlib.checkedBigNumberify('./vault.rsh:222:32:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v3685, {
            at: './vault.rsh:222:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
            msg: 'You must mint at least 1 token',
            who: 'VaultOwner_mintToken'
            });
          let v3688;
          const v3689 = stdlib.lt(v2086, v2009);
          if (v3689) {
            v3688 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3690 = stdlib.sub(v2086, v2009);
            v3688 = v3690;
            }
          let v3691;
          const v3692 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v3566);
          const v3693 = stdlib.div(v3692, stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
          const v3694 = stdlib.eq(v3693, v3566);
          if (v3694) {
            v3691 = v3692;
            }
          else {
            v3691 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          let v3696;
          const v3697 = stdlib.eq(v3691, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          if (v3697) {
            v3696 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3699 = stdlib.div(v3691, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
            v3696 = v3699;
            }
          const v3700 = stdlib.sub(v3566, v3696);
          const v3701 = stdlib.add(v2009, v3700);
          let v3702;
          if (v2075) {
            v3702 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3704 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v3705 = stdlib.div(v3704, v2073);
            const v3706 = stdlib.eq(v3705, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v3706) {
              v3702 = v3704;
              }
            else {
              v3702 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v3708;
          const v3709 = stdlib.eq(v3702, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v3710 = stdlib.eq(v3701, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v3711 = v3709 ? true : v3710;
          if (v3711) {
            v3708 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v3712 = stdlib.div(v3702, v3701);
            v3708 = v3712;
            }
          const v3713 = stdlib.ge(v3708, stdlib.checkedBigNumberify('./utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v3714 = stdlib.gt(v3688, stdlib.checkedBigNumberify('./vault.rsh:239:32:decimal', stdlib.UInt_max, 0));
          const v3715 = v3713 ? v3714 : false;
          const v3717 = v3715 ? v3685 : false;
          const v3718 = stdlib.le(v3566, v3688);
          const v3719 = v3717 ? v3718 : false;
          const v3720 = await txn1.getOutput('api', 'v3719', ctc3, v3719);
          
          if (v3719) {
            stdlib.assert(v3718, {
              at: './vault.rsh:245:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
              msg: 'The request mint amount is more than the maximum allowed',
              who: 'VaultOwner_mintToken'
              });
            let v3726;
            if (v3694) {
              v3726 = v3692;
              }
            else {
              v3726 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            let v3731;
            const v3732 = stdlib.eq(v3726, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            if (v3732) {
              v3731 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v3734 = stdlib.div(v3726, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
              v3731 = v3734;
              }
            const v3735 = stdlib.eq(v3696, v3731);
            stdlib.assert(v3735, {
              at: './vault.rsh:247:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
              msg: null,
              who: 'VaultOwner_mintToken'
              });
            const v3737 = stdlib.eq(v3700, v3700);
            stdlib.assert(v3737, {
              at: './vault.rsh:248:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
              msg: null,
              who: 'VaultOwner_mintToken'
              });
            sim_r.isHalt = false;
            }
          else {
            const v63310 = v2007;
            const v63311 = v2009;
            const v63313 = v2016;
            const v63314 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
            const v63315 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
            const v63316 = v63314 ? true : v63315;
            if (v63316) {
              const v63317 = stdlib.mul(v2016, v2007);
              const v63318 = stdlib.div(v63317, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v63319;
              const v63320 = stdlib.eq(v63318, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v63320) {
                v63319 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63321 = stdlib.mul(v63318, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v63322 = stdlib.div(v63321, v63318);
                const v63323 = stdlib.eq(v63322, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v63323) {
                  v63319 = v63321;
                  }
                else {
                  v63319 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v63324;
              const v63325 = stdlib.eq(v63319, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63326 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v63327 = v63325 ? true : v63326;
              if (v63327) {
                v63324 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63328 = stdlib.div(v63319, v2009);
                v63324 = v63328;
                }
              const v63329 = stdlib.mul(v63318, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v63330 = stdlib.div(v63329, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v63331;
              const v63332 = stdlib.eq(v63330, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63333 = v63332 ? true : v63326;
              if (v63333) {
                v63331 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63334 = stdlib.div(v63330, v2009);
                v63331 = v63334;
                }
              const v63335 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1882
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
          const v3879 = v2296[1];
          
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4193 = v2296[1];
          
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4507 = v2296[1];
          
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
  const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
  switch (v2296[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2299 = v2296[1];
      return;
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2629 = v2296[1];
      return;
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2940 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3251 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3565 = v2296[1];
      const v3566 = v3565[stdlib.checkedBigNumberify('./vault.rsh:208:9:spread', stdlib.UInt_max, 0)];
      ;
      ;
      undefined;
      const v3684 = stdlib.addressEq(v2295, v1917);
      stdlib.assert(v3684, {
        at: './vault.rsh:221:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
        msg: 'You are not the owner of this vault',
        who: 'VaultOwner_mintToken'
        });
      const v3685 = stdlib.gt(v3566, stdlib.checkedBigNumberify('./vault.rsh:222:32:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v3685, {
        at: './vault.rsh:222:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
        msg: 'You must mint at least 1 token',
        who: 'VaultOwner_mintToken'
        });
      let v3688;
      const v3689 = stdlib.lt(v2086, v2009);
      if (v3689) {
        v3688 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:9:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v3690 = stdlib.sub(v2086, v2009);
        v3688 = v3690;
        }
      let v3691;
      const v3692 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5), v3566);
      const v3693 = stdlib.div(v3692, stdlib.checkedBigNumberify('./utils.rsh:87:17:decimal', stdlib.UInt_max, 5));
      const v3694 = stdlib.eq(v3693, v3566);
      if (v3694) {
        v3691 = v3692;
        }
      else {
        v3691 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
        }
      let v3696;
      const v3697 = stdlib.eq(v3691, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      if (v3697) {
        v3696 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v3699 = stdlib.div(v3691, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
        v3696 = v3699;
        }
      const v3700 = stdlib.sub(v3566, v3696);
      const v3701 = stdlib.add(v2009, v3700);
      let v3702;
      if (v2075) {
        v3702 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v3704 = stdlib.mul(v2073, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        const v3705 = stdlib.div(v3704, v2073);
        const v3706 = stdlib.eq(v3705, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        if (v3706) {
          v3702 = v3704;
          }
        else {
          v3702 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
          }
        }
      let v3708;
      const v3709 = stdlib.eq(v3702, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      const v3710 = stdlib.eq(v3701, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
      const v3711 = v3709 ? true : v3710;
      if (v3711) {
        v3708 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v3712 = stdlib.div(v3702, v3701);
        v3708 = v3712;
        }
      const v3713 = stdlib.ge(v3708, stdlib.checkedBigNumberify('./utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
      const v3714 = stdlib.gt(v3688, stdlib.checkedBigNumberify('./vault.rsh:239:32:decimal', stdlib.UInt_max, 0));
      const v3715 = v3713 ? v3714 : false;
      const v3717 = v3715 ? v3685 : false;
      const v3718 = stdlib.le(v3566, v3688);
      const v3719 = v3717 ? v3718 : false;
      const v3720 = await txn1.getOutput('api', 'v3719', ctc3, v3719);
      if (v1495) {
        stdlib.protect(ctc7, await interact.out(v3565, v3720), {
          at: './vault.rsh:208:9:application',
          fs: ['at ./vault.rsh:208:9:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)', 'at ./vault.rsh:242:18:application call to "apiReturn" (defined at: ./vault.rsh:208:9:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
          msg: 'out',
          who: 'VaultOwner_mintToken'
          });
        }
      else {
        }
      
      if (v3719) {
        stdlib.assert(v3718, {
          at: './vault.rsh:245:18:application',
          fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
          msg: 'The request mint amount is more than the maximum allowed',
          who: 'VaultOwner_mintToken'
          });
        let v3726;
        if (v3694) {
          v3726 = v3692;
          }
        else {
          v3726 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
          }
        let v3731;
        const v3732 = stdlib.eq(v3726, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        if (v3732) {
          v3731 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v3734 = stdlib.div(v3726, stdlib.checkedBigNumberify('./utils.rsh:87:33:decimal', stdlib.UInt_max, 1000));
          v3731 = v3734;
          }
        const v3735 = stdlib.eq(v3696, v3731);
        stdlib.assert(v3735, {
          at: './vault.rsh:247:18:application',
          fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
          msg: null,
          who: 'VaultOwner_mintToken'
          });
        const v3737 = stdlib.eq(v3700, v3700);
        stdlib.assert(v3737, {
          at: './vault.rsh:248:18:application',
          fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)'],
          msg: null,
          who: 'VaultOwner_mintToken'
          });
        return;
        }
      else {
        const v63310 = v2007;
        const v63311 = v2009;
        const v63313 = v2016;
        const v63314 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
        const v63315 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
        const v63316 = v63314 ? true : v63315;
        if (v63316) {
          const v63317 = stdlib.mul(v2016, v2007);
          const v63318 = stdlib.div(v63317, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          let v63319;
          const v63320 = stdlib.eq(v63318, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v63320) {
            v63319 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63321 = stdlib.mul(v63318, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v63322 = stdlib.div(v63321, v63318);
            const v63323 = stdlib.eq(v63322, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v63323) {
              v63319 = v63321;
              }
            else {
              v63319 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v63324;
          const v63325 = stdlib.eq(v63319, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63326 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v63327 = v63325 ? true : v63326;
          if (v63327) {
            v63324 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63328 = stdlib.div(v63319, v2009);
            v63324 = v63328;
            }
          const v63329 = stdlib.mul(v63318, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v63330 = stdlib.div(v63329, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v63331;
          const v63332 = stdlib.eq(v63330, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63333 = v63332 ? true : v63326;
          if (v63333) {
            v63331 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63334 = stdlib.div(v63330, v2009);
            v63331 = v63334;
            }
          const v63335 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
          return;
          }
        else {
          return;
          }}
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3879 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4193 = v2296[1];
      return;
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4507 = v2296[1];
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
  
  
  const [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2107 = ctc.selfAddress();
  const v2109 = stdlib.protect(ctc4, await interact.in(), {
    at: './vault.rsh:1:23:application',
    fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_returnVaultDebt0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'in',
    who: 'VaultOwner_returnVaultDebt'
    });
  const v2110 = v2109[stdlib.checkedBigNumberify('./vault.rsh:260:9:spread', stdlib.UInt_max, 0)];
  const v2112 = stdlib.le(v2110, v2009);
  stdlib.assert(v2112, {
    at: './vault.rsh:263:15:application',
    fs: ['at ./vault.rsh:260:9:application call to [unknown function] (defined at: ./vault.rsh:262:24:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_returnVaultDebt0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'You canot return more tokens than the vault debt',
    who: 'VaultOwner_returnVaultDebt'
    });
  const v2113 = stdlib.gt(v2110, stdlib.checkedBigNumberify('./vault.rsh:267:33:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2113, {
    at: './vault.rsh:267:15:application',
    fs: ['at ./vault.rsh:260:9:application call to [unknown function] (defined at: ./vault.rsh:262:24:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_returnVaultDebt0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'Cannot return 0 tokens',
    who: 'VaultOwner_returnVaultDebt'
    });
  const v2114 = stdlib.addressEq(v2107, v1917);
  stdlib.assert(v2114, {
    at: './vault.rsh:268:15:application',
    fs: ['at ./vault.rsh:260:9:application call to [unknown function] (defined at: ./vault.rsh:262:24:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_returnVaultDebt0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'You are not the owner of this vault',
    who: 'VaultOwner_returnVaultDebt'
    });
  
  const v2259 = ['VaultOwner_returnVaultDebt0', v2109];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095, v2259],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./vault.rsh:273:17:decimal', stdlib.UInt_max, 0), [[v2110, v1882]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
      
      switch (v2296[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2299 = v2296[1];
          
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2629 = v2296[1];
          
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2940 = v2296[1];
          
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3251 = v2296[1];
          
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3565 = v2296[1];
          
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3879 = v2296[1];
          const v3880 = v3879[stdlib.checkedBigNumberify('./vault.rsh:260:9:spread', stdlib.UInt_max, 0)];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./vault.rsh:273:17:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: v3880,
            kind: 'to',
            tok: v1882
            });
          undefined;
          const v4080 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v4080, {
            at: './vault.rsh:277:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'VaultOwner_returnVaultDebt'
            });
          const v4081 = stdlib.le(v3880, v2009);
          const v4082 = stdlib.gt(v3880, stdlib.checkedBigNumberify('./vault.rsh:279:28:decimal', stdlib.UInt_max, 0));
          const v4083 = v4081 ? v4082 : false;
          const v4084 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:280:23:decimal', stdlib.UInt_max, 0));
          const v4085 = v4083 ? v4084 : false;
          stdlib.assert(v4085, {
            at: './vault.rsh:278:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
            msg: null,
            who: 'VaultOwner_returnVaultDebt'
            });
          sim_r.txns.push({
            amt: v3880,
            kind: 'from',
            to: v1880,
            tok: v1882
            });
          const v4090 = stdlib.sub(v2009, v3880);
          const v4091 = stdlib.eq(v4090, stdlib.checkedBigNumberify('./vault.rsh:283:69:decimal', stdlib.UInt_max, 0));
          const v4092 = true;
          const v4093 = await txn1.getOutput('api', 'v4092', ctc3, v4092);
          
          if (v4091) {
            stdlib.assert(v4091, {
              at: './vault.rsh:286:18:application',
              fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
              msg: null,
              who: 'VaultOwner_returnVaultDebt'
              });
            const v4104 = stdlib.sub(v2016, v2016);
            sim_r.txns.push({
              amt: v2016,
              kind: 'from',
              to: v1917,
              tok: undefined
              });
            const v63354 = v2007;
            const v63355 = stdlib.checkedBigNumberify('./vault.rsh:288:19:decimal', stdlib.UInt_max, 0);
            const v63357 = v4104;
            const v63358 = stdlib.gt(stdlib.checkedBigNumberify('./vault.rsh:288:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
            const v63359 = stdlib.gt(v4104, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
            const v63360 = v63358 ? true : v63359;
            if (v63360) {
              const v63361 = stdlib.mul(v4104, v2007);
              const v63362 = stdlib.div(v63361, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v63363;
              const v63364 = stdlib.eq(v63362, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v63364) {
                v63363 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63365 = stdlib.mul(v63362, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v63366 = stdlib.div(v63365, v63362);
                const v63367 = stdlib.eq(v63366, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v63367) {
                  v63363 = v63365;
                  }
                else {
                  v63363 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v63368;
              const v63369 = stdlib.eq(v63363, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63370 = stdlib.eq(stdlib.checkedBigNumberify('./vault.rsh:288:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v63371 = v63369 ? true : v63370;
              if (v63371) {
                v63368 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63372 = stdlib.div(v63363, stdlib.checkedBigNumberify('./vault.rsh:288:19:decimal', stdlib.UInt_max, 0));
                v63368 = v63372;
                }
              const v63373 = stdlib.mul(v63362, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v63374 = stdlib.div(v63373, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v63375;
              const v63376 = stdlib.eq(v63374, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63377 = v63376 ? true : v63370;
              if (v63377) {
                v63375 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63378 = stdlib.div(v63374, stdlib.checkedBigNumberify('./vault.rsh:288:19:decimal', stdlib.UInt_max, 0));
                v63375 = v63378;
                }
              const v63379 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1882
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }}
          else {
            const v63398 = v2007;
            const v63399 = v4090;
            const v63401 = v2016;
            const v63402 = stdlib.gt(v4090, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
            const v63403 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
            const v63404 = v63402 ? true : v63403;
            if (v63404) {
              const v63405 = stdlib.mul(v2016, v2007);
              const v63406 = stdlib.div(v63405, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v63407;
              const v63408 = stdlib.eq(v63406, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v63408) {
                v63407 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63409 = stdlib.mul(v63406, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v63410 = stdlib.div(v63409, v63406);
                const v63411 = stdlib.eq(v63410, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v63411) {
                  v63407 = v63409;
                  }
                else {
                  v63407 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v63412;
              const v63413 = stdlib.eq(v63407, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63415 = v63413 ? true : v4091;
              if (v63415) {
                v63412 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63416 = stdlib.div(v63407, v4090);
                v63412 = v63416;
                }
              const v63417 = stdlib.mul(v63406, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v63418 = stdlib.div(v63417, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v63419;
              const v63420 = stdlib.eq(v63418, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63421 = v63420 ? true : v4091;
              if (v63421) {
                v63419 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63422 = stdlib.div(v63418, v4090);
                v63419 = v63422;
                }
              const v63423 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1882
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
          const v4193 = v2296[1];
          
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4507 = v2296[1];
          
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
  const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
  switch (v2296[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2299 = v2296[1];
      return;
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2629 = v2296[1];
      return;
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2940 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3251 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3565 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3879 = v2296[1];
      const v3880 = v3879[stdlib.checkedBigNumberify('./vault.rsh:260:9:spread', stdlib.UInt_max, 0)];
      ;
      ;
      undefined;
      const v4080 = stdlib.addressEq(v2295, v1917);
      stdlib.assert(v4080, {
        at: './vault.rsh:277:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
        msg: 'You are not the owner of this vault',
        who: 'VaultOwner_returnVaultDebt'
        });
      const v4081 = stdlib.le(v3880, v2009);
      const v4082 = stdlib.gt(v3880, stdlib.checkedBigNumberify('./vault.rsh:279:28:decimal', stdlib.UInt_max, 0));
      const v4083 = v4081 ? v4082 : false;
      const v4084 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:280:23:decimal', stdlib.UInt_max, 0));
      const v4085 = v4083 ? v4084 : false;
      stdlib.assert(v4085, {
        at: './vault.rsh:278:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
        msg: null,
        who: 'VaultOwner_returnVaultDebt'
        });
      ;
      const v4090 = stdlib.sub(v2009, v3880);
      const v4091 = stdlib.eq(v4090, stdlib.checkedBigNumberify('./vault.rsh:283:69:decimal', stdlib.UInt_max, 0));
      const v4092 = true;
      const v4093 = await txn1.getOutput('api', 'v4092', ctc3, v4092);
      if (v1495) {
        stdlib.protect(ctc7, await interact.out(v3879, v4093), {
          at: './vault.rsh:260:9:application',
          fs: ['at ./vault.rsh:260:9:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)', 'at ./vault.rsh:284:18:application call to "apiReturn" (defined at: ./vault.rsh:260:9:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
          msg: 'out',
          who: 'VaultOwner_returnVaultDebt'
          });
        }
      else {
        }
      
      if (v4091) {
        stdlib.assert(v4091, {
          at: './vault.rsh:286:18:application',
          fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)'],
          msg: null,
          who: 'VaultOwner_returnVaultDebt'
          });
        const v4104 = stdlib.sub(v2016, v2016);
        ;
        const v63354 = v2007;
        const v63355 = stdlib.checkedBigNumberify('./vault.rsh:288:19:decimal', stdlib.UInt_max, 0);
        const v63357 = v4104;
        const v63358 = stdlib.gt(stdlib.checkedBigNumberify('./vault.rsh:288:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
        const v63359 = stdlib.gt(v4104, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
        const v63360 = v63358 ? true : v63359;
        if (v63360) {
          const v63361 = stdlib.mul(v4104, v2007);
          const v63362 = stdlib.div(v63361, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          let v63363;
          const v63364 = stdlib.eq(v63362, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v63364) {
            v63363 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63365 = stdlib.mul(v63362, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v63366 = stdlib.div(v63365, v63362);
            const v63367 = stdlib.eq(v63366, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v63367) {
              v63363 = v63365;
              }
            else {
              v63363 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v63368;
          const v63369 = stdlib.eq(v63363, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63370 = stdlib.eq(stdlib.checkedBigNumberify('./vault.rsh:288:19:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v63371 = v63369 ? true : v63370;
          if (v63371) {
            v63368 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63372 = stdlib.div(v63363, stdlib.checkedBigNumberify('./vault.rsh:288:19:decimal', stdlib.UInt_max, 0));
            v63368 = v63372;
            }
          const v63373 = stdlib.mul(v63362, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v63374 = stdlib.div(v63373, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v63375;
          const v63376 = stdlib.eq(v63374, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63377 = v63376 ? true : v63370;
          if (v63377) {
            v63375 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63378 = stdlib.div(v63374, stdlib.checkedBigNumberify('./vault.rsh:288:19:decimal', stdlib.UInt_max, 0));
            v63375 = v63378;
            }
          const v63379 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
          return;
          }
        else {
          return;
          }}
      else {
        const v63398 = v2007;
        const v63399 = v4090;
        const v63401 = v2016;
        const v63402 = stdlib.gt(v4090, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
        const v63403 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
        const v63404 = v63402 ? true : v63403;
        if (v63404) {
          const v63405 = stdlib.mul(v2016, v2007);
          const v63406 = stdlib.div(v63405, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          let v63407;
          const v63408 = stdlib.eq(v63406, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v63408) {
            v63407 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63409 = stdlib.mul(v63406, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v63410 = stdlib.div(v63409, v63406);
            const v63411 = stdlib.eq(v63410, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v63411) {
              v63407 = v63409;
              }
            else {
              v63407 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v63412;
          const v63413 = stdlib.eq(v63407, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63415 = v63413 ? true : v4091;
          if (v63415) {
            v63412 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63416 = stdlib.div(v63407, v4090);
            v63412 = v63416;
            }
          const v63417 = stdlib.mul(v63406, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v63418 = stdlib.div(v63417, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v63419;
          const v63420 = stdlib.eq(v63418, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63421 = v63420 ? true : v4091;
          if (v63421) {
            v63419 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63422 = stdlib.div(v63418, v4090);
            v63419 = v63422;
            }
          const v63423 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
          return;
          }
        else {
          return;
          }}
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4193 = v2296[1];
      return;
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4507 = v2296[1];
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
  
  
  const [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2118 = ctc.selfAddress();
  const v2120 = stdlib.protect(ctc4, await interact.in(), {
    at: './vault.rsh:1:23:application',
    fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_withdrawCollateral0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'in',
    who: 'VaultOwner_withdrawCollateral'
    });
  const v2121 = v2120[stdlib.checkedBigNumberify('./vault.rsh:294:9:spread', stdlib.UInt_max, 0)];
  const v2124 = stdlib.sub(v2016, v2121);
  const v2125 = stdlib.mul(v2124, v2007);
  const v2126 = stdlib.addressEq(v2118, v1917);
  stdlib.assert(v2126, {
    at: './vault.rsh:299:15:application',
    fs: ['at ./vault.rsh:294:9:application call to [unknown function] (defined at: ./vault.rsh:296:30:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_withdrawCollateral0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'You are not the owner of this vault',
    who: 'VaultOwner_withdrawCollateral'
    });
  const v2128 = stdlib.gt(v2016, stdlib.checkedBigNumberify('./vault.rsh:300:28:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2128, {
    at: './vault.rsh:300:15:application',
    fs: ['at ./vault.rsh:294:9:application call to [unknown function] (defined at: ./vault.rsh:296:30:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_withdrawCollateral0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: null,
    who: 'VaultOwner_withdrawCollateral'
    });
  const v2129 = stdlib.gt(v2121, stdlib.checkedBigNumberify('./vault.rsh:301:39:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2129, {
    at: './vault.rsh:301:15:application',
    fs: ['at ./vault.rsh:294:9:application call to [unknown function] (defined at: ./vault.rsh:296:30:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_withdrawCollateral0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'Cannot withdraw 0 tokens',
    who: 'VaultOwner_withdrawCollateral'
    });
  const v2131 = stdlib.lt(v2121, v2016);
  stdlib.assert(v2131, {
    at: './vault.rsh:302:15:application',
    fs: ['at ./vault.rsh:294:9:application call to [unknown function] (defined at: ./vault.rsh:296:30:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_withdrawCollateral0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: null,
    who: 'VaultOwner_withdrawCollateral'
    });
  const v2132 = stdlib.gt(v2080, stdlib.checkedBigNumberify('./utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
  stdlib.assert(v2132, {
    at: './vault.rsh:303:15:application',
    fs: ['at ./vault.rsh:294:9:application call to [unknown function] (defined at: ./vault.rsh:296:30:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_withdrawCollateral0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'Vault collateral ratio is not healthy',
    who: 'VaultOwner_withdrawCollateral'
    });
  const v2133 = stdlib.gt(v2125, stdlib.checkedBigNumberify('./vault.rsh:308:44:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2133, {
    at: './vault.rsh:307:15:application',
    fs: ['at ./vault.rsh:294:9:application call to [unknown function] (defined at: ./vault.rsh:296:30:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultOwner_withdrawCollateral0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'Collateral value after withdrawal must not be 0',
    who: 'VaultOwner_withdrawCollateral'
    });
  
  const v2270 = ['VaultOwner_withdrawCollateral0', v2120];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095, v2270],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./vault.rsh:313:17:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./vault.rsh:313:21:decimal', stdlib.UInt_max, 0), v1882]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
      
      switch (v2296[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2299 = v2296[1];
          
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2629 = v2296[1];
          
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2940 = v2296[1];
          
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3251 = v2296[1];
          
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3565 = v2296[1];
          
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3879 = v2296[1];
          
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4193 = v2296[1];
          const v4194 = v4193[stdlib.checkedBigNumberify('./vault.rsh:294:9:spread', stdlib.UInt_max, 0)];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./vault.rsh:313:17:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./vault.rsh:313:21:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: v1882
            });
          undefined;
          const v4432 = stdlib.addressEq(v2295, v1917);
          stdlib.assert(v4432, {
            at: './vault.rsh:317:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'You are not the owner of this vault',
            who: 'VaultOwner_withdrawCollateral'
            });
          const v4433 = stdlib.gt(v4194, stdlib.checkedBigNumberify('./vault.rsh:318:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4433, {
            at: './vault.rsh:318:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: null,
            who: 'VaultOwner_withdrawCollateral'
            });
          const v4435 = stdlib.lt(v4194, v2016);
          stdlib.assert(v4435, {
            at: './vault.rsh:319:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'Cannot withdraw more than the balance of this contract',
            who: 'VaultOwner_withdrawCollateral'
            });
          stdlib.assert(v2132, {
            at: './vault.rsh:321:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'Vault collateral ratio is not healthy',
            who: 'VaultOwner_withdrawCollateral'
            });
          const v4438 = stdlib.sub(v2016, v4194);
          const v4439 = stdlib.mul(v4438, v2007);
          const v4440 = stdlib.gt(v4439, stdlib.checkedBigNumberify('./vault.rsh:326:11:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4440, {
            at: './vault.rsh:325:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
            msg: 'Collateral value after withdrawal must not be 0',
            who: 'VaultOwner_withdrawCollateral'
            });
          let v4441;
          const v4442 = stdlib.eq(v4439, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v4442) {
            v4441 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4443 = stdlib.mul(v4439, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v4444 = stdlib.div(v4443, v4439);
            const v4445 = stdlib.eq(v4444, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v4445) {
              v4441 = v4443;
              }
            else {
              v4441 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v4447;
          const v4448 = stdlib.eq(v4441, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v4450 = v4448 ? true : v2082;
          if (v4450) {
            v4447 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v4451 = stdlib.div(v4441, v2009);
            v4447 = v4451;
            }
          const v4454 = v4433 ? v2132 : false;
          const v4455 = stdlib.gt(v4447, stdlib.checkedBigNumberify('./utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
          const v4456 = v4454 ? v4455 : false;
          const v4459 = v4456 ? v4435 : false;
          const v4460 = await txn1.getOutput('api', 'v4459', ctc3, v4459);
          
          if (v4459) {
            sim_r.txns.push({
              amt: v4194,
              kind: 'from',
              to: v1917,
              tok: undefined
              });
            const v63442 = v2007;
            const v63443 = v2009;
            const v63445 = v4438;
            const v63446 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
            const v63447 = stdlib.gt(v4438, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
            const v63448 = v63446 ? true : v63447;
            if (v63448) {
              const v63450 = stdlib.div(v4439, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v63451;
              const v63452 = stdlib.eq(v63450, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v63452) {
                v63451 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63453 = stdlib.mul(v63450, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v63454 = stdlib.div(v63453, v63450);
                const v63455 = stdlib.eq(v63454, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v63455) {
                  v63451 = v63453;
                  }
                else {
                  v63451 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v63456;
              const v63457 = stdlib.eq(v63451, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63458 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v63459 = v63457 ? true : v63458;
              if (v63459) {
                v63456 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63460 = stdlib.div(v63451, v2009);
                v63456 = v63460;
                }
              const v63461 = stdlib.mul(v63450, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v63462 = stdlib.div(v63461, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v63463;
              const v63464 = stdlib.eq(v63462, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63465 = v63464 ? true : v63458;
              if (v63465) {
                v63463 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63466 = stdlib.div(v63462, v2009);
                v63463 = v63466;
                }
              const v63467 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1882
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }}
          else {
            const v63486 = v2007;
            const v63487 = v2009;
            const v63489 = v2016;
            const v63490 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
            const v63492 = v63490 ? true : v2128;
            if (v63492) {
              const v63493 = stdlib.mul(v2016, v2007);
              const v63494 = stdlib.div(v63493, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
              let v63495;
              const v63496 = stdlib.eq(v63494, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
              if (v63496) {
                v63495 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63497 = stdlib.mul(v63494, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                const v63498 = stdlib.div(v63497, v63494);
                const v63499 = stdlib.eq(v63498, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
                if (v63499) {
                  v63495 = v63497;
                  }
                else {
                  v63495 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                  }
                }
              let v63500;
              const v63501 = stdlib.eq(v63495, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63502 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
              const v63503 = v63501 ? true : v63502;
              if (v63503) {
                v63500 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63504 = stdlib.div(v63495, v2009);
                v63500 = v63504;
                }
              const v63505 = stdlib.mul(v63494, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
              const v63506 = stdlib.div(v63505, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
              let v63507;
              const v63508 = stdlib.eq(v63506, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
              const v63509 = v63508 ? true : v63502;
              if (v63509) {
                v63507 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v63510 = stdlib.div(v63506, v2009);
                v63507 = v63510;
                }
              const v63511 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v1882
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
          const v4507 = v2296[1];
          
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
  const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
  switch (v2296[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2299 = v2296[1];
      return;
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2629 = v2296[1];
      return;
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2940 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3251 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3565 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3879 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4193 = v2296[1];
      const v4194 = v4193[stdlib.checkedBigNumberify('./vault.rsh:294:9:spread', stdlib.UInt_max, 0)];
      ;
      ;
      undefined;
      const v4432 = stdlib.addressEq(v2295, v1917);
      stdlib.assert(v4432, {
        at: './vault.rsh:317:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
        msg: 'You are not the owner of this vault',
        who: 'VaultOwner_withdrawCollateral'
        });
      const v4433 = stdlib.gt(v4194, stdlib.checkedBigNumberify('./vault.rsh:318:40:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4433, {
        at: './vault.rsh:318:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
        msg: null,
        who: 'VaultOwner_withdrawCollateral'
        });
      const v4435 = stdlib.lt(v4194, v2016);
      stdlib.assert(v4435, {
        at: './vault.rsh:319:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
        msg: 'Cannot withdraw more than the balance of this contract',
        who: 'VaultOwner_withdrawCollateral'
        });
      stdlib.assert(v2132, {
        at: './vault.rsh:321:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
        msg: 'Vault collateral ratio is not healthy',
        who: 'VaultOwner_withdrawCollateral'
        });
      const v4438 = stdlib.sub(v2016, v4194);
      const v4439 = stdlib.mul(v4438, v2007);
      const v4440 = stdlib.gt(v4439, stdlib.checkedBigNumberify('./vault.rsh:326:11:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4440, {
        at: './vault.rsh:325:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
        msg: 'Collateral value after withdrawal must not be 0',
        who: 'VaultOwner_withdrawCollateral'
        });
      let v4441;
      const v4442 = stdlib.eq(v4439, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
      if (v4442) {
        v4441 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v4443 = stdlib.mul(v4439, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        const v4444 = stdlib.div(v4443, v4439);
        const v4445 = stdlib.eq(v4444, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
        if (v4445) {
          v4441 = v4443;
          }
        else {
          v4441 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
          }
        }
      let v4447;
      const v4448 = stdlib.eq(v4441, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
      const v4450 = v4448 ? true : v2082;
      if (v4450) {
        v4447 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v4451 = stdlib.div(v4441, v2009);
        v4447 = v4451;
        }
      const v4454 = v4433 ? v2132 : false;
      const v4455 = stdlib.gt(v4447, stdlib.checkedBigNumberify('./utils.rsh:16:33:decimal', stdlib.UInt_max, 120));
      const v4456 = v4454 ? v4455 : false;
      const v4459 = v4456 ? v4435 : false;
      const v4460 = await txn1.getOutput('api', 'v4459', ctc3, v4459);
      if (v1495) {
        stdlib.protect(ctc7, await interact.out(v4193, v4460), {
          at: './vault.rsh:294:9:application',
          fs: ['at ./vault.rsh:294:9:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)', 'at ./vault.rsh:337:18:application call to "apiReturn" (defined at: ./vault.rsh:294:9:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)'],
          msg: 'out',
          who: 'VaultOwner_withdrawCollateral'
          });
        }
      else {
        }
      
      if (v4459) {
        ;
        const v63442 = v2007;
        const v63443 = v2009;
        const v63445 = v4438;
        const v63446 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
        const v63447 = stdlib.gt(v4438, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
        const v63448 = v63446 ? true : v63447;
        if (v63448) {
          const v63450 = stdlib.div(v4439, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          let v63451;
          const v63452 = stdlib.eq(v63450, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v63452) {
            v63451 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63453 = stdlib.mul(v63450, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v63454 = stdlib.div(v63453, v63450);
            const v63455 = stdlib.eq(v63454, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v63455) {
              v63451 = v63453;
              }
            else {
              v63451 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v63456;
          const v63457 = stdlib.eq(v63451, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63458 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v63459 = v63457 ? true : v63458;
          if (v63459) {
            v63456 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63460 = stdlib.div(v63451, v2009);
            v63456 = v63460;
            }
          const v63461 = stdlib.mul(v63450, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v63462 = stdlib.div(v63461, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v63463;
          const v63464 = stdlib.eq(v63462, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63465 = v63464 ? true : v63458;
          if (v63465) {
            v63463 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63466 = stdlib.div(v63462, v2009);
            v63463 = v63466;
            }
          const v63467 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
          return;
          }
        else {
          return;
          }}
      else {
        const v63486 = v2007;
        const v63487 = v2009;
        const v63489 = v2016;
        const v63490 = stdlib.gt(v2009, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
        const v63492 = v63490 ? true : v2128;
        if (v63492) {
          const v63493 = stdlib.mul(v2016, v2007);
          const v63494 = stdlib.div(v63493, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          let v63495;
          const v63496 = stdlib.eq(v63494, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
          if (v63496) {
            v63495 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63497 = stdlib.mul(v63494, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            const v63498 = stdlib.div(v63497, v63494);
            const v63499 = stdlib.eq(v63498, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
            if (v63499) {
              v63495 = v63497;
              }
            else {
              v63495 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
              }
            }
          let v63500;
          const v63501 = stdlib.eq(v63495, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63502 = stdlib.eq(v2009, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
          const v63503 = v63501 ? true : v63502;
          if (v63503) {
            v63500 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63504 = stdlib.div(v63495, v2009);
            v63500 = v63504;
            }
          const v63505 = stdlib.mul(v63494, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
          const v63506 = stdlib.div(v63505, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          let v63507;
          const v63508 = stdlib.eq(v63506, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
          const v63509 = v63508 ? true : v63502;
          if (v63509) {
            v63507 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v63510 = stdlib.div(v63506, v2009);
            v63507 = v63510;
            }
          const v63511 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
          return;
          }
        else {
          return;
          }}
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4507 = v2296[1];
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
  
  
  const [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9), [ctc0, ctc1, ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc3, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v2166 = stdlib.protect(ctc4, await interact.in(), {
    at: './vault.rsh:1:23:application',
    fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultRedeemer_redeemVault0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: 'in',
    who: 'VaultRedeemer_redeemVault'
    });
  const v2167 = v2166[stdlib.checkedBigNumberify('./vault.rsh:421:9:spread', stdlib.UInt_max, 0)];
  const v2169 = stdlib.div(v2167, v2007);
  const v2170 = stdlib.mul(v2169, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
  const v2171 = stdlib.gt(v2167, stdlib.checkedBigNumberify('./vault.rsh:426:39:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2171, {
    at: './vault.rsh:426:15:application',
    fs: ['at ./vault.rsh:421:9:application call to [unknown function] (defined at: ./vault.rsh:423:30:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultRedeemer_redeemVault0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: null,
    who: 'VaultRedeemer_redeemVault'
    });
  const v2172 = stdlib.gt(v2007, stdlib.checkedBigNumberify('./vault.rsh:427:34:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2172, {
    at: './vault.rsh:427:15:application',
    fs: ['at ./vault.rsh:421:9:application call to [unknown function] (defined at: ./vault.rsh:423:30:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultRedeemer_redeemVault0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: null,
    who: 'VaultRedeemer_redeemVault'
    });
  const v2173 = stdlib.sub(v2009, v2167);
  const v2174 = stdlib.ge(v2173, stdlib.checkedBigNumberify('./vault.rsh:428:52:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v2174, {
    at: './vault.rsh:428:15:application',
    fs: ['at ./vault.rsh:421:9:application call to [unknown function] (defined at: ./vault.rsh:423:30:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultRedeemer_redeemVault0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: null,
    who: 'VaultRedeemer_redeemVault'
    });
  stdlib.assert(v2174, {
    at: './vault.rsh:429:15:application',
    fs: ['at ./vault.rsh:421:9:application call to [unknown function] (defined at: ./vault.rsh:423:30:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultRedeemer_redeemVault0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: null,
    who: 'VaultRedeemer_redeemVault'
    });
  const v2178 = stdlib.ge(v2016, v2170);
  stdlib.assert(v2178, {
    at: './vault.rsh:430:15:application',
    fs: ['at ./vault.rsh:421:9:application call to [unknown function] (defined at: ./vault.rsh:423:30:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)', 'at ./vault.rsh:181:68:application call to "runVaultRedeemer_redeemVault0" (defined at: ./vault.rsh:181:68:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:181:68:function exp)'],
    msg: null,
    who: 'VaultRedeemer_redeemVault'
    });
  
  const v2281 = ['VaultRedeemer_redeemVault0', v2166];
  const v2283 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:92:8:decimal', stdlib.UInt_max, 2), v2167);
  const v2284 = stdlib.div(v2283, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
  const v2285 = stdlib.add(v2167, v2284);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1880, v1882, v1917, v1944, v2007, v2009, v2016, v2073, v2075, v2080, v2082, v2086, v2087, v2095, v2281],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./vault.rsh:434:17:decimal', stdlib.UInt_max, 0), [[v2285, v1882]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
      
      switch (v2296[0]) {
        case 'Liquidator_liquidateVault0': {
          const v2299 = v2296[1];
          
          break;
          }
        case 'Oracle_updatePrice0': {
          const v2629 = v2296[1];
          
          break;
          }
        case 'RecoveryToggler_toggleRecoveryMode0': {
          const v2940 = v2296[1];
          
          break;
          }
        case 'VaultOwner_depositCollateral0': {
          const v3251 = v2296[1];
          
          break;
          }
        case 'VaultOwner_mintToken0': {
          const v3565 = v2296[1];
          
          break;
          }
        case 'VaultOwner_returnVaultDebt0': {
          const v3879 = v2296[1];
          
          break;
          }
        case 'VaultOwner_withdrawCollateral0': {
          const v4193 = v2296[1];
          
          break;
          }
        case 'VaultRedeemer_redeemVault0': {
          const v4507 = v2296[1];
          const v4508 = v4507[stdlib.checkedBigNumberify('./vault.rsh:421:9:spread', stdlib.UInt_max, 0)];
          const v4509 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:92:8:decimal', stdlib.UInt_max, 2), v4508);
          const v4510 = stdlib.div(v4509, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
          const v4511 = stdlib.add(v4508, v4510);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./vault.rsh:434:17:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: v4511,
            kind: 'to',
            tok: v1882
            });
          undefined;
          const v4792 = stdlib.div(v4508, v2007);
          const v4793 = stdlib.mul(v4792, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
          const v4796 = stdlib.gt(v4508, stdlib.checkedBigNumberify('./vault.rsh:440:40:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4796, {
            at: './vault.rsh:440:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'VaultRedeemer_redeemVault'
            });
          stdlib.assert(v2172, {
            at: './vault.rsh:441:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'VaultRedeemer_redeemVault'
            });
          const v4798 = stdlib.sub(v2009, v4508);
          const v4799 = stdlib.ge(v4798, stdlib.checkedBigNumberify('./vault.rsh:442:53:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v4799, {
            at: './vault.rsh:442:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'VaultRedeemer_redeemVault'
            });
          stdlib.assert(v4799, {
            at: './vault.rsh:443:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'VaultRedeemer_redeemVault'
            });
          const v4803 = stdlib.ge(v2016, v4793);
          stdlib.assert(v4803, {
            at: './vault.rsh:444:16:application',
            fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
            msg: null,
            who: 'VaultRedeemer_redeemVault'
            });
          sim_r.txns.push({
            amt: v4508,
            kind: 'from',
            to: v1880,
            tok: v1882
            });
          const v4811 = stdlib.sub(v2016, v4793);
          sim_r.txns.push({
            amt: v4793,
            kind: 'from',
            to: v2295,
            tok: undefined
            });
          sim_r.txns.push({
            amt: v4510,
            kind: 'from',
            to: v1944,
            tok: v1882
            });
          const v4816 = true;
          const v4817 = await txn1.getOutput('api', 'v4816', ctc3, v4816);
          
          const v63530 = v2007;
          const v63531 = v4798;
          const v63533 = v4811;
          const v63534 = stdlib.gt(v4798, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
          const v63535 = stdlib.gt(v4811, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
          const v63536 = v63534 ? true : v63535;
          if (v63536) {
            const v63537 = stdlib.mul(v4811, v2007);
            const v63538 = stdlib.div(v63537, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
            let v63539;
            const v63540 = stdlib.eq(v63538, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
            if (v63540) {
              v63539 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63541 = stdlib.mul(v63538, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              const v63542 = stdlib.div(v63541, v63538);
              const v63543 = stdlib.eq(v63542, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
              if (v63543) {
                v63539 = v63541;
                }
              else {
                v63539 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
                }
              }
            let v63544;
            const v63545 = stdlib.eq(v63539, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63546 = stdlib.eq(v4798, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
            const v63547 = v63545 ? true : v63546;
            if (v63547) {
              v63544 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63548 = stdlib.div(v63539, v4798);
              v63544 = v63548;
              }
            const v63549 = stdlib.mul(v63538, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
            const v63550 = stdlib.div(v63549, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
            let v63551;
            const v63552 = stdlib.eq(v63550, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
            const v63553 = v63552 ? true : v63546;
            if (v63553) {
              v63551 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v63554 = stdlib.div(v63550, v4798);
              v63551 = v63554;
              }
            const v63555 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v1882
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
  const {data: [v2296], secs: v2298, time: v2297, didSend: v1495, from: v2295 } = txn1;
  switch (v2296[0]) {
    case 'Liquidator_liquidateVault0': {
      const v2299 = v2296[1];
      return;
      break;
      }
    case 'Oracle_updatePrice0': {
      const v2629 = v2296[1];
      return;
      break;
      }
    case 'RecoveryToggler_toggleRecoveryMode0': {
      const v2940 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_depositCollateral0': {
      const v3251 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_mintToken0': {
      const v3565 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_returnVaultDebt0': {
      const v3879 = v2296[1];
      return;
      break;
      }
    case 'VaultOwner_withdrawCollateral0': {
      const v4193 = v2296[1];
      return;
      break;
      }
    case 'VaultRedeemer_redeemVault0': {
      const v4507 = v2296[1];
      const v4508 = v4507[stdlib.checkedBigNumberify('./vault.rsh:421:9:spread', stdlib.UInt_max, 0)];
      const v4509 = stdlib.mul(stdlib.checkedBigNumberify('./utils.rsh:92:8:decimal', stdlib.UInt_max, 2), v4508);
      const v4510 = stdlib.div(v4509, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
      const v4511 = stdlib.add(v4508, v4510);
      ;
      ;
      undefined;
      const v4792 = stdlib.div(v4508, v2007);
      const v4793 = stdlib.mul(v4792, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
      const v4796 = stdlib.gt(v4508, stdlib.checkedBigNumberify('./vault.rsh:440:40:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4796, {
        at: './vault.rsh:440:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
        msg: null,
        who: 'VaultRedeemer_redeemVault'
        });
      stdlib.assert(v2172, {
        at: './vault.rsh:441:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
        msg: null,
        who: 'VaultRedeemer_redeemVault'
        });
      const v4798 = stdlib.sub(v2009, v4508);
      const v4799 = stdlib.ge(v4798, stdlib.checkedBigNumberify('./vault.rsh:442:53:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v4799, {
        at: './vault.rsh:442:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
        msg: null,
        who: 'VaultRedeemer_redeemVault'
        });
      stdlib.assert(v4799, {
        at: './vault.rsh:443:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
        msg: null,
        who: 'VaultRedeemer_redeemVault'
        });
      const v4803 = stdlib.ge(v2016, v4793);
      stdlib.assert(v4803, {
        at: './vault.rsh:444:16:application',
        fs: ['at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
        msg: null,
        who: 'VaultRedeemer_redeemVault'
        });
      ;
      const v4811 = stdlib.sub(v2016, v4793);
      ;
      ;
      const v4816 = true;
      const v4817 = await txn1.getOutput('api', 'v4816', ctc3, v4816);
      if (v1495) {
        stdlib.protect(ctc7, await interact.out(v4507, v4817), {
          at: './vault.rsh:421:9:application',
          fs: ['at ./vault.rsh:421:9:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)', 'at ./vault.rsh:448:18:application call to "apiReturn" (defined at: ./vault.rsh:421:9:function exp)', 'at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)'],
          msg: 'out',
          who: 'VaultRedeemer_redeemVault'
          });
        }
      else {
        }
      
      const v63530 = v2007;
      const v63531 = v4798;
      const v63533 = v4811;
      const v63534 = stdlib.gt(v4798, stdlib.checkedBigNumberify('./vault.rsh:207:24:decimal', stdlib.UInt_max, 0));
      const v63535 = stdlib.gt(v4811, stdlib.checkedBigNumberify('./vault.rsh:207:41:decimal', stdlib.UInt_max, 0));
      const v63536 = v63534 ? true : v63535;
      if (v63536) {
        const v63537 = stdlib.mul(v4811, v2007);
        const v63538 = stdlib.div(v63537, stdlib.checkedBigNumberify('./utils.rsh:27:28:decimal', stdlib.UInt_max, 1000000));
        let v63539;
        const v63540 = stdlib.eq(v63538, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:34:12:decimal', stdlib.UInt_max, 0));
        if (v63540) {
          v63539 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:35:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63541 = stdlib.mul(v63538, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          const v63542 = stdlib.div(v63541, v63538);
          const v63543 = stdlib.eq(v63542, stdlib.checkedBigNumberify('./utils.rsh:36:29:decimal', stdlib.UInt_max, 100));
          if (v63543) {
            v63539 = v63541;
            }
          else {
            v63539 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:39:14:decimal', stdlib.UInt_max, 0);
            }
          }
        let v63544;
        const v63545 = stdlib.eq(v63539, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63546 = stdlib.eq(v4798, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:22:decimal', stdlib.UInt_max, 0));
        const v63547 = v63545 ? true : v63546;
        if (v63547) {
          v63544 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63548 = stdlib.div(v63539, v4798);
          v63544 = v63548;
          }
        const v63549 = stdlib.mul(v63538, stdlib.checkedBigNumberify('./utils.rsh:8:38:decimal', stdlib.UInt_max, 80));
        const v63550 = stdlib.div(v63549, stdlib.checkedBigNumberify('./utils.rsh:22:68:decimal', stdlib.UInt_max, 100));
        let v63551;
        const v63552 = stdlib.eq(v63550, stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:25:12:decimal', stdlib.UInt_max, 0));
        const v63553 = v63552 ? true : v63546;
        if (v63553) {
          v63551 = stdlib.checkedBigNumberify('./.reach/rev/@github.com:xBacked-DAO:reach-safe-math:6783364fcdafe267fe3e19db33afa6ae5f9d502d/index.rsh:26:12:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v63554 = stdlib.div(v63550, v4798);
          v63551 = v63554;
          }
        const v63555 = stdlib.add(v2297, stdlib.checkedBigNumberify('./vault.rsh:461:27:decimal', stdlib.UInt_max, 10));
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
// "./vault.rsh:93:10:dot"
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
// "./vault.rsh:93:10:dot"
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
// "./vault.rsh:105:11:dot"
// "[]"
// Nothing
// "./vault.rsh:106:10:application"
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
// "./vault.rsh:128:10:dot"
// "[]"
// Just "sender correct"
// "./vault.rsh:128:10:dot"
// "[]"
load 255
txn Sender
==
assert
// Just "initial debt <= initialMaximumMint"
// "./vault.rsh:136:10:application"
// "[]"
load 250
load 248
<=
assert
// Nothing
// "./vault.rsh:138:10:application"
// "[]"
load 251
int 0
>
assert
// Nothing
// "./vault.rsh:139:10:application"
// "[]"
load 250
int 0
>
assert
// Nothing
// "./vault.rsh:140:10:application"
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
// "./vault.rsh:142:10:application"
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
// "./vault.rsh:143:10:application"
// "[]"
load 247
load 241
==
assert
// Nothing
// "./vault.rsh:144:10:application"
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
// "./vault.rsh:147:16:dot"
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
// "./vault.rsh:153:10:dot"
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
// "./vault.rsh:153:10:dot"
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
// "./vault.rsh:157:11:dot"
// "[]"
// "CheckPay"
// "./vault.rsh:157:11:dot"
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
// "./vault.rsh:157:11:dot"
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
// "./vault.rsh:176:11:dot"
// "[]"
// Just "sender correct"
// "./vault.rsh:176:11:dot"
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
// "./vault.rsh:181:68:dot"
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
// "./vault.rsh:181:68:dot"
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
// "./vault.rsh:384:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:364:9:function exp)]"
load 234
assert
byte base64(AAAAAAAACQ0=)
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
// "./vault.rsh:181:68:dot"
// "[]"
// "CheckPay"
// "./vault.rsh:181:68:dot"
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
byte base64(AAAAAAAACpw=)
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
// "./vault.rsh:181:68:dot"
// "[]"
// "CheckPay"
// "./vault.rsh:181:68:dot"
// "[]"
byte base64(AAAAAAAAC9w=)
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
// "./vault.rsh:181:68:dot"
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
// "./vault.rsh:181:68:dot"
// "[]"
// Just "Cannot deposit 0 collateral tokens"
// "./vault.rsh:357:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)]"
load 239
int 0
>
assert
// Just "You are not the owner of this vault"
// "./vault.rsh:358:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:346:9:function exp)]"
txn Sender
load 253
==
assert
byte base64(AAAAAAAADSE=)
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
// "./vault.rsh:181:68:dot"
// "[]"
// "CheckPay"
// "./vault.rsh:181:68:dot"
// "[]"
// Just "You are not the owner of this vault"
// "./vault.rsh:221:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)]"
txn Sender
load 253
==
assert
load 239
int 0
>
store 238
// Just "You must mint at least 1 token"
// "./vault.rsh:222:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)]"
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
byte base64(AAAAAAAADoc=)
load 227
itob // bool
substring 7 8
concat
log // 9
load 227
dup
bz l73_ifF
// Just "The request mint amount is more than the maximum allowed"
// "./vault.rsh:245:18:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)]"
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
// "./vault.rsh:247:18:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)]"
load 233
load 225
==
assert
// Nothing
// "./vault.rsh:248:18:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)]"
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
// "./vault.rsh:181:68:dot"
// "[]"
// "CheckPay"
// "./vault.rsh:181:68:dot"
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
// "./vault.rsh:277:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)]"
txn Sender
load 253
==
assert
// Nothing
// "./vault.rsh:278:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)]"
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
byte base64(AAAAAAAAD/w=)
int 1
itob // bool
substring 7 8
concat
log // 9
int 1
load 237
bz l81_ifF
// Nothing
// "./vault.rsh:286:18:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:260:9:function exp)]"
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
// "./vault.rsh:181:68:dot"
// "[]"
// "CheckPay"
// "./vault.rsh:181:68:dot"
// "[]"
// Just "You are not the owner of this vault"
// "./vault.rsh:317:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)]"
txn Sender
load 253
==
assert
load 239
int 0
>
store 238
// Nothing
// "./vault.rsh:318:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)]"
load 238
assert
load 239
load 249
<
store 237
// Just "Cannot withdraw more than the balance of this contract"
// "./vault.rsh:319:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)]"
load 237
assert
load 246
int 120
>
store 236
// Just "Vault collateral ratio is not healthy"
// "./vault.rsh:321:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)]"
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
// "./vault.rsh:325:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:294:9:function exp)]"
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
byte base64(AAAAAAAAEWs=)
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
// "./vault.rsh:181:68:dot"
// "[]"
// "CheckPay"
// "./vault.rsh:181:68:dot"
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
// "./vault.rsh:440:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)]"
load 239
int 0
>
assert
// Nothing
// "./vault.rsh:441:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)]"
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
// "./vault.rsh:442:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)]"
load 235
assert
// Nothing
// "./vault.rsh:443:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)]"
load 235
assert
// Nothing
// "./vault.rsh:444:16:application"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:421:9:function exp)]"
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
byte base64(AAAAAAAAEtA=)
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
// "./vault.rsh:462:15:dot"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:461:35:function exp)]"
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
// "./vault.rsh:250:19:dot"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)]"
// "CheckPay"
// "./vault.rsh:250:19:dot"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)]"
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
// "./vault.rsh:250:19:dot"
// "[at ./vault.rsh:181:68:application call to [unknown function] (defined at: ./vault.rsh:208:9:function exp)]"
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
                "name": "v1881",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1882",
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
                "name": "v1912",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1913",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1914",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1915",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1916",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1917",
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
                "name": "v2296",
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
        "name": "v2317",
        "type": "bool"
      }
    ],
    "name": "oe_v2317",
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
        "name": "v2716",
        "type": "tuple"
      }
    ],
    "name": "oe_v2716",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v3036",
        "type": "bool"
      }
    ],
    "name": "oe_v3036",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v3361",
        "type": "bool"
      }
    ],
    "name": "oe_v3361",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v3719",
        "type": "bool"
      }
    ],
    "name": "oe_v3719",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v4092",
        "type": "bool"
      }
    ],
    "name": "oe_v4092",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v4459",
        "type": "bool"
      }
    ],
    "name": "oe_v4459",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v4816",
        "type": "bool"
      }
    ],
    "name": "oe_v4816",
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
                "name": "v1881",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1882",
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
                "name": "v1912",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1913",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1914",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1915",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1916",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1917",
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
                "name": "v2296",
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
  Bytecode: `0x608060405260405162004caa38038062004caa83398101604081905262000026916200019c565b600080554360035560408051825181526020808401511515908201527fcd3784b2810428b9f2b2dd7f396bb870a5f4b96dbfb942b22303c2c03fab95e2910160405180910390a16200007b34156008620000cc565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000c3929190620000f6565b50505062000244565b81620000f25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001049062000207565b90600052602060002090601f01602090048101928262000128576000855562000173565b82601f106200014357805160ff191683800117855562000173565b8280016001018555821562000173579182015b828111156200017357825182559160200191906001019062000156565b506200018192915062000185565b5090565b5b8082111562000181576000815560010162000186565b600060408284031215620001af57600080fd5b604080519081016001600160401b0381118282101715620001e057634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620001fb57600080fd5b60208201529392505050565b600181811c908216806200021c57607f821691505b602082108114156200023e57634e487b7160e01b600052602260045260246000fd5b50919050565b614a5680620002546000396000f3fe6080604052600436106100bd5760003560e01c806358a40f2a1161007957806399de9a081161005657806399de9a08146101c8578063ab53f2c6146101db578063f147248d146101fe578063fb1b3f6e1461021157005b806358a40f2a1461014957806383230757146101a057806396ce2864146101b557005b80630d19a5fb146100c65780631e93b0f1146100d95780632db77e25146100fd578063306ab8141461011057806342082e10146101235780634ce4f2651461013657005b366100c457005b005b6100c46100d4366004613d59565b610224565b3480156100e557600080fd5b506003545b6040519081526020015b60405180910390f35b6100c461010b366004613d71565b61041e565b6100c461011e366004613d59565b6105ea565b6100c4610131366004613d83565b6107e6565b6100c4610144366004613d59565b610bc2565b34801561015557600080fd5b5061015e610d6a565b6040516100f49190600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b3480156101ac57600080fd5b506001546100ea565b6100c46101c3366004613d59565b6114b7565b6100c46101d6366004613d59565b61165a565b3480156101e757600080fd5b506101f0611a0d565b6040516100f4929190613dc1565b6100c461020c366004613d59565b611aaa565b6100c461021f366004613dfb565b611c57565b610234600460005414601d61336a565b61024e8135158061024757506001548235145b601e61336a565b60008080556002805461026090613e0e565b80601f016020809104026020016040519081016040528092919081815260200182805461028c90613e0e565b80156102d95780601f106102ae576101008083540402835291602001916102d9565b820191906000526020600020905b8154815290600101906020018083116102bc57829003601f168201915b50505050508060200190518101906102f19190613f35565b90507f64c05390f66d4c96d69b55a2d6f7bb5135997731e2b63f4a719a786bc0579627826040516103229190613ff3565b60405180910390a161033b81608001513414601b61336a565b8051610353906001600160a01b03163314601c61336a565b61035b6138c6565b81516001600160a01b039081168252602080840151821681840152604080850151818501526060808601518416908501526080808601519085015260a0808601519085015260c0808601519085015260e08086015190850152610100808601518416908501526101208086015190850152610140808601519093169284019290925260056000554360015590516103f491839101614018565b6040516020818303038152906040526002908051906020019061041892919061394d565b50505050565b61042e600160005414600b61336a565b6104488135158061044157506001548235145b600c61336a565b60008080556002805461045a90613e0e565b80601f016020809104026020016040519081016040528092919081815260200182805461048690613e0e565b80156104d35780601f106104a8576101008083540402835291602001916104d3565b820191906000526020600020905b8154815290600101906020018083116104b657829003601f168201915b50505050508060200190518101906104eb91906140d5565b90507f816ff795cc6685d0e03d6da4edbb142a7f154a624730a0f320279276078a30c88260405161051c9190614103565b60405180910390a16105303415600961336a565b61054160208301351515600a61336a565b604080516080810182526000808252602080830182815283850183815260608086019490945286516001600160a01b0316855233909152908601359052909161058e91850190850161413b565b6001600160a01b031660608201526002600055436001556040516103f490829060200181516001600160a01b03908116825260208084015182169083015260408084015190830152606092830151169181019190915260800190565b6105fa600a60005414605761336a565b6106148135158061060d57506001548235145b605861336a565b60008080556002805461062690613e0e565b80601f016020809104026020016040519081016040528092919081815260200182805461065290613e0e565b801561069f5780601f106106745761010080835404028352916020019161069f565b820191906000526020600020905b81548152906001019060200180831161068257829003601f168201915b50505050508060200190518101906106b79190614158565b90507fbc00bef455301cf914c30c8a9af2a81c4e58a53a327cc5726ef84b62ea9c1fc9826040516106e89190613ff3565b60405180910390a16106fc3415605461336a565b61071a610713338360200151846101400151613394565b605561336a565b8051610732906001600160a01b03163314605661336a565b61074a816020015182604001518361018001516133ac565b610762816020015182606001518361016001516133ac565b61076a6139d1565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845190841690820152606080860151855194169381019390935260808501518285018051919091526101a086015181519093019290925281514391015260c08401519051909101526107e1816133c0565b505050565b6107f6600260005414601661336a565b6108108135158061080957506001548235145b601761336a565b60008080556002805461082290613e0e565b80601f016020809104026020016040519081016040528092919081815260200182805461084e90613e0e565b801561089b5780601f106108705761010080835404028352916020019161089b565b820191906000526020600020905b81548152906001019060200180831161087e57829003601f168201915b50505050508060200190518101906108b39190614224565b90506108e76040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b7f77dbc87ef9bbc9106aea47a7b2b644f88b0ca3ce4d6c05e103d740a97779a8998360405161091691906142ae565b60405180910390a161092a3415600d61336a565b8151610942906001600160a01b03163314600e61336a565b610958608084013560408501351115600f61336a565b61096960208401351515601061336a565b61097a60408401351515601161336a565b60408201516109ad90620f424090610996906020870135614328565b6109a09190614347565b606085013514601261336a565b60646109be60506060860135614328565b6109c89190614347565b808252602082018190526109e390608085013514601361336a565b6109f260408401356005614328565b60608201819052604084013590610a0b90600590614347565b1415610a205760608101516040820152610a28565b600060408201525b6040810151610a3d5760006080820152610a55565b6103e88160400151610a4f9190614347565b60808201525b6080810151610a6b9060a085013514601461336a565b610a7c60a08401351515601561336a565b610af660405180610140016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b82516001600160a01b039081168252602080850151821681840152604080860151818501526060808701519093168385015290860135608084015285013560a0808401919091529085013560c0808401919091529085013560e080840191909152610b669190860190860161413b565b6001600160a01b03166101008201528151610120820152600360005543600155604051610b97908290602001614369565b60405160208183030381529060405260029080519060200190610bbb92919061394d565b5050505050565b610bd2600660005414602661336a565b610bec81351580610be557506001548235145b602761336a565b600080805560028054610bfe90613e0e565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2a90613e0e565b8015610c775780601f10610c4c57610100808354040283529160200191610c77565b820191906000526020600020905b815481529060010190602001808311610c5a57829003601f168201915b5050505050806020019051810190610c8f919061440f565b90507f2de542e04768f7d432d52df08943d2fab028221c30dba664ab546be3aae5e4a082604051610cc09190613ff3565b60405180910390a1610cd43415602461336a565b8051610cec906001600160a01b03163314602561336a565b610cf46139d1565b815181516001600160a01b039182169052604080840151835190831660209182015260a085015184519084169083015260c0850151845193166060938401528085015181850180519190915260e0860151815190920191909152805143920191909152818401519051909101526107e1816133c0565b610d9c6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b60016000541415610e5757600060028054610db690613e0e565b80601f0160208091040260200160405190810160405280929190818152602001828054610de290613e0e565b8015610e2f5780601f10610e0457610100808354040283529160200191610e2f565b820191906000526020600020905b815481529060010190602001808311610e1257829003601f168201915b5050505050806020019051810190610e4791906140d5565b9050610e556000600761336a565b505b60026000541415610f1257600060028054610e7190613e0e565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9d90613e0e565b8015610eea5780601f10610ebf57610100808354040283529160200191610eea565b820191906000526020600020905b815481529060010190602001808311610ecd57829003601f168201915b5050505050806020019051810190610f029190614224565b9050610f106000600761336a565b505b60036000541415610fcd57600060028054610f2c90613e0e565b80601f0160208091040260200160405190810160405280929190818152602001828054610f5890613e0e565b8015610fa55780601f10610f7a57610100808354040283529160200191610fa5565b820191906000526020600020905b815481529060010190602001808311610f8857829003601f168201915b5050505050806020019051810190610fbd91906144af565b9050610fcb6000600761336a565b505b6004600054141561108857600060028054610fe790613e0e565b80601f016020809104026020016040519081016040528092919081815260200182805461101390613e0e565b80156110605780601f1061103557610100808354040283529160200191611060565b820191906000526020600020905b81548152906001019060200180831161104357829003601f168201915b50505050508060200190518101906110789190613f35565b90506110866000600761336a565b505b60056000541415611143576000600280546110a290613e0e565b80601f01602080910402602001604051908101604052809291908181526020018280546110ce90613e0e565b801561111b5780601f106110f05761010080835404028352916020019161111b565b820191906000526020600020905b8154815290600101906020018083116110fe57829003601f168201915b50505050508060200190518101906111339190613f35565b90506111416000600761336a565b505b6006600054141561126a5760006002805461115d90613e0e565b80601f016020809104026020016040519081016040528092919081815260200182805461118990613e0e565b80156111d65780601f106111ab576101008083540402835291602001916111d6565b820191906000526020600020905b8154815290600101906020018083116111b957829003601f168201915b50505050508060200190518101906111ee919061440f565b90506112256040805160c081018252600060208201818152928201819052606082018190526080820181905260a082015290815290565b60608083015182515261010083015182516020015260808084015183516040015261012084015183519092019190915260e09092015181519092019190915251919050565b600960005414156113895760006002805461128490613e0e565b80601f01602080910402602001604051908101604052809291908181526020018280546112b090613e0e565b80156112fd5780601f106112d2576101008083540402835291602001916112fd565b820191906000526020600020905b8154815290600101906020018083116112e057829003601f168201915b5050505050806020019051810190611315919061455a565b905061134c6040805160c081018252600060208201818152928201819052606082018190526080820181905260a082015290815290565b60c082015181515261012082015181516020015260e082015181516040015261018082015181516060015260a09091015181516080015251919050565b600a60005414156114a8576000600280546113a390613e0e565b80601f01602080910402602001604051908101604052809291908181526020018280546113cf90613e0e565b801561141c5780601f106113f15761010080835404028352916020019161141c565b820191906000526020600020905b8154815290600101906020018083116113ff57829003601f168201915b50505050508060200190518101906114349190614158565b905061146b6040805160c081018252600060208201818152928201819052606082018190526080820181905260a082015290815290565b60c082015181515261010082015181516020015260e082015181516040015261012082015181516060015260a09091015181516080015251919050565b6114b46000600761336a565b90565b6114c7600960005414605161336a565b6114e1813515806114da57506001548235145b605261336a565b6000808055600280546114f390613e0e565b80601f016020809104026020016040519081016040528092919081815260200182805461151f90613e0e565b801561156c5780601f106115415761010080835404028352916020019161156c565b820191906000526020600020905b81548152906001019060200180831161154f57829003601f168201915b5050505050806020019051810190611584919061455a565b9050611599816101a00151431015605361336a565b7f20946629c27bb4ab46740868cd074b2845a9d6ffb97be0e379492342bc24d525826040516115c89190613ff3565b60405180910390a16115dc3415605061336a565b6115e46139d1565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518551941693810193909352608085015182850180519190915260a086015181519093019290925281514391015260c08401519051909101526107e1816133c0565b61166a600560005414602261336a565b6116848135158061167d57506001548235145b602361336a565b60008080556002805461169690613e0e565b80601f01602080910402602001604051908101604052809291908181526020018280546116c290613e0e565b801561170f5780601f106116e45761010080835404028352916020019161170f565b820191906000526020600020905b8154815290600101906020018083116116f257829003601f168201915b50505050508060200190518101906117279190613f35565b90506117646040518060c0016040528060008152602001600081526020016000815260200160008152602001600015158152602001600081525090565b7f689557114e2e52e056e03b61e6c9aefd10ce977ec8f4368fb29885f113b07d2e836040516117939190613ff3565b60405180910390a16117a73415601f61336a565b6117c46117bd3384606001518560a00151613394565b602061336a565b60208201516117df906001600160a01b03163314602161336a565b8160e001518260a001516117f39190614634565b80825260608301518351611806926133ac565b61181e82606001518361014001518460e001516133ac565b60c0820151611833576000602082015261187a565b60648260c001516118449190614328565b6040820181905260c083015160649161185d9190614347565b1415611872576040810151602082015261187a565b600060208201525b8051156080820152602081015115611896578060800151611899565b60015b156118aa57600060608201526118c1565b805160208201516118bb9190614347565b60608201525b610120820151156118d65780608001516118d9565b60015b156118ea57600060a0820152611902565b80516101208301516118fc9190614347565b60a08201525b61197c60405180610140016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6020808401516001600160a01b039081168352604080860151848401526060808701518316828601526080808801518287015260c0808901519187019190915261010080890151851660a0808901919091526101408a015190951691870191909152865160e087015290860151908501529084015161012084015260066000554360015551610b979183910161464b565b600060606000546002808054611a2290613e0e565b80601f0160208091040260200160405190810160405280929190818152602001828054611a4e90613e0e565b8015611a9b5780601f10611a7057610100808354040283529160200191611a9b565b820191906000526020600020905b815481529060010190602001808311611a7e57829003601f168201915b50505050509050915091509091565b611aba600360005414601961336a565b611ad481351580611acd57506001548235145b601a61336a565b600080805560028054611ae690613e0e565b80601f0160208091040260200160405190810160405280929190818152602001828054611b1290613e0e565b8015611b5f5780601f10611b3457610100808354040283529160200191611b5f565b820191906000526020600020905b815481529060010190602001808311611b4257829003601f168201915b5050505050806020019051810190611b7791906144af565b90507fe92d4e1229145c13e718fdc692a322df4a6700c6bebac0841f0e9f44c56a152982604051611ba89190613ff3565b60405180910390a1611bbc3415601861336a565b611bc46138c6565b81516001600160a01b039081168252602080840151821681840152604080850151818501526060808601518416908501526080808601519085015260a0808601519085015260c0808601519085015260e08086015190850152610100808601519093169284019290925261012080850151908401523361014084015260046000554360015590516103f491839101614018565b611c67600960005414604d61336a565b611c8181351580611c7a57506001548235145b604e61336a565b600080805560028054611c9390613e0e565b80601f0160208091040260200160405190810160405280929190818152602001828054611cbf90613e0e565b8015611d0c5780601f10611ce157610100808354040283529160200191611d0c565b820191906000526020600020905b815481529060010190602001808311611cef57829003601f168201915b5050505050806020019051810190611d24919061455a565b9050611d2e613a31565b611d40826101a001514310604f61336a565b7f8490d388c7dad1abf65f17b4784bd5cc9bf74eeee5d2eb52cc623ae7983a06e183604051611d6f919061472c565b60405180910390a16000611d8960408501602086016147db565b6007811115611d9a57611d9a614703565b141561217a57611db2368490038401604085016147f6565b815260a0820151611dc4906019614328565b6060820181905260a083015190611ddd90601990614347565b146080820181905215611df95760608101516040820152611e01565b600060408201525b6040810151611e1657600060a0820152611e2e565b6103e88160400151611e289190614347565b60a08201525b60a082018051825151101560c083015251611e4a576000611e54565b6001826101800151105b611e5f576000611e69565b606e826101200151105b611e74576000611e7a565b8060c001515b15801560e0830152611ed9578060a001518260a00151611e9a919061481a565b610100820180519190915260208084015182516001600160a01b0390911690820152610120830180516000905291518251820152905190820152611f15565b6101408101805160009081905260208085015183516001600160a01b039091169082015261016084018051929092529151815183015251908201525b60208101515160c0830151611f2a919061481a565b610180820152602081015151611f43903414602861336a565b611f68611f6133846020015184602001516020015160000151613394565b602961336a565b611f778160c00151602a61336a565b7ff8eb8b48db61b0cd3edadab5ac3991fd56eb19f507dc9e0804aa451bd81096158160e00151604051611fae911515815260200190565b60405180910390a18060e00151156120fb57610180810151604051339180156108fc02916000818181858888f19350505050158015611ff1573d6000803e3d6000fd5b50612009826020015183600001518460a001516133ac565b8060800151156120235760608101516101a082015261202c565b60006101a08201525b6101a08101516120435760006101c082015261205d565b6103e8816101a001516120569190614347565b6101c08201525b61207582602001518360600151836101c001516133ac565b61207d6139d1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551941693019290925260808501518184018051919091528051600092019190915251439101526101808201516120e99080614634565b602082015160600152610418816133c0565b6121036139d1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551941693810193909352608086015182850180519190915260a0870151815190930192909252815143910152610180840151905190910152610418816133c0565b600161218c60408501602086016147db565b600781111561219d5761219d614703565b141561243b576121b5368490038401606085016147f6565b6101e08201526121c73415602b61336a565b6121e16121da3384602001516000613394565b602c61336a565b6101e08101515160c08301516121f79190614328565b610200820181905261221057600061022082015261225d565b60648161020001516122229190614328565b610240820181905261020082015160649161223d9190614347565b14156122545761024081015161022082015261225d565b60006102208201525b6102208101511561227357816101400151612276565b60015b156122885760006102608201526122a4565b8160a0015181610220015161229d9190614347565b6102608201525b606460508261020001516122b89190614328565b6122c29190614347565b6102808201819052156122da578161014001516122dd565b60015b156122ef5760006102a082015261230b565b8160a001518161028001516123049190614347565b6102a08201525b60c08201516102c0820180519190915261026082015181516020015261020082015181516040908101919091526102a083015182516060015260a0840151825160800152905190517f21f2dce96e9346d3bd82753a976b1013d501f193167bde77f919693e680816d3916123b391600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b60405180910390a16123c36139d1565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015185519416938101939093526101e08501515182850180519190915260a087015181519093019290925281514391015260c0850151905190910152610418816133c0565b600261244d60408501602086016147db565b600781111561245e5761245e614703565b141561253c576124703415602d61336a565b61248a6124833384602001516000613394565b602e61336a565b604051600181527feb8e0cfacb5a00a326d7c8e69b83aaa63d7491fa5792d9c8f2133f26ab89dc089060200160405180910390a16124c66139d1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551941693810193909352608086015182850180519190915260a087015181519093019290925281514391015260c0850151905190910152610418816133c0565b600361254e60408501602086016147db565b600781111561255f5761255f614703565b14156126905761257736849003840160a085016147f6565b6102e082018190525161258d903414602f61336a565b6125a76125a03384602001516000613394565b603061336a565b6102e0810151516125bb901515603161336a565b6125de82604001516001600160a01b0316336001600160a01b031614603261336a565b604051600181527f9fdac59c193ec0c7de42bdb438e40f81281d90d2117610dea5b7e1887efc3dd49060200160405180910390a161261a6139d1565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015185519416930192909252608085015181840180519190915260a086015181519092019190915251439101526102e08201515160c08401516120e9919061481a565b60046126a260408501602086016147db565b60078111156126b3576126b3614703565b1415612b5e576126cb36849003840160c085016147f6565b6103008201526126dd3415603361336a565b6126f76126f03384602001516000613394565b603461336a565b61271a82604001516001600160a01b0316336001600160a01b031614603561336a565b610300810151511515610320820181905261273690603661336a565b8160a001518261016001511015612754576000610340820152612770565b8160a001518261016001516127699190614634565b6103408201525b61030081015151612782906005614328565b6103808201819052610300820151519061279e90600590614347565b146103a08201819052156127bd576103808101516103608201526127c6565b60006103608201525b6103608101516127dd5760006103c08201526127f7565b6103e88161036001516127f09190614347565b6103c08201525b6103c08101516103008201515161280e9190614634565b6103e0820181905260a0830151612825919061481a565b6104008201526101008201511561284357600061042082015261288e565b60648260e001516128549190614328565b610440820181905260e083015160649161286e9190614347565b14156128855761044081015161042082015261288e565b60006104208201525b610420810151156128a557610400810151156128a8565b60015b156128ba5760006104608201526128d7565b8061040001518161042001516128d09190614347565b6104608201525b6103408101516103008201515111156104808201526104608101516078111561290157600061290b565b6000816103400151115b61291657600061291d565b8061032001515b61292857600061292f565b8061048001515b15156104a082018190526040519081527f666598fc4f58e3f4d3dbbda6f69b77412746da4bf979d48c57ca4266e84ab1569060200160405180910390a1806104a0015115612b5657612987816104800151603761336a565b806103a00151156129a3576103808101516104c08201526129ac565b60006104c08201525b6104c08101516129c35760006104e08201526129dd565b6103e8816104c001516129d69190614347565b6104e08201525b6129f4816104e00151826103c0015114603861336a565b612a006001603961336a565b612a96604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b039081168252602080850151821681840152604080860151831681850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152610120808601516101008501526101808087015191850191909152610300850151516101408501526103c08501516101608501526103e0850151908401526104008401516101a0840152600a600055436001559051610b9791839101614832565b6124c66139d1565b6005612b7060408501602086016147db565b6007811115612b8157612b81614703565b1415612df557612b9936849003840160e085016147f6565b610500820152612bab3415603a61336a565b612bcd612bc633846020015184610500015160000151613394565b603b61336a565b612bf082604001516001600160a01b0316336001600160a01b031614603c61336a565b612c348260a00151826105000151600001511115612c0f576000612c19565b6105008201515115155b612c24576000612c2d565b60008360a00151115b603d61336a565b6020820151825161050083015151612c4d9291906133ac565b6105008101515160a0830151612c639190614634565b610520820181905215610540820152604051600181527f4c53910a73252d962be30e110c35c26d67539ce939b08e834884ef440cabcf1f9060200160405180910390a180610540015115612d7657612cc1816105400151603e61336a565b81604001516001600160a01b03166108fc8360c001519081150290604051600060405180830381858888f19350505050158015612d02573d6000803e3d6000fd5b50612d0b6139d1565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015185519416930192909252608085015181840180519190915280516000920191909152514391015260c08301516120e99080614634565b612d7e6139d1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551941693810193909352608086015182850180519190915261052086015181519093019290925281514391015260c0850151905190910152610418816133c0565b6006612e0760408501602086016147db565b6007811115612e1857612e18614703565b141561310c57612e3136849003840161010085016147f6565b610560820152612e433415603f61336a565b612e5d612e563384602001516000613394565b604061336a565b612e8082604001516001600160a01b0316336001600160a01b031614604161336a565b6105608101515115156105808201819052612e9c90604261336a565b60c082015161056082015151106105a08201819052612ebc90604361336a565b6101208201516078106105c08201819052612ed890604461336a565b6105608101515160c0830151612eee9190614634565b6105e082018190526080830151612f0491614328565b6106008201819052612f19901515604561336a565b610600810151612f30576000610620820152612f7d565b6064816106000151612f429190614328565b6106408201819052610600820151606491612f5d9190614347565b1415612f7457610640810151610620820152612f7d565b60006106208201525b61062081015115612f9357816101400151612f96565b60015b15612fa8576000610660820152612fc4565b8160a00151816106200151612fbd9190614347565b6106608201525b806105800151612fd5576000612fdc565b806105c001515b612fe7576000612ff1565b6078816106600151115b612ffc576000613003565b806105a001515b151561068082018190526040519081527ffbbce3710fb8ccacaa6abba24362d102855fa6a0c7a0cb27b905ea5c1c0e072d9060200160405180910390a180610680015115612b56576040808301516105608301515191516001600160a01b039091169180156108fc02916000818181858888f1935050505015801561308c573d6000803e3d6000fd5b506130956139d1565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518551941693810193909352608086015182850180519190915260a08701518151909301929092528151439101526105e0840151905190910152610418816133c0565b600761311e60408501602086016147db565b600781111561312f5761312f614703565b14156107e15761314836849003840161012085016147f6565b6106a082018190525160649061315f906002614328565b6131699190614347565b6106c082015261317b3415604661336a565b6131ad6131a6338460200151846106c00151856106a00151600001516131a1919061481a565b613394565b604761336a565b60808201516106a082015151620f4240916131c791614347565b6131d19190614328565b6106e08201526106a0810151516131eb901515604861336a565b6131fd6000836080015111604961336a565b6106a08101515160a08301516132139190614634565b6107008201526001610720820181905261322e90604a61336a565b61323e816107200151604b61336a565b613255816106e001518360c001511015604c61336a565b602082015182516106a08301515161326e9291906133ac565b6106e0810151604051339180156108fc02916000818181858888f1935050505015801561329f573d6000803e3d6000fd5b506132b882602001518360600151836106c001516133ac565b604051600181527f3fc204d74f9fb8bb67d3eb3731472eb45f01d5b4e53e049bb53c0c103f2539559060200160405180910390a16132f46139d1565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015185519416930192909252608085015181840180519190915261070085015181519092019190915251439101526106e082015160c08401516120e99190614634565b816133905760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60006133a2838530856136e0565b90505b9392505050565b6133b78383836137ba565b6107e157600080fd5b613413604051806101200160405280600081526020016000815260200160001515815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081525090565b60008260200151602001511161343457600082602001516060015111613437565b60015b156136ca5760208201518051606090910151620f42409161345791614328565b6134619190614347565b80825215604082018190521561347d57600060208201526134be565b805161348b90606490614328565b6060820181905281516064916134a19190614347565b14156134b657606081015160208201526134be565b600060208201525b6020808301518101511560a0830152810151156134df578060a001516134e2565b60015b156134f35760006080820152613511565b816020015160200151816020015161350b9190614347565b60808201525b805160649061352290605090614328565b61352c9190614347565b60c0820181905215613542578060a00151613545565b60015b1561355657600060e0820152613574565b8160200151602001518160c0015161356e9190614347565b60e08201525b600a826020015160400151613589919061481a565b61010080830191909152604080516101c081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905291820181905261012082018190526101408201819052610160820181905261018082018190526101a08201528251516001600160a01b03908116825283516020908101518216818401528451604090810151831681850152855160609081015190931683850152818601805151608080870191909152815184015160a08088019190915291519094015160c080870191909152865160e0808801919091528784015115156101008089019190915295880151610120880152918701511515610140870152860151610160860152850151610180850152918401516101a084015260096000554360015590516103f491839101614906565b6000808055600181905561339090600290613cdb565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391613747916149e7565b60006040518083038185875af1925050503d8060008114613784576040519150601f19603f3d011682016040523d82523d6000602084013e613789565b606091505b509150915061379a8282600161388b565b50808060200190518101906137af9190614a03565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391613819916149e7565b60006040518083038185875af1925050503d8060008114613856576040519150601f19603f3d011682016040523d82523d6000602084013e61385b565b606091505b509150915061386c8282600261388b565b50808060200190518101906138819190614a03565b9695505050505050565b6060831561389a5750816133a5565b8251156138aa5782518084602001fd5b60405163100960cb60e01b815260048101839052602401613387565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681525090565b82805461395990613e0e565b90600052602060002090601f01602090048101928261397b57600085556139c1565b82601f1061399457805160ff19168380011785556139c1565b828001600101855582156139c1579182015b828111156139c15782518255916020019190600101906139a6565b506139cd929150613d18565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001613a2c6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60408051610760810190915260006107408201908152815260208101613a55613d2d565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c082015260e001613a9e604080518082019091526000808252602082015290565b8152602001613aab613d2d565b8152602001613aca604080518082019091526000808252602082015290565b8152602001613ad7613d2d565b8152602001600081526020016000815260200160008152602001613b076040518060200160405280600081525090565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001613b686040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b8152602001613b836040518060200160405280600081525090565b8152602001613b9e6040518060200160405280600081525090565b81526020016000151581526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581526020016000815260200160008152602001613c2a6040518060200160405280600081525090565b815260200160008152602001600015158152602001613c556040518060200160405280600081525090565b81526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600015158152602001613cb76040518060200160405280600081525090565b81526020016000815260200160008152602001600081526020016000151581525090565b508054613ce790613e0e565b6000825580601f10613cf7575050565b601f016020900490600052602060002090810190613d159190613d18565b50565b5b808211156139cd5760008155600101613d19565b604051806040016040528060008152602001613a2c604080518082019091526000808252602082015290565b600060408284031215613d6b57600080fd5b50919050565b600060608284031215613d6b57600080fd5b600060e08284031215613d6b57600080fd5b60005b83811015613db0578181015183820152602001613d98565b838111156104185750506000910152565b8281526040602082015260008251806040840152613de6816060850160208701613d95565b601f01601f1916919091016060019392505050565b60006101408284031215613d6b57600080fd5b600181811c90821680613e2257607f821691505b60208210811415613d6b57634e487b7160e01b600052602260045260246000fd5b604051610160810167ffffffffffffffff81118282101715613e7557634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715613e7557634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff81118282101715613e7557634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715613e7557634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114613d1557600080fd5b8051613f3081613f10565b919050565b60006101608284031215613f4857600080fd5b613f50613e43565b613f5983613f25565b8152613f6760208401613f25565b602082015260408301516040820152613f8260608401613f25565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100613fbd818501613f25565b908201526101208381015190820152610140613fda818501613f25565b908201529392505050565b8015158114613d1557600080fd5b8135815260408101602083013561400981613fe5565b80151560208401525092915050565b81516001600160a01b031681526101608101602083015161404460208401826001600160a01b03169052565b5060408301516040830152606083015161406960608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401516140ad828501826001600160a01b03169052565b50506101208381015190830152610140928301516001600160a01b0316929091019190915290565b6000602082840312156140e757600080fd5b6140ef613e7b565b82516140fa81613f10565b81529392505050565b813581526020808301359082015260608101604083013561412381613f10565b6001600160a01b031660409290920191909152919050565b60006020828403121561414d57600080fd5b81356133a581613f10565b60006101c0828403121561416b57600080fd5b614173613eac565b61417c83613f25565b815261418a60208401613f25565b602082015261419b60408401613f25565b60408201526141ac60608401613f25565b60608201526080838101519082015260a0808401519082015260c0808401519082015260e08084015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a0928301519281019290925250919050565b60006080828403121561423657600080fd5b6040516080810181811067ffffffffffffffff8211171561426757634e487b7160e01b600052604160045260246000fd5b604052825161427581613f10565b8152602083015161428581613f10565b60208201526040838101519082015260608301516142a281613f10565b60608201529392505050565b600060e082019050823582526020830135602083015260408301356040830152606083013560608301526080830135608083015260a083013560a083015260c08301356142fa81613f10565b6001600160a01b031660c09290920191909152919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561434257614342614312565b500290565b60008261436457634e487b7160e01b600052601260045260246000fd5b500490565b81516001600160a01b031681526101408101602083015161439560208401826001600160a01b03169052565b506040830151604083015260608301516143ba60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401516143fe828501826001600160a01b03169052565b505061012092830151919092015290565b6000610140828403121561442257600080fd5b61442a613ede565b61443383613f25565b81526020830151602082015261444b60408401613f25565b6040820152606083015160608201526080830151608082015261447060a08401613f25565b60a082015261448160c08401613f25565b60c082015260e083810151908201526101008084015190820152610120928301519281019290925250919050565b600061014082840312156144c257600080fd5b6144ca613ede565b6144d383613f25565b81526144e160208401613f25565b6020820152604083015160408201526144fc60608401613f25565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100614537818501613f25565b90820152610120928301519281019290925250919050565b8051613f3081613fe5565b60006101c0828403121561456d57600080fd5b614575613eac565b61457e83613f25565b815261458c60208401613f25565b602082015261459d60408401613f25565b60408201526145ae60608401613f25565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101006145e981850161454f565b90820152610120838101519082015261014061460681850161454f565b90820152610160838101519082015261018080840151908201526101a0928301519281019290925250919050565b60008282101561464657614646614312565b500390565b81516001600160a01b03168152610140810160208301516020830152604083015161468160408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a08301516146b060a08401826001600160a01b03169052565b5060c08301516146cb60c08401826001600160a01b03169052565b5060e083015160e083015261010080840151818401525061012080840151818401525092915050565b803560088110613f3057600080fd5b634e487b7160e01b600052602160045260246000fd5b803561472481613fe5565b151590915250565b813581526101408101614741602084016146f4565b6008811061475f57634e487b7160e01b600052602160045260246000fd5b60208301526040838101359083015261477e6060830160608501359052565b61478e6080830160808501614719565b61479e60a0830160a08501359052565b6147ae60c0830160c08501359052565b6147be60e0830160e08501359052565b610100838101359083015261012092830135929091019190915290565b6000602082840312156147ed57600080fd5b6133a5826146f4565b60006020828403121561480857600080fd5b614810613e7b565b9135825250919050565b6000821982111561482d5761482d614312565b500190565b81516001600160a01b031681526101c08101602083015161485e60208401826001600160a01b03169052565b50604083015161487960408401826001600160a01b03169052565b50606083015161489460608401826001600160a01b03169052565b506080838101519083015260a0808401519083015260c0808401519083015260e08084015190830152610100808401519083015261012080840151908301526101408084015190830152610160808401519083015261018080840151908301526101a092830151929091019190915290565b81516001600160a01b031681526101c08101602083015161493260208401826001600160a01b03169052565b50604083015161494d60408401826001600160a01b03169052565b50606083015161496860608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e0830152610100808401516149a58285018215159052565b5050610120838101519083015261014080840151151590830152610160808401519083015261018080840151908301526101a092830151929091019190915290565b600082516149f9818460208701613d95565b9190910192915050565b600060208284031215614a1557600080fd5b81516133a581613fe556fea2646970667358221220f75044a8e181b54ef66a59211e88de2b38d5e975bbce6df979c2ff8d86ae47d064736f6c63430008090033`,
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
